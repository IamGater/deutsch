// Аудирование A2: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_A2 = [
  {
    id: 'a2-hoeren-urlaub',
    level: 'A2',
    title: 'Отпуск в Италии',
    text: 'Letzten Sommer bin ich mit meiner Familie nach Italien gefahren. Wir sind zwei Wochen geblieben. Das Hotel war direkt am Strand, aber es war ziemlich laut. Das Wetter war fast immer sonnig, nur an einem Tag hat es geregnet. An diesem Tag haben wir ein Museum besucht. Das Essen hat uns sehr gut geschmeckt, besonders die Pizza. Nächstes Jahr möchten wir nach Griechenland fliegen.',
    questions: [
      { question: 'Куда ездила семья?', options: ['В Италию', 'В Грецию', 'В Испанию'] },
      { question: 'Что было не так с отелем?', options: ['Там было шумно', 'Он был далеко от пляжа', 'Он был слишком дорогим'] },
      { question: 'Что они делали в дождливый день?', options: ['Ходили в музей', 'Остались в номере', 'Ходили по магазинам'] },
      { question: 'Какие планы на следующий год?', options: ['Полететь в Грецию', 'Снова поехать в Италию', 'Остаться дома'] }
    ]
  },
  {
    id: 'a2-hoeren-wohnung',
    level: 'A2',
    title: 'Новая квартира',
    text: 'Lisa ist vor einem Monat umgezogen. Ihre neue Wohnung liegt im dritten Stock und hat zwei Zimmer, eine Küche und ein Bad. Leider gibt es keinen Aufzug. Die Miete beträgt 650 Euro im Monat. Die Wohnung ist hell und ruhig, und der Supermarkt ist nur fünf Minuten entfernt. Nur die Nachbarn kennt Lisa noch nicht. Am Samstag will sie eine kleine Party machen und alle einladen.',
    questions: [
      { question: 'Когда Лиза переехала?', options: ['Месяц назад', 'Неделю назад', 'Год назад'] },
      { question: 'Чего нет в доме?', options: ['Лифта', 'Кухни', 'Ванной'] },
      { question: 'Сколько стоит аренда?', options: ['650 евро', '560 евро', '750 евро'] },
      { question: 'Зачем Лиза устраивает вечеринку?', options: ['Чтобы познакомиться с соседями', 'Чтобы отметить день рождения', 'Чтобы попрощаться с друзьями'] }
    ]
  },
  {
    id: 'a2-hoeren-praxis',
    level: 'A2',
    title: 'Автоответчик врача',
    text: 'Guten Tag, hier ist die Praxis Doktor Weber. Leider rufen Sie außerhalb unserer Sprechzeiten an. Unsere Praxis ist montags bis freitags von acht bis zwölf Uhr geöffnet, dienstags und donnerstags auch von fünfzehn bis achtzehn Uhr. Für einen Termin rufen Sie bitte während der Sprechzeiten an oder schreiben Sie uns eine E-Mail. In dringenden Fällen wählen Sie bitte die Nummer 116 117. Vielen Dank für Ihren Anruf.',
    questions: [
      { question: 'Что это за запись?', options: ['Автоответчик врачебного кабинета', 'Реклама аптеки', 'Объявление в больнице'] },
      { question: 'Когда кабинет работает и после обеда?', options: ['По вторникам и четвергам', 'По понедельникам и средам', 'Каждый день'] },
      { question: 'Как можно записаться на приём?', options: ['Позвонить в часы работы или написать письмо', 'Только прийти лично', 'Оставить сообщение на автоответчике'] },
      { question: 'Что делать в срочном случае?', options: ['Позвонить по номеру 116 117', 'Прийти без записи', 'Подождать до понедельника'] }
    ]
  }
];
