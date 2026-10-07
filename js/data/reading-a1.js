// Чтение A1: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_A1 = [
  {
    id: 'a1-lesen-email',
    level: 'A1',
    title: 'Письмо подруге',
    text: 'Liebe Anna, wie geht es dir? Ich bin jetzt seit zwei Wochen in München. Die Stadt ist groß und sehr schön. Ich wohne in einem kleinen Zimmer in der Nähe vom Bahnhof. Das Zimmer kostet 400 Euro im Monat. Jeden Tag gehe ich zum Deutschkurs. Der Kurs beginnt um neun Uhr und endet um zwölf Uhr. Meine Lehrerin heißt Frau Braun. Sie ist sehr nett. Am Wochenende besuche ich das Museum. Kommst du mich im Mai besuchen? Viele Grüße, Marta',
    questions: [
      { question: 'Как давно Марта в Мюнхене?', options: ['Две недели', 'Два месяца', 'Два дня'] },
      { question: 'Где она живёт?', options: ['В маленькой комнате рядом с вокзалом', 'В большой квартире в центре', 'В гостинице'] },
      { question: 'Когда заканчивается курс?', options: ['В двенадцать часов', 'В девять часов', 'В два часа'] },
      { question: 'О чём Марта спрашивает Анну?', options: ['Приедет ли она в мае', 'Сколько стоит её комната', 'Как зовут её учительницу'] }
    ]
  },
  {
    id: 'a1-lesen-anzeige',
    level: 'A1',
    title: 'Объявление о квартире',
    text: 'Wohnung zu vermieten! Schöne, helle Wohnung im Zentrum von Köln. Zwei Zimmer, Küche, Bad und Balkon. Die Wohnung ist 55 Quadratmeter groß und liegt im zweiten Stock. Die Miete beträgt 700 Euro im Monat. Die Haltestelle ist nur drei Minuten zu Fuß entfernt. Haustiere sind leider nicht erlaubt. Die Wohnung ist ab dem 1. Juli frei. Rufen Sie bitte abends an: Herr Schmitz, Telefon 0221 12345.',
    questions: [
      { question: 'Сколько комнат в квартире?', options: ['Две', 'Три', 'Одна'] },
      { question: 'Что в квартире запрещено?', options: ['Держать домашних животных', 'Курить на балконе', 'Приглашать гостей'] },
      { question: 'С какого числа квартира свободна?', options: ['С 1 июля', 'С 1 июня', 'С 1 мая'] },
      { question: 'Когда нужно звонить?', options: ['Вечером', 'Утром', 'В обед'] }
    ]
  },
  {
    id: 'a1-lesen-familie',
    level: 'A1',
    title: 'Семья Тима',
    text: 'Ich heiße Tim und bin zwölf Jahre alt. Meine Familie ist nicht groß. Mein Vater ist Koch und arbeitet in einem Restaurant. Meine Mutter ist Lehrerin. Ich habe eine Schwester. Sie heißt Lena und ist erst vier Jahre alt. Wir haben auch einen Hund. Er heißt Max. Am Sonntag frühstücken wir zusammen und gehen dann in den Park. Mein Vater kocht am Sonntag nicht. Dann kocht meine Mutter.',
    questions: [
      { question: 'Кем работает отец Тима?', options: ['Поваром', 'Учителем', 'Врачом'] },
      { question: 'Сколько лет сестре Тима?', options: ['Четыре года', 'Двенадцать лет', 'Четырнадцать лет'] },
      { question: 'Как зовут собаку?', options: ['Макс', 'Тим', 'Лена'] },
      { question: 'Кто готовит в воскресенье?', options: ['Мама', 'Папа', 'Тим'] }
    ]
  }
];
