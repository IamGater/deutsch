// Чтение B1: текст и вопросы на понимание.
// В каждом вопросе первый вариант правильный, на экране варианты перемешиваются.
const READING_B1 = [
  {
    id: 'b1-lesen-ehrenamt',
    level: 'B1',
    title: 'Волонтёр в доме престарелых',
    text: 'Jeden Dienstagnachmittag fährt Markus Weber nicht nach Hause, sondern ins Seniorenheim am Stadtpark. Dort liest er älteren Menschen vor, spielt mit ihnen Karten oder hört einfach zu. Bezahlt wird er dafür nicht. „Am Anfang wollte ich nur etwas Sinnvolles tun“, erzählt der 34-jährige Bankangestellte. „Inzwischen bekomme ich viel mehr zurück, als ich gebe.“ Besonders beeindruckt ihn Frau Lange, die mit 91 Jahren noch jeden Tag Zeitung liest und ihm von früher erzählt. Das Heim sucht dringend weitere Freiwillige, denn viele Bewohner bekommen selten Besuch. Wer Interesse hat, kann sich einfach telefonisch melden; besondere Kenntnisse braucht man nicht.',
    questions: [
      { question: 'Was macht Markus jeden Dienstagnachmittag?', options: ['Er besucht ältere Menschen im Seniorenheim.', 'Er arbeitet länger in der Bank.', 'Er spielt Karten mit Freunden.'] },
      { question: 'Was bekommt er für seine Hilfe?', options: ['Kein Geld.', 'Ein kleines Gehalt.', 'Freie Tage in der Bank.'] },
      { question: 'Warum sucht das Heim weitere Freiwillige?', options: ['Weil viele Bewohner selten Besuch bekommen.', 'Weil Markus aufhören möchte.', 'Weil das Heim größer wird.'] },
      { question: 'Was braucht man, um mitzumachen?', options: ['Keine besonderen Kenntnisse.', 'Eine medizinische Ausbildung.', 'Ein eigenes Auto.'] }
    ]
  },
  {
    id: 'b1-lesen-fahrrad',
    level: 'B1',
    title: 'Город пересаживается на велосипед',
    text: 'Immer mehr Menschen in deutschen Städten steigen vom Auto aufs Fahrrad um. Die Gründe dafür sind unterschiedlich: Manche wollen Geld sparen, andere etwas für ihre Gesundheit oder für die Umwelt tun. In Städten wie Münster gehört das Rad längst zu den wichtigsten Verkehrsmitteln. Doch nicht überall sind die Bedingungen so gut. Viele Radfahrer beklagen, dass Radwege fehlen oder plötzlich enden. Außerdem fühlen sie sich im dichten Verkehr oft unsicher. Verkehrsexperten fordern deshalb, mehr Geld in sichere Radwege zu investieren. Sie weisen darauf hin, dass davon auch Autofahrer profitieren würden: Je mehr Menschen Rad fahren, desto weniger Staus gibt es.',
    questions: [
      { question: 'Welcher Grund für das Radfahren wird im Text nicht genannt?', options: ['Schneller ans Ziel zu kommen.', 'Geld zu sparen.', 'Etwas für die Umwelt zu tun.'] },
      { question: 'Was erfährt man über Münster?', options: ['Das Rad ist dort eines der wichtigsten Verkehrsmittel.', 'Dort sind Autos verboten.', 'Dort fehlen besonders viele Radwege.'] },
      { question: 'Worüber beklagen sich viele Radfahrer?', options: ['Über fehlende oder plötzlich endende Radwege.', 'Über zu teure Fahrräder.', 'Über zu viele Fußgänger.'] },
      { question: 'Warum würden auch Autofahrer profitieren?', options: ['Weil es weniger Staus gäbe.', 'Weil das Benzin billiger würde.', 'Weil es mehr Parkplätze gäbe.'] }
    ]
  },
  {
    id: 'b1-lesen-beschwerde',
    level: 'B1',
    title: 'Письмо-жалоба',
    text: 'Sehr geehrte Damen und Herren, am 3. März habe ich in Ihrem Online-Shop einen Staubsauger bestellt. Laut Ihrer Internetseite sollte das Gerät innerhalb von fünf Werktagen geliefert werden. Tatsächlich kam das Paket erst nach drei Wochen an. Als ich es öffnete, stellte ich außerdem fest, dass ein Teil fehlte und das Gehäuse einen Kratzer hatte. Ich habe zweimal versucht, Ihren Kundenservice telefonisch zu erreichen, leider ohne Erfolg. Ich bitte Sie daher, mir entweder ein neues Gerät zu schicken oder den Kaufpreis zu erstatten. Sollte ich bis Ende des Monats nichts von Ihnen hören, werde ich vom Kauf zurücktreten. Mit freundlichen Grüßen, Katrin Vogel',
    questions: [
      { question: 'Wie lange dauerte die Lieferung tatsächlich?', options: ['Drei Wochen.', 'Fünf Werktage.', 'Drei Tage.'] },
      { question: 'Was war mit dem Gerät nicht in Ordnung?', options: ['Ein Teil fehlte und es hatte einen Kratzer.', 'Es war das falsche Modell.', 'Es ließ sich nicht einschalten.'] },
      { question: 'Was ist beim Kundenservice passiert?', options: ['Frau Vogel konnte niemanden erreichen.', 'Man war sehr unfreundlich zu ihr.', 'Man versprach ihr eine schnelle Lösung.'] },
      { question: 'Was verlangt Frau Vogel?', options: ['Ein neues Gerät oder ihr Geld zurück.', 'Einen Gutschein für den nächsten Einkauf.', 'Eine Entschuldigung am Telefon.'] }
    ]
  }
];
