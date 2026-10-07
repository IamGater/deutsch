// Аудирование B2: текст, который читает голос браузера, и вопросы к нему.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const LISTENING_B2 = [
  {
    id: 'b2-hoeren-innenstadt',
    level: 'B2',
    title: 'Центр города без машин',
    text: 'In vielen Großstädten wird derzeit darüber gestritten, ob Innenstädte für Autos gesperrt werden sollten. Befürworter argumentieren, dass dadurch nicht nur die Luftqualität steige, sondern auch mehr Platz für Fußgänger, Radfahrer und Cafés entstehe. Kritiker, vor allem Einzelhändler, befürchten dagegen sinkende Umsätze, da Kunden mit dem Auto auf Einkaufszentren am Stadtrand ausweichen könnten. Studien aus Städten, die diesen Schritt bereits gewagt haben, deuten allerdings darauf hin, dass sich die Umsätze nach einer Übergangszeit eher erhöhen. Entscheidend sei jedoch, dass der öffentliche Nahverkehr vorher deutlich ausgebaut werde.',
    questions: [
      { question: 'Worüber wird in vielen Großstädten gestritten?', options: ['Über autofreie Innenstädte.', 'Über höhere Parkgebühren.', 'Über neue Einkaufszentren.'] },
      { question: 'Was befürchten die Einzelhändler?', options: ['Sinkende Umsätze.', 'Steigende Mieten.', 'Mehr Lärm.'] },
      { question: 'Was zeigen Studien aus anderen Städten?', options: ['Die Umsätze steigen nach einer Übergangszeit eher.', 'Viele Geschäfte müssen schließen.', 'Die Luftqualität bleibt gleich.'] },
      { question: 'Was gilt als entscheidende Voraussetzung?', options: ['Der Ausbau des öffentlichen Nahverkehrs.', 'Der Bau neuer Parkhäuser.', 'Niedrigere Steuern für Händler.'] }
    ]
  },
  {
    id: 'b2-hoeren-schlaf',
    level: 'B2',
    title: 'Сон и здоровье',
    text: 'Schlafforscher warnen seit Jahren davor, dass viele Erwachsene dauerhaft zu wenig schlafen. Wer regelmäßig weniger als sechs Stunden schläft, hat ein deutlich erhöhtes Risiko für Herz-Kreislauf-Erkrankungen und kann sich schlechter konzentrieren. Als eine der Hauptursachen gilt die Nutzung von Bildschirmen am Abend: Das blaue Licht hemmt die Ausschüttung des Schlafhormons Melatonin. Experten empfehlen deshalb, das Smartphone mindestens eine Stunde vor dem Schlafengehen wegzulegen. Hilfreich seien außerdem feste Schlafenszeiten, auch am Wochenende, selbst wenn es schwerfällt.',
    questions: [
      { question: 'Wovor warnen Schlafforscher?', options: ['Dass viele Erwachsene dauerhaft zu wenig schlafen.', 'Dass Kinder zu lange schlafen.', 'Dass Schlafmittel gefährlich sind.'] },
      { question: 'Welche Folge hat Schlafmangel laut Text?', options: ['Ein erhöhtes Risiko für Herz-Kreislauf-Erkrankungen.', 'Ein besseres Gedächtnis.', 'Weniger Appetit.'] },
      { question: 'Warum stören Bildschirme den Schlaf?', options: ['Das blaue Licht hemmt das Schlafhormon.', 'Sie sind zu laut.', 'Sie machen hungrig.'] },
      { question: 'Was empfehlen die Experten?', options: ['Das Smartphone eine Stunde vor dem Schlafen wegzulegen.', 'Am Wochenende länger zu schlafen.', 'Abends Sport zu treiben.'] }
    ]
  },
  {
    id: 'b2-hoeren-ki',
    level: 'B2',
    title: 'Искусственный интеллект и работа',
    text: 'Künstliche Intelligenz verändert die Arbeitswelt schneller, als viele erwartet hatten. Während einfache, sich wiederholende Tätigkeiten zunehmend von Programmen übernommen werden, entstehen gleichzeitig neue Berufe, die es vor zehn Jahren noch gar nicht gab. Arbeitsmarktforscher gehen davon aus, dass insgesamt nicht weniger Arbeit vorhanden sein wird, sich die Anforderungen jedoch grundlegend verschieben. Gefragt seien künftig vor allem Fähigkeiten, die Maschinen schwerfallen: Kreativität, Einfühlungsvermögen und kritisches Denken. Für Beschäftigte bedeute das, sich ein Leben lang weiterzubilden. Unternehmen wiederum müssten ihren Mitarbeitern dafür Zeit und Mittel zur Verfügung stellen.',
    questions: [
      { question: 'Welche Tätigkeiten werden zunehmend von Programmen übernommen?', options: ['Einfache, sich wiederholende Tätigkeiten.', 'Kreative Tätigkeiten.', 'Führungsaufgaben.'] },
      { question: 'Was erwarten Arbeitsmarktforscher?', options: ['Die Anforderungen verschieben sich grundlegend.', 'Es wird deutlich weniger Arbeit geben.', 'Es ändert sich kaum etwas.'] },
      { question: 'Welche Fähigkeiten sind künftig gefragt?', options: ['Kreativität, Einfühlungsvermögen und kritisches Denken.', 'Schnelles Tippen und Rechnen.', 'Körperliche Kraft.'] },
      { question: 'Was müssen Unternehmen tun?', options: ['Zeit und Mittel für Weiterbildung bereitstellen.', 'Mehr Mitarbeiter entlassen.', 'Auf neue Technik verzichten.'] }
    ]
  }
];
