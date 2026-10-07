// Словарь B2.
// Каждая строка: немецкое слово | перевод | пример.
// Строка, которая начинается с #, — название темы.
const WORDS_B2 = `
# Государство и право
das Parlament|парламент|Das Parlament stimmt morgen ab.
der Bundestag|бундестаг|Der Bundestag hat das Gesetz beschlossen.
der Abgeordnete|депутат|Die Abgeordneten debattieren seit Stunden.
die Verfassung|конституция|Die Verfassung garantiert die Grundrechte.
das Grundgesetz|Основной закон (ФРГ)|Das Grundgesetz gilt seit 1949.
die Opposition|оппозиция|Die Opposition kritisiert den Entwurf.
die Koalition|коалиция|Die Koalition hat sich geeinigt.
der Wahlkampf|предвыборная кампания|Im Wahlkampf wird viel versprochen.
die Abstimmung|голосование|Die Abstimmung findet morgen statt.
abstimmen|голосовать|Das Parlament stimmt über den Antrag ab.
der Gesetzentwurf|законопроект|Der Gesetzentwurf wird überarbeitet.
verabschieden|принимать (закон)|Das Gesetz wurde gestern verabschiedet.
in Kraft treten|вступать в силу|Die Regelung tritt im Januar in Kraft.
die Maßnahme|мера|Die Regierung plant neue Maßnahmen.
die Reform|реформа|Die Reform ist umstritten.
die Verwaltung|администрация, управление|Die Verwaltung arbeitet langsam.
die Bürokratie|бюрократия|Die Bürokratie soll abgebaut werden.
die Vorschrift|предписание|Bitte halten Sie sich an die Vorschriften.
die Verordnung|постановление|Die Verordnung gilt ab sofort.
die Bestimmung|положение, предписание|Die gesetzlichen Bestimmungen sind streng.
der Verstoß|нарушение|Das ist ein Verstoß gegen die Regeln.
verstoßen|нарушать|Er hat gegen das Gesetz verstoßen.
die Klage|иск, жалоба|Sie hat Klage eingereicht.
klagen|подавать иск; жаловаться|Der Mieter klagt gegen den Vermieter.
der Kläger|истец|Der Kläger fordert Schadenersatz.
der Angeklagte|подсудимый|Der Angeklagte schweigt.
das Urteil|приговор, решение суда|Das Urteil fällt nächste Woche.
verurteilen|осуждать, приговаривать|Er wurde zu zwei Jahren Haft verurteilt.
der Richter|судья|Der Richter verkündet das Urteil.
der Staatsanwalt|прокурор|Der Staatsanwalt fordert fünf Jahre.
die Aussage|показания; высказывание|Der Zeuge machte eine Aussage.
aussagen|давать показания|Sie muss vor Gericht aussagen.
der Verdacht|подозрение|Er steht unter Verdacht.
verdächtigen|подозревать|Man verdächtigt ihn des Diebstahls.
der Täter|преступник, виновник|Der Täter ist noch auf der Flucht.
das Opfer|жертва|Das Opfer wurde ins Krankenhaus gebracht.
der Betrug|мошенничество|Er wurde wegen Betrugs angezeigt.
betrügen|обманывать|Er hat seine Kunden betrogen.
die Haft|заключение под стражу|Er sitzt seit Mai in Haft.
freisprechen|оправдывать|Der Angeklagte wurde freigesprochen.
die Berufung|апелляция; призвание|Der Anwalt legt Berufung ein.
das Bußgeld|денежный штраф|Bei Verstößen droht ein Bußgeld.
haften|нести ответственность|Eltern haften für ihre Kinder.
die Haftung|ответственность (юр.)|Die Firma übernimmt keine Haftung.
die Vollmacht|доверенность|Ich brauche eine schriftliche Vollmacht.
der Anspruch|право, притязание|Sie haben Anspruch auf Urlaub.
die Menschenrechte|права человека|Die Menschenrechte gelten für alle.
die Diskriminierung|дискриминация|Diskriminierung ist verboten.
die Zensur|цензура|In dem Land herrscht Zensur.
die Korruption|коррупция|Die Korruption muss bekämpft werden.
der Skandal|скандал|Der Skandal erschütterte die Partei.
der Rücktritt|отставка|Die Opposition fordert seinen Rücktritt.
zurücktreten|уходить в отставку|Der Minister ist zurückgetreten.
die Außenpolitik|внешняя политика|Die Außenpolitik steht im Mittelpunkt.
das Abkommen|соглашение|Die Staaten unterzeichneten ein Abkommen.
das Bündnis|союз, альянс|Die Parteien bilden ein Bündnis.
die Sanktion|санкция|Die Sanktionen wurden verschärft.
der Konflikt|конфликт|Der Konflikt eskaliert.
die Bedrohung|угроза|Das ist eine ernste Bedrohung.
der Anschlag|покушение, теракт|Der Anschlag wurde verhindert.

# Экономика и бизнес
die Konjunktur|экономическая конъюнктура|Die Konjunktur schwächt sich ab.
der Aufschwung|подъём|Die Wirtschaft erlebt einen Aufschwung.
die Rezession|рецессия|Das Land steckt in einer Rezession.
die Börse|биржа|An der Börse fallen die Kurse.
die Aktie|акция|Die Aktie ist stark gestiegen.
der Aktionär|акционер|Die Aktionäre sind unzufrieden.
der Anleger|инвестор|Private Anleger sind vorsichtig.
die Investition|инвестиция|Die Investition hat sich gelohnt.
die Rendite|доходность|Die Rendite liegt bei vier Prozent.
das Vermögen|состояние, имущество|Er hat ein großes Vermögen geerbt.
das Kapital|капитал|Dem Start-up fehlt das Kapital.
die Insolvenz|банкротство|Die Firma hat Insolvenz angemeldet.
pleite|обанкротившийся|Das Unternehmen ist pleite.
die Fusion|слияние|Die Fusion wurde genehmigt.
die Übernahme|поглощение; принятие|Die Übernahme kostet Milliarden.
der Konzern|концерн|Der Konzern baut Stellen ab.
die Filiale|филиал|Die Bank schließt mehrere Filialen.
die Niederlassung|представительство|Die Firma hat eine Niederlassung in Wien.
der Vorstand|правление|Der Vorstand tagt heute.
der Geschäftsführer|управляющий директор|Der Geschäftsführer stellt die Zahlen vor.
die Geschäftsführung|руководство компании|Die Geschäftsführung plant Änderungen.
der Aufsichtsrat|наблюдательный совет|Der Aufsichtsrat hat zugestimmt.
der Lieferant|поставщик|Wir haben den Lieferanten gewechselt.
die Lieferkette|цепочка поставок|Die Lieferketten sind unterbrochen.
der Vertrieb|сбыт, отдел продаж|Sie arbeitet im Vertrieb.
der Absatz|сбыт; абзац|Der Absatz ist deutlich gestiegen.
der Marktanteil|доля рынка|Der Marktanteil liegt bei 20 Prozent.
der Wettbewerb|конкуренция; конкурс|Der Wettbewerb wird härter.
wettbewerbsfähig|конкурентоспособный|Wir müssen wettbewerbsfähig bleiben.
die Zielgruppe|целевая аудитория|Unsere Zielgruppe sind junge Familien.
die Marktforschung|исследование рынка|Die Marktforschung zeigt klare Trends.
der Bedarf|потребность|Der Bedarf an Pflegekräften steigt.
das Budget|бюджет|Das Budget ist begrenzt.
die Bilanz|баланс, итог|Die Bilanz fällt positiv aus.
die Subvention|субсидия|Die Branche erhält hohe Subventionen.
der Zoll|таможня; пошлина|Auf diese Waren wird Zoll erhoben.
die Einfuhr|ввоз|Die Einfuhr ist streng geregelt.
die Ausfuhr|вывоз|Die Ausfuhr von Autos nimmt zu.
die Globalisierung|глобализация|Die Globalisierung hat Vor- und Nachteile.
die Fachkraft|квалифицированный специалист|Es fehlen Fachkräfte.
der Fachkräftemangel|нехватка специалистов|Der Fachkräftemangel bremst das Wachstum.
die Qualifikation|квалификация|Welche Qualifikationen bringen Sie mit?
die Vergütung|вознаграждение|Die Vergütung ist angemessen.
die Prämie|премия|Die Mitarbeiter erhalten eine Prämie.
die Abfindung|выходное пособие|Er bekam eine hohe Abfindung.
der Tarifvertrag|тарифное соглашение|Der Tarifvertrag läuft bald aus.
die Kurzarbeit|сокращённый рабочий день|Die Firma hat Kurzarbeit angemeldet.
die Elternzeit|отпуск по уходу за ребёнком|Er ist drei Monate in Elternzeit.
die Vereinbarkeit|совместимость|Die Vereinbarkeit von Familie und Beruf ist schwierig.
auslagern|выносить на аутсорсинг|Die Produktion wurde ausgelagert.
rentabel|рентабельный|Das Geschäft ist nicht mehr rentabel.
profitieren|извлекать выгоду|Alle profitieren von der Lösung.
kalkulieren|рассчитывать|Wir müssen die Kosten neu kalkulieren.
finanzieren|финансировать|Wie wollen Sie das finanzieren?
die Finanzierung|финансирование|Die Finanzierung ist gesichert.
abwickeln|осуществлять, проводить|Der Auftrag wird schnell abgewickelt.
der Aufwand|затраты, усилия|Der Aufwand ist zu groß.
der Ertrag|доход, урожай|Der Ertrag war höher als erwartet.
die Effizienz|эффективность|Wir wollen die Effizienz steigern.
effizient|эффективный|Die neue Methode ist effizienter.

# Наука и техника
die Studie|исследование|Die Studie umfasst 2000 Teilnehmer.
die Hypothese|гипотеза|Die Hypothese wurde bestätigt.
die These|тезис|Diese These ist umstritten.
die Analyse|анализ|Die Analyse zeigt deutliche Unterschiede.
analysieren|анализировать|Wir analysieren die Daten.
die Statistik|статистика|Laut Statistik sinkt die Zahl.
die Stichprobe|выборка|Die Stichprobe ist zu klein.
die Auswertung|обработка данных|Die Auswertung dauert zwei Wochen.
auswerten|обрабатывать, оценивать|Die Ergebnisse werden noch ausgewertet.
die Erhebung|сбор данных, опрос|Die Erhebung fand im Mai statt.
der Befund|заключение, результат обследования|Der Befund ist unauffällig.
belegen|подтверждать (фактами)|Studien belegen diesen Zusammenhang.
widerlegen|опровергать|Die Theorie wurde widerlegt.
nachweisen|доказывать, обнаруживать|Der Stoff lässt sich im Blut nachweisen.
der Nachweis|доказательство, подтверждение|Bitte legen Sie einen Nachweis vor.
die Annahme|предположение|Das ist nur eine Annahme.
die Schlussfolgerung|вывод|Welche Schlussfolgerung ziehen Sie daraus?
ableiten|выводить|Daraus lässt sich eine Regel ableiten.
der Faktor|фактор|Zeit ist ein entscheidender Faktor.
das Phänomen|явление|Dieses Phänomen ist wenig erforscht.
das Verfahren|метод, процедура|Das Verfahren ist sehr aufwendig.
der Ansatz|подход|Das ist ein interessanter Ansatz.
die Grundlage|основа|Vertrauen ist die Grundlage.
der Maßstab|масштаб, критерий|Das setzt neue Maßstäbe.
die Disziplin|дисциплина|Biologie ist eine vielfältige Disziplin.
der Fachbereich|факультет, область|Sie leitet den Fachbereich Physik.
die Dissertation|диссертация|Er schreibt seine Dissertation.
der Doktorand|аспирант|Die Doktoranden präsentieren ihre Arbeit.
das Labor|лаборатория|Die Proben werden im Labor untersucht.
das Experiment|эксперимент|Das Experiment ist gescheitert.
die Simulation|симуляция|Die Simulation zeigt mögliche Folgen.
die Innovation|инновация|Innovationen sichern die Zukunft.
innovativ|инновационный|Das ist ein innovatives Konzept.
die Automatisierung|автоматизация|Die Automatisierung verändert die Arbeitswelt.
der Roboter|робот|Roboter übernehmen einfache Aufgaben.
der Algorithmus|алгоритм|Der Algorithmus sortiert die Daten.
die Schnittstelle|интерфейс, стык|Das Gerät hat mehrere Schnittstellen.
der Speicher|память, хранилище|Der Speicher ist fast voll.
die Verschlüsselung|шифрование|Die Verschlüsselung schützt die Daten.
die Gentechnik|генная инженерия|Gentechnik ist ein umstrittenes Thema.
die Raumfahrt|космонавтика|Die Raumfahrt kostet Milliarden.
der Satellit|спутник|Der Satellit liefert genaue Bilder.
die Strahlung|излучение|Die Strahlung ist gefährlich.
die Atomkraft|атомная энергия|Der Ausstieg aus der Atomkraft ist beschlossen.
der Treibstoff|топливо|Der Treibstoff wird knapp.
der Antrieb|привод; стимул|Das Auto hat einen elektrischen Antrieb.
die Vorrichtung|приспособление|Die Vorrichtung dient der Sicherheit.
die Wartung|техническое обслуживание|Die Wartung erfolgt jährlich.

# Общество
die Generation|поколение|Jede Generation hat ihre Probleme.
der Wandel|перемена, изменение|Die Gesellschaft befindet sich im Wandel.
der demografische Wandel|демографические изменения|Der demografische Wandel betrifft alle.
die Alterung|старение|Die Alterung der Bevölkerung schreitet voran.
die Zuwanderung|иммиграция, приток населения|Die Zuwanderung ist gestiegen.
die Auswanderung|эмиграция|Die Auswanderung junger Leute ist ein Problem.
der Migrationshintergrund|миграционное происхождение|Viele Schüler haben einen Migrationshintergrund.
die Chancengleichheit|равенство возможностей|Chancengleichheit beginnt in der Schule.
die Benachteiligung|ущемление|Die Benachteiligung von Frauen besteht weiter.
benachteiligen|ущемлять|Niemand darf benachteiligt werden.
die Ausgrenzung|исключение, отчуждение|Armut führt oft zu Ausgrenzung.
die Vielfalt|многообразие|Die kulturelle Vielfalt ist ein Gewinn.
die Solidarität|солидарность|In der Krise zeigte sich große Solidarität.
das Ehrenamt|общественная работа|Viele engagieren sich im Ehrenamt.
ehrenamtlich|на общественных началах|Sie arbeitet ehrenamtlich im Tierheim.
die Spende|пожертвование|Jede Spende hilft.
spenden|жертвовать|Er spendet regelmäßig Blut.
die Stiftung|фонд|Die Stiftung fördert junge Künstler.
die Obdachlosigkeit|бездомность|Die Obdachlosigkeit nimmt zu.
obdachlos|бездомный|Nach dem Brand war die Familie obdachlos.
die Sozialhilfe|социальная помощь|Sie lebt von Sozialhilfe.
die Altersvorsorge|пенсионное обеспечение|Private Altersvorsorge wird wichtiger.
die Mittelschicht|средний класс|Die Mittelschicht schrumpft.
das Milieu|среда|Er stammt aus einem einfachen Milieu.
der Wohnraum|жильё, жилая площадь|Bezahlbarer Wohnraum ist knapp.
die Wohnungsnot|нехватка жилья|In Großstädten herrscht Wohnungsnot.
die Infrastruktur|инфраструктура|Die Infrastruktur muss erneuert werden.
die Mobilität|мобильность|Mobilität ist auf dem Land ein Problem.
der Nahverkehr|местный общественный транспорт|Der Nahverkehr wird ausgebaut.
der Pendler|человек, ездящий на работу из пригорода|Die Pendler stehen täglich im Stau.
pendeln|ездить на работу и обратно|Ich pendle jeden Tag nach Frankfurt.
die Lebensqualität|качество жизни|Die Lebensqualität ist hier hoch.
der Lebensstandard|уровень жизни|Der Lebensstandard ist gestiegen.
der Konsum|потребление|Der Konsum von Fleisch geht zurück.
der Überfluss|изобилие|Wir leben im Überfluss.
der Mangel|недостаток, дефицит|Es herrscht Mangel an Ärzten.
die Tendenz|тенденция|Die Tendenz ist steigend.
der Trend|тренд|Der Trend geht zum Homeoffice.
die Norm|норма|Das entspricht nicht der Norm.
das Tabu|табу|Über Geld zu sprechen ist oft ein Tabu.
das Klischee|клише|Das ist ein altes Klischee.
das Geschlecht|пол; род|Das Geschlecht spielt keine Rolle.
die Emanzipation|эмансипация|Die Emanzipation hat viel verändert.
die Rollenverteilung|распределение ролей|Die Rollenverteilung in Familien ändert sich.

# Психология и характер
das Bewusstsein|сознание|Das Bewusstsein für Umweltschutz wächst.
die Wahrnehmung|восприятие|Die Wahrnehmung ist subjektiv.
die Persönlichkeit|личность|Sie hat eine starke Persönlichkeit.
der Charakterzug|черта характера|Ehrlichkeit ist ein guter Charakterzug.
das Selbstwertgefühl|самооценка|Lob stärkt das Selbstwertgefühl.
die Selbstverwirklichung|самореализация|Der Beruf dient auch der Selbstverwirklichung.
die Motivation|мотивация|Mir fehlt heute die Motivation.
der Ehrgeiz|честолюбие, амбиции|Sein Ehrgeiz ist bewundernswert.
die Ausdauer|выносливость, упорство|Für das Studium braucht man Ausdauer.
die Gelassenheit|невозмутимость|Sie reagierte mit Gelassenheit.
gelassen|невозмутимый|Bleib gelassen!
die Zuversicht|уверенность в будущем|Er blickt mit Zuversicht nach vorn.
zuversichtlich|оптимистично настроенный|Ich bin zuversichtlich, dass es klappt.
die Skepsis|скепсис|Der Plan stößt auf Skepsis.
skeptisch|скептический|Ich bin da eher skeptisch.
die Hemmung|скованность, торможение|Er hat Hemmungen, vor Leuten zu sprechen.
die Überforderung|перегрузка|Überforderung führt zu Stress.
überfordert|перегруженный, не справляющийся|Ich fühle mich überfordert.
die Belastung|нагрузка|Die Belastung am Arbeitsplatz steigt.
belastbar|стрессоустойчивый|Wir suchen belastbare Mitarbeiter.
die Erschöpfung|изнеможение|Sie leidet unter chronischer Erschöpfung.
die Depression|депрессия|Depressionen sind weit verbreitet.
das Trauma|травма (псих.)|Das Erlebnis war ein Trauma.
verdrängen|вытеснять|Er verdrängt seine Probleme.
die Empathie|эмпатия|Empathie ist in diesem Beruf wichtig.
einfühlsam|чуткий|Die Ärztin ist sehr einfühlsam.
aufgeschlossen|открытый (к новому)|Er ist aufgeschlossen für neue Ideen.
zurückhaltend|сдержанный|Sie ist eher zurückhaltend.
hartnäckig|упорный|Er verfolgt sein Ziel hartnäckig.
leichtsinnig|легкомысленный|Das war sehr leichtsinnig von dir.
gewissenhaft|добросовестный|Sie arbeitet äußerst gewissenhaft.
anpassungsfähig|умеющий приспосабливаться|Kinder sind sehr anpassungsfähig.
eigensinnig|своенравный|Er ist manchmal eigensinnig.
nachtragend|злопамятный|Sei nicht so nachtragend!
launisch|капризный|Der Chef ist heute launisch.
oberflächlich|поверхностный|Das Gespräch blieb oberflächlich.
spontan|спонтанный|Wir haben uns spontan entschieden.
rücksichtslos|бесцеремонный|Er fährt rücksichtslos.
rücksichtsvoll|тактичный, внимательный|Die Nachbarn sind sehr rücksichtsvoll.
arrogant|высокомерный|Er wirkt arrogant.
überheblich|заносчивый|Sein Ton war überheblich.
naiv|наивный|Das war ziemlich naiv.
raffiniert|изощрённый|Das ist ein raffinierter Plan.
hilfsbereit|готовый помочь|Unsere Nachbarn sind hilfsbereit.
das Vorbild|образец для подражания|Sie ist ein Vorbild für viele.
die Reife|зрелость|Das zeugt von persönlicher Reife.

# Дискуссия и аргументация
das Argument|аргумент|Das ist ein überzeugendes Argument.
argumentieren|аргументировать|Er argumentiert sehr sachlich.
der Standpunkt|точка зрения|Ich verstehe Ihren Standpunkt.
die Stellungnahme|официальная позиция, отзыв|Die Firma gab eine Stellungnahme ab.
Stellung nehmen|высказывать позицию|Dazu möchte ich Stellung nehmen.
die Auffassung|мнение, понимание|Ich bin anderer Auffassung.
die Ansicht|взгляд, мнение|Meiner Ansicht nach ist das falsch.
die Sichtweise|точка зрения, взгляд|Das ist eine interessante Sichtweise.
der Aspekt|аспект|Diesen Aspekt haben wir übersehen.
der Einwand|возражение|Gibt es Einwände?
einwenden|возражать|Dagegen lässt sich nichts einwenden.
die Kritik|критика|Die Kritik ist berechtigt.
kritisieren|критиковать|Die Presse kritisiert die Entscheidung.
die Zustimmung|согласие, одобрение|Der Vorschlag fand breite Zustimmung.
die Ablehnung|отказ, неприятие|Der Plan stieß auf Ablehnung.
der Kompromiss|компромисс|Wir haben einen Kompromiss gefunden.
die Kontroverse|полемика|Das Thema löste eine Kontroverse aus.
umstritten|спорный|Die Maßnahme ist stark umstritten.
die Debatte|дебаты|Die Debatte dauerte drei Stunden.
erörtern|обсуждать, разбирать|Wir erörtern die Vor- und Nachteile.
abwägen|взвешивать|Man muss Chancen und Risiken abwägen.
in Betracht ziehen|принимать во внимание|Wir ziehen mehrere Lösungen in Betracht.
in Frage stellen|ставить под сомнение|Niemand stellt das in Frage.
zur Sprache bringen|поднимать (тему)|Ich möchte ein Problem zur Sprache bringen.
betonen|подчёркивать|Sie betonte die Bedeutung der Bildung.
hervorheben|выделять, отмечать|Ich möchte einen Punkt hervorheben.
verdeutlichen|пояснять|Ein Beispiel verdeutlicht das Problem.
veranschaulichen|наглядно показывать|Die Grafik veranschaulicht die Entwicklung.
erläutern|разъяснять|Können Sie das näher erläutern?
andeuten|намекать|Er deutete an, dass er kündigen will.
unterstellen|приписывать, подозревать в чём-то|Das unterstellen Sie mir!
einräumen|признавать, допускать|Er räumte Fehler ein.
bestreiten|оспаривать, отрицать|Er bestreitet die Vorwürfe.
anzweifeln|подвергать сомнению|Ich zweifle diese Zahlen an.
befürworten|поддерживать, одобрять|Die Mehrheit befürwortet den Plan.
der Befürworter|сторонник|Die Befürworter sind in der Minderheit.
der Gegner|противник|Die Gegner des Projekts protestieren.
plädieren|выступать за|Ich plädiere für eine andere Lösung.
appellieren|призывать|Er appellierte an die Vernunft.
folgern|делать вывод|Daraus folgere ich, dass er lügt.
zurückführen|объяснять чем-то, сводить к|Das lässt sich auf Stress zurückführen.
sich berufen|ссылаться|Er beruft sich auf das Gesetz.
sich beziehen|относиться, ссылаться|Ich beziehe mich auf Ihre E-Mail.
verweisen|отсылать, указывать|Ich verweise auf Seite zehn.
hinsichtlich|в отношении|Hinsichtlich der Kosten gibt es Bedenken.
angesichts|ввиду|Angesichts der Lage müssen wir handeln.
zufolge|согласно|Dem Bericht zufolge gab es keine Verletzten.
demzufolge|следовательно|Er war krank, demzufolge fehlte er.
folglich|следовательно|Er hat nicht gelernt, folglich fiel er durch.
somit|тем самым|Somit ist das Problem gelöst.
infolgedessen|вследствие этого|Es regnete stark, infolgedessen fiel das Spiel aus.
nichtsdestotrotz|тем не менее|Nichtsdestotrotz bleibe ich optimistisch.
hingegen|напротив, же|Er liebt die Stadt, sie hingegen das Land.
wohingegen|в то время как|Er ist ruhig, wohingegen sein Bruder laut ist.
insofern|в этом отношении|Insofern hast du recht.
sofern|если, при условии что|Sofern es nicht regnet, grillen wir.
es sei denn|разве что|Ich komme, es sei denn, ich bin krank.
geschweige denn|не говоря уже о|Er kann kaum gehen, geschweige denn laufen.
vielmehr|скорее, напротив|Es ist kein Fehler, vielmehr eine Chance.
zumal|тем более что|Ich bleibe zu Hause, zumal es regnet.
ohnehin|и так, всё равно|Ich wollte ohnehin gehen.
gewissermaßen|в известной мере|Er ist gewissermaßen der Chef.
letztendlich|в конечном счёте|Letztendlich entscheidet der Kunde.
im Großen und Ganzen|в общем и целом|Im Großen und Ganzen bin ich zufrieden.
im Wesentlichen|в основном|Im Wesentlichen stimmen wir überein.
unter Umständen|при определённых обстоятельствах|Unter Umständen dauert es länger.
aus meiner Sicht|с моей точки зрения|Aus meiner Sicht ist das ein Fehler.
meines Erachtens|по моему мнению|Meines Erachtens ist das zu teuer.

# Медиа и коммуникация
die Berichterstattung|освещение в СМИ|Die Berichterstattung war einseitig.
die Auflage|тираж; условие|Die Zeitung hat eine hohe Auflage.
der Verlag|издательство|Der Verlag veröffentlicht den Roman.
der Herausgeber|издатель|Der Herausgeber schrieb das Vorwort.
die Redaktion|редакция|Die Redaktion prüft die Fakten.
der Redakteur|редактор|Der Redakteur kürzte den Text.
der Kommentar|комментарий|Sein Kommentar war sehr kritisch.
die Kolumne|колонка|Sie schreibt eine wöchentliche Kolumne.
die Pressefreiheit|свобода прессы|Die Pressefreiheit ist gefährdet.
die Meinungsfreiheit|свобода слова|Meinungsfreiheit ist ein Grundrecht.
die Falschmeldung|ложное сообщение|Die Falschmeldung verbreitete sich schnell.
die Desinformation|дезинформация|Desinformation ist eine Gefahr.
die Manipulation|манипуляция|Das ist reine Manipulation.
manipulieren|манипулировать|Die Zahlen wurden manipuliert.
die Glaubwürdigkeit|достоверность|Seine Glaubwürdigkeit hat gelitten.
glaubwürdig|заслуживающий доверия|Die Quelle ist glaubwürdig.
seriös|солидный, серьёзный|Das ist eine seriöse Zeitung.
die Boulevardpresse|бульварная пресса|Die Boulevardpresse liebt Skandale.
der Rundfunk|радиовещание|Der Rundfunk berichtet live.
öffentlich-rechtlich|общественно-правовой|Die öffentlich-rechtlichen Sender sind unabhängig.
die Einschaltquote|рейтинг передачи|Die Einschaltquote war enttäuschend.
der Beitrag|вклад; материал, статья|Der Beitrag wurde viel diskutiert.
die Reichweite|охват, дальность|Der Kanal hat eine große Reichweite.
die Privatsphäre|частная жизнь|Jeder hat ein Recht auf Privatsphäre.
die Überwachung|слежка, надзор|Die Überwachung nimmt zu.
überwachen|следить, контролировать|Der Platz wird mit Kameras überwacht.
anonym|анонимный|Die Umfrage ist anonym.
die Rhetorik|риторика|Seine Rhetorik ist beeindruckend.
die Ausdrucksweise|манера выражаться|Seine Ausdrucksweise ist sehr direkt.
die Umgangssprache|разговорный язык|Das Wort gehört zur Umgangssprache.
die Fachsprache|профессиональный язык|Die juristische Fachsprache ist schwer.
der Dialekt|диалект|Sie spricht einen starken Dialekt.
die Redewendung|устойчивое выражение|Diese Redewendung kenne ich nicht.
das Sprichwort|пословица|Wie das Sprichwort sagt: Übung macht den Meister.
die Ironie|ирония|Die Ironie hat er nicht verstanden.
die Anspielung|намёк, аллюзия|Das war eine Anspielung auf seinen Fehler.
missverstehen|неправильно понимать|Du hast mich missverstanden.
vermitteln|передавать; посредничать|Der Kurs vermittelt Grundkenntnisse.

# Окружающая среда и ресурсы
die Nachhaltigkeit|устойчивое развитие|Nachhaltigkeit ist unser Ziel.
der Ausstoß|выброс|Der Ausstoß von CO2 muss sinken.
die Emission|эмиссия, выброс|Die Emissionen sind gesunken.
das Treibhausgas|парниковый газ|Methan ist ein starkes Treibhausgas.
der Treibhauseffekt|парниковый эффект|Der Treibhauseffekt erwärmt die Erde.
die Erderwärmung|глобальное потепление|Die Erderwärmung schreitet voran.
der Meeresspiegel|уровень моря|Der Meeresspiegel steigt.
der Gletscher|ледник|Die Gletscher werden kleiner.
schmelzen|таять|Das Eis schmilzt immer schneller.
die Artenvielfalt|видовое разнообразие|Die Artenvielfalt ist bedroht.
das Ökosystem|экосистема|Das Ökosystem ist empfindlich.
der Lebensraum|среда обитания|Viele Tiere verlieren ihren Lebensraum.
die Abholzung|вырубка лесов|Die Abholzung zerstört den Regenwald.
der Regenwald|тропический лес|Der Regenwald ist die Lunge der Erde.
die Überfischung|чрезмерный вылов рыбы|Die Überfischung bedroht die Meere.
die Massentierhaltung|промышленное животноводство|Viele lehnen Massentierhaltung ab.
das Pestizid|пестицид|Pestizide schaden den Bienen.
der Dünger|удобрение|Zu viel Dünger belastet das Wasser.
das Grundwasser|грунтовые воды|Das Grundwasser ist verschmutzt.
die Knappheit|нехватка|Die Knappheit an Wasser nimmt zu.
die Ressource|ресурс|Wasser ist eine wertvolle Ressource.
fossil|ископаемый|Fossile Brennstoffe sind begrenzt.
die Windkraft|ветроэнергетика|Windkraft liefert sauberen Strom.
die Energiewende|энергетический переход|Die Energiewende kostet viel Geld.
der Ausstieg|выход, отказ|Der Ausstieg aus der Kohle ist beschlossen.
die Dämmung|изоляция, утепление|Eine gute Dämmung spart Heizkosten.
der ökologische Fußabdruck|экологический след|Wir sollten unseren ökologischen Fußabdruck verkleinern.
klimaneutral|климатически нейтральный|Die Stadt will bis 2040 klimaneutral sein.
die Kreislaufwirtschaft|экономика замкнутого цикла|Die Kreislaufwirtschaft vermeidet Abfall.
die Entsorgung|утилизация|Die Entsorgung von Batterien ist geregelt.
entsorgen|утилизировать|Alte Geräte muss man richtig entsorgen.
die Wiederverwertung|повторное использование|Die Wiederverwertung spart Rohstoffe.
der Schadstoff|вредное вещество|Die Luft enthält viele Schadstoffe.
verseuchen|заражать, отравлять|Das Öl hat den Boden verseucht.
die Auswirkung|последствие, воздействие|Die Auswirkungen sind noch unklar.
sich auswirken|сказываться|Stress wirkt sich auf die Gesundheit aus.
beeinträchtigen|ухудшать, ограничивать|Lärm beeinträchtigt die Konzentration.
eindämmen|сдерживать|Die Maßnahmen sollen die Krise eindämmen.
vorbeugen|предупреждать, предотвращать|Sport beugt Krankheiten vor.
bewahren|сохранять|Wir müssen die Natur bewahren.
der Verzicht|отказ|Der Verzicht auf das Auto fällt vielen schwer.

# Здоровье и медицина
die Diagnose|диагноз|Die Diagnose steht noch nicht fest.
diagnostizieren|диагностировать|Die Krankheit wurde früh diagnostiziert.
das Symptom|симптом|Die Symptome sind typisch.
die Beschwerden|жалобы, недомогание|Welche Beschwerden haben Sie?
chronisch|хронический|Er hat chronische Rückenschmerzen.
akut|острый|Es besteht keine akute Gefahr.
ansteckend|заразный|Die Krankheit ist sehr ansteckend.
sich anstecken|заражаться|Ich habe mich bei ihm angesteckt.
die Seuche|эпидемия, мор|Die Seuche breitete sich schnell aus.
die Epidemie|эпидемия|Die Epidemie ist unter Kontrolle.
das Immunsystem|иммунная система|Vitamine stärken das Immunsystem.
der Erreger|возбудитель|Der Erreger wurde identifiziert.
das Virus|вирус|Das Virus verändert sich ständig.
das Antibiotikum|антибиотик|Das Antibiotikum wirkt schnell.
die Therapie|терапия|Die Therapie schlägt gut an.
die Genesung|выздоровление|Wir wünschen eine schnelle Genesung.
genesen|выздороветь|Sie ist vollständig genesen.
der Eingriff|вмешательство, операция|Der Eingriff dauerte eine Stunde.
die Narkose|наркоз|Die Operation erfolgt unter Narkose.
die Transplantation|трансплантация|Die Transplantation war erfolgreich.
das Organ|орган|Die Leber ist ein lebenswichtiges Organ.
der Kreislauf|кровообращение; круговорот|Mein Kreislauf ist heute schwach.
der Stoffwechsel|обмен веществ|Sport regt den Stoffwechsel an.
der Blutdruck|кровяное давление|Sein Blutdruck ist zu hoch.
der Herzinfarkt|инфаркт|Er hatte einen Herzinfarkt.
der Schlaganfall|инсульт|Nach dem Schlaganfall musste er neu sprechen lernen.
der Krebs|рак|Krebs ist oft heilbar, wenn er früh erkannt wird.
der Tumor|опухоль|Der Tumor wurde entfernt.
die Demenz|деменция|Meine Großmutter leidet an Demenz.
die Sterbehilfe|эвтаназия|Sterbehilfe ist ein ethisch schwieriges Thema.
die Lebenserwartung|продолжительность жизни|Die Lebenserwartung steigt.
die Prävention|профилактика|Prävention spart Kosten.
die Krankschreibung|больничный лист|Ich brauche eine Krankschreibung.
das Attest|медицинская справка|Bitte bringen Sie ein Attest mit.
die Alternativmedizin|альтернативная медицина|Viele vertrauen der Alternativmedizin.
die Dosis|доза|Die Dosis wurde erhöht.
verschreibungspflichtig|отпускаемый по рецепту|Das Medikament ist verschreibungspflichtig.
lindern|облегчать|Die Tabletten lindern den Schmerz.
die Abhängigkeit|зависимость|Die Abhängigkeit von Medikamenten ist gefährlich.
der Entzug|лишение; лечение от зависимости|Er macht einen Entzug.

# Культура и искусство
die Epoche|эпоха|Die Romantik war eine wichtige Epoche.
die Strömung|течение|Das ist eine neue Strömung in der Kunst.
das Erbe|наследие|Das kulturelle Erbe muss geschützt werden.
das Kulturgut|культурное достояние|Das Buch ist ein wichtiges Kulturgut.
die Inszenierung|постановка|Die Inszenierung war sehr modern.
inszenieren|ставить (спектакль)|Sie inszeniert das Stück in Hamburg.
die Uraufführung|мировая премьера|Die Uraufführung fand in Wien statt.
die Premiere|премьера|Die Premiere war ausverkauft.
das Drehbuch|сценарий|Er schrieb das Drehbuch selbst.
die Verfilmung|экранизация|Die Verfilmung ist besser als das Buch.
die Rezension|рецензия|Die Rezension war vernichtend.
der Kritiker|критик|Die Kritiker lobten den Film.
die Interpretation|интерпретация|Das ist eine mögliche Interpretation.
interpretieren|интерпретировать|Wie interpretieren Sie das Gedicht?
die Metapher|метафора|Der Text ist voller Metaphern.
das Motiv|мотив|Das Motiv der Reise kehrt immer wieder.
die Gattung|жанр, род|Der Roman ist die beliebteste Gattung.
die Erzählung|рассказ, повествование|Die Erzählung spielt im 19. Jahrhundert.
die Novelle|новелла|Wir lesen eine Novelle von Storm.
die Lyrik|лирика|Sie interessiert sich für moderne Lyrik.
die Prosa|проза|Er schreibt Prosa und Gedichte.
das Zitat|цитата|Das Zitat stammt von Goethe.
zitieren|цитировать|Er zitierte einen bekannten Philosophen.
der Protagonist|главный герой|Der Protagonist ist ein junger Arzt.
die Skulptur|скульптура|Die Skulptur steht im Museumshof.
die Architektur|архитектура|Die Architektur der Stadt ist beeindruckend.
die Ästhetik|эстетика|Die Ästhetik des Films ist einzigartig.
zeitgenössisch|современный (об искусстве)|Sie sammelt zeitgenössische Kunst.
der Zeitgeist|дух времени|Das Buch trifft den Zeitgeist.
anspruchsvoll|требовательный, серьёзный|Das ist ein anspruchsvoller Roman.
unterhaltsam|занимательный|Der Abend war sehr unterhaltsam.
mitreißend|захватывающий|Die Musik war mitreißend.
ergreifend|трогательный|Die Rede war ergreifend.
tiefgründig|глубокий|Das Gespräch war tiefgründig.
banal|банальный|Die Handlung ist ziemlich banal.

# Глаголы
abschaffen|отменять, упразднять|Die Gebühr wurde abgeschafft.
abweichen|отклоняться|Das Ergebnis weicht vom Plan ab.
anerkennen|признавать|Sein Abschluss wurde anerkannt.
anpassen|приспосабливать|Wir müssen den Plan anpassen.
anstreben|стремиться к|Sie strebt eine Karriere in der Politik an.
anwenden|применять|Die Regel lässt sich hier nicht anwenden.
aufweisen|обнаруживать, иметь|Der Bericht weist viele Fehler auf.
davon ausgehen|исходить из того, что|Ich gehe davon aus, dass er kommt.
auslösen|вызывать, запускать|Die Nachricht löste Panik aus.
ausschließen|исключать|Das kann ich nicht ausschließen.
ausüben|заниматься; оказывать|Er übt Druck auf uns aus.
beanspruchen|претендовать; занимать|Das Projekt beansprucht viel Zeit.
bedauern|сожалеть|Ich bedauere den Vorfall sehr.
sich befassen|заниматься (вопросом)|Die Studie befasst sich mit dem Klimawandel.
begrenzen|ограничивать|Die Teilnehmerzahl ist begrenzt.
beitragen|вносить вклад|Jeder kann dazu beitragen.
bekämpfen|бороться с|Die Regierung bekämpft die Armut.
belasten|нагружать, обременять|Die Kosten belasten die Familien.
beschränken|ограничивать|Wir beschränken uns auf das Wesentliche.
beseitigen|устранять|Der Fehler wurde beseitigt.
bewältigen|справляться с|Wie bewältigen Sie den Stress?
bewerten|оценивать|Wie bewerten Sie die Lage?
bewirken|вызывать, приводить к|Das Medikament bewirkt eine schnelle Besserung.
durchsetzen|добиваться, проводить в жизнь|Sie hat ihre Idee durchgesetzt.
einführen|вводить|Die Firma führt ein neues System ein.
eingreifen|вмешиваться|Die Polizei musste eingreifen.
einschränken|ограничивать|Die Rechte dürfen nicht eingeschränkt werden.
einsetzen|применять, задействовать|Wir setzen neue Technik ein.
entgegenkommen|идти навстречу|Können Sie uns beim Preis entgegenkommen?
entlasten|разгружать, облегчать|Das neue Gesetz entlastet Familien.
entnehmen|извлекать, заключать|Dem Text kann man entnehmen, dass er zufrieden war.
erfassen|охватывать, регистрировать|Die Daten werden elektronisch erfasst.
erfordern|требовать|Die Aufgabe erfordert viel Geduld.
ergänzen|дополнять|Bitte ergänzen Sie die Liste.
sich ergeben|вытекать, получаться|Daraus ergeben sich neue Fragen.
erleichtern|облегчать|Die App erleichtert die Arbeit.
ermitteln|устанавливать, расследовать|Die Polizei ermittelt gegen ihn.
erweitern|расширять|Wir erweitern unser Angebot.
erzeugen|производить, порождать|Die Anlage erzeugt Strom.
erzielen|достигать|Wir haben gute Ergebnisse erzielt.
festlegen|устанавливать, определять|Der Termin wurde festgelegt.
gefährden|ставить под угрозу|Das gefährdet die Sicherheit.
gestalten|оформлять, организовывать|Wir gestalten den Raum neu.
gewährleisten|гарантировать|Die Sicherheit muss gewährleistet sein.
herausfinden|выяснять|Ich muss herausfinden, was passiert ist.
hervorrufen|вызывать|Die Entscheidung rief Proteste hervor.
hinterfragen|критически осмысливать|Man sollte alles kritisch hinterfragen.
nachvollziehen|понять (чью-то логику)|Das kann ich gut nachvollziehen.
scheuen|избегать, бояться|Er scheut keine Mühe.
schildern|описывать, излагать|Er schilderte den Vorfall genau.
sich abzeichnen|намечаться|Eine Lösung zeichnet sich ab.
sich auseinandersetzen|разбираться, заниматься|Ich setze mich mit dem Thema auseinander.
sich herausstellen|выясняться|Es stellte sich heraus, dass er recht hatte.
sich richten|ориентироваться, руководствоваться|Ich richte mich nach dir.
steigern|повышать|Wir wollen den Umsatz steigern.
überschätzen|переоценивать|Er hat seine Kräfte überschätzt.
unterschätzen|недооценивать|Unterschätze das Problem nicht!
übertreffen|превосходить|Das Ergebnis übertrifft alle Erwartungen.
übertreiben|преувеличивать|Du übertreibst mal wieder.
umsetzen|реализовывать|Die Idee wurde schnell umgesetzt.
unterliegen|подлежать; уступать|Die Preise unterliegen starken Schwankungen.
verfügen|располагать|Sie verfügt über viel Erfahrung.
vernachlässigen|пренебрегать|Er vernachlässigt seine Gesundheit.
verschärfen|ужесточать, обострять|Die Regeln wurden verschärft.
versäumen|упускать, пропускать|Ich habe die Frist versäumt.
verstärken|усиливать|Die Polizei verstärkt die Kontrollen.
vertiefen|углублять|Ich möchte meine Kenntnisse vertiefen.
verwirklichen|осуществлять|Er hat seinen Traum verwirklicht.
voraussetzen|предполагать, требовать|Die Stelle setzt Erfahrung voraus.
vorwerfen|упрекать|Man wirft ihm Betrug vor.
zurückgehen|снижаться; восходить к|Die Zahl der Unfälle geht zurück.
zustande kommen|осуществляться, состояться|Der Vertrag ist nicht zustande gekommen.

# Прилагательные
angemessen|соразмерный, уместный|Der Preis ist angemessen.
aufwendig|трудоёмкий, затратный|Die Renovierung war sehr aufwendig.
ausgeprägt|ярко выраженный|Er hat einen ausgeprägten Sinn für Humor.
beachtlich|значительный|Das ist eine beachtliche Summe.
berechtigt|обоснованный, правомочный|Ihre Kritik ist berechtigt.
beständig|постоянный, устойчивый|Das Wetter bleibt beständig.
bewusst|сознательный|Das war eine bewusste Entscheidung.
brisant|острый, злободневный|Das Thema ist politisch brisant.
differenziert|дифференцированный|Wir brauchen eine differenzierte Betrachtung.
drastisch|резкий, радикальный|Die Preise sind drastisch gestiegen.
einheitlich|единый|Es gibt keine einheitliche Regelung.
erheblich|значительный|Der Schaden ist erheblich.
fragwürdig|сомнительный|Die Methode ist fragwürdig.
geeignet|подходящий|Er ist für die Stelle geeignet.
gravierend|серьёзный, тяжёлый|Das ist ein gravierender Fehler.
grundlegend|основополагающий|Wir brauchen grundlegende Reformen.
heikel|щекотливый|Das ist ein heikles Thema.
herkömmlich|традиционный, обычный|Herkömmliche Methoden reichen nicht aus.
hervorragend|превосходный|Das Essen war hervorragend.
komplex|комплексный, сложный|Das Problem ist sehr komplex.
konsequent|последовательный|Sie verfolgt ihr Ziel konsequent.
maßgeblich|определяющий|Er war maßgeblich am Erfolg beteiligt.
nachvollziehbar|понятный, объяснимый|Ihre Entscheidung ist nachvollziehbar.
plausibel|правдоподобный|Die Erklärung klingt plausibel.
relevant|значимый|Das ist für uns nicht relevant.
sachlich|деловой, объективный|Bitte bleiben Sie sachlich.
schlüssig|логичный, убедительный|Die Argumentation ist schlüssig.
stichhaltig|веский|Dafür gibt es keine stichhaltigen Beweise.
überflüssig|излишний|Dieser Kommentar war überflüssig.
überzeugend|убедительный|Das ist ein überzeugendes Konzept.
umfangreich|обширный|Der Bericht ist sehr umfangreich.
umfassend|всеобъемлющий|Wir bieten eine umfassende Beratung.
unerlässlich|необходимый, обязательный|Gute Vorbereitung ist unerlässlich.
unvermeidlich|неизбежный|Der Konflikt war unvermeidlich.
verbindlich|обязательный|Die Anmeldung ist verbindlich.
vertraulich|конфиденциальный|Die Informationen sind vertraulich.
vielfältig|многообразный|Die Aufgaben sind vielfältig.
vorläufig|предварительный, временный|Das ist nur ein vorläufiges Ergebnis.
widersprüchlich|противоречивый|Die Aussagen sind widersprüchlich.
zeitgemäß|современный, соответствующий времени|Die Technik ist nicht mehr zeitgemäß.
zwangsläufig|неизбежно|Das führt zwangsläufig zu Problemen.

# Устойчивые сочетания
eine Entscheidung treffen|принимать решение|Wir müssen bald eine Entscheidung treffen.
zur Verfügung stehen|быть в распоряжении|Ich stehe Ihnen gern zur Verfügung.
in Anspruch nehmen|пользоваться, занимать|Darf ich Ihre Hilfe in Anspruch nehmen?
Rücksicht nehmen|считаться с кем-то|Bitte nehmen Sie Rücksicht auf die Nachbarn.
Kritik üben|критиковать|Die Opposition übt Kritik an dem Plan.
in Kauf nehmen|мириться с чем-то|Dafür nehme ich lange Wege in Kauf.
zum Ausdruck bringen|выражать|Er brachte seine Dankbarkeit zum Ausdruck.
Bescheid geben|давать знать|Gib mir bitte Bescheid, wenn du ankommst.
in Erfüllung gehen|сбываться|Mein Wunsch ist in Erfüllung gegangen.
zur Kenntnis nehmen|принимать к сведению|Ich habe Ihre Nachricht zur Kenntnis genommen.
Einfluss nehmen|оказывать влияние|Die Lobby nimmt Einfluss auf die Politik.
in Betracht kommen|приниматься в расчёт|Diese Lösung kommt nicht in Betracht.
unter Druck stehen|находиться под давлением|Die Mitarbeiter stehen unter Druck.
in der Lage sein|быть в состоянии|Ich bin nicht in der Lage, das zu beurteilen.
auf dem Laufenden bleiben|оставаться в курсе|Ich lese Zeitung, um auf dem Laufenden zu bleiben.
einen Beitrag leisten|вносить вклад|Jeder kann einen Beitrag leisten.
Maßnahmen ergreifen|принимать меры|Die Stadt muss Maßnahmen ergreifen.
in Schwierigkeiten geraten|попадать в трудное положение|Die Firma ist in Schwierigkeiten geraten.
Verantwortung übernehmen|брать на себя ответственность|Jemand muss die Verantwortung übernehmen.
zu dem Schluss kommen|приходить к выводу|Wir sind zu dem Schluss gekommen, dass es sich lohnt.
im Vordergrund stehen|стоять на первом плане|Die Sicherheit steht im Vordergrund.
aus dem Weg gehen|избегать|Er geht Konflikten aus dem Weg.
den Überblick behalten|сохранять общее представление|Bei so vielen Aufgaben ist es schwer, den Überblick zu behalten.
ein Risiko eingehen|идти на риск|Ich möchte kein Risiko eingehen.
Abschied nehmen|прощаться|Wir mussten von unseren Freunden Abschied nehmen.
eine Frage aufwerfen|поднимать вопрос|Das wirft eine wichtige Frage auf.
Wert legen|придавать значение|Ich lege großen Wert auf Pünktlichkeit.
sich Mühe geben|стараться|Er gibt sich wirklich Mühe.
im Stich lassen|бросать в беде|Du hast mich im Stich gelassen.
auf der Hand liegen|быть очевидным|Die Lösung liegt auf der Hand.
`;
