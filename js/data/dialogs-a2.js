// Диалоги A2.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_A2 = [
  {
    id: 'a2-arzt',
    level: 'A2',
    title: 'У врача',
    scene: 'Вы пришли на приём к врачу.',
    turns: [
      { speaker: 'partner', german: 'Guten Tag. Was fehlt Ihnen denn?', russian: 'Добрый день. Что вас беспокоит?' },
      {
        speaker: 'me',
        german: 'Ich habe seit drei Tagen starke Halsschmerzen.',
        russian: 'У меня уже три дня сильно болит горло.',
        wrong: [
          'Ich habe vor drei Tagen starke Halsschmerzen.',
          'Ich habe seit drei Tage starke Halsschmerzen.'
        ]
      },
      { speaker: 'partner', german: 'Haben Sie auch Fieber?', russian: 'Температура тоже есть?' },
      {
        speaker: 'me',
        german: 'Ja, gestern Abend hatte ich 38,5.',
        russian: 'Да, вчера вечером было 38,5.',
        wrong: [
          'Ja, gestern Abend habe ich 38,5 gehaben.',
          'Ja, gestern Abend war ich 38,5.'
        ]
      },
      { speaker: 'partner', german: 'Ich verstehe. Nehmen Sie schon Medikamente?', russian: 'Понятно. Вы уже принимаете лекарства?' },
      {
        speaker: 'me',
        german: 'Nein, ich habe bisher nichts genommen.',
        russian: 'Нет, пока я ничего не принимал.',
        wrong: [
          'Nein, ich habe bisher nichts genehmt.',
          'Nein, ich bin bisher nichts genommen.'
        ]
      },
      { speaker: 'partner', german: 'Gut. Ich verschreibe Ihnen Tabletten. Nehmen Sie sie dreimal täglich nach dem Essen.', russian: 'Хорошо. Я выпишу вам таблетки. Принимайте их три раза в день после еды.' },
      {
        speaker: 'me',
        german: 'Muss ich zu Hause bleiben?',
        russian: 'Мне нужно оставаться дома?',
        wrong: [
          'Muss ich zu Hause zu bleiben?',
          'Muss ich bleiben zu Hause?'
        ]
      },
      { speaker: 'partner', german: 'Ja, ich schreibe Sie bis Freitag krank. Sie sollten viel trinken und sich ausruhen.', russian: 'Да, я выпишу вам больничный до пятницы. Вам следует много пить и отдыхать.' },
      {
        speaker: 'me',
        german: 'Soll ich wiederkommen, wenn es nicht besser wird?',
        russian: 'Мне прийти снова, если не станет лучше?',
        wrong: [
          'Soll ich wiederkommen, wenn es wird nicht besser?',
          'Soll ich wiederkommen, wenn wird es nicht besser?'
        ]
      },
      { speaker: 'partner', german: 'Ja, dann kommen Sie bitte nächste Woche noch einmal. Gute Besserung!', russian: 'Да, тогда приходите, пожалуйста, на следующей неделе. Выздоравливайте!' },
      {
        speaker: 'me',
        german: 'Vielen Dank, Herr Doktor. Auf Wiedersehen!',
        russian: 'Большое спасибо, доктор. До свидания!',
        wrong: [
          'Vielen Dank, Herr Doktor. Gute Besserung!',
          'Viel Dank, Herr Doktor. Auf Wiedersehen!'
        ]
      }
    ]
  },
  {
    id: 'a2-kleidung',
    level: 'A2',
    title: 'В магазине одежды',
    scene: 'Вы выбираете куртку в магазине.',
    turns: [
      { speaker: 'partner', german: 'Guten Tag! Kann ich Ihnen helfen?', russian: 'Добрый день! Могу я вам помочь?' },
      {
        speaker: 'me',
        german: 'Ja, ich suche eine warme Jacke für den Winter.',
        russian: 'Да, я ищу тёплую куртку на зиму.',
        wrong: [
          'Ja, ich suche eine warmen Jacke für der Winter.',
          'Ja, ich suche einer warme Jacke für den Winter.'
        ]
      },
      { speaker: 'partner', german: 'Welche Größe haben Sie?', russian: 'Какой у вас размер?' },
      {
        speaker: 'me',
        german: 'Normalerweise trage ich Größe M.',
        russian: 'Обычно я ношу размер M.',
        wrong: [
          'Normalerweise ich trage Größe M.',
          'Normalerweise trage mich Größe M.'
        ]
      },
      { speaker: 'partner', german: 'Wie gefällt Ihnen diese blaue Jacke?', russian: 'Как вам эта синяя куртка?' },
      {
        speaker: 'me',
        german: 'Sie gefällt mir gut. Kann ich sie anprobieren?',
        russian: 'Она мне нравится. Можно её примерить?',
        wrong: [
          'Sie gefällt mich gut. Kann ich sie anprobieren?',
          'Sie gefällt mir gut. Kann ich anprobieren sie?'
        ]
      },
      { speaker: 'partner', german: 'Natürlich, die Umkleidekabine ist dort hinten. … Und, passt sie?', russian: 'Конечно, примерочная вон там. … Ну как, подходит?' },
      {
        speaker: 'me',
        german: 'Sie ist mir zu klein. Haben Sie sie eine Nummer größer?',
        russian: 'Она мне мала. У вас есть на размер больше?',
        wrong: [
          'Sie ist mich zu klein. Haben Sie sie eine Nummer größer?',
          'Sie ist mir zu klein. Haben Sie sie eine Nummer am größten?'
        ]
      },
      { speaker: 'partner', german: 'Ja, hier bitte, in Größe L. Sie kostet 89 Euro.', russian: 'Да, вот, пожалуйста, размер L. Она стоит 89 евро.' },
      {
        speaker: 'me',
        german: 'Gut, ich nehme sie. Kann ich mit Karte zahlen?',
        russian: 'Хорошо, я её беру. Можно оплатить картой?',
        wrong: [
          'Gut, ich nehme ihr. Kann ich mit Karte zahlen?',
          'Gut, ich nehme sie. Kann ich mit Karte zu zahlen?'
        ]
      },
      { speaker: 'partner', german: 'Selbstverständlich. Die Kasse ist gleich hier vorne.', russian: 'Разумеется. Касса прямо здесь.' }
    ]
  },
  {
    id: 'a2-verabredung',
    level: 'A2',
    title: 'Договориться о встрече',
    scene: 'Друг звонит и предлагает сходить в кино.',
    turns: [
      { speaker: 'partner', german: 'Hi! Hast du am Samstag schon etwas vor?', russian: 'Привет! У тебя уже есть планы на субботу?' },
      {
        speaker: 'me',
        german: 'Nein, noch nicht. Warum fragst du?',
        russian: 'Нет, пока нет. А почему ты спрашиваешь?',
        wrong: [
          'Nein, noch nicht. Warum du fragst?',
          'Nein, schon nicht. Warum fragst du?'
        ]
      },
      { speaker: 'partner', german: 'Im Kino läuft ein neuer Film. Hast du Lust mitzukommen?', russian: 'В кино идёт новый фильм. Хочешь пойти со мной?' },
      {
        speaker: 'me',
        german: 'Ja, gern! Um wie viel Uhr fängt der Film an?',
        russian: 'Да, с удовольствием! Во сколько начинается фильм?',
        wrong: [
          'Ja, gern! Um wie viel Uhr anfängt der Film?',
          'Ja, gern! Um wie viel Uhr fängt der Film?'
        ]
      },
      { speaker: 'partner', german: 'Um acht. Wollen wir uns vorher treffen und etwas essen?', russian: 'В восемь. Давай встретимся заранее и поедим?' },
      {
        speaker: 'me',
        german: 'Gute Idee! Treffen wir uns um halb sieben vor dem Kino?',
        russian: 'Хорошая идея! Встретимся в половине седьмого перед кинотеатром?',
        wrong: [
          'Gute Idee! Treffen wir sich um halb sieben vor dem Kino?',
          'Gute Idee! Treffen wir uns um halb sieben vor den Kino?'
        ]
      },
      { speaker: 'partner', german: 'Halb sieben ist mir zu früh, ich arbeite bis sechs. Geht es auch um sieben?', russian: 'Половина седьмого для меня рано, я работаю до шести. В семь тоже можно?' },
      {
        speaker: 'me',
        german: 'Kein Problem, dann um sieben. Ich reserviere die Karten.',
        russian: 'Без проблем, тогда в семь. Я забронирую билеты.',
        wrong: [
          'Keine Problem, dann um sieben. Ich reserviere die Karten.',
          'Kein Problem, dann um sieben. Ich die Karten reserviere.'
        ]
      },
      { speaker: 'partner', german: 'Super! Soll ich dich mit dem Auto abholen?', russian: 'Супер! Заехать за тобой на машине?' },
      {
        speaker: 'me',
        german: 'Nein, danke, ich komme zu Fuß, weil ich in der Nähe wohne.',
        russian: 'Нет, спасибо, я приду пешком, потому что живу рядом.',
        wrong: [
          'Nein, danke, ich komme zu Fuß, weil ich wohne in der Nähe.',
          'Nein, danke, ich komme zu Fuß, weil wohne ich in der Nähe.'
        ]
      },
      { speaker: 'partner', german: 'Alles klar. Dann bis Samstag!', russian: 'Понятно. Тогда до субботы!' }
    ]
  }
];
