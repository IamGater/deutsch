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
Kritik üben|высказывать критику|Die Opposition übt Kritik an dem Plan.
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

# Работа и предприятие
die Dienstleistung|услуга|Die Firma bietet Dienstleistungen an.
der Arbeitsmarkt|рынок труда|Der Arbeitsmarkt ist angespannt.
die Arbeitsbedingungen|условия труда|Die Arbeitsbedingungen sind gut.
die Belegschaft|персонал, коллектив|Die Belegschaft wurde informiert.
der Vorgesetzte|начальник, руководитель|Mein Vorgesetzter ist im Urlaub.
die Führungskraft|руководящий работник|Führungskräfte brauchen Erfahrung.
die Hierarchie|иерархия|Die Hierarchie ist flach.
die Zuständigkeit|компетенция, сфера ответственности|Das liegt nicht in meiner Zuständigkeit.
die Ausschreibung|конкурс, тендер|Wir nehmen an der Ausschreibung teil.
der Kostenvoranschlag|смета|Ich brauche einen Kostenvoranschlag.
die Buchhaltung|бухгалтерия|Die Rechnung geht an die Buchhaltung.
die Lohnabrechnung|расчётный лист|Die Lohnabrechnung kommt am Monatsende.
die Sozialabgaben|социальные отчисления|Die Sozialabgaben sind hoch.
der Arbeitsvertrag|трудовой договор|Der Arbeitsvertrag ist unterschrieben.
befristet|срочный, ограниченный сроком|Der Vertrag ist auf ein Jahr befristet.
unbefristet|бессрочный|Sie hat eine unbefristete Stelle.
die Kündigungsfrist|срок уведомления об увольнении|Die Kündigungsfrist beträgt drei Monate.
die Abmahnung|официальное предупреждение|Er hat eine Abmahnung bekommen.
der Mindestlohn|минимальная зарплата|Der Mindestlohn wurde erhöht.
die Schwarzarbeit|нелегальная работа|Schwarzarbeit ist strafbar.
der Nebenjob|подработка|Sie hat einen Nebenjob im Café.
die Selbstständigkeit|самостоятельность; работа на себя|Die Selbstständigkeit hat Vor- und Nachteile.
das Gewerbe|промысел, бизнес|Er hat ein Gewerbe angemeldet.
die Gründung|основание, учреждение|Die Gründung der Firma war 1990.
der Gründer|основатель|Der Gründer leitet die Firma noch selbst.
das Geschäftsmodell|бизнес-модель|Das Geschäftsmodell ist erfolgreich.
die Strategie|стратегия|Wir brauchen eine neue Strategie.
die Umstrukturierung|реструктуризация|Die Umstrukturierung kostet Stellen.
der Stellenabbau|сокращение рабочих мест|Der Konzern plant einen Stellenabbau.
der Mehrwert|добавленная ценность|Das Produkt bietet einen echten Mehrwert.
der Meilenstein|веха, этап|Das ist ein wichtiger Meilenstein.
das Mitarbeitergespräch|беседа с сотрудником|Das Mitarbeitergespräch findet jährlich statt.
die Einarbeitung|введение в должность|Die Einarbeitung dauert vier Wochen.
einarbeiten|вводить в курс дела|Ich arbeite die neue Kollegin ein.
delegieren|делегировать|Ein guter Chef kann delegieren.
koordinieren|координировать|Sie koordiniert das Projekt.
optimieren|оптимизировать|Wir optimieren die Abläufe.
priorisieren|расставлять приоритеты|Wir müssen die Aufgaben priorisieren.
die Auslastung|загрузка|Die Auslastung liegt bei 90 Prozent.
der Engpass|узкое место, нехватка|Es gibt einen Engpass bei der Lieferung.
die Kapazität|мощность, вместимость|Unsere Kapazität ist begrenzt.
der Standort|местоположение (предприятия)|Der Standort wird geschlossen.
die Logistik|логистика|Die Logistik funktioniert reibungslos.
das Lager|склад|Die Ware ist auf Lager.
der Bestand|запас, наличие|Der Bestand wird geprüft.
der Versand|отправка, доставка|Der Versand ist kostenlos.
der Auftraggeber|заказчик|Der Auftraggeber ist zufrieden.
der Auftragnehmer|исполнитель заказа|Der Auftragnehmer liefert pünktlich.
die Zielvereinbarung|соглашение о целях|Die Zielvereinbarung gilt für ein Jahr.
die Fluktuation|текучесть кадров|Die Fluktuation in der Branche ist hoch.
die Betriebsversammlung|собрание коллектива|Morgen ist Betriebsversammlung.
die Probearbeit|пробный рабочий день|Ich habe morgen einen Tag Probearbeit.
das Arbeitszeugnis|характеристика с места работы|Ich brauche ein Arbeitszeugnis.
die Gleitzeit|гибкий график|Bei uns gibt es Gleitzeit.
das Homeoffice|удалённая работа|Freitags arbeite ich im Homeoffice.

# Учёба и исследования
die Geisteswissenschaften|гуманитарные науки|Sie studiert Geisteswissenschaften.
die Naturwissenschaften|естественные науки|Er interessiert sich für Naturwissenschaften.
die Sozialwissenschaften|общественные науки|Die Sozialwissenschaften untersuchen die Gesellschaft.
der Studiengang|учебная программа|Der Studiengang dauert sechs Semester.
das Hauptfach|основная специальность|Mein Hauptfach ist Geschichte.
das Nebenfach|дополнительная специальность|Im Nebenfach studiere ich Politik.
sich einschreiben|зачисляться|Ich habe mich an der Uni eingeschrieben.
die Studiengebühren|плата за обучение|Die Studiengebühren sind hoch.
das Seminar|семинар|Das Seminar findet dienstags statt.
die Hausarbeit|письменная работа (в вузе)|Ich schreibe eine Hausarbeit.
die Abschlussarbeit|дипломная работа|Die Abschlussarbeit ist fast fertig.
die Promotion|защита докторской|Nach der Promotion ging sie ins Ausland.
promovieren|получать докторскую степень|Er promoviert in Chemie.
der Lehrstuhl|кафедра|Sie hat einen Lehrstuhl für Physik.
der Dozent|преподаватель вуза|Der Dozent erklärt das Thema.
die Fakultät|факультет|Die Fakultät hat 3000 Studenten.
die Fachliteratur|специальная литература|Ich lese viel Fachliteratur.
die Quellenangabe|указание источника|Die Quellenangabe fehlt.
das Plagiat|плагиат|Das Plagiat wurde entdeckt.
die Fußnote|сноска|Die Erklärung steht in der Fußnote.
das Literaturverzeichnis|список литературы|Das Literaturverzeichnis ist am Ende.
die Gliederung|структура, план|Die Gliederung ist logisch.
die Einleitung|введение|Die Einleitung ist zu lang.
der Hauptteil|основная часть|Im Hauptteil werden die Ergebnisse vorgestellt.
die Fragestellung|постановка вопроса|Die Fragestellung ist interessant.
die Zielsetzung|постановка цели|Die Zielsetzung ist klar.
die Vorgehensweise|образ действий, метод|Die Vorgehensweise wird erklärt.
repräsentativ|репрезентативный|Die Umfrage ist repräsentativ.
empirisch|эмпирический|Das ist eine empirische Studie.
theoretisch|теоретический|Theoretisch ist das möglich.
die Kausalität|причинно-следственная связь|Die Kausalität ist nicht bewiesen.
die Korrelation|корреляция|Es gibt eine Korrelation zwischen beiden Werten.
die Variable|переменная|Wir untersuchen drei Variablen.
die Abweichung|отклонение|Die Abweichung ist gering.
die Messung|измерение|Die Messung wurde wiederholt.
die Genauigkeit|точность|Die Genauigkeit ist entscheidend.
die Prognose|прогноз|Die Prognose ist optimistisch.
die Erwachsenenbildung|образование взрослых|Sie arbeitet in der Erwachsenenbildung.
die Volkshochschule|народный университет|Ich lerne Spanisch an der Volkshochschule.
das Fernstudium|заочное обучение|Er macht ein Fernstudium.
die Allgemeinbildung|общее образование, эрудиция|Sie hat eine gute Allgemeinbildung.
die Begabung|одарённость|Er hat eine Begabung für Sprachen.
die Lernmethode|метод обучения|Welche Lernmethode passt zu dir?
der Leistungsnachweis|подтверждение успеваемости|Ich brauche noch einen Leistungsnachweis.
das Auslandssemester|семестр за границей|Ich mache ein Auslandssemester in Wien.

# Цифровые технологии
die Hardware|аппаратное обеспечение|Die Hardware ist veraltet.
der Prozessor|процессор|Der Prozessor ist sehr schnell.
der Arbeitsspeicher|оперативная память|Der Arbeitsspeicher reicht nicht.
die Festplatte|жёсткий диск|Die Festplatte ist voll.
das Betriebssystem|операционная система|Welches Betriebssystem nutzt du?
die Benutzeroberfläche|пользовательский интерфейс|Die Benutzeroberfläche ist einfach.
die Datenbank|база данных|Die Daten liegen in einer Datenbank.
der Server|сервер|Der Server ist ausgefallen.
die Datensicherung|резервное копирование|Die Datensicherung läuft nachts.
der Quellcode|исходный код|Der Quellcode ist öffentlich.
programmieren|программировать|Sie programmiert eine App.
die Programmiersprache|язык программирования|Welche Programmiersprache lernst du?
beheben|устранять|Der Fehler wurde behoben.
die Fehlermeldung|сообщение об ошибке|Es erscheint eine Fehlermeldung.
abstürzen|зависать, падать|Der Computer ist abgestürzt.
die Sicherheitslücke|уязвимость|Die Sicherheitslücke wurde geschlossen.
die Schadsoftware|вредоносная программа|Der Rechner ist mit Schadsoftware infiziert.
der Zugriff|доступ|Ich habe keinen Zugriff auf die Datei.
zugreifen|получать доступ|Wer kann auf die Daten zugreifen?
die Berechtigung|право, разрешение|Dafür fehlt Ihnen die Berechtigung.
das Benutzerkonto|учётная запись|Ihr Benutzerkonto wurde gesperrt.
sperren|блокировать|Die Karte wurde gesperrt.
die Bandbreite|пропускная способность; спектр|Die Bandbreite reicht nicht für Videos.
der Mobilfunk|мобильная связь|Der Mobilfunk ist hier schlecht.
das Endgerät|конечное устройство|Die App läuft auf allen Endgeräten.
der Sensor|датчик|Der Sensor misst die Temperatur.
die Steuerung|управление|Die Steuerung erfolgt per App.
steuern|управлять|Die Heizung lässt sich per Handy steuern.
die Vernetzung|объединение в сеть|Die Vernetzung der Geräte nimmt zu.
die Drohne|дрон|Die Drohne macht Fotos aus der Luft.
die Elektromobilität|электромобильность|Die Elektromobilität wird gefördert.
die Ladestation|зарядная станция|Es gibt zu wenige Ladestationen.
der Stromverbrauch|потребление электроэнергии|Der Stromverbrauch ist gesunken.
der Wirkungsgrad|КПД|Der Wirkungsgrad der Anlage ist hoch.
die Suchmaschine|поисковая система|Ich benutze eine Suchmaschine.
der Bildschirmschoner|экранная заставка|Der Bildschirmschoner startet nach fünf Minuten.
die Tastenkombination|сочетание клавиш|Kennst du die Tastenkombination zum Kopieren?
der Datenträger|носитель данных|Der Datenträger ist beschädigt.
die Auflösung|разрешение (экрана); роспуск|Die Auflösung des Bildschirms ist hoch.
das Update|обновление|Das Update dauert zehn Minuten.
die Cloud|облако (хранилище)|Die Fotos liegen in der Cloud.
virtuell|виртуальный|Das Treffen findet virtuell statt.
digital|цифровой|Die Akten sind digital.
automatisch|автоматический|Die Tür öffnet sich automatisch.

# Финансы и права потребителя
das Girokonto|расчётный счёт|Mein Gehalt kommt aufs Girokonto.
das Sparkonto|сберегательный счёт|Ich habe Geld auf dem Sparkonto.
der Dauerauftrag|постоянное платёжное поручение|Die Miete zahle ich per Dauerauftrag.
die Lastschrift|прямое списание|Der Betrag wird per Lastschrift eingezogen.
abbuchen|списывать (со счёта)|Der Betrag wurde abgebucht.
der Kontoauszug|выписка со счёта|Ich prüfe den Kontoauszug.
der Kontostand|остаток на счёте|Der Kontostand ist niedrig.
überziehen|превышать (лимит)|Ich habe mein Konto überzogen.
die Rate|взнос, часть платежа|Ich zahle in zwölf Raten.
die Hypothek|ипотека|Wir haben eine Hypothek aufgenommen.
das Darlehen|ссуда|Das Darlehen läuft zehn Jahre.
der Zinssatz|процентная ставка|Der Zinssatz ist gestiegen.
die Tilgung|погашение|Die Tilgung dauert zwanzig Jahre.
bürgen|поручаться|Meine Eltern bürgen für mich.
die Geldanlage|вложение денег|Immobilien sind eine sichere Geldanlage.
anlegen|вкладывать; создавать|Er legt sein Geld in Aktien an.
das Wertpapier|ценная бумага|Er handelt mit Wertpapieren.
die Steuererklärung|налоговая декларация|Ich muss die Steuererklärung machen.
das Finanzamt|налоговая инспекция|Das Finanzamt hat geschrieben.
absetzen|вычитать (из налогов); снимать|Das kann man von der Steuer absetzen.
die Mehrwertsteuer|НДС|Die Mehrwertsteuer beträgt 19 Prozent.
brutto|брутто, до вычетов|Ich verdiene 3000 Euro brutto.
netto|нетто, после вычетов|Netto bleibt weniger übrig.
der Verbraucherschutz|защита прав потребителей|Der Verbraucherschutz ist wichtig.
die Gewährleistung|гарантия (по закону)|Die Gewährleistung gilt zwei Jahre.
das Widerrufsrecht|право на отказ от договора|Sie haben ein Widerrufsrecht von 14 Tagen.
widerrufen|отзывать, отменять|Ich möchte den Vertrag widerrufen.
die Rückerstattung|возврат денег|Die Rückerstattung dauert eine Woche.
erstatten|возмещать|Die Kosten werden erstattet.
der Kaufvertrag|договор купли-продажи|Der Kaufvertrag ist gültig.
das Kleingedruckte|мелкий шрифт (в договоре)|Lies immer das Kleingedruckte.
die Haftpflichtversicherung|страхование ответственности|Eine Haftpflichtversicherung ist sinnvoll.
die Selbstbeteiligung|франшиза (в страховке)|Die Selbstbeteiligung beträgt 300 Euro.
der Versicherungsfall|страховой случай|Im Versicherungsfall rufen Sie uns an.
die Schuldenfalle|долговая яма|Viele geraten in die Schuldenfalle.
zahlungsfähig|платёжеспособный|Der Kunde ist nicht mehr zahlungsfähig.
der Gläubiger|кредитор|Die Gläubiger fordern ihr Geld.
der Schuldner|должник|Der Schuldner zahlt in Raten.
die Preissteigerung|рост цен|Die Preissteigerung ist deutlich.
die Kaufkraft|покупательная способность|Die Kaufkraft sinkt.
das Preis-Leistungs-Verhältnis|соотношение цены и качества|Das Preis-Leistungs-Verhältnis stimmt.
erschwinglich|доступный по цене|Die Miete ist erschwinglich.
die Mahngebühr|пеня за просрочку|Es fällt eine Mahngebühr an.
fällig|подлежащий оплате|Die Rechnung ist am Freitag fällig.

# Совместная жизнь и семья
das Zusammenleben|совместная жизнь|Das Zusammenleben funktioniert gut.
das Miteinander|взаимодействие, общность|Ein gutes Miteinander ist wichtig.
die Zivilgesellschaft|гражданское общество|Die Zivilgesellschaft ist aktiv.
das Engagement|вовлечённость, активность|Ihr Engagement ist beeindruckend.
sich engagieren|активно участвовать|Er engagiert sich für Flüchtlinge.
die Bürgerinitiative|гражданская инициатива|Die Bürgerinitiative sammelt Unterschriften.
die Petition|петиция|Die Petition hat 10 000 Unterschriften.
das Mitspracherecht|право голоса при принятии решений|Die Mieter fordern ein Mitspracherecht.
die Teilhabe|участие (в жизни общества)|Bildung ermöglicht Teilhabe.
die Inklusion|инклюзия|Inklusion beginnt in der Schule.
barrierefrei|безбарьерный|Der Bahnhof ist barrierefrei.
die Gleichstellung|уравнивание в правах|Die Gleichstellung ist gesetzlich verankert.
die Kinderbetreuung|присмотр за детьми|Die Kinderbetreuung ist teuer.
die Kita|детский сад (полного дня)|Unser Sohn geht in die Kita.
die Ganztagsschule|школа полного дня|Die Kinder besuchen eine Ganztagsschule.
das Elterngeld|пособие по уходу за ребёнком|Sie bekommt ein Jahr Elterngeld.
das Kindergeld|детское пособие|Das Kindergeld wurde erhöht.
die Patchworkfamilie|смешанная семья|Sie leben in einer Patchworkfamilie.
der Lebensgefährte|гражданский муж, спутник жизни|Sie kommt mit ihrem Lebensgefährten.
das Sorgerecht|право опеки|Beide Eltern haben das Sorgerecht.
der Unterhalt|алименты, содержание|Er zahlt Unterhalt für zwei Kinder.
adoptieren|усыновлять|Sie haben ein Kind adoptiert.
die Pflegefamilie|приёмная семья|Das Kind lebt in einer Pflegefamilie.
das Seniorenheim|дом престарелых|Meine Oma lebt im Seniorenheim.
die Pflegekraft|сиделка, медработник по уходу|Es fehlen Pflegekräfte.
die Vereinsamung|одиночество, изоляция|Vereinsamung im Alter ist ein Problem.
der Generationenkonflikt|конфликт поколений|Der Generationenkonflikt ist nichts Neues.
die Randgruppe|маргинальная группа|Randgruppen brauchen Unterstützung.
der Außenseiter|аутсайдер|In der Schule war er ein Außenseiter.
die Fremdenfeindlichkeit|ксенофобия|Fremdenfeindlichkeit darf keinen Platz haben.
der Rassismus|расизм|Sie kämpft gegen Rassismus.
die Toleranz|терпимость|Toleranz ist eine wichtige Tugend.
die Zivilcourage|гражданское мужество|Sie hat Zivilcourage gezeigt.
das Gemeinwohl|общее благо|Das dient dem Gemeinwohl.
die Wertvorstellung|представление о ценностях|Unsere Wertvorstellungen sind verschieden.
der Wertewandel|смена ценностей|Der Wertewandel betrifft alle Generationen.
die Leistungsgesellschaft|общество достижений|Wir leben in einer Leistungsgesellschaft.
der Leistungsdruck|давление, требование результата|Der Leistungsdruck in der Schule ist hoch.
der Wohlfahrtsstaat|социальное государство|Der Wohlfahrtsstaat steht unter Druck.
die Landflucht|отток из села|Die Landflucht nimmt zu.
die Tugend|добродетель|Geduld ist eine Tugend.
die Sitten und Gebräuche|нравы и обычаи|Jedes Land hat seine Sitten und Gebräuche.
die Herkunft|происхождение|Seine Herkunft spielt keine Rolle.
die Zugehörigkeit|принадлежность|Das Gefühl der Zugehörigkeit ist wichtig.
die Identität|идентичность|Sprache ist Teil der Identität.
die Erwerbstätigkeit|трудовая занятость|Die Erwerbstätigkeit von Frauen steigt.
der Ruhestand|выход на пенсию, отставка|Er geht bald in den Ruhestand.
der Lebensabend|старость|Sie genießt ihren Lebensabend.
erben|наследовать|Sie hat ein Haus geerbt.
das Testament|завещание|Er hat ein Testament gemacht.
die Beerdigung|похороны|Die Beerdigung ist am Freitag.

# Политика и государство
die Bundesregierung|федеральное правительство|Die Bundesregierung berät über das Gesetz.
der Bundeskanzler|федеральный канцлер|Der Bundeskanzler hält eine Rede.
das Ministerium|министерство|Das Ministerium prüft den Fall.
der Minister|министр|Der Minister ist zurückgetreten.
das Bundesland|федеральная земля|Bayern ist das größte Bundesland.
die Gemeinde|община, муниципалитет|Die Gemeinde baut eine neue Schule.
der Stadtrat|городской совет|Der Stadtrat hat zugestimmt.
der Föderalismus|федерализм|Der Föderalismus prägt Deutschland.
die Gewaltenteilung|разделение властей|Die Gewaltenteilung schützt die Demokratie.
der Rechtsstaat|правовое государство|Deutschland ist ein Rechtsstaat.
die Bundeswehr|бундесвер|Die Bundeswehr sucht Personal.
die Volksabstimmung|референдум|Die Volksabstimmung findet im Mai statt.
das Wahlrecht|избирательное право|Frauen haben seit 1918 das Wahlrecht.
die Wahlbeteiligung|явка на выборах|Die Wahlbeteiligung war hoch.
der Wähler|избиратель|Die Wähler haben entschieden.
die Fraktion|фракция|Die Fraktion stimmt geschlossen ab.
der Ausschuss|комитет, комиссия|Der Ausschuss tagt nicht öffentlich.
die Legislaturperiode|срок полномочий парламента|Die Legislaturperiode dauert vier Jahre.
der Staatshaushalt|государственный бюджет|Der Staatshaushalt wurde beschlossen.
die Staatsverschuldung|государственный долг|Die Staatsverschuldung steigt.
das Defizit|дефицит|Das Defizit ist gewachsen.
die Sparmaßnahme|мера экономии|Die Sparmaßnahmen treffen alle.
die Innenpolitik|внутренняя политика|Die Innenpolitik bestimmt den Wahlkampf.
die Sozialpolitik|социальная политика|Die Sozialpolitik ist umstritten.
die Lobby|лобби|Die Lobby ist mächtig.
die Transparenz|прозрачность|Die Bürger fordern mehr Transparenz.
der Populismus|популизм|Der Populismus nimmt zu.
der Extremismus|экстремизм|Der Staat bekämpft Extremismus.
die Diplomatie|дипломатия|Die Diplomatie hat versagt.
der Botschafter|посол|Der Botschafter wurde einbestellt.
die Botschaft|посольство; послание|Ich muss zur Botschaft.
das Konsulat|консульство|Das Visum gibt es im Konsulat.
das Gipfeltreffen|саммит|Das Gipfeltreffen findet in Brüssel statt.
die Vereinten Nationen|Организация Объединённых Наций|Die Vereinten Nationen wurden 1945 gegründet.
die Europäische Union|Европейский союз|Die Europäische Union hat 27 Mitglieder.
der Mitgliedstaat|государство-член|Alle Mitgliedstaaten müssen zustimmen.
die Souveränität|суверенитет|Die Souveränität des Staates ist unantastbar.
die Grundrechte|основные права|Die Grundrechte stehen in der Verfassung.
die Meinungsbildung|формирование мнения|Medien beeinflussen die Meinungsbildung.
der Machtwechsel|смена власти|Nach der Wahl kam es zum Machtwechsel.
die Amtszeit|срок полномочий|Seine Amtszeit endet nächstes Jahr.
regieren|править|Die Partei regiert seit zehn Jahren.
die Kundgebung|митинг|Tausende kamen zur Kundgebung.
die Volksvertretung|народное представительство|Das Parlament ist die Volksvertretung.
der Staatsbürger|гражданин государства|Jeder Staatsbürger hat Rechte und Pflichten.
die Einbürgerung|получение гражданства|Die Einbürgerung dauert mehrere Jahre.

# Чувства: оттенки
die Zuneigung|симпатия, привязанность|Er zeigt seine Zuneigung offen.
die Abneigung|неприязнь|Sie hat eine Abneigung gegen Lärm.
die Begeisterung|восторг|Die Begeisterung war groß.
die Leidenschaft|страсть|Musik ist seine Leidenschaft.
leidenschaftlich|страстный|Sie ist eine leidenschaftliche Köchin.
die Verzweiflung|отчаяние|Aus Verzweiflung rief sie die Polizei.
die Erleichterung|облегчение|Zu meiner Erleichterung ging alles gut.
verlegen|смущённый|Er lächelte verlegen.
die Scham|стыд|Vor Scham wurde sie rot.
die Reue|раскаяние|Er zeigte keine Reue.
die Schadenfreude|злорадство|Schadenfreude ist nicht nett.
das Heimweh|тоска по дому|Im Ausland hatte ich Heimweh.
das Fernweh|тяга к путешествиям|Im Winter bekomme ich Fernweh.
die Langeweile|скука|Aus Langeweile sah er fern.
die Neugier|любопытство|Aus Neugier öffnete sie den Brief.
die Bewunderung|восхищение|Ich habe große Bewunderung für sie.
die Verachtung|презрение|Er sah ihn mit Verachtung an.
verachten|презирать|Ich verachte Lügner.
der Hass|ненависть|Hass löst keine Probleme.
hassen|ненавидеть|Ich hasse es zu warten.
die Rache|месть|Er sann auf Rache.
die Empörung|возмущение|Die Empörung war groß.
empört|возмущённый|Die Bürger sind empört.
gereizt|раздражённый|Er reagierte gereizt.
die Anspannung|напряжение|Die Anspannung vor der Prüfung war groß.
angespannt|напряжённый|Die Lage ist angespannt.
die Unsicherheit|неуверенность|Die Unsicherheit ist groß.
verunsichert|сбитый с толку, неуверенный|Viele Kunden sind verunsichert.
das Misstrauen|недоверие|Das Misstrauen wächst.
misstrauisch|недоверчивый|Sie ist misstrauisch gegenüber Fremden.
kränken|обижать, задевать|Deine Worte haben mich gekränkt.
die Versöhnung|примирение|Nach dem Streit kam die Versöhnung.
die Wertschätzung|признание, высокая оценка|Wertschätzung motiviert Mitarbeiter.
die Anerkennung|признание|Sie verdient Anerkennung.
die Geborgenheit|чувство защищённости|Kinder brauchen Geborgenheit.
die Zärtlichkeit|нежность|Er sprach mit großer Zärtlichkeit.
die Fürsorge|забота, попечение|Die Fürsorge der Eltern ist wichtig.
fürsorglich|заботливый|Sie ist eine fürsorgliche Mutter.
das Mitgefühl|сочувствие|Mein Mitgefühl gilt der Familie.
die Gleichgültigkeit|равнодушие|Seine Gleichgültigkeit ärgert mich.
die Ehrfurcht|благоговение|Wir standen voller Ehrfurcht vor dem Dom.
die Dankbarkeit|благодарность|Ich empfinde tiefe Dankbarkeit.
die Zufriedenheit|удовлетворённость|Die Zufriedenheit der Kunden ist hoch.
die Unzufriedenheit|недовольство|Die Unzufriedenheit wächst.
die Rührung|умиление, растроганность|Vor Rührung konnte sie nicht sprechen.
gerührt|растроганный|Ich bin sehr gerührt.
die Vorfreude|радостное предвкушение|Die Vorfreude auf den Urlaub ist groß.
der Kummer|горе, огорчение|Sie hat großen Kummer.
die Hemmschwelle|психологический барьер|Die Hemmschwelle, um Hilfe zu bitten, ist hoch.

# Природа и география
der Kontinent|континент|Afrika ist ein riesiger Kontinent.
der Ozean|океан|Der Ozean ist tief.
die Halbinsel|полуостров|Italien ist eine Halbinsel.
die Bucht|бухта|Das Boot liegt in der Bucht.
die Mündung|устье|Die Stadt liegt an der Mündung des Flusses.
der Bach|ручей|Der Bach fließt durch das Dorf.
der Teich|пруд|Im Teich schwimmen Fische.
der Sumpf|болото|Im Sumpf leben viele Vögel.
die Steppe|степь|Die Steppe ist endlos.
der Vulkan|вулкан|Der Vulkan ist noch aktiv.
der Ausbruch|извержение; вспышка|Der Ausbruch kam überraschend.
die Lawine|лавина|Eine Lawine hat die Straße verschüttet.
der Erdrutsch|оползень|Nach dem Regen gab es einen Erdrutsch.
der Orkan|ураган|Der Orkan richtete große Schäden an.
der Niederschlag|осадки|Im Herbst fällt viel Niederschlag.
die Luftfeuchtigkeit|влажность воздуха|Die Luftfeuchtigkeit ist hoch.
die Hitzewelle|волна жары|Die Hitzewelle dauert an.
der Frost|мороз|In der Nacht gibt es Frost.
das Glatteis|гололёд|Vorsicht, Glatteis!
der Hagel|град|Der Hagel hat die Ernte zerstört.
der Tau|роса|Am Morgen liegt Tau auf dem Gras.
die Vegetation|растительность|Die Vegetation ist üppig.
das Säugetier|млекопитающее|Der Wal ist ein Säugetier.
das Reptil|рептилия|Die Schlange ist ein Reptil.
das Raubtier|хищник|Der Wolf ist ein Raubtier.
die Beute|добыча|Der Löwe jagt seine Beute.
das Nest|гнездо|Der Vogel baut ein Nest.
das Revier|территория, участок|Der Hund verteidigt sein Revier.
der Zugvogel|перелётная птица|Im Herbst ziehen die Zugvögel nach Süden.
der Winterschlaf|зимняя спячка|Der Bär hält Winterschlaf.
das Naturschutzgebiet|заповедник|Das Naturschutzgebiet darf man nicht betreten.
der Nationalpark|национальный парк|Wir wandern im Nationalpark.
die Wildnis|дикая местность|Sie leben in der Wildnis.
der Wolf|волк|Der Wolf kehrt nach Deutschland zurück.
der Fuchs|лиса|Der Fuchs ist schlau.
der Hirsch|олень|Im Wald sahen wir einen Hirsch.
das Reh|косуля|Ein Reh stand auf der Wiese.
der Adler|орёл|Der Adler kreist über dem Tal.
die Eule|сова|Die Eule jagt nachts.
die Schlange|змея; очередь|Die Schlange ist giftig.
der Frosch|лягушка|Der Frosch sitzt am Teich.
der Schmetterling|бабочка|Ein Schmetterling sitzt auf der Blume.
die Ameise|муравей|Ameisen sind sehr fleißig.
die Spinne|паук|Ich habe Angst vor Spinnen.
die Eiche|дуб|Die Eiche ist hundert Jahre alt.
die Tanne|ель, пихта|Zu Weihnachten kaufen wir eine Tanne.
die Birke|берёза|Vor dem Haus steht eine Birke.
der Ast|сук, ветка|Der Ast ist abgebrochen.
die Wurzel|корень|Die Wurzeln sind tief.
der Stamm|ствол; племя|Der Stamm ist sehr dick.

# Глаголы: управление и решения
abbauen|сокращать, демонтировать|Die Firma baut Stellen ab.
ablenken|отвлекать|Lenk mich bitte nicht ab.
abschätzen|оценивать, прикидывать|Die Folgen lassen sich schwer abschätzen.
anfechten|оспаривать|Er will das Urteil anfechten.
anführen|приводить (довод); возглавлять|Sie führte mehrere Beispiele an.
angehen|приступать; касаться|Wir müssen das Problem angehen.
anknüpfen|продолжать, опираться на|Ich möchte an Ihre Worte anknüpfen.
anordnen|распоряжаться; располагать|Der Chef ordnete Überstunden an.
anregen|побуждать, предлагать|Ich möchte eine Diskussion anregen.
ansprechen|заговаривать; затрагивать|Ich möchte ein Problem ansprechen.
antreiben|подгонять, приводить в движение|Was treibt dich an?
anweisen|давать указание|Er wies die Mitarbeiter an zu warten.
aufarbeiten|прорабатывать, разбирать|Die Vergangenheit muss aufgearbeitet werden.
aufdecken|раскрывать|Journalisten deckten den Skandal auf.
auffassen|воспринимать, понимать|Wie soll ich das auffassen?
aufgreifen|подхватывать (тему)|Ich greife Ihren Vorschlag auf.
aufklären|разъяснять; раскрывать|Die Polizei klärte den Fall auf.
auflisten|перечислять|Bitte listen Sie alle Kosten auf.
auflösen|распускать, растворять|Das Parlament wurde aufgelöst.
aufrechterhalten|поддерживать, сохранять|Wir wollen den Kontakt aufrechterhalten.
aufteilen|разделять|Wir teilen die Arbeit auf.
aufwerten|повышать ценность|Der Park wertet das Viertel auf.
ausarbeiten|разрабатывать|Wir arbeiten einen Plan aus.
ausbauen|расширять, развивать|Das Netz wird ausgebaut.
ausblenden|игнорировать, скрывать|Diese Frage wird oft ausgeblendet.
ausführen|выполнять; излагать|Der Auftrag wurde ausgeführt.
ausgleichen|уравновешивать, компенсировать|Der Verlust wird ausgeglichen.
aushandeln|выторговывать, согласовывать|Sie handelten einen Kompromiss aus.
ausschöpfen|исчерпывать, использовать полностью|Wir haben alle Möglichkeiten ausgeschöpft.
ausweichen|уклоняться|Er wich der Frage aus.
ausweiten|расширять|Der Streik wird ausgeweitet.
beabsichtigen|намереваться|Ich beabsichtige zu kündigen.
bearbeiten|обрабатывать|Ihr Antrag wird bearbeitet.
beaufsichtigen|надзирать, присматривать|Sie beaufsichtigt die Kinder.
bedrohen|угрожать|Die Art ist vom Aussterben bedroht.
befolgen|следовать, соблюдать|Bitte befolgen Sie die Anweisungen.
befördern|перевозить; повышать в должности|Sie wurde zur Leiterin befördert.
befragen|опрашивать|Wir haben 500 Personen befragt.
befreien|освобождать|Er wurde von der Gebühr befreit.
begehen|совершать (ошибку, преступление)|Er hat einen Fehler begangen.
begünstigen|благоприятствовать|Das Wetter begünstigt die Ernte.
behindern|препятствовать|Der Unfall behindert den Verkehr.
beibehalten|сохранять|Wir behalten das System bei.
bemängeln|критиковать, указывать на недостатки|Kunden bemängeln den Service.
benennen|называть|Können Sie die Ursache benennen?
bereichern|обогащать|Reisen bereichert das Leben.
bereitstellen|предоставлять|Die Stadt stellt Räume bereit.
beschleunigen|ускорять|Wir müssen das Verfahren beschleunigen.
beschuldigen|обвинять|Er wird des Diebstahls beschuldigt.
besteuern|облагать налогом|Hohe Einkommen werden stärker besteuert.
sich beteiligen|участвовать|Alle beteiligen sich an den Kosten.
betreiben|вести, эксплуатировать|Sie betreibt ein kleines Café.
bevorstehen|предстоять|Große Veränderungen stehen bevor.
bewilligen|одобрять, выделять|Der Antrag wurde bewilligt.
bezeichnen|обозначать, называть|Er bezeichnet sich als Experten.
billigen|одобрять|Das Parlament billigte den Plan.
bündeln|объединять, концентрировать|Wir bündeln unsere Kräfte.
dämpfen|приглушать, сдерживать|Die Nachricht dämpfte die Stimmung.
darlegen|излагать|Bitte legen Sie Ihre Gründe dar.
decken|покрывать|Die Versicherung deckt den Schaden.
definieren|определять|Wie definieren Sie Erfolg?
dokumentieren|документировать|Der Verlauf wird dokumentiert.
dominieren|доминировать|Ein Thema dominiert die Debatte.
durchschauen|видеть насквозь|Ich habe seinen Plan durchschaut.
eindringen|проникать|Wasser dringt in den Keller ein.
einfordern|требовать, взыскивать|Die Mitarbeiter fordern ihre Rechte ein.
eingehen|вдаваться; идти на|Darauf möchte ich näher eingehen.
eingestehen|признавать|Er gestand seinen Fehler ein.
einhalten|соблюдать|Bitte halten Sie die Frist ein.
einleiten|начинать, вводить|Die Polizei leitete eine Untersuchung ein.
einordnen|классифицировать, относить|Wie ordnen Sie das Ergebnis ein?
einsehen|осознавать; просматривать|Ich sehe meinen Fehler ein.
einstufen|классифицировать, оценивать|Das Risiko wird als hoch eingestuft.
eintreten|вступать; наступать|Er trat in die Partei ein.
einwilligen|соглашаться|Die Eltern müssen einwilligen.
entfalten|раскрывать, развивать|Hier kann sie ihr Talent entfalten.
entgegenwirken|противодействовать|Wir müssen dem Trend entgegenwirken.
entgehen|ускользать|Das ist mir entgangen.
entkräften|опровергать, ослаблять|Er konnte den Vorwurf entkräften.
entschädigen|возмещать ущерб|Die Opfer wurden entschädigt.
entschärfen|смягчать, разряжать|Das Gespräch entschärfte den Konflikt.
entwerfen|проектировать, набрасывать|Sie entwirft Möbel.
entziehen|лишать, отзывать|Ihm wurde der Führerschein entzogen.
erarbeiten|разрабатывать, вырабатывать|Wir erarbeiten ein Konzept.
erbringen|приносить, оказывать|Die Firma erbringt Dienstleistungen.
ergreifen|предпринимать; хватать|Sie ergriff die Gelegenheit.
erheben|взимать; собирать (данные)|Die Stadt erhebt eine Gebühr.
erlangen|достигать, приобретать|Er erlangte große Bekanntheit.
erlassen|издавать (закон); освобождать|Die Regierung erließ ein Verbot.
ermahnen|увещевать, призывать|Der Lehrer ermahnte die Schüler.
ermutigen|ободрять|Sie ermutigte mich weiterzumachen.
erschließen|осваивать, открывать|Die Firma erschließt neue Märkte.
erschweren|затруднять|Der Regen erschwert die Arbeit.
erstellen|составлять, создавать|Ich erstelle eine Liste.
erwägen|обдумывать, рассматривать|Wir erwägen einen Umzug.
erwerben|приобретать|Er erwarb ein Grundstück.
festhalten|удерживать; фиксировать|Wir halten das Ergebnis schriftlich fest.
fortsetzen|продолжать|Wir setzen das Gespräch morgen fort.
freisetzen|высвобождать|Dabei wird Energie freigesetzt.
geraten|попадать, оказываться|Die Firma geriet in Not.
gewähren|предоставлять|Die Bank gewährt einen Kredit.
gewichten|взвешивать, расставлять по значимости|Die Kriterien werden unterschiedlich gewichtet.
hemmen|тормозить, сдерживать|Bürokratie hemmt das Wachstum.
heranziehen|привлекать, использовать|Wir ziehen Experten heran.
herausfordern|бросать вызов|Die Aufgabe fordert mich heraus.
herbeiführen|приводить к, вызывать|Er führte eine Entscheidung herbei.
hervorgehen|следовать, вытекать|Aus dem Bericht geht hervor, dass er recht hatte.
hinauszögern|оттягивать|Sie zögern die Entscheidung hinaus.
hinnehmen|мириться с|Das kann ich nicht hinnehmen.
kennzeichnen|маркировать, характеризовать|Die Produkte sind gekennzeichnet.
klarstellen|прояснять, уточнять|Ich möchte etwas klarstellen.
kürzen|сокращать|Das Budget wurde gekürzt.
lockern|ослаблять, смягчать|Die Regeln wurden gelockert.
mildern|смягчать|Das Medikament mildert die Schmerzen.
missachten|пренебрегать, нарушать|Er hat die Vorschrift missachtet.
missbrauchen|злоупотреблять|Er missbrauchte ihr Vertrauen.
mitwirken|содействовать, участвовать|Viele haben an dem Projekt mitgewirkt.
nachgeben|уступать|Schließlich gab er nach.
nachholen|навёрстывать|Ich hole den Termin nach.
nachlassen|ослабевать|Der Schmerz lässt nach.
preisgeben|выдавать, раскрывать|Er gab keine Details preis.
rechtfertigen|оправдывать|Wie rechtfertigen Sie diese Entscheidung?
regulieren|регулировать|Der Markt wird reguliert.
schlichten|улаживать (спор)|Ein Vermittler schlichtete den Streit.
schwächen|ослаблять|Die Krise schwächt die Wirtschaft.
sichern|обеспечивать, сохранять|Das sichert Arbeitsplätze.
sicherstellen|обеспечивать, гарантировать|Wir müssen die Qualität sicherstellen.
stärken|укреплять|Sport stärkt das Herz.
stützen|поддерживать, опирать|Die Daten stützen die These.
übereinstimmen|совпадать, соглашаться|Die Ergebnisse stimmen überein.
übergehen|переходить; обходить|Wir gehen zum nächsten Punkt über.
überlassen|предоставлять, оставлять|Das überlasse ich dir.
übersehen|не заметить, упустить|Ich habe den Fehler übersehen.
übertragen|передавать, переносить|Das Spiel wird live übertragen.
überwinden|преодолевать|Sie hat ihre Angst überwunden.
umfassen|охватывать, включать|Der Bericht umfasst hundert Seiten.
umgehen|обходить; обращаться|Wie gehst du mit Stress um?
umstellen|перестраивать, переводить|Wir stellen auf Sommerzeit um.
unterlassen|воздерживаться, не делать|Bitte unterlassen Sie das Rauchen.
untermauern|подкреплять|Zahlen untermauern das Argument.
unterziehen|подвергать|Er unterzog sich einer Operation.
verankern|закреплять|Das Recht ist im Gesetz verankert.
veranlassen|побуждать, распоряжаться|Was hat Sie dazu veranlasst?
verantworten|нести ответственность за|Das muss der Chef verantworten.
verbreiten|распространять|Die Nachricht verbreitete sich schnell.
verdanken|быть обязанным|Das verdanke ich meinen Eltern.
vereinfachen|упрощать|Wir wollen das Verfahren vereinfachen.
vereinen|объединять|Der Sport vereint Menschen.
verfassen|составлять, писать|Sie verfasste einen Bericht.
verfolgen|преследовать, следить|Wir verfolgen ein klares Ziel.
verhängen|назначать, вводить (наказание)|Das Gericht verhängte eine Strafe.
verkörpern|воплощать|Sie verkörpert den Erfolg der Firma.
verlagern|перемещать, переносить|Die Produktion wird ins Ausland verlagert.
verleihen|вручать; давать напрокат|Der Preis wird jährlich verliehen.
verpflichten|обязывать|Der Vertrag verpflichtet uns dazu.
verringern|уменьшать|Wir wollen die Kosten verringern.
versagen|отказывать; терпеть неудачу|Die Bremsen haben versagt.
verschaffen|доставать, обеспечивать|Er verschaffte sich einen Überblick.
verschlechtern|ухудшать|Die Lage hat sich verschlechtert.
verschweigen|умалчивать|Er hat die Wahrheit verschwiegen.
verüben|совершать (преступление)|Der Anschlag wurde nachts verübt.
verwalten|управлять, администрировать|Sie verwaltet das Budget.
verweigern|отказывать|Er verweigerte die Aussage.
verzeichnen|регистрировать, отмечать|Die Firma verzeichnet ein Wachstum.
verzögern|задерживать|Das Wetter verzögert den Bau.
vollziehen|осуществлять, совершать|Der Wandel vollzieht sich langsam.
vorgehen|действовать, поступать|Wie gehen wir jetzt vor?
vorliegen|иметься, быть представленным|Die Ergebnisse liegen vor.
vornehmen|предпринимать, производить|Wir nehmen einige Änderungen vor.
vorschreiben|предписывать|Das Gesetz schreibt das vor.
vortragen|докладывать, излагать|Sie trug ihre Ergebnisse vor.
vorwegnehmen|предвосхищать|Ich möchte das Ergebnis nicht vorwegnehmen.
wahren|соблюдать, хранить|Wir müssen den Schein wahren.
widerspiegeln|отражать|Die Zahlen spiegeln die Lage wider.
widmen|посвящать|Sie widmet sich ganz der Forschung.
würdigen|отдавать должное|Seine Arbeit wurde gewürdigt.
zugestehen|признавать, уступать|Das muss ich dir zugestehen.
zulassen|допускать|Das lasse ich nicht zu.
zurückweisen|отвергать|Er wies die Vorwürfe zurück.
zusammenhängen|быть связанным|Das hängt mit dem Wetter zusammen.
zuschreiben|приписывать|Der Erfolg wird ihm zugeschrieben.
zusichern|заверять, гарантировать|Man hat mir Hilfe zugesichert.
zuspitzen|обострять|Die Lage spitzt sich zu.
zustehen|полагаться, причитаться|Das Geld steht dir zu.
zuweisen|назначать, выделять|Jedem wurde ein Platz zugewiesen.

# Прилагательные: оценка и анализ
abwechslungsreich|разнообразный|Die Arbeit ist abwechslungsreich.
akzeptabel|приемлемый|Das Angebot ist akzeptabel.
allgemein|общий|Das ist allgemein bekannt.
anfällig|подверженный, уязвимый|Das System ist anfällig für Fehler.
anhaltend|продолжительный, непрекращающийся|Der anhaltende Regen führt zu Überschwemmungen.
aufschlussreich|показательный, познавательный|Das Gespräch war sehr aufschlussreich.
ausdrücklich|настоятельный, прямо выраженный|Das ist ausdrücklich verboten.
ausgewogen|сбалансированный|Sie ernährt sich ausgewogen.
ausschlaggebend|решающий|Der Preis war ausschlaggebend.
außerordentlich|чрезвычайный|Das ist außerordentlich wichtig.
bedenklich|вызывающий опасения|Die Entwicklung ist bedenklich.
bedürftig|нуждающийся|Die Spenden gehen an bedürftige Familien.
begehrt|востребованный, желанный|Die Wohnungen sind sehr begehrt.
beharrlich|настойчивый|Er fragte beharrlich nach.
bemerkenswert|примечательный|Das ist eine bemerkenswerte Leistung.
benachbart|соседний|Die benachbarten Länder helfen.
berechenbar|предсказуемый|Sein Verhalten ist berechenbar.
beträchtlich|значительный|Der Schaden ist beträchtlich.
bezeichnend|характерный|Das ist bezeichnend für ihn.
bürokratisch|бюрократический|Das Verfahren ist sehr bürokratisch.
dauerhaft|долговременный|Wir suchen eine dauerhafte Lösung.
dürftig|скудный|Die Ergebnisse sind dürftig.
durchschnittlich|средний|Das Gehalt ist durchschnittlich.
eigenständig|самостоятельный|Sie arbeitet eigenständig.
einseitig|односторонний|Die Darstellung ist einseitig.
einzigartig|уникальный|Die Landschaft ist einzigartig.
empfehlenswert|рекомендуемый|Das Buch ist sehr empfehlenswert.
enorm|огромный|Der Druck ist enorm.
entbehrlich|необязательный, без чего можно обойтись|Dieser Punkt ist entbehrlich.
ergiebig|продуктивный, обильный|Die Diskussion war ergiebig.
erstrebenswert|желанный, достойный стремления|Das ist ein erstrebenswertes Ziel.
etabliert|устоявшийся|Das ist ein etabliertes Unternehmen.
exakt|точный|Wir brauchen exakte Zahlen.
existenziell|жизненно важный|Das ist eine existenzielle Frage.
fachkundig|компетентный|Die Beratung war fachkundig.
flächendeckend|повсеместный|Das Netz ist flächendeckend verfügbar.
folgenreich|имеющий серьёзные последствия|Das war ein folgenreicher Fehler.
fortschrittlich|прогрессивный|Das Land ist sehr fortschrittlich.
fundiert|обоснованный|Sie hat fundierte Kenntnisse.
gängig|распространённый, ходовой|Das ist die gängige Praxis.
gemeinnützig|некоммерческий, общественно полезный|Der Verein ist gemeinnützig.
geringfügig|незначительный|Die Unterschiede sind geringfügig.
gewaltig|огромный, мощный|Das ist ein gewaltiger Unterschied.
gezielt|целенаправленный|Wir fördern gezielt junge Talente.
glaubhaft|правдоподобный|Seine Erklärung ist glaubhaft.
gleichwertig|равноценный|Die Abschlüsse sind gleichwertig.
grenzüberschreitend|трансграничный|Das ist ein grenzüberschreitendes Problem.
handfest|веский, основательный|Es gibt handfeste Beweise.
hinderlich|мешающий|Die Regeln sind eher hinderlich.
hochwertig|высококачественный|Wir verwenden hochwertige Materialien.
kontraproduktiv|контрпродуктивный|Der Vorschlag ist kontraproduktiv.
kostspielig|дорогостоящий|Die Reparatur ist kostspielig.
kurzfristig|краткосрочный; в короткий срок|Der Termin wurde kurzfristig abgesagt.
langfristig|долгосрочный|Wir planen langfristig.
mittelfristig|среднесрочный|Mittelfristig steigen die Preise.
lückenhaft|неполный, с пробелами|Meine Kenntnisse sind lückenhaft.
makellos|безупречный|Ihr Deutsch ist makellos.
mangelhaft|неудовлетворительный|Die Qualität ist mangelhaft.
markant|характерный, заметный|Er hat ein markantes Gesicht.
mühsam|трудоёмкий, утомительный|Die Arbeit ist mühsam.
nachteilig|невыгодный|Das wirkt sich nachteilig aus.
naheliegend|напрашивающийся|Das ist die naheliegende Lösung.
namhaft|известный, именитый|Namhafte Experten nehmen teil.
nennenswert|заслуживающий упоминания|Es gab keine nennenswerten Probleme.
offenkundig|явный|Das ist ein offenkundiger Fehler.
pauschal|огульный; общей суммой|Das kann man nicht pauschal sagen.
prägend|формирующий, определяющий|Das war eine prägende Erfahrung.
problematisch|проблематичный|Die Lage ist problematisch.
rasant|стремительный|Die Entwicklung ist rasant.
ratsam|целесообразный|Es ist ratsam, früh zu buchen.
reibungslos|бесперебойный|Der Ablauf war reibungslos.
rückläufig|снижающийся|Die Zahlen sind rückläufig.
sachgemäß|надлежащий|Das Gerät muss sachgemäß benutzt werden.
schwerwiegend|серьёзный, тяжёлый|Das ist ein schwerwiegender Vorwurf.
selbstkritisch|самокритичный|Er ist sehr selbstkritisch.
sorglos|беззаботный|Sie geht sorglos mit Geld um.
spürbar|ощутимый|Die Verbesserung ist spürbar.
strittig|спорный|Dieser Punkt ist strittig.
tragfähig|жизнеспособный, прочный|Wir brauchen eine tragfähige Lösung.
transparent|прозрачный|Die Entscheidung muss transparent sein.
überschaubar|обозримый|Die Kosten sind überschaubar.
umsichtig|осмотрительный|Sie handelt sehr umsichtig.
unabdingbar|непременный|Vertrauen ist unabdingbar.
unangemessen|неуместный|Sein Verhalten war unangemessen.
unausweichlich|неизбежный|Die Folgen sind unausweichlich.
unbestritten|бесспорный|Ihr Erfolg ist unbestritten.
unentbehrlich|незаменимый|Er ist für die Firma unentbehrlich.
unverzichtbar|необходимый, без чего нельзя|Das Handy ist für viele unverzichtbar.
unzureichend|недостаточный|Die Informationen sind unzureichend.
verantwortungsbewusst|ответственный, сознательный|Sie handelt verantwortungsbewusst.
verheerend|разрушительный|Die Folgen waren verheerend.
verlässlich|надёжный|Wir brauchen verlässliche Daten.
vermeintlich|мнимый, предполагаемый|Der vermeintliche Fehler war keiner.
vertretbar|допустимый, оправданный|Die Kosten sind vertretbar.
vielversprechend|многообещающий|Das klingt vielversprechend.
voreilig|поспешный|Zieh keine voreiligen Schlüsse.
vorrangig|первоочередной|Das ist unser vorrangiges Ziel.
vorteilhaft|выгодный|Das Angebot ist vorteilhaft.
wechselhaft|переменчивый|Das Wetter bleibt wechselhaft.
weitreichend|далеко идущий|Die Entscheidung hat weitreichende Folgen.
wirksam|действенный|Das Mittel ist sehr wirksam.
zielführend|ведущий к цели|Diese Diskussion ist nicht zielführend.
zukunftsweisend|перспективный|Das ist eine zukunftsweisende Technologie.
zumutbar|приемлемый, посильный|Die Belastung ist zumutbar.
zutreffend|верный, соответствующий|Die Beschreibung ist zutreffend.
zweckmäßig|целесообразный|Die Einrichtung ist zweckmäßig.

# Существительные: анализ и планирование
der Abbau|сокращение, демонтаж|Der Abbau von Stellen ist geplant.
die Abgrenzung|разграничение|Eine klare Abgrenzung ist nötig.
der Ablauf|ход, порядок|Der Ablauf ist genau geplant.
die Abschaffung|отмена|Die Abschaffung der Gebühr wird diskutiert.
die Absprache|договорённость|Das war eine klare Absprache.
der Abstand|дистанция|Halten Sie bitte Abstand.
die Akzeptanz|принятие|Die Akzeptanz in der Bevölkerung ist hoch.
die Angelegenheit|дело, вопрос|Das ist eine private Angelegenheit.
der Anreiz|стимул|Das Gehalt ist ein Anreiz.
der Anstieg|рост, подъём|Der Anstieg der Preise ist deutlich.
der Rückgang|снижение|Der Rückgang der Geburten hält an.
der Anteil|доля|Der Anteil der Frauen steigt.
der Aufschub|отсрочка|Die Sache duldet keinen Aufschub.
das Ausmaß|масштаб|Das Ausmaß der Schäden ist noch unklar.
die Auseinandersetzung|спор; изучение|Es kam zu einer heftigen Auseinandersetzung.
die Ausgangslage|исходная ситуация|Die Ausgangslage ist schwierig.
die Befugnis|полномочие|Dazu fehlt mir die Befugnis.
die Begründung|обоснование|Die Begründung überzeugt mich nicht.
die Beeinträchtigung|ухудшение, ограничение|Es kommt zu Beeinträchtigungen im Verkehr.
das Bedenken|сомнение, опасение|Ich habe Bedenken gegen den Plan.
das Bedürfnis|потребность|Jeder Mensch hat das Bedürfnis nach Sicherheit.
die Befürchtung|опасение|Die Befürchtung hat sich bestätigt.
die Bereitschaft|готовность|Die Bereitschaft zu helfen ist groß.
die Bestandsaufnahme|инвентаризация, оценка положения|Zuerst machen wir eine Bestandsaufnahme.
die Beteiligung|участие|Die Beteiligung war gering.
die Bewältigung|преодоление|Die Bewältigung der Krise dauert an.
der Bezug|связь, отношение|Der Text hat keinen Bezug zum Thema.
die Dringlichkeit|срочность|Die Dringlichkeit ist allen bewusst.
die Durchführung|проведение|Die Durchführung des Projekts beginnt im Mai.
die Einschätzung|оценка|Nach meiner Einschätzung ist das zu teuer.
die Einschränkung|ограничение|Es gibt einige Einschränkungen.
die Einsicht|понимание, осознание|Er kam zu der Einsicht, dass er falsch lag.
der Einsatz|применение; вклад|Danke für Ihren Einsatz.
die Entlastung|облегчение, разгрузка|Das bringt eine Entlastung für Familien.
die Errungenschaft|достижение|Das Internet ist eine große Errungenschaft.
das Fazit|вывод, итог|Mein Fazit ist positiv.
die Förderung|поддержка, содействие|Die Förderung von Talenten ist wichtig.
die Gegebenheit|данность, обстоятельство|Wir passen uns den Gegebenheiten an.
der Gesichtspunkt|точка зрения, аспект|Unter diesem Gesichtspunkt hast du recht.
die Handhabung|обращение, использование|Die Handhabung des Geräts ist einfach.
die Herangehensweise|подход|Wir brauchen eine neue Herangehensweise.
das Hindernis|препятствие|Die Sprache ist kein Hindernis.
die Hürde|барьер|Die bürokratischen Hürden sind hoch.
die Initiative|инициатива|Sie ergriff die Initiative.
die Kehrseite|обратная сторона|Jede Medaille hat ihre Kehrseite.
das Kriterium|критерий|Welche Kriterien sind wichtig?
die Lücke|пробел, брешь|Im Lebenslauf gibt es eine Lücke.
der Missstand|непорядок, злоупотребление|Die Presse deckte Missstände auf.
die Notwendigkeit|необходимость|Die Notwendigkeit der Reform ist unbestritten.
der Nutzen|польза|Der Nutzen ist größer als die Kosten.
die Perspektive|перспектива|Aus meiner Perspektive ist das falsch.
die Priorität|приоритет|Sicherheit hat Priorität.
die Rahmenbedingungen|общие условия|Die Rahmenbedingungen haben sich geändert.
die Regelung|регулирование, правило|Die neue Regelung gilt ab Januar.
die Richtlinie|директива, руководство|Die Richtlinie wurde überarbeitet.
der Rückschlag|неудача, откат|Das war ein schwerer Rückschlag.
der Rückschluss|заключение (обратный вывод)|Daraus lassen sich Rückschlüsse ziehen.
der Sachverhalt|положение дел|Der Sachverhalt ist kompliziert.
der Schwerpunkt|основной акцент|Der Schwerpunkt liegt auf der Praxis.
der Spielraum|свобода действий|Es gibt wenig Spielraum.
der Stellenwert|значимость|Bildung hat einen hohen Stellenwert.
die Tragweite|значение, масштаб последствий|Die Tragweite der Entscheidung ist groß.
die Überlegung|соображение, размышление|Nach langer Überlegung sagte sie zu.
die Umsetzung|реализация|Die Umsetzung dauert zwei Jahre.
der Umbruch|перелом, перемены|Die Branche befindet sich im Umbruch.
die Verfügbarkeit|доступность|Die Verfügbarkeit ist begrenzt.
das Versäumnis|упущение|Das war ein schweres Versäumnis.
die Verzögerung|задержка|Es kommt zu Verzögerungen.
der Vorbehalt|оговорка|Ich stimme unter Vorbehalt zu.
die Vorgabe|установка, требование|Die Vorgaben sind streng.
das Vorhaben|намерение, проект|Das Vorhaben ist ehrgeizig.
der Vorrang|приоритет, первенство|Fußgänger haben Vorrang.
die Wechselwirkung|взаимодействие|Es gibt Wechselwirkungen mit anderen Medikamenten.
der Widerspruch|противоречие; возражение|Das ist ein Widerspruch.
der Widerstand|сопротивление|Der Plan stößt auf Widerstand.
die Zumutung|наглость, чрезмерное требование|Das ist eine Zumutung!
der Zwang|принуждение|Es gibt keinen Zwang.
der Zwiespalt|внутренний разлад|Ich bin im Zwiespalt.

# Обороты для связной речи
auf Dauer|надолго, в долгосрочной перспективе|Auf Dauer ist das keine Lösung.
auf den ersten Blick|на первый взгляд|Auf den ersten Blick sieht es einfach aus.
aus diesem Grund|по этой причине|Aus diesem Grund bleibe ich zu Hause.
bei Bedarf|при необходимости|Bei Bedarf helfe ich gern.
im Allgemeinen|в общем|Im Allgemeinen bin ich zufrieden.
im Einzelnen|в частности, подробно|Das müssen wir im Einzelnen besprechen.
im Endeffekt|в конечном итоге|Im Endeffekt hat es sich gelohnt.
im Grunde|в сущности|Im Grunde hast du recht.
im Laufe der Zeit|с течением времени|Im Laufe der Zeit wurde es besser.
im Nachhinein|задним числом|Im Nachhinein war es ein Fehler.
im Rahmen|в рамках|Im Rahmen des Projekts reisen wir viel.
im Übrigen|впрочем, кроме того|Im Übrigen bin ich anderer Meinung.
im Voraus|заранее|Vielen Dank im Voraus.
in Bezug auf|в отношении|In Bezug auf die Kosten gibt es Fragen.
in der Tat|в самом деле|Das ist in der Tat ein Problem.
in erster Linie|в первую очередь|In erster Linie geht es um Sicherheit.
in gewisser Weise|в известном смысле|In gewisser Weise hat er recht.
mit anderen Worten|другими словами|Mit anderen Worten: Es ist zu teuer.
nach wie vor|по-прежнему|Das Problem besteht nach wie vor.
ohne Weiteres|без затруднений|Das kann man ohne Weiteres machen.
so gut wie|почти, практически|Die Arbeit ist so gut wie fertig.
über kurz oder lang|рано или поздно|Über kurz oder lang wird sich das ändern.
unter anderem|в числе прочего|Unter anderem sprachen wir über Geld.
vor Kurzem|недавно|Vor Kurzem bin ich umgezogen.
von Bedeutung sein|иметь значение|Das ist für uns von großer Bedeutung.
zur Folge haben|иметь следствием|Das hat hohe Kosten zur Folge.
in Verbindung stehen|быть связанным, на связи|Wir stehen in Verbindung.
außer Frage stehen|не подлежать сомнению|Seine Kompetenz steht außer Frage.
zur Debatte stehen|обсуждаться|Das steht nicht zur Debatte.
auf Kritik stoßen|наталкиваться на критику|Der Plan stößt auf Kritik.
in Erwägung ziehen|принимать во внимание, рассматривать|Wir ziehen einen Umzug in Erwägung.
Bezug nehmen|ссылаться|Ich nehme Bezug auf Ihr Schreiben.
Abstand nehmen|отказываться, дистанцироваться|Wir nehmen von dem Plan Abstand.
Anklang finden|находить отклик|Die Idee fand großen Anklang.
Bilanz ziehen|подводить итоги|Nach einem Jahr ziehen wir Bilanz.
den Ausschlag geben|быть решающим|Der Preis gab den Ausschlag.
ins Gewicht fallen|иметь вес, значение|Das fällt kaum ins Gewicht.
auf dem Spiel stehen|быть на кону|Unsere Zukunft steht auf dem Spiel.
an Bedeutung gewinnen|приобретать значение|Das Thema gewinnt an Bedeutung.
zum Tragen kommen|проявляться, вступать в действие|Hier kommt seine Erfahrung zum Tragen.
unter Beweis stellen|доказывать на деле|Sie hat ihr Können unter Beweis gestellt.
zur Verfügung stellen|предоставлять|Die Firma stellt ein Auto zur Verfügung.
in Frage kommen|быть возможным, подходить|Das kommt nicht in Frage.
eine Rolle spielen|играть роль|Geld spielt keine Rolle.
in Kontakt bleiben|оставаться на связи|Lass uns in Kontakt bleiben.
`;
