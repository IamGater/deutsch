// Чтение A2: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_A2 = [
  {
    id: 'a2-lesen-einladung',
    level: 'A2',
    title: 'Приглашение на день рождения',
    text: 'Hallo zusammen! Am Samstag, den 14. Juni, werde ich dreißig und möchte das mit euch feiern. Die Party findet nicht bei mir zu Hause statt, sondern im Garten meiner Eltern, weil dort mehr Platz ist. Wir fangen um 17 Uhr an. Für Getränke und Fleisch zum Grillen sorge ich. Es wäre schön, wenn jeder einen Salat oder einen Kuchen mitbringt. Bei Regen feiern wir in der Garage. Bitte sagt mir bis Mittwoch Bescheid, ob ihr kommt. Ich freue mich auf euch! Euer Paul',
    questions: [
      { question: 'Что празднует Пауль?', options: ['Тридцатилетие', 'Новоселье', 'Свадьбу'] },
      { question: 'Почему праздник в саду у родителей?', options: ['Там больше места', 'У Пауля дома ремонт', 'Так захотели родители'] },
      { question: 'Что гостей просят принести?', options: ['Салат или пирог', 'Напитки', 'Мясо для гриля'] },
      { question: 'До какого дня нужно ответить?', options: ['До среды', 'До субботы', 'До пятницы'] }
    ]
  },
  {
    id: 'a2-lesen-arbeitstag',
    level: 'A2',
    title: 'Рабочий день Сабины',
    text: 'Sabine arbeitet seit drei Jahren als Verkäuferin in einer Bäckerei. Ihr Arbeitstag beginnt sehr früh: Schon um halb sechs öffnet sie das Geschäft. Am Morgen kommen viele Kunden, die auf dem Weg zur Arbeit Brötchen und Kaffee kaufen. Mittags ist es ruhiger, dann räumt Sabine auf und bestellt neue Waren. Um 14 Uhr hat sie Feierabend. Das frühe Aufstehen findet sie anstrengend, aber sie mag es, dass sie nachmittags Zeit für ihre Kinder hat. Am Samstag muss sie auch arbeiten, dafür hat sie montags frei.',
    questions: [
      { question: 'Где работает Сабина?', options: ['В булочной', 'В кафе', 'В супермаркете'] },
      { question: 'Когда приходит больше всего покупателей?', options: ['Утром', 'В обед', 'Вечером'] },
      { question: 'Что ей нравится в её графике?', options: ['После обеда есть время для детей', 'Высокая зарплата', 'Работа по субботам'] },
      { question: 'В какой день у неё выходной?', options: ['В понедельник', 'В субботу', 'В воскресенье'] }
    ]
  },
  {
    id: 'a2-lesen-stadt',
    level: 'A2',
    title: 'Советы гостям города',
    text: 'Liebe Gäste, herzlich willkommen in unserer Stadt! Hier einige Tipps für Ihren Besuch. Das Stadtmuseum ist täglich außer montags von 10 bis 18 Uhr geöffnet. Der Eintritt kostet 8 Euro, für Kinder unter zwölf Jahren ist er frei. Vom Turm der alten Kirche haben Sie einen wunderbaren Blick über die Stadt, aber Achtung: Es gibt keinen Aufzug, nur 200 Stufen. Auf dem Marktplatz findet jeden Mittwoch und Samstag ein Markt mit Obst und Gemüse aus der Region statt. Mit der Tageskarte für 6 Euro können Sie alle Busse und Straßenbahnen benutzen.',
    questions: [
      { question: 'Когда музей закрыт?', options: ['По понедельникам', 'По воскресеньям', 'По средам'] },
      { question: 'Кто проходит в музей бесплатно?', options: ['Дети младше двенадцати лет', 'Все по субботам', 'Студенты'] },
      { question: 'Как подняться на башню?', options: ['По лестнице', 'На лифте', 'На автобусе'] },
      { question: 'Сколько стоит дневной билет на транспорт?', options: ['6 евро', '8 евро', '12 евро'] }
    ]
  }
];
