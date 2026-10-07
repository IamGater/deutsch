(function () {
  'use strict';

  /* ================= Константы модели прогресса ================= */

  const LEVELS = ['A1', 'A2', 'B1'];            // уровни, для которых на сайте есть материалы
  const ALL_LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const DAY = 864e5;
  // Через сколько дней слово возвращается на повторение после перехода на этап i
  const INTERVALS = [0, 1, 3, 7, 21, 60];
  // Вклад слова в прогресс в зависимости от этапа: один верный ответ — лишь четверть слова
  const CREDIT = [0, 0.25, 0.6, 1, 1, 1];
  const LEARNED = 3;                            // этап, с которого слово считается выученным
  const PASS = 0.8;                             // порог зачёта темы / теста / диалога
  const WEIGHTS = { words: 0.5, grammar: 0.3, practice: 0.2 };
  // Чего для B2 не хватает сверх материалов сайта (ориентир: ~4000 слов активного запаса)
  const B2_EXTRA = { words: 2500, grammar: 10, practice: 4 };
  const KEY = 'deutsch.progress.v1';

  /* ================= Данные ================= */

  const WORDS = [];
  (function () {
    const seen = new Set();
    LEVELS.forEach(lv => {
      let topic = '';
      String((window.DE_WORDS || {})[lv] || '').split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;
        if (line[0] === '#') { topic = line.slice(1).trim(); return; }
        const p = line.split('|').map(s => s.trim());
        if (p.length < 2 || seen.has(p[0])) return;
        seen.add(p[0]);
        const m = p[0].match(/^(der|die|das) ([A-ZÄÖÜ].*)$/);
        WORDS.push({ id: p[0], de: p[0], ru: p[1], ex: p[2] || '', lv, topic, art: m ? m[1] : null, base: m ? m[2] : p[0] });
      });
    });
  })();

  const GRAMMAR = window.DE_GRAMMAR || [];
  const DIALOGS = window.DE_DIALOGS || [];
  const PRACTICE = [];
  LEVELS.forEach(lv => {
    PRACTICE.push({ id: 'test-' + lv, lv, type: 'test', title: 'Тест уровня ' + lv, sub: '20 вопросов: слова и грамматика' });
    DIALOGS.filter(d => d.lv === lv).forEach(d => PRACTICE.push({ id: d.id, lv, type: 'dialog', title: 'Диалог: ' + d.title, sub: d.scene }));
  });

  /* ================= Состояние ================= */

  const blank = () => ({ words: {}, grammar: {}, practice: {}, log: {}, theme: null, newPer: 10 });
  let S = load();

  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === 'object') return Object.assign(blank(), s);
    } catch (e) { /* повреждённые данные — начинаем с чистого листа */ }
    return blank();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* хранилище недоступно */ }
  }

  /* ================= Утилиты ================= */

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const app = $('#app');
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const today0 = () => new Date().setHours(0, 0, 0, 0);
  const dayKey = d => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const pct = v => Math.round(v * 100) + '%';

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function plural(n, one, few, many) {
    const a = n % 10, b = n % 100;
    if (a === 1 && b !== 11) return one;
    if (a >= 2 && a <= 4 && (b < 12 || b > 14)) return few;
    return many;
  }
  // Сравнение ответов: без регистра, ä = ae, ß = ss
  const norm = s => String(s).toLowerCase().trim().replace(/\s+/g, ' ').replace(/[.!?,]/g, '')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');

  /* ================= Озвучка ================= */

  const canSpeak = 'speechSynthesis' in window;
  let voice = null;
  function pickVoice() {
    const vs = speechSynthesis.getVoices();
    voice = vs.find(v => v.lang === 'de-DE') || vs.find(v => /^de/i.test(v.lang)) || null;
  }
  if (canSpeak) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function speak(text) {
    if (!canSpeak) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'de-DE';
    if (voice) u.voice = voice;
    u.rate = 0.9;
    speechSynthesis.speak(u);
  }
  const SPK_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  const spk = text => canSpeak ? `<button class="spk" type="button" data-say="${esc(text)}" aria-label="Прослушать">${SPK_ICON}</button>` : '';

  /* ================= Модель слова (интервальные повторения) ================= */

  // Эффективный этап: давно не повторявшееся «выученное» слово перестаёт считаться выученным
  function box(w) {
    const r = S.words[w.id];
    if (!r) return 0;
    if (r.b >= LEARNED && Date.now() > r.d + INTERVALS[r.b] * DAY) return LEARNED - 1;
    return r.b;
  }
  const isLearned = w => box(w) >= LEARNED;
  const isDue = w => { const r = S.words[w.id]; return !!r && r.b > 0 && r.d <= Date.now(); };
  const isNew = w => !S.words[w.id] || S.words[w.id].b === 0;
  const modeFor = w => { const b = (S.words[w.id] || {}).b || 0; return b === 0 ? 'de-ru' : b === 1 ? 'ru-de' : 'type'; };

  // Повышение этапа возможно только в день повторения — повторные ответы в тот же день не засчитываются
  function grade(w, ok, jump) {
    const r = S.words[w.id] || (S.words[w.id] = { b: 0, d: 0, ok: 0, bad: 0 });
    const wasLearned = isLearned(w);
    const due = r.b === 0 || r.d <= Date.now();
    let info;
    if (ok) {
      r.ok++;
      if (due) {
        r.b = Math.min(5, jump && r.b === 0 ? 2 : r.b + 1);
        r.d = today0() + INTERVALS[r.b] * DAY;
        const days = INTERVALS[r.b] + ' ' + plural(INTERVALS[r.b], 'день', 'дня', 'дней');
        info = r.b >= LEARNED ? 'Слово выучено. Контрольное повторение через ' + days + '.'
          : 'Этап ' + r.b + ' из ' + LEARNED + '. Следующее повторение через ' + days + '.';
      } else {
        info = 'Закреплено. Этап повысится в день планового повторения.';
      }
    } else {
      r.bad++;
      if (r.b > 0) { r.b = 1; r.d = today0() + DAY; }
      info = 'Слово ещё раз появится в этой тренировке и вернётся на первый этап.';
    }
    S.log[dayKey()] = (S.log[dayKey()] || 0) + 1;
    save();
    return { info, learnedNow: ok && !wasLearned && isLearned(w) };
  }

  function streak() {
    const d = new Date();
    d.setHours(12);
    if (!S.log[dayKey(d)]) d.setDate(d.getDate() - 1);
    let n = 0;
    while (S.log[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ================= Расчёт готовности к уровню ================= */

  function levelStats(L) {
    const lvs = LEVELS.slice(0, ALL_LEVELS.indexOf(L) + 1);
    const b2 = L === 'B2';
    const inLv = x => lvs.includes(x.lv);
    const score = v => Math.min(1, (v || 0) / PASS);
    const part = (items, credit, done, extra) => {
      let c = 0, d = 0;
      items.forEach(x => { c += credit(x); if (done(x)) d++; });
      const total = items.length + extra;
      return { total, done: d, left: total - d, extra, ratio: total ? c / total : 1 };
    };
    const words = part(WORDS.filter(inLv), w => CREDIT[box(w)], isLearned, b2 ? B2_EXTRA.words : 0);
    const grammar = part(GRAMMAR.filter(inLv), g => score(S.grammar[g.id]), g => (S.grammar[g.id] || 0) >= PASS, b2 ? B2_EXTRA.grammar : 0);
    const practice = part(PRACTICE.filter(inLv), p => score(S.practice[p.id]), p => (S.practice[p.id] || 0) >= PASS, b2 ? B2_EXTRA.practice : 0);
    const raw = 100 * (WEIGHTS.words * words.ratio + WEIGHTS.grammar * grammar.ratio + WEIGHTS.practice * practice.ratio);
    const done = !words.left && !grammar.left && !practice.left;
    // 100% показываем только когда выполнено всё; иначе округляем вниз до десятых
    const value = done ? 100 : Math.min(99.9, Math.floor(raw * 10 + 1e-6) / 10);
    return { L, b2, words, grammar, practice, pct: value, done };
  }

  const num = v => String(Math.round(v * 10) / 10).replace('.', ',');

  function remainText(s) {
    if (s.done) return `Уровень <b>${s.L}</b> достигнут: все слова выучены, темы и задания зачтены.`;
    const parts = [];
    if (s.words.left) parts.push(`выучить ${s.words.left} ${plural(s.words.left, 'слово', 'слова', 'слов')}`);
    if (s.grammar.left) parts.push(`пройти ${s.grammar.left} ${plural(s.grammar.left, 'тему', 'темы', 'тем')} грамматики`);
    if (s.practice.left) parts.push(`выполнить ${s.practice.left} ${plural(s.practice.left, 'задание', 'задания', 'заданий')} практики`);
    const list = parts.length > 1 ? parts.slice(0, -1).join(', ') + ' и ' + parts[parts.length - 1] : parts[0];
    return `До уровня ${s.L} осталось: <b>${num(100 - s.pct)}%</b> (осталось ${list}).`;
  }

  function curLevel() {
    const s = LEVELS.map(levelStats).find(x => !x.done);
    return s ? s.L : 'B1';
  }

  /* ================= Общие фрагменты разметки ================= */

  const deHtml = w => w.art ? `<span class="art ${w.art}">${w.art}</span> ${esc(w.base)}` : esc(w.de);
  const wordCard = w => `<div class="wcard"><div class="wcard-de">${deHtml(w)} ${spk(w.de)}</div><div class="wcard-ru">${esc(w.ru)}</div>${w.ex ? `<div class="wcard-ex">${esc(w.ex)} ${spk(w.ex)}</div>` : ''}</div>`;
  const artRow = () => `<div class="arts">${['der', 'die', 'das'].map(a => `<button class="opt" type="button" data-art="${a}">${a}</button>`).join('')}</div>`;
  const umlRow = () => `<div class="uml">${['ä', 'ö', 'ü', 'ß'].map(c => `<button type="button" data-ch="${c}" tabindex="-1">${c}</button>`).join('')}</div>`;
  const resultHtml = (score, text, buttons) => `<div class="result ${score >= PASS ? 'ok' : 'bad'}"><div class="result-pct">${pct(score)}</div><div class="result-title">${score >= PASS ? 'Зачтено' : 'Пока не зачтено'}</div><p class="muted">${text}</p><div class="row">${buttons}</div></div>`;

  function insertChar(inp, ch) {
    const a = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
    const b = inp.selectionEnd == null ? a : inp.selectionEnd;
    inp.value = inp.value.slice(0, a) + ch + inp.value.slice(b);
    inp.focus();
    inp.setSelectionRange(a + 1, a + 1);
  }

  /* ================= Движок вопросов ================= */

  function distract(w) {
    const fits = x => x !== w && x.ru !== w.ru && x.base !== w.base;
    let pool = WORDS.filter(x => x.lv === w.lv && !!x.art === !!w.art && fits(x));
    if (pool.length < 3) pool = WORDS.filter(fits);
    const out = [];
    shuffle(pool).forEach(x => {
      if (out.length < 3 && !out.some(o => o.ru === x.ru || o.base === x.base)) out.push(x);
    });
    return out;
  }

  // Вопрос по слову. mode: 'de-ru' — выбрать перевод, 'ru-de' — выбрать слово (и артикль), 'type' — напечатать
  function renderWordQ(el, w, mode, done) {
    const noun = !!w.art;
    let art = null;

    if (mode === 'type') {
      el.innerHTML = `<div class="q-label">Напишите по-немецки${noun ? ' и выберите артикль' : ''}</div>
        <div class="q-prompt">${esc(w.ru)}</div>
        <div class="q-hint">Первая буква: <b>${esc(w.base[0])}</b> · символов: ${w.base.length}</div>
        ${noun ? artRow() : ''}
        <div class="type-row"><input class="inp" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Слово по-немецки">${umlRow()}</div>
        <div class="warn" hidden>Выберите артикль.</div>
        <button class="btn primary" type="button" data-check>Проверить</button>`;
      const inp = $('input', el);
      const check = () => {
        let v = inp.value.trim();
        const m = noun && v.match(/^(der|die|das)\s+(.+)$/i);
        if (m) { art = art || m[1].toLowerCase(); v = m[2]; }
        if (!v) { inp.focus(); return; }
        if (noun && !art) { $('.warn', el).hidden = false; return; }
        const ok = norm(v) === norm(w.base) && (!noun || art === w.art);
        inp.disabled = true;
        inp.classList.add(norm(v) === norm(w.base) ? 'right' : 'wrong');
        lockArts();
        $('[data-check]', el).remove();
        $('.warn', el).hidden = true;
        done(ok);
      };
      el.onclick = e => {
        const a = e.target.closest('[data-art]'), c = e.target.closest('[data-ch]');
        if (a && !a.disabled) { pickArt(a); inp.focus(); }
        if (c && !inp.disabled) insertChar(inp, c.dataset.ch);
        if (e.target.closest('[data-check]')) check();
      };
      inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); check(); } };
      inp.focus();
      return;
    }

    const deRu = mode === 'de-ru';
    const needArt = !deRu && noun;
    const opts = shuffle([w].concat(distract(w)));
    let pick = null;
    el.innerHTML = `<div class="q-label">${deRu ? 'Выберите перевод' : needArt ? 'Выберите артикль и слово' : 'Выберите слово'}</div>
      <div class="q-prompt">${deRu ? deHtml(w) + ' ' + spk(w.de) : esc(w.ru)}</div>
      ${needArt ? artRow() : ''}
      <div class="opts">${opts.map((o, k) => `<button class="opt" type="button" data-k="${k}">${esc(deRu ? o.ru : o.base)}</button>`).join('')}</div>
      ${needArt ? '<button class="btn primary" type="button" data-check disabled>Проверить</button>' : ''}`;
    if (deRu) speak(w.de);
    const finish = () => {
      $$('[data-k]', el).forEach((b, k) => {
        b.disabled = true;
        b.classList.remove('sel');
        if (opts[k] === w) b.classList.add('right'); else if (k === pick) b.classList.add('wrong');
      });
      lockArts();
      const c = $('[data-check]', el);
      if (c) c.remove();
      done(opts[pick] === w && (!needArt || art === w.art));
    };
    el.onclick = e => {
      const o = e.target.closest('[data-k]'), a = e.target.closest('[data-art]'), c = $('[data-check]', el);
      if (c && e.target.closest('[data-check]')) return finish();
      if (o && !o.disabled) {
        pick = +o.dataset.k;
        if (!needArt) return finish();
        $$('[data-k]', el).forEach(b => b.classList.toggle('sel', b === o));
      }
      if (a && !a.disabled) pickArt(a);
      if (c) c.disabled = !(art && pick != null);
    };

    function pickArt(a) {
      art = a.dataset.art;
      $$('[data-art]', el).forEach(b => b.classList.toggle('sel', b === a));
      const wn = $('.warn', el);
      if (wn) wn.hidden = true;
    }
    function lockArts() {
      $$('[data-art]', el).forEach(b => {
        b.disabled = true;
        b.classList.remove('sel');
        if (b.dataset.art === w.art) b.classList.add('right'); else if (b.dataset.art === art) b.classList.add('wrong');
      });
    }
  }

  // Грамматическое упражнение: e.o — варианты (первый верный), e.a — ответ(ы) для пропуска
  const gramAnswer = e => e.o ? e.o[0] : [].concat(e.a)[0];
  function renderGramQ(el, e, done) {
    const qHtml = filler => esc(e.q).replace('___', filler);
    if (e.o) {
      const opts = shuffle(e.o.slice());
      el.innerHTML = `<div class="q-label">Выберите правильный вариант</div>
        <div class="q-prompt sent">${qHtml('<span class="gap"></span>')}</div>
        <div class="opts ${opts.some(o => o.length > 22) ? 'col' : ''}">${opts.map((o, k) => `<button class="opt" type="button" data-k="${k}">${esc(o)}</button>`).join('')}</div>`;
      el.onclick = ev => {
        const b = ev.target.closest('[data-k]');
        if (!b || b.disabled) return;
        const ok = opts[+b.dataset.k] === e.o[0];
        $$('[data-k]', el).forEach((x, k) => {
          x.disabled = true;
          if (opts[k] === e.o[0]) x.classList.add('right'); else if (x === b) x.classList.add('wrong');
        });
        done(ok);
      };
      return;
    }
    el.innerHTML = `<div class="q-label">Заполните пропуск</div>
      <div class="q-prompt sent">${qHtml('<input class="inp" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false">')}</div>
      <div class="type-row">${umlRow()}</div>
      <button class="btn primary" type="button" data-check>Проверить</button>`;
    const inp = $('input', el);
    const check = () => {
      if (!inp.value.trim()) { inp.focus(); return; }
      const ok = [].concat(e.a).some(a => norm(a) === norm(inp.value));
      inp.disabled = true;
      inp.classList.add(ok ? 'right' : 'wrong');
      $('[data-check]', el).remove();
      done(ok);
    };
    el.onclick = ev => {
      const c = ev.target.closest('[data-ch]');
      if (c && !inp.disabled) insertChar(inp, c.dataset.ch);
      if (ev.target.closest('[data-check]')) check();
    };
    inp.onkeydown = ev => { if (ev.key === 'Enter') { ev.preventDefault(); check(); } };
    inp.focus();
  }

  function renderIntro(el, it, queue, i, next) {
    const w = it.w;
    el.innerHTML = `<div class="q-label">Новое слово · ${w.lv}${w.topic ? ' · ' + esc(w.topic) : ''}</div>
      ${wordCard(w)}
      <div class="row"><button class="btn primary" type="button" data-go>Запомнил, дальше</button><button class="btn" type="button" data-know>Уже знаю — проверить</button></div>`;
    speak(w.de);
    $('[data-go]', el).onclick = next;
    // «Уже знаю»: слово сразу проверяется письменно; верный ответ переводит его на 2-й этап
    $('[data-know]', el).onclick = () => {
      const k = queue.findIndex((x, j) => j > i && x.kind === 'word' && x.w === w);
      const q = k > -1 ? queue.splice(k, 1)[0] : { kind: 'word', w };
      q.mode = 'type';
      q.jump = true;
      queue.splice(i + 1, 0, q);
      next();
    };
    $('[data-go]', el).focus();
  }

  // Последовательно показывает элементы очереди; очередь может пополняться по ходу (повтор ошибок)
  function runQuiz(el, queue, opt) {
    let i = 0, right = 0, total = 0;
    const next = () => {
      if (i >= queue.length) { opt.onDone({ right, total, score: total ? right / total : 0 }); return; }
      const it = queue[i];
      el.innerHTML = `<div class="quiz"><div class="qtop"><div class="bar"><i style="width:${i / queue.length * 100}%"></i></div><span class="qcount">${i + 1} / ${queue.length}</span></div><div class="qbody"></div><div class="qfb"></div></div>`;
      const body = $('.qbody', el), fb = $('.qfb', el);
      const advance = () => { i++; next(); };
      const done = ok => {
        if (!it.retry) { total++; if (ok) right++; }
        const info = opt.onAnswer ? opt.onAnswer(it, ok, queue) : '';
        let detail;
        if (it.kind === 'word') detail = wordCard(it.w);
        else {
          const ans = `<b>${esc(gramAnswer(it.e))}</b>`;
          detail = `<div>${it.e.q.includes('___') ? esc(it.e.q).replace('___', ans) : ans}</div>`;
        }
        fb.innerHTML = `<div class="fb ${ok ? 'ok' : 'bad'}"><div class="fb-head">${ok ? 'Верно' : 'Неверно'}</div>${detail}${info ? `<div class="fb-info">${info}</div>` : ''}</div><button class="btn primary" type="button" data-next>${i + 1 < queue.length ? 'Дальше' : 'Завершить'}</button>`;
        const b = $('[data-next]', fb);
        b.onclick = advance;
        b.focus();
      };
      if (it.kind === 'intro') renderIntro(body, it, queue, i, advance);
      else if (it.kind === 'word') renderWordQ(body, it.w, it.mode || modeFor(it.w), done);
      else renderGramQ(body, it.e, done);
    };
    next();
  }

  /* ================= Экран: обзор ================= */

  let H = {}; // обработчики data-act текущего экрана

  function viewHome() {
    const st = ALL_LEVELS.map(levelStats);
    const reached = st.filter(s => s.done).pop();
    const cur = st.find(s => !s.done);
    const due = WORDS.filter(isDue).length;
    const learned = WORDS.filter(isLearned).length;
    const inWork = WORDS.filter(w => !isNew(w)).length - learned;
    const days = streak();
    const b2max = 100 * (WEIGHTS.words * WORDS.length / (WORDS.length + B2_EXTRA.words)
      + WEIGHTS.grammar * GRAMMAR.length / (GRAMMAR.length + B2_EXTRA.grammar)
      + WEIGHTS.practice * PRACTICE.length / (PRACTICE.length + B2_EXTRA.practice));

    const partRow = (name, p) => `<li><span>${name}</span><div class="bar sm"><i style="width:${p.ratio * 100}%"></i></div><span>${p.done} / ${p.total}</span></li>`;
    const levelCard = s => `<article class="card level ${s.done ? 'done' : ''}">
        <header><span class="lv">${s.L}</span><span class="pct">${num(s.pct)}%</span></header>
        <div class="bar"><i style="width:${s.pct}%"></i></div>
        <p class="remain">${remainText(s)}</p>
        <ul class="parts">${partRow('Слова', s.words)}${partRow('Грамматика', s.grammar)}${partRow('Практика', s.practice)}</ul>
        ${s.b2 ? `<p class="note">Материалы сайта рассчитаны на A1–B1 и покрывают не более ${Math.floor(b2max)}% пути к B2: ещё ${B2_EXTRA.words} слов, ${B2_EXTRA.grammar} тем грамматики и ${B2_EXTRA.practice} задания практики нужно освоить за его пределами.</p>` : ''}
      </article>`;

    app.innerHTML = `
      <section class="card hero">
        <div>
          <div class="eyebrow">Подтверждённый уровень</div>
          <div class="hero-level">${reached ? reached.L : '—'}</div>
          <p class="muted">${cur ? remainText(cur) : ''}</p>
        </div>
        <div>
          <div class="hero-stats">
            <div class="stat"><b>${due}</b><span>к повторению</span></div>
            <div class="stat"><b>${learned}</b><span>выучено слов</span></div>
            <div class="stat"><b>${inWork}</b><span>в процессе</span></div>
            <div class="stat"><b>${days}</b><span>${plural(days, 'день', 'дня', 'дней')} подряд</span></div>
          </div>
          <a class="btn primary" href="#/vocab/train/all">${due ? 'Повторить и учить новые' : 'Начать тренировку'}</a>
        </div>
      </section>

      <h2>Готовность по уровням</h2>
      <div class="levels">${st.map(levelCard).join('')}</div>

      <details class="card how">
        <summary>Как считается прогресс</summary>
        <ul>
          <li>Готовность к уровню = ${WEIGHTS.words * 100}% слова + ${WEIGHTS.grammar * 100}% грамматика + ${WEIGHTS.practice * 100}% практика. Уровни накопительные: в A2 входит весь материал A1, в B1 — A1 и A2.</li>
          <li>Слово считается выученным только после трёх верных ответов в три разных дня: в день знакомства, через 1 день и ещё через 3 дня. Повторные ответы в тот же день этап не повышают.</li>
          <li>Задания усложняются: сначала выбор перевода, затем выбор слова с артиклем, затем письменный ответ.</li>
          <li>До этого слово даёт частичный вклад: 25% после первого этапа, 60% после второго. Ошибка возвращает слово на первый этап.</li>
          <li>Выученные слова приходят на контрольные повторения (через 7, 21 и 60 дней). Если пропустить повторение более чем на его интервал, слово перестаёт считаться выученным, пока вы его не подтвердите.</li>
          <li>Тема грамматики, тест или диалог засчитываются при результате от ${PASS * 100}%; до этого лучший результат учитывается пропорционально.</li>
          <li>Проценты округляются вниз: 100% появляется только когда выполнено всё.</li>
        </ul>
      </details>

      <h2>Настройки</h2>
      <section class="card settings">
        <label class="row"><span>Новых слов за тренировку</span>
          <select class="inp" id="newPer">${[5, 10, 15, 20].map(n => `<option ${n === S.newPer ? 'selected' : ''}>${n}</option>`).join('')}</select>
        </label>
        <div class="row">
          <button class="btn" type="button" data-act="export">Экспорт прогресса</button>
          <button class="btn" type="button" data-act="import">Импорт</button>
          <button class="btn danger" type="button" data-act="reset">Сбросить прогресс</button>
          <input type="file" id="file" accept="application/json,.json" hidden>
        </div>
        <p class="muted small" style="margin:12px 0 0">Прогресс сохраняется автоматически в этом браузере (localStorage).</p>
      </section>`;

    $('#newPer').onchange = e => { S.newPer = +e.target.value; save(); };
    $('#file').onchange = e => {
      const f = e.target.files[0];
      if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const s = JSON.parse(rd.result);
          if (!s || typeof s.words !== 'object' || !s.words) throw new Error('format');
          S = Object.assign(blank(), s);
          save(); applyTheme(); route();
        } catch (err) { alert('Не удалось прочитать файл: это не экспорт прогресса.'); }
      };
      rd.readAsText(f);
    };
    H = {
      export() {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([JSON.stringify(S)], { type: 'application/json' }));
        a.download = 'deutsch-progress-' + dayKey() + '.json';
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
      },
      import() { $('#file').click(); },
      reset() {
        if (!confirm('Удалить весь прогресс? Это действие нельзя отменить.')) return;
        const theme = S.theme;
        S = blank();
        S.theme = theme;
        save(); route();
      }
    };
  }

  /* ================= Экран: словарь ================= */

  function viewVocab(lv) {
    lv = LEVELS.includes(lv) ? lv : curLevel();
    const list = WORDS.filter(w => w.lv === lv);
    app.innerHTML = `
      <div class="page-head"><h1>Словарь</h1>
        <p class="muted">Слово становится выученным после трёх верных ответов в три разных дня. Просмотр списка и карточек на прогресс не влияет.</p></div>
      <div class="tabs">${LEVELS.map(l => { const ws = WORDS.filter(w => w.lv === l); return `<a class="tab ${l === lv ? 'active' : ''}" href="#/vocab/${l}">${l}<small>${ws.filter(isLearned).length} / ${ws.length}</small></a>`; }).join('')}</div>
      <div class="toolbar">
        <a class="btn primary" href="#/vocab/train/${lv}">Тренировка ${lv}</a>
        <a class="btn" href="#/vocab/cards/${lv}">Карточки</a>
        <input class="inp grow" id="q" type="search" placeholder="Поиск по слову или переводу">
        <select class="inp" id="st"><option value="all">Все слова</option><option value="new">Новые</option><option value="work">В процессе</option><option value="due">Пора повторить</option><option value="done">Выученные</option></select>
      </div>
      <div class="card wlist" id="wl"></div>`;

    const draw = () => {
      const q = $('#q').value.trim().toLowerCase(), st = $('#st').value, now = Date.now();
      let topic = null, html = '';
      list.forEach(w => {
        const b = box(w);
        if (q && !w.de.toLowerCase().includes(q) && !w.ru.toLowerCase().includes(q)) return;
        if (st === 'new' && !isNew(w)) return;
        if (st === 'work' && (isNew(w) || b >= LEARNED)) return;
        if (st === 'due' && !isDue(w)) return;
        if (st === 'done' && b < LEARNED) return;
        if (w.topic !== topic) { topic = w.topic; html += `<div class="wtopic">${esc(topic)}</div>`; }
        const r = S.words[w.id];
        let when = '';
        if (r && r.b > 0) {
          const d = Math.ceil((r.d - now) / DAY);
          when = d <= 0 ? 'пора повторить' : 'через ' + d + ' ' + plural(d, 'день', 'дня', 'дней');
        }
        html += `<div class="wrow" data-act="row">${spk(w.de) || '<span></span>'}<span class="de">${deHtml(w)}</span><span class="ru">${esc(w.ru)}</span>
          <span class="wmeta">${when}<span class="dots ${b >= LEARNED ? 'full' : ''}" title="Этап ${Math.min(b, LEARNED)} из ${LEARNED}">${[1, 2, 3].map(k => `<i class="${b >= k ? 'on' : ''}"></i>`).join('')}</span></span>
          ${w.ex ? `<span class="ex">${esc(w.ex)} ${spk(w.ex)}</span>` : ''}</div>`;
      });
      $('#wl').innerHTML = html || '<div class="empty">Ничего не найдено.</div>';
    };
    $('#q').oninput = draw;
    $('#st').onchange = draw;
    H = { row(t, e) { if (!e.target.closest('.spk')) t.classList.toggle('open'); } };
    draw();
  }

  function viewCards(lv) {
    lv = LEVELS.includes(lv) ? lv : curLevel();
    const list = WORDS.filter(w => w.lv === lv);
    let i = 0, open = false;
    const draw = () => {
      const w = list[i];
      app.innerHTML = `
        <div class="page-head"><a class="back" href="#/vocab/${lv}">← Словарь ${lv}</a><h1>Карточки ${lv}</h1>
          <p class="muted">Свободный просмотр: на прогресс не влияет. Чтобы слова засчитывались, используйте тренировку.</p></div>
        <div class="card flash" data-act="flip">
          <div class="q-label">${esc(w.topic)}</div>
          <div class="wcard-de">${deHtml(w)} ${spk(w.de)}</div>
          ${open ? `<div class="back-side"><div class="wcard-ru">${esc(w.ru)}</div>${w.ex ? `<div class="wcard-ex">${esc(w.ex)} ${spk(w.ex)}</div>` : ''}</div>` : '<div class="hint">Нажмите, чтобы увидеть перевод</div>'}
        </div>
        <div class="row center">
          <button class="btn" type="button" data-act="prev">← Назад</button>
          <span class="muted small">${i + 1} / ${list.length}</span>
          <button class="btn" type="button" data-act="next">Вперёд →</button>
          <button class="btn" type="button" data-act="rand">Случайная</button>
        </div>`;
    };
    const go = k => { i = (k + list.length) % list.length; open = false; draw(); speak(list[i].de); };
    H = {
      flip(t, e) { if (e.target.closest('.spk')) return; open = !open; draw(); },
      prev() { go(i - 1); },
      next() { go(i + 1); },
      rand() { go(Math.floor(Math.random() * list.length)); }
    };
    draw();
  }

  function viewTrain(scope) {
    scope = LEVELS.includes(scope) ? scope : 'all';
    const pool = WORDS.filter(w => scope === 'all' || w.lv === scope);
    const due = pool.filter(isDue).sort((a, b) => S.words[a.id].d - S.words[b.id].d).slice(0, 30);
    const fresh = pool.filter(isNew).slice(0, S.newPer);
    const head = `<div class="page-head"><a class="back" href="#/vocab${scope === 'all' ? '' : '/' + scope}">← Словарь</a><h1>Тренировка${scope === 'all' ? '' : ' ' + scope}</h1></div>`;

    if (!due.length && !fresh.length) {
      const waiting = pool.filter(w => !isNew(w) && !isLearned(w)).length;
      app.innerHTML = head + `<div class="card empty"><p><b>На сегодня всё сделано.</b></p><p>Новых слов в этом разделе не осталось, а повторения ещё не подошли${waiting ? ` (ждут своего дня: ${waiting})` : ''}. Этап слова повышается только в день планового повторения — возвращайтесь завтра.</p><a class="btn" href="#/">К обзору</a></div>`;
      return;
    }

    const queue = shuffle(due.map(w => ({ kind: 'word', w, mode: modeFor(w) })));
    // Новые слова идут блоками по 5: сначала знакомство, затем проверка
    for (let k = 0; k < fresh.length; k += 5) {
      const chunk = fresh.slice(k, k + 5);
      chunk.forEach(w => queue.push({ kind: 'intro', w }));
      shuffle(chunk.slice()).forEach(w => queue.push({ kind: 'word', w, mode: 'de-ru' }));
    }
    let learnedNow = 0;
    app.innerHTML = head + '<div class="card" id="quiz"></div>';
    runQuiz($('#quiz'), queue, {
      onAnswer(it, ok, q) {
        const res = grade(it.w, ok, it.jump);
        if (res.learnedNow) learnedNow++;
        if (!ok) q.push({ kind: 'word', w: it.w, mode: it.mode, retry: true });
        return res.info;
      },
      onDone(res) {
        const more = pool.some(isNew);
        $('#quiz').innerHTML = `<div class="result ok"><div class="result-pct">${res.right} / ${res.total}</div><div class="result-title">Тренировка завершена</div>
          <p class="muted">Повторено: ${due.length}. Новых слов начато: ${fresh.length}. Выучено за тренировку: ${learnedNow}.</p>
          <div class="row">${more ? '<button class="btn" type="button" data-act="again">Ещё новые слова</button>' : ''}<a class="btn primary" href="#/">К обзору</a></div></div>`;
      }
    });
    H = { again() { route(); } };
  }

  /* ================= Экран: грамматика ================= */

  const stateLabel = v => v == null ? 'не начато' : v >= PASS ? '✓ ' + pct(v) : 'лучший результат ' + pct(v);

  function itemList(items, store, href) {
    return LEVELS.map(lv => {
      const its = items.filter(x => x.lv === lv);
      const done = its.filter(x => (store[x.id] || 0) >= PASS).length;
      return `<div class="lvhead"><h2>${lv}</h2><span class="badge ${done === its.length ? 'ok' : ''}">${done} / ${its.length}</span></div>
        <div class="list">${its.map((x, k) => `<a class="item ${(store[x.id] || 0) >= PASS ? 'passed' : ''}" href="${href(x)}"><span class="num">${k + 1}</span><span class="ttl">${esc(x.title)}${x.sub ? `<small>${esc(x.sub)}</small>` : ''}</span><span class="state">${stateLabel(store[x.id])}</span></a>`).join('')}</div>`;
    }).join('');
  }

  function viewGrammar() {
    app.innerHTML = `<div class="page-head"><h1>Грамматика</h1><p class="muted">Каждая тема — правило и упражнения. Тема засчитывается при результате от ${PASS * 100}%.</p></div>`
      + itemList(GRAMMAR, S.grammar, g => '#/grammar/' + g.id);
  }

  function viewLesson(id) {
    const g = GRAMMAR.find(x => x.id === id);
    if (!g) return viewGrammar();
    const nextG = GRAMMAR[GRAMMAR.indexOf(g) + 1];
    const best = S.grammar[g.id];
    app.innerHTML = `
      <div class="page-head"><a class="back" href="#/grammar">← Все темы</a></div>
      <article class="card lesson"><span class="badge">${g.lv}</span><h1 style="margin-top:8px">${esc(g.title)}</h1><div class="rules">${g.html}</div></article>
      <section class="card" id="quiz">
        <h2 style="margin-top:0">Упражнения</h2>
        <p class="muted">${g.ex.length} ${plural(g.ex.length, 'задание', 'задания', 'заданий')}. Для зачёта нужно ${PASS * 100}% верных ответов. Сейчас: ${stateLabel(best)}.</p>
        <button class="btn primary" type="button" data-act="start">${best == null ? 'Начать' : 'Пройти ещё раз'}</button>
      </section>`;
    H = {
      start() {
        const el = $('#quiz');
        runQuiz(el, shuffle(g.ex.slice()).map(e => ({ kind: 'gram', e })), {
          onDone(res) {
            S.grammar[g.id] = Math.max(S.grammar[g.id] || 0, res.score);
            S.log[dayKey()] = (S.log[dayKey()] || 0) + 1;
            save();
            el.innerHTML = resultHtml(res.score, `Верно ${res.right} из ${res.total}. ${res.score >= PASS ? 'Тема засчитана.' : 'Перечитайте правило и попробуйте снова.'}`,
              `<button class="btn" type="button" data-act="start">Ещё раз</button>${nextG ? `<a class="btn primary" href="#/grammar/${nextG.id}">Следующая тема</a>` : '<a class="btn primary" href="#/grammar">К списку тем</a>'}`);
          }
        });
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  /* ================= Экран: практика ================= */

  function viewPractice() {
    app.innerHTML = `<div class="page-head"><h1>Практика</h1><p class="muted">Тесты проверяют слова и грамматику уровня, диалоги — умение выбрать уместную и грамотную реплику. Зачёт — от ${PASS * 100}%.</p></div>`
      + itemList(PRACTICE, S.practice, p => p.type === 'test' ? '#/practice/test/' + p.lv : '#/practice/dialog/' + p.id);
  }

  function savePractice(id, score) {
    S.practice[id] = Math.max(S.practice[id] || 0, score);
    S.log[dayKey()] = (S.log[dayKey()] || 0) + 1;
    save();
  }

  function viewTest(lv) {
    if (!LEVELS.includes(lv)) return viewPractice();
    const ws = shuffle(WORDS.filter(w => w.lv === lv)).slice(0, 10).map((w, k) => ({ kind: 'word', w, mode: k % 2 ? 'ru-de' : 'de-ru' }));
    const gs = shuffle(GRAMMAR.filter(g => g.lv === lv).reduce((a, g) => a.concat(g.ex), [])).slice(0, 10).map(e => ({ kind: 'gram', e }));
    app.innerHTML = `<div class="page-head"><a class="back" href="#/practice">← Практика</a><h1>Тест уровня ${lv}</h1><p class="muted">Вопросы каждый раз выбираются случайно. Ответы в тесте не влияют на этапы слов.</p></div><div class="card" id="quiz"></div>`;
    runQuiz($('#quiz'), shuffle(ws.concat(gs)), {
      onDone(res) {
        savePractice('test-' + lv, res.score);
        $('#quiz').innerHTML = resultHtml(res.score, `Верно ${res.right} из ${res.total}.`, '<button class="btn" type="button" data-act="again">Пройти ещё раз</button><a class="btn primary" href="#/practice">К практике</a>');
      }
    });
    H = { again() { route(); } };
  }

  function viewDialog(id) {
    const d = DIALOGS.find(x => x.id === id);
    if (!d) return viewPractice();
    const sp = s => { const p = s.split('|'); return { de: p[0], ru: p[1] || '' }; };
    let i = 0, turns = 0, mistakes = 0, erred = false;
    app.innerHTML = `
      <div class="page-head"><a class="back" href="#/practice">← Практика</a><h1>${esc(d.title)}</h1><p class="muted">${esc(d.scene)} Выбирайте грамматически верную реплику — засчитывается ответ с первой попытки.</p></div>
      <div class="card"><label class="chk"><input type="checkbox" id="tr"> Показывать перевод</label><div class="chat" id="chat"></div><div id="reply"></div></div>`;
    const chat = $('#chat'), reply = $('#reply');
    $('#tr').onchange = e => chat.classList.toggle('show-ru', e.target.checked);
    const bubble = (t, me) => chat.insertAdjacentHTML('beforeend', `<div class="bub ${me ? 'me' : ''}"><div>${esc(t.de)} ${spk(t.de)}</div>${t.ru ? `<div class="ru">${esc(t.ru)}</div>` : ''}</div>`);
    const step = () => {
      if (i >= d.turns.length) {
        const score = turns ? (turns - mistakes) / turns : 0;
        savePractice(d.id, score);
        reply.innerHTML = resultHtml(score, `Реплик с первой попытки: ${turns - mistakes} из ${turns}.`, '<button class="btn" type="button" data-act="again">Пройти ещё раз</button><a class="btn primary" href="#/practice">К практике</a>');
        return;
      }
      const t = d.turns[i];
      if (typeof t === 'string') {
        const x = sp(t);
        bubble(x, false);
        if (i > 0) speak(x.de);
        i++;
        return step();
      }
      const right = sp(t[0]), opts = shuffle(t.map(sp));
      turns++;
      erred = false;
      reply.innerHTML = `<div class="q-label">Ваша реплика</div><div class="opts col">${opts.map((o, k) => `<button class="opt" type="button" data-k="${k}">${esc(o.de)}</button>`).join('')}</div>`;
      reply.onclick = e => {
        const b = e.target.closest('[data-k]');
        if (!b || b.disabled) return;
        if (opts[+b.dataset.k].de === right.de) {
          reply.onclick = null;
          reply.innerHTML = '';
          bubble(right, true);
          i++;
          step();
        } else {
          b.classList.add('wrong');
          b.disabled = true;
          if (!erred) { erred = true; mistakes++; }
        }
      };
    };
    H = { again() { route(); } };
    step();
  }

  /* ================= Тема, маршрутизация, события ================= */

  function applyTheme() {
    document.documentElement.dataset.theme = S.theme || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function route() {
    if (canSpeak) speechSynthesis.cancel();
    const p = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/');
    const root = p[0] || 'home';
    $$('.nav a').forEach(a => a.classList.toggle('active', a.dataset.root === root));
    H = {};
    window.scrollTo(0, 0);
    if (root === 'vocab') {
      if (p[1] === 'train') viewTrain(p[2]);
      else if (p[1] === 'cards') viewCards(p[2]);
      else viewVocab(p[1]);
    } else if (root === 'grammar') {
      if (p[1]) viewLesson(p[1]); else viewGrammar();
    } else if (root === 'practice') {
      if (p[1] === 'test') viewTest(p[2]);
      else if (p[1] === 'dialog') viewDialog(p[2]);
      else viewPractice();
    } else viewHome();
  }

  document.addEventListener('click', e => {
    const say = e.target.closest('[data-say]');
    if (say) { speak(say.dataset.say); return; }
    const act = e.target.closest('[data-act]');
    if (act && H[act.dataset.act]) H[act.dataset.act](act, e);
  });
  $('#theme').onclick = () => {
    S.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    save();
    applyTheme();
  };
  window.addEventListener('hashchange', route);

  applyTheme();
  route();
})();
