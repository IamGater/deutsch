// Аудирование B1: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_B1 = [
  {
    id: 'b1-hoeren-homeoffice',
    level: 'B1',
    title: 'Работа из дома',
    text: 'Seit zwei Jahren arbeitet Jonas fast nur noch von zu Hause aus. Am Anfang fand er das großartig, weil er nicht mehr jeden Tag eine Stunde im Stau stehen musste. Inzwischen sieht er aber auch die Nachteile. Ihm fehlen die Gespräche mit den Kollegen, und es fällt ihm schwer, nach der Arbeit abzuschalten, weil sein Schreibtisch im Wohnzimmer steht. Deshalb hat er mit seiner Chefin vereinbart, dass er ab nächstem Monat zwei Tage pro Woche ins Büro kommt. So hofft er, das Beste aus beiden Welten zu verbinden.',
    questions: [
      { question: 'Warum gefiel Jonas das Homeoffice am Anfang?', options: ['Weil er nicht mehr im Stau stehen musste.', 'Weil er mehr Geld verdiente.', 'Weil er mehr Zeit mit Kollegen hatte.'] },
      { question: 'Was fällt ihm heute schwer?', options: ['Nach der Arbeit abzuschalten.', 'Früh aufzustehen.', 'Mit der Technik umzugehen.'] },
      { question: 'Wo steht sein Schreibtisch?', options: ['Im Wohnzimmer.', 'Im Schlafzimmer.', 'Im Keller.'] },
      { question: 'Was hat er mit seiner Chefin vereinbart?', options: ['Zwei Tage pro Woche ins Büro zu kommen.', 'Nur noch im Büro zu arbeiten.', 'Die Abteilung zu wechseln.'] }
    ]
  },
  {
    id: 'b1-hoeren-nachrichten',
    level: 'B1',
    title: 'Новости региона',
    text: 'Und nun die Nachrichten aus der Region. Wegen Bauarbeiten bleibt die Hauptstraße ab Montag für drei Wochen gesperrt. Autofahrer werden gebeten, die Umleitung über den Bahnhof zu nutzen. Die Buslinie 12 fährt in dieser Zeit eine andere Strecke. Außerdem eröffnet am Samstag das neue Schwimmbad im Stadtpark. Am ersten Tag ist der Eintritt für alle Besucher frei. Und zum Wetter: Am Wochenende wird es sonnig und bis zu 25 Grad warm, erst am Sonntagabend sind Gewitter möglich.',
    questions: [
      { question: 'Warum wird die Hauptstraße gesperrt?', options: ['Wegen Bauarbeiten.', 'Wegen eines Unfalls.', 'Wegen eines Stadtfestes.'] },
      { question: 'Wie lange dauert die Sperrung?', options: ['Drei Wochen.', 'Drei Tage.', 'Einen Monat.'] },
      { question: 'Was ist am ersten Tag im neuen Schwimmbad besonders?', options: ['Der Eintritt ist frei.', 'Es gibt ein Konzert.', 'Es ist nur für Kinder geöffnet.'] },
      { question: 'Wann sind Gewitter möglich?', options: ['Am Sonntagabend.', 'Am Samstagmorgen.', 'Am Montag.'] }
    ]
  },
  {
    id: 'b1-hoeren-sprachenlernen',
    level: 'B1',
    title: 'Как учить язык',
    text: 'Viele Menschen fragen sich, wie man eine Sprache am besten lernt. Frau Keller unterrichtet seit fünfzehn Jahren Deutsch als Fremdsprache. Ihrer Erfahrung nach ist Regelmäßigkeit wichtiger als Talent. Wer jeden Tag zwanzig Minuten übt, macht schnellere Fortschritte als jemand, der einmal pro Woche drei Stunden lernt. Außerdem rät sie, keine Angst vor Fehlern zu haben. Fehler seien ein normaler Teil des Lernens. Am meisten helfe es, die Sprache im Alltag zu benutzen, zum Beispiel beim Einkaufen oder im Gespräch mit Nachbarn.',
    questions: [
      { question: 'Wie lange unterrichtet Frau Keller schon?', options: ['Seit fünfzehn Jahren.', 'Seit fünf Jahren.', 'Seit fünfzig Jahren.'] },
      { question: 'Was ist laut Frau Keller wichtiger als Talent?', options: ['Regelmäßigkeit.', 'Ein teurer Kurs.', 'Ein gutes Gedächtnis.'] },
      { question: 'Was sagt sie über Fehler?', options: ['Sie sind ein normaler Teil des Lernens.', 'Man sollte sie unbedingt vermeiden.', 'Sie zeigen, dass man kein Talent hat.'] },
      { question: 'Was hilft am meisten?', options: ['Die Sprache im Alltag zu benutzen.', 'Viele Grammatikbücher zu lesen.', 'Nur mit dem Lehrer zu sprechen.'] }
    ]
  }
];
