// Диалоги. Строка — реплика собеседника ("немецкий|перевод").
// Массив — выбор реплики пользователя: первый вариант верный, остальные содержат ошибку.
window.DE_DIALOGS = [
  /* ============================ A1 ============================ */
  {
    id: 'a1-kennenlernen', lv: 'A1', title: 'Знакомство', scene: 'Вы знакомитесь с новой коллегой.',
    turns: [
      'Hallo! Ich heiße Lena. Wie heißt du?|Привет! Меня зовут Лена. Как тебя зовут?',
      ['Ich heiße Alex. Freut mich!|Меня зовут Алекс. Очень приятно!', 'Ich heiße bin Alex. Freut mich!', 'Mein Name heißt Alex. Freut mir!'],
      'Freut mich auch! Woher kommst du?|Мне тоже! Откуда ты?',
      ['Ich komme aus Kasachstan.|Я из Казахстана.', 'Ich komme in Kasachstan.', 'Ich kommen aus Kasachstan.'],
      'Interessant! Und wo wohnst du jetzt?|Интересно! А где ты сейчас живёшь?',
      ['Ich wohne jetzt in Köln.|Сейчас я живу в Кёльне.', 'Ich wohne jetzt nach Köln.', 'Ich wohnen jetzt in Köln.'],
      'Was machst du beruflich?|Кем ты работаешь?',
      ['Ich bin Programmierer.|Я программист.', 'Ich habe Programmierer.', 'Ich bist Programmierer.'],
      'Cool! Lernst du schon lange Deutsch?|Здорово! Ты уже давно учишь немецкий?',
      ['Nein, ich lerne erst seit drei Monaten Deutsch.|Нет, я учу немецкий всего три месяца.', 'Nein, ich lerne Deutsch vor drei Monaten.', 'Nein, ich Deutsch lerne drei Monate.'],
      'Du sprichst aber schon sehr gut! Bis morgen!|Но ты уже очень хорошо говоришь! До завтра!',
      ['Danke! Tschüss, bis morgen!|Спасибо! Пока, до завтра!', 'Danke! Guten Morgen, bis morgen!', 'Bitte! Tschüss, bis gestern!']
    ]
  },
  {
    id: 'a1-cafe', lv: 'A1', title: 'В кафе', scene: 'Вы делаете заказ в кафе.',
    turns: [
      'Guten Tag! Was möchten Sie trinken?|Добрый день! Что вы хотите выпить?',
      ['Ich möchte einen Kaffee, bitte.|Я хотел бы кофе, пожалуйста.', 'Ich möchte ein Kaffee, bitte.', 'Ich möchten einen Kaffee, bitte.'],
      'Gern. Mit Milch und Zucker?|С удовольствием. С молоком и сахаром?',
      ['Mit Milch, aber ohne Zucker, bitte.|С молоком, но без сахара, пожалуйста.', 'Mit Milch, aber nicht Zucker, bitte.', 'Milch mit, aber Zucker ohne, bitte.'],
      'Möchten Sie auch etwas essen?|Хотите что-нибудь поесть?',
      ['Ja, ein Stück Apfelkuchen, bitte.|Да, кусок яблочного пирога, пожалуйста.', 'Ja, einen Stück Apfelkuchen, bitte.', 'Ja, ein Stück Apfelkuchen essen, bitte.'],
      'Sehr gern. Sonst noch etwas?|С удовольствием. Что-нибудь ещё?',
      ['Nein, danke. Das ist alles.|Нет, спасибо. Это всё.', 'Nein, danke. Das alles ist.', 'Nein, danke. Das sind alles.'],
      'So, bitte schön. Das macht 7 Euro 50.|Вот, пожалуйста. С вас 7 евро 50.',
      ['Hier sind 8 Euro. Stimmt so.|Вот 8 евро. Сдачи не надо.', 'Hier ist 8 Euro. Stimmt so.', 'Hier haben 8 Euro. Stimmt so.'],
      'Vielen Dank! Einen schönen Tag noch!|Большое спасибо! Хорошего дня!',
      ['Danke, gleichfalls!|Спасибо, взаимно!', 'Danke, ich auch!', 'Bitte, gleichfalls nicht!']
    ]
  },
  {
    id: 'a1-weg', lv: 'A1', title: 'Как пройти?', scene: 'Вы в незнакомом городе и спрашиваете дорогу у прохожего.',
    turns: [
      'Guten Tag! Kann ich Ihnen helfen?|Добрый день! Могу я вам помочь?',
      ['Ja, bitte. Wo ist der Bahnhof?|Да, пожалуйста. Где вокзал?', 'Ja, bitte. Wo ist den Bahnhof?', 'Ja, bitte. Wer ist der Bahnhof?'],
      'Gehen Sie hier geradeaus und dann die zweite Straße links.|Идите прямо, а затем вторая улица налево.',
      ['Ist es weit von hier?|Это далеко отсюда?', 'Ist es weit aus hier?', 'Ist weit es von hier?'],
      'Nein, nur etwa zehn Minuten zu Fuß.|Нет, всего минут десять пешком.',
      ['Gibt es hier in der Nähe auch eine Apotheke?|Здесь поблизости есть аптека?', 'Gibt es hier in der Nähe auch einer Apotheke?', 'Es gibt hier in die Nähe auch eine Apotheke?'],
      'Ja, die Apotheke ist gleich neben der Bank, dort an der Ecke.|Да, аптека прямо рядом с банком, там на углу.',
      ['Vielen Dank für Ihre Hilfe!|Большое спасибо за вашу помощь!', 'Viel Dank für Ihre Hilfe!', 'Vielen Dank für Ihnen Hilfe!'],
      'Gern geschehen. Schönen Tag noch!|Не за что. Хорошего дня!',
      ['Danke, Ihnen auch!|Спасибо, вам тоже!', 'Danke, Sie auch!', 'Danke, Ihr auch!']
    ]
  },

  /* ============================ A2 ============================ */
  {
    id: 'a2-arzt', lv: 'A2', title: 'У врача', scene: 'Вы пришли на приём к врачу.',
    turns: [
      'Guten Tag. Was fehlt Ihnen denn?|Добрый день. Что вас беспокоит?',
      ['Ich habe seit drei Tagen starke Halsschmerzen.|У меня уже три дня сильно болит горло.', 'Ich habe vor drei Tagen starke Halsschmerzen.', 'Ich habe seit drei Tage starke Halsschmerzen.'],
      'Haben Sie auch Fieber?|Температура тоже есть?',
      ['Ja, gestern Abend hatte ich 38,5.|Да, вчера вечером было 38,5.', 'Ja, gestern Abend habe ich 38,5 gehaben.', 'Ja, gestern Abend war ich 38,5.'],
      'Ich verstehe. Nehmen Sie schon Medikamente?|Понятно. Вы уже принимаете лекарства?',
      ['Nein, ich habe bisher nichts genommen.|Нет, пока я ничего не принимал.', 'Nein, ich habe bisher nichts genehmt.', 'Nein, ich bin bisher nichts genommen.'],
      'Gut. Ich verschreibe Ihnen Tabletten. Nehmen Sie sie dreimal täglich nach dem Essen.|Хорошо. Я выпишу вам таблетки. Принимайте их три раза в день после еды.',
      ['Muss ich zu Hause bleiben?|Мне нужно оставаться дома?', 'Muss ich zu Hause zu bleiben?', 'Muss ich bleiben zu Hause?'],
      'Ja, ich schreibe Sie bis Freitag krank. Sie sollten viel trinken und sich ausruhen.|Да, я выпишу вам больничный до пятницы. Вам следует много пить и отдыхать.',
      ['Soll ich wiederkommen, wenn es nicht besser wird?|Мне прийти снова, если не станет лучше?', 'Soll ich wiederkommen, wenn es wird nicht besser?', 'Soll ich wiederkommen, wenn wird es nicht besser?'],
      'Ja, dann kommen Sie bitte nächste Woche noch einmal. Gute Besserung!|Да, тогда приходите, пожалуйста, на следующей неделе. Выздоравливайте!',
      ['Vielen Dank, Herr Doktor. Auf Wiedersehen!|Большое спасибо, доктор. До свидания!', 'Vielen Dank, Herr Doktor. Gute Besserung!', 'Viel Dank, Herr Doktor. Auf Wiedersehen!']
    ]
  },
  {
    id: 'a2-kleidung', lv: 'A2', title: 'В магазине одежды', scene: 'Вы выбираете куртку в магазине.',
    turns: [
      'Guten Tag! Kann ich Ihnen helfen?|Добрый день! Могу я вам помочь?',
      ['Ja, ich suche eine warme Jacke für den Winter.|Да, я ищу тёплую куртку на зиму.', 'Ja, ich suche eine warmen Jacke für der Winter.', 'Ja, ich suche einer warme Jacke für den Winter.'],
      'Welche Größe haben Sie?|Какой у вас размер?',
      ['Normalerweise trage ich Größe M.|Обычно я ношу размер M.', 'Normalerweise ich trage Größe M.', 'Normalerweise trage mich Größe M.'],
      'Wie gefällt Ihnen diese blaue Jacke?|Как вам эта синяя куртка?',
      ['Sie gefällt mir gut. Kann ich sie anprobieren?|Она мне нравится. Можно её примерить?', 'Sie gefällt mich gut. Kann ich sie anprobieren?', 'Sie gefällt mir gut. Kann ich anprobieren sie?'],
      'Natürlich, die Umkleidekabine ist dort hinten. … Und, passt sie?|Конечно, примерочная вон там. … Ну как, подходит?',
      ['Sie ist mir zu klein. Haben Sie sie eine Nummer größer?|Она мне мала. У вас есть на размер больше?', 'Sie ist mich zu klein. Haben Sie sie eine Nummer größer?', 'Sie ist mir zu klein. Haben Sie sie eine Nummer am größten?'],
      'Ja, hier bitte, in Größe L. Sie kostet 89 Euro.|Да, вот, пожалуйста, размер L. Она стоит 89 евро.',
      ['Gut, ich nehme sie. Kann ich mit Karte zahlen?|Хорошо, я её беру. Можно оплатить картой?', 'Gut, ich nehme ihr. Kann ich mit Karte zahlen?', 'Gut, ich nehme sie. Kann ich mit Karte zu zahlen?'],
      'Selbstverständlich. Die Kasse ist gleich hier vorne.|Разумеется. Касса прямо здесь.'
    ]
  },
  {
    id: 'a2-verabredung', lv: 'A2', title: 'Договориться о встрече', scene: 'Друг звонит и предлагает сходить в кино.',
    turns: [
      'Hi! Hast du am Samstag schon etwas vor?|Привет! У тебя уже есть планы на субботу?',
      ['Nein, noch nicht. Warum fragst du?|Нет, пока нет. А почему ты спрашиваешь?', 'Nein, noch nicht. Warum du fragst?', 'Nein, schon nicht. Warum fragst du?'],
      'Im Kino läuft ein neuer Film. Hast du Lust mitzukommen?|В кино идёт новый фильм. Хочешь пойти со мной?',
      ['Ja, gern! Um wie viel Uhr fängt der Film an?|Да, с удовольствием! Во сколько начинается фильм?', 'Ja, gern! Um wie viel Uhr anfängt der Film?', 'Ja, gern! Um wie viel Uhr fängt der Film?'],
      'Um acht. Wollen wir uns vorher treffen und etwas essen?|В восемь. Давай встретимся заранее и поедим?',
      ['Gute Idee! Treffen wir uns um halb sieben vor dem Kino?|Хорошая идея! Встретимся в половине седьмого перед кинотеатром?', 'Gute Idee! Treffen wir sich um halb sieben vor dem Kino?', 'Gute Idee! Treffen wir uns um halb sieben vor den Kino?'],
      'Halb sieben ist mir zu früh, ich arbeite bis sechs. Geht es auch um sieben?|Половина седьмого для меня рано, я работаю до шести. В семь тоже можно?',
      ['Kein Problem, dann um sieben. Ich reserviere die Karten.|Без проблем, тогда в семь. Я забронирую билеты.', 'Keine Problem, dann um sieben. Ich reserviere die Karten.', 'Kein Problem, dann um sieben. Ich die Karten reserviere.'],
      'Super! Soll ich dich mit dem Auto abholen?|Супер! Заехать за тобой на машине?',
      ['Nein, danke, ich komme zu Fuß, weil ich in der Nähe wohne.|Нет, спасибо, я приду пешком, потому что живу рядом.', 'Nein, danke, ich komme zu Fuß, weil ich wohne in der Nähe.', 'Nein, danke, ich komme zu Fuß, weil wohne ich in der Nähe.'],
      'Alles klar. Dann bis Samstag!|Понятно. Тогда до субботы!'
    ]
  },

  /* ============================ B1 ============================ */
  {
    id: 'b1-bewerbung', lv: 'B1', title: 'Собеседование', scene: 'Вы проходите собеседование в немецкой компании.',
    turns: [
      'Guten Tag, Herr Petrov. Erzählen Sie bitte kurz etwas über sich.|Добрый день, господин Петров. Расскажите, пожалуйста, коротко о себе.',
      ['Ich habe Informatik studiert und arbeite seit fünf Jahren als Softwareentwickler.|Я изучал информатику и уже пять лет работаю разработчиком.', 'Ich habe Informatik studiert und arbeite vor fünf Jahren als Softwareentwickler.', 'Ich bin Informatik studiert und arbeite seit fünf Jahren wie Softwareentwickler.'],
      'Warum haben Sie sich bei uns beworben?|Почему вы подали заявление именно к нам?',
      ['Weil Ihr Unternehmen an Projekten arbeitet, die mich sehr interessieren.|Потому что ваша компания работает над проектами, которые меня очень интересуют.', 'Weil Ihr Unternehmen arbeitet an Projekten, die mich sehr interessieren.', 'Weil Ihr Unternehmen an Projekten arbeitet, das mich sehr interessieren.'],
      'Was sind Ihre Stärken?|Каковы ваши сильные стороны?',
      ['Ich bin zuverlässig und kann gut im Team arbeiten.|Я надёжный и умею хорошо работать в команде.', 'Ich bin zuverlässig und kann gut im Team zu arbeiten.', 'Ich bin zuverlässig und gut im Team arbeiten kann.'],
      'Und wie gehen Sie mit Stress um?|А как вы справляетесь со стрессом?',
      ['Wenn ich viel zu tun habe, plane ich meine Aufgaben sorgfältig.|Когда у меня много дел, я тщательно планирую свои задачи.', 'Wenn ich viel zu tun habe, ich plane meine Aufgaben sorgfältig.', 'Wenn ich habe viel zu tun, plane ich meine Aufgaben sorgfältig.'],
      'Wann könnten Sie bei uns anfangen?|Когда вы могли бы приступить к работе?',
      ['Ich könnte am ersten März anfangen, nachdem ich gekündigt habe.|Я мог бы начать первого марта, после того как уволюсь.', 'Ich könnte am ersten März anfangen, nachdem ich habe gekündigt.', 'Ich könnte am ersten März anzufangen, nachdem ich gekündigt habe.'],
      'Sehr gut. Haben Sie noch Fragen an uns?|Очень хорошо. У вас есть к нам вопросы?',
      ['Ja, mich würde interessieren, ob es Weiterbildungsmöglichkeiten gibt.|Да, мне было бы интересно, есть ли возможности для повышения квалификации.', 'Ja, mich würde interessieren, ob gibt es Weiterbildungsmöglichkeiten.', 'Ja, mir würde interessieren, ob es Weiterbildungsmöglichkeiten gibt.'],
      'Ja, die gibt es. Wir melden uns nächste Woche bei Ihnen.|Да, есть. Мы свяжемся с вами на следующей неделе.'
    ]
  },
  {
    id: 'b1-hotel', lv: 'B1', title: 'Жалоба в отеле', scene: 'В вашем номере проблемы, и вы звоните на ресепшен.',
    turns: [
      'Rezeption, guten Abend. Was kann ich für Sie tun?|Ресепшен, добрый вечер. Чем могу помочь?',
      ['Guten Abend. Ich möchte mich über mein Zimmer beschweren.|Добрый вечер. Я хотел бы пожаловаться на свой номер.', 'Guten Abend. Ich möchte mich auf mein Zimmer beschweren.', 'Guten Abend. Ich möchte mir über mein Zimmer beschweren.'],
      'Oh, das tut mir leid. Was ist denn das Problem?|О, мне очень жаль. В чём проблема?',
      ['Die Heizung funktioniert nicht, obwohl ich sie voll aufgedreht habe.|Отопление не работает, хотя я включил его на полную.', 'Die Heizung funktioniert nicht, obwohl ich habe sie voll aufgedreht.', 'Die Heizung funktioniert nicht, trotzdem ich sie voll aufgedreht habe.'],
      'Ich schicke sofort einen Techniker. Gibt es sonst noch etwas?|Я сейчас же пришлю техника. Есть что-то ещё?',
      ['Ja, außerdem wurde das Bad nicht geputzt.|Да, кроме того, ванную не убрали.', 'Ja, außerdem das Bad wurde nicht geputzt.', 'Ja, außerdem wurde das Bad nicht putzen.'],
      'Das ist natürlich nicht in Ordnung. Wir kümmern uns darum.|Это, конечно, непорядок. Мы этим займёмся.',
      ['Wäre es möglich, ein anderes Zimmer zu bekommen?|Можно ли получить другой номер?', 'Wäre es möglich, ein anderes Zimmer bekommen?', 'Würde es möglich, ein anderes Zimmer zu bekommen?'],
      'Einen Moment … Ja, Zimmer 305 ist frei. Es ist sogar etwas größer.|Минуту… Да, номер 305 свободен. Он даже немного больше.',
      ['Das wäre toll. Könnte mir jemand mit dem Gepäck helfen?|Было бы отлично. Мог бы кто-нибудь помочь мне с багажом?', 'Das wäre toll. Könnte mich jemand mit dem Gepäck helfen?', 'Das wäre toll. Könnte mir jemand mit das Gepäck helfen?'],
      'Selbstverständlich. Als Entschuldigung laden wir Sie zum Frühstück ein.|Разумеется. В качестве извинения мы приглашаем вас на завтрак.',
      ['Vielen Dank, das ist sehr freundlich von Ihnen.|Большое спасибо, это очень любезно с вашей стороны.', 'Vielen Dank, das ist sehr freundlich bei Ihnen.', 'Vielen Dank, das ist sehr freundlich von Sie.']
    ]
  },
  {
    id: 'b1-wohnung', lv: 'B1', title: 'Аренда квартиры', scene: 'Вы звоните арендодателю по объявлению о квартире.',
    turns: [
      'Müller, guten Tag.|Мюллер, добрый день.',
      ['Guten Tag, ich rufe wegen der Wohnung an, die Sie im Internet anbieten.|Добрый день, я звоню по поводу квартиры, которую вы предлагаете в интернете.', 'Guten Tag, ich rufe wegen die Wohnung an, die Sie im Internet anbieten.', 'Guten Tag, ich anrufe wegen der Wohnung, die Sie im Internet anbieten.'],
      'Ja, die ist noch frei. Was möchten Sie wissen?|Да, она ещё свободна. Что вы хотели бы узнать?',
      ['Könnten Sie mir sagen, wie hoch die Nebenkosten sind?|Не могли бы вы сказать, сколько составляют коммунальные платежи?', 'Könnten Sie mir sagen, wie hoch sind die Nebenkosten?', 'Könnten Sie mich sagen, wie hoch die Nebenkosten sind?'],
      'Die Nebenkosten betragen etwa 150 Euro im Monat. Die Kaltmiete ist 700 Euro.|Коммунальные платежи — около 150 евро в месяц. Аренда без них — 700 евро.',
      ['Ist die Küche schon eingebaut, oder müsste ich selbst eine kaufen?|Кухня уже встроена, или мне пришлось бы покупать её самому?', 'Ist die Küche schon eingebaut, oder müsste ich selbst eine zu kaufen?', 'Ist die Küche schon einbauen, oder müsste ich selbst eine kaufen?'],
      'Eine Einbauküche ist vorhanden. Wann würden Sie denn einziehen wollen?|Встроенная кухня имеется. А когда вы хотели бы въехать?',
      ['Am liebsten Anfang nächsten Monats, falls das möglich ist.|Лучше всего в начале следующего месяца, если это возможно.', 'Am liebsten Anfang nächsten Monats, falls ist das möglich.', 'Am lieber Anfang nächsten Monats, falls das möglich ist.'],
      'Das passt. Möchten Sie die Wohnung besichtigen?|Подходит. Хотите посмотреть квартиру?',
      ['Ja, gern. Hätten Sie am Donnerstagabend Zeit?|Да, с удовольствием. У вас найдётся время в четверг вечером?', 'Ja, gern. Hätten Sie am Donnerstagabend Zeit haben?', 'Ja, gern. Würden Sie am Donnerstagabend Zeit?'],
      'Donnerstag um 18 Uhr geht. Bringen Sie bitte einen Gehaltsnachweis mit.|В четверг в 18 часов подойдёт. Принесите, пожалуйста, справку о доходах.',
      ['In Ordnung, ich werde alle Unterlagen mitbringen. Bis Donnerstag!|Хорошо, я принесу все документы. До четверга!', 'In Ordnung, ich werde alle Unterlagen mitzubringen. Bis Donnerstag!', 'In Ordnung, ich wird alle Unterlagen mitbringen. Bis Donnerstag!']
    ]
  }
];
