// Диалоги A1.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_A1 = [
  {
    id: 'a1-kennenlernen',
    level: 'A1',
    title: 'Знакомство',
    scene: 'Вы знакомитесь с новой коллегой.',
    turns: [
      { speaker: 'partner', german: 'Hallo! Ich heiße Lena. Wie heißt du?', russian: 'Привет! Меня зовут Лена. Как тебя зовут?' },
      {
        speaker: 'me',
        german: 'Ich heiße Alex. Freut mich!',
        russian: 'Меня зовут Алекс. Очень приятно!',
        wrong: [
          'Ich heiße bin Alex. Freut mich!',
          'Mein Name heißt Alex. Freut mir!'
        ]
      },
      { speaker: 'partner', german: 'Freut mich auch! Woher kommst du?', russian: 'Мне тоже! Откуда ты?' },
      {
        speaker: 'me',
        german: 'Ich komme aus Kasachstan.',
        russian: 'Я из Казахстана.',
        wrong: [
          'Ich komme in Kasachstan.',
          'Ich kommen aus Kasachstan.'
        ]
      },
      { speaker: 'partner', german: 'Interessant! Und wo wohnst du jetzt?', russian: 'Интересно! А где ты сейчас живёшь?' },
      {
        speaker: 'me',
        german: 'Ich wohne jetzt in Köln.',
        russian: 'Сейчас я живу в Кёльне.',
        wrong: [
          'Ich wohne jetzt nach Köln.',
          'Ich wohnen jetzt in Köln.'
        ]
      },
      { speaker: 'partner', german: 'Was machst du beruflich?', russian: 'Кем ты работаешь?' },
      {
        speaker: 'me',
        german: 'Ich bin Programmierer.',
        russian: 'Я программист.',
        wrong: [
          'Ich habe Programmierer.',
          'Ich bist Programmierer.'
        ]
      },
      { speaker: 'partner', german: 'Cool! Lernst du schon lange Deutsch?', russian: 'Здорово! Ты уже давно учишь немецкий?' },
      {
        speaker: 'me',
        german: 'Nein, ich lerne erst seit drei Monaten Deutsch.',
        russian: 'Нет, я учу немецкий всего три месяца.',
        wrong: [
          'Nein, ich lerne Deutsch vor drei Monaten.',
          'Nein, ich Deutsch lerne drei Monate.'
        ]
      },
      { speaker: 'partner', german: 'Du sprichst aber schon sehr gut! Bis morgen!', russian: 'Но ты уже очень хорошо говоришь! До завтра!' },
      {
        speaker: 'me',
        german: 'Danke! Tschüss, bis morgen!',
        russian: 'Спасибо! Пока, до завтра!',
        wrong: [
          'Danke! Guten Morgen, bis morgen!',
          'Bitte! Tschüss, bis gestern!'
        ]
      }
    ]
  },
  {
    id: 'a1-cafe',
    level: 'A1',
    title: 'В кафе',
    scene: 'Вы делаете заказ в кафе.',
    turns: [
      { speaker: 'partner', german: 'Guten Tag! Was möchten Sie trinken?', russian: 'Добрый день! Что вы хотите выпить?' },
      {
        speaker: 'me',
        german: 'Ich möchte einen Kaffee, bitte.',
        russian: 'Я хотел бы кофе, пожалуйста.',
        wrong: [
          'Ich möchte ein Kaffee, bitte.',
          'Ich möchten einen Kaffee, bitte.'
        ]
      },
      { speaker: 'partner', german: 'Gern. Mit Milch und Zucker?', russian: 'С удовольствием. С молоком и сахаром?' },
      {
        speaker: 'me',
        german: 'Mit Milch, aber ohne Zucker, bitte.',
        russian: 'С молоком, но без сахара, пожалуйста.',
        wrong: [
          'Mit Milch, aber nicht Zucker, bitte.',
          'Milch mit, aber Zucker ohne, bitte.'
        ]
      },
      { speaker: 'partner', german: 'Möchten Sie auch etwas essen?', russian: 'Хотите что-нибудь поесть?' },
      {
        speaker: 'me',
        german: 'Ja, ein Stück Apfelkuchen, bitte.',
        russian: 'Да, кусок яблочного пирога, пожалуйста.',
        wrong: [
          'Ja, einen Stück Apfelkuchen, bitte.',
          'Ja, ein Stück Apfelkuchen essen, bitte.'
        ]
      },
      { speaker: 'partner', german: 'Sehr gern. Sonst noch etwas?', russian: 'С удовольствием. Что-нибудь ещё?' },
      {
        speaker: 'me',
        german: 'Nein, danke. Das ist alles.',
        russian: 'Нет, спасибо. Это всё.',
        wrong: [
          'Nein, danke. Das alles ist.',
          'Nein, danke. Das sind alles.'
        ]
      },
      { speaker: 'partner', german: 'So, bitte schön. Das macht 7 Euro 50.', russian: 'Вот, пожалуйста. С вас 7 евро 50.' },
      {
        speaker: 'me',
        german: 'Hier sind 8 Euro. Stimmt so.',
        russian: 'Вот 8 евро. Сдачи не надо.',
        wrong: [
          'Hier ist 8 Euro. Stimmt so.',
          'Hier haben 8 Euro. Stimmt so.'
        ]
      },
      { speaker: 'partner', german: 'Vielen Dank! Einen schönen Tag noch!', russian: 'Большое спасибо! Хорошего дня!' },
      {
        speaker: 'me',
        german: 'Danke, gleichfalls!',
        russian: 'Спасибо, взаимно!',
        wrong: [
          'Danke, ich auch!',
          'Bitte, gleichfalls nicht!'
        ]
      }
    ]
  },
  {
    id: 'a1-weg',
    level: 'A1',
    title: 'Как пройти?',
    scene: 'Вы в незнакомом городе и спрашиваете дорогу у прохожего.',
    turns: [
      { speaker: 'partner', german: 'Guten Tag! Kann ich Ihnen helfen?', russian: 'Добрый день! Могу я вам помочь?' },
      {
        speaker: 'me',
        german: 'Ja, bitte. Wo ist der Bahnhof?',
        russian: 'Да, пожалуйста. Где вокзал?',
        wrong: [
          'Ja, bitte. Wo ist den Bahnhof?',
          'Ja, bitte. Wer ist der Bahnhof?'
        ]
      },
      { speaker: 'partner', german: 'Gehen Sie hier geradeaus und dann die zweite Straße links.', russian: 'Идите прямо, а затем вторая улица налево.' },
      {
        speaker: 'me',
        german: 'Ist es weit von hier?',
        russian: 'Это далеко отсюда?',
        wrong: [
          'Ist es weit aus hier?',
          'Ist weit es von hier?'
        ]
      },
      { speaker: 'partner', german: 'Nein, nur etwa zehn Minuten zu Fuß.', russian: 'Нет, всего минут десять пешком.' },
      {
        speaker: 'me',
        german: 'Gibt es hier in der Nähe auch eine Apotheke?',
        russian: 'Здесь поблизости есть аптека?',
        wrong: [
          'Gibt es hier in der Nähe auch einer Apotheke?',
          'Es gibt hier in die Nähe auch eine Apotheke?'
        ]
      },
      { speaker: 'partner', german: 'Ja, die Apotheke ist gleich neben der Bank, dort an der Ecke.', russian: 'Да, аптека прямо рядом с банком, там на углу.' },
      {
        speaker: 'me',
        german: 'Vielen Dank für Ihre Hilfe!',
        russian: 'Большое спасибо за вашу помощь!',
        wrong: [
          'Viel Dank für Ihre Hilfe!',
          'Vielen Dank für Ihnen Hilfe!'
        ]
      },
      { speaker: 'partner', german: 'Gern geschehen. Schönen Tag noch!', russian: 'Не за что. Хорошего дня!' },
      {
        speaker: 'me',
        german: 'Danke, Ihnen auch!',
        russian: 'Спасибо, вам тоже!',
        wrong: [
          'Danke, Sie auch!',
          'Danke, Ihr auch!'
        ]
      }
    ]
  }
];
