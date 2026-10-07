// Словарь A1.
// Каждая строка: немецкое слово | перевод | пример.
// Строка, которая начинается с #, — название темы.
const WORDS_A1 = `
# Приветствия и вежливость
Hallo|привет|Hallo, wie geht's?
Guten Morgen|доброе утро|Guten Morgen, Frau Müller!
Guten Tag|добрый день|Guten Tag, Herr Schmidt!
Guten Abend|добрый вечер|Guten Abend zusammen!
Gute Nacht|спокойной ночи|Gute Nacht, schlaf gut!
Auf Wiedersehen|до свидания|Auf Wiedersehen, bis morgen!
Tschüss|пока|Tschüss, bis bald!
bitte|пожалуйста|Einen Kaffee, bitte.
danke|спасибо|Danke für die Hilfe!
Entschuldigung|извините|Entschuldigung, wo ist der Bahnhof?
ja|да|Ja, das stimmt.
nein|нет|Nein, das ist falsch.
vielleicht|может быть|Vielleicht komme ich morgen.
natürlich|конечно|Natürlich helfe ich dir.
leider|к сожалению|Leider habe ich keine Zeit.
gern|охотно|Ich trinke gern Tee.
der Herr|господин|Herr Weber ist mein Chef.
der Name|имя, название|Mein Name ist Anna.
der Vorname|имя (личное)|Mein Vorname ist Paul.
der Nachname|фамилия|Wie ist Ihr Nachname?
die Adresse|адрес|Wie ist deine Adresse?
das Land|страна|Deutschland ist ein großes Land.
die Sprache|язык|Welche Sprache sprichst du?

# Местоимения и вопросы
ich|я|Ich bin müde.
du|ты|Woher kommst du?
er|он|Er ist mein Bruder.
sie|она; они|Sie wohnt in Wien.
es|оно|Es ist kalt.
wir|мы|Wir lernen Deutsch.
ihr|вы (к нескольким на «ты»)|Kommt ihr mit?
Sie|Вы (вежливо)|Sprechen Sie Englisch?
mein|мой|Das ist mein Buch.
dein|твой|Wo ist dein Auto?
wer|кто|Wer ist das?
was|что|Was machst du?
wo|где|Wo wohnst du?
wohin|куда|Wohin gehst du?
woher|откуда|Woher kommen Sie?
wann|когда|Wann beginnt der Kurs?
warum|почему|Warum lachst du?
wie|как|Wie heißt du?
wie viel|сколько|Wie viel kostet das?
welcher|какой, который|Welcher Bus fährt zum Bahnhof?
dieser|этот|Dieser Film ist gut.
man|(безличное) кто-то, люди|Hier darf man nicht rauchen.
alle|все|Alle sind schon da.
etwas|что-то, немного|Möchtest du etwas trinken?
nichts|ничего|Ich verstehe nichts.
jemand|кто-то|Ist jemand zu Hause?
niemand|никто|Niemand ist da.
hier|здесь|Ich wohne hier.
dort|там|Dort ist die Post.

# Числа
null|ноль|Meine Nummer beginnt mit null.
eins|один|Es ist eins.
zwei|два|Ich habe zwei Brüder.
drei|три|Wir sind drei Personen.
vier|четыре|Das Kind ist vier Jahre alt.
fünf|пять|Ich komme in fünf Minuten.
sechs|шесть|Der Kurs beginnt um sechs.
sieben|семь|Die Woche hat sieben Tage.
acht|восемь|Ich arbeite acht Stunden.
neun|девять|Der Film beginnt um neun.
zehn|десять|Das kostet zehn Euro.
elf|одиннадцать|Es ist elf Uhr.
zwölf|двенадцать|Das Jahr hat zwölf Monate.
zwanzig|двадцать|Sie ist zwanzig Jahre alt.
dreißig|тридцать|Der Monat hat dreißig Tage.
hundert|сто|Das Buch hat hundert Seiten.
tausend|тысяча|Das Auto kostet tausend Euro.
die Zahl|число|Welche Zahl ist das?
die Nummer|номер|Wie ist deine Nummer?
erste|первый|Heute ist mein erster Tag.
zweite|второй|Ich wohne im zweiten Stock.
halb|половина|Es ist halb acht.

# Люди и семья
der Mensch|человек|Jeder Mensch braucht Freunde.
der Mann|мужчина; муж|Der Mann arbeitet hier.
die Frau|женщина; жена|Die Frau liest ein Buch.
das Kind|ребёнок|Das Kind spielt im Garten.
der Junge|мальчик|Der Junge ist zehn Jahre alt.
das Mädchen|девочка|Das Mädchen heißt Lisa.
das Baby|младенец|Das Baby schläft.
die Familie|семья|Meine Familie ist groß.
die Eltern|родители|Meine Eltern wohnen in Bonn.
der Vater|отец|Mein Vater ist Arzt.
die Mutter|мать|Meine Mutter kocht gut.
der Sohn|сын|Ihr Sohn geht zur Schule.
die Tochter|дочь|Unsere Tochter ist klein.
der Bruder|брат|Mein Bruder studiert.
die Schwester|сестра|Meine Schwester wohnt in Köln.
der Großvater|дедушка|Mein Großvater ist achtzig.
die Großmutter|бабушка|Meine Großmutter backt Kuchen.
die Oma|бабушка (разг.)|Ich besuche meine Oma.
der Opa|дедушка (разг.)|Mein Opa liest die Zeitung.
der Onkel|дядя|Mein Onkel wohnt in Berlin.
die Tante|тётя|Meine Tante kommt morgen.
der Freund|друг|Er ist mein bester Freund.
die Freundin|подруга|Meine Freundin heißt Maria.
der Nachbar|сосед|Unser Nachbar ist nett.
die Leute|люди|Hier sind viele Leute.
der Gast|гость|Wir haben heute Gäste.
verheiratet|женат, замужем|Ich bin verheiratet.
ledig|холост, не замужем|Sind Sie ledig?
das Alter|возраст|Bitte schreiben Sie Ihr Alter.
der Geburtstag|день рождения|Morgen habe ich Geburtstag.

# Еда и напитки
das Essen|еда|Das Essen ist fertig.
das Brot|хлеб|Ich kaufe Brot.
das Brötchen|булочка|Zum Frühstück esse ich ein Brötchen.
die Butter|масло (сливочное)|Brot mit Butter, bitte.
der Käse|сыр|Ich esse gern Käse.
die Wurst|колбаса|Möchtest du Wurst?
das Fleisch|мясо|Ich esse kein Fleisch.
der Fisch|рыба|Freitags essen wir Fisch.
das Ei|яйцо|Ich möchte ein Ei.
die Milch|молоко|Das Kind trinkt Milch.
das Wasser|вода|Ein Glas Wasser, bitte.
der Saft|сок|Ich trinke Saft.
der Kaffee|кофе|Der Kaffee ist heiß.
der Tee|чай|Möchten Sie Tee?
das Bier|пиво|Ein Bier, bitte.
der Wein|вино|Der Wein schmeckt gut.
das Obst|фрукты|Obst ist gesund.
der Apfel|яблоко|Der Apfel ist rot.
die Banane|банан|Die Banane ist gelb.
die Orange|апельсин|Ich esse eine Orange.
das Gemüse|овощи|Ich esse viel Gemüse.
die Kartoffel|картофель|Kartoffeln mit Fisch, bitte.
die Tomate|помидор|Die Tomate ist reif.
der Salat|салат|Ich nehme einen Salat.
die Suppe|суп|Die Suppe ist heiß.
der Reis|рис|Wir essen Reis mit Gemüse.
die Nudeln|макароны|Kinder mögen Nudeln.
der Kuchen|пирог|Der Kuchen ist lecker.
die Schokolade|шоколад|Ich liebe Schokolade.
der Zucker|сахар|Kaffee ohne Zucker, bitte.
das Salz|соль|Die Suppe braucht Salz.
das Frühstück|завтрак|Das Frühstück ist um acht.
das Mittagessen|обед|Was gibt es zum Mittagessen?
das Abendessen|ужин|Das Abendessen ist fertig.
der Hunger|голод|Ich habe Hunger.
der Durst|жажда|Hast du Durst?
das Glas|стакан|Ein Glas Saft, bitte.
die Tasse|чашка|Eine Tasse Tee, bitte.
die Flasche|бутылка|Eine Flasche Wasser, bitte.
der Teller|тарелка|Der Teller ist leer.
das Messer|нож|Das Messer ist scharf.
die Gabel|вилка|Ich brauche eine Gabel.
der Löffel|ложка|Wo ist der Löffel?
das Restaurant|ресторан|Wir essen im Restaurant.
die Speisekarte|меню|Die Speisekarte, bitte.
die Rechnung|счёт|Die Rechnung, bitte!
lecker|вкусный|Die Pizza ist lecker.

# Дом и квартира
das Haus|дом|Das Haus ist alt.
die Wohnung|квартира|Die Wohnung ist klein.
das Zimmer|комната|Mein Zimmer ist hell.
die Küche|кухня|Wir essen in der Küche.
das Bad|ванная|Das Bad ist links.
die Toilette|туалет|Wo ist die Toilette?
das Schlafzimmer|спальня|Das Schlafzimmer ist ruhig.
das Wohnzimmer|гостиная|Wir sitzen im Wohnzimmer.
der Garten|сад|Die Kinder spielen im Garten.
der Balkon|балкон|Die Wohnung hat einen Balkon.
die Tür|дверь|Bitte schließen Sie die Tür.
das Fenster|окно|Das Fenster ist offen.
der Tisch|стол|Das Buch liegt auf dem Tisch.
der Stuhl|стул|Der Stuhl ist bequem.
das Bett|кровать|Ich gehe ins Bett.
der Schrank|шкаф|Die Jacke hängt im Schrank.
das Sofa|диван|Die Katze schläft auf dem Sofa.
die Lampe|лампа|Die Lampe ist kaputt.
das Bild|картина|Das Bild hängt an der Wand.
die Wand|стена|Die Wand ist weiß.
der Kühlschrank|холодильник|Die Milch ist im Kühlschrank.
der Herd|плита|Der Topf steht auf dem Herd.
die Dusche|душ|Die Dusche ist neu.
der Schlüssel|ключ|Wo ist mein Schlüssel?
die Miete|арендная плата|Die Miete ist hoch.
der Stock|этаж|Wir wohnen im dritten Stock.
die Treppe|лестница|Die Treppe ist rechts.
der Fernseher|телевизор|Der Fernseher ist an.
das Telefon|телефон|Das Telefon klingelt.
das Handy|мобильный телефон|Mein Handy ist neu.
der Computer|компьютер|Der Computer ist kaputt.
die Uhr|часы|Die Uhr hängt an der Wand.
die Möbel|мебель|Die Möbel sind neu.

# Город и транспорт
die Stadt|город|Berlin ist eine große Stadt.
das Dorf|деревня|Meine Oma wohnt in einem Dorf.
die Straße|улица|Die Straße ist lang.
der Platz|площадь; место|Ist der Platz frei?
der Bahnhof|вокзал|Der Zug steht am Bahnhof.
der Flughafen|аэропорт|Wir fahren zum Flughafen.
die Haltestelle|остановка|Die Haltestelle ist dort.
der Bus|автобус|Der Bus kommt um neun.
der Zug|поезд|Der Zug hat Verspätung.
die U-Bahn|метро|Ich fahre mit der U-Bahn.
die Straßenbahn|трамвай|Die Straßenbahn ist voll.
das Auto|машина|Das Auto ist neu.
das Fahrrad|велосипед|Ich fahre Fahrrad.
das Taxi|такси|Wir nehmen ein Taxi.
das Flugzeug|самолёт|Das Flugzeug landet.
die Fahrkarte|билет (проездной)|Ich kaufe eine Fahrkarte.
der Supermarkt|супермаркет|Ich gehe in den Supermarkt.
das Geschäft|магазин|Das Geschäft ist geschlossen.
der Markt|рынок|Auf dem Markt gibt es Obst.
die Bank|банк|Die Bank öffnet um neun.
die Post|почта|Die Post ist neben der Bank.
die Apotheke|аптека|Die Apotheke ist an der Ecke.
das Krankenhaus|больница|Er liegt im Krankenhaus.
das Hotel|гостиница|Das Hotel ist teuer.
das Kino|кинотеатр|Wir gehen ins Kino.
das Museum|музей|Das Museum ist montags geschlossen.
der Park|парк|Wir gehen im Park spazieren.
die Kirche|церковь|Die Kirche ist sehr alt.
das Café|кафе|Wir treffen uns im Café.
die Polizei|полиция|Rufen Sie die Polizei!
der Weg|путь, дорога|Der Weg ist weit.
die Ecke|угол|Das Café ist an der Ecke.
links|слева, налево|Gehen Sie links.
rechts|справа, направо|Die Bank ist rechts.
geradeaus|прямо|Gehen Sie geradeaus.
der Eingang|вход|Der Eingang ist dort.
der Ausgang|выход|Wo ist der Ausgang?
das Geld|деньги|Ich habe kein Geld.
der Preis|цена|Der Preis ist gut.
der Euro|евро|Das kostet fünf Euro.

# Время
die Zeit|время|Ich habe keine Zeit.
der Tag|день|Der Tag ist schön.
die Woche|неделя|Die Woche hat sieben Tage.
der Monat|месяц|Der Monat ist zu Ende.
das Jahr|год|Das Jahr hat zwölf Monate.
die Stunde|час|Der Kurs dauert eine Stunde.
die Minute|минута|Einen Moment, eine Minute!
der Morgen|утро|Am Morgen trinke ich Kaffee.
der Mittag|полдень|Am Mittag esse ich in der Kantine.
der Nachmittag|вторая половина дня|Am Nachmittag habe ich frei.
der Abend|вечер|Am Abend sehe ich fern.
die Nacht|ночь|In der Nacht schlafe ich.
heute|сегодня|Heute ist Montag.
morgen|завтра|Morgen habe ich frei.
gestern|вчера|Gestern war ich krank.
jetzt|сейчас|Ich komme jetzt.
später|позже|Wir sehen uns später.
bald|скоро|Bis bald!
immer|всегда|Er ist immer pünktlich.
oft|часто|Ich gehe oft ins Kino.
manchmal|иногда|Manchmal koche ich.
nie|никогда|Ich trinke nie Kaffee.
früh|рано|Ich stehe früh auf.
spät|поздно|Es ist schon spät.
der Montag|понедельник|Am Montag arbeite ich.
der Dienstag|вторник|Am Dienstag habe ich Deutschkurs.
der Mittwoch|среда|Am Mittwoch gehe ich schwimmen.
der Donnerstag|четверг|Am Donnerstag kommt mein Bruder.
der Freitag|пятница|Am Freitag gehen wir aus.
der Samstag|суббота|Am Samstag kaufe ich ein.
der Sonntag|воскресенье|Am Sonntag schlafe ich lange.
das Wochenende|выходные|Schönes Wochenende!
der Januar|январь|Im Januar ist es kalt.
der Juli|июль|Im Juli fahren wir ans Meer.
der Dezember|декабрь|Im Dezember ist Weihnachten.
der Frühling|весна|Im Frühling ist alles grün.
der Sommer|лето|Im Sommer ist es warm.
der Herbst|осень|Im Herbst regnet es oft.
der Winter|зима|Im Winter schneit es.
der Termin|назначенная встреча|Ich habe einen Termin beim Arzt.
das Datum|дата|Welches Datum ist heute?
der Urlaub|отпуск|Ich habe im August Urlaub.

# Глаголы
sein|быть|Ich bin müde.
haben|иметь|Wir haben ein Auto.
werden|становиться|Er will Arzt werden.
machen|делать|Was machst du heute?
gehen|идти|Ich gehe nach Hause.
kommen|приходить|Kommst du mit?
fahren|ехать|Wir fahren nach Berlin.
fliegen|лететь|Ich fliege nach Spanien.
laufen|бежать, идти|Das Kind läuft schnell.
bleiben|оставаться|Ich bleibe zu Hause.
wohnen|жить (проживать)|Ich wohne in München.
leben|жить|Sie lebt in der Schweiz.
arbeiten|работать|Er arbeitet bei Siemens.
lernen|учить, учиться|Ich lerne Deutsch.
studieren|учиться в вузе|Sie studiert Medizin.
spielen|играть|Die Kinder spielen Fußball.
sprechen|говорить, разговаривать|Sprechen Sie Deutsch?
sagen|сказать|Was sagst du?
fragen|спрашивать|Darf ich etwas fragen?
antworten|отвечать|Bitte antworten Sie!
hören|слушать, слышать|Ich höre Musik.
sehen|видеть, смотреть|Ich sehe einen Film.
lesen|читать|Er liest die Zeitung.
schreiben|писать|Ich schreibe eine E-Mail.
verstehen|понимать|Ich verstehe das nicht.
wissen|знать (факт)|Ich weiß es nicht.
kennen|знать (быть знакомым)|Kennst du Anna?
denken|думать|Ich denke oft an dich.
glauben|верить, полагать|Ich glaube, er kommt.
essen|есть|Wir essen um zwölf.
trinken|пить|Ich trinke Wasser.
kochen|готовить|Mein Mann kocht gern.
kaufen|покупать|Ich kaufe Brot.
einkaufen|делать покупки|Wir kaufen am Samstag ein.
bezahlen|платить|Ich möchte bezahlen.
kosten|стоить|Was kostet das?
nehmen|брать|Ich nehme den Bus.
geben|давать|Gib mir bitte das Buch.
bringen|приносить|Bringen Sie mir bitte die Karte.
brauchen|нуждаться|Ich brauche Hilfe.
suchen|искать|Ich suche meinen Schlüssel.
finden|находить|Ich finde mein Handy nicht.
schlafen|спать|Das Baby schläft.
aufstehen|вставать|Ich stehe um sieben auf.
anfangen|начинать|Der Kurs fängt um neun an.
beginnen|начинаться|Der Film beginnt jetzt.
enden|заканчиваться|Der Kurs endet um zwölf.
öffnen|открывать|Bitte öffnen Sie das Buch.
schließen|закрывать|Das Geschäft schließt um acht.
helfen|помогать|Kannst du mir helfen?
warten|ждать|Ich warte auf den Bus.
treffen|встречать|Ich treffe heute Freunde.
besuchen|навещать|Wir besuchen unsere Oma.
anrufen|звонить|Ich rufe dich morgen an.
heißen|называться, зваться|Ich heiße Peter.
mögen|любить, нравиться|Ich mag Hunde.
lieben|любить|Ich liebe dich.
möchten|хотел бы|Ich möchte einen Kaffee.
wollen|хотеть|Ich will nach Hause.
können|мочь, уметь|Ich kann schwimmen.
müssen|быть должным|Ich muss arbeiten.
dürfen|иметь разрешение|Hier darf man parken.
sollen|следует|Du sollst mehr schlafen.
schwimmen|плавать|Im Sommer schwimme ich viel.
tanzen|танцевать|Sie tanzt sehr gut.
singen|петь|Die Kinder singen ein Lied.
reisen|путешествовать|Ich reise gern.
fernsehen|смотреть телевизор|Abends sehe ich fern.
sitzen|сидеть|Wir sitzen im Garten.
stehen|стоять|Das Auto steht vor dem Haus.
liegen|лежать|Das Buch liegt auf dem Tisch.
waschen|мыть, стирать|Ich wasche das Auto.
putzen|чистить, убирать|Ich putze die Wohnung.
zeigen|показывать|Zeig mir bitte das Foto.
erklären|объяснять|Können Sie das erklären?
wiederholen|повторять|Bitte wiederholen Sie!
buchstabieren|произносить по буквам|Können Sie das buchstabieren?
gefallen|нравиться|Das Kleid gefällt mir.
schmecken|быть вкусным|Die Suppe schmeckt gut.
regnen|идти (о дожде)|Heute regnet es.
rauchen|курить|Hier darf man nicht rauchen.
feiern|праздновать|Wir feiern Geburtstag.
schenken|дарить|Ich schenke ihr Blumen.
lachen|смеяться|Die Kinder lachen.

# Прилагательные
gut|хороший|Das Essen ist gut.
schlecht|плохой|Das Wetter ist schlecht.
groß|большой|Das Haus ist groß.
klein|маленький|Die Wohnung ist klein.
neu|новый|Mein Auto ist neu.
alt|старый|Der Mann ist alt.
jung|молодой|Sie ist noch jung.
schön|красивый|Die Stadt ist schön.
hässlich|некрасивый|Das Haus ist hässlich.
lang|длинный|Der Weg ist lang.
kurz|короткий|Der Film ist kurz.
teuer|дорогой|Das Hotel ist teuer.
billig|дешёвый|Das T-Shirt ist billig.
schnell|быстрый|Der Zug ist schnell.
langsam|медленный|Bitte sprechen Sie langsam.
heiß|горячий, жаркий|Der Tee ist heiß.
warm|тёплый|Heute ist es warm.
kalt|холодный|Das Wasser ist kalt.
leicht|лёгкий|Die Aufgabe ist leicht.
schwer|тяжёлый, трудный|Der Koffer ist schwer.
einfach|простой|Das ist ganz einfach.
schwierig|сложный|Deutsch ist nicht schwierig.
richtig|правильный|Die Antwort ist richtig.
falsch|неправильный|Das ist falsch.
wichtig|важный|Das ist sehr wichtig.
interessant|интересный|Das Buch ist interessant.
langweilig|скучный|Der Film ist langweilig.
müde|уставший|Ich bin sehr müde.
krank|больной|Mein Sohn ist krank.
gesund|здоровый|Obst ist gesund.
glücklich|счастливый|Sie ist glücklich.
traurig|грустный|Warum bist du traurig?
nett|милый, приятный|Der Lehrer ist nett.
freundlich|дружелюбный|Die Leute sind freundlich.
fertig|готовый|Das Essen ist fertig.
frei|свободный|Ist der Platz frei?
besetzt|занятый|Der Platz ist besetzt.
offen|открытый|Das Fenster ist offen.
geschlossen|закрытый|Die Bank ist geschlossen.
voll|полный|Der Bus ist voll.
leer|пустой|Die Flasche ist leer.
sauber|чистый|Das Zimmer ist sauber.
schmutzig|грязный|Die Schuhe sind schmutzig.
hell|светлый|Das Zimmer ist hell.
dunkel|тёмный|Im Winter ist es früh dunkel.
laut|громкий|Die Musik ist zu laut.
leise|тихий|Bitte sprich leise.
ruhig|спокойный|Die Straße ist ruhig.
weit|далёкий|Ist es weit?
nah|близкий|Der Bahnhof ist ganz nah.
hoch|высокий|Der Berg ist hoch.
kaputt|сломанный|Mein Handy ist kaputt.
toll|классный|Das ist eine tolle Idee.
süß|сладкий|Der Kuchen ist süß.
viel|много|Ich habe viel Arbeit.
wenig|мало|Ich habe wenig Zeit.

# Учёба и работа
die Schule|школа|Die Kinder gehen in die Schule.
die Universität|университет|Sie studiert an der Universität.
der Kurs|курс|Der Kurs beginnt im Mai.
die Klasse|класс|Die Klasse ist groß.
der Lehrer|учитель|Der Lehrer erklärt die Grammatik.
die Lehrerin|учительница|Die Lehrerin ist nett.
der Schüler|ученик|Der Schüler macht Hausaufgaben.
der Student|студент|Der Student lernt viel.
das Buch|книга|Ich lese ein Buch.
das Heft|тетрадь|Schreiben Sie ins Heft.
der Stift|ручка, карандаш|Hast du einen Stift?
das Papier|бумага|Ich brauche Papier.
das Wort|слово|Ich kenne das Wort nicht.
der Satz|предложение|Bitte schreiben Sie einen Satz.
die Frage|вопрос|Ich habe eine Frage.
die Antwort|ответ|Die Antwort ist richtig.
die Aufgabe|задание|Die Aufgabe ist leicht.
die Hausaufgabe|домашнее задание|Ich mache meine Hausaufgabe.
der Fehler|ошибка|Das ist ein Fehler.
die Prüfung|экзамен|Morgen habe ich eine Prüfung.
die Pause|перерыв|Wir machen eine Pause.
die Arbeit|работа|Die Arbeit macht Spaß.
der Beruf|профессия|Was sind Sie von Beruf?
das Büro|офис|Ich arbeite im Büro.
die Firma|фирма|Die Firma ist groß.
der Chef|начальник|Der Chef ist im Urlaub.
der Kollege|коллега|Mein Kollege ist krank.
der Arzt|врач|Ich gehe zum Arzt.
der Verkäufer|продавец|Der Verkäufer ist freundlich.
die E-Mail|электронное письмо|Ich schreibe eine E-Mail.
der Brief|письмо|Der Brief ist für dich.
das Formular|бланк, анкета|Bitte füllen Sie das Formular aus.

# Тело, одежда, цвета
der Kopf|голова|Mein Kopf tut weh.
das Auge|глаз|Sie hat blaue Augen.
das Ohr|ухо|Mein Ohr tut weh.
die Nase|нос|Die Nase ist kalt.
der Mund|рот|Mach den Mund auf!
der Zahn|зуб|Der Zahn tut weh.
die Hand|рука (кисть)|Gib mir die Hand.
der Arm|рука|Mein Arm tut weh.
das Bein|нога|Das Bein ist gebrochen.
der Fuß|ступня|Ich gehe zu Fuß.
der Bauch|живот|Mein Bauch tut weh.
das Haar|волос, волосы|Sie hat lange Haare.
die Kleidung|одежда|Die Kleidung ist teuer.
die Hose|брюки|Die Hose ist zu lang.
das Hemd|рубашка|Das Hemd ist weiß.
das T-Shirt|футболка|Das T-Shirt ist neu.
der Pullover|свитер|Der Pullover ist warm.
die Jacke|куртка|Nimm eine Jacke mit!
der Mantel|пальто|Der Mantel ist schwarz.
das Kleid|платье|Das Kleid ist schön.
der Rock|юбка|Der Rock ist kurz.
der Schuh|ботинок, туфля|Die Schuhe sind neu.
die Tasche|сумка|Die Tasche ist schwer.
die Brille|очки|Wo ist meine Brille?
die Farbe|цвет|Welche Farbe magst du?
rot|красный|Das Auto ist rot.
blau|синий|Der Himmel ist blau.
grün|зелёный|Die Ampel ist grün.
gelb|жёлтый|Die Sonne ist gelb.
schwarz|чёрный|Der Kaffee ist schwarz.
weiß|белый|Der Schnee ist weiß.
grau|серый|Der Himmel ist grau.
braun|коричневый|Der Tisch ist braun.

# Природа и погода
das Wetter|погода|Das Wetter ist schön.
die Sonne|солнце|Die Sonne scheint.
der Regen|дождь|Der Regen ist kalt.
der Schnee|снег|Im Winter liegt Schnee.
der Wind|ветер|Der Wind ist stark.
der Himmel|небо|Der Himmel ist blau.
das Meer|море|Wir fahren ans Meer.
der See|озеро|Wir schwimmen im See.
der Berg|гора|Der Berg ist hoch.
der Wald|лес|Wir gehen im Wald spazieren.
der Baum|дерево|Der Baum ist alt.
die Blume|цветок|Die Blume ist schön.
das Tier|животное|Welches Tier magst du?
der Hund|собака|Der Hund ist lieb.
die Katze|кошка|Die Katze schläft.
der Vogel|птица|Der Vogel singt.
das Pferd|лошадь|Das Pferd läuft schnell.

# Служебные слова
und|и|Ich trinke Tee und Kaffee.
oder|или|Tee oder Kaffee?
aber|но|Ich bin müde, aber glücklich.
denn|так как|Ich bleibe zu Hause, denn ich bin krank.
auch|тоже|Ich komme auch.
nicht|не|Ich komme nicht.
sehr|очень|Das ist sehr gut.
nur|только|Ich habe nur fünf Euro.
noch|ещё|Ich bin noch im Büro.
schon|уже|Ich bin schon fertig.
wieder|снова|Er ist wieder krank.
zusammen|вместе|Wir kochen zusammen.
allein|один, сам|Ich wohne allein.
in|в|Ich wohne in Berlin.
aus|из|Ich komme aus Polen.
nach|в (о городах и странах); после|Ich fahre nach Wien.
zu|к|Ich gehe zum Arzt.
bei|у, при|Ich wohne bei meinen Eltern.
mit|с|Ich fahre mit dem Bus.
ohne|без|Kaffee ohne Milch, bitte.
für|для|Das Geschenk ist für dich.
von|от|Das Buch ist von meinem Vater.
bis|до|Ich arbeite bis fünf Uhr.
um|в (о времени)|Der Kurs beginnt um neun.
an|у, на (вертикальной поверхности)|Das Bild hängt an der Wand.
auf|на|Das Buch liegt auf dem Tisch.
unter|под|Die Katze ist unter dem Tisch.
vor|перед|Das Auto steht vor dem Haus.
hinter|за, позади|Der Garten ist hinter dem Haus.
neben|рядом с|Die Bank ist neben der Post.
zwischen|между|Die Apotheke ist zwischen Bank und Post.

# Месяцы и время суток
der Februar|февраль|Im Februar ist es kalt.
der März|март|Im März beginnt der Frühling.
der April|апрель|Im April regnet es oft.
der Mai|май|Im Mai ist es schon warm.
der Juni|июнь|Im Juni beginnt der Sommer.
der August|август|Im August haben wir Urlaub.
der September|сентябрь|Im September beginnt die Schule.
der Oktober|октябрь|Im Oktober wird es kühl.
der November|ноябрь|Im November ist es oft grau.
die Jahreszeit|время года|Meine liebste Jahreszeit ist der Sommer.
der Kalender|календарь|Der Termin steht im Kalender.
der Vormittag|первая половина дня|Am Vormittag arbeite ich.
die Mitternacht|полночь|Um Mitternacht schlafe ich schon.
die Uhrzeit|время (на часах)|Welche Uhrzeit passt dir?
die Sekunde|секунда|Eine Minute hat sechzig Sekunden.
der Moment|момент|Einen Moment, bitte!
der Anfang|начало|Am Anfang war es schwer.
das Ende|конец|Am Ende des Monats bekomme ich Geld.
morgens|по утрам|Morgens trinke ich Kaffee.
mittags|в обед|Mittags esse ich in der Kantine.
abends|по вечерам|Abends lese ich.
nachts|по ночам|Nachts ist es ruhig.
täglich|ежедневно|Ich lerne täglich Deutsch.
vorgestern|позавчера|Vorgestern war ich im Kino.
übermorgen|послезавтра|Übermorgen habe ich frei.

# Числа и количество
dreizehn|тринадцать|Mein Bruder ist dreizehn.
vierzehn|четырнадцать|Der Urlaub dauert vierzehn Tage.
fünfzehn|пятнадцать|Ich komme in fünfzehn Minuten.
sechzehn|шестнадцать|Sie ist sechzehn Jahre alt.
siebzehn|семнадцать|Der Bus kommt um siebzehn Uhr.
achtzehn|восемнадцать|Mit achtzehn darf man Auto fahren.
neunzehn|девятнадцать|Das kostet neunzehn Euro.
vierzig|сорок|Mein Vater ist vierzig.
fünfzig|пятьдесят|Das Hemd kostet fünfzig Euro.
sechzig|шестьдесят|Eine Stunde hat sechzig Minuten.
siebzig|семьдесят|Meine Oma ist siebzig.
achtzig|восемьдесят|Er fährt achtzig Kilometer pro Stunde.
neunzig|девяносто|Der Film dauert neunzig Minuten.
die Million|миллион|In der Stadt wohnen eine Million Menschen.
dritte|третий|Ich wohne im dritten Stock.
letzte|последний|Das ist der letzte Bus.
nächste|следующий|Die nächste Haltestelle ist der Bahnhof.
beide|оба|Beide Kinder sind in der Schule.
einige|некоторые|Einige Schüler fehlen heute.
mehr|больше|Ich möchte mehr Wasser.
weniger|меньше|Ich esse weniger Zucker.
ein bisschen|немного|Ich spreche ein bisschen Deutsch.
ein paar|несколько|Ich habe ein paar Fragen.
alles|всё|Alles ist in Ordnung.
einmal|один раз|Ich gehe einmal pro Woche schwimmen.
zweimal|дважды|Ich esse zweimal am Tag.
das Paar|пара|Ich kaufe ein Paar Schuhe.

# Страны и языки
Deutschland|Германия|Ich wohne in Deutschland.
Österreich|Австрия|Wien liegt in Österreich.
die Schweiz|Швейцария|Er arbeitet in der Schweiz.
Europa|Европа|Deutschland liegt in Europa.
Deutsch|немецкий язык|Ich lerne Deutsch.
Englisch|английский язык|Sprechen Sie Englisch?
Russisch|русский язык|Meine Muttersprache ist Russisch.
Französisch|французский язык|Sie spricht gut Französisch.
Spanisch|испанский язык|Ich verstehe ein bisschen Spanisch.
die Hauptstadt|столица|Berlin ist die Hauptstadt von Deutschland.
die Welt|мир, свет|Die Welt ist groß.
der Ort|место, населённый пункт|Der Ort ist sehr klein.
die Heimatstadt|родной город|Meine Heimatstadt ist Kiew.
der Norden|север|Hamburg liegt im Norden.
der Süden|юг|München liegt im Süden.
der Osten|восток|Dresden liegt im Osten.
der Westen|запад|Köln liegt im Westen.

# Вещи и понятия
das Problem|проблема|Das ist kein Problem.
die Idee|идея|Das ist eine gute Idee.
die Hilfe|помощь|Ich brauche Hilfe.
der Spaß|удовольствие, веселье|Das macht Spaß.
das Ding|вещь, штука|Was ist das für ein Ding?
die Sache|вещь, дело|Das ist meine Sache.
die Gruppe|группа|Wir lernen in einer Gruppe.
die Liste|список|Ich schreibe eine Liste.
die Karte|карта, открытка, билет|Ich schreibe eine Karte.
der Automat|автомат|Der Automat ist kaputt.
die Mitte|середина|Der Tisch steht in der Mitte.
die Kamera|камера|Die Kamera ist neu.
das Spielzeug|игрушка|Das Kind hat viel Spielzeug.
der Ball|мяч|Der Ball ist rund.
die Puppe|кукла|Das Mädchen spielt mit der Puppe.
das Feuer|огонь|Das Feuer ist heiß.
die Zigarette|сигарета|Er raucht eine Zigarette.
das Fahrzeug|транспортное средство|Das Fahrzeug steht vor dem Haus.
der Lkw|грузовик|Der Lkw ist sehr groß.
das Motorrad|мотоцикл|Er fährt Motorrad.

# Глаголы на каждый день
frühstücken|завтракать|Ich frühstücke um sieben.
verkaufen|продавать|Er verkauft sein Auto.
zahlen|платить|Ich zahle bar.
packen|упаковывать|Ich packe meinen Koffer.
kennenlernen|знакомиться|Ich möchte dich kennenlernen.
mitkommen|идти вместе|Kommst du mit?
zurückkommen|возвращаться|Wann kommst du zurück?
aussehen|выглядеть|Du siehst gut aus.
mitmachen|участвовать|Machst du mit?
ausziehen|снимать (одежду); съезжать|Zieh bitte die Schuhe aus.
ansehen|смотреть, рассматривать|Ich sehe mir den Film an.
zuhören|слушать внимательно|Hör mir bitte zu!
weggehen|уходить|Geh nicht weg!
losgehen|отправляться|Wir gehen jetzt los.
baden|купаться|Die Kinder baden im See.
telefonieren|говорить по телефону|Ich telefoniere mit meiner Mutter.
chatten|переписываться в чате|Ich chatte mit Freunden.
klicken|кликать|Klicken Sie hier.
surfen|сидеть в интернете|Er surft im Internet.
bestehen aus|состоять из|Die Wohnung besteht aus drei Zimmern.
kommen aus|быть родом из|Ich komme aus der Ukraine.
Sport treiben|заниматься спортом|Ich treibe viel Sport.
einsteigen in|садиться в|Wir steigen in den Bus ein.
Hunger haben|быть голодным|Ich habe Hunger.
Durst haben|хотеть пить|Hast du Durst?
recht haben|быть правым|Du hast recht.
Zeit haben|иметь время|Hast du morgen Zeit?
leidtun|быть жаль|Es tut mir leid.

# Наречия и оценки
prima|отлично|Das ist prima!
super|супер|Der Film war super.
komisch|странный, смешной|Das ist komisch.
wunderschön|прекрасный|Die Stadt ist wunderschön.
perfekt|идеальный|Dein Deutsch ist perfekt.
normal|нормальный|Das ist ganz normal.
einverstanden|согласен|Bist du einverstanden?
lieber|охотнее, лучше|Ich trinke lieber Tee.
wirklich|действительно|Das ist wirklich gut.
ganz|совсем, весь|Das ist ganz einfach.
gerade|как раз, сейчас|Ich esse gerade.
da|тут, там|Ist Peter da?
drüben|на той стороне|Die Post ist da drüben.
hinten|сзади|Die Toilette ist hinten.
vorn|впереди|Bitte vorn einsteigen.
zurück|назад|Ich bin gleich zurück.
weg|прочь, нет на месте|Mein Schlüssel ist weg.
zu Hause|дома|Ich bin zu Hause.
nach Hause|домой|Ich gehe nach Hause.
zu Fuß|пешком|Ich gehe zu Fuß.
jeden Tag|каждый день|Ich arbeite jeden Tag.
pro|в, за (каждый)|Ich lerne zwei Stunden pro Tag.
so|так|So ist das Leben.
circa|примерно|Das dauert circa eine Stunde.

# Полезные фразы
Wie geht's?|как дела?|Hallo Anna, wie geht's?
Wie bitte?|простите, что?|Wie bitte? Ich verstehe nicht.
Kein Problem|без проблем|Kein Problem, ich helfe dir.
Viel Spaß|желаю хорошо провести время|Viel Spaß im Kino!
Guten Appetit|приятного аппетита|Das Essen ist fertig. Guten Appetit!
Prost|за здоровье (тост)|Prost! Auf dich!
Herzlichen Glückwunsch|поздравляю|Herzlichen Glückwunsch zum Geburtstag!
Gute Reise|счастливого пути|Gute Reise und bis bald!
Bis später|до скорого|Tschüss, bis später!
Bis morgen|до завтра|Gute Nacht, bis morgen!
Alles Gute|всего хорошего|Alles Gute zum Geburtstag!
Gern geschehen|не за что|Danke! — Gern geschehen.
Keine Ahnung|понятия не имею|Wo ist er? — Keine Ahnung.
Vorsicht|осторожно|Vorsicht, die Suppe ist heiß!
Achtung|внимание|Achtung, ein Auto kommt!
Gute Besserung|выздоравливай|Du bist krank? Gute Besserung!
Schönes Wochenende|хороших выходных|Tschüss und schönes Wochenende!
Stimmt|верно|Stimmt, du hast recht.
Na klar|ну конечно|Kommst du mit? — Na klar!
Macht nichts|ничего страшного|Entschuldigung! — Macht nichts.
`;
