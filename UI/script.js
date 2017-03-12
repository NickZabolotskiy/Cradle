
var articlesService = (function () {

var articles = [
    {
        id: '1',
        title: 'МВД России объявило "воров в законе" персонами нон грата',

        summary: 'Правоохранительные органы России продолжает всей своей мощью наступать на организованную преступность' +
        ' и ее представителей – «воров в законе». После громких арестов самых влиятельных «воров в законе»...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZabolotskiy',

        content: 'Система правоохранительных органов России продолжает всей своей мощью наступать на организованную ' +
        'преступность и ее представителей – «воров в законе». После громких арестов самых влиятельных «воров в законе»,' +
        ' ведущих свою деятельность в России, МВД России объявило всех «законников»-белорусов персонами нон грата,' +
        ' причем до конца дней своих, пишет crimerussia.com. Известно, что радикальное решение в отношении ' +
        '«титулованных» белорусов принял лично министр МВД России Владимир Колокольцев. О нем белорусских «законников» ' +
        'оповестили сотрудники ГУУР МВД России. Теперь пребывание «коронованных» белорусов в России считается' +
        ' нежелательным, для них действует пожизненный запрет на въезд в страну.'
    },
    {
        id: '2',
        title: '"Cамый центральный" памятник Ленину в Беларуси низвергнут',

        summary: 'Блогер tam-erm как-то решил выяснить, какой же памятник Ленину считать самым центральным в стране, исходя' +
        ' из географической близости к деревне Антоново...',

        createdAt: new Date('2016-12-03T12:44:12'),

        author: 'NickZ',

        content: 'В трёх километрах от железнодорожной станции Вендеж соорудили триангуляционный знак и мемориальную ' +
        'плиту с надписью "Геаграфічны цэнтр Рэспублікі Беларусь. Вызначаны і ўстаноўлены ў маі 1996 г. Бел КГА' +
        ' “Белгеадэзія” ГЦНТ і ВП "Аэрагеакарт" (Цитата не повторяет двух грамматических ошибок в надписи). Об этом ' +
        'можно было и не вспоминать, но тут есть некоторые любопытные обстоятельства. Блогер tam-erm как-то решил ' +
        'выяснить, какой же памятник Ленину считать самым центральным в стране, исходя из географической близости ' +
        'к деревне Антоново? Читатели блогера "центровым" признали памятник в Руденске. Не то чтобы опрос был' +
        ' репрезентативным, но иных исследований на эту тему не существует, поэтому будет ориентироваться на него.' +
        ' Да и логика в таком выборе есть, несмотря на большее расстояние от центра.'
    },
    {
        id: '3',
        title: 'Когда к «тунеядцам» начнут приходить судебные исполнители',

        summary: '― Я ему не поверил, потому что рановато ещё. Попросил копию акта описи имущества, ' +
        '― рассказывает Еврорадио Судаленко. ― Но с другой стороны, могли для профилактики точечно и пойти...',

        createdAt: new Date('2016-11-06T04:10:55'),

        author: 'Nick',

        content: '― Я ему не поверил, потому что рановато ещё. Попросил копию акта описи имущества, ― рассказывает ' +
        'Еврорадио Судаленко. ― Но с другой стороны, могли для профилактики точечно и пойти. Всё же 360 рублей он уже' +
        ' должен, плюс пеня. А как же суд, спросите вы? Можно и без него. Есть два варианта того, как будет взиматься' +
        ' сбор «на финансирование государственных расходов»: через суд (спорный порядок) и через нотариуса' +
        ' (бесспорный порядок). ― Если порядок бесспорный, это может быть сделано через исполнительную надпись через ' +
        'нотариальную палату, ― объясняют Еврорадио в отделе принудительного исполнения Новобелицкого района Гомеля.'+
        'Добровольно сбор «на финансирование государственных расходов» можно было оплатить до 20 февраля. Со следующего' +
        'дня «тунеядцем» начала «капать» пеня ― 16 копеек в день. И со следующего же дня налоговые инспекции получили' +
        ' право взимать неоплаченный сбор принудительно. А суд нужен только в том случае, если особо злостного ' +
        '« тунеядца» хотят наказать штрафом или арестом с принудительными работами.'
    },
    {
        id: '4',
        title: 'Честные ценники: чипсы по цене элитной говядины',

        summary: 'С 1 июля этого года Министерство антимонопольного регулирования и торговли (МАРТ) рекомендует ' +
        'магазинам указывать на ценниках две цены: за единицу товара и...',

        createdAt: new Date('2016-09-09T13:34:13'),

        author: 'NickZabolotskiy',

        content: 'Писать цену за круглую меру решили для того, чтобы покупателям было легче сравнивать стоимость ' +
        'одноименных товаров, ведь на полках стоят упаковки и по 500 граммов, и по 900. Выполнять указание еще не надо,' +
        ' но в некоторых магазинах уже можно увидеть двойные ценники. Зрелище это весьма любопытное. Корреспондент ' +
        '«Комсомолки» прошлась по магазину и посмотрела, что белорусы приобретают по «золотой» стоимости, даже не' +
        'подозревая об этом. Можно считать лапшу быстрого приготовления едой бедных студентов, но за килограмм вы' +
        ' отдадите в 3 раза больше, чем за вермишель из твердых сортов пшеницы. Многих покупателей впечатлили чипсы ' +
        'и сухарики, которые, судя по «честным ценникам», стоят вдвое дороже говядины. В том же магазине средняя ' +
        'цена 1 кг отруба из говядины - 7 рублей. Подсолнечные семечки стоят в 1,5 раза дороже фиников, семена тыквы' +
        ' - аж в 4 раза. То есть, если каждые выходные в течение года по вечерам щелкать семечки перед телевизором, ' +
        'на это уйдет 150 рублей.'
    },
    {
        id: '5',
        title: 'Светлане Алексиевич предложили возглавить Союз Писателей',

        summary: 'Кроме Алексиевич упоминаются и другие кандидатуры. Например, в качестве возможного преемника ' +
        'нынешнего руководства союза называют Всеволода Стебурако. "Ну, а почему нет?...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZ',

        content: 'Кроме Алексиевич упоминаются и другие кандидатуры. Например, в качестве возможного преемника' +
        ' нынешнего руководства союза называют Всеволода Стебурако. "Ну, а почему нет? Молодым надо давать дорогу!' +
        ' Сколько можно уже пенсионерам стоять у руля? К тому же сейчас он помощник нынешнего руководства, так что' +
        ' ему вполне могут передать власть", -- говорят некоторые члены Союза писателей. Как стало известно ' +
        '"Белорусскому партизану", буквально несколько дней назад собирался оргкомитет Союза белорусских писателей, ' +
        'который решил рекомендовать совету организации выдвинуть на должность председателя Союза белорусских ' +
        'писателей Бориса Петровича (Саченко). Это будет его второй срок на этой должности, по уставу это не запрещено' +
        ' – председателя Союза писателей выбирают на пять лет, а Саченко стоит у руля СПБ с 2011 года. "Не исключено,' +
        ' что кто-то решит выдвинуть свою кандидатуру прямо на съезде, -- комментирует предстоящую смену руководства' +
        '  Союза белорусских писателей Владимир Некляев. -- Как показывает практика, у нас так очень часто бывает.'
    },
    {
        id: '6',
        title: 'Власти не хотят банкротить убыточные госпредприятия',

        summary: 'Как заявил 1 марта на Ассамблее деловых кругов Александр Швец, в Беларуси не хотят' +
        ' банкротить предприятия, находящиеся в государственной собственности, пишет "Ежедневник"...',

        createdAt: new Date('2016-04-17T14:37:01'),

        author: 'Nick',

        content: 'Как заявил 1 марта на Ассамблее деловых кругов председатель Белорусской научно-промышленной ' +
        'ассоциации, член Совета по развитию предпринимательства в Беларуси Александр Швец, в Беларуси не хотят ' +
        'банкротить предприятия, находящиеся в государственной собственности, пишет "Ежедневник". С данными доводами' +
        ' категорически не согласился заместитель председателя Верховного суда Василий Демидович: «Кто вам сказал, ' +
        'что в государственных предприятиях нет банкротств? 106 предприятий, социально значимых, с государственной' +
        ' формой собственности, плюс 51% к уровню прошлого года, находятся в делах о банкротстве. К тому же еще 102' +
        ' колхоза, по которым возбуждены дела об экономической несостоятельности». «И никаких препятствий к возбуждению' +
        ' дел о банкротстве нет», – заявил он.'
    },
    {
        id: '7',
        title: 'За что Лукашенко уволил главу ПВТ?',

        summary: 'ПВТ не выполнил план по экспорту IT-услуг в 2016 году в $1 млрд. Это и стало официальной причиной' +
        ' отставки главы Парка высоких технологий Валерия Цепкало. Напомним, в апреле прошлого года Цепкало...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZabolotskiy',

        content: 'Как стало известно "Белорусскому партизану", ПВТ не выполнил план по экспорту IT-услуг в 2016 году' +
        ' в $1 млрд. Это и стало официальной причиной отставки главы Парка высоких технологий Валерия Цепкало.' +
        'Напомним, в апреле прошлого года Цепкало публично пообещал, что экспорт услуг Парка высоких технологий в 2016' +
        ' году вплотную приблизится к $1 млрд. "Когда мы десять лет назад писали обоснование для декрета о создании' +
        ' ПВТ, то запланировали за десятилетие достичь экспорта в $300-350 млн. И тогда это казалось очень' +
        ' оптимистичным прогнозом. По 2015 году экспорт составил уже более $700 млн, а если мы будем держать темпы' +
        ' роста, которые у нас были на протяжении предыдущих десяти лет, то в этом году приблизимся к миллиарду",' +
        ' - заявил тогда Цепкало. Однако, по итогам 2016 года объем экспорта Парка высоких технологий увеличился на' +
        ' 16% и составил только $820,6 миллиона. Именно провал планов по экспорту стал официальной причиной ' +
        'отставки главы ПВТ.'
    },
    {
        id: '8',
        title: 'Минтранс хочет "усовершенствовать" дорожный сбор',

        summary: 'В конце февраля руководитель «Минскоблдорстроя» Денис Степанов предложил пересмотреть систему сбора' +
        ' транспортного налога и включать его в стоимость топлива, объяснив это тем...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZ',

        content: 'В конце февраля руководитель «Минскоблдорстроя» Денис Степанов предложил пересмотреть систему сбора' +
        ' транспортного налога и включать его в стоимость топлива, объяснив это тем, что такая схема более оправдана' +
        ' – «чем больше человек ездит, тем больше он и платит». Позже на такую идею в эфире телеканала «Беларусь 1»' +
        ' первый заместитель министра транспорта Алексей Авраменко. Чиновник отметил, что «нынешний механизм может ' +
        'быть усовершенствован, но речи не идет о включении дорожного сбора в цену топлива». Придется ли белорусским' +
        ' автомобилистам вновь раскошелиться? Сухов: Ставки транспортного налога будут расти Представитель объединения' +
        ' «За авто» Федор Сухов считает, что как-либо усовершенствовать существующую модель власти вряд ли смогут. ' +
        '– Переносить транспортный налог в цену топлива они не станут, так как это будет нонсенс – ведь туда уже' +
        ' включен акциз. В этом случае в цене топлива будет сразу два налога на дорожные нужды, – отмечает эксперт. ' +
        'Тем не менее, собеседник уверен, что чиновники будут поднимать ставку налога, потому что «бюджет трещит по швам»...'
    },
    {
        id: '9',
        title: 'Сидорский ответил на критику Россельхознадзора',

        summary: 'Министр промышленности Сергей Сидорский в интервью "Комменсанту" разъяснил позиции ЕЭК и белорусских' +
        ' властей в споре о поставках некачественной продукции и лоббировании интересов...',

        createdAt: new Date('2016-01-28T20:22:04'),

        author: 'Nick',

        content: 'Министр промышленности и сельского хозяйства Евразийской экономической комиссии, экс-премьер-министр' +
        ' Беларуси Сергей Сидорский в интервью "Комменсанту" разъяснил позиции ЕЭК и белорусских властей в споре о' +
        ' поставках некачественной продукции и лоббировании интересов отдельных стран на уровне Евразийского союза.' +
        '— Глава Россельхознадзора Сергей Данкверт обвинил белорусских министров ЕЭК в лоббировании интересов' +
        ' Беларуси. Вы какую сторону представляете — белорусскую или международную? — Международную. В соответствии' +
        ' с положениями Договора о Евразийском экономическом союзе чиновник, в данном случае международный,' +
        ' представляет международную организацию. Мы не имеем права поддерживать интересы одной из сторон. Это в' +
        ' уставных документах организации записали наши президенты, поэтому я сейчас представляю международную ' +
        'организацию, которую обвинили в том, что она занимается «саботажем». '
    },
    {
        id: '10',
        title: 'При госзакупках в Беларуси разворовывается свыше $1 млрд',

        summary: 'При госзакупках из-за коррупции теряется около 20% выделенного бюджета. Это значит, что только в ' +
        '2015 году, Беларусь могла потерять $1,1 млрд. За эти деньги можно было...',

        createdAt: new Date('2016-10-05T11:10:42'),

        author: 'NickZabolotskiy',

        content: 'По статистике через госзакупки в Беларуси распределяется порядка 10% ВВП страны. По итогам 2015 года' +
        ' за счет средств бюджета были приобретены товары и услуги на $5,5 млрд – это треть всех расходов' +
        ' консолидированного бюджета. Такой суммы хватило бы чтобы полностью покрыть затраты государства на' +
        ' образование на 2 года. Госзакупки обошлись государству на 11% больше, чем зарплаты всех бюджетников страны.' +
        ' Добрый кусок этого пирога мог осесть в карманах чиновников, заказчиков и продавцов, считают авторы' +
        ' исследования «Государственные закупки из одного источника в Республике Беларусь: анализ и рекомендации».' +
        ' Его презентация прошла 28 февраля в Минске. «Сфера госзакупок - одна из самых коррупционных в любой стране, ' +
        'не только в Беларуси. Это сфера, где чиновники тратят незаработанные ими деньги, а когда тратишь чужие' +
        ' деньги – велик соблазн отщепить себе кусок, что бы построить дом, купить машину и жить безбедно»,' +
        ' - рассказывает руководитель проекта «Открытые закупки» Владимир Ковалкин.'
    },
    {
        id: '11',
        title: 'Ольга Корбут продает с аукциона свои медали',

        summary: 'В Далласе пройдет аукцион Platinum Night ("Платиновая ночь"), главными лотами на котором будут ' +
        'награды четырехкратной олимпийской чемпионки Ольги Корбут...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZabolotskiy',

        content: 'Организаторы аукциона надеются, что общая сумма продаж превысит 10 млн долларов. Такие события в ' +
        'мире происходят нечасто. «Коллекционеры ждали 40 лет возможности приобрести сокровища от Корбут и Книвела»,' +
        ' — сказал директор Heritage Sports Collectibles Крис Иви. Ольга Корбут лично выставила на аукцион свою ' +
        'обширную коллекцию наград и значков, среди которых пять олимпийских медалей из Мюнхена–1972 и Монреаля–1976,' +
        ' гимнастический купальник, который она надевала во время выступления в Лондоне в 1973 году, и значок мастера' +
        ' спорта СССР, врученный гимнастке Министерством спорта БССР в 1970 году. Последний раз я встречалась с Ольгой' +
        ' Корбут в июле 2008 года в Гонконге. Это была неожиданная и незапланированная встреча. Приехав в город,' +
        ' который готовился принять конные соревнования Олимпиады–2008, я прочитала в газете, что завтра в одном из' +
        ' торговых центров пройдут показательные выступления центра спортивной гимнастики Ольги Корбут. ' +
        'И что сама великая чемпионка там тоже будет.'
    },
    {
        id: '12',
        title: 'Гурков и Станюта: пара или нет?',

        summary: 'Известного боксера Виталия Гуркова и не менее известную в прошлом гимнасту Мелитину Станюта все ' +
        'чаще можно встретить вместе, пишет "Блог Трибуна". Все началось летом. Боксер...',

        createdAt: new Date('2016-11-22T15:19:45'),

        author: 'NickZ',

        content: 'Известного боксера Виталия Гуркова и не менее известную в прошлом гимнасту Мелитину Станюта все чаще' +
        ' можно встретить вместе, пишет "Блог Трибуна". Все началось летом. Боксер и музыкант сам опубликовал два ' +
        'снимка в инстаграме. История не получила продолжения. По крайней мере, в публичном поле. Только поздней' +
        ' осенью Мелитина Станюта неохотно прокомментировала эту тему в интервью Naviny.by: – Что происходит между ' +
        'вами и Виталием?   – Я, пожалуй, промолчу. Ну, да… Нас часто видели вместе. Летом. Да, что-то было… хорошее.' +
        ' Продолжится ли оно… Я не знаю… Не знаю, что сейчас вам об этом сказать… Как-то забылось, но в последние' +
        ' месяцы появилось много поводов вспомнить снова. Так, Гурков посетил прощальное выступление Станюты по ' +
        'случаю завершения карьеры в художественной гимнастике. Брутальный боец муай-тай выглядел очень сентиментально. ' +
        'В свою очередь изящная гимнастка дала спортсмену несколько комплиментов, но тему не развила.'
    },
    {
        id: '13',
        title: 'Парень без рук занялся тайским боксом',

        summary: '— Сначала я не понимал, как его тренировать. Простите, но в боксе главная часть тела — руки. ' +
        'Определённые тонкости в обучении есть, но разве это важно? Главное, он...',

        createdAt: new Date("2016-12-12T01:00:32"),

        author: 'Nick',

        content: '— Сначала я не понимал, как его тренировать. Простите, но в боксе главная часть тела — руки. ' +
        'Определённые тонкости в обучении есть, но разве это важно? Главное, он показывает такую энергию к жизни, ' +
        'что многие здоровые позавидуют, — говорит мастер спорта международного класса Антон Бекиш. С Денисом он ' +
        'знаком несколько лет, и тот не раз просил научить его боксу. Когда Денис пришёл в зал в первый раз, ребята' +
        ' помогли переодеться. Тренер провёл с новичком разминку. С той тренировки Денис вернулся «почти мёртвым», но' +
        ' довольным. Секцию посещает дважды в неделю. Занимается в общей группе по часу. Когда тренер говорит всем ' +
        'отжиматься, он приседает. Все наносят удары руками, Денис — ногами. Усиленно качает пресс и мышцы спины. ' +
        'Необычный боец отрабатывает движения головой и удары плечами. Иногда его тренирует чемпион Европы по тайскому' +
        ' боксу Дмитрий Варец. Денис — охранник в одном из строймаркетов города. До этого был в охране ночного клуба, ' +
        'универмага. Он уверен: выученные на тренировках приёмы помогут в работе.'
    },
    {
        id: '14',
        title: 'Гандболист-легионер: белорусы не используют "мову"',

        summary: '- С одной стороны, так хорошо — люди будут стремиться работать, а не просто получать деньги от ' +
        'государства. Но с другой — мне кажется, сейчас хозяева могут сказать...',

        createdAt: new Date('2016-06-14T19:27:53'),

        author: 'NickZabolotskiy',

        content: ' С одной стороны, так хорошо — люди будут стремиться работать, а не просто получать деньги от ' +
        'государства. Но с другой — мне кажется, сейчас хозяева могут сказать: работай за пятьдесят долларов, или не' +
        ' получишь вообще ничего. И придется трудиться за пятьдесят, чтобы не платить двести. Средняя зарплата в' +
        ' Хорватии — восемьсот евро. Но что значит "средняя"? Она учитывает директоров, президента, ' +
        'премьер-министра... А многие работают за 500-600 евро. Больше, чем в Беларуси, но и цены дороже. Годовая' +
        ' страховка на машину — 250-300, а то и 500 евро. Моя мама чисто на коммуналку тратит 200-220 евро в месяц. ' +
        'Любо Вукич удивлен тем, что в Беларуси мало людей, разговаривающих на "мове". - Для меня очень, очень странно,' +
        ' что здесь мало кто говорит по-белорусски. Мы-то двадцать лет назад воевали, в том числе, для того, чтобы' +
        ' разговаривать на хорватском языке. А в Беларуси национальный язык не используется.'
    },
    {
        id: '15',
        title: 'Начался суд над бывшим футболистом сборной Беларуси',

        summary: 'Он обвиняется в даче взятки уже осужденному экс-директору департамента судейства Белорусской ' +
        'федерации футбола Андрею Жукову в размере 100 евро за назначение Андрея Сороки в качестве ...',

        createdAt: new Date('2016-10-01T13:57'),

        author: 'NickZ',

        content: 'Он обвиняется в даче взятки уже осужденному экс-директору департамента судейства Белорусской' +
        ' федерации футбола Андрею Жукову в размере 100 евро за назначение Андрея Сороки в качестве судьи на матч' +
        ' «Сморгонь» — «Орша». По словам прокурора, целью взятки было получение прибыли при помощи выигрышной' +
        ' ставки в букмекерской конторе, пишет tut.by Рындюк признал вину в части дачи взятки, но отрицает' +
        ' корыстный умысел. В конце мая 2016 года «Сморгонь» в первой лиге преследовала череда неудач, и как' +
        ' главный тренер он был неудовлетворен судейством. Поскольку предстоял важный матч с «Оршей», попросил' +
        ' Жукова назначить на предстоящую игру квалифицированного арбитра, например, Андрея Сороку. При этом' +
        ' обвиняемый отметил, что был бы удовлетворен и назначением другого опытного судьи. Жуков, по словам Рындюка,' +
        ' ничего не обещал, но сказал, что поможет с назначением Сороки, «если будет возможность». В итоге назначение' +
        ' состоялось, «Сморгонь» выиграла матч, претензий к судейству ни у кого не было.'
    },
    {
        id: '16',
        title: 'Немецкая пресса: Минск хочет помощи',

        summary: 'Фотография женщины с крышками от кастрюль на четверть страницы и заголовок «Оттепель в Беларуси».' +
        ' Статья начинается с рассказа про 83-летнюю Марию Венедиктовну, которая...',

        createdAt: new Date('2017-01-22T12:14:25'),

        author: 'NickZabolotskiy',

        content: 'Фотография женщины с крышками от кастрюль на четверть страницы и заголовок «Оттепель в Беларуси».' +
        ' Статья начинается с рассказа про 83-летнюю Марию Венедиктовну, которая выступила на митинге в Гомеле (по' +
        ' оценке немецкого издания, в митинге приняли участие 2000 человек): «Лукашенко не оправдал нашего доверия.' +
        ' Я всегда буду выступать против него». Немецкий журналист связывает протесты с рядом других позитивных и' +
        ' отрицательных тенденций, которые, по его мнению, отражают глубинные изменения в белорусской политике. ' +
        'Экономический кризис, вызванный хозяйственным и финансовым ослаблением России — ключевого партнера ' +
        'Беларуси, — привел последнюю в критическое положение. Но журналист Франк Нинхузен показывает, что и ранее' +
        ' Беларусь регулярно проявляла своенравие — как в случае с грузинскими автономиями и Крымом.'
    },
    {
        id: '17',
        title: 'Борец за права "тунеядцев" стал "Рыцарем года"',

        summary: 'Председатель независимого Профсоюза радиоэлектронной промышленности (РЭП) Геннадий Федынич стал' +
        ' лауреатом ежегодной премии "Рыцарь года: с открытым забралом", которая...',

        createdAt: new Date('2016-08-18T23:17:33'),

        author: 'NickZ',

        content: 'Председатель независимого Профсоюза радиоэлектронной промышленности (РЭП) Геннадий Федынич стал' +
        ' лауреатом ежегодной премии "Рыцарь года: с открытым забралом", которая присуждается за проявление смелости' +
        ' в борьбе за возрождение свободы и демократии в Беларуси, передает "Немецкая волна". В 2016 году Федынич' +
        ' и юристы РЭП много сделали для защиты граждан от принудительного труда и уплаты так называемого ' +
        '"налога на тунеядцев" - сбора, введенного декретом №3 "О предупреждении социального иждивенчества", ' +
        'обосновало свое решение жюри. "Федынич - один из первых, кто вместе с правозащитниками организовал' +
        ' общественные приемные по оказанию правовой помощи пострадавшим от декрета, где было проведено более 22 ' +
        'тысяч консультаций. Я считаю, что это очень сильный шаг мужественного человека", - подчеркнул на вручении ' +
        'премии в среду, 1 марта, один из лидеров движения имени Юрия Захаренко "Защитники Отечества" Олег Волчек.'
    },
    {
        id: '18',
        title: 'Тайная империя Дмитрия Медведева',

        summary: 'Речь идет о резиденциях премьер-министра Дмитрия Медведева в Плесе, на родине предков чиновника в' +
        ' Курской области и в Сочи. Вся недвижимость записана на компании...',

        createdAt: new Date('2016-11-29T22:40:18'),

        author: 'Nick',

        content: 'Все объекты недвижимости и яхты так или иначе связаны с некоммерческими фондами, в руководство' +
        ' которых входят или входили близкие к Дмитрию Медведеву люди. Наиболее часто в расследовании упоминается ' +
        'однокурсник Медведева, член совета директоров Газпромбанка Илья Елисеев. Он входит в наблюдательный совет ' +
        'фонда «Дар». Этот фонд владел резиденцией в Плесе (потом ее передали другому фонду, который возглавляет ' +
        'сотрудник «Дара»). Земля под резиденцией в Сочи была изначально оформлена на фонд «Дар». Потом ее передали ' +
        'другому фонду, учредитель которого работает в «Даре». Тот же Елисеев возглавляет фонд «Соцгоспроект», ' +
        'которому предприниматель Алишер Усманов в 2010 году подарил особняк в Знаменском (Рублевка). Директор ' +
        'фонда «Соцгоспроект» — еще один однокурсник Медведева Алексей Четвертков.'
    },
    {
        id: '19',
        title: 'Юнкер представил пять сценариев будущего ЕС ',

        summary: 'Как передает УНИАН, соответствующие сценарии, рассчитанные до 2025 года, были представлены Юнкером' +
        ' сегодня в Брюсселе в Европейском парламенте. «В то время, когда мы...',

        createdAt: new Date('2016-07-07T15:31:55'),

        author: 'NickZabolotskiy',

        content: 'Как передает УНИАН, соответствующие сценарии, рассчитанные до 2025 года, были представлены Юнкером ' +
        'сегодня в Брюсселе в Европейском парламенте. «В то время, когда мы отмечаем 60-ю годовщину подписания ' +
        'Римского договора, настало время для объединенной Европы 27 (государств-членов) сформировать видение своего' +
        ' будущего. Пришло время для лидерства, единства и общей решимости. «Белая книга» Комиссии представляет ряд' +
        ' различных путей, которые объединенный ЕС-27 мог бы выбрать, чтобы идти дальше. Это - начало процесса, а не' +
        ' конец, и я надеюсь, что теперь произойдет честная и широкая дискуссия. Будущее Европы в наших руках»,' +
        ' - сказал он. В частности, первый сценарий под названием «Продолжать так, как есть», предусматривает, что ЕС' +
        ' будет продолжать повестку дня реформ в духе действующей Европейской комиссии, что на практике означает,' +
        ' что, продолжая путешествовать через границы без остановки для проверки, европейцы должны быть готовыми' +
        ' прибыть в аэропорт и на железнодорожные станции задолго из-за усиления контроля безопасности.'
    },
    {
        id: '20',
        title: 'Со стройки у Куропат вывозят бытовки и технику',

        summary: 'Утром 2 марта на строительную площадку приехала пустая фура и небольшой строительный кран - рабочие' +
        ' говорят, что забирают строительные материалы с площадки. Активисты и лично...',

        createdAt: new Date('2016-04-12T21:42:05'),

        author: 'NickZ',

        content: 'Для застройщика, который входит в топ миллионеров, эти пару миллионов - не такие уж и деньги.' +
        ' Впрочем, мы предлагали: ребята, скажите, сколько вам нужно денег, чтобы остановить стройку. Мы бы ' +
        'скинулись миром, талаку бы объявили. Они отказались. И что теперь? Сейчас ни денег, ни стройки»,' +
        ' - комментирует Дмитрий Дашкевич то, что происходит сейчас в Куропатах. Напомним, накануне прошли ' +
        'переговоры с председателем Мингорисполкома на тему конфликта вокруг урочища Куропаты. Несмотря на решение ' +
        'приостановить стройку на неделю, активисты отказались ликвидировать лагерь защитников Куропат и требуют ' +
        'окончательного прекращения строительства бизнес-центра. «Боевая ничья» - так подытожил в среду переговоры ' +
        'Павел Северинец. Лагерь активистов рядом со стройкой у мемориального комплекса «Куропаты» стоит уже 11-й ' +
        'день. Накануне вечером активисты решили продолжать охрану территории, потому что допускают возможность ' +
        'восстановления незаконной стройки.'
    },
];
function getArticles(skip, top, filterConfig) {
    if(skip == undefined) skip =0;
    if(top == undefined) top =10;

    var select = articles;
    if(filterConfig != undefined && filterConfig.author != undefined) {
        select = select.filter(function (a) {
            if (a.author == filterConfig.author) return true;
            else return false;
        });
    }

    if(filterConfig != undefined && filterConfig.createdAt != undefined) {
        select = select.filter(function (a) {
            if (a.createdAt - filterConfig.createdAt == 0) return true;
            else return false;
        });
    }
    select.sort(function (a, b) { return b.createdAt - a.createdAt; });
    return  select.slice(skip, skip + top);
}
function getArticle(id) {
    for(var i=0; i<articles.length; i++){
        if(articles[i].id == id) return articles[i];
    }
}
function validateArticle(article) {
    if(typeof article != "object") return false;

    if(typeof article.id != "string") return false;

    if(typeof article.title !="string") return false;
    if( article.title.length >= 100 || article.title.length==0) return false;

    if(typeof article.summary != "string") return false;
    if( article.summary.length >= 200) return false;

    if(typeof article.author != "string") return false;
    if(article.author.length==0) return false;

    if(typeof article.content != "string") return false;
    if(article.content.length==0) return false;

    try{
        if(isNaN(article.createdAt.getYear())) return false;
        if(isNaN(article.createdAt.getMonth())) return false;
        if(isNaN(article.createdAt.getDay()))return false;
        if(isNaN(article.createdAt.getHours())) return false;
        if(isNaN(article.createdAt.getMinutes())) return false;
        if(isNaN(article.createdAt.getSeconds())) return false;

    }catch(e){ return false; }
    return true;
}
function addArticle(article){
    if(validateArticle(article)) {
        for (var i = 0; i < articles.length; i++)  if (articles[i].id == article.id) return false;
        articles.unshift(article)
    }
    else return false;
    return true;
}
function editArticle(id, article) {
    for(var i=0; i<articles.length; i++){
        if(articles[i].id == id) {
            if(validateArticle(articles[i])) {
                if(typeof article.title =="string"){
                    if( article.title.length >= 100 || article.title.length == 0) return false;
                    articles[i].title = article.title;
                }
                if(typeof article.summary == "string"){
                    if( article.summary.length>=200) return false;
                    articles[i].summary= article.summary;
                }
                if(typeof article.content == "string") {
                    if( article.content.length ==0) return false;
                    articles[i].content = article.content;
                }
                return true;
            }
        }
    }
    return false;
}
function removeArticle(id) {
    for(var i=0; i<articles.length; i++){
        if(articles[i].id == id) {
            articles.splice(i,1);
            return true;
        }
    }
    return false;
}

return{
    getArticles: getArticles,
    getArticle: getArticle,
    validateArticle: validateArticle,
    addArticle: addArticle,
    editArticle: editArticle,
    removeArticle:  removeArticle,
    articles: articles
};
}());

// console.log("----- MAIN ARRAY ");
// console.log(articlesService.articles);
//
//
// console.log(" ");
// console.log("----- filters + pagination ");
//
// console.log("||||| first 10 - filter: Nick");
// console.log(articlesService.getArticles(0,10,{author:"Nick"}));
// console.log("|||||   first 10 - filter: bg");
// console.log(articlesService.getArticles(0,10,{author:"bg"}));
//
// console.log("|||||   first 10 - filter: 2016-04-12T21:42:05");
// console.log(articlesService.getArticles(0,10,{createdAt: new Date('2016-04-12T21:42:05')}));
//
// console.log("|||||   first 10 - filter: 2016-04-12T21:42:05  and NickZabolotskiy");
// console.log(articlesService.getArticles(0,10,{author:"NickZabolotskiy", createdAt: new Date('2016-04-12T21:42:05')}));
//
// console.log("|||||   second 10 - filter: trt");
// console.log(articlesService.getArticles(10,10,{author:"trt"}));
//
// console.log("|||||   first 10 - filter: NickZ");
// console.log(articlesService.getArticles(0,10,{author:"NickZ"}));
// console.log("|||||   second 10 - filter: NickZ");
// console.log(articlesService.getArticles(10,10,{author:"NickZ"}));
//
// console.log("|||||   only second 10");
// console.log(articlesService.getArticles(10,10));
//
// console.log("|||||   fisrt 10");
// console.log(articlesService.getArticles(10));
//
// console.log("|||||   without arguments");
// console.log(articlesService.getArticles());
//
//
//
// console.log(" ");
// console.log("----- get element ");
// console.log("|||||   id  = 3");
// console.log(articlesService.getArticle('3'));
// console.log("|||||   id  = 235");
// console.log(articlesService.getArticle('235'));
// console.log("|||||   id  = '' ");
// console.log(articlesService.getArticle(''));
// console.log("|||||   id  = 'rg' ");
// console.log(articlesService.getArticle('rg'));
//
//
// console.log(" ");
// console.log("----- validate element ");
// console.log("|||||   empty structure");
// console.log(articlesService.validateArticle());
// console.log("|||||   normal structure");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   with zero title");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   without id");
// console.log(articlesService.validateArticle(
//     {title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   without title");
// console.log(articlesService.validateArticle(
//     {id:'34',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   without summary");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   without date");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   with bad date");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('ItsNotDate'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   without author");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),content:'SomeContent'}
// ));
// console.log("|||||   with zero author");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'',content:'SomeContent'}
// ));
// console.log("|||||   without conetnt");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam'}
// ));
// console.log("|||||   with zero content");
// console.log(articlesService.validateArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:''}
// ));
//
//
// console.log(" ");
// console.log("----- add element ");
// console.log("|||||   normal structure");
// console.log(articlesService.addArticle(
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   wiht bad data");
// console.log(articlesService.addArticle(
//     {id:'85',title:'titleTemp',summary:'someSummary',createdAt: new Date('someThing'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   with bad title");
// console.log(articlesService.addArticle(
//     {id:'74',title:'',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   with ID what already exist");
// console.log(articlesService.addArticle(
//     {id:'4',title:'titleTemp2',summary:'SecondsomeSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIamNick',content:'SomeSomeContent'}
// ));
// console.log("|||||   empty structure");
// console.log(articlesService.addArticle( ));
//
//
// console.log(" ");
// console.log("----- edit element ");
// console.log("|||||   rebuild 12-th element: content:'SomeContent',title:'titleTemp',summary:'someSummary' ");
// console.log(articlesService.editArticle(12,
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   rebuild element what no exist: ID = 32");
// console.log(articlesService.editArticle(32,
//     {id:'34',title:'titleTemp',summary:'someSummary',createdAt: new Date('1991-08-15T23:12:44'),author:'ItsIam',content:'SomeContent'}
// ));
// console.log("|||||   rebuild no valid element ");
// console.log(articlesService.editArticle(14,
//     {id:'10',title:'',createdAt: new Date('tratata'),author:'ItsIam',content:'SomeContent'}
// ));
//
//
//
// console.log(" ");
// console.log("----- remove element ");
// console.log("|||||   remove element winh ID = 4");
// console.log(articlesService.removeArticle(4));
// console.log("|||||   remave element winh ID = evfe");
// console.log(articlesService.removeArticle('evfe'));
// console.log("|||||   remove element winh ID = ''");
// console.log(articlesService.removeArticle(''));


// for (var i = 0; i < document.body.childNodes.length; i++)
//     alert( document.body.childNodes[i] );