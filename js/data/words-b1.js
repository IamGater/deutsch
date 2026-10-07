// Словарь B1.
// Каждая строка: немецкое слово | перевод | пример.
// Строка, которая начинается с #, — название темы.
const WORDS_B1 = `
# Общество и политика
die Gesellschaft|общество|Die Gesellschaft verändert sich schnell.
die Politik|политика|Ich interessiere mich für Politik.
der Politiker|политик|Der Politiker hält eine Rede.
die Regierung|правительство|Die Regierung plant neue Gesetze.
der Staat|государство|Der Staat unterstützt Familien.
die Partei|партия|Welche Partei hat gewonnen?
die Wahl|выборы; выбор|Die Wahl findet im Herbst statt.
wählen|выбирать, голосовать|Ab 18 darf man wählen.
die Stimme|голос|Jede Stimme zählt.
der Bürger|гражданин|Die Bürger protestieren gegen die Pläne.
der Bürgermeister|мэр|Der Bürgermeister eröffnet das Fest.
die Bevölkerung|население|Die Bevölkerung wächst.
der Einwohner|житель|Die Stadt hat 200 000 Einwohner.
die Demokratie|демократия|Wir leben in einer Demokratie.
die Freiheit|свобода|Freiheit ist ein hohes Gut.
die Gerechtigkeit|справедливость|Sie kämpfen für Gerechtigkeit.
die Gleichberechtigung|равноправие|Gleichberechtigung ist noch nicht überall Realität.
das Gesetz|закон|Das Gesetz gilt für alle.
das Recht|право|Jeder hat das Recht auf Bildung.
die Pflicht|обязанность|Es ist meine Pflicht zu helfen.
die Steuer|налог|Die Steuern sind gestiegen.
die Behörde|ведомство|Die Behörde hat den Antrag geprüft.
das Amt|учреждение|Ich muss morgen aufs Amt.
der Antrag|заявление, ходатайство|Ich stelle einen Antrag.
beantragen|подавать заявление|Ich möchte ein Visum beantragen.
die Genehmigung|разрешение|Dafür brauchen Sie eine Genehmigung.
die Aufenthaltserlaubnis|вид на жительство|Meine Aufenthaltserlaubnis läuft bald ab.
die Staatsangehörigkeit|гражданство|Welche Staatsangehörigkeit haben Sie?
der Ausländer|иностранец|In Berlin leben viele Ausländer.
die Einwanderung|иммиграция|Die Einwanderung ist ein wichtiges Thema.
der Flüchtling|беженец|Die Stadt hilft den Flüchtlingen.
die Integration|интеграция|Sprache ist wichtig für die Integration.
die Heimat|родина|Ich vermisse meine Heimat.
der Krieg|война|Der Krieg dauerte vier Jahre.
der Frieden|мир (без войны)|Alle wünschen sich Frieden.
die Armut|бедность|Die Armut nimmt zu.
die Arbeitslosigkeit|безработица|Die Arbeitslosigkeit ist gesunken.
die Kriminalität|преступность|Die Kriminalität ist zurückgegangen.
die Gewalt|насилие|Gewalt ist keine Lösung.
das Verbrechen|преступление|Das Verbrechen wurde schnell aufgeklärt.
der Dieb|вор|Der Dieb wurde gefasst.
stehlen|красть|Jemand hat mein Fahrrad gestohlen.
der Rechtsanwalt|адвокат|Ich brauche einen Rechtsanwalt.
der Zeuge|свидетель|Der Zeuge hat alles gesehen.
die Strafe|штраф, наказание|Er muss eine Strafe zahlen.
das Gefängnis|тюрьма|Er sitzt im Gefängnis.
schuldig|виновный|Der Mann ist schuldig.
die Demonstration|демонстрация|Tausende kamen zur Demonstration.
der Streik|забастовка|Wegen des Streiks fahren keine Züge.
die Mehrheit|большинство|Die Mehrheit ist dafür.
die Minderheit|меньшинство|Nur eine Minderheit ist dagegen.

# Работа и карьера
die Karriere|карьера|Sie hat schnell Karriere gemacht.
das Unternehmen|компания, предприятие|Das Unternehmen sucht neue Mitarbeiter.
der Unternehmer|предприниматель|Er ist ein erfolgreicher Unternehmer.
der Arbeitnehmer|наёмный работник|Die Arbeitnehmer fordern mehr Lohn.
der Lohn|заработная плата|Der Lohn wird am Monatsende gezahlt.
das Einkommen|доход|Das Einkommen reicht kaum.
die Gehaltserhöhung|повышение зарплаты|Ich habe eine Gehaltserhöhung bekommen.
das Vorstellungsgespräch|собеседование|Morgen habe ich ein Vorstellungsgespräch.
sich bewerben|подавать заявление на работу|Ich bewerbe mich um die Stelle.
der Bewerber|соискатель|Es gibt viele Bewerber.
die Stellenanzeige|объявление о вакансии|Ich habe die Stellenanzeige gelesen.
einstellen|нанимать|Die Firma stellt neue Leute ein.
entlassen|увольнять|Er wurde entlassen.
die Kündigung|увольнение, расторжение|Sie hat die Kündigung bekommen.
die Probezeit|испытательный срок|Die Probezeit dauert sechs Monate.
die Vollzeit|полная занятость|Ich arbeite in Vollzeit.
die Teilzeit|частичная занятость|Sie arbeitet in Teilzeit.
die Schicht|смена|Ich habe diese Woche Nachtschicht.
die Rente|пенсия|Mein Vater geht bald in Rente.
der Betriebsrat|совет предприятия|Der Betriebsrat vertritt die Mitarbeiter.
die Gewerkschaft|профсоюз|Die Gewerkschaft ruft zum Streik auf.
die Verantwortung|ответственность|Er trägt viel Verantwortung.
verantwortlich|ответственный|Wer ist dafür verantwortlich?
die Fähigkeit|способность|Sie hat viele Fähigkeiten.
die Leistung|достижение, результат|Das war eine tolle Leistung.
der Erfolg|успех|Ich wünsche dir viel Erfolg.
erfolgreich|успешный|Das Projekt war erfolgreich.
der Misserfolg|неудача|Aus Misserfolgen lernt man.
die Herausforderung|вызов, трудная задача|Der neue Job ist eine Herausforderung.
die Weiterbildung|повышение квалификации|Ich mache eine Weiterbildung.
die Fortbildung|курсы повышения квалификации|Die Fortbildung dauert zwei Tage.
der Auftrag|заказ, поручение|Wir haben einen großen Auftrag bekommen.
die Frist|срок|Die Frist endet am Freitag.
der Termindruck|нехватка времени|Wir stehen unter Termindruck.
die Sitzung|заседание|Die Sitzung wurde verschoben.
die Konferenz|конференция|Die Konferenz findet in Wien statt.
die Verhandlung|переговоры|Die Verhandlungen dauern noch an.
verhandeln|вести переговоры|Wir verhandeln über den Preis.
der Geschäftspartner|деловой партнёр|Unser Geschäftspartner kommt aus Japan.
die Konkurrenz|конкуренция|Die Konkurrenz ist groß.
die Zusammenarbeit|сотрудничество|Danke für die gute Zusammenarbeit.
leiten|руководить|Sie leitet die Abteilung.
der Leiter|руководитель|Der Leiter der Abteilung ist im Urlaub.
vertreten|замещать, представлять|Ich vertrete meinen Kollegen.
zuständig|ответственный, компетентный|Wer ist für diese Frage zuständig?
beschäftigt|занятый|Ich bin gerade sehr beschäftigt.
die Tätigkeit|деятельность|Meine Tätigkeit ist sehr abwechslungsreich.
die Branche|отрасль|In welcher Branche arbeiten Sie?
die Dienstreise|командировка|Ich bin auf Dienstreise.
der Feiertag|праздничный день|Am Feiertag sind die Geschäfte geschlossen.

# Образование и наука
die Bildung|образование|Bildung ist der Schlüssel zum Erfolg.
die Wissenschaft|наука|Die Wissenschaft macht Fortschritte.
der Wissenschaftler|учёный|Wissenschaftler haben das untersucht.
die Forschung|исследования|Er arbeitet in der Forschung.
forschen|исследовать|Sie forscht an neuen Medikamenten.
die Untersuchung|исследование, обследование|Die Untersuchung dauert noch.
das Ergebnis|результат|Das Ergebnis ist überraschend.
die Erkenntnis|вывод, познание|Das ist eine wichtige Erkenntnis.
die Entwicklung|развитие|Die Entwicklung geht schnell.
entwickeln|развивать, разрабатывать|Wir entwickeln eine neue App.
die Erfindung|изобретение|Das Rad war eine wichtige Erfindung.
erfinden|изобретать|Wer hat das Telefon erfunden?
entdecken|открывать, обнаруживать|Kolumbus entdeckte Amerika.
der Versuch|попытка, опыт|Der Versuch ist gelungen.
die Methode|метод|Diese Methode ist effektiv.
die Theorie|теория|Das ist nur eine Theorie.
die Tatsache|факт|Das ist eine Tatsache.
der Beweis|доказательство|Dafür gibt es keinen Beweis.
beweisen|доказывать|Das kann ich beweisen.
die Hochschule|высшее учебное заведение|Sie studiert an einer Hochschule.
die Vorlesung|лекция|Die Vorlesung fällt heute aus.
das Semester|семестр|Das Semester beginnt im Oktober.
das Stipendium|стипендия|Sie hat ein Stipendium bekommen.
der Vortrag|доклад|Ich halte morgen einen Vortrag.
das Referat|реферат, доклад|Mein Referat dauert zehn Minuten.
die Zusammenfassung|краткое изложение|Schreiben Sie eine Zusammenfassung.
zusammenfassen|резюмировать|Können Sie das kurz zusammenfassen?
der Begriff|понятие|Diesen Begriff kenne ich nicht.
der Ausdruck|выражение|Das ist ein typischer Ausdruck.
der Inhalt|содержание|Der Inhalt des Buches ist spannend.
der Abschnitt|раздел, абзац|Lesen Sie den ersten Abschnitt.
die Voraussetzung|предпосылка, условие|Gute Sprachkenntnisse sind Voraussetzung.
das Wissen|знание|Wissen ist Macht.
die Fachkenntnisse|специальные знания|Dafür braucht man Fachkenntnisse.
begabt|одарённый|Das Kind ist sehr begabt.
sich konzentrieren|сосредоточиваться|Ich kann mich nicht konzentrieren.
sich vorbereiten|готовиться|Ich bereite mich auf die Prüfung vor.
durchfallen|провалиться (на экзамене)|Er ist durch die Prüfung gefallen.
abschließen|заканчивать|Sie hat ihr Studium abgeschlossen.
auswendig|наизусть|Ich lerne das Gedicht auswendig.

# Окружающая среда
die Umwelt|окружающая среда|Wir müssen die Umwelt schützen.
der Umweltschutz|охрана окружающей среды|Umweltschutz geht alle an.
die Umweltverschmutzung|загрязнение окружающей среды|Die Umweltverschmutzung nimmt zu.
das Klima|климат|Das Klima verändert sich.
der Klimawandel|изменение климата|Der Klimawandel ist ein globales Problem.
die Energie|энергия|Wir müssen Energie sparen.
die Solarenergie|солнечная энергия|Solarenergie wird immer wichtiger.
das Kraftwerk|электростанция|Das Kraftwerk wird geschlossen.
der Abfall|отходы|Der Abfall wird getrennt.
die Mülltrennung|сортировка мусора|Mülltrennung ist in Deutschland üblich.
das Recycling|переработка|Recycling schont Ressourcen.
der Kunststoff|пластик|Die Flasche ist aus Kunststoff.
die Verpackung|упаковка|Zu viel Verpackung schadet der Umwelt.
das Abgas|выхлопной газ|Die Abgase verschmutzen die Luft.
der Lärm|шум|Der Lärm stört mich.
der Rohstoff|сырьё|Öl ist ein wichtiger Rohstoff.
die Katastrophe|катастрофа|Das Erdbeben war eine Katastrophe.
das Erdbeben|землетрясение|Das Erdbeben zerstörte viele Häuser.
die Überschwemmung|наводнение|Nach dem Regen kam die Überschwemmung.
der Sturm|буря|Der Sturm hat Bäume umgeworfen.
die Dürre|засуха|Die Dürre zerstört die Ernte.
die Ernte|урожай|Die Ernte war dieses Jahr gut.
die Landwirtschaft|сельское хозяйство|Er arbeitet in der Landwirtschaft.
das Gebiet|область, территория|Das Gebiet steht unter Naturschutz.
die Gegend|местность|Die Gegend ist sehr ruhig.
die Küste|побережье|Wir machen Urlaub an der Küste.
das Gebirge|горы, горный массив|Wir wandern im Gebirge.
das Tal|долина|Das Dorf liegt in einem Tal.
die Wüste|пустыня|In der Wüste regnet es selten.
die Art|вид; способ|Diese Art ist vom Aussterben bedroht.
aussterben|вымирать|Viele Tierarten sterben aus.
schützen|защищать|Wir müssen die Natur schützen.
verschmutzen|загрязнять|Autos verschmutzen die Luft.
zerstören|разрушать|Der Sturm zerstörte das Dach.
verbrauchen|потреблять, расходовать|Das Auto verbraucht viel Benzin.
der Verbrauch|потребление|Der Verbrauch von Wasser steigt.
verschwenden|растрачивать|Wir verschwenden zu viel Energie.
umweltfreundlich|экологичный|Fahrradfahren ist umweltfreundlich.
nachhaltig|устойчивый, экологичный|Wir wollen nachhaltig leben.
erneuerbar|возобновляемый|Erneuerbare Energien sind die Zukunft.

# Медиа и технологии
die Medien|СМИ|Die Medien berichten täglich darüber.
die Presse|пресса|Die Presse war eingeladen.
der Journalist|журналист|Der Journalist stellt viele Fragen.
der Artikel|статья|Ich habe einen interessanten Artikel gelesen.
die Schlagzeile|заголовок|Die Schlagzeile ist übertrieben.
der Bericht|отчёт, репортаж|Der Bericht ist sehr ausführlich.
das Interview|интервью|Das Interview war spannend.
die Umfrage|опрос|Laut einer Umfrage sind viele dagegen.
die Quelle|источник|Was ist die Quelle dieser Information?
veröffentlichen|публиковать|Der Autor veröffentlicht ein neues Buch.
der Zuschauer|зритель|Die Zuschauer klatschen.
der Sender|телеканал, радиостанция|Welchen Sender siehst du?
die Übertragung|трансляция|Die Übertragung beginnt um 20 Uhr.
die Technik|техника|Die Technik entwickelt sich schnell.
die Technologie|технология|Neue Technologien verändern die Arbeit.
die Digitalisierung|цифровизация|Die Digitalisierung betrifft alle Branchen.
die Künstliche Intelligenz|искусственный интеллект|Künstliche Intelligenz ist ein großes Thema.
die Daten|данные|Die Daten werden gespeichert.
der Datenschutz|защита данных|Datenschutz ist uns wichtig.
die Software|программное обеспечение|Die Software muss aktualisiert werden.
die Anwendung|приложение; применение|Die Anwendung ist einfach.
das Netzwerk|сеть|Das Netzwerk ist ausgefallen.
soziale Netzwerke|социальные сети|Viele nutzen soziale Netzwerke.
der Nutzer|пользователь|Die App hat eine Million Nutzer.
nutzen|использовать|Ich nutze das Internet täglich.
die Verbindung|соединение, связь|Die Verbindung ist schlecht.
der Anschluss|подключение; пересадка|Wir brauchen einen Internetanschluss.
der Empfang|приём (сигнала)|Hier habe ich keinen Empfang.
aktualisieren|обновлять|Ich muss die App aktualisieren.
löschen|удалять|Ich habe die Datei gelöscht.
hochladen|загружать (в сеть)|Ich lade die Fotos hoch.
der Anhang|вложение|Die Datei ist im Anhang.
weiterleiten|пересылать|Ich leite die E-Mail weiter.
die Störung|сбой, помеха|Es gibt eine technische Störung.
der Fortschritt|прогресс|Der technische Fortschritt ist enorm.
die Zukunft|будущее|Niemand kennt die Zukunft.
die Gegenwart|настоящее|Wir leben in der Gegenwart.
die Vergangenheit|прошлое|Das gehört der Vergangenheit an.

# Здоровье и самочувствие
die Behandlung|лечение|Die Behandlung dauert drei Wochen.
behandeln|лечить; обращаться|Der Arzt behandelt den Patienten.
die Operation|операция|Die Operation ist gut verlaufen.
operieren|оперировать|Er wurde gestern operiert.
die Impfung|прививка|Die Impfung schützt vor der Krankheit.
die Spritze|укол, шприц|Ich habe Angst vor Spritzen.
die Salbe|мазь|Tragen Sie die Salbe zweimal täglich auf.
die Nebenwirkung|побочный эффект|Das Medikament hat Nebenwirkungen.
die Allergie|аллергия|Ich habe eine Allergie gegen Nüsse.
die Entzündung|воспаление|Ich habe eine Entzündung im Hals.
die Wunde|рана|Die Wunde heilt gut.
heilen|заживать, излечивать|Die Verletzung heilt langsam.
die Besserung|выздоровление|Gute Besserung!
sich erholen|восстанавливаться, отдыхать|Im Urlaub erhole ich mich.
die Erholung|отдых|Ich brauche dringend Erholung.
die Bewegung|движение|Bewegung ist gesund.
das Gewicht|вес|Ich möchte mein Gewicht halten.
zunehmen|набирать вес; увеличиваться|Ich habe zwei Kilo zugenommen.
die Diät|диета|Ich mache eine Diät.
die Sucht|зависимость|Rauchen ist eine Sucht.
die Droge|наркотик|Drogen sind gefährlich.
die Vorsorge|профилактика|Vorsorge ist besser als Behandlung.
der Facharzt|врач-специалист|Sie müssen zum Facharzt.
die Überweisung|направление; перевод|Ich brauche eine Überweisung zum Facharzt.
die Notaufnahme|приёмное отделение|Wir fuhren in die Notaufnahme.
die Pflege|уход|Die Pflege alter Menschen ist wichtig.
pflegen|ухаживать|Sie pflegt ihre kranke Mutter.
die Behinderung|инвалидность|Menschen mit Behinderung brauchen Unterstützung.
die Seele|душа|Musik ist gut für die Seele.
psychisch|психический|Stress kann psychisch krank machen.
körperlich|физический|Die Arbeit ist körperlich anstrengend.
erschöpft|изнурённый|Nach der Arbeit bin ich erschöpft.
anstrengend|утомительный|Der Tag war anstrengend.
ohnmächtig|без сознания|Sie wurde plötzlich ohnmächtig.
schwindelig|испытывающий головокружение|Mir ist schwindelig.
übel|тошно|Mir ist übel.

# Чувства и отношения
die Beziehung|отношения|Wir haben eine gute Beziehung.
die Freundschaft|дружба|Freundschaft ist mir wichtig.
die Ehe|брак|Ihre Ehe ist glücklich.
die Scheidung|развод|Nach der Scheidung zog er um.
sich trennen|расставаться|Sie haben sich getrennt.
sich verlieben|влюбляться|Er hat sich in sie verliebt.
die Hochzeit|свадьба|Die Hochzeit war wunderschön.
der Partner|партнёр|Mein Partner kocht gern.
der Bekannte|знакомый|Ein Bekannter hat mir geholfen.
der Verwandte|родственник|Meine Verwandten leben in Polen.
die Erziehung|воспитание|Erziehung ist nicht einfach.
erziehen|воспитывать|Sie erzieht ihre Kinder allein.
alleinerziehend|воспитывающий в одиночку|Sie ist alleinerziehend.
das Vertrauen|доверие|Vertrauen ist die Basis.
vertrauen|доверять|Ich vertraue dir.
das Verständnis|понимание|Danke für Ihr Verständnis.
der Respekt|уважение|Ich habe großen Respekt vor ihr.
die Rücksicht|внимание к другим|Bitte nehmen Sie Rücksicht.
die Geduld|терпение|Ich habe keine Geduld mehr.
geduldig|терпеливый|Die Lehrerin ist sehr geduldig.
die Enttäuschung|разочарование|Das war eine große Enttäuschung.
enttäuscht|разочарованный|Ich bin von dir enttäuscht.
die Eifersucht|ревность|Eifersucht zerstört Beziehungen.
eifersüchtig|ревнивый|Er ist eifersüchtig auf ihren Kollegen.
der Neid|зависть|Neid ist ein schlechtes Gefühl.
die Wut|ярость|Er war voller Wut.
wütend|разъярённый|Sie ist wütend auf mich.
die Sorge|забота, беспокойство|Mach dir keine Sorgen!
sich sorgen|беспокоиться|Ich sorge mich um meine Mutter.
die Trauer|скорбь|Die Trauer war groß.
die Sehnsucht|тоска|Ich habe Sehnsucht nach dem Meer.
das Mitleid|сочувствие|Ich habe Mitleid mit ihm.
die Hoffnung|надежда|Es gibt noch Hoffnung.
die Überraschung|сюрприз|Das ist ja eine Überraschung!
die Stimmung|настроение, атмосфера|Die Stimmung war super.
verzweifelt|отчаявшийся|Sie ist völlig verzweifelt.
erleichtert|испытывающий облегчение|Ich bin erleichtert.
dankbar|благодарный|Ich bin dir sehr dankbar.
peinlich|неловкий|Das ist mir peinlich.
sich schämen|стыдиться|Ich schäme mich dafür.
sich wundern|удивляться|Ich wundere mich über seine Antwort.
sich gewöhnen|привыкать|Ich habe mich an das Wetter gewöhnt.
sich verlassen|полагаться|Auf ihn kann man sich verlassen.
beleidigen|оскорблять|Ich wollte dich nicht beleidigen.
verzeihen|прощать|Kannst du mir verzeihen?
sich versöhnen|мириться|Sie haben sich wieder versöhnt.
unterstützen|поддерживать|Meine Familie unterstützt mich.
die Unterstützung|поддержка|Danke für deine Unterstützung.
zuverlässig|надёжный|Er ist ein zuverlässiger Kollege.
großzügig|щедрый|Meine Tante ist sehr großzügig.
geizig|скупой|Er ist ziemlich geizig.
bescheiden|скромный|Sie ist klug und bescheiden.
selbstbewusst|уверенный в себе|Sie wirkt sehr selbstbewusst.
ehrgeizig|честолюбивый|Er ist sehr ehrgeizig.
tolerant|терпимый|Wir sollten tolerant sein.
egoistisch|эгоистичный|Das war egoistisch von dir.

# Экономика и финансы
die Wirtschaft|экономика|Die Wirtschaft wächst langsam.
der Handel|торговля|Der Handel mit China nimmt zu.
die Ware|товар|Die Ware wird morgen geliefert.
das Produkt|продукт, изделие|Das Produkt ist sehr beliebt.
herstellen|производить|Die Firma stellt Möbel her.
die Herstellung|производство|Die Herstellung ist teuer.
der Verbraucher|потребитель|Die Verbraucher achten auf den Preis.
die Nachfrage|спрос|Die Nachfrage ist gestiegen.
der Umsatz|оборот|Der Umsatz ist um zehn Prozent gewachsen.
der Gewinn|прибыль; выигрыш|Die Firma macht Gewinn.
der Verlust|убыток, потеря|Das Unternehmen macht Verluste.
die Kosten|расходы, издержки|Die Kosten sind zu hoch.
die Ausgabe|расход; выпуск|Unsere Ausgaben steigen.
die Einnahme|доход, выручка|Die Einnahmen sind gesunken.
die Schulden|долги|Er hat hohe Schulden.
der Kredit|кредит|Wir nehmen einen Kredit auf.
die Zinsen|проценты|Die Zinsen sind niedrig.
die Gebühr|сбор, плата|Die Gebühr beträgt zehn Euro.
der Betrag|сумма|Bitte überweisen Sie den Betrag.
betragen|составлять|Die Miete beträgt 800 Euro.
die Nebenkosten|коммунальные платежи|Die Nebenkosten sind inklusive.
die Kaution|залог|Die Kaution beträgt drei Monatsmieten.
die Währung|валюта|Der Euro ist eine stabile Währung.
die Inflation|инфляция|Die Inflation steigt.
die Krise|кризис|Die Krise trifft viele Firmen.
das Wachstum|рост|Das Wachstum ist schwach.
der Wohlstand|благосостояние|Der Wohlstand ist ungleich verteilt.
erhöhen|повышать|Die Firma erhöht die Preise.
senken|понижать|Der Staat senkt die Steuern.
sinken|снижаться|Die Preise sinken.
investieren|инвестировать|Wir investieren in neue Technik.
sich leisten|позволять себе|Das kann ich mir nicht leisten.
sich lohnen|окупаться, стоить того|Es lohnt sich zu warten.
die Mahnung|напоминание об оплате|Ich habe eine Mahnung bekommen.
die Garantie|гарантия|Das Gerät hat zwei Jahre Garantie.
die Reklamation|рекламация|Ich habe eine Reklamation.
sich beschweren|жаловаться|Ich möchte mich beschweren.
die Beschwerde|жалоба|Wir haben Ihre Beschwerde erhalten.
der Schaden|ущерб|Der Schaden ist groß.
ersetzen|заменять, возмещать|Die Versicherung ersetzt den Schaden.

# Культура и традиции
die Kultur|культура|Ich interessiere mich für Kultur.
die Kunst|искусство|Moderne Kunst gefällt mir.
der Künstler|художник, артист|Der Künstler stellt seine Bilder aus.
das Gemälde|картина (живопись)|Das Gemälde ist sehr wertvoll.
das Werk|произведение|Das ist sein bekanntestes Werk.
die Literatur|литература|Ich liebe deutsche Literatur.
der Schriftsteller|писатель|Der Schriftsteller liest aus seinem Roman.
das Gedicht|стихотворение|Sie schreibt Gedichte.
das Märchen|сказка|Oma erzählt ein Märchen.
die Geschichte|история; рассказ|Die Geschichte der Stadt ist interessant.
das Jahrhundert|век|Die Kirche ist aus dem 15. Jahrhundert.
das Mittelalter|Средневековье|Die Burg stammt aus dem Mittelalter.
das Denkmal|памятник|Das Denkmal steht im Zentrum.
die Tradition|традиция|Das ist eine alte Tradition.
der Brauch|обычай|Dieser Brauch ist sehr alt.
die Sitte|нравы, обычай|Andere Länder, andere Sitten.
die Religion|религия|Religion ist Privatsache.
der Glaube|вера|Der Glaube gibt ihr Kraft.
das Weihnachten|Рождество|Zu Weihnachten kommt die ganze Familie.
das Ostern|Пасха|Zu Ostern suchen die Kinder Eier.
die Bühne|сцена|Die Band steht auf der Bühne.
der Schauspieler|актёр|Der Schauspieler ist sehr bekannt.
die Rolle|роль|Sie spielt die Hauptrolle.
das Publikum|публика|Das Publikum war begeistert.
die Aufführung|постановка, представление|Die Aufführung dauert zwei Stunden.
der Regisseur|режиссёр|Der Regisseur hat einen Preis gewonnen.
die Handlung|сюжет, действие|Die Handlung spielt in Berlin.
das Vorurteil|предрассудок|Wir alle haben Vorurteile.
der Eindruck|впечатление|Ich habe einen guten Eindruck von ihm.
beeindruckend|впечатляющий|Die Aussicht ist beeindruckend.
begeistert|восторженный|Ich bin von dem Konzert begeistert.

# Абстрактные понятия
die Möglichkeit|возможность|Es gibt mehrere Möglichkeiten.
die Gelegenheit|удобный случай|Das ist eine gute Gelegenheit.
die Lösung|решение|Wir suchen eine Lösung.
die Entscheidung|решение (выбор)|Das war eine schwere Entscheidung.
der Grund|причина|Aus welchem Grund?
die Ursache|первопричина|Die Ursache ist unbekannt.
die Folge|следствие|Das hatte schlimme Folgen.
der Zweck|цель, назначение|Welchen Zweck hat das?
das Ziel|цель|Mein Ziel ist die B1-Prüfung.
der Vorteil|преимущество|Das hat viele Vorteile.
der Nachteil|недостаток|Ein Nachteil ist der hohe Preis.
der Unterschied|различие|Was ist der Unterschied?
der Vergleich|сравнение|Im Vergleich zu früher ist es besser.
der Zusammenhang|взаимосвязь|Ich sehe keinen Zusammenhang.
die Bedingung|условие|Unter einer Bedingung komme ich mit.
die Regel|правило|In der Regel stehe ich um sieben auf.
die Ausnahme|исключение|Das ist eine Ausnahme.
die Erlaubnis|разрешение|Hast du die Erlaubnis?
das Verbot|запрет|Hier gilt ein Rauchverbot.
die Gefahr|опасность|Es besteht keine Gefahr.
das Risiko|риск|Das Risiko ist zu hoch.
die Sicherheit|безопасность|Sicherheit geht vor.
die Wirkung|действие, эффект|Das Medikament zeigt Wirkung.
der Einfluss|влияние|Er hat großen Einfluss.
die Erwartung|ожидание|Das entspricht meinen Erwartungen.
die Absicht|намерение|Das war keine Absicht.
der Wunsch|желание|Ich habe einen Wunsch.
der Traum|мечта, сон|Mein Traum ist eine Weltreise.
die Wahrheit|правда|Sag mir die Wahrheit!
die Lüge|ложь|Das ist eine Lüge.
der Zweifel|сомнение|Daran habe ich keinen Zweifel.
das Missverständnis|недоразумение|Das war ein Missverständnis.
die Schwierigkeit|трудность|Ich habe Schwierigkeiten mit der Grammatik.
der Zustand|состояние|Das Haus ist in gutem Zustand.
die Lage|положение, ситуация|Die Lage ist ernst.
die Tat|поступок|Das war eine mutige Tat.
der Zufall|случайность|Das war reiner Zufall.
das Schicksal|судьба|Das Schicksal hat es so gewollt.
die Gewohnheit|привычка|Das ist eine schlechte Gewohnheit.
das Verhalten|поведение|Sein Verhalten ist merkwürdig.
die Eigenschaft|свойство, качество|Geduld ist eine gute Eigenschaft.
die Menge|количество; толпа|Eine große Menge Leute wartet.
die Anzahl|число, количество|Die Anzahl der Teilnehmer ist begrenzt.
der Teil|часть|Das ist nur ein Teil der Wahrheit.
die Hälfte|половина|Die Hälfte ist schon fertig.
der Durchschnitt|среднее значение|Im Durchschnitt arbeite ich 40 Stunden.
das Prozent|процент|Zehn Prozent der Schüler fehlen.

# Глаголы
annehmen|принимать; предполагать|Ich nehme an, dass er kommt.
anbieten|предлагать|Darf ich Ihnen einen Kaffee anbieten?
auffallen|бросаться в глаза|Mir ist nichts aufgefallen.
auffordern|призывать, требовать|Er forderte uns auf zu gehen.
aufgeben|сдаваться; бросать|Gib nicht auf!
ausdrücken|выражать|Ich kann das nicht ausdrücken.
ausreichen|быть достаточным|Das Geld reicht nicht aus.
beachten|соблюдать, учитывать|Bitte beachten Sie die Regeln.
beeinflussen|влиять|Das Wetter beeinflusst meine Laune.
befürchten|опасаться|Ich befürchte das Schlimmste.
begründen|обосновывать|Bitte begründen Sie Ihre Meinung.
behaupten|утверждать|Er behauptet, nichts zu wissen.
bemerken|замечать|Ich habe den Fehler nicht bemerkt.
sich bemühen|стараться|Ich bemühe mich, pünktlich zu sein.
beobachten|наблюдать|Die Polizei beobachtet das Haus.
beraten|консультировать|Ich lasse mich beraten.
berücksichtigen|принимать во внимание|Wir müssen das berücksichtigen.
beschließen|постановлять, решать|Wir haben beschlossen umzuziehen.
beschreiben|описывать|Können Sie den Mann beschreiben?
besitzen|владеть|Er besitzt zwei Häuser.
bestätigen|подтверждать|Bitte bestätigen Sie den Termin.
bestimmen|определять|Wer bestimmt das?
betreffen|касаться|Das betrifft uns alle.
betreuen|опекать, курировать|Sie betreut die neuen Mitarbeiter.
bevorzugen|предпочитать|Ich bevorzuge Tee.
bezweifeln|сомневаться|Das bezweifle ich.
darstellen|изображать, представлять|Die Grafik stellt die Entwicklung dar.
durchführen|проводить|Wir führen eine Umfrage durch.
sich eignen|подходить, годиться|Das Buch eignet sich für Anfänger.
sich einigen|договариваться|Wir haben uns geeinigt.
einschätzen|оценивать|Wie schätzen Sie die Lage ein?
empfinden|ощущать|Ich empfinde das als unfair.
entsprechen|соответствовать|Das entspricht nicht der Wahrheit.
entstehen|возникать|Dadurch entstehen hohe Kosten.
sich entwickeln|развиваться|Das Kind entwickelt sich gut.
erfahren|узнавать|Ich habe es gestern erfahren.
erfüllen|исполнять|Er erfüllt alle Voraussetzungen.
erhalten|получать|Sie erhalten bald eine Antwort.
erkennen|узнавать, распознавать|Ich habe dich nicht erkannt.
sich erkundigen|осведомляться|Ich erkundige mich nach dem Preis.
ermöglichen|делать возможным|Das Stipendium ermöglicht mir das Studium.
erwarten|ожидать|Ich erwarte einen Anruf.
erwähnen|упоминать|Das hat er nicht erwähnt.
feststellen|устанавливать, констатировать|Der Arzt stellte nichts fest.
fordern|требовать|Die Arbeiter fordern mehr Lohn.
fördern|содействовать, поощрять|Die Schule fördert begabte Kinder.
gelingen|удаваться|Es ist mir gelungen.
gelten|быть действительным|Das Ticket gilt einen Tag.
genießen|наслаждаться|Ich genieße die Ruhe.
geschehen|происходить|Was ist geschehen?
gründen|основывать|Er hat eine Firma gegründet.
handeln|действовать; торговать|Wir müssen jetzt handeln.
hindern|мешать|Niemand hindert dich daran.
hinweisen|указывать|Ich möchte darauf hinweisen.
klären|выяснять|Das müssen wir noch klären.
leiden|страдать|Er leidet an einer Allergie.
lösen|решать|Wir haben das Problem gelöst.
mitteilen|сообщать|Bitte teilen Sie uns Ihre Adresse mit.
nachdenken|размышлять|Ich muss darüber nachdenken.
planen|планировать|Wir planen eine Reise.
prüfen|проверять|Bitte prüfen Sie die Rechnung.
reagieren|реагировать|Wie hat er reagiert?
regeln|регулировать|Das ist gesetzlich geregelt.
scheitern|потерпеть неудачу|Das Projekt ist gescheitert.
schaffen|справляться; создавать|Das schaffst du!
schätzen|ценить; оценивать|Ich schätze deine Hilfe.
stattfinden|состояться|Das Konzert findet morgen statt.
stören|мешать|Störe ich?
teilen|делить|Wir teilen uns die Kosten.
überlegen|обдумывать|Ich überlege es mir noch.
überprüfen|перепроверять|Bitte überprüfen Sie Ihre Daten.
überraschen|удивлять|Das überrascht mich nicht.
überzeugen|убеждать|Du hast mich überzeugt.
unterscheiden|различать|Ich kann die Zwillinge nicht unterscheiden.
verändern|изменять|Das Internet hat die Welt verändert.
verbessern|улучшать|Ich möchte mein Deutsch verbessern.
verbinden|соединять|Können Sie mich mit Herrn Maier verbinden?
vergleichen|сравнивать|Vergleichen Sie die Preise.
verhindern|предотвращать|Wir konnten den Unfall verhindern.
verlangen|требовать|Was verlangen Sie dafür?
vermeiden|избегать|Ich vermeide Stress.
vermuten|предполагать|Ich vermute, er ist krank.
verschieben|переносить, откладывать|Können wir den Termin verschieben?
versichern|страховать; уверять|Das Auto ist gut versichert.
verursachen|вызывать, причинять|Der Sturm verursachte große Schäden.
verwenden|применять|Verwenden Sie bitte einen blauen Stift.
verzichten|отказываться|Ich verzichte auf Fleisch.
vorhaben|намереваться|Was hast du am Wochenende vor?
vorkommen|встречаться, случаться|Das kommt selten vor.
wahrnehmen|воспринимать|Ich nehme das anders wahr.
sich weigern|отказываться|Er weigert sich zu zahlen.
widersprechen|возражать|Da muss ich dir widersprechen.
wirken|действовать; казаться|Er wirkt müde.
zugeben|признавать|Ich gebe zu, dass ich mich geirrt habe.
zweifeln|сомневаться|Ich zweifle an seiner Geschichte.

# Прилагательные
abhängig|зависимый|Das ist vom Wetter abhängig.
unabhängig|независимый|Sie ist finanziell unabhängig.
angenehm|приятный|Das war ein angenehmer Abend.
unangenehm|неприятный|Das ist mir unangenehm.
aufmerksam|внимательный|Die Schüler hören aufmerksam zu.
ausführlich|подробный|Danke für die ausführliche Antwort.
ausreichend|достаточный|Das ist nicht ausreichend.
außergewöhnlich|необычайный|Das ist eine außergewöhnliche Leistung.
bedeutend|значительный|Er ist ein bedeutender Künstler.
dringend|срочный|Ich brauche dringend Hilfe.
eindeutig|однозначный|Die Antwort ist eindeutig.
empfindlich|чувствительный|Meine Haut ist empfindlich.
entscheidend|решающий|Das ist der entscheidende Punkt.
erforderlich|требуемый|Ein Visum ist erforderlich.
ewig|вечный|Das dauert ja ewig!
gerecht|справедливый|Das ist nicht gerecht.
gesetzlich|законный|Das ist gesetzlich verboten.
gewöhnlich|обычный|Gewöhnlich stehe ich früh auf.
gründlich|тщательный|Er arbeitet sehr gründlich.
gültig|действительный|Der Pass ist noch gültig.
häufig|частый|Das ist ein häufiger Fehler.
kompliziert|сложный|Die Situation ist kompliziert.
künstlich|искусственный|Die Blumen sind künstlich.
merkwürdig|странный|Das ist wirklich merkwürdig.
notwendig|необходимый|Das ist unbedingt notwendig.
nützlich|полезный|Das ist ein nützlicher Tipp.
offensichtlich|очевидный|Das ist offensichtlich ein Fehler.
persönlich|личный|Das ist meine persönliche Meinung.
selbstverständlich|само собой разумеющийся|Das ist doch selbstverständlich.
sinnvoll|разумный, осмысленный|Das ist eine sinnvolle Idee.
sorgfältig|тщательный, аккуратный|Bitte lesen Sie den Vertrag sorgfältig.
ständig|постоянный|Er kommt ständig zu spät.
üblich|общепринятый|Das ist hier so üblich.
unterschiedlich|различный|Die Meinungen sind unterschiedlich.
vernünftig|благоразумный|Sei doch vernünftig!
vorsichtig|осторожный|Sei vorsichtig!
wertvoll|ценный|Das ist ein wertvoller Ring.
wesentlich|существенный|Das ist ein wesentlicher Unterschied.
zahlreich|многочисленный|Es gab zahlreiche Probleme.
zusätzlich|дополнительный|Das kostet zusätzlich fünf Euro.

# Наречия и связки
obwohl|хотя|Obwohl es regnet, gehe ich spazieren.
damit|чтобы|Ich lerne viel, damit ich die Prüfung bestehe.
falls|в случае если|Falls du Zeit hast, ruf mich an.
sobald|как только|Sobald ich fertig bin, komme ich.
solange|пока|Solange es regnet, bleiben wir hier.
bevor|прежде чем|Bevor ich gehe, rufe ich dich an.
nachdem|после того как|Nachdem ich gegessen hatte, ging ich spazieren.
indem|тем что, путём|Man lernt, indem man übt.
dennoch|всё же|Es war teuer, dennoch habe ich es gekauft.
jedoch|однако|Er wollte kommen, jedoch war er krank.
allerdings|правда, однако|Das Hotel ist schön, allerdings teuer.
daher|поэтому|Ich war krank, daher konnte ich nicht kommen.
deswegen|из-за этого|Deswegen bin ich hier.
stattdessen|вместо этого|Ich trinke stattdessen Tee.
andererseits|с другой стороны|Andererseits ist es sehr teuer.
einerseits|с одной стороны|Einerseits möchte ich reisen.
inzwischen|тем временем|Inzwischen ist es dunkel geworden.
bisher|до сих пор|Bisher ist alles gut gegangen.
damals|тогда (в прошлом)|Damals gab es kein Internet.
neulich|недавно|Neulich habe ich ihn getroffen.
kürzlich|на днях|Ich bin kürzlich umgezogen.
künftig|впредь|Künftig komme ich früher.
gelegentlich|время от времени|Wir treffen uns gelegentlich.
regelmäßig|регулярно|Ich mache regelmäßig Sport.
gleichzeitig|одновременно|Ich kann nicht alles gleichzeitig machen.
tatsächlich|действительно|Er ist tatsächlich gekommen.
offenbar|по-видимому|Offenbar hat er es vergessen.
angeblich|якобы|Angeblich ist er krank.
eigentlich|собственно, вообще-то|Eigentlich wollte ich zu Hause bleiben.
unbedingt|обязательно|Das musst du unbedingt sehen!
keinesfalls|ни в коем случае|Das darfst du keinesfalls vergessen.
mindestens|как минимум|Das dauert mindestens eine Stunde.
höchstens|самое большее|Es kostet höchstens zehn Euro.
teilweise|частично|Das stimmt nur teilweise.
völlig|полностью|Das ist völlig richtig.
insgesamt|в целом|Insgesamt war es ein guter Tag.
vor allem|прежде всего|Vor allem brauche ich Ruhe.
zum Beispiel|например|Ich mag Obst, zum Beispiel Äpfel.
im Gegenteil|наоборот|Im Gegenteil, ich finde es gut.
auf jeden Fall|в любом случае|Ich komme auf jeden Fall.
auf keinen Fall|ни в коем случае|Das mache ich auf keinen Fall.
meiner Meinung nach|по моему мнению|Meiner Meinung nach ist das falsch.
wegen|из-за|Wegen des Regens bleiben wir zu Hause.
trotz|несмотря на|Trotz des Regens gehen wir spazieren.
statt|вместо|Statt Kaffee trinke ich Tee.
innerhalb|в пределах, в течение|Innerhalb einer Woche bekommen Sie Antwort.
außerhalb|за пределами|Wir wohnen außerhalb der Stadt.
aufgrund|на основании, вследствие|Aufgrund des Streiks fällt der Zug aus.

# Жильё и ремонт
die Einrichtung|обстановка, оборудование|Die Einrichtung ist modern.
einrichten|обставлять, устраивать|Wir richten die Wohnung neu ein.
das Eigentum|собственность|Das Haus ist unser Eigentum.
die Eigentumswohnung|квартира в собственности|Sie haben eine Eigentumswohnung gekauft.
der Mietvertrag|договор аренды|Ich habe den Mietvertrag unterschrieben.
die Wohngemeinschaft|совместная аренда квартиры|Ich wohne in einer Wohngemeinschaft.
der Mitbewohner|сосед по квартире|Mein Mitbewohner kocht gern.
die Hausordnung|правила дома|Laut Hausordnung ist ab 22 Uhr Ruhe.
der Hausmeister|завхоз, управляющий домом|Der Hausmeister repariert das Licht.
die Renovierung|ремонт|Die Renovierung dauert einen Monat.
renovieren|ремонтировать (помещение)|Wir renovieren das Bad.
die Reparatur|починка|Die Reparatur war teuer.
die Mülltonne|мусорный бак|Die Mülltonne steht im Hof.
der Hof|двор|Die Kinder spielen im Hof.
die Nachbarschaft|соседи, соседство|Die Nachbarschaft ist sehr nett.
der Wasserhahn|водопроводный кран|Der Wasserhahn tropft.
die Badewanne|ванна|Ich liege gern in der Badewanne.
das Waschbecken|раковина|Das Waschbecken ist verstopft.
die Klimaanlage|кондиционер|Die Klimaanlage ist zu kalt.
die Garage|гараж|Das Auto steht in der Garage.
der Zaun|забор|Der Zaun ist neu gestrichen.
die Terrasse|терраса|Wir frühstücken auf der Terrasse.
das Grundstück|земельный участок|Das Grundstück ist groß.
der Quadratmeter|квадратный метр|Die Wohnung hat achtzig Quadratmeter.
möbliert|меблированный|Das Zimmer ist möbliert.
der Umbau|перестройка|Der Umbau kostet viel Geld.
die Glühbirne|лампочка|Die Glühbirne ist kaputt.
der Lichtschalter|выключатель|Der Lichtschalter ist neben der Tür.
das Türschloss|дверной замок|Das Türschloss klemmt.
die Klingel|звонок|Die Klingel funktioniert nicht.
der Kamin|камин|Wir sitzen vor dem Kamin.
die Matratze|матрас|Die Matratze ist zu weich.
die Kommode|комод|Die Socken sind in der Kommode.
die Schublade|выдвижной ящик|Der Schlüssel liegt in der Schublade.
der Eimer|ведро|Der Eimer ist voll Wasser.
der Besen|метла|Der Besen steht in der Ecke.
der Lappen|тряпка|Ich wische den Tisch mit einem Lappen.
das Waschmittel|стиральный порошок|Wir brauchen Waschmittel.
der Haken|крючок|Die Jacke hängt am Haken.
der Nagel|гвоздь; ноготь|Ich schlage einen Nagel in die Wand.
der Hammer|молоток|Gib mir bitte den Hammer.
die Schraube|винт, шуруп|Eine Schraube fehlt.
bohren|сверлить|Der Nachbar bohrt schon wieder.
die Leiter|лестница (приставная)|Ich brauche eine Leiter.
tropfen|капать|Wasser tropft von der Decke.

# Поездки и дорога
das Reisebüro|турагентство|Wir buchen im Reisebüro.
die Pauschalreise|пакетный тур|Wir haben eine Pauschalreise gebucht.
der Aufenthalt|пребывание|Ich wünsche Ihnen einen schönen Aufenthalt.
die Rundreise|тур по стране|Wir machen eine Rundreise durch Italien.
die Kreuzfahrt|круиз|Meine Eltern machen eine Kreuzfahrt.
der Reiseführer|путеводитель; гид|Im Reiseführer steht viel über die Stadt.
das Reiseziel|место назначения|Unser Reiseziel ist Spanien.
die Buchung|бронирование|Die Buchung ist bestätigt.
stornieren|отменять (бронь)|Ich muss die Reise stornieren.
der Anschlussflug|стыковочный рейс|Wir haben den Anschlussflug verpasst.
die Zwischenlandung|промежуточная посадка|Der Flug hat eine Zwischenlandung.
das Handgepäck|ручная кладь|Nur ein Stück Handgepäck ist erlaubt.
die Sicherheitskontrolle|контроль безопасности|Die Sicherheitskontrolle dauert lange.
der Schaffner|проводник, кондуктор|Der Schaffner kontrolliert die Fahrkarten.
der Speisewagen|вагон-ресторан|Wir essen im Speisewagen.
die Ermäßigung|скидка, льгота|Studenten bekommen eine Ermäßigung.
der Zuschlag|доплата|Für den Schnellzug zahlt man einen Zuschlag.
die Vollpension|полный пансион|Wir haben Vollpension gebucht.
die Halbpension|полупансион|Das Hotel bietet Halbpension an.
die Jugendherberge|хостел|Wir schlafen in einer Jugendherberge.
der Campingplatz|кемпинг|Der Campingplatz liegt am See.
das Zelt|палатка|Wir schlafen im Zelt.
der Schlafsack|спальный мешок|Der Schlafsack ist warm.
die Wanderung|поход|Die Wanderung war anstrengend.
der Gipfel|вершина|Vom Gipfel sieht man das Meer.
die Aussicht|вид; перспектива|Die Aussicht ist fantastisch.
der Sonnenuntergang|закат|Wir sehen den Sonnenuntergang.
der Sonnenaufgang|восход|Der Sonnenaufgang war wunderschön.
das Erlebnis|впечатление, событие|Die Reise war ein tolles Erlebnis.
erleben|переживать, испытывать|Wir haben viel erlebt.
sich verirren|заблудиться|Wir haben uns im Wald verirrt.
die Panne|поломка (в дороге)|Wir hatten eine Panne auf der Autobahn.
der Reifen|шина|Der Reifen ist platt.
die Bremse|тормоз|Die Bremse funktioniert nicht.
bremsen|тормозить|Der Fahrer musste stark bremsen.
überholen|обгонять|Hier darf man nicht überholen.
die Geschwindigkeit|скорость|Die Geschwindigkeit ist begrenzt.
das Verkehrsmittel|вид транспорта|Welches Verkehrsmittel benutzt du?
der Radweg|велодорожка|Der Radweg führt am Fluss entlang.
die Umleitung|объезд|Wegen der Baustelle gibt es eine Umleitung.
die Baustelle|стройка|Vor dem Haus ist eine Baustelle.
das Verkehrsschild|дорожный знак|Beachte die Verkehrsschilder.
die Vorfahrt|преимущество в движении|Der Bus hat Vorfahrt.
der Strafzettel|штрафная квитанция|Ich habe einen Strafzettel bekommen.
die Kurve|поворот, кривая|Vorsicht, eine scharfe Kurve!
der Tunnel|туннель|Der Tunnel ist drei Kilometer lang.
der Hafen|порт|Das Schiff liegt im Hafen.
die Abreise|отъезд|Die Abreise ist am Sonntag.
die Anreise|приезд, дорога туда|Die Anreise dauert fünf Stunden.
das Visum|виза|Für die Reise brauche ich ein Visum.

# Продукты и кухня
die Zutat|ингредиент|Welche Zutaten brauchen wir?
die Zubereitung|приготовление|Die Zubereitung ist einfach.
zubereiten|готовить (блюдо)|Ich bereite das Abendessen zu.
würzen|приправлять|Würzen Sie die Suppe mit Salz.
das Gewürz|пряность|Welche Gewürze nimmst du?
die Soße|соус|Die Soße ist zu scharf.
die Beilage|гарнир|Als Beilage gibt es Reis.
der Geschmack|вкус|Der Geschmack ist ungewöhnlich.
bitter|горький|Der Kaffee ist bitter.
mild|мягкий (о вкусе, погоде)|Der Käse ist mild.
knusprig|хрустящий|Das Brot ist knusprig.
saftig|сочный|Der Apfel ist saftig.
gar|готовый (о еде)|Die Kartoffeln sind gar.
anbrennen|пригорать|Das Essen ist angebrannt.
rühren|размешивать, мешать (ложкой)|Rühren Sie die Soße gut.
schälen|чистить (от кожуры)|Ich schäle die Kartoffeln.
reiben|тереть|Reiben Sie den Käse.
einfrieren|замораживать|Ich friere das Brot ein.
auftauen|размораживать|Das Fleisch muss auftauen.
haltbar|годный, долго хранящийся|Die Milch ist lange haltbar.
das Verfallsdatum|срок годности|Das Verfallsdatum ist abgelaufen.
das Lebensmittel|продукт питания|Lebensmittel werden teurer.
die Tiefkühlkost|замороженные продукты|Ich kaufe selten Tiefkühlkost.
der Vorrat|запас|Wir haben genug Vorräte.
die Portion|порция|Die Portion ist zu groß.
die Kalorie|калория|Das Gericht hat viele Kalorien.
das Vitamin|витамин|Obst enthält viele Vitamine.
das Eiweiß|белок|Eier enthalten viel Eiweiß.
das Fett|жир|Zu viel Fett ist ungesund.
die Kohlenhydrate|углеводы|Nudeln enthalten viele Kohlenhydrate.
die Nuss|орех|Ich bin gegen Nüsse allergisch.
die Mandel|миндаль|Der Kuchen ist mit Mandeln.
die Bohne|фасоль, боб|Ich koche eine Suppe mit Bohnen.
die Erbse|горох|Erbsen und Karotten, bitte.
der Kohl|капуста|Kohl ist gesund.
der Spinat|шпинат|Kinder mögen selten Spinat.
der Kürbis|тыква|Im Herbst gibt es Kürbissuppe.
die Himbeere|малина|Himbeeren sind süß.
die Pflaume|слива|Der Kuchen ist mit Pflaumen.
der Pfirsich|персик|Der Pfirsich ist reif.
die Ananas|ананас|Pizza mit Ananas mag ich nicht.
der Lachs|лосось|Ich nehme den Lachs.
der Thunfisch|тунец|Ein Salat mit Thunfisch, bitte.
das Lamm|ягнёнок, баранина|Zu Ostern essen wir Lamm.
die Gans|гусь|Zu Weihnachten gibt es Gans.
der Braten|жаркое|Der Braten ist im Ofen.
das Schnitzel|шницель|Ein Schnitzel mit Pommes, bitte.
die Bratwurst|жареная колбаска|Auf dem Markt gibt es Bratwurst.
der Eintopf|густой суп|Im Winter koche ich oft Eintopf.
der Auflauf|запеканка|Der Auflauf ist noch heiß.
der Knödel|кнедлик|Zum Braten gibt es Knödel.
das Müsli|мюсли|Zum Frühstück esse ich Müsli.
der Quark|творог|Quark mit Früchten schmeckt gut.
der Sekt|игристое вино|Wir trinken ein Glas Sekt.
alkoholfrei|безалкогольный|Ein alkoholfreies Bier, bitte.
das Leitungswasser|вода из-под крана|Kann man das Leitungswasser trinken?
die Kantine|столовая (на работе)|Ich esse in der Kantine.
die Mensa|студенческая столовая|In der Mensa ist das Essen günstig.
der Imbiss|закусочная|Wir essen etwas am Imbiss.
die Speise|блюдо, кушанье|Speisen und Getränke sind inklusive.

# Спорт и увлечения
der Wettkampf|соревнование|Der Wettkampf findet am Samstag statt.
das Turnier|турнир|Wir haben das Turnier gewonnen.
die Meisterschaft|чемпионат|Die Meisterschaft beginnt im Mai.
der Sieg|победа|Der Sieg war verdient.
die Niederlage|поражение|Die Niederlage war bitter.
der Schiedsrichter|судья (спорт.)|Der Schiedsrichter pfeift.
das Tor|ворота; гол|Er hat zwei Tore geschossen.
der Trainer|тренер|Der Trainer ist zufrieden.
das Training|тренировка|Das Training ist dreimal pro Woche.
die Ausrüstung|снаряжение|Die Ausrüstung ist teuer.
der Schläger|ракетка, клюшка|Ich brauche einen neuen Schläger.
klettern|лазать|Wir klettern am Wochenende.
tauchen|нырять|Im Urlaub tauche ich gern.
segeln|ходить под парусом|Wir segeln auf dem See.
rudern|грести|Er rudert im Verein.
reiten|ездить верхом|Meine Tochter reitet gern.
turnen|заниматься гимнастикой|Die Kinder turnen in der Halle.
die Gymnastik|гимнастика|Ich mache jeden Morgen Gymnastik.
dehnen|растягивать|Dehnen Sie die Muskeln vor dem Sport.
der Muskel|мышца|Die Muskeln tun weh.
der Rekord|рекорд|Das ist ein neuer Rekord.
die Medaille|медаль|Sie hat eine Medaille gewonnen.
der Pokal|кубок|Die Mannschaft holt den Pokal.
das Brettspiel|настольная игра|Wir spielen ein Brettspiel.
das Kartenspiel|карточная игра|Kennst du dieses Kartenspiel?
der Würfel|игральный кубик; куб|Wo ist der Würfel?
würfeln|бросать кубик|Du bist dran, würfle!
das Rätsel|загадка|Ich löse gern Rätsel.
raten|угадывать; советовать|Rate mal, wer kommt!
stricken|вязать|Meine Oma strickt Socken.
der Chor|хор|Ich singe im Chor.
das Orchester|оркестр|Das Orchester spielt Mozart.
die Probe|репетиция; проба|Die Probe beginnt um sieben.
das Kunstwerk|произведение искусства|Das Kunstwerk ist berühmt.
die Galerie|галерея|Die Galerie zeigt moderne Kunst.
der Pinsel|кисть|Ich brauche einen feinen Pinsel.
die Zeichnung|рисунок|Die Zeichnung ist schön.
die Sammlung|коллекция|Er hat eine große Sammlung.
der Flohmarkt|блошиный рынок|Am Sonntag ist Flohmarkt.
die Halle|зал|Das Konzert ist in der Halle.
schießen|стрелять; бить по мячу|Er schießt den Ball ins Tor.
pfeifen|свистеть|Er pfeift ein Lied.
der Fan|болельщик, фанат|Die Fans feiern den Sieg.
die Freizeitaktivität|занятие в свободное время|Welche Freizeitaktivitäten gibt es hier?
der Ausgleich|баланс, компенсация|Sport ist ein guter Ausgleich zur Arbeit.

# Тело и самочувствие
die Lunge|лёгкое|Rauchen schadet der Lunge.
die Leber|печень|Alkohol schadet der Leber.
die Niere|почка|Der Mensch hat zwei Nieren.
der Knochen|кость|Der Knochen ist gebrochen.
das Gelenk|сустав|Die Gelenke tun weh.
die Rippe|ребро|Er hat sich eine Rippe gebrochen.
die Wirbelsäule|позвоночник|Die Wirbelsäule tut mir weh.
der Nerv|нерв|Das geht mir auf die Nerven.
das Gehirn|мозг|Das Gehirn braucht Sauerstoff.
die Stirn|лоб|Seine Stirn ist heiß.
die Wange|щека|Sie küsst ihn auf die Wange.
das Kinn|подбородок|Er hat einen Bart am Kinn.
die Lippe|губа|Meine Lippen sind trocken.
die Zunge|язык (орган)|Zeigen Sie bitte die Zunge.
die Augenbraue|бровь|Sie hat dunkle Augenbrauen.
der Ellbogen|локоть|Ich habe mir den Ellbogen gestoßen.
das Handgelenk|запястье|Die Uhr ist am Handgelenk.
der Daumen|большой палец|Ich drücke dir die Daumen.
die Hüfte|бедро (сустав)|Meine Oma hat eine neue Hüfte.
der Knöchel|лодыжка|Ich habe mir den Knöchel verletzt.
die Zehe|палец ноги|Mir tut eine Zehe weh.
der Schweiß|пот|Der Schweiß läuft mir über die Stirn.
schwitzen|потеть|Beim Sport schwitze ich stark.
zittern|дрожать|Sie zittert vor Kälte.
niesen|чихать|Ich muss ständig niesen.
gähnen|зевать|Er gähnt, weil er müde ist.
atmen|дышать|Atmen Sie tief ein.
der Atem|дыхание|Halten Sie den Atem an.
bluten|кровоточить|Die Wunde blutet.
schlucken|глотать|Das Schlucken tut weh.
der Verband|повязка|Die Schwester legt einen Verband an.
das Pflaster|пластырь|Hast du ein Pflaster?
der Gips|гипс|Er hat das Bein in Gips.
der Rollstuhl|инвалидная коляска|Sie sitzt im Rollstuhl.
das Thermometer|градусник|Das Thermometer zeigt 38 Grad.
der Sonnenbrand|солнечный ожог|Ich habe einen Sonnenbrand.
der Stich|укус (насекомого); укол|Der Stich juckt.
jucken|чесаться|Mein Arm juckt.
der Ausschlag|сыпь|Das Kind hat einen Ausschlag.
der Durchfall|диарея|Er hat Durchfall.
sich übergeben|рвать (тошнить)|Sie musste sich übergeben.
geschwollen|опухший|Der Fuß ist geschwollen.
verstauchen|растянуть (связки)|Ich habe mir den Fuß verstaucht.
die Narbe|шрам|Er hat eine Narbe am Kinn.
bewusstlos|без сознания|Der Mann war bewusstlos.
der Sauerstoff|кислород|Pflanzen produzieren Sauerstoff.
das Schmerzmittel|обезболивающее|Ich nehme ein Schmerzmittel.
die Sprechstundenhilfe|помощник врача|Die Sprechstundenhilfe gibt mir einen Termin.
die Vorsorgeuntersuchung|профилактический осмотр|Ich gehe regelmäßig zur Vorsorgeuntersuchung.

# Общение и договорённости
die Mitteilung|сообщение, уведомление|Ich habe eine Mitteilung vom Vermieter bekommen.
die Durchsage|объявление (по громкой связи)|Hast du die Durchsage gehört?
der Hinweis|указание, подсказка|Danke für den Hinweis.
die Warnung|предупреждение|Das war eine letzte Warnung.
warnen|предупреждать|Ich habe dich gewarnt.
die Bitte|просьба|Ich habe eine Bitte an dich.
der Witz|шутка, анекдот|Er erzählt gern Witze.
das Gerücht|слух|Das ist nur ein Gerücht.
der Streit|ссора|Der Streit war schnell vorbei.
die Diskussion|дискуссия|Die Diskussion war interessant.
die Verabredung|договорённость о встрече|Ich habe heute eine Verabredung.
sich verabreden|договариваться о встрече|Wir haben uns für Freitag verabredet.
absagen|отменять, отказываться|Ich muss den Termin absagen.
zusagen|соглашаться, обещать прийти|Sie hat schon zugesagt.
die Ausrede|отговорка|Das ist nur eine Ausrede.
das Kompliment|комплимент|Danke für das Kompliment.
loben|хвалить|Der Chef lobt die Mitarbeiter.
das Lob|похвала|Lob motiviert.
der Vorwurf|упрёк|Das soll kein Vorwurf sein.
die Beleidigung|оскорбление|Das war eine Beleidigung.
drohen|угрожать|Er droht mit der Polizei.
überreden|уговаривать|Sie hat mich überredet.
flüstern|шептать|Die Kinder flüstern.
schreien|кричать|Das Baby schreit.
schweigen|молчать|Er schweigt lieber.
plaudern|болтать|Wir plaudern über das Wetter.
sich melden|давать о себе знать|Melde dich, wenn du Zeit hast.
zurückrufen|перезванивать|Ich rufe Sie gleich zurück.
auflegen|класть трубку|Er hat einfach aufgelegt.
die Vorwahl|телефонный код|Wie ist die Vorwahl von Berlin?
die Ansage|объявление, автоответ|Die Ansage ist auf Deutsch.
erwidern|возражать, отвечать|Darauf erwiderte er nichts.
nachfragen|переспрашивать, уточнять|Darf ich kurz nachfragen?
vereinbaren|договариваться|Wir vereinbaren einen Termin.
die Vereinbarung|договорённость|Wir haben eine Vereinbarung getroffen.
die Rückmeldung|обратная связь|Danke für die schnelle Rückmeldung.
die Anrede|обращение|Welche Anrede ist richtig: du oder Sie?
duzen|обращаться на «ты»|Wir können uns duzen.
siezen|обращаться на «вы»|In der Firma siezen wir uns.

# Глаголы: действия
abbiegen|сворачивать|An der Ampel biegen Sie rechts ab.
ablaufen|истекать (о сроке)|Mein Pass läuft bald ab.
abschalten|отключать|Bitte schalten Sie das Handy ab.
abwarten|выжидать|Wir müssen abwarten.
anfassen|трогать|Bitte nichts anfassen!
angeben|указывать; хвастаться|Bitte geben Sie Ihre Adresse an.
anhalten|останавливать(ся)|Der Bus hält hier nicht an.
ankündigen|объявлять заранее|Die Firma kündigt Änderungen an.
anschauen|смотреть|Wir schauen uns einen Film an.
anzünden|зажигать|Ich zünde eine Kerze an.
aufbauen|строить, собирать|Wir bauen das Zelt auf.
aufbewahren|хранить|Bewahren Sie die Quittung auf.
aufheben|поднимать; сохранять|Heb bitte das Papier auf.
aufnehmen|принимать; записывать|Wir nehmen das Gespräch auf.
sich aufregen|волноваться, возмущаться|Reg dich nicht auf!
auftreten|выступать|Die Band tritt heute auf.
aushalten|выдерживать|Ich halte den Lärm nicht aus.
auskommen|ладить; обходиться|Ich komme gut mit ihm aus.
ausleihen|брать или давать на время|Ich leihe mir ein Buch aus.
auspacken|распаковывать|Ich packe den Koffer aus.
ausprobieren|пробовать, испытывать|Ich probiere das neue Rezept aus.
ausrichten|передавать (сообщение)|Kann ich etwas ausrichten?
ausschlafen|высыпаться|Am Sonntag schlafe ich aus.
aussprechen|произносить|Wie spricht man das Wort aus?
austauschen|обменивать(ся)|Wir tauschen Erfahrungen aus.
auswählen|выбирать|Wählen Sie eine Farbe aus.
beenden|заканчивать|Ich beende die Arbeit um fünf.
begegnen|встречать (случайно)|Ich bin ihm gestern begegnet.
begleiten|сопровождать|Ich begleite dich zum Bahnhof.
behalten|оставлять себе|Du kannst das Buch behalten.
beißen|кусать|Der Hund beißt nicht.
beneiden|завидовать|Ich beneide dich um deinen Job.
benötigen|нуждаться|Wir benötigen mehr Zeit.
bereuen|сожалеть, раскаиваться|Ich bereue nichts.
berühren|касаться|Bitte nicht berühren!
beschädigen|повреждать|Das Paket wurde beschädigt.
beschützen|защищать, оберегать|Eltern beschützen ihre Kinder.
bestrafen|наказывать|Der Täter wurde bestraft.
betrachten|рассматривать|Sie betrachtet das Bild.
beurteilen|судить, оценивать|Das kann ich nicht beurteilen.
bewundern|восхищаться|Ich bewundere ihren Mut.
biegen|гнуть|Der Ast biegt sich im Wind.
blasen|дуть|Der Wind bläst stark.
dienen|служить|Das dient der Sicherheit.
drehen|вращать, поворачивать|Dreh den Schlüssel nach links.
einfallen|приходить в голову|Mir fällt nichts ein.
eingießen|наливать|Darf ich Ihnen Wein eingießen?
einsammeln|собирать|Der Lehrer sammelt die Hefte ein.
einzahlen|вносить (деньги)|Ich zahle Geld auf mein Konto ein.
empfangen|принимать, встречать|Wir empfangen die Gäste.
entfernen|удалять, убирать|Der Fleck lässt sich nicht entfernen.
enthalten|содержать|Das Getränk enthält viel Zucker.
sich entschließen|решаться|Ich habe mich entschlossen zu bleiben.
sich entspannen|расслабляться|Im Urlaub entspanne ich mich.
sich ernähren|питаться|Sie ernährt sich gesund.
erschrecken|пугать(ся)|Du hast mich erschreckt.
fangen|ловить|Die Katze fängt eine Maus.
fassen|хватать, схватывать|Die Polizei hat den Dieb gefasst.
fliehen|бежать, спасаться|Die Menschen fliehen vor dem Krieg.
fließen|течь|Der Fluss fließt ins Meer.
folgen|следовать|Folgen Sie mir bitte.
frieren|мёрзнуть|Ich friere, mach das Fenster zu.
führen|вести|Der Weg führt zum See.
gehorchen|слушаться|Der Hund gehorcht nicht.
graben|копать|Er gräbt ein Loch im Garten.
greifen|хватать, брать|Sie greift nach dem Glas.
grüßen|приветствовать, передавать привет|Grüß deine Eltern von mir.
heizen|отапливать|Wir heizen mit Gas.
hinzufügen|добавлять|Fügen Sie etwas Salz hinzu.
hupen|сигналить|Der Fahrer hupt.
jagen|охотиться, гнать|Die Katze jagt Vögel.
kämpfen|бороться|Sie kämpft für ihre Rechte.
kleben|клеить|Ich klebe das Foto ins Album.
kratzen|царапать, чесать|Die Katze kratzt.
kriechen|ползти|Das Baby kriecht über den Boden.
landen|приземляться|Das Flugzeug landet pünktlich.
leeren|опорожнять|Ich leere den Briefkasten.
lehren|преподавать, учить|Sie lehrt an der Universität.
leuchten|светить(ся)|Die Sterne leuchten.
messen|измерять|Ich messe die Temperatur.
nicken|кивать|Er nickt zustimmend.
pflanzen|сажать|Wir pflanzen einen Baum.
pflücken|рвать, собирать (плоды)|Die Kinder pflücken Äpfel.
rasen|мчаться|Das Auto rast durch die Stadt.
reichen|хватать; подавать|Das Geld reicht nicht.
reißen|рвать(ся)|Das Papier reißt leicht.
retten|спасать|Die Feuerwehr rettet die Katze.
rutschen|скользить|Vorsicht, man rutscht hier leicht.
schaden|вредить|Rauchen schadet der Gesundheit.
schauen|смотреть|Schau mal aus dem Fenster!
schlagen|бить|Das Herz schlägt schnell.
schütten|сыпать, лить|Ich schütte das Wasser weg.
senden|посылать, передавать|Der Sender sendet Nachrichten.
siegen|побеждать|Unsere Mannschaft hat gesiegt.
spüren|ощущать|Ich spüre den Wind.
starten|стартовать, запускать|Das Flugzeug startet gleich.
stolpern|спотыкаться|Ich bin über einen Stein gestolpert.
stoßen|толкать, ударять|Ich habe mir den Kopf gestoßen.
streicheln|гладить (ласкать)|Das Kind streichelt den Hund.
stürzen|падать, рушиться|Er ist mit dem Fahrrad gestürzt.
tippen|печатать, набирать|Sie tippt sehr schnell.
töten|убивать|Das Gift tötet Insekten.
treten|наступать; пинать|Er ist mir auf den Fuß getreten.
trösten|утешать|Die Mutter tröstet das Kind.
überfahren|переехать, сбить|Die Katze wurde überfahren.
übernehmen|брать на себя|Ich übernehme die Kosten.
umarmen|обнимать|Sie umarmt ihre Freundin.
umdrehen|переворачивать, оборачиваться|Dreh dich nicht um!
unterbrechen|прерывать|Darf ich kurz unterbrechen?
unternehmen|предпринимать|Was unternehmen wir heute?
verbrennen|сжигать, обжигать|Ich habe mir die Hand verbrannt.
verbringen|проводить (время)|Wir verbringen den Urlaub am Meer.
vergehen|проходить (о времени)|Die Zeit vergeht schnell.
vergrößern|увеличивать|Wir vergrößern das Foto.
verkleinern|уменьшать|Kannst du das Bild verkleinern?
verlängern|продлевать|Ich möchte mein Visum verlängern.
verletzen|ранить|Er hat sich am Bein verletzt.
verpacken|упаковывать|Die Ware ist gut verpackt.
verreisen|уезжать (в поездку)|Wir verreisen über Weihnachten.
verschwinden|исчезать|Mein Schlüssel ist verschwunden.
verteilen|распределять, раздавать|Der Lehrer verteilt die Tests.
vertragen|переносить, выносить|Ich vertrage keine Milch.
verwechseln|путать|Ich verwechsle die beiden immer.
verwöhnen|баловать|Die Oma verwöhnt die Enkel.
vorbeigehen|проходить мимо|Wir gehen am Rathaus vorbei.
vorlesen|читать вслух|Ich lese den Kindern vor.
wecken|будить|Weck mich bitte um sieben.
wehen|дуть (о ветре)|Der Wind weht stark.
weitermachen|продолжать|Mach weiter so!
wenden|поворачивать, обращаться|Wenden Sie sich an die Rezeption.
winken|махать|Das Kind winkt zum Abschied.
wischen|вытирать|Ich wische den Boden.
zerbrechen|разбивать(ся)|Die Vase ist zerbrochen.
zerreißen|разрывать|Er zerreißt den Brief.
zögern|медлить, колебаться|Zögern Sie nicht zu fragen.
zurückzahlen|возвращать (деньги)|Ich zahle dir das Geld morgen zurück.
zusammenarbeiten|сотрудничать|Wir arbeiten gut zusammen.
zuschauen|наблюдать|Die Kinder schauen beim Spiel zu.
zwingen|принуждать|Niemand zwingt dich.

# Прилагательные: описание
abwesend|отсутствующий|Der Chef ist heute abwesend.
anwesend|присутствующий|Alle Schüler sind anwesend.
altmodisch|старомодный|Das Kleid ist altmodisch.
ängstlich|боязливый|Das Kind ist ängstlich.
auffällig|бросающийся в глаза|Sein Verhalten ist auffällig.
begrenzt|ограниченный|Die Plätze sind begrenzt.
bereit|готовый|Bist du bereit?
berufstätig|работающий|Beide Eltern sind berufstätig.
blass|бледный|Du siehst blass aus.
blind|слепой|Der Mann ist blind.
taub|глухой|Mein Opa ist fast taub.
deutlich|ясный, отчётливый|Sprechen Sie bitte deutlich.
dicht|плотный, густой|Der Nebel ist dicht.
echt|настоящий|Ist das echtes Gold?
eckig|угловатый|Der Tisch ist eckig.
rund|круглый|Der Tisch ist rund.
ehemalig|бывший|Das ist mein ehemaliger Chef.
eilig|спешный|Ich habe es eilig.
einzeln|отдельный|Jedes Stück ist einzeln verpackt.
einzig|единственный|Das ist mein einziger Fehler.
endgültig|окончательный|Die Entscheidung ist endgültig.
erwachsen|взрослый|Meine Kinder sind erwachsen.
fein|тонкий, мелкий|Der Sand ist fein.
fest|твёрдый, прочный|Der Knoten ist fest.
feucht|влажный|Das Handtuch ist noch feucht.
flach|плоский|Das Land ist flach.
flüssig|жидкий; беглый|Sie spricht flüssig Deutsch.
fröhlich|весёлый|Die Kinder sind fröhlich.
furchtbar|ужасный|Das Wetter ist furchtbar.
gebraucht|подержанный|Ich kaufe ein gebrauchtes Auto.
gebildet|образованный|Sie ist sehr gebildet.
geheim|секретный|Das ist geheim.
gespannt|в ожидании, заинтригованный|Ich bin gespannt auf den Film.
giftig|ядовитый|Der Pilz ist giftig.
glatt|гладкий, скользкий|Die Straße ist glatt.
gleichgültig|равнодушный|Das ist mir gleichgültig.
grob|грубый|Das ist ein grober Fehler.
großartig|великолепный|Das Konzert war großartig.
heftig|сильный, бурный|Es regnet heftig.
heimlich|тайный|Sie treffen sich heimlich.
herrlich|великолепный|Das Wetter ist herrlich.
hilflos|беспомощный|Ich fühle mich hilflos.
jährlich|ежегодный|Das Fest findet jährlich statt.
klar|ясный|Das Wasser ist klar.
knapp|скудный; едва|Das Geld ist knapp.
komplett|полный, целиком|Die Wohnung ist komplett möbliert.
kräftig|сильный, крепкий|Er ist groß und kräftig.
kritisch|критический|Die Lage ist kritisch.
krumm|кривой|Der Nagel ist krumm.
kühl|прохладный|Abends wird es kühl.
lebendig|живой|Die Stadt ist sehr lebendig.
locker|неплотный, незатянутый; расслабленный|Die Schraube ist locker.
mager|тощий; нежирный|Ich esse nur mageres Fleisch.
menschlich|человеческий|Fehler sind menschlich.
minderjährig|несовершеннолетний|Sie ist noch minderjährig.
volljährig|совершеннолетний|Mit 18 ist man volljährig.
mündlich|устный|Die mündliche Prüfung ist morgen.
schriftlich|письменный|Bitte antworten Sie schriftlich.
mutig|смелый|Das war sehr mutig von dir.
feige|трусливый|Sei nicht so feige!
nackt|голый|Das Baby ist nackt.
nüchtern|трезвый|Der Fahrer muss nüchtern sein.
betrunken|пьяный|Er war völlig betrunken.
öffentlich|общественный|Das ist ein öffentlicher Park.
privat|частный|Das ist privat.
ordentlich|аккуратный|Ihr Zimmer ist immer ordentlich.
passend|подходящий|Ich suche ein passendes Geschenk.
positiv|положительный|Das Ergebnis ist positiv.
negativ|отрицательный|Der Test war negativ.
preiswert|недорогой|Das Restaurant ist preiswert.
rau|шершавый, суровый|Meine Hände sind rau.
rein|чистый|Das ist reine Baumwolle.
reif|спелый, зрелый|Die Bananen sind reif.
riesig|огромный|Das Haus ist riesig.
winzig|крошечный|Das Zimmer ist winzig.
sanft|нежный, мягкий|Sie hat eine sanfte Stimme.
scheußlich|отвратительный|Das Wetter ist scheußlich.
schief|кривой, косой|Das Bild hängt schief.
seltsam|странный|Das ist seltsam.
sichtbar|видимый|Der Fleck ist kaum sichtbar.
sparsam|экономный|Sie ist sehr sparsam.
spitz|острый (заострённый)|Der Bleistift ist spitz.
stumpf|тупой|Das Messer ist stumpf.
steil|крутой|Der Weg ist steil.
still|тихий, неподвижный|Sei bitte still!
streng|строгий|Der Lehrer ist streng.
süchtig|зависимый|Er ist süchtig nach Zucker.
tief|глубокий|Der See ist sehr tief.
tot|мёртвый|Die Pflanze ist tot.
treu|верный|Der Hund ist treu.
typisch|типичный|Das ist typisch für ihn.
überzeugt|убеждённый|Ich bin davon überzeugt.
ungewöhnlich|необычный|Das ist ungewöhnlich.
unglaublich|невероятный|Das ist unglaublich!
verboten|запрещённый|Parken ist hier verboten.
verrückt|сумасшедший|Das ist eine verrückte Idee.
verständlich|понятный|Die Erklärung ist verständlich.
verwandt|родственный|Wir sind verwandt.
vollständig|полный, целый|Die Liste ist vollständig.
vorhanden|имеющийся|Ein Parkplatz ist vorhanden.
wach|бодрствующий|Bist du schon wach?
wahr|истинный|Das ist eine wahre Geschichte.
weise|мудрый|Das war eine weise Entscheidung.
wild|дикий|Im Wald leben wilde Tiere.
zart|нежный|Das Fleisch ist zart.
zufällig|случайный|Wir haben uns zufällig getroffen.

# Понятия и формы
der Abschied|прощание|Der Abschied war schwer.
die Ahnung|представление, понятие|Ich habe keine Ahnung.
der Alltag|будни, повседневность|Der Alltag ist stressig.
der Anlass|повод|Aus welchem Anlass feiert ihr?
die Anleitung|инструкция|Lies bitte die Anleitung.
die Anzeige|объявление; заявление в полицию|Ich habe die Anzeige in der Zeitung gesehen.
die Aufmerksamkeit|внимание|Danke für Ihre Aufmerksamkeit.
der Augenblick|мгновение|Einen Augenblick, bitte.
die Begegnung|встреча|Das war eine interessante Begegnung.
die Beratung|консультация|Die Beratung ist kostenlos.
der Blick|взгляд; вид|Das Zimmer hat einen Blick aufs Meer.
die Dauer|продолжительность|Die Dauer des Kurses beträgt drei Monate.
der Druck|давление; печать|Ich stehe unter Druck.
die Entfernung|расстояние|Die Entfernung beträgt zehn Kilometer.
die Erinnerung|воспоминание|Ich habe schöne Erinnerungen an die Reise.
der Ersatz|замена|Wir brauchen Ersatz für ihn.
der Fall|случай|In diesem Fall hast du recht.
die Fantasie|фантазия|Kinder haben viel Fantasie.
die Gebrauchsanweisung|инструкция по применению|Lesen Sie die Gebrauchsanweisung.
das Gedächtnis|память|Ich habe ein schlechtes Gedächtnis.
das Gegenteil|противоположность|Das Gegenteil ist richtig.
der Gegenstand|предмет|Welche Gegenstände fehlen?
das Geheimnis|тайна|Das ist ein Geheimnis.
der Gedanke|мысль|Das ist ein guter Gedanke.
die Gemeinschaft|общность, сообщество|Die Gemeinschaft hilft sich gegenseitig.
das Geräusch|шум, звук|Was ist das für ein Geräusch?
der Geruch|запах|Der Geruch ist unangenehm.
der Haufen|куча|Auf dem Tisch liegt ein Haufen Papier.
die Höhe|высота|Die Höhe des Turms beträgt 100 Meter.
die Tiefe|глубина|Die Tiefe des Sees ist unbekannt.
die Breite|ширина|Die Breite des Tisches beträgt einen Meter.
die Länge|длина|Die Länge beträgt zwei Meter.
die Kraft|сила|Mir fehlt die Kraft.
der Kreis|круг|Die Kinder sitzen im Kreis.
das Dreieck|треугольник|Ein Dreieck hat drei Ecken.
das Viereck|четырёхугольник|Zeichne ein Viereck.
die Fläche|площадь, поверхность|Die Fläche beträgt 50 Quadratmeter.
die Kante|край, ребро|Die Kante ist scharf.
die Spitze|вершина, остриё|Sie steht an der Spitze der Firma.
der Rand|край|Das Glas steht am Rand des Tisches.
der Raum|помещение; пространство|Der Raum ist groß.
die Reihe|ряд; очередь|Wir sitzen in der ersten Reihe.
die Reihenfolge|порядок следования|Die Reihenfolge ist wichtig.
der Schatten|тень|Wir sitzen im Schatten.
der Schritt|шаг|Das ist der erste Schritt.
die Schuld|вина|Das ist nicht meine Schuld.
die Spur|след|Die Polizei findet keine Spur.
der Stil|стиль|Sie hat einen guten Stil.
die Stufe|ступень; уровень|Vorsicht, Stufe!
die Summe|сумма|Die Summe ist zu hoch.
das Symbol|символ|Die Taube ist ein Symbol für Frieden.
das System|система|Das System funktioniert gut.
das Tempo|темп|Das Tempo ist zu hoch.
der Typ|тип|Er ist nicht mein Typ.
der Umfang|объём, размах|Der Umfang der Arbeit ist groß.
der Umgang|обращение, общение|Der Umgang mit Kunden ist wichtig.
die Umgebung|окрестности, окружение|Die Umgebung ist sehr schön.
der Umstand|обстоятельство|Unter diesen Umständen bleibe ich zu Hause.
der Unsinn|чепуха|Das ist Unsinn!
das Verhältnis|отношение, соотношение|Wir haben ein gutes Verhältnis.
der Verstand|разум|Benutze deinen Verstand!
die Vorstellung|представление|Ich habe keine Vorstellung davon.
die Weise|способ|Auf diese Weise geht es schneller.
der Wert|ценность, значение|Das Bild hat einen hohen Wert.
die Wirklichkeit|действительность|In Wirklichkeit ist es anders.
das Wunder|чудо|Das ist ein Wunder.
das Zeichen|знак|Das ist ein gutes Zeichen.
`;
