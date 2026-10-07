// Грамматика A2: правила и упражнения.
// В упражнении есть либо options — варианты ответа (первый всегда правильный, на экране они перемешиваются),
// либо answer — слово, которое нужно вписать вместо ___.
const GRAMMAR_A2 = [
  {
    id: 'a2-dativ',
    level: 'A2',
    title: 'Дательный падеж (Dativ)',
    rule: `
      <p>Dativ отвечает на вопрос <b>wem?</b> (кому?) и употребляется после глаголов helfen, geben, danken, gefallen, gehören, а также всегда после предлогов <b>aus, bei, mit, nach, seit, von, zu</b>.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>мужской</th><th>женский</th><th>средний</th><th>мн. число</th></tr>
          <tr><td>Dativ</td><td>dem / einem</td><td>der / einer</td><td>dem / einem</td><td>den + <b>-n</b></td></tr>
        </table>
      </div>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>ich</th><th>du</th><th>er</th><th>sie</th><th>es</th><th>wir</th><th>ihr</th><th>sie / Sie</th></tr>
          <tr><td>mir</td><td>dir</td><td>ihm</td><td>ihr</td><td>ihm</td><td>uns</td><td>euch</td><td>ihnen / Ihnen</td></tr>
        </table>
      </div>
      <p class="rule-example">Ich fahre mit <b>dem</b> Bus. Ich helfe <b>der</b> Mutter. Kannst du <b>mir</b> helfen?</p>
    `,
    exercises: [
      { question: 'Ich fahre mit ___ Bus. (der)', answer: 'dem' },
      { question: 'Sie hilft ___ Mutter. (die)', answer: 'der' },
      { question: 'Kannst du ___ helfen? (ich)', answer: 'mir' },
      { question: 'Wir wohnen bei ___ Freund.', options: ['einem', 'einen', 'ein'] },
      { question: 'Ich gebe ___ das Buch.', options: ['ihm', 'ihn', 'er'] },
      { question: 'Nach ___ Arbeit gehe ich einkaufen.', options: ['der', 'die', 'dem'] }
    ]
  },
  {
    id: 'a2-wechselpraepositionen',
    level: 'A2',
    title: 'Предлоги места: Dativ или Akkusativ',
    rule: `
      <p>Девять предлогов — <b>in, an, auf, unter, über, vor, hinter, neben, zwischen</b> — требуют разного падежа в зависимости от вопроса:</p>
      <ul>
        <li><b>Wo?</b> (где? — положение) → <b>Dativ</b>: Das Buch liegt auf <b>dem</b> Tisch.</li>
        <li><b>Wohin?</b> (куда? — направление) → <b>Akkusativ</b>: Ich lege das Buch auf <b>den</b> Tisch.</li>
      </ul>
      <p>Слияния: in + dem = <b>im</b>, in + das = <b>ins</b>, an + dem = <b>am</b>, an + das = <b>ans</b>.</p>
      <p>Пары глаголов: liegen / legen (лежать / класть), stehen / stellen (стоять / ставить), hängen (висеть / вешать).</p>
    `,
    exercises: [
      { question: 'Das Buch liegt auf ___ Tisch.', options: ['dem', 'den', 'der'] },
      { question: 'Ich lege das Buch auf ___ Tisch.', options: ['den', 'dem', 'der'] },
      { question: 'Wir gehen ___ Kino. (in + das)', answer: 'ins' },
      { question: 'Die Lampe hängt über ___ Sofa. (das)', answer: 'dem' },
      { question: 'Er stellt die Flasche in ___ Kühlschrank.', options: ['den', 'dem', 'der'] },
      { question: 'Die Kinder spielen ___ Garten. (in + dem)', answer: 'im' }
    ]
  },
  {
    id: 'a2-perfekt',
    level: 'A2',
    title: 'Perfekt: sein или haben, формы причастий',
    rule: `
      <p>С <b>sein</b> Perfekt образуют глаголы движения и смены состояния (gehen, fahren, kommen, fliegen, aufstehen, einschlafen), а также <b>sein, bleiben, werden, passieren</b>. Остальные — с <b>haben</b>.</p>
      <p>Особенности причастий:</p>
      <ul>
        <li>отделяемая приставка: <b>ge</b> встаёт в середину — einkaufen → ein<b>ge</b>kauft, aufstehen → auf<b>ge</b>standen;</li>
        <li>неотделяемые приставки (be-, ver-, er-, ent-, zer-, ge-): без <b>ge-</b> — besuchen → besucht, verstehen → verstanden;</li>
        <li>глаголы на <b>-ieren</b>: без <b>ge-</b> — studieren → studiert.</li>
      </ul>
    `,
    exercises: [
      { question: 'Ich ___ gestern früh aufgestanden. (sein / haben)', answer: 'bin' },
      { question: 'Wir haben im Supermarkt ___. (einkaufen)', answer: 'eingekauft' },
      { question: 'Er hat in München ___. (studieren)', answer: 'studiert' },
      { question: 'Sie ___ zu Hause geblieben.', options: ['ist', 'hat', 'sind'] },
      { question: 'Ich habe meine Oma ___.', options: ['besucht', 'gebesucht', 'besuchen'] },
      { question: 'Hast du den Brief ___? (schreiben)', answer: 'geschrieben' }
    ]
  },
  {
    id: 'a2-praeteritum',
    level: 'A2',
    title: 'Präteritum: sein, haben и модальные глаголы',
    rule: `
      <p>Для глаголов <b>sein</b>, <b>haben</b> и модальных в прошедшем времени даже в разговорной речи используют Präteritum, а не Perfekt.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>sein</th><th>haben</th><th>können</th><th>müssen</th><th>wollen</th></tr>
          <tr><td>ich</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td><td>wollte</td></tr>
          <tr><td>du</td><td>warst</td><td>hattest</td><td>konntest</td><td>musstest</td><td>wolltest</td></tr>
          <tr><td>er / sie / es</td><td>war</td><td>hatte</td><td>konnte</td><td>musste</td><td>wollte</td></tr>
          <tr><td>wir</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td><td>wollten</td></tr>
          <tr><td>ihr</td><td>wart</td><td>hattet</td><td>konntet</td><td>musstet</td><td>wolltet</td></tr>
          <tr><td>sie / Sie</td><td>waren</td><td>hatten</td><td>konnten</td><td>mussten</td><td>wollten</td></tr>
        </table>
      </div>
      <p>У модальных глаголов в Präteritum пропадает умлаут: können → k<b>o</b>nnte, müssen → m<b>u</b>sste, dürfen → d<b>u</b>rfte.</p>
    `,
    exercises: [
      { question: 'Gestern ___ ich krank. (sein)', answer: 'war' },
      { question: 'Wir ___ keine Zeit. (haben)', answer: 'hatten' },
      { question: 'Als Kind ___ ich nicht schwimmen. (können)', answer: 'konnte' },
      { question: 'Wo ___ du gestern?', options: ['warst', 'wart', 'war'] },
      { question: 'Er ___ früh aufstehen.', options: ['musste', 'müsste', 'musstet'] },
      { question: '___ ihr im Urlaub gutes Wetter? (haben)', answer: 'hattet' }
    ]
  },
  {
    id: 'a2-nebensatz',
    level: 'A2',
    title: 'Придаточные с weil, dass, wenn',
    rule: `
      <p>В придаточном предложении спрягаемый глагол стоит <b>в самом конце</b>. Придаточное всегда отделяется запятой.</p>
      <ul>
        <li><b>weil</b> — потому что: Ich bleibe zu Hause, weil ich krank <b>bin</b>.</li>
        <li><b>dass</b> — что: Ich weiß, dass er morgen <b>kommt</b>.</li>
        <li><b>wenn</b> — если, когда: Wenn ich Zeit <b>habe</b>, rufe ich dich an.</li>
      </ul>
      <p>Если придаточное стоит первым, главное предложение начинается с глагола: Wenn es regnet, <b>bleiben</b> wir zu Hause.</p>
      <p>Сравните: <b>denn</b> тоже значит «потому что», но порядок слов после него не меняется.</p>
    `,
    exercises: [
      { question: 'Ich bleibe zu Hause, weil ich krank ___. (sein)', answer: 'bin' },
      { question: 'Выберите правильное предложение:', options: ['Ich weiß, dass er morgen kommt.', 'Ich weiß, dass er kommt morgen.', 'Ich weiß, dass kommt er morgen.'] },
      { question: '___ es regnet, bleiben wir zu Hause.', options: ['Wenn', 'Dass', 'Denn'] },
      { question: 'Er lernt Deutsch, ___ er in Deutschland arbeiten möchte.', options: ['weil', 'dass', 'ob'] },
      { question: 'Sie sagt, ___ sie keine Zeit hat.', answer: 'dass' },
      { question: 'Выберите правильное предложение:', options: ['Wenn ich Zeit habe, rufe ich dich an.', 'Wenn ich habe Zeit, ich rufe dich an.', 'Wenn ich Zeit habe, ich rufe dich an.'] }
    ]
  },
  {
    id: 'a2-komparation',
    level: 'A2',
    title: 'Степени сравнения',
    rule: `
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th></th><th>сравнительная</th><th>превосходная</th></tr>
          <tr><td>klein</td><td>klein<b>er</b></td><td>am klein<b>sten</b></td></tr>
          <tr><td>alt</td><td><b>ä</b>lter</td><td>am <b>ä</b>ltesten</td></tr>
          <tr><td>groß</td><td>größer</td><td>am größten</td></tr>
          <tr><td>gut</td><td><b>besser</b></td><td>am <b>besten</b></td></tr>
          <tr><td>viel</td><td><b>mehr</b></td><td>am <b>meisten</b></td></tr>
          <tr><td>gern</td><td><b>lieber</b></td><td>am <b>liebsten</b></td></tr>
        </table>
      </div>
      <ul>
        <li>Сравнение неравного — с <b>als</b>: Berlin ist größer <b>als</b> Bonn.</li>
        <li>Сравнение равного — <b>so … wie</b>: Er ist so alt <b>wie</b> ich.</li>
        <li>Перед существительным превосходная степень получает артикль и окончание: das schön<b>ste</b> Haus.</li>
      </ul>
    `,
    exercises: [
      { question: 'Berlin ist ___ als München. (groß)', answer: 'größer' },
      { question: 'Ich trinke ___ Tee als Kaffee. (gern)', answer: 'lieber' },
      { question: 'Dieser Film ist am ___. (gut)', answer: 'besten' },
      { question: 'Er ist so alt ___ ich.', options: ['wie', 'als', 'dass'] },
      { question: 'Mein Bruder ist ___ als ich. (alt)', answer: 'älter' },
      { question: 'Das ist das ___ Haus der Stadt.', options: ['schönste', 'schöner', 'am schönsten'] }
    ]
  },
  {
    id: 'a2-reflexiv',
    level: 'A2',
    title: 'Возвратные глаголы',
    rule: `
      <p>Возвратное местоимение соответствует русскому «-ся», но изменяется по лицам:</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>ich</th><th>du</th><th>er / sie / es</th><th>wir</th><th>ihr</th><th>sie / Sie</th></tr>
          <tr><td>mich</td><td>dich</td><td>sich</td><td>uns</td><td>euch</td><td>sich</td></tr>
        </table>
      </div>
      <p class="rule-example">sich freuen → Ich freue <b>mich</b>. Er freut <b>sich</b>. Wir freuen <b>uns</b>.</p>
      <p>Частые глаголы: sich freuen auf / über (радоваться), sich interessieren für (интересоваться), sich treffen (встречаться), sich fühlen (чувствовать себя), sich waschen (мыться), sich setzen (садиться), sich erinnern an (вспоминать).</p>
    `,
    exercises: [
      { question: 'Ich freue ___ auf das Wochenende.', answer: 'mich' },
      { question: 'Wir treffen ___ um acht.', answer: 'uns' },
      { question: 'Er interessiert ___ für Musik.', options: ['sich', 'ihn', 'ihm'] },
      { question: 'Wie fühlst du ___ heute?', options: ['dich', 'dir', 'sich'] },
      { question: 'Die Kinder waschen ___ die Hände.', options: ['sich', 'ihnen', 'sie'] },
      { question: 'Setzt ___ bitte! (ihr)', answer: 'euch' }
    ]
  },
  {
    id: 'a2-adjektivdeklination',
    level: 'A2',
    title: 'Склонение прилагательных: основы',
    rule: `
      <p>Перед существительным прилагательное получает окончание. Оно зависит от артикля, рода и падежа.</p>
      <div class="table-scroll">
        <table class="rule-table">
          <tr><th>Nominativ</th><th>мужской</th><th>женский</th><th>средний</th></tr>
          <tr><td>после der / die / das</td><td>der alt<b>e</b> Mann</td><td>die jung<b>e</b> Frau</td><td>das klein<b>e</b> Kind</td></tr>
          <tr><td>после ein / eine</td><td>ein alt<b>er</b> Mann</td><td>eine jung<b>e</b> Frau</td><td>ein klein<b>es</b> Kind</td></tr>
        </table>
      </div>
      <ul>
        <li>Akkusativ мужского рода: всегда <b>-en</b> — den / einen neu<b>en</b> Mantel.</li>
        <li>Dativ: всегда <b>-en</b> — in einem klein<b>en</b> Haus, mit der neu<b>en</b> Kollegin.</li>
        <li>Множественное число с артиклем: <b>-en</b> — die neu<b>en</b> Bücher.</li>
      </ul>
    `,
    exercises: [
      { question: 'Das ist ein ___ Film. (gut)', answer: 'guter' },
      { question: 'Ich kaufe einen ___ Mantel. (neu)', answer: 'neuen' },
      { question: 'Die ___ Frau ist meine Lehrerin. (jung)', answer: 'junge' },
      { question: 'Wir wohnen in einem ___ Haus.', options: ['kleinen', 'kleines', 'kleine'] },
      { question: 'Sie hat ein ___ Auto.', options: ['rotes', 'roter', 'roten'] },
      { question: 'Der ___ Mann heißt Karl.', options: ['alte', 'alter', 'alten'] }
    ]
  }
];
