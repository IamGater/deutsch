// Чтение B2: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_B2 = [
  {
    id: 'b2-lesen-viertagewoche',
    level: 'B2',
    title: 'Четырёхдневная рабочая неделя',
    text: 'Die Idee klingt verlockend: vier Tage arbeiten, drei Tage frei, und das bei vollem Gehalt. In mehreren europäischen Ländern haben Unternehmen dieses Modell in den letzten Jahren getestet, und die Ergebnisse überraschten selbst Skeptiker. In den meisten beteiligten Betrieben blieb die Produktivität gleich oder stieg sogar leicht, während Krankmeldungen deutlich zurückgingen. Befürworter führen dies darauf zurück, dass ausgeruhte Beschäftigte konzentrierter arbeiten und unnötige Besprechungen gestrichen werden. Kritiker geben jedoch zu bedenken, dass sich das Modell nicht auf alle Branchen übertragen lässt. In der Pflege oder im Einzelhandel etwa müsste zusätzliches Personal eingestellt werden, das angesichts des Fachkräftemangels kaum zu finden ist. Ob sich die Viertagewoche flächendeckend durchsetzt, bleibt daher offen.',
    questions: [
      { question: 'Was ergaben die Tests in den meisten Betrieben?', options: ['Die Produktivität blieb gleich oder stieg leicht.', 'Die Produktivität sank deutlich.', 'Die Gehälter mussten gekürzt werden.'] },
      { question: 'Wie erklären Befürworter das Ergebnis?', options: ['Ausgeruhte Beschäftigte arbeiten konzentrierter.', 'Die Beschäftigten machen mehr Überstunden.', 'Die Betriebe stellen mehr Personal ein.'] },
      { question: 'Welchen Einwand haben Kritiker?', options: ['Das Modell lässt sich nicht auf alle Branchen übertragen.', 'Die Beschäftigten wollen keinen freien Tag.', 'Die Tests waren zu kurz.'] },
      { question: 'Warum ist das Modell in der Pflege schwierig?', options: ['Es fehlt das zusätzliche Personal.', 'Die Patienten lehnen es ab.', 'Es ist gesetzlich verboten.'] }
    ]
  },
  {
    id: 'b2-lesen-lebensmittel',
    level: 'B2',
    title: 'Выброшенные продукты',
    text: 'Rund ein Drittel aller weltweit produzierten Lebensmittel landet nicht auf dem Teller, sondern im Müll. Lange wurde die Verantwortung dafür vor allem den Verbrauchern zugeschrieben, die zu viel einkaufen und das Mindesthaltbarkeitsdatum mit einem Verfallsdatum verwechseln. Neuere Untersuchungen zeigen allerdings, dass ein erheblicher Teil der Verluste bereits vor dem Verkauf entsteht: Obst und Gemüse, das nicht den optischen Normen des Handels entspricht, wird häufig gar nicht erst geerntet. Initiativen, die solche Ware gezielt vermarkten, erfreuen sich deshalb wachsender Beliebtheit. Fachleute betonen jedoch, dass freiwillige Maßnahmen allein nicht ausreichen. Sie fordern verbindliche Vorgaben für den Handel, wie sie in Frankreich bereits gelten, wo große Supermärkte unverkaufte Lebensmittel nicht mehr einfach wegwerfen dürfen.',
    questions: [
      { question: 'Wem wurde die Verschwendung lange vor allem zugeschrieben?', options: ['Den Verbrauchern.', 'Den Landwirten.', 'Den Restaurants.'] },
      { question: 'Was zeigen neuere Untersuchungen?', options: ['Viele Verluste entstehen schon vor dem Verkauf.', 'Verbraucher werfen heute nichts mehr weg.', 'Die Verschwendung ist stark gesunken.'] },
      { question: 'Warum wird manches Obst und Gemüse nicht geerntet?', options: ['Es entspricht nicht den optischen Normen des Handels.', 'Es ist nicht mehr frisch.', 'Die Ernte ist zu teuer.'] },
      { question: 'Was fordern die Fachleute?', options: ['Verbindliche Vorgaben für den Handel.', 'Mehr freiwillige Initiativen.', 'Höhere Preise für Lebensmittel.'] }
    ]
  },
  {
    id: 'b2-lesen-mehrsprachigkeit',
    level: 'B2',
    title: 'Дети с двумя языками',
    text: 'Kinder, die mit zwei Sprachen aufwachsen, galten früher als benachteiligt: Man befürchtete, sie würden keine der beiden Sprachen richtig beherrschen. Diese Annahme gilt heute als widerlegt. Zwar verfügen mehrsprachige Kinder in jeder einzelnen Sprache zunächst oft über einen etwas kleineren Wortschatz als einsprachige Gleichaltrige, doch gleicht sich dieser Unterschied in der Regel im Laufe der Schulzeit aus. Zugleich deuten zahlreiche Studien darauf hin, dass Mehrsprachigkeit die Fähigkeit fördert, zwischen Aufgaben zu wechseln und Unwichtiges auszublenden. Entscheidend ist nach Ansicht von Sprachwissenschaftlern allerdings, dass beide Sprachen im Alltag tatsächlich gebraucht werden. Eltern wird deshalb geraten, mit ihren Kindern in der Sprache zu sprechen, die sie selbst am besten beherrschen, statt sich in einer Fremdsprache abzumühen.',
    questions: [
      { question: 'Was befürchtete man früher bei zweisprachigen Kindern?', options: ['Dass sie keine Sprache richtig beherrschen.', 'Dass sie zu viel sprechen.', 'Dass sie schlechter rechnen.'] },
      { question: 'Was sagt der Text über den Wortschatz?', options: ['Der anfängliche Unterschied gleicht sich meist aus.', 'Er bleibt immer kleiner.', 'Er ist von Anfang an größer.'] },
      { question: 'Welchen Vorteil nennen Studien?', options: ['Besseres Wechseln zwischen Aufgaben.', 'Ein besseres Gehör für Musik.', 'Schnelleres Lesenlernen.'] },
      { question: 'Was wird Eltern geraten?', options: ['In der Sprache zu sprechen, die sie am besten beherrschen.', 'Nur die Landessprache zu sprechen.', 'Die Kinder früh in Sprachkurse zu schicken.'] }
    ]
  }
];
