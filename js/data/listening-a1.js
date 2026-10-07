// Аудирование A1: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_A1 = [
  {
    id: 'a1-hoeren-vorstellung',
    level: 'A1',
    title: 'Мария рассказывает о себе',
    text: 'Hallo! Ich heiße Maria und komme aus Spanien. Ich bin 25 Jahre alt und wohne jetzt in Berlin. Ich arbeite als Krankenschwester in einem Krankenhaus. Meine Arbeit beginnt um sieben Uhr. Am Wochenende lerne ich Deutsch und treffe Freunde. Ich habe einen Bruder. Er heißt Pablo und wohnt in Madrid.',
    questions: [
      { question: 'Откуда Мария?', options: ['Из Испании', 'Из Италии', 'Из Германии'] },
      { question: 'Кем она работает?', options: ['Медсестрой', 'Учительницей', 'Продавцом'] },
      { question: 'Во сколько начинается её работа?', options: ['В семь часов', 'В восемь часов', 'В девять часов'] },
      { question: 'Где живёт её брат?', options: ['В Мадриде', 'В Берлине', 'В Барселоне'] }
    ]
  },
  {
    id: 'a1-hoeren-einkaufen',
    level: 'A1',
    title: 'В супермаркете',
    text: 'Heute ist Samstag. Tom geht in den Supermarkt. Er kauft Brot, Käse, Milch und sechs Eier. Er möchte auch Äpfel kaufen, aber die Äpfel sind zu teuer. Er nimmt Bananen. An der Kasse bezahlt er zwölf Euro. Dann geht er nach Hause und macht Frühstück für seine Familie.',
    questions: [
      { question: 'Какой сегодня день?', options: ['Суббота', 'Воскресенье', 'Пятница'] },
      { question: 'Почему Том не покупает яблоки?', options: ['Они слишком дорогие', 'Их нет в магазине', 'Он их не любит'] },
      { question: 'Сколько он платит?', options: ['12 евро', '20 евро', '10 евро'] },
      { question: 'Что он делает дома?', options: ['Готовит завтрак', 'Смотрит телевизор', 'Ложится спать'] }
    ]
  },
  {
    id: 'a1-hoeren-tag',
    level: 'A1',
    title: 'Мой день',
    text: 'Ich stehe jeden Tag um halb sieben auf. Zuerst dusche ich, dann trinke ich Kaffee. Um acht Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite in einem Büro. Mittags esse ich in der Kantine. Um fünf Uhr habe ich Feierabend. Abends koche ich oder sehe einen Film. Um elf Uhr gehe ich ins Bett.',
    questions: [
      { question: 'Во сколько человек встаёт?', options: ['В половине седьмого', 'В семь часов', 'В половине восьмого'] },
      { question: 'Как он добирается до работы?', options: ['На автобусе', 'На машине', 'Пешком'] },
      { question: 'Где он обедает?', options: ['В столовой', 'Дома', 'В ресторане'] },
      { question: 'Что он делает вечером?', options: ['Готовит или смотрит фильм', 'Занимается спортом', 'Встречается с друзьями'] }
    ]
  }
];
