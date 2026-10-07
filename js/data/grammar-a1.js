// Грамматика A1: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_A1 = [
  {
    id: 'a1-sein-haben',
    level: 'A1',
    title: 'Глаголы sein и haben',
    rule: `
      <p><b>sein</b> (быть) и <b>haben</b> (иметь) — два главных глагола немецкого языка. Они спрягаются не по общим правилам, их формы нужно запомнить.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>sein</th><th>haben</th></tr>
          <tr><td>ich</td><td>bin</td><td>habe</td></tr>
          <tr><td>du</td><td>bist</td><td>hast</td></tr>
          <tr><td>er / sie / es</td><td>ist</td><td>hat</td></tr>
          <tr><td>wir</td><td>sind</td><td>haben</td></tr>
          <tr><td>ihr</td><td>seid</td><td>habt</td></tr>
          <tr><td>sie / Sie</td><td>sind</td><td>haben</td></tr>
        </table>
      </div>
      <p>В отличие от русского, глагол-связка в настоящем времени обязателен:</p>
      <p class="rule-example">Ich <b>bin</b> Student. — Я студент.<br>
        Sie <b>hat</b> einen Hund. — У неё есть собака.</p>
    `,
    exercises: [
      { question: 'Ich ___ Student.', options: ['bin', 'bist', 'ist'] },
      { question: 'Wir ___ zwei Kinder.', options: ['haben', 'habt', 'hat'] },
      { question: '___ du Hunger? (haben)', answer: 'hast' },
      { question: 'Das ___ meine Schwester. (sein)', answer: 'ist' },
      { question: 'Ihr ___ sehr nett.', options: ['seid', 'sind', 'bist'] },
      { question: 'Er ___ ein neues Auto. (haben)', answer: 'hat' }
    ]
  },
  {
    id: 'a1-praesens',
    level: 'A1',
    title: 'Настоящее время (Präsens)',
    rule: `
      <p>К основе глагола (инфинитив без <b>-en</b>) добавляются личные окончания:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>wohnen</th><th>arbeiten</th></tr>
          <tr><td>ich</td><td>wohn<b>e</b></td><td>arbeit<b>e</b></td></tr>
          <tr><td>du</td><td>wohn<b>st</b></td><td>arbeit<b>est</b></td></tr>
          <tr><td>er / sie / es</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td></tr>
          <tr><td>wir</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td></tr>
          <tr><td>ihr</td><td>wohn<b>t</b></td><td>arbeit<b>et</b></td></tr>
          <tr><td>sie / Sie</td><td>wohn<b>en</b></td><td>arbeit<b>en</b></td></tr>
        </table>
      </div>
      <p>У сильных глаголов во 2-м и 3-м лице единственного числа меняется корневая гласная:</p>
      <ul>
        <li><b>a → ä</b>: fahren — du fährst, er fährt</li>
        <li><b>e → i</b>: sprechen — du sprichst, er spricht</li>
        <li><b>e → ie</b>: lesen — du liest, er liest</li>
      </ul>
    `,
    exercises: [
      { question: 'Ich ___ in Berlin. (wohnen)', answer: 'wohne' },
      { question: 'Du ___ gut Deutsch. (sprechen)', answer: 'sprichst' },
      { question: 'Er ___ nach Hamburg.', options: ['fährt', 'fahrt', 'fahre'] },
      { question: 'Wir ___ Musik. (hören)', answer: 'hören' },
      { question: '___ ihr Kaffee?', options: ['Trinkt', 'Trinken', 'Trinkst'] },
      { question: 'Anna ___ ein Buch. (lesen)', answer: 'liest' }
    ]
  },
  {
    id: 'a1-artikel',
    level: 'A1',
    title: 'Артикли: определённый и неопределённый',
    rule: `
      <p>У каждого существительного есть род, который показывает артикль. Учите слова сразу с артиклем.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>мужской</th><th>женский</th><th>средний</th><th>мн. число</th></tr>
          <tr><td>определённый</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
          <tr><td>неопределённый</td><td>ein</td><td>eine</td><td>ein</td><td>—</td></tr>
        </table>
      </div>
      <ul>
        <li><b>Неопределённый</b> артикль — предмет упоминается впервые, «один из»: Das ist <b>ein</b> Buch.</li>
        <li><b>Определённый</b> — предмет уже известен: <b>Das</b> Buch ist interessant.</li>
      </ul>
    `,
    exercises: [
      { question: 'Das ist ___ Lampe.', options: ['eine', 'ein', 'einen'] },
      { question: '___ Kind spielt im Garten.', options: ['Das', 'Der', 'Die'] },
      { question: 'Hier ist ein Buch. ___ Buch ist interessant.', options: ['Das', 'Ein', 'Die'] },
      { question: '___ Frau heißt Anna.', options: ['Die', 'Der', 'Das'] },
      { question: 'Das sind ___ Bücher. (определённый артикль)', answer: 'die' },
      { question: 'Dort steht ___ Auto. (неопределённый артикль)', answer: 'ein' }
    ]
  },
  {
    id: 'a1-negation',
    level: 'A1',
    title: 'Отрицание: nicht и kein',
    rule: `
      <ul>
        <li><b>kein</b> отрицает существительное с неопределённым артиклем или без артикля и склоняется как <i>ein</i>: Ich habe <b>kein</b> Auto. Ich habe <b>keine</b> Zeit.</li>
        <li><b>nicht</b> отрицает глагол, прилагательное, наречие или существительное с определённым артиклем: Ich komme <b>nicht</b>. Das ist <b>nicht</b> gut.</li>
      </ul>
      <p class="rule-example">Hast du einen Hund? — Nein, ich habe <b>keinen</b> Hund.<br>
        Ist das dein Hund? — Nein, das ist <b>nicht</b> mein Hund.</p>
    `,
    exercises: [
      { question: 'Ich habe ___ Zeit.', options: ['keine', 'nicht', 'kein'] },
      { question: 'Das ist ___ richtig.', options: ['nicht', 'kein', 'keine'] },
      { question: 'Er hat ___ Auto.', options: ['kein', 'keine', 'nicht'] },
      { question: 'Wir kommen heute ___.', options: ['nicht', 'kein', 'keinen'] },
      { question: 'Ich trinke ___ Kaffee. (kein-)', answer: 'keinen' },
      { question: 'Sie arbeitet ___ in Berlin. (nicht / kein)', answer: 'nicht' }
    ]
  },
  {
    id: 'a1-wortstellung',
    level: 'A1',
    title: 'Порядок слов и вопросы',
    rule: `
      <p>В повествовательном предложении спрягаемый глагол всегда стоит на <b>втором месте</b>. Если предложение начинается не с подлежащего, подлежащее переходит за глагол:</p>
      <p class="rule-example">Ich <b>fahre</b> morgen nach Köln.<br>
        Morgen <b>fahre</b> ich nach Köln.</p>
      <ul>
        <li>Вопрос с вопросительным словом: слово — глагол — подлежащее. <b>Wo</b> wohnst du?</li>
        <li>Вопрос «да / нет»: глагол на первом месте. <b>Wohnst</b> du in Berlin?</li>
      </ul>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>wer</th><th>was</th><th>wo</th><th>wohin</th><th>woher</th><th>wann</th><th>wie</th><th>warum</th></tr>
          <tr><td>кто</td><td>что</td><td>где</td><td>куда</td><td>откуда</td><td>когда</td><td>как</td><td>почему</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { question: 'Выберите правильное предложение:', options: ['Morgen fahre ich nach Köln.', 'Morgen ich fahre nach Köln.', 'Morgen nach Köln ich fahre.'] },
      { question: '___ heißt du?', options: ['Wie', 'Wo', 'Wer'] },
      { question: '___ wohnen Sie?', options: ['Wo', 'Was', 'Wer'] },
      { question: '___ kommst du? — Aus Spanien.', options: ['Woher', 'Wohin', 'Wo'] },
      { question: 'Выберите правильный вопрос:', options: ['Sprichst du Englisch?', 'Du Englisch sprichst?', 'Sprichst Englisch du?'] },
      { question: '___ ist das? — Das ist mein Lehrer.', options: ['Wer', 'Wo', 'Wie'] }
    ]
  },
  {
    id: 'a1-akkusativ',
    level: 'A1',
    title: 'Винительный падеж (Akkusativ)',
    rule: `
      <p>Akkusativ отвечает на вопросы <b>wen? was?</b> (кого? что?) и нужен после большинства глаголов: haben, sehen, kaufen, brauchen, essen, trinken…</p>
      <p>Меняется только мужской род:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>мужской</th><th>женский</th><th>средний</th><th>мн. число</th></tr>
          <tr><td>Nominativ</td><td>der / ein / kein</td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
          <tr><td>Akkusativ</td><td><b>den / einen / keinen</b></td><td>die / eine</td><td>das / ein</td><td>die / —</td></tr>
        </table>
      </div>
      <p class="rule-example">Der Mann ist hier. → Ich sehe <b>den</b> Mann.<br>
        Das ist ein Hund. → Wir haben <b>einen</b> Hund.</p>
    `,
    exercises: [
      { question: 'Ich sehe ___ Mann. (der)', answer: 'den' },
      { question: 'Sie kauft ___ Tasche. (eine)', answer: 'eine' },
      { question: 'Wir haben ___ Hund.', options: ['einen', 'ein', 'einer'] },
      { question: 'Er liest ___ Buch.', options: ['das', 'den', 'dem'] },
      { question: 'Ich brauche ___ Stift. (kein-)', answer: 'keinen' },
      { question: 'Hast du ___ Schlüssel?', options: ['den', 'der', 'dem'] }
    ]
  },
  {
    id: 'a1-modalverben',
    level: 'A1',
    title: 'Модальные глаголы',
    rule: `
      <p>Модальный глагол стоит на втором месте и спрягается, а смысловой глагол уходит в <b>конец предложения в инфинитиве</b>. Формы <i>ich</i> и <i>er/sie/es</i> совпадают и не имеют окончания.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>können (мочь)</th><th>müssen (быть должным)</th><th>wollen (хотеть)</th><th>möchten (хотел бы)</th></tr>
          <tr><td>ich</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td></tr>
          <tr><td>du</td><td>kannst</td><td>musst</td><td>willst</td><td>möchtest</td></tr>
          <tr><td>er / sie / es</td><td>kann</td><td>muss</td><td>will</td><td>möchte</td></tr>
          <tr><td>wir</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td></tr>
          <tr><td>ihr</td><td>könnt</td><td>müsst</td><td>wollt</td><td>möchtet</td></tr>
          <tr><td>sie / Sie</td><td>können</td><td>müssen</td><td>wollen</td><td>möchten</td></tr>
        </table>
      </div>
      <p class="rule-example">Ich <b>kann</b> gut <b>schwimmen</b>. — Я хорошо умею плавать.</p>
    `,
    exercises: [
      { question: 'Ich ___ gut schwimmen. (können)', answer: 'kann' },
      { question: 'Du ___ jetzt schlafen. (müssen)', answer: 'musst' },
      { question: 'Wir ___ Pizza essen. (wollen)', answer: 'wollen' },
      { question: 'Выберите правильное предложение:', options: ['Ich möchte einen Tee trinken.', 'Ich möchte trinken einen Tee.', 'Ich trinken möchte einen Tee.'] },
      { question: 'Er ___ heute nicht kommen.', options: ['kann', 'kannt', 'können'] },
      { question: '___ Sie mir helfen?', options: ['Können', 'Kann', 'Könnt'] }
    ]
  },
  {
    id: 'a1-possessiv',
    level: 'A1',
    title: 'Притяжательные местоимения',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>ich</th><th>du</th><th>er / es</th><th>sie (она)</th><th>wir</th><th>ihr</th><th>sie (они)</th><th>Sie</th></tr>
          <tr><td>mein</td><td>dein</td><td>sein</td><td>ihr</td><td>unser</td><td>euer</td><td>ihr</td><td>Ihr</td></tr>
        </table>
      </div>
      <p>Притяжательные местоимения склоняются как <i>ein</i>: перед словами женского рода и во множественном числе добавляется <b>-e</b>, в Akkusativ мужского рода — <b>-en</b>.</p>
      <p class="rule-example">mein Bruder, mein<b>e</b> Schwester, mein<b>e</b> Eltern<br>
        Ich besuche mein<b>en</b> Bruder.</p>
    `,
    exercises: [
      { question: 'Das ist ___ Bruder. (ich)', answer: 'mein' },
      { question: 'Wo ist ___ Tasche? (du)', answer: 'deine' },
      { question: 'Peter und ___ Frau wohnen hier.', options: ['seine', 'ihre', 'sein'] },
      { question: 'Anna liebt ___ Hund.', options: ['ihren', 'seinen', 'ihr'] },
      { question: 'Das sind ___ Kinder. (wir)', answer: 'unsere' },
      { question: 'Herr Braun, ist das ___ Auto?', options: ['Ihr', 'dein', 'euer'] }
    ]
  },
  {
    id: 'a1-trennbar',
    level: 'A1',
    title: 'Глаголы с отделяемыми приставками',
    rule: `
      <p>У многих глаголов ударная приставка (<b>an-, auf-, aus-, ein-, mit-, zu-, fern-</b>…) в настоящем времени отделяется и уходит в <b>конец предложения</b>.</p>
      <p class="rule-example"><b>auf</b>stehen → Ich <b>stehe</b> um 7 Uhr <b>auf</b>.<br>
        <b>an</b>rufen → <b>Rufst</b> du mich morgen <b>an</b>?</p>
      <p>С модальным глаголом приставка не отделяется: Ich muss früh <b>aufstehen</b>.</p>
      <p>Частые глаголы: aufstehen (вставать), anrufen (звонить), einkaufen (делать покупки), mitkommen (идти вместе), fernsehen (смотреть телевизор), anfangen (начинать).</p>
    `,
    exercises: [
      { question: 'Ich ___ um sieben Uhr auf. (aufstehen)', answer: 'stehe' },
      { question: 'Wann ___ der Film an?', options: ['fängt', 'anfängt', 'fangen'] },
      { question: 'Выберите правильное предложение:', options: ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.', 'Ich rufe an dich morgen.'] },
      { question: 'Kommst du ___? (mitkommen)', answer: 'mit' },
      { question: 'Wir kaufen heute im Supermarkt ___. (einkaufen)', answer: 'ein' },
      { question: 'Er ___ jeden Abend fern.', options: ['sieht', 'fernsieht', 'sehe'] }
    ]
  },
  {
    id: 'a1-perfekt',
    level: 'A1',
    title: 'Прошедшее время Perfekt: основы',
    rule: `
      <p>Perfekt — основное прошедшее время в разговорной речи. Формула: <b>haben / sein</b> (на втором месте) + <b>Partizip II</b> (в конце).</p>
      <ul>
        <li>Правильные глаголы: <b>ge-</b> + основа + <b>-t</b>: machen → <b>ge</b>mach<b>t</b>, kaufen → gekauft, lernen → gelernt.</li>
        <li>Сильные глаголы: <b>ge-</b> … <b>-en</b>, часто с изменением корня: essen → gegessen, trinken → getrunken, sehen → gesehen.</li>
        <li>Глаголы движения образуют Perfekt с <b>sein</b>: gehen → ist gegangen, fahren → ist gefahren, kommen → ist gekommen.</li>
      </ul>
      <p class="rule-example">Ich <b>habe</b> Deutsch <b>gelernt</b>.<br>
        Wir <b>sind</b> nach Berlin <b>gefahren</b>.</p>
    `,
    exercises: [
      { question: 'Ich habe Deutsch ___. (lernen)', answer: 'gelernt' },
      { question: 'Was hast du gestern ___? (machen)', answer: 'gemacht' },
      { question: 'Wir ___ nach Berlin gefahren.', options: ['sind', 'haben', 'seid'] },
      { question: 'Er ___ eine Pizza gegessen.', options: ['hat', 'ist', 'habt'] },
      { question: 'Sie hat ein Auto ___. (kaufen)', answer: 'gekauft' },
      { question: 'Выберите правильное предложение:', options: ['Ich habe gestern Fußball gespielt.', 'Ich habe gespielt gestern Fußball.', 'Ich gespielt habe gestern Fußball.'] }
    ]
  },
  {
    id: 'a1-imperativ',
    level: 'A1',
    title: 'Повелительное наклонение (Imperativ)',
    rule: `
      <p>Imperativ выражает просьбу, совет или приказ. Форма зависит от того, к кому обращаются.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>kommen</th><th>warten</th><th>nehmen</th><th>sein</th></tr>
          <tr><td>du</td><td>Komm!</td><td>Warte!</td><td>Nimm!</td><td>Sei!</td></tr>
          <tr><td>ihr</td><td>Kommt!</td><td>Wartet!</td><td>Nehmt!</td><td>Seid!</td></tr>
          <tr><td>Sie</td><td>Kommen Sie!</td><td>Warten Sie!</td><td>Nehmen Sie!</td><td>Seien Sie!</td></tr>
        </table>
      </div>
      <ul>
        <li>Форма <b>du</b>: глагол без окончания -st и без местоимения. Смена e → i сохраняется (nimm, gib, lies), а умлаут исчезает (du fährst → fahr!).</li>
        <li>Отделяемая приставка уходит в конец: <b>Ruf</b> mich <b>an</b>!</li>
        <li>Слово <b>bitte</b> делает просьбу вежливой: Kommen Sie bitte herein.</li>
      </ul>
    `,
    exercises: [
      { question: '___ bitte das Fenster auf! (du, aufmachen)', answer: 'Mach' },
      { question: '___ Sie bitte hier! (warten)', answer: 'Warten' },
      { question: '___ mir bitte das Buch! (du, geben)', options: ['Gib', 'Gibst', 'Geb'] },
      { question: 'Kinder, ___ bitte leise! (sein)', options: ['seid', 'sei', 'sind'] },
      { question: 'Выберите правильное предложение:', options: ['Ruf mich bitte morgen an!', 'Anruf mich bitte morgen!', 'Rufst mich bitte morgen an!'] },
      { question: '___ nicht so schnell! (du, fahren)', answer: 'Fahr', alsoCorrect: ['Fahre'] }
    ]
  },
  {
    id: 'a1-plural',
    level: 'A1',
    title: 'Множественное число существительных',
    rule: `
      <p>Во множественном числе у всех существительных артикль <b>die</b>. Единого правила для окончаний нет, поэтому форму множественного числа лучше учить вместе со словом.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>окончание</th><th>примеры</th></tr>
          <tr><td>-e (часто с умлаутом)</td><td>der Tisch → die Tisch<b>e</b>, der Stuhl → die St<b>ü</b>hl<b>e</b></td></tr>
          <tr><td>-er (с умлаутом)</td><td>das Kind → die Kind<b>er</b>, das Buch → die B<b>ü</b>ch<b>er</b></td></tr>
          <tr><td>-n / -en</td><td>die Lampe → die Lampe<b>n</b>, die Frau → die Frau<b>en</b></td></tr>
          <tr><td>-s</td><td>das Auto → die Auto<b>s</b>, das Hotel → die Hotel<b>s</b></td></tr>
          <tr><td>без окончания</td><td>der Lehrer → die Lehrer, der Bruder → die Br<b>ü</b>der</td></tr>
        </table>
      </div>
      <p>Слова женского рода на <b>-e</b> почти всегда получают <b>-n</b>.</p>
    `,
    exercises: [
      { question: 'Wir haben zwei ___. (Kind)', answer: 'Kinder' },
      { question: 'Vor dem Haus stehen drei ___. (Auto)', answer: 'Autos' },
      { question: 'Ich lese viele ___. (Buch)', answer: 'Bücher' },
      { question: 'Die ___ sind neu.', options: ['Lampen', 'Lampe', 'Lampes'] },
      { question: 'Ich habe zwei ___.', options: ['Brüder', 'Bruders', 'Brudern'] },
      { question: 'Im Zimmer stehen vier ___. (Stuhl)', answer: 'Stühle' }
    ]
  },
  {
    id: 'a1-zeitangaben',
    level: 'A1',
    title: 'Время: um, am, im, von … bis',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>предлог</th><th>когда</th><th>пример</th></tr>
          <tr><td><b>um</b></td><td>точное время</td><td>um neun Uhr, um halb acht</td></tr>
          <tr><td><b>am</b></td><td>дни недели, даты, части дня</td><td>am Montag, am 5. Mai, am Abend</td></tr>
          <tr><td><b>im</b></td><td>месяцы, времена года, годы с «Jahr»</td><td>im Juli, im Sommer, im Jahr 2020</td></tr>
          <tr><td><b>von … bis</b></td><td>промежуток</td><td>von acht bis fünf, von Montag bis Freitag</td></tr>
        </table>
      </div>
      <p>Исключение: <b>in der Nacht</b>. Год называют без предлога: Ich bin 1995 geboren.</p>
    `,
    exercises: [
      { question: 'Der Kurs beginnt ___ neun Uhr.', answer: 'um' },
      { question: '___ Montag habe ich frei.', answer: 'Am' },
      { question: '___ Sommer fahren wir ans Meer.', answer: 'Im' },
      { question: 'Ich arbeite ___ acht bis fünf.', options: ['von', 'um', 'am'] },
      { question: '___ Abend sehe ich fern.', options: ['Am', 'Im', 'Um'] },
      { question: '___ der Nacht schlafe ich.', options: ['In', 'Am', 'Um'] }
    ]
  }
];
