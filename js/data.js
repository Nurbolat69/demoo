/**
 * DIGITAL MUSEUM DATASET
 * «Спандияр Көбеев – ұлт ағартушысының өмір жолы»
 */

const MUSEUM_STATIONS = [
  {
    id: 1,
    number: "1",
    posX: 13,
    posY: 38,
    pathSegmentIndex: 1,
    titleKaz: "Ақсуат ауданы",
    titleRu: "Ауыл Аксуат",
    subtitleKaz: "Балалық шақ пен білім бастауы",
    subtitleRu: "Рождение и истоки",
    period: "1878 — 1892",
    badgeLabel: "1. Балалық шағы",
    image: "assets/station1_aksuat.jpg",
    photoItems: [
      {
        src: "assets/station1_aksuat.jpg",
        captionKaz: "Спандияр Көбеевтің туған жері — Ақсуат ауылының тарихи көрінісі",
        captionRu: "Исторический вид родного аула Аксуат — колыбели Спандияра Көбеева",
        type: "landscape"
      }
    ],
    summaryKaz: "Спандияр Көбеевтің туған жері, алғашқы ауыл мектебіндегі білім бастауы.",
    summaryRu: "Место рождения и первые шаги Спандияра Көбеева к грамоте и знаниям.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1878–1892 жж. • Ақсуат жері</div>
        <h3 class="archive-heading">Балалық шағы мен білімге алғашқы қадам</h3>
        <p class="archive-text">
          Спандияр Көбеев 1878 жылы 1 (13) қазанда Торғай облысы, Қостанай уезіне қарасты <strong>Ақсуат ауылында</strong> дүниеге келген. 
          Қарапайым шаруа отбасында туып-өскен ол жастайынан зеректігімен, білімге деген ерекше құштарлығымен дараланды.
        </p>
        <p class="archive-text">
          Ауыл молдасынан хат танып, кейін Ыбырай Алтынсарин негізін қалаған мектептер туралы естіп, білім алуға үлкен ынта танытады. Оның балалық шағы қазақ даласындағы ағартушылық қозғалыстың өркендеген кезеңімен тұспа-тұс келді.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">📍</div>
            <div class="fact-card__title">Туған жері</div>
            <div class="fact-card__desc">Ақсуат ауылы, Торғай облысы, Қостанай уезі</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📖</div>
            <div class="fact-card__title">Алғашқы қадам</div>
            <div class="fact-card__desc">Ауыл молдасынан хат тану, ауыз әдебиеті мен дастандар</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌟</div>
            <div class="fact-card__title">Басты мақсаты</div>
            <div class="fact-card__desc">Орыс-қазақ мектебіне түсіп, терең білім алу</div>
          </div>
        </div>

        <blockquote class="archive-quote">
          «Білімге деген құштарлық менің бала күнгі ең үлкен арманым болды...»
          <cite>— Спандияр Көбеев («Орындалған арман» мемуарынан)</cite>
        </blockquote>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1878–1892 гг. • Урочище Аксуат</div>
        <h3 class="archive-heading">Детство и первые шаги к просвещению</h3>
        <p class="archive-text">
          Спандияр Көбеев родился 1 (13) октября 1878 года в ауле <strong>Аксуат</strong> Тургайской области (ныне Мендыкаринский район Костанайской области). 
          Родившись в семье простого скотовода, он с ранних лет проявлял невероятное стремление к грамоте и знаниям.
        </p>
        <p class="archive-text">
          Обучившись основам грамоты у аульного муллы, юный Спандияр страстно мечтал поступить в настоящую светскую школу, открытую великим просветителем Ибраем Алтынсариным.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">📍</div>
            <div class="fact-card__title">Место рождения</div>
            <div class="fact-card__desc">Аул Аксуат, Тургайская область</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📖</div>
            <div class="fact-card__title">Первая грамота</div>
            <div class="fact-card__desc">Аульная школа, чтение книг, степной фольклор</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌟</div>
            <div class="fact-card__title">Главная цель</div>
            <div class="fact-card__desc">Поступление в школу И. Алтынсарина</div>
          </div>
        </div>

        <blockquote class="archive-quote">
          «Стремление к знаниям было моим главным компасом с самого раннего детства...»
          <cite>— Спандияр Көбеев (из автобиографических записок)</cite>
        </blockquote>
      </div>
    `
  },
  {
    id: 2,
    number: "2",
    posX: 28,
    posY: 61,
    pathSegmentIndex: 2,
    titleKaz: "Ы. Алтынсарин мектебі",
    titleRu: "Школа им. И. Алтынсарина",
    subtitleKaz: "Торғайдағы 2 кластық орыс-қазақ мектебі",
    subtitleRu: "2-классное русско-казахское училище",
    period: "1892 — 1895",
    badgeLabel: "2. Ы. Алтынсарин мектебі",
    image: "assets/station2_school.jpg",
    photoItems: [
      {
        src: "assets/station2_school.jpg",
        captionKaz: "Ыбырай Алтынсарин негізін қалаған екі сыныптық орыс-қазақ мектебі",
        captionRu: "Двухклассное русско-казахское училище, основанное Ибраем Алтынсариным",
        type: "landscape"
      }
    ],
    summaryKaz: "Ыбырай Алтынсарин негізін қалаған училищедегі білім алу кезеңі.",
    summaryRu: "Обучение в училище, открытом великим Ибраем Алтынсариным.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1892–1895 жж. • Торғай өңірі</div>
        <h3 class="archive-heading">Ыбырай мектебіндегі тәлім мен тәрбие</h3>
        <p class="archive-text">
          1892 жылы Спандияр Көбеев Торғайдағы 2 сыныптық орыс-қазақ училищесіне қабылданады. Бұл оқу орны ұлы ағартушы <strong>Ыбырай Алтынсариннің</strong> тікелей бастамасымен салынған болатын.
        </p>
        <p class="archive-text">
          Мұнда ол орыс және әлем әдебиетінің озық үлгілерімен, педагогикалық әдіс-тәсілдермен терең танысып, болашақ ұстаздық жолының берік іргетасын қалайды.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏛️</div>
            <div class="fact-card__title">Оқу орны</div>
            <div class="fact-card__desc">Торғайдағы 2 сыныптық орыс-қазақ училищесі</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📚</div>
            <div class="fact-card__title">Оқу пәндері</div>
            <div class="fact-card__desc">Ана тілі, орыс тілі, география, тарих, жаратылыстану</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Жетекшілер</div>
            <div class="fact-card__desc">Ыбырай Алтынсариннің шәкірттері мен озық педагогтар</div>
          </div>
        </div>

        <blockquote class="archive-quote">
          «Алтынсарин салған сара жол біздің өмірлік шамшырағымызға айналды...»
          <cite>— Спандияр Көбеев</cite>
        </blockquote>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1892–1895 гг. • Тургайское училище</div>
        <h3 class="archive-heading">Свет знаний в стенах школы Алтынсарина</h3>
        <p class="archive-text">
          В 1892 году Спандияр поступает в двухклассное русско-казахское училище в Тургае, основанное <strong>Ибраем Алтынсариным</strong>.
        </p>
        <p class="archive-text">
          Именно здесь сформировалось мировоззрение будущего педагога и писателя. Он впитал идеи гуманизма, просвещения и бескорыстного служения своему народу.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏛️</div>
            <div class="fact-card__title">Учебное заведение</div>
            <div class="fact-card__desc">2-классное русско-казахское училище в Тургае</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📚</div>
            <div class="fact-card__title">Предметы</div>
            <div class="fact-card__desc">Языки, мировая литература, математика, естествознание</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Наставники</div>
            <div class="fact-card__desc">Прямые последователи и соратники И. Алтынсарина</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    number: "3",
    posX: 42,
    posY: 78,
    pathSegmentIndex: 3,
    titleKaz: "Педагогикалық үлес",
    titleRu: "Педагогическое наследие",
    subtitleKaz: "Мұғалімдік курстар және ұстаздық жол",
    subtitleRu: "Учительские курсы и призвание",
    period: "1895 — 1901",
    badgeLabel: "3. Педагогика",
    image: "assets/station3_pedagogy1.jpg",
    images: ["assets/station3_pedagogy1.jpg", "assets/station3_pedagogy2.jpg"],
    photoItems: [
      {
        src: "assets/station3_pedagogy1.jpg",
        captionKaz: "Спандияр Көбеев шәкірттері мен ауыл тұрғындарының ортасында",
        captionRu: "Спандияр Көбеев среди учеников и жителей аула",
        type: "landscape"
      },
      {
        src: "assets/station3_pedagogy2.jpg",
        captionKaz: "Ағартушының ұстаздық қызметі мен тарихи ұжым",
        captionRu: "Педагогическая деятельность просветителя и коллеги",
        type: "landscape"
      }
    ],
    summaryKaz: "Қостанайдағы педагогикалық курстарды бітіріп, ұстаздық қызметке кірісуі.",
    summaryRu: "Окончание педагогических курсов и начало учительской деятельности.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1895–1901 жж. • Ұстаздық бастау</div>
        <h3 class="archive-heading">Ағартушылық миссиясы мен жаңашыл ұстаздық</h3>
        <p class="archive-text">
          1895-1897 жылдары Қостанай қаласындағы мұғалімдер даярлайтын курсты үздік бітірген Спандияр Көбеев халыққа қызмет етуді өзінің басты борышы санады.
        </p>
        <p class="archive-text">
          Ол әдістемелік жаңашылдықтарды енгізіп, балаларды ана тілінде оқытумен қатар орыс тілі мен дүниетанымдық пәндерді қатар меңгеруге баулыды.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Мұғалімдік куәлік</div>
            <div class="fact-card__desc">1897 жылы Қостанайда мұғалім атағын алды</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📝</div>
            <div class="fact-card__title">Әдістеме</div>
            <div class="fact-card__desc">Түсіндірмелі оқыту, мысалдар арқылы тәрбиелеу</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌱</div>
            <div class="fact-card__title">Ұстаным</div>
            <div class="fact-card__desc">Қыз балалар мен кедей балаларын оқуға тарту</div>
          </div>
        </div>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1895–1901 гг. • Педагогическое кредо</div>
        <h3 class="archive-heading">Миссия просветителя и инновации в обучении</h3>
        <p class="archive-text">
          Окончив педагогические курсы в Костанае, Спандияр Көбеев получил звание народного учителя и всю свою жизнь посвятил просвещению степи.
        </p>
        <p class="archive-text">
          Он отстаивал идеи доступности образования для всех слоев населения, особенно для детей бедняков и девочек.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Диплом учителя</div>
            <div class="fact-card__desc">1897 год — выпуск из педагогических классов</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📝</div>
            <div class="fact-card__title">Методика</div>
            <div class="fact-card__desc">Наглядное обучение, связь теории с жизнью степи</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌱</div>
            <div class="fact-card__title">Принцип</div>
            <div class="fact-card__desc">Равенство и гуманность в школьном воспитании</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    number: "4",
    posX: 56,
    posY: 57,
    pathSegmentIndex: 4,
    titleKaz: "Ақсуат ауыл мектебі",
    titleRu: "Аульная школа Аксуат",
    subtitleKaz: "Мектеп ашу және 40 жылдық еңбек",
    subtitleRu: "Создание школы и 40 лет служения",
    period: "1901 — 1944",
    badgeLabel: "4. Ақсуат мектебі",
    image: "assets/station4_school.jpg",
    images: ["assets/station4_school.jpg", "assets/station4_gramota.jpg"],
    photoItems: [
      {
        src: "assets/station4_school.jpg",
        captionKaz: "Спандияр Көбеев негізін қалаған Ақсуат ауылдық орта мектебінің ғимараты",
        captionRu: "Здание Аксуатской сельской школы, возведённой Спандияром Көбеевым",
        type: "landscape"
      },
      {
        src: "assets/station4_gramota.jpg",
        captionKaz: "Қазақ КСР Жоғарғы Кеңесі Президиумының Құрмет грамотасы (1949 ж.)",
        captionRu: "Почётная грамота Президиума Верховного Совета Казахской ССР (1949 г.)",
        type: "document"
      }
    ],
    summaryKaz: "Туған ауылында өз қолымен мектеп салып, 40 жылдан астам ұстаздық етуі.",
    summaryRu: "Строительство школы в родном ауле и более 40 лет непрерывного преподавания.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1901–1944 жж. • Ақсуат ауылы</div>
        <h3 class="archive-heading">Ақсуат ауыл мектебі – ұстаздың ұлы еңбегі</h3>
        <p class="archive-text">
          Спандияр Көбеев 40 жылдан астам уақыт бойы мектепте ұстаздық етті. Ол өз қаражатына және ауыл тұрғындарының көмегімен <strong>Ақсуат ауыл мектебін</strong> салып, оны білім ордасына айналдырды.
        </p>
        <p class="archive-text">
          1944 жылы Спандияр Көбеевке ерен еңбегі үшін <strong>«Қазақ КСР-нің еңбек сіңірген мұғалімі»</strong> құрметті атағы берілді. Бұл халықтық ұстаздың өлшеусіз еңбегіне берілген лайықты баға еді.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏫</div>
            <div class="fact-card__title">Еңбек өтілі</div>
            <div class="fact-card__desc">40 жылдан астам уақыт бойы бір ауылда білім берді</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎖️</div>
            <div class="fact-card__title">Құрметті атақ</div>
            <div class="fact-card__desc">Қазақ КСР-нің еңбек сіңірген мұғалімі (1944 ж.)</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🏅</div>
            <div class="fact-card__title">Мемлекеттік марапат</div>
            <div class="fact-card__desc">Екі рет Ленин орденімен марапатталған</div>
          </div>
        </div>

        <blockquote class="archive-quote">
          «Мұғалімнің басты бақыты — өзі оқытқан шәкірттерінің елге қызмет еткенін көру...»
          <cite>— Спандияр Көбеев</cite>
        </blockquote>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1901–1944 гг. • Школа в Аксуате</div>
        <h3 class="archive-heading">Сельская школа — дело всей жизни</h3>
        <p class="archive-text">
          Спандияр Көбеев более 40 лет преподавал в сельской школе. Он лично организовал строительство школы в Аксуате, превратив её в центр культуры и знаний.
        </p>
        <p class="archive-text">
          В 1944 году ему было присвоено почетное звание <strong>«Заслуженный учитель Казахской ССР»</strong>, а за выдающийся вклад он был дважды награжден орденом Ленина.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏫</div>
            <div class="fact-card__title">Педагогический стаж</div>
            <div class="fact-card__desc">Более 40 лет верного служения родной школе</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎖️</div>
            <div class="fact-card__title">Звание</div>
            <div class="fact-card__desc">Заслуженный учитель Казахской ССР (1944)</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🏅</div>
            <div class="fact-card__title">Награды</div>
            <div class="fact-card__desc">Два ордена Ленина, медали за доблестный труд</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    number: "5",
    posX: 73,
    posY: 63,
    pathSegmentIndex: 5,
    titleKaz: "Әдебиетке қосқан үлесі",
    titleRu: "Литературное творчество",
    subtitleKaz: "«Қалың мал» романы және мысалдар",
    subtitleRu: "Роман «Калым» и переводы басен",
    period: "1910 — 1951",
    badgeLabel: "5. Әдебиет",
    image: "assets/station5_kalyng_mal.jpg",
    images: ["assets/station5_kalyng_mal.jpg", "assets/station5_oryndalghan.jpg"],
    photoItems: [
      {
        src: "assets/station5_kalyng_mal.jpg",
        captionKaz: "«Қалың мал» романы (1913 ж.) — қазақ әдебиетіндегі тұңғыш романдардың бірі",
        captionRu: "Роман «Калым» (1913 г.) — один из первых казахских романов",
        type: "book"
      },
      {
        src: "assets/station5_oryndalghan.jpg",
        captionKaz: "«Орындалған арман» мемуарлық романы (1951 ж.)",
        captionRu: "Мемуарная повесть «Сбывшаяся мечта» (1951 г.)",
        type: "book"
      }
    ],
    video: "assets/station5_video.mp4",
    videoTitleKaz: "Сұхбат Серікбай Оспанұлымен",
    videoTitleRu: "Интервью с Серикбаем Оспанулы",
    videoDescKaz: "",
    videoDescRu: "",
    summaryKaz: "Қазақ әдебиетіндегі тұңғыш романдардың бірі «Қалың мал» және Крылов мысалдарын аударуы.",
    summaryRu: "Создание одного из первых казахских романов «Калым» и переводы басен И. Крылова.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1910–1951 жж. • Қаламгерлік мұра</div>
        <h3 class="archive-heading">Қазақ прозасының қарлығашы және мысалшы ұстаз</h3>
        <p class="archive-text">
          1913 жылы Қазан қаласында Спандияр Көбеевтің әйгілі <strong>«Қалың мал» романы</strong> жарық көрді. Бұл туынды — қазақ әдебиеті тарихындағы алғашқы романдардың бірі ретінде әйел теңдігі мен әлеуметтік әділеттілік мәселесін өткір көтерді.
        </p>
        <p class="archive-text">
          Сондай-ақ ол 1910 жылы И. Крыловтың мысалдарын қазақ тіліне аударып, «Үлгілі тәржіме», «Үлгілі бала» оқу құралдарын бастырып шығарды.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">📖</div>
            <div class="fact-card__title">«Қалың мал» (1913)</div>
            <div class="fact-card__desc">Қазақ прозасындағы алғашқы романдардың бірі</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">✍️</div>
            <div class="fact-card__title">«Үлгілі тәржіме» (1910)</div>
            <div class="fact-card__desc">И. Крылов мысалдарының қазақша шебер аудармасы</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📜</div>
            <div class="fact-card__title">«Орындалған арман» (1951)</div>
            <div class="fact-card__desc">Өмір жолы мен тарихты баяндайтын көлемді мемуар</div>
          </div>
        </div>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1910–1951 гг. • Литературный вклад</div>
        <h3 class="archive-heading">Первый казахский роман и переводы классики</h3>
        <p class="archive-text">
          В 1913 году в Казани вышел в свет роман Спандияра Көбеева <strong>«Калым» («Қалың мал»)</strong> — один из первых романов в истории казахской литературы, защищающий права женщин и обличающий социальное неравенство.
        </p>
        <p class="archive-text">
          Көбеев также блестяще перевел на казахский язык басни И.А. Крылова («Үлгілі тәржіме», 1910), сделав их понятными и близкими для степных детей.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">📖</div>
            <div class="fact-card__title">Роман «Калым» (1913)</div>
            <div class="fact-card__desc">Фундаментальный социальный роман казахской прозы</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">✍️</div>
            <div class="fact-card__title">Басни Крылова (1910)</div>
            <div class="fact-card__desc">Сборник басен и хрестоматия для школьников</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📜</div>
            <div class="fact-card__title">«Сбывшаяся мечта» (1951)</div>
            <div class="fact-card__desc">Автобиографическая книга мемуаров писателя</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    number: "6",
    posX: 89,
    posY: 56,
    pathSegmentIndex: 6,
    titleKaz: "Отбасы (Шежіре)",
    titleRu: "Семья и Шежіре",
    subtitleKaz: "Шежіре және ұрпақтар сабақтастығы",
    subtitleRu: "Шежіре и родословное древо",
    period: "1878 — 1956",
    image: "assets/station6_house.jpg",
    images: ["assets/station6_house.jpg", "assets/station6_shezhire.jpg"],
    photoItems: [
      {
        src: "assets/station6_house.jpg",
        captionKaz: "Спандияр Көбеевтің тұрған үйі (Ақсуат ауылындағы мемориалдық мұражай-үйі)",
        captionRu: "Дом Спандияра Көбеева (мемориальный дом-музей в ауле Аксуат)",
        badgeKaz: "🏡 Мұражай-үйі",
        badgeRu: "🏡 Дом-музей",
        type: "portrait"
      },
      {
        src: "assets/station6_shezhire.jpg",
        captionKaz: "Спандияр Көбеевтің Жеті ата шежіре тармағы (Шақадан бастап)",
        captionRu: "Родословная Спандияра Көбеева (Жеті ата, ветвь Шака)",
        badgeKaz: "📜 Шежіре",
        badgeRu: "📜 Шежіре",
        type: "document"
      }
    ],
    summaryKaz: "Спандияр Көбеевтің отбасылық өмірі, шежіресі және ұрпақтарының естеліктері.",
    summaryRu: "Семейная жизнь, родословная и преемственность поколений Спандияра Көбеева.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1878–1956 жж. • Ұлағатты әулет</div>
        <h3 class="archive-heading">Отбасы және ұрпақтар сабақтастығы</h3>
        <p class="archive-text">
          Спандияр Көбеев өнегелі отбасының тірегі болды. Жұбайы <strong>Күлзипамен</strong> бірге ұл-қыздарын білімді, елге адал азамат етіп тәрбиеледі. 
          Төменде Спандияр Көбеевтің ата-бабасынан бастау алатын атақты <strong>Жеті ата</strong> шежіресі ұсынылған.
        </p>

        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏡</div>
            <div class="fact-card__title">Отбасылық өмір</div>
            <div class="fact-card__desc">Жұбайы Күлзипа, білімді ұрпақтар өсірген шаңырақ</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌿</div>
            <div class="fact-card__title">Мұражай</div>
            <div class="fact-card__desc">Ақсуат ауылындағы С. Көбеев мемориалдық музейі</div>
          </div>
        </div>

        <div class="shezhire-tree">
          <h4 class="shezhire-title">📜 Спандияр Көбеевтің Жеті атасы</h4>
          <div class="tree-container">
            <div class="tree-node">
              <div class="node-title">1. Шақа</div>
              <div class="node-sub">Түп атасы</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">2. Баяділ</div>
              <div class="node-sub">Екінші ата</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">3. Байқасқа</div>
              <div class="node-sub">Үшінші ата</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">4. Жансүгір</div>
              <div class="node-sub">Төртінші ата</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">5. Көбей</div>
              <div class="node-sub">Бесінші ата (әкесі)</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node main">
              <div class="node-title">6. Спандияр (1878–1956)</div>
              <div class="node-sub">Ұлт ағартушысы, ұстаз, қаламгер</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">7. Нәзір</div>
              <div class="node-sub">Жетінші ұрпақ (баласы)</div>
            </div>
          </div>
        </div>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">1878–1956 гг. • Династия просветителя</div>
        <h3 class="archive-heading">Семья и преемственность поколений</h3>
        <p class="archive-text">
          Спандияр Көбеев был главой дружной и образованной семьи. Вместе с супругой <strong>Кульзипой</strong> они воспитали достойных детей.
          Ниже приведено родословное древо (Жеті ата) Спандияра Көбеева.
        </p>

        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏡</div>
            <div class="fact-card__title">Семья</div>
            <div class="fact-card__desc">Супруга Кульзипа, дети и внуки, посвятившие себя науке</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🌿</div>
            <div class="fact-card__title">Память</div>
            <div class="fact-card__desc">Мемориальный музей С. Көбеева в селе Аксуат</div>
          </div>
        </div>

        <div class="shezhire-tree">
          <h4 class="shezhire-title">📜 Родословная (Жеті ата) Спандияра Кубеева</h4>
          <div class="tree-container">
            <div class="tree-node">
              <div class="node-title">1. Шақа</div>
              <div class="node-sub">Родоначальник</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">2. Баяділ</div>
              <div class="node-sub">Второе поколение</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">3. Байқасқа</div>
              <div class="node-sub">Третье поколение</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">4. Жансүгір</div>
              <div class="node-sub">Четвертое поколение</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">5. Көбей</div>
              <div class="node-sub">Отец</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node main">
              <div class="node-title">6. Спандияр (1878–1956)</div>
              <div class="node-sub">Народный учитель, писатель, просветитель</div>
            </div>
            <div class="tree-line"></div>
            <div class="tree-node">
              <div class="node-title">7. Нәзір</div>
              <div class="node-sub">Сын</div>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
