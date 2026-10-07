// Грамматика B1: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_B1 = [
  {
    id: 'b1-praeteritum',
    level: 'B1',
    title: 'Präteritum: правильные и сильные глаголы',
    rule: `
      <p>Präteritum — время письменного повествования: рассказы, новости, биографии.</p>
      <ul>
        <li>Правильные глаголы: основа + <b>-te-</b> + окончание: machen → ich mach<b>te</b>, du mach<b>test</b>, wir mach<b>ten</b>. После -t / -d: warten → wart<b>ete</b>.</li>
        <li>Сильные глаголы меняют корень, а формы <i>ich</i> и <i>er/sie/es</i> не имеют окончания.</li>
        <li>Смешанные: изменение корня + -te: kennen → kannte, bringen → brachte, denken → dachte, wissen → wusste.</li>
      </ul>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>gehen</th><th>kommen</th><th>sehen</th><th>fahren</th><th>geben</th><th>nehmen</th><th>bleiben</th><th>schreiben</th></tr>
          <tr><td>ging</td><td>kam</td><td>sah</td><td>fuhr</td><td>gab</td><td>nahm</td><td>blieb</td><td>schrieb</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { question: 'Er ___ jeden Tag zur Arbeit. (gehen)', answer: 'ging' },
      { question: 'Wir ___ lange auf den Bus. (warten)', answer: 'warteten' },
      { question: 'Maria ___ einen Brief. (schreiben)', answer: 'schrieb' },
      { question: 'Die Kinder ___ im Garten.', options: ['spielten', 'spielte', 'gespielt'] },
      { question: 'Plötzlich ___ ein Mann ins Zimmer.', options: ['kam', 'kamt', 'kommte'] },
      { question: 'Ich ___ ihn sofort. (erkennen)', answer: 'erkannte' }
    ]
  },
  {
    id: 'b1-konjunktiv2',
    level: 'B1',
    title: 'Сослагательное наклонение (Konjunktiv II)',
    rule: `
      <p>Konjunktiv II выражает нереальное условие, желание, совет и вежливую просьбу.</p>
      <ul>
        <li>Большинство глаголов: <b>würde</b> + инфинитив: Ich <b>würde</b> gern mehr <b>reisen</b>.</li>
        <li>Собственные формы у sein, haben и модальных:</li>
      </ul>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>sein</th><th>haben</th><th>können</th><th>müssen</th><th>sollen</th><th>werden</th></tr>
          <tr><td>wäre</td><td>hätte</td><td>könnte</td><td>müsste</td><td>sollte</td><td>würde</td></tr>
        </table>
      </div>
      <p class="rule-example">Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich mehr lesen. — Если бы у меня было время, я бы больше читал.<br>
        <b>Könnten</b> Sie mir bitte helfen? — Не могли бы вы мне помочь?<br>
        Du <b>solltest</b> mehr schlafen. — Тебе следовало бы больше спать.</p>
    `,
    exercises: [
      { question: 'Wenn ich Zeit ___, würde ich mehr lesen. (haben)', answer: 'hätte' },
      { question: 'An deiner Stelle ___ ich zum Arzt gehen.', options: ['würde', 'wurde', 'werde'] },
      { question: '___ Sie mir bitte helfen? (können)', answer: 'könnten' },
      { question: 'Wenn ich reich ___, würde ich eine Weltreise machen. (sein)', answer: 'wäre' },
      { question: 'Du ___ mehr schlafen.', options: ['solltest', 'solltet', 'sollen'] },
      { question: 'Ich ___ gern einen Kaffee. (haben)', answer: 'hätte' }
    ]
  },
  {
    id: 'b1-passiv',
    level: 'B1',
    title: 'Страдательный залог (Passiv)',
    rule: `
      <p>Passiv используют, когда важно действие, а не тот, кто его совершает. Формула: <b>werden</b> + <b>Partizip II</b>.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>время</th><th>пример</th></tr>
          <tr><td>Präsens</td><td>Das Haus <b>wird</b> gebaut.</td></tr>
          <tr><td>Präteritum</td><td>Das Haus <b>wurde</b> gebaut.</td></tr>
          <tr><td>Perfekt</td><td>Das Haus <b>ist</b> gebaut <b>worden</b>.</td></tr>
          <tr><td>с модальным глаголом</td><td>Das Haus <b>muss</b> gebaut <b>werden</b>.</td></tr>
        </table>
      </div>
      <p>Действующее лицо вводится предлогом <b>von</b> + Dativ: Der Roman wurde <b>von</b> einem jungen Autor geschrieben.</p>
    `,
    exercises: [
      { question: 'Das Haus ___ gerade renoviert.', options: ['wird', 'hat', 'werdet'] },
      { question: 'Die Briefe ___ gestern verschickt. (werden, Präteritum)', answer: 'wurden' },
      { question: 'Das Auto muss repariert ___.', answer: 'werden' },
      { question: 'Hier ___ Deutsch gesprochen.', options: ['wird', 'werden', 'worden'] },
      { question: 'Der Roman wurde ___ einem jungen Autor geschrieben.', options: ['von', 'bei', 'mit'] },
      { question: 'Die Tür wird um 8 Uhr ___. (öffnen)', answer: 'geöffnet' }
    ]
  },
  {
    id: 'b1-relativsaetze',
    level: 'B1',
    title: 'Относительные придаточные (Relativsätze)',
    rule: `
      <p>Относительное местоимение («который») совпадает по роду и числу со словом, к которому относится, а его падеж зависит от роли внутри придаточного. Глагол — в конце.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>мужской</th><th>женский</th><th>средний</th><th>мн. число</th></tr>
          <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Akkusativ</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td><b>denen</b></td></tr>
        </table>
      </div>
      <p class="rule-example">Das ist der Mann, <b>der</b> nebenan wohnt. (он живёт — Nominativ)<br>
        Das ist der Film, <b>den</b> ich gesehen habe. (я видел его — Akkusativ)<br>
        Die Kollegen, mit <b>denen</b> ich arbeite, sind nett. (предлог стоит перед местоимением)</p>
    `,
    exercises: [
      { question: 'Das ist der Mann, ___ nebenan wohnt.', answer: 'der' },
      { question: 'Das ist der Film, ___ ich gestern gesehen habe.', answer: 'den' },
      { question: 'Die Frau, ___ ich geholfen habe, ist meine Nachbarin.', options: ['der', 'die', 'den'] },
      { question: 'Das Buch, ___ auf dem Tisch liegt, gehört mir.', answer: 'das' },
      { question: 'Die Kollegen, mit ___ ich arbeite, sind nett.', options: ['denen', 'den', 'die'] },
      { question: 'Das ist die Stadt, in ___ ich geboren bin.', options: ['der', 'die', 'dem'] }
    ]
  },
  {
    id: 'b1-genitiv',
    level: 'B1',
    title: 'Родительный падеж (Genitiv)',
    rule: `
      <p>Genitiv отвечает на вопрос <b>wessen?</b> (чей?) и выражает принадлежность.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>мужской</th><th>женский</th><th>средний</th><th>мн. число</th></tr>
          <tr><td>Genitiv</td><td>des / eines + <b>-(e)s</b></td><td>der / einer</td><td>des / eines + <b>-(e)s</b></td><td>der</td></tr>
        </table>
      </div>
      <p class="rule-example">das Auto <b>des</b> Vater<b>s</b>, die Tasche <b>der</b> Lehrerin, am Ende <b>des</b> Jahr<b>es</b></p>
      <p>Предлоги с Genitiv: <b>wegen</b> (из-за), <b>während</b> (во время), <b>trotz</b> (несмотря на), <b>statt</b> (вместо), <b>innerhalb</b> (в пределах), <b>außerhalb</b> (за пределами).</p>
    `,
    exercises: [
      { question: 'Das ist das Auto ___ Vaters. (mein)', answer: 'meines' },
      { question: '___ des Regens blieben wir zu Hause.', options: ['Wegen', 'Bei', 'Seit'] },
      { question: 'Trotz ___ schlechten Wetters gingen wir spazieren. (das)', answer: 'des' },
      { question: 'Die Tasche ___ Lehrerin ist schwarz. (die)', answer: 'der' },
      { question: 'Während ___ Urlaubs habe ich viel gelesen.', options: ['des', 'dem', 'den'] },
      { question: 'Am Ende des ___ gab es Applaus. (Konzert)', answer: 'Konzerts', alsoCorrect: ['Konzertes'] }
    ]
  },
  {
    id: 'b1-infinitiv-zu',
    level: 'B1',
    title: 'Инфинитив с zu, um … zu, ohne … zu',
    rule: `
      <ul>
        <li>После многих глаголов и выражений (versuchen, vergessen, anfangen, hoffen, Lust haben, Zeit haben, es ist wichtig…) инфинитив употребляется с <b>zu</b>: Ich habe vergessen, Brot <b>zu kaufen</b>.</li>
        <li>У глаголов с отделяемой приставкой <b>zu</b> встаёт в середину: an<b>zu</b>rufen, ein<b>zu</b>kaufen.</li>
        <li><b>um … zu</b> — цель («чтобы»): Er lernt Deutsch, <b>um</b> in Wien <b>zu</b> studieren.</li>
        <li><b>ohne … zu</b> — «не сделав»: Sie ging, <b>ohne</b> ein Wort <b>zu</b> sagen.</li>
        <li>После модальных глаголов <b>zu</b> не ставится: Ich muss arbeiten.</li>
      </ul>
    `,
    exercises: [
      { question: 'Ich habe vergessen, dich ___. (anrufen)', answer: 'anzurufen' },
      { question: 'Er lernt Deutsch, ___ in Deutschland zu studieren.', options: ['um', 'damit', 'für'] },
      { question: 'Es ist wichtig, pünktlich ___ sein.', answer: 'zu' },
      { question: 'Выберите правильное предложение:', options: ['Ich muss heute lange arbeiten.', 'Ich muss heute lange zu arbeiten.', 'Ich muss zu arbeiten heute lange.'] },
      { question: 'Er verließ das Haus, ___ sich zu verabschieden.', options: ['ohne', 'dass', 'weil'] },
      { question: 'Hast du Lust, ins Kino ___ gehen?', answer: 'zu' }
    ]
  },
  {
    id: 'b1-futur',
    level: 'B1',
    title: 'Будущее время (Futur I)',
    rule: `
      <p>Futur I образуется из <b>werden</b> (на втором месте) и <b>инфинитива</b> (в конце). Оно выражает планы, прогнозы, обещания и предположения.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>ich</th><th>du</th><th>er / sie / es</th><th>wir</th><th>ihr</th><th>sie / Sie</th></tr>
          <tr><td>werde</td><td>wirst</td><td>wird</td><td>werden</td><td>werdet</td><td>werden</td></tr>
        </table>
      </div>
      <p class="rule-example">Ich <b>werde</b> dich morgen <b>anrufen</b>.<br>
        Er <b>wird</b> wohl noch im Büro <b>sein</b>. — Он, наверное, ещё в офисе.</p>
      <p>Если время понятно из контекста, в разговорной речи чаще используют Präsens: Morgen fahre ich nach Köln.</p>
    `,
    exercises: [
      { question: 'Ich ___ dich morgen anrufen. (werden)', answer: 'werde' },
      { question: 'Es ___ morgen regnen.', options: ['wird', 'werdet', 'wirst'] },
      { question: '___ du nächstes Jahr umziehen? (werden)', answer: 'wirst' },
      { question: 'Выберите правильное предложение:', options: ['Wir werden im Sommer nach Italien fahren.', 'Wir werden fahren im Sommer nach Italien.', 'Wir werden im Sommer nach Italien gefahren.'] },
      { question: 'Die Kinder ___ bald groß sein.', options: ['werden', 'wird', 'werdet'] },
      { question: 'Ihr ___ es nicht bereuen. (werden)', answer: 'werdet' }
    ]
  },
  {
    id: 'b1-konnektoren',
    level: 'B1',
    title: 'Союзы: obwohl, trotzdem, deshalb, als, wenn, damit',
    rule: `
      <ul>
        <li><b>obwohl</b> (хотя) — придаточное, глагол в конце: Obwohl es <b>regnete</b>, gingen wir spazieren.</li>
        <li><b>trotzdem</b> (несмотря на это) и <b>deshalb</b> (поэтому) — наречия в главном предложении, после них сразу глагол: Es regnete. Trotzdem <b>gingen</b> wir spazieren.</li>
        <li><b>als</b> — «когда» об однократном событии в прошлом: Als ich ein Kind war…</li>
        <li><b>wenn</b> — «когда» о повторяющемся действии, а также о настоящем и будущем: Immer wenn er kam…</li>
        <li><b>damit</b> (чтобы) — цель, когда подлежащие разные или есть модальный глагол: Ich spare, damit ich mir ein Auto kaufen kann.</li>
      </ul>
    `,
    exercises: [
      { question: '___ es regnete, gingen wir spazieren.', options: ['Obwohl', 'Trotzdem', 'Deshalb'] },
      { question: 'Es regnete. ___ gingen wir spazieren.', options: ['Trotzdem', 'Obwohl', 'Weil'] },
      { question: '___ ich ein Kind war, wohnten wir auf dem Land.', options: ['Als', 'Wenn', 'Wann'] },
      { question: 'Ich war müde, ___ bin ich früh ins Bett gegangen.', options: ['deshalb', 'weil', 'obwohl'] },
      { question: 'Immer ___ er nach Berlin kam, besuchte er uns.', options: ['wenn', 'als', 'wann'] },
      { question: 'Ich spare Geld, ___ ich mir ein Auto kaufen kann.', options: ['damit', 'um', 'deshalb'] }
    ]
  }
];
