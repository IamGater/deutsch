// Диалоги B2.
// speaker: 'partner' — реплика собеседника, 'me' — реплика, которую выбирает пользователь.
// У реплики пользователя в wrong лежат два варианта с ошибкой.
const DIALOGS_B2 = [
  {
    id: 'b2-homeoffice',
    level: 'B2',
    title: 'Обсуждение удалённой работы',
    scene: 'Руководитель отдела спрашивает ваше мнение о планах компании.',
    turns: [
      { speaker: 'partner', german: 'Die Geschäftsführung überlegt, das Homeoffice wieder einzuschränken. Was halten Sie davon?', russian: 'Руководство думает снова ограничить удалённую работу. Что вы об этом думаете?' },
      {
        speaker: 'me',
        german: 'Ehrlich gesagt halte ich das für einen Fehler, da die meisten zu Hause produktiver arbeiten.',
        russian: 'Честно говоря, я считаю это ошибкой, так как большинство дома работает продуктивнее.',
        wrong: [
          'Ehrlich gesagt halte ich das als einen Fehler, da die meisten zu Hause produktiver arbeiten.',
          'Ehrlich gesagt halte ich das für einen Fehler, da die meisten arbeiten zu Hause produktiver.'
        ]
      },
      { speaker: 'partner', german: 'Aber leidet nicht der Austausch im Team darunter?', russian: 'Но разве от этого не страдает общение в команде?' },
      {
        speaker: 'me',
        german: 'Das mag sein, allerdings ließe sich das durch feste Präsenztage lösen.',
        russian: 'Возможно, однако это можно было бы решить фиксированными днями в офисе.',
        wrong: [
          'Das mag sein, allerdings ließe sich das durch feste Präsenztage gelöst.',
          'Das mag sein, allerdings ließe sich das durch feste Präsenztage zu lösen.'
        ]
      },
      { speaker: 'partner', german: 'Manche Kollegen behaupten, zu Hause werde weniger gearbeitet.', russian: 'Некоторые коллеги утверждают, что дома работают меньше.' },
      {
        speaker: 'me',
        german: 'Dafür gibt es keinerlei Belege; die Zahlen sprechen sogar dagegen.',
        russian: 'Этому нет никаких подтверждений; цифры говорят даже об обратном.',
        wrong: [
          'Darauf gibt es keinerlei Belege; die Zahlen sprechen sogar dagegen.',
          'Dafür gibt es keinerlei Belege; die Zahlen sprechen sogar gegen.'
        ]
      },
      { speaker: 'partner', german: 'Was würden Sie also vorschlagen?', russian: 'Что бы вы тогда предложили?' },
      {
        speaker: 'me',
        german: 'Ich würde vorschlagen, sowohl feste Bürotage einzuführen als auch flexible Lösungen zu erlauben.',
        russian: 'Я бы предложил и ввести фиксированные офисные дни, и разрешить гибкие решения.',
        wrong: [
          'Ich würde vorschlagen, sowohl feste Bürotage einzuführen noch flexible Lösungen zu erlauben.',
          'Ich würde vorschlagen, weder feste Bürotage einzuführen als auch flexible Lösungen zu erlauben.'
        ]
      },
      { speaker: 'partner', german: 'Und wenn die Geschäftsführung trotzdem bei ihrem Plan bleibt?', russian: 'А если руководство всё же останется при своём плане?' },
      {
        speaker: 'me',
        german: 'Dann sollte sie die Entscheidung zumindest ausführlich begründen.',
        russian: 'Тогда ему следовало бы хотя бы подробно обосновать решение.',
        wrong: [
          'Dann sollte sie die Entscheidung zumindest ausführlich zu begründen.',
          'Dann sollte sie die Entscheidung zumindest ausführlich begründet.'
        ]
      },
      { speaker: 'partner', german: 'Gut, ich werde Ihre Argumente weitergeben.', russian: 'Хорошо, я передам ваши аргументы.' },
      {
        speaker: 'me',
        german: 'Vielen Dank. Je früher wir darüber sprechen, desto besser.',
        russian: 'Большое спасибо. Чем раньше мы это обсудим, тем лучше.',
        wrong: [
          'Vielen Dank. Je früher wir sprechen darüber, desto besser.',
          'Vielen Dank. Desto früher wir darüber sprechen, je besser.'
        ]
      }
    ]
  },
  {
    id: 'b2-reklamation',
    level: 'B2',
    title: 'Претензия по заказу',
    scene: 'Вы звоните в службу поддержки интернет-магазина.',
    turns: [
      { speaker: 'partner', german: 'Kundenservice Technikhaus, Sie sprechen mit Frau Lang. Was kann ich für Sie tun?', russian: 'Служба поддержки Technikhaus, с вами говорит госпожа Ланг. Чем могу помочь?' },
      {
        speaker: 'me',
        german: 'Guten Tag, ich habe vor zwei Wochen einen Laptop bestellt, der bis heute nicht geliefert wurde.',
        russian: 'Добрый день, две недели назад я заказал ноутбук, который до сих пор не доставлен.',
        wrong: [
          'Guten Tag, ich habe vor zwei Wochen einen Laptop bestellt, der bis heute nicht geliefert hat.',
          'Guten Tag, ich habe vor zwei Wochen einen Laptop bestellt, den bis heute nicht geliefert wurde.'
        ]
      },
      { speaker: 'partner', german: 'Das tut mir leid. Können Sie mir bitte Ihre Bestellnummer nennen?', russian: 'Мне жаль. Назовите, пожалуйста, номер заказа.' },
      {
        speaker: 'me',
        german: 'Sie lautet 48213. Mir wurde eine Lieferung innerhalb von drei Tagen zugesagt.',
        russian: 'Номер 48213. Мне обещали доставку в течение трёх дней.',
        wrong: [
          'Sie lautet 48213. Mich wurde eine Lieferung innerhalb von drei Tagen zugesagt.',
          'Sie lautet 48213. Mir wurde eine Lieferung innerhalb von drei Tagen zusagen.'
        ]
      },
      { speaker: 'partner', german: 'Ich sehe, das Paket ist beim Versand verloren gegangen.', russian: 'Я вижу, посылка была утеряна при пересылке.' },
      {
        speaker: 'me',
        german: 'Das hätte man mir aber früher mitteilen müssen.',
        russian: 'Но мне должны были сообщить об этом раньше.',
        wrong: [
          'Das hätte man mir aber früher müssen mitteilen.',
          'Das hat man mir aber früher mitteilen gemusst.'
        ]
      },
      { speaker: 'partner', german: 'Da haben Sie völlig recht. Wir können Ihnen das Gerät erneut zusenden.', russian: 'Вы совершенно правы. Мы можем отправить вам устройство повторно.' },
      {
        speaker: 'me',
        german: 'Wie lange würde das dauern? Ich bin beruflich auf das Gerät angewiesen.',
        russian: 'Сколько это займёт? Устройство необходимо мне для работы.',
        wrong: [
          'Wie lange würde das dauern? Ich bin beruflich an das Gerät angewiesen.',
          'Wie lange würde das dauern? Ich bin beruflich auf dem Gerät angewiesen.'
        ]
      },
      { speaker: 'partner', german: 'Etwa fünf Werktage. Alternativ erstatten wir Ihnen den Kaufpreis.', russian: 'Около пяти рабочих дней. Либо мы вернём вам стоимость покупки.' },
      {
        speaker: 'me',
        german: 'Dann bestehe ich auf einer Expresslieferung ohne zusätzliche Kosten.',
        russian: 'Тогда я настаиваю на экспресс-доставке без дополнительных расходов.',
        wrong: [
          'Dann bestehe ich an einer Expresslieferung ohne zusätzliche Kosten.',
          'Dann bestehe ich auf einer Expresslieferung ohne zusätzlichen Kosten.'
        ]
      },
      { speaker: 'partner', german: 'Einverstanden, das veranlasse ich sofort. Sie erhalten heute noch eine Bestätigung.', russian: 'Согласна, я сейчас же это организую. Вы получите подтверждение уже сегодня.' },
      {
        speaker: 'me',
        german: 'Vielen Dank. Sollte es erneut Probleme geben, melde ich mich wieder bei Ihnen.',
        russian: 'Большое спасибо. Если снова возникнут проблемы, я свяжусь с вами.',
        wrong: [
          'Vielen Dank. Sollte es erneut Probleme geben, ich melde mich wieder bei Ihnen.',
          'Vielen Dank. Sollte es erneut Probleme gibt, melde ich mich wieder bei Ihnen.'
        ]
      }
    ]
  },
  {
    id: 'b2-autofrei',
    level: 'B2',
    title: 'Спор о центре без машин',
    scene: 'Вы с другом обсуждаете планы города закрыть центр для автомобилей.',
    turns: [
      { speaker: 'partner', german: 'Hast du gehört? Die Innenstadt soll komplett autofrei werden.', russian: 'Ты слышал? Центр города хотят полностью закрыть для машин.' },
      {
        speaker: 'me',
        german: 'Ja, und meiner Meinung nach ist das längst überfällig.',
        russian: 'Да, и, по-моему, это давно назрело.',
        wrong: [
          'Ja, und meiner Meinung nach das ist längst überfällig.',
          'Ja, und nach meine Meinung ist das längst überfällig.'
        ]
      },
      { speaker: 'partner', german: 'Wirklich? Die Geschäfte befürchten, dass dann die Kunden ausbleiben.', russian: 'Правда? Магазины опасаются, что тогда не будет покупателей.' },
      {
        speaker: 'me',
        german: 'Studien zufolge ist in anderen Städten genau das Gegenteil eingetreten.',
        russian: 'Согласно исследованиям, в других городах произошло ровно обратное.',
        wrong: [
          'Studien zufolge hat in anderen Städten genau das Gegenteil eingetreten.',
          'Studien zufolge in anderen Städten ist genau das Gegenteil eingetreten.'
        ]
      },
      { speaker: 'partner', german: 'Und was ist mit Menschen, die auf das Auto angewiesen sind?', russian: 'А как быть людям, которым без машины не обойтись?' },
      {
        speaker: 'me',
        german: 'Für sie müsste es natürlich Ausnahmen geben, sonst wäre die Regelung ungerecht.',
        russian: 'Для них, конечно, должны быть исключения, иначе правило было бы несправедливым.',
        wrong: [
          'Für sie müsste es natürlich Ausnahmen geben, sonst die Regelung wäre ungerecht.',
          'Für sie müsste es natürlich Ausnahmen gegeben, sonst wäre die Regelung ungerecht.'
        ]
      },
      { speaker: 'partner', german: 'Trotzdem: Der öffentliche Nahverkehr ist doch jetzt schon überlastet.', russian: 'И всё же: общественный транспорт уже сейчас перегружен.' },
      {
        speaker: 'me',
        german: 'Da gebe ich dir recht; ohne dass das Angebot ausgebaut wird, funktioniert es nicht.',
        russian: 'Тут я с тобой согласен; без расширения сети это не сработает.',
        wrong: [
          'Da gebe ich dir recht; ohne dass das Angebot ausgebaut wird, es funktioniert nicht.',
          'Da gebe ich dich recht; ohne dass das Angebot ausgebaut wird, funktioniert es nicht.'
        ]
      },
      { speaker: 'partner', german: 'Also bist du doch nicht ganz dafür?', russian: 'Значит, ты всё-таки не полностью «за»?' },
      {
        speaker: 'me',
        german: 'Doch, aber nur unter der Bedingung, dass die Stadt vorher in Busse und Bahnen investiert.',
        russian: 'Нет, «за», но только при условии, что город сначала вложится в автобусы и поезда.',
        wrong: [
          'Doch, aber nur unter die Bedingung, dass die Stadt vorher in Busse und Bahnen investiert.',
          'Doch, aber nur unter der Bedingung, dass die Stadt investiert vorher in Busse und Bahnen.'
        ]
      },
      { speaker: 'partner', german: 'Klingt vernünftig. Du hast mich fast überzeugt.', russian: 'Звучит разумно. Ты меня почти убедил.' },
      {
        speaker: 'me',
        german: 'Das freut mich. Wäre ich Bürgermeister, hätte ich das schon längst umgesetzt.',
        russian: 'Рад это слышать. Будь я мэром, я бы давно это осуществил.',
        wrong: [
          'Das freut mich. Wäre ich Bürgermeister, ich hätte das schon längst umgesetzt.',
          'Das freut mich. Wäre ich Bürgermeister, habe ich das schon längst umgesetzt.'
        ]
      }
    ]
  }
];
