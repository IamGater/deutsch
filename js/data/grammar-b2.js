// Грамматика B2: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_B2 = [
  {
    id: 'b2-konjunktiv1',
    level: 'B2',
    title: 'Konjunktiv I и косвенная речь',
    rule: `
      <p>Konjunktiv I используют в письменной речи и новостях, чтобы передать чужие слова, не подтверждая их.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>sein</th><th>haben</th><th>kommen</th><th>können</th></tr>
          <tr><td>ich</td><td>sei</td><td>habe</td><td>komme</td><td>könne</td></tr>
          <tr><td>er / sie / es</td><td><b>sei</b></td><td><b>habe</b></td><td><b>komme</b></td><td><b>könne</b></td></tr>
          <tr><td>wir / sie</td><td>seien</td><td>haben → <b>hätten</b></td><td>kommen → <b>kämen / würden kommen</b></td><td>können → <b>könnten</b></td></tr>
        </table>
      </div>
      <ul>
        <li>Чаще всего нужна форма 3-го лица единственного числа: основа + <b>-e</b>.</li>
        <li>Если форма совпадает с Indikativ (обычно во множественном числе), её заменяют на Konjunktiv II.</li>
        <li>Прошедшее время: <b>habe / sei</b> + Partizip II.</li>
      </ul>
      <p class="rule-example">Er sagt: „Ich habe keine Zeit.“ → Er sagt, er <b>habe</b> keine Zeit.<br>
        „Wir sind zu spät gekommen.“ → Sie sagten, sie <b>seien</b> zu spät gekommen.</p>
    `,
    exercises: [
      { question: 'Er sagt, er ___ keine Zeit. (haben)', answer: 'habe' },
      { question: 'Die Ministerin erklärte, die Lage ___ ernst. (sein)', answer: 'sei' },
      { question: 'Der Sprecher teilte mit, der Minister ___ morgen nach Paris. (Konjunktiv I)', options: ['reise', 'reiste', 'reisen'] },
      { question: 'Sie sagten, sie ___ nichts davon gewusst. (haben — замещающая форма)', answer: 'hätten' },
      { question: 'Er behauptet, er ___ das allein schaffen. (können)', answer: 'könne' },
      { question: 'Die Polizei meldet, der Täter ___ geflohen.', options: ['sei', 'habe', 'seien'] }
    ]
  },
  {
    id: 'b2-konjunktiv2-vergangenheit',
    level: 'B2',
    title: 'Konjunktiv II прошедшего времени',
    rule: `
      <p>Для нереальных событий в прошлом используется <b>hätte / wäre</b> + <b>Partizip II</b>.</p>
      <p class="rule-example">Wenn ich das gewusst <b>hätte</b>, <b>wäre</b> ich gekommen. — Если бы я это знал, я бы пришёл.</p>
      <ul>
        <li>С модальным глаголом — два инфинитива в конце: Du <b>hättest</b> mich anrufen <b>sollen</b>. — Тебе следовало мне позвонить.</li>
        <li>Нереальное желание: <b>Hätte</b> ich doch mehr gelernt! — Вот бы я больше учился!</li>
        <li>Сравнение с <b>als ob</b>: Er tut so, als ob er nichts gehört <b>hätte</b>.</li>
        <li>Условие без wenn: глагол на первом месте — <b>Hätte</b> ich Zeit gehabt, wäre ich gekommen.</li>
      </ul>
    `,
    exercises: [
      { question: 'Wenn ich das gewusst ___, wäre ich gekommen.', answer: 'hätte' },
      { question: 'Wenn wir früher losgefahren ___, hätten wir den Zug erreicht.', answer: 'wären' },
      { question: 'Выберите правильное предложение:', options: ['Du hättest mich anrufen sollen.', 'Du hättest mich sollen anrufen.', 'Du hast mich anrufen gesollt.'] },
      { question: '___ ich doch mehr gelernt!', options: ['Hätte', 'Wäre', 'Würde'] },
      { question: 'Er tut so, als ob er nichts gehört ___.', answer: 'hätte' },
      { question: 'Ohne deine Hilfe ___ ich es nicht geschafft.', options: ['hätte', 'wäre', 'würde'] }
    ]
  },
  {
    id: 'b2-passiv-ersatz',
    level: 'B2',
    title: 'Пассив состояния и замены пассива',
    rule: `
      <p><b>Zustandspassiv</b> (sein + Partizip II) описывает результат действия: Das Geschäft <b>ist</b> geschlossen. Сравните с процессом: Das Geschäft <b>wird</b> geschlossen.</p>
      <p>Пассив с модальным глаголом часто заменяют более короткими конструкциями:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>конструкция</th><th>пример</th><th>значение</th></tr>
          <tr><td>sein + zu + Infinitiv</td><td>Die Regel ist zu beachten.</td><td>= muss beachtet werden</td></tr>
          <tr><td>sich lassen + Infinitiv</td><td>Das Problem lässt sich lösen.</td><td>= kann gelöst werden</td></tr>
          <tr><td>-bar / -lich</td><td>Die Schrift ist lesbar.</td><td>= kann gelesen werden</td></tr>
          <tr><td>man</td><td>Man kann das Problem lösen.</td><td>= kann gelöst werden</td></tr>
        </table>
      </div>
      <p>У глаголов с отделяемой приставкой <b>zu</b> встаёт в середину: Das Formular ist ab<b>zu</b>geben.</p>
    `,
    exercises: [
      { question: 'Das Geschäft ___ seit gestern geschlossen. (Zustandspassiv)', answer: 'ist' },
      { question: 'Das Formular ist bis Freitag ___. (abgeben)', answer: 'abzugeben' },
      { question: 'Das Problem ___ sich leicht lösen.', options: ['lässt', 'wird', 'ist'] },
      { question: 'Die Schrift kann nicht gelesen werden. = Die Schrift ist nicht ___.', options: ['lesbar', 'lesend', 'gelesen'] },
      { question: 'Die Tür lässt sich nicht öffnen. = Die Tür ___ nicht geöffnet werden.', answer: 'kann' },
      { question: 'Diese Regel ist unbedingt zu ___. (beachten)', answer: 'beachten' }
    ]
  },
  {
    id: 'b2-partizipien',
    level: 'B2',
    title: 'Причастия как определение',
    rule: `
      <p>Причастия перед существительным склоняются как прилагательные и заменяют придаточное предложение.</p>
      <ul>
        <li><b>Partizip I</b> (инфинитив + <b>-d</b>) — действие активное и одновременное: das spielen<b>d</b>e Kind = das Kind, das spielt.</li>
        <li><b>Partizip II</b> — действие пассивное или завершённое: das reparierte Auto = das Auto, das repariert wurde.</li>
        <li>Распространённое определение: все зависимые слова стоят между артиклем и причастием — die <b>gestern gelieferte</b> Ware.</li>
        <li><b>zu + Partizip I</b> — то, что нужно или можно сделать: die <b>zu lösende</b> Aufgabe = die Aufgabe, die gelöst werden muss.</li>
      </ul>
    `,
    exercises: [
      { question: 'Das ___ Kind lief zu seiner Mutter. (weinen)', answer: 'weinende' },
      { question: 'Das gestern ___ Paket ist beschädigt. (liefern)', answer: 'gelieferte' },
      { question: 'Die ___ Preise machen vielen Sorgen.', options: ['steigenden', 'gestiegene', 'steigende'] },
      { question: 'Der Mechaniker bringt das ___ Auto zurück.', options: ['reparierte', 'reparierende', 'repariert'] },
      { question: 'Der Zug, der gerade ankommt = der gerade ___ Zug', answer: 'ankommende' },
      { question: 'Die Aufgabe, die gelöst werden muss = die zu ___ Aufgabe', answer: 'lösende' }
    ]
  },
  {
    id: 'b2-nomen-verb',
    level: 'B2',
    title: 'Устойчивые сочетания существительного с глаголом',
    rule: `
      <p>В официальной и письменной речи простой глагол часто заменяют сочетанием существительного с «пустым» глаголом. Глагол в таких сочетаниях фиксирован — их нужно заучивать целиком.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>сочетание</th><th>значение</th></tr>
          <tr><td>eine Entscheidung treffen</td><td>entscheiden</td></tr>
          <tr><td>einen Antrag stellen</td><td>beantragen</td></tr>
          <tr><td>Kritik üben an</td><td>kritisieren</td></tr>
          <tr><td>in Frage kommen</td><td>möglich sein</td></tr>
          <tr><td>zur Verfügung stehen</td><td>verfügbar sein</td></tr>
          <tr><td>Rücksicht nehmen auf</td><td>berücksichtigen</td></tr>
          <tr><td>in Anspruch nehmen</td><td>nutzen</td></tr>
          <tr><td>zum Ausdruck bringen</td><td>ausdrücken</td></tr>
          <tr><td>Bescheid geben</td><td>informieren</td></tr>
          <tr><td>eine Rolle spielen</td><td>wichtig sein</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { question: 'Wir müssen bald eine Entscheidung ___.', options: ['treffen', 'machen', 'nehmen'] },
      { question: 'Das kommt nicht in ___.', answer: 'Frage' },
      { question: 'Die Unterlagen stehen Ihnen zur ___.', answer: 'Verfügung' },
      { question: 'Bitte nehmen Sie ___ auf Ihre Nachbarn.', options: ['Rücksicht', 'Vorsicht', 'Aussicht'] },
      { question: 'Ich möchte einen Antrag ___.', options: ['stellen', 'setzen', 'legen'] },
      { question: 'Die Opposition ___ Kritik an der Regierung.', options: ['übt', 'macht', 'tut'] }
    ]
  },
  {
    id: 'b2-zweiteilige-konnektoren',
    level: 'B2',
    title: 'Двойные союзы',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>союз</th><th>значение</th><th>пример</th></tr>
          <tr><td>sowohl … als auch</td><td>как …, так и</td><td>Sie spricht sowohl Englisch als auch Spanisch.</td></tr>
          <tr><td>nicht nur … sondern auch</td><td>не только …, но и</td><td>Er ist nicht nur klug, sondern auch fleißig.</td></tr>
          <tr><td>weder … noch</td><td>ни … ни</td><td>Ich habe weder Zeit noch Lust.</td></tr>
          <tr><td>entweder … oder</td><td>либо … либо</td><td>Entweder kommst du mit, oder du bleibst hier.</td></tr>
          <tr><td>zwar … aber</td><td>хотя …, но</td><td>Das Hotel ist zwar teuer, aber sehr gut.</td></tr>
          <tr><td>je … desto / umso</td><td>чем …, тем</td><td>Je mehr ich lerne, desto besser verstehe ich.</td></tr>
        </table>
      </div>
      <p>После <b>je</b> — порядок слов придаточного (глагол в конце), после <b>desto</b> — сравнительная степень и сразу глагол: Je länger ich warte, desto nervöser <b>werde</b> ich.</p>
    `,
    exercises: [
      { question: 'Sie spricht sowohl Englisch ___ auch Französisch.', answer: 'als' },
      { question: 'Er hat weder Zeit ___ Lust.', answer: 'noch' },
      { question: 'Je mehr ich lerne, ___ besser verstehe ich.', options: ['desto', 'als', 'wie'] },
      { question: 'Entweder kommst du mit, ___ du bleibst zu Hause.', answer: 'oder' },
      { question: 'Das Hotel ist zwar teuer, ___ sehr gut.', options: ['aber', 'sondern', 'oder'] },
      { question: 'Sie ist nicht nur klug, ___ auch fleißig.', answer: 'sondern' }
    ]
  },
  {
    id: 'b2-praepositionaladverbien',
    level: 'B2',
    title: 'Глаголы с предлогами: da(r)- и wo(r)-',
    rule: `
      <p>Многие глаголы и прилагательные требуют определённого предлога: warten <b>auf</b>, denken <b>an</b>, sich kümmern <b>um</b>, abhängen <b>von</b>, sich beschäftigen <b>mit</b>, stolz <b>auf</b>.</p>
      <ul>
        <li>О <b>предметах и ситуациях</b>: <b>da(r)-</b> + предлог и вопрос <b>wo(r)-</b> + предлог: <b>Worauf</b> wartest du? — Ich warte <b>darauf</b>.</li>
        <li>О <b>людях</b>: предлог + местоимение: <b>Auf wen</b> wartest du? — Ich warte <b>auf ihn</b>.</li>
        <li><b>-r-</b> вставляется перед гласной: da<b>r</b>auf, da<b>r</b>über, wo<b>r</b>an.</li>
        <li>da(r)- может указывать на придаточное: Das hängt <b>davon</b> ab, ob er Zeit hat.</li>
      </ul>
    `,
    exercises: [
      { question: '___ wartest du? — Auf den Bus.', answer: 'worauf' },
      { question: 'Erinnerst du dich an den Urlaub? — Ja, ich erinnere mich gern ___.', answer: 'daran' },
      { question: 'Kümmerst du dich um die Kinder? — Ja, ich kümmere mich um ___.', options: ['sie', 'darum', 'ihnen'] },
      { question: 'Das hängt ___ ab, wie viel Zeit wir haben.', options: ['davon', 'daran', 'darauf'] },
      { question: 'Sie ist stolz ___ ihre Tochter.', options: ['auf', 'über', 'an'] },
      { question: '___ beschäftigst du dich gerade? — Mit meiner Masterarbeit.', answer: 'womit' }
    ]
  },
  {
    id: 'b2-modalverben-subjektiv',
    level: 'B2',
    title: 'Модальные глаголы в значении предположения',
    rule: `
      <p>Модальные глаголы могут выражать степень уверенности говорящего или чужое утверждение.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>глагол</th><th>значение</th><th>пример</th></tr>
          <tr><td>muss</td><td>почти уверен</td><td>Er muss krank sein.</td></tr>
          <tr><td>dürfte</td><td>вероятно</td><td>Das dürfte stimmen.</td></tr>
          <tr><td>könnte / kann</td><td>возможно</td><td>Sie könnte recht haben.</td></tr>
          <tr><td>soll</td><td>говорят, что…</td><td>Er soll sehr reich sein.</td></tr>
          <tr><td>will</td><td>он сам утверждает</td><td>Er will nichts gesehen haben.</td></tr>
        </table>
      </div>
      <p>О прошлом — модальный глагол + <b>Partizip II + haben / sein</b>: Sie <b>muss</b> den Zug verpasst <b>haben</b>. Er <b>könnte</b> schon gegangen <b>sein</b>.</p>
    `,
    exercises: [
      { question: 'Er ___ krank sein — er fehlt sonst nie. (я почти уверен)', options: ['muss', 'soll', 'will'] },
      { question: 'Sie ___ sehr reich sein. (так говорят)', options: ['soll', 'muss', 'will'] },
      { question: 'Er ___ den Unfall nicht gesehen haben. (так утверждает он сам)', options: ['will', 'soll', 'dürfte'] },
      { question: 'Das ___ etwa eine Stunde dauern. (вероятно)', options: ['dürfte', 'soll', 'will'] },
      { question: 'Sie muss den Zug verpasst ___.', answer: 'haben' },
      { question: 'Er könnte schon nach Hause gegangen ___.', answer: 'sein' }
    ]
  }
];
