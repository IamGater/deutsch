// Диалоги B1.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_B1 = [
  {
    id: 'b1-bewerbung',
    level: 'B1',
    title: 'Собеседование',
    scene: 'Вы проходите собеседование в немецкой компании.',
    turns: [
      { speaker: 'partner', german: 'Guten Tag, Herr Petrov. Erzählen Sie bitte kurz etwas über sich.', russian: 'Добрый день, господин Петров. Расскажите, пожалуйста, коротко о себе.' },
      {
        speaker: 'me',
        german: 'Ich habe Informatik studiert und arbeite seit fünf Jahren als Softwareentwickler.',
        russian: 'Я изучал информатику и уже пять лет работаю разработчиком.',
        wrong: [
          'Ich habe Informatik studiert und arbeite vor fünf Jahren als Softwareentwickler.',
          'Ich bin Informatik studiert und arbeite seit fünf Jahren wie Softwareentwickler.'
        ]
      },
      { speaker: 'partner', german: 'Warum haben Sie sich bei uns beworben?', russian: 'Почему вы подали заявление именно к нам?' },
      {
        speaker: 'me',
        german: 'Weil Ihr Unternehmen an Projekten arbeitet, die mich sehr interessieren.',
        russian: 'Потому что ваша компания работает над проектами, которые меня очень интересуют.',
        wrong: [
          'Weil Ihr Unternehmen arbeitet an Projekten, die mich sehr interessieren.',
          'Weil Ihr Unternehmen an Projekten arbeitet, das mich sehr interessieren.'
        ]
      },
      { speaker: 'partner', german: 'Was sind Ihre Stärken?', russian: 'Каковы ваши сильные стороны?' },
      {
        speaker: 'me',
        german: 'Ich bin zuverlässig und kann gut im Team arbeiten.',
        russian: 'Я надёжный и умею хорошо работать в команде.',
        wrong: [
          'Ich bin zuverlässig und kann gut im Team zu arbeiten.',
          'Ich bin zuverlässig und gut im Team arbeiten kann.'
        ]
      },
      { speaker: 'partner', german: 'Und wie gehen Sie mit Stress um?', russian: 'А как вы справляетесь со стрессом?' },
      {
        speaker: 'me',
        german: 'Wenn ich viel zu tun habe, plane ich meine Aufgaben sorgfältig.',
        russian: 'Когда у меня много дел, я тщательно планирую свои задачи.',
        wrong: [
          'Wenn ich viel zu tun habe, ich plane meine Aufgaben sorgfältig.',
          'Wenn ich habe viel zu tun, plane ich meine Aufgaben sorgfältig.'
        ]
      },
      { speaker: 'partner', german: 'Wann könnten Sie bei uns anfangen?', russian: 'Когда вы могли бы приступить к работе?' },
      {
        speaker: 'me',
        german: 'Ich könnte am ersten März anfangen, nachdem ich gekündigt habe.',
        russian: 'Я мог бы начать первого марта, после того как уволюсь.',
        wrong: [
          'Ich könnte am ersten März anfangen, nachdem ich habe gekündigt.',
          'Ich könnte am ersten März anzufangen, nachdem ich gekündigt habe.'
        ]
      },
      { speaker: 'partner', german: 'Sehr gut. Haben Sie noch Fragen an uns?', russian: 'Очень хорошо. У вас есть к нам вопросы?' },
      {
        speaker: 'me',
        german: 'Ja, mich würde interessieren, ob es Weiterbildungsmöglichkeiten gibt.',
        russian: 'Да, мне было бы интересно, есть ли возможности для повышения квалификации.',
        wrong: [
          'Ja, mich würde interessieren, ob gibt es Weiterbildungsmöglichkeiten.',
          'Ja, mir würde interessieren, ob es Weiterbildungsmöglichkeiten gibt.'
        ]
      },
      { speaker: 'partner', german: 'Ja, die gibt es. Wir melden uns nächste Woche bei Ihnen.', russian: 'Да, есть. Мы свяжемся с вами на следующей неделе.' }
    ]
  },
  {
    id: 'b1-hotel',
    level: 'B1',
    title: 'Жалоба в отеле',
    scene: 'В вашем номере проблемы, и вы звоните на ресепшен.',
    turns: [
      { speaker: 'partner', german: 'Rezeption, guten Abend. Was kann ich für Sie tun?', russian: 'Ресепшен, добрый вечер. Чем могу помочь?' },
      {
        speaker: 'me',
        german: 'Guten Abend. Ich möchte mich über mein Zimmer beschweren.',
        russian: 'Добрый вечер. Я хотел бы пожаловаться на свой номер.',
        wrong: [
          'Guten Abend. Ich möchte mich auf mein Zimmer beschweren.',
          'Guten Abend. Ich möchte mir über mein Zimmer beschweren.'
        ]
      },
      { speaker: 'partner', german: 'Oh, das tut mir leid. Was ist denn das Problem?', russian: 'О, мне очень жаль. В чём проблема?' },
      {
        speaker: 'me',
        german: 'Die Heizung funktioniert nicht, obwohl ich sie voll aufgedreht habe.',
        russian: 'Отопление не работает, хотя я включил его на полную.',
        wrong: [
          'Die Heizung funktioniert nicht, obwohl ich habe sie voll aufgedreht.',
          'Die Heizung funktioniert nicht, trotzdem ich sie voll aufgedreht habe.'
        ]
      },
      { speaker: 'partner', german: 'Ich schicke sofort einen Techniker. Gibt es sonst noch etwas?', russian: 'Я сейчас же пришлю техника. Есть что-то ещё?' },
      {
        speaker: 'me',
        german: 'Ja, außerdem wurde das Bad nicht geputzt.',
        russian: 'Да, кроме того, ванную не убрали.',
        wrong: [
          'Ja, außerdem das Bad wurde nicht geputzt.',
          'Ja, außerdem wurde das Bad nicht putzen.'
        ]
      },
      { speaker: 'partner', german: 'Das ist natürlich nicht in Ordnung. Wir kümmern uns darum.', russian: 'Это, конечно, непорядок. Мы этим займёмся.' },
      {
        speaker: 'me',
        german: 'Wäre es möglich, ein anderes Zimmer zu bekommen?',
        russian: 'Можно ли получить другой номер?',
        wrong: [
          'Wäre es möglich, ein anderes Zimmer bekommen?',
          'Würde es möglich, ein anderes Zimmer zu bekommen?'
        ]
      },
      { speaker: 'partner', german: 'Einen Moment … Ja, Zimmer 305 ist frei. Es ist sogar etwas größer.', russian: 'Минуту… Да, номер 305 свободен. Он даже немного больше.' },
      {
        speaker: 'me',
        german: 'Das wäre toll. Könnte mir jemand mit dem Gepäck helfen?',
        russian: 'Было бы отлично. Мог бы кто-нибудь помочь мне с багажом?',
        wrong: [
          'Das wäre toll. Könnte mich jemand mit dem Gepäck helfen?',
          'Das wäre toll. Könnte mir jemand mit das Gepäck helfen?'
        ]
      },
      { speaker: 'partner', german: 'Selbstverständlich. Als Entschuldigung laden wir Sie zum Frühstück ein.', russian: 'Разумеется. В качестве извинения мы приглашаем вас на завтрак.' },
      {
        speaker: 'me',
        german: 'Vielen Dank, das ist sehr freundlich von Ihnen.',
        russian: 'Большое спасибо, это очень любезно с вашей стороны.',
        wrong: [
          'Vielen Dank, das ist sehr freundlich bei Ihnen.',
          'Vielen Dank, das ist sehr freundlich von Sie.'
        ]
      }
    ]
  },
  {
    id: 'b1-wohnung',
    level: 'B1',
    title: 'Аренда квартиры',
    scene: 'Вы звоните арендодателю по объявлению о квартире.',
    turns: [
      { speaker: 'partner', german: 'Müller, guten Tag.', russian: 'Мюллер, добрый день.' },
      {
        speaker: 'me',
        german: 'Guten Tag, ich rufe wegen der Wohnung an, die Sie im Internet anbieten.',
        russian: 'Добрый день, я звоню по поводу квартиры, которую вы предлагаете в интернете.',
        wrong: [
          'Guten Tag, ich rufe wegen die Wohnung an, die Sie im Internet anbieten.',
          'Guten Tag, ich anrufe wegen der Wohnung, die Sie im Internet anbieten.'
        ]
      },
      { speaker: 'partner', german: 'Ja, die ist noch frei. Was möchten Sie wissen?', russian: 'Да, она ещё свободна. Что вы хотели бы узнать?' },
      {
        speaker: 'me',
        german: 'Könnten Sie mir sagen, wie hoch die Nebenkosten sind?',
        russian: 'Не могли бы вы сказать, сколько составляют коммунальные платежи?',
        wrong: [
          'Könnten Sie mir sagen, wie hoch sind die Nebenkosten?',
          'Könnten Sie mich sagen, wie hoch die Nebenkosten sind?'
        ]
      },
      { speaker: 'partner', german: 'Die Nebenkosten betragen etwa 150 Euro im Monat. Die Kaltmiete ist 700 Euro.', russian: 'Коммунальные платежи — около 150 евро в месяц. Аренда без них — 700 евро.' },
      {
        speaker: 'me',
        german: 'Ist die Küche schon eingebaut, oder müsste ich selbst eine kaufen?',
        russian: 'Кухня уже встроена, или мне пришлось бы покупать её самому?',
        wrong: [
          'Ist die Küche schon eingebaut, oder müsste ich selbst eine zu kaufen?',
          'Ist die Küche schon einbauen, oder müsste ich selbst eine kaufen?'
        ]
      },
      { speaker: 'partner', german: 'Eine Einbauküche ist vorhanden. Wann würden Sie denn einziehen wollen?', russian: 'Встроенная кухня имеется. А когда вы хотели бы въехать?' },
      {
        speaker: 'me',
        german: 'Am liebsten Anfang nächsten Monats, falls das möglich ist.',
        russian: 'Лучше всего в начале следующего месяца, если это возможно.',
        wrong: [
          'Am liebsten Anfang nächsten Monats, falls ist das möglich.',
          'Am lieber Anfang nächsten Monats, falls das möglich ist.'
        ]
      },
      { speaker: 'partner', german: 'Das passt. Möchten Sie die Wohnung besichtigen?', russian: 'Подходит. Хотите посмотреть квартиру?' },
      {
        speaker: 'me',
        german: 'Ja, gern. Hätten Sie am Donnerstagabend Zeit?',
        russian: 'Да, с удовольствием. У вас найдётся время в четверг вечером?',
        wrong: [
          'Ja, gern. Hätten Sie am Donnerstagabend Zeit haben?',
          'Ja, gern. Würden Sie am Donnerstagabend Zeit?'
        ]
      },
      { speaker: 'partner', german: 'Donnerstag um 18 Uhr geht. Bringen Sie bitte einen Gehaltsnachweis mit.', russian: 'В четверг в 18 часов подойдёт. Принесите, пожалуйста, справку о доходах.' },
      {
        speaker: 'me',
        german: 'In Ordnung, ich werde alle Unterlagen mitbringen. Bis Donnerstag!',
        russian: 'Хорошо, я принесу все документы. До четверга!',
        wrong: [
          'In Ordnung, ich werde alle Unterlagen mitzubringen. Bis Donnerstag!',
          'In Ordnung, ich wird alle Unterlagen mitbringen. Bis Donnerstag!'
        ]
      }
    ]
  }
];
