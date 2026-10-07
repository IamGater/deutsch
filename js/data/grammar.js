// Темы грамматики. В упражнениях: o — варианты (первый всегда верный, порядок перемешивается),
// a — ответ для пропуска «___» (строка или массив допустимых вариантов).
(function () {
  // Таблица из строки вида 'заголовок|заголовок;ячейка|ячейка'
  const T = s => '<div class="tbl-wrap"><table class="tbl">' + s.split(';').map((r, i) =>
    '<tr>' + r.split('|').map(c => (i ? '<td>' : '<th>') + c + (i ? '</td>' : '</th>')).join('') + '</tr>').join('') + '</table></div>';
  const X = s => '<p class="x">' + s + '</p>';
  const ORDER = 'Выберите правильное предложение:';

  window.DE_GRAMMAR = [
    /* ============================ A1 ============================ */
    {
      id: 'a1-sein-haben', lv: 'A1', title: 'Глаголы sein и haben',
      html: '<p><b>sein</b> (быть) и <b>haben</b> (иметь) — два главных глагола немецкого языка. Они спрягаются не по общим правилам, их формы нужно запомнить.</p>'
        + T('|sein|haben;ich|bin|habe;du|bist|hast;er / sie / es|ist|hat;wir|sind|haben;ihr|seid|habt;sie / Sie|sind|haben')
        + '<p>В отличие от русского, глагол-связка в настоящем времени обязателен:</p>'
        + X('Ich <b>bin</b> Student. — Я студент.<br>Sie <b>hat</b> einen Hund. — У неё есть собака.'),
      ex: [
        { q: 'Ich ___ Student.', o: ['bin', 'bist', 'ist'] },
        { q: 'Wir ___ zwei Kinder.', o: ['haben', 'habt', 'hat'] },
        { q: '___ du Hunger? (haben)', a: 'hast' },
        { q: 'Das ___ meine Schwester. (sein)', a: 'ist' },
        { q: 'Ihr ___ sehr nett.', o: ['seid', 'sind', 'bist'] },
        { q: 'Er ___ ein neues Auto. (haben)', a: 'hat' }
      ]
    },
    {
      id: 'a1-praesens', lv: 'A1', title: 'Настоящее время (Präsens)',
      html: '<p>К основе глагола (инфинитив без <b>-en</b>) добавляются личные окончания:</p>'
        + T('|wohnen|arbeiten;ich|wohn<b>e</b>|arbeit<b>e</b>;du|wohn<b>st</b>|arbeit<b>est</b>;er / sie / es|wohn<b>t</b>|arbeit<b>et</b>;wir|wohn<b>en</b>|arbeit<b>en</b>;ihr|wohn<b>t</b>|arbeit<b>et</b>;sie / Sie|wohn<b>en</b>|arbeit<b>en</b>')
        + '<p>У сильных глаголов во 2-м и 3-м лице единственного числа меняется корневая гласная:</p>'
        + '<ul><li><b>a → ä</b>: fahren — du fährst, er fährt</li><li><b>e → i</b>: sprechen — du sprichst, er spricht</li><li><b>e → ie</b>: lesen — du liest, er liest</li></ul>',
      ex: [
        { q: 'Ich ___ in Berlin. (wohnen)', a: 'wohne' },
        { q: 'Du ___ gut Deutsch. (sprechen)', a: 'sprichst' },
        { q: 'Er ___ nach Hamburg.', o: ['fährt', 'fahrt', 'fahre'] },
        { q: 'Wir ___ Musik. (hören)', a: 'hören' },
        { q: '___ ihr Kaffee?', o: ['Trinkt', 'Trinken', 'Trinkst'] },
        { q: 'Anna ___ ein Buch. (lesen)', a: 'liest' }
      ]
    },
    {
      id: 'a1-artikel', lv: 'A1', title: 'Артикли: определённый и неопределённый',
      html: '<p>У каждого существительного есть род, который показывает артикль. Учите слова сразу с артиклем.</p>'
        + T('|мужской|женский|средний|мн. число;определённый|der|die|das|die;неопределённый|ein|eine|ein|—')
        + '<ul><li><b>Неопределённый</b> артикль — предмет упоминается впервые, «один из»: Das ist <b>ein</b> Buch.</li><li><b>Определённый</b> — предмет уже известен: <b>Das</b> Buch ist interessant.</li></ul>',
      ex: [
        { q: 'Das ist ___ Lampe.', o: ['eine', 'ein', 'einen'] },
        { q: '___ Kind spielt im Garten.', o: ['Das', 'Der', 'Die'] },
        { q: 'Hier ist ein Buch. ___ Buch ist interessant.', o: ['Das', 'Ein', 'Die'] },
        { q: '___ Frau heißt Anna.', o: ['Die', 'Der', 'Das'] },
        { q: 'Das sind ___ Bücher. (определённый артикль)', a: 'die' },
        { q: 'Dort steht ___ Auto. (неопределённый артикль)', a: 'ein' }
      ]
    },
    {
      id: 'a1-negation', lv: 'A1', title: 'Отрицание: nicht и kein',
      html: '<ul><li><b>kein</b> отрицает существительное с неопределённым артиклем или без артикля и склоняется как <i>ein</i>: Ich habe <b>kein</b> Auto. Ich habe <b>keine</b> Zeit.</li>'
        + '<li><b>nicht</b> отрицает глагол, прилагательное, наречие или существительное с определённым артиклем: Ich komme <b>nicht</b>. Das ist <b>nicht</b> gut.</li></ul>'
        + X('Hast du einen Hund? — Nein, ich habe <b>keinen</b> Hund.<br>Ist das dein Hund? — Nein, das ist <b>nicht</b> mein Hund.'),
      ex: [
        { q: 'Ich habe ___ Zeit.', o: ['keine', 'nicht', 'kein'] },
        { q: 'Das ist ___ richtig.', o: ['nicht', 'kein', 'keine'] },
        { q: 'Er hat ___ Auto.', o: ['kein', 'keine', 'nicht'] },
        { q: 'Wir kommen heute ___.', o: ['nicht', 'kein', 'keinen'] },
        { q: 'Ich trinke ___ Kaffee. (kein-)', a: 'keinen' },
        { q: 'Sie arbeitet ___ in Berlin. (nicht / kein)', a: 'nicht' }
      ]
    },
    {
      id: 'a1-wortstellung', lv: 'A1', title: 'Порядок слов и вопросы',
      html: '<p>В повествовательном предложении спрягаемый глагол всегда стоит на <b>втором месте</b>. Если предложение начинается не с подлежащего, подлежащее переходит за глагол:</p>'
        + X('Ich <b>fahre</b> morgen nach Köln.<br>Morgen <b>fahre</b> ich nach Köln.')
        + '<ul><li>Вопрос с вопросительным словом: слово — глагол — подлежащее. <b>Wo</b> wohnst du?</li><li>Вопрос «да / нет»: глагол на первом месте. <b>Wohnst</b> du in Berlin?</li></ul>'
        + T('wer|was|wo|wohin|woher|wann|wie|warum;кто|что|где|куда|откуда|когда|как|почему'),
      ex: [
        { q: ORDER, o: ['Morgen fahre ich nach Köln.', 'Morgen ich fahre nach Köln.', 'Morgen nach Köln ich fahre.'] },
        { q: '___ heißt du?', o: ['Wie', 'Wo', 'Wer'] },
        { q: '___ wohnen Sie?', o: ['Wo', 'Was', 'Wer'] },
        { q: '___ kommst du? — Aus Spanien.', o: ['Woher', 'Wohin', 'Wo'] },
        { q: 'Выберите правильный вопрос:', o: ['Sprichst du Englisch?', 'Du Englisch sprichst?', 'Sprichst Englisch du?'] },
        { q: '___ ist das? — Das ist mein Lehrer.', o: ['Wer', 'Wo', 'Wie'] }
      ]
    },
    {
      id: 'a1-akkusativ', lv: 'A1', title: 'Винительный падеж (Akkusativ)',
      html: '<p>Akkusativ отвечает на вопросы <b>wen? was?</b> (кого? что?) и нужен после большинства глаголов: haben, sehen, kaufen, brauchen, essen, trinken…</p>'
        + '<p>Меняется только мужской род:</p>'
        + T('|мужской|женский|средний|мн. число;Nominativ|der / ein / kein|die / eine|das / ein|die / —;Akkusativ|<b>den / einen / keinen</b>|die / eine|das / ein|die / —')
        + X('Der Mann ist hier. → Ich sehe <b>den</b> Mann.<br>Das ist ein Hund. → Wir haben <b>einen</b> Hund.'),
      ex: [
        { q: 'Ich sehe ___ Mann. (der)', a: 'den' },
        { q: 'Sie kauft ___ Tasche. (eine)', a: 'eine' },
        { q: 'Wir haben ___ Hund.', o: ['einen', 'ein', 'einer'] },
        { q: 'Er liest ___ Buch.', o: ['das', 'den', 'dem'] },
        { q: 'Ich brauche ___ Stift. (kein-)', a: 'keinen' },
        { q: 'Hast du ___ Schlüssel?', o: ['den', 'der', 'dem'] }
      ]
    },
    {
      id: 'a1-modalverben', lv: 'A1', title: 'Модальные глаголы',
      html: '<p>Модальный глагол стоит на втором месте и спрягается, а смысловой глагол уходит в <b>конец предложения в инфинитиве</b>. Формы <i>ich</i> и <i>er/sie/es</i> совпадают и не имеют окончания.</p>'
        + T('|können (мочь)|müssen (быть должным)|wollen (хотеть)|möchten (хотел бы);ich|kann|muss|will|möchte;du|kannst|musst|willst|möchtest;er / sie / es|kann|muss|will|möchte;wir|können|müssen|wollen|möchten;ihr|könnt|müsst|wollt|möchtet;sie / Sie|können|müssen|wollen|möchten')
        + X('Ich <b>kann</b> gut <b>schwimmen</b>. — Я хорошо умею плавать.'),
      ex: [
        { q: 'Ich ___ gut schwimmen. (können)', a: 'kann' },
        { q: 'Du ___ jetzt schlafen. (müssen)', a: 'musst' },
        { q: 'Wir ___ Pizza essen. (wollen)', a: 'wollen' },
        { q: ORDER, o: ['Ich möchte einen Tee trinken.', 'Ich möchte trinken einen Tee.', 'Ich trinken möchte einen Tee.'] },
        { q: 'Er ___ heute nicht kommen.', o: ['kann', 'kannt', 'können'] },
        { q: '___ Sie mir helfen?', o: ['Können', 'Kann', 'Könnt'] }
      ]
    },
    {
      id: 'a1-possessiv', lv: 'A1', title: 'Притяжательные местоимения',
      html: T('ich|du|er / es|sie (она)|wir|ihr|sie (они)|Sie;mein|dein|sein|ihr|unser|euer|ihr|Ihr')
        + '<p>Притяжательные местоимения склоняются как <i>ein</i>: перед словами женского рода и во множественном числе добавляется <b>-e</b>, в Akkusativ мужского рода — <b>-en</b>.</p>'
        + X('mein Bruder, mein<b>e</b> Schwester, mein<b>e</b> Eltern<br>Ich besuche mein<b>en</b> Bruder.'),
      ex: [
        { q: 'Das ist ___ Bruder. (ich)', a: 'mein' },
        { q: 'Wo ist ___ Tasche? (du)', a: 'deine' },
        { q: 'Peter und ___ Frau wohnen hier.', o: ['seine', 'ihre', 'sein'] },
        { q: 'Anna liebt ___ Hund.', o: ['ihren', 'seinen', 'ihr'] },
        { q: 'Das sind ___ Kinder. (wir)', a: 'unsere' },
        { q: 'Herr Braun, ist das ___ Auto?', o: ['Ihr', 'dein', 'euer'] }
      ]
    },
    {
      id: 'a1-trennbar', lv: 'A1', title: 'Глаголы с отделяемыми приставками',
      html: '<p>У многих глаголов ударная приставка (<b>an-, auf-, aus-, ein-, mit-, zu-, fern-</b>…) в настоящем времени отделяется и уходит в <b>конец предложения</b>.</p>'
        + X('<b>auf</b>stehen → Ich <b>stehe</b> um 7 Uhr <b>auf</b>.<br><b>an</b>rufen → <b>Rufst</b> du mich morgen <b>an</b>?')
        + '<p>С модальным глаголом приставка не отделяется: Ich muss früh <b>aufstehen</b>.</p>'
        + '<p>Частые глаголы: aufstehen (вставать), anrufen (звонить), einkaufen (делать покупки), mitkommen (идти вместе), fernsehen (смотреть телевизор), anfangen (начинать).</p>',
      ex: [
        { q: 'Ich ___ um sieben Uhr auf. (aufstehen)', a: 'stehe' },
        { q: 'Wann ___ der Film an?', o: ['fängt', 'anfängt', 'fangen'] },
        { q: ORDER, o: ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.', 'Ich rufe an dich morgen.'] },
        { q: 'Kommst du ___? (mitkommen)', a: 'mit' },
        { q: 'Wir kaufen heute im Supermarkt ___. (einkaufen)', a: 'ein' },
        { q: 'Er ___ jeden Abend fern.', o: ['sieht', 'fernsieht', 'sehe'] }
      ]
    },
    {
      id: 'a1-perfekt', lv: 'A1', title: 'Прошедшее время Perfekt: основы',
      html: '<p>Perfekt — основное прошедшее время в разговорной речи. Формула: <b>haben / sein</b> (на втором месте) + <b>Partizip II</b> (в конце).</p>'
        + '<ul><li>Правильные глаголы: <b>ge-</b> + основа + <b>-t</b>: machen → <b>ge</b>mach<b>t</b>, kaufen → gekauft, lernen → gelernt.</li>'
        + '<li>Сильные глаголы: <b>ge-</b> … <b>-en</b>, часто с изменением корня: essen → gegessen, trinken → getrunken, sehen → gesehen.</li>'
        + '<li>Глаголы движения образуют Perfekt с <b>sein</b>: gehen → ist gegangen, fahren → ist gefahren, kommen → ist gekommen.</li></ul>'
        + X('Ich <b>habe</b> Deutsch <b>gelernt</b>.<br>Wir <b>sind</b> nach Berlin <b>gefahren</b>.'),
      ex: [
        { q: 'Ich habe Deutsch ___. (lernen)', a: 'gelernt' },
        { q: 'Was hast du gestern ___? (machen)', a: 'gemacht' },
        { q: 'Wir ___ nach Berlin gefahren.', o: ['sind', 'haben', 'seid'] },
        { q: 'Er ___ eine Pizza gegessen.', o: ['hat', 'ist', 'habt'] },
        { q: 'Sie hat ein Auto ___. (kaufen)', a: 'gekauft' },
        { q: ORDER, o: ['Ich habe gestern Fußball gespielt.', 'Ich habe gespielt gestern Fußball.', 'Ich gespielt habe gestern Fußball.'] }
      ]
    },

    /* ============================ A2 ============================ */
    {
      id: 'a2-dativ', lv: 'A2', title: 'Дательный падеж (Dativ)',
      html: '<p>Dativ отвечает на вопрос <b>wem?</b> (кому?) и употребляется после глаголов helfen, geben, danken, gefallen, gehören, а также всегда после предлогов <b>aus, bei, mit, nach, seit, von, zu</b>.</p>'
        + T('|мужской|женский|средний|мн. число;Dativ|dem / einem|der / einer|dem / einem|den + <b>-n</b>')
        + T('ich|du|er|sie|es|wir|ihr|sie / Sie;mir|dir|ihm|ihr|ihm|uns|euch|ihnen / Ihnen')
        + X('Ich fahre mit <b>dem</b> Bus. Ich helfe <b>der</b> Mutter. Kannst du <b>mir</b> helfen?'),
      ex: [
        { q: 'Ich fahre mit ___ Bus. (der)', a: 'dem' },
        { q: 'Sie hilft ___ Mutter. (die)', a: 'der' },
        { q: 'Kannst du ___ helfen? (ich)', a: 'mir' },
        { q: 'Wir wohnen bei ___ Freund.', o: ['einem', 'einen', 'ein'] },
        { q: 'Ich gebe ___ das Buch.', o: ['ihm', 'ihn', 'er'] },
        { q: 'Nach ___ Arbeit gehe ich einkaufen.', o: ['der', 'die', 'dem'] }
      ]
    },
    {
      id: 'a2-wechselpraepositionen', lv: 'A2', title: 'Предлоги места: Dativ или Akkusativ',
      html: '<p>Девять предлогов — <b>in, an, auf, unter, über, vor, hinter, neben, zwischen</b> — требуют разного падежа в зависимости от вопроса:</p>'
        + '<ul><li><b>Wo?</b> (где? — положение) → <b>Dativ</b>: Das Buch liegt auf <b>dem</b> Tisch.</li><li><b>Wohin?</b> (куда? — направление) → <b>Akkusativ</b>: Ich lege das Buch auf <b>den</b> Tisch.</li></ul>'
        + '<p>Слияния: in + dem = <b>im</b>, in + das = <b>ins</b>, an + dem = <b>am</b>, an + das = <b>ans</b>.</p>'
        + '<p>Пары глаголов: liegen / legen (лежать / класть), stehen / stellen (стоять / ставить), hängen (висеть / вешать).</p>',
      ex: [
        { q: 'Das Buch liegt auf ___ Tisch.', o: ['dem', 'den', 'der'] },
        { q: 'Ich lege das Buch auf ___ Tisch.', o: ['den', 'dem', 'der'] },
        { q: 'Wir gehen ___ Kino. (in + das)', a: 'ins' },
        { q: 'Die Lampe hängt über ___ Sofa. (das)', a: 'dem' },
        { q: 'Er stellt die Flasche in ___ Kühlschrank.', o: ['den', 'dem', 'der'] },
        { q: 'Die Kinder spielen ___ Garten. (in + dem)', a: 'im' }
      ]
    },
    {
      id: 'a2-perfekt', lv: 'A2', title: 'Perfekt: sein или haben, формы причастий',
      html: '<p>С <b>sein</b> Perfekt образуют глаголы движения и смены состояния (gehen, fahren, kommen, fliegen, aufstehen, einschlafen), а также <b>sein, bleiben, werden, passieren</b>. Остальные — с <b>haben</b>.</p>'
        + '<p>Особенности причастий:</p>'
        + '<ul><li>отделяемая приставка: <b>ge</b> встаёт в середину — einkaufen → ein<b>ge</b>kauft, aufstehen → auf<b>ge</b>standen;</li>'
        + '<li>неотделяемые приставки (be-, ver-, er-, ent-, zer-, ge-): без <b>ge-</b> — besuchen → besucht, verstehen → verstanden;</li>'
        + '<li>глаголы на <b>-ieren</b>: без <b>ge-</b> — studieren → studiert.</li></ul>',
      ex: [
        { q: 'Ich ___ gestern früh aufgestanden. (sein / haben)', a: 'bin' },
        { q: 'Wir haben im Supermarkt ___. (einkaufen)', a: 'eingekauft' },
        { q: 'Er hat in München ___. (studieren)', a: 'studiert' },
        { q: 'Sie ___ zu Hause geblieben.', o: ['ist', 'hat', 'sind'] },
        { q: 'Ich habe meine Oma ___.', o: ['besucht', 'gebesucht', 'besuchen'] },
        { q: 'Hast du den Brief ___? (schreiben)', a: 'geschrieben' }
      ]
    },
    {
      id: 'a2-praeteritum', lv: 'A2', title: 'Präteritum: sein, haben и модальные глаголы',
      html: '<p>Для глаголов <b>sein</b>, <b>haben</b> и модальных в прошедшем времени даже в разговорной речи используют Präteritum, а не Perfekt.</p>'
        + T('|sein|haben|können|müssen|wollen;ich|war|hatte|konnte|musste|wollte;du|warst|hattest|konntest|musstest|wolltest;er / sie / es|war|hatte|konnte|musste|wollte;wir|waren|hatten|konnten|mussten|wollten;ihr|wart|hattet|konntet|musstet|wolltet;sie / Sie|waren|hatten|konnten|mussten|wollten')
        + '<p>У модальных глаголов в Präteritum пропадает умлаут: können → k<b>o</b>nnte, müssen → m<b>u</b>sste, dürfen → d<b>u</b>rfte.</p>',
      ex: [
        { q: 'Gestern ___ ich krank. (sein)', a: 'war' },
        { q: 'Wir ___ keine Zeit. (haben)', a: 'hatten' },
        { q: 'Als Kind ___ ich nicht schwimmen. (können)', a: 'konnte' },
        { q: 'Wo ___ du gestern?', o: ['warst', 'wart', 'war'] },
        { q: 'Er ___ früh aufstehen.', o: ['musste', 'müsste', 'musstet'] },
        { q: '___ ihr im Urlaub gutes Wetter? (haben)', a: 'hattet' }
      ]
    },
    {
      id: 'a2-nebensatz', lv: 'A2', title: 'Придаточные с weil, dass, wenn',
      html: '<p>В придаточном предложении спрягаемый глагол стоит <b>в самом конце</b>. Придаточное всегда отделяется запятой.</p>'
        + '<ul><li><b>weil</b> — потому что: Ich bleibe zu Hause, weil ich krank <b>bin</b>.</li><li><b>dass</b> — что: Ich weiß, dass er morgen <b>kommt</b>.</li><li><b>wenn</b> — если, когда: Wenn ich Zeit <b>habe</b>, rufe ich dich an.</li></ul>'
        + '<p>Если придаточное стоит первым, главное предложение начинается с глагола: Wenn es regnet, <b>bleiben</b> wir zu Hause.</p>'
        + '<p>Сравните: <b>denn</b> тоже значит «потому что», но порядок слов после него не меняется.</p>',
      ex: [
        { q: 'Ich bleibe zu Hause, weil ich krank ___. (sein)', a: 'bin' },
        { q: ORDER, o: ['Ich weiß, dass er morgen kommt.', 'Ich weiß, dass er kommt morgen.', 'Ich weiß, dass kommt er morgen.'] },
        { q: '___ es regnet, bleiben wir zu Hause.', o: ['Wenn', 'Dass', 'Denn'] },
        { q: 'Er lernt Deutsch, ___ er in Deutschland arbeiten möchte.', o: ['weil', 'dass', 'ob'] },
        { q: 'Sie sagt, ___ sie keine Zeit hat.', a: 'dass' },
        { q: ORDER, o: ['Wenn ich Zeit habe, rufe ich dich an.', 'Wenn ich habe Zeit, ich rufe dich an.', 'Wenn ich Zeit habe, ich rufe dich an.'] }
      ]
    },
    {
      id: 'a2-komparation', lv: 'A2', title: 'Степени сравнения',
      html: T('|сравнительная|превосходная;klein|klein<b>er</b>|am klein<b>sten</b>;alt|<b>ä</b>lter|am <b>ä</b>ltesten;groß|größer|am größten;gut|<b>besser</b>|am <b>besten</b>;viel|<b>mehr</b>|am <b>meisten</b>;gern|<b>lieber</b>|am <b>liebsten</b>')
        + '<ul><li>Сравнение неравного — с <b>als</b>: Berlin ist größer <b>als</b> Bonn.</li><li>Сравнение равного — <b>so … wie</b>: Er ist so alt <b>wie</b> ich.</li><li>Перед существительным превосходная степень получает артикль и окончание: das schön<b>ste</b> Haus.</li></ul>',
      ex: [
        { q: 'Berlin ist ___ als München. (groß)', a: 'größer' },
        { q: 'Ich trinke ___ Tee als Kaffee. (gern)', a: 'lieber' },
        { q: 'Dieser Film ist am ___. (gut)', a: 'besten' },
        { q: 'Er ist so alt ___ ich.', o: ['wie', 'als', 'dass'] },
        { q: 'Mein Bruder ist ___ als ich. (alt)', a: 'älter' },
        { q: 'Das ist das ___ Haus der Stadt.', o: ['schönste', 'schöner', 'am schönsten'] }
      ]
    },
    {
      id: 'a2-reflexiv', lv: 'A2', title: 'Возвратные глаголы',
      html: '<p>Возвратное местоимение соответствует русскому «-ся», но изменяется по лицам:</p>'
        + T('ich|du|er / sie / es|wir|ihr|sie / Sie;mich|dich|sich|uns|euch|sich')
        + X('sich freuen → Ich freue <b>mich</b>. Er freut <b>sich</b>. Wir freuen <b>uns</b>.')
        + '<p>Частые глаголы: sich freuen auf / über (радоваться), sich interessieren für (интересоваться), sich treffen (встречаться), sich fühlen (чувствовать себя), sich waschen (мыться), sich setzen (садиться), sich erinnern an (вспоминать).</p>',
      ex: [
        { q: 'Ich freue ___ auf das Wochenende.', a: 'mich' },
        { q: 'Wir treffen ___ um acht.', a: 'uns' },
        { q: 'Er interessiert ___ für Musik.', o: ['sich', 'ihn', 'ihm'] },
        { q: 'Wie fühlst du ___ heute?', o: ['dich', 'dir', 'sich'] },
        { q: 'Die Kinder waschen ___ die Hände.', o: ['sich', 'ihnen', 'sie'] },
        { q: 'Setzt ___ bitte! (ihr)', a: 'euch' }
      ]
    },
    {
      id: 'a2-adjektivdeklination', lv: 'A2', title: 'Склонение прилагательных: основы',
      html: '<p>Перед существительным прилагательное получает окончание. Оно зависит от артикля, рода и падежа.</p>'
        + T('Nominativ|мужской|женский|средний;после der / die / das|der alt<b>e</b> Mann|die jung<b>e</b> Frau|das klein<b>e</b> Kind;после ein / eine|ein alt<b>er</b> Mann|eine jung<b>e</b> Frau|ein klein<b>es</b> Kind')
        + '<ul><li>Akkusativ мужского рода: всегда <b>-en</b> — den / einen neu<b>en</b> Mantel.</li><li>Dativ: всегда <b>-en</b> — in einem klein<b>en</b> Haus, mit der neu<b>en</b> Kollegin.</li><li>Множественное число с артиклем: <b>-en</b> — die neu<b>en</b> Bücher.</li></ul>',
      ex: [
        { q: 'Das ist ein ___ Film. (gut)', a: 'guter' },
        { q: 'Ich kaufe einen ___ Mantel. (neu)', a: 'neuen' },
        { q: 'Die ___ Frau ist meine Lehrerin. (jung)', a: 'junge' },
        { q: 'Wir wohnen in einem ___ Haus.', o: ['kleinen', 'kleines', 'kleine'] },
        { q: 'Sie hat ein ___ Auto.', o: ['rotes', 'roter', 'roten'] },
        { q: 'Der ___ Mann heißt Karl.', o: ['alte', 'alter', 'alten'] }
      ]
    },

    /* ============================ B1 ============================ */
    {
      id: 'b1-praeteritum', lv: 'B1', title: 'Präteritum: правильные и сильные глаголы',
      html: '<p>Präteritum — время письменного повествования: рассказы, новости, биографии.</p>'
        + '<ul><li>Правильные глаголы: основа + <b>-te-</b> + окончание: machen → ich mach<b>te</b>, du mach<b>test</b>, wir mach<b>ten</b>. После -t / -d: warten → wart<b>ete</b>.</li>'
        + '<li>Сильные глаголы меняют корень, а формы <i>ich</i> и <i>er/sie/es</i> не имеют окончания.</li>'
        + '<li>Смешанные: изменение корня + -te: kennen → kannte, bringen → brachte, denken → dachte, wissen → wusste.</li></ul>'
        + T('gehen|kommen|sehen|fahren|geben|nehmen|bleiben|schreiben;ging|kam|sah|fuhr|gab|nahm|blieb|schrieb'),
      ex: [
        { q: 'Er ___ jeden Tag zur Arbeit. (gehen)', a: 'ging' },
        { q: 'Wir ___ lange auf den Bus. (warten)', a: 'warteten' },
        { q: 'Maria ___ einen Brief. (schreiben)', a: 'schrieb' },
        { q: 'Die Kinder ___ im Garten.', o: ['spielten', 'spielte', 'gespielt'] },
        { q: 'Plötzlich ___ ein Mann ins Zimmer.', o: ['kam', 'kamt', 'kommte'] },
        { q: 'Ich ___ ihn sofort. (erkennen)', a: 'erkannte' }
      ]
    },
    {
      id: 'b1-konjunktiv2', lv: 'B1', title: 'Сослагательное наклонение (Konjunktiv II)',
      html: '<p>Konjunktiv II выражает нереальное условие, желание, совет и вежливую просьбу.</p>'
        + '<ul><li>Большинство глаголов: <b>würde</b> + инфинитив: Ich <b>würde</b> gern mehr <b>reisen</b>.</li><li>Собственные формы у sein, haben и модальных:</li></ul>'
        + T('sein|haben|können|müssen|sollen|werden;wäre|hätte|könnte|müsste|sollte|würde')
        + X('Wenn ich Zeit <b>hätte</b>, <b>würde</b> ich mehr lesen. — Если бы у меня было время, я бы больше читал.<br><b>Könnten</b> Sie mir bitte helfen? — Не могли бы вы мне помочь?<br>Du <b>solltest</b> mehr schlafen. — Тебе следовало бы больше спать.'),
      ex: [
        { q: 'Wenn ich Zeit ___, würde ich mehr lesen. (haben)', a: 'hätte' },
        { q: 'An deiner Stelle ___ ich zum Arzt gehen.', o: ['würde', 'wurde', 'werde'] },
        { q: '___ Sie mir bitte helfen? (können)', a: 'könnten' },
        { q: 'Wenn ich reich ___, würde ich eine Weltreise machen. (sein)', a: 'wäre' },
        { q: 'Du ___ mehr schlafen.', o: ['solltest', 'solltet', 'sollen'] },
        { q: 'Ich ___ gern einen Kaffee. (haben)', a: 'hätte' }
      ]
    },
    {
      id: 'b1-passiv', lv: 'B1', title: 'Страдательный залог (Passiv)',
      html: '<p>Passiv используют, когда важно действие, а не тот, кто его совершает. Формула: <b>werden</b> + <b>Partizip II</b>.</p>'
        + T('время|пример;Präsens|Das Haus <b>wird</b> gebaut.;Präteritum|Das Haus <b>wurde</b> gebaut.;Perfekt|Das Haus <b>ist</b> gebaut <b>worden</b>.;с модальным глаголом|Das Haus <b>muss</b> gebaut <b>werden</b>.')
        + '<p>Действующее лицо вводится предлогом <b>von</b> + Dativ: Der Roman wurde <b>von</b> einem jungen Autor geschrieben.</p>',
      ex: [
        { q: 'Das Haus ___ gerade renoviert.', o: ['wird', 'hat', 'werdet'] },
        { q: 'Die Briefe ___ gestern verschickt. (werden, Präteritum)', a: 'wurden' },
        { q: 'Das Auto muss repariert ___.', a: 'werden' },
        { q: 'Hier ___ Deutsch gesprochen.', o: ['wird', 'werden', 'worden'] },
        { q: 'Der Roman wurde ___ einem jungen Autor geschrieben.', o: ['von', 'bei', 'mit'] },
        { q: 'Die Tür wird um 8 Uhr ___. (öffnen)', a: 'geöffnet' }
      ]
    },
    {
      id: 'b1-relativsaetze', lv: 'B1', title: 'Относительные придаточные (Relativsätze)',
      html: '<p>Относительное местоимение («который») совпадает по роду и числу со словом, к которому относится, а его падеж зависит от роли внутри придаточного. Глагол — в конце.</p>'
        + T('|мужской|женский|средний|мн. число;Nominativ|der|die|das|die;Akkusativ|den|die|das|die;Dativ|dem|der|dem|<b>denen</b>')
        + X('Das ist der Mann, <b>der</b> nebenan wohnt. (он живёт — Nominativ)<br>Das ist der Film, <b>den</b> ich gesehen habe. (я видел его — Akkusativ)<br>Die Kollegen, mit <b>denen</b> ich arbeite, sind nett. (предлог стоит перед местоимением)'),
      ex: [
        { q: 'Das ist der Mann, ___ nebenan wohnt.', a: 'der' },
        { q: 'Das ist der Film, ___ ich gestern gesehen habe.', a: 'den' },
        { q: 'Die Frau, ___ ich geholfen habe, ist meine Nachbarin.', o: ['der', 'die', 'den'] },
        { q: 'Das Buch, ___ auf dem Tisch liegt, gehört mir.', a: 'das' },
        { q: 'Die Kollegen, mit ___ ich arbeite, sind nett.', o: ['denen', 'den', 'die'] },
        { q: 'Das ist die Stadt, in ___ ich geboren bin.', o: ['der', 'die', 'dem'] }
      ]
    },
    {
      id: 'b1-genitiv', lv: 'B1', title: 'Родительный падеж (Genitiv)',
      html: '<p>Genitiv отвечает на вопрос <b>wessen?</b> (чей?) и выражает принадлежность.</p>'
        + T('|мужской|женский|средний|мн. число;Genitiv|des / eines + <b>-(e)s</b>|der / einer|des / eines + <b>-(e)s</b>|der')
        + X('das Auto <b>des</b> Vater<b>s</b>, die Tasche <b>der</b> Lehrerin, am Ende <b>des</b> Jahr<b>es</b>')
        + '<p>Предлоги с Genitiv: <b>wegen</b> (из-за), <b>während</b> (во время), <b>trotz</b> (несмотря на), <b>statt</b> (вместо), <b>innerhalb</b> (в пределах), <b>außerhalb</b> (за пределами).</p>',
      ex: [
        { q: 'Das ist das Auto ___ Vaters. (mein)', a: 'meines' },
        { q: '___ des Regens blieben wir zu Hause.', o: ['Wegen', 'Bei', 'Seit'] },
        { q: 'Trotz ___ schlechten Wetters gingen wir spazieren. (das)', a: 'des' },
        { q: 'Die Tasche ___ Lehrerin ist schwarz. (die)', a: 'der' },
        { q: 'Während ___ Urlaubs habe ich viel gelesen.', o: ['des', 'dem', 'den'] },
        { q: 'Am Ende des ___ gab es Applaus. (Konzert)', a: ['Konzerts', 'Konzertes'] }
      ]
    },
    {
      id: 'b1-infinitiv-zu', lv: 'B1', title: 'Инфинитив с zu, um … zu, ohne … zu',
      html: '<ul><li>После многих глаголов и выражений (versuchen, vergessen, anfangen, hoffen, Lust haben, Zeit haben, es ist wichtig…) инфинитив употребляется с <b>zu</b>: Ich habe vergessen, Brot <b>zu kaufen</b>.</li>'
        + '<li>У глаголов с отделяемой приставкой <b>zu</b> встаёт в середину: an<b>zu</b>rufen, ein<b>zu</b>kaufen.</li>'
        + '<li><b>um … zu</b> — цель («чтобы»): Er lernt Deutsch, <b>um</b> in Wien <b>zu</b> studieren.</li>'
        + '<li><b>ohne … zu</b> — «не сделав»: Sie ging, <b>ohne</b> ein Wort <b>zu</b> sagen.</li>'
        + '<li>После модальных глаголов <b>zu</b> не ставится: Ich muss arbeiten.</li></ul>',
      ex: [
        { q: 'Ich habe vergessen, dich ___. (anrufen)', a: 'anzurufen' },
        { q: 'Er lernt Deutsch, ___ in Deutschland zu studieren.', o: ['um', 'damit', 'für'] },
        { q: 'Es ist wichtig, pünktlich ___ sein.', a: 'zu' },
        { q: ORDER, o: ['Ich muss heute lange arbeiten.', 'Ich muss heute lange zu arbeiten.', 'Ich muss zu arbeiten heute lange.'] },
        { q: 'Er verließ das Haus, ___ sich zu verabschieden.', o: ['ohne', 'dass', 'weil'] },
        { q: 'Hast du Lust, ins Kino ___ gehen?', a: 'zu' }
      ]
    },
    {
      id: 'b1-futur', lv: 'B1', title: 'Будущее время (Futur I)',
      html: '<p>Futur I образуется из <b>werden</b> (на втором месте) и <b>инфинитива</b> (в конце). Оно выражает планы, прогнозы, обещания и предположения.</p>'
        + T('ich|du|er / sie / es|wir|ihr|sie / Sie;werde|wirst|wird|werden|werdet|werden')
        + X('Ich <b>werde</b> dich morgen <b>anrufen</b>.<br>Er <b>wird</b> wohl noch im Büro <b>sein</b>. — Он, наверное, ещё в офисе.')
        + '<p>Если время понятно из контекста, в разговорной речи чаще используют Präsens: Morgen fahre ich nach Köln.</p>',
      ex: [
        { q: 'Ich ___ dich morgen anrufen. (werden)', a: 'werde' },
        { q: 'Es ___ morgen regnen.', o: ['wird', 'werdet', 'wirst'] },
        { q: '___ du nächstes Jahr umziehen? (werden)', a: 'wirst' },
        { q: ORDER, o: ['Wir werden im Sommer nach Italien fahren.', 'Wir werden fahren im Sommer nach Italien.', 'Wir werden im Sommer nach Italien gefahren.'] },
        { q: 'Die Kinder ___ bald groß sein.', o: ['werden', 'wird', 'werdet'] },
        { q: 'Ihr ___ es nicht bereuen. (werden)', a: 'werdet' }
      ]
    },
    {
      id: 'b1-konnektoren', lv: 'B1', title: 'Союзы: obwohl, trotzdem, deshalb, als, wenn, damit',
      html: '<ul><li><b>obwohl</b> (хотя) — придаточное, глагол в конце: Obwohl es <b>regnete</b>, gingen wir spazieren.</li>'
        + '<li><b>trotzdem</b> (несмотря на это) и <b>deshalb</b> (поэтому) — наречия в главном предложении, после них сразу глагол: Es regnete. Trotzdem <b>gingen</b> wir spazieren.</li>'
        + '<li><b>als</b> — «когда» об однократном событии в прошлом: Als ich ein Kind war…</li>'
        + '<li><b>wenn</b> — «когда» о повторяющемся действии, а также о настоящем и будущем: Immer wenn er kam…</li>'
        + '<li><b>damit</b> (чтобы) — цель, когда подлежащие разные или есть модальный глагол: Ich spare, damit ich mir ein Auto kaufen kann.</li></ul>',
      ex: [
        { q: '___ es regnete, gingen wir spazieren.', o: ['Obwohl', 'Trotzdem', 'Deshalb'] },
        { q: 'Es regnete. ___ gingen wir spazieren.', o: ['Trotzdem', 'Obwohl', 'Weil'] },
        { q: '___ ich ein Kind war, wohnten wir auf dem Land.', o: ['Als', 'Wenn', 'Wann'] },
        { q: 'Ich war müde, ___ bin ich früh ins Bett gegangen.', o: ['deshalb', 'weil', 'obwohl'] },
        { q: 'Immer ___ er nach Berlin kam, besuchte er uns.', o: ['wenn', 'als', 'wann'] },
        { q: 'Ich spare Geld, ___ ich mir ein Auto kaufen kann.', o: ['damit', 'um', 'deshalb'] }
      ]
    }
  ];
})();
