/**
 * DIGITAL MUSEUM DATASET
 * «Спандияр Көбеев – ұлт ағартушысының өмір жолы»
 * 5 тарихи станция
 */

const MUSEUM_STATIONS = [
  {
    id: 1,
    number: "1",
    posX: 14,
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
    posX: 44,
    posY: 53,
    pathSegmentIndex: 2,
    titleKaz: "Ы. Алтынсарин мектебі және педагогикалық жолы",
    titleRu: "Школа им. И. Алтынсарина и педагогическое наследие",
    subtitleKaz: "Торғай училищесі, мұғалімдік курстар және ұстаздық миссия",
    subtitleRu: "Тургайское училище, учительские курсы и призвание",
    period: "1892 — 1901",
    badgeLabel: "2. Алтынсарин мектебі және педагогика",
    image: "assets/station2_school.jpg",
    images: [
      "assets/station2_school.jpg",
      "assets/station3_pedagogy1.jpg",
      "assets/station3_pedagogy2.jpg",
      "assets/station3_pedagogy3.jpg"
    ],
    photoItems: [
      {
        src: "assets/station2_school.jpg",
        captionKaz: "Ыбырай Алтынсарин негізін қалаған екі сыныптық орыс-қазақ мектебі",
        captionRu: "Двухклассное русско-казахское училище, основанное Ибраем Алтынсариным",
        badgeKaz: "🏫 Мектеп",
        badgeRu: "🏫 Училище",
        type: "landscape"
      },
      {
        src: "assets/station3_pedagogy1.jpg",
        captionKaz: "Спандияр Көбеев шәкірттері мен ауыл тұрғындарының ортасында",
        captionRu: "Спандияр Көбеев среди учеников и жителей аула",
        badgeKaz: "👥 Ұстаз бен шәкірт",
        badgeRu: "👥 Учитель и ученики",
        type: "landscape"
      },
      {
        src: "assets/station3_pedagogy2.jpg",
        captionKaz: "Ағартушының ұстаздық қызметі мен тарихи ұжым",
        captionRu: "Педагогическая деятельность просветителя и коллеги",
        badgeKaz: "🏛️ Педагогикалық ұжым",
        badgeRu: "🏛️ Педагогический коллектив",
        type: "landscape"
      },
      {
        src: "assets/station3_pedagogy3.jpg",
        captionKaz: "Спандияр Көбеевтің өмір жолы мен педагогикалық мұрасын зерттеушілер (мемориалдық стенд алдында)",
        captionRu: "Исследователи жизненного пути и педагогического наследия Спандияра Көбеева (у мемориального стенда)",
        badgeKaz: "🎓 Зерттеушілер",
        badgeRu: "🎓 Исследователи",
        type: "portrait"
      }
    ],
    video: "assets/station3_video.mp4",
    videoTitleKaz: "Спандияр Көбеевтің педагогикалық мұрасы туралы сұхбат",
    videoTitleRu: "Интервью о педагогическом наследии Спандияра Кубеева",
    videoDescKaz: "Мектеп мұражайындағы ғылыми жетекші мен жас зерттеушінің бейнесұхбаты",
    videoDescRu: "Видеоинтервью научного руководителя и юного исследователя в школьном музее",
    summaryKaz: "Ыбырай Алтынсарин мектебіндегі тәлім, Қостанайдағы курстар мен халыққа қызмет ету миссиясы.",
    summaryRu: "Обучение в училище И. Алтынсарина, педагогические курсы и становление народного просветителя.",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">1892–1901 жж. • Торғай және Қостанай өңірі</div>
        <h3 class="archive-heading">Ыбырай мектебіндегі тәлім және ұстаздық бастау</h3>
        <p class="archive-text">
          1892 жылы Спандияр Көбеев Торғайдағы 2 сыныптық орыс-қазақ училищесіне қабылданады. Бұл оқу орны ұлы ағартушы <strong>Ыбырай Алтынсариннің</strong> тікелей бастамасымен салынған болатын. Мұнда ол ана тілі, орыс тілі, дүниетану пәндерімен терең танысып, өмірлік мұратына берік негіз қалайды.
        </p>
        <p class="archive-text">
          1895–1897 жылдары Қостанай қаласындағы мұғалімдер даярлайтын курсты үздік бітіріп, бастауыш мектеп мұғалімі куәлігін алды. Ол түсіндірмелі әдістемені енгізіп, кедей ауыл балалары мен қыз балаларды мектепке тартуға өлшеусіз үлес қосты.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏛️</div>
            <div class="fact-card__title">Оқу орны</div>
            <div class="fact-card__desc">Торғайдағы 2 сыныптық орыс-қазақ училищесі (1892–1895)</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Мұғалімдік куәлік</div>
            <div class="fact-card__desc">1897 жылы Қостанайда педагог атағын үздік алды</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📝</div>
            <div class="fact-card__title">Әдістеме мен ұстаным</div>
            <div class="fact-card__desc">Түсіндірмелі оқыту, қыз балаларды білімге баулу</div>
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
        <div class="archive-badge-tag">1892–1901 гг. • Тургай и Костанай</div>
        <h3 class="archive-heading">Школа Алтынсарина и становление народного педагога</h3>
        <p class="archive-text">
          В 1892 году Спандияр поступил в двухклассное русско-казахское училище в Тургае, открытое великим просветителем <strong>Ибраем Алтынсариным</strong>. Именно здесь сформировалось его мировоззрение бескорыстного служения народу.
        </p>
        <p class="archive-text">
          Окончив в 1897 году педагогические курсы в Костанае со званием учителя начальных классов, Спандияр Көбеев посвятил жизнь просвещению степи. Он отстаивал равенство в образовании, наглядные методы и доступ к грамоте для сельских детей и девочек.
        </p>
        
        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">🏛️</div>
            <div class="fact-card__title">Учебное заведение</div>
            <div class="fact-card__desc">2-классное русско-казахское училище в Тургае (1892–1895)</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🎓</div>
            <div class="fact-card__title">Диплом учителя</div>
            <div class="fact-card__desc">1897 год — выпуск из педагогических классов в Костанае</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📝</div>
            <div class="fact-card__title">Педагогическое кредо</div>
            <div class="fact-card__desc">Наглядное обучение, равный доступ к грамоте для всех</div>
          </div>
        </div>

        <blockquote class="archive-quote">
          «Свет, зажжённый Алтынсариным, стал путеводной звездой для целого поколения учителей степи...»
          <cite>— Спандияр Көбеев</cite>
        </blockquote>
      </div>
    `
  },
  {
    id: 3,
    number: "3",
    posX: 68,
    posY: 72,
    pathSegmentIndex: 3,
    titleKaz: "Білімге қосқан үлесі",
    titleRu: "Вклад в образование",
    subtitleKaz: "Ақсуат мектебі және 40 жылдық ұстаздық еңбек",
    subtitleRu: "Аксуатская школа и 40 лет просвещения",
    period: "1901 — 1944",
    badgeLabel: "3. Білімге үлесі",
    image: "assets/station4_school.jpg",
    images: ["assets/station4_school.jpg", "assets/station4_gramota.jpg", "assets/station4_medals_colleagues.jpg"],
    photoItems: [
      {
        src: "assets/station4_school.jpg",
        captionKaz: "Спандияр Көбеев негізін қалаған Ақсуат ауылдық орта мектебінің ғимараты",
        captionRu: "Здание Аксуатской сельской школы, возведённой Спандияром Көбеевым",
        badgeKaz: "🏫 Мектеп",
        badgeRu: "🏫 Школа",
        type: "landscape"
      },
      {
        src: "assets/station4_gramota.jpg",
        captionKaz: "Қазақ КСР Жоғарғы Кеңесі Президиумының Құрмет грамотасы (1949 ж.)",
        captionRu: "Почётная грамота Президиума Верховного Совета Казахской ССР (1949 г.)",
        badgeKaz: "📜 Грамота",
        badgeRu: "📜 Грамота",
        type: "document"
      },
      {
        src: "assets/station4_medals_colleagues.jpg",
        captionKaz: "«Шәмел, Балтабек, Атам, Сейфолла» — Спандияр Көбеев мемлекеттік марапаттарымен ұлы мен шәкірттерінің ортасында",
        captionRu: "«Шәмел, Балтабек, Атам, Сейфолла» — Спандияр Көбеев с орденами и медалями в окружении сына и коллег-учеников",
        badgeKaz: "🎖️ Марапаттар",
        badgeRu: "🎖️ Награды",
        type: "landscape"
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
    id: 4,
    number: "4",
    posX: 78,
    posY: 56,
    pathSegmentIndex: 4,
    titleKaz: "Әдебиетке қосқан үлесі",
    titleRu: "Литературное творчество",
    subtitleKaz: "«Қалың мал» романы және мысалдар",
    subtitleRu: "Роман «Калым» и переводы басен",
    period: "1910 — 1951",
    badgeLabel: "4. Әдебиет",
    image: "assets/station5_oryndalghan.jpg",
    images: ["assets/station5_oryndalghan.jpg"],
    photoItems: [
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
    videoDescKaz: "Спандияр Көбеевтің әдеби мұрасы мен қаламгерлік еңбегі туралы ғылыми сұхбат",
    videoDescRu: "Интервью о литературном наследии и писательском труде Спандияра Кубеева",
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
    id: 5,
    number: "5",
    posX: 91,
    posY: 48,
    pathSegmentIndex: 5,
    titleKaz: "Спандияр Көбеевтің отбасы және шежіресі",
    titleRu: "Семья и родословная (Шежіре) Спандияра Кубеева",
    subtitleKaz: "Өнегелі шаңырақ, Жеті ата және ұрпақтар сабақтастығы",
    subtitleRu: "Семейный очаг, Жеті ата и мемориальный дом-музей",
    period: "1878 — 1956",
    badgeLabel: "5. Отбасы және шежіре",
    image: "assets/station6_family2.jpg",
    images: [
      "assets/station6_family2.jpg",
      "assets/station6_family1.jpg",
      "assets/station6_shezhire.jpg",
      "assets/station6_house.jpg"
    ],
    photoItems: [
      {
        src: "assets/station6_family2.jpg",
        captionKaz: "«Атам, Нұрлан, Тәйтенже» — Спандияр Көбеев немересімен және жақындарымен бірге",
        captionRu: "«Атам, Нұрлан, Тәйтенже» — Спандияр Көбеев с внуком и близкими",
        badgeKaz: "👨‍👩‍👦 Отбасылық архив",
        badgeRu: "👨‍👩‍👦 Семейный архив",
        type: "portrait"
      },
      {
        src: "assets/station6_family1.jpg",
        captionKaz: "Спандияр Көбеевтің отбасы мен жақындары",
        captionRu: "Семья и близкие Спандияра Көбеева",
        badgeKaz: "🏛️ Тарихи сурет",
        badgeRu: "🏛️ Историческое фото",
        type: "landscape"
      },
      {
        src: "assets/station6_shezhire.jpg",
        captionKaz: "Спандияр Көбеевтің Жеті ата шежіре тармағы (Шақадан бастап)",
        captionRu: "Родословная Спандияра Көбеева (Жеті ата, ветвь Шака)",
        badgeKaz: "📜 Шежіре",
        badgeRu: "📜 Шежіре",
        type: "document"
      },
      {
        src: "assets/station6_house.jpg",
        captionKaz: "Спандияр Көбеевтің тұрған үйі (Ақсуат ауылындағы мемориалдық мұражай-үйі)",
        captionRu: "Дом Спандияра Көбеева (мемориальный дом-музей в ауле Аксуат)",
        badgeKaz: "🏡 Мұражай-үйі",
        badgeRu: "🏡 Дом-музей",
        type: "portrait"
      }
    ],
    summaryKaz: "Спандияр мен Меруерт Көбеевтердің өнегелі шаңырағы, балалары мен Жеті ата шежіресі.",
    summaryRu: "Семейный очаг Спандияра и Меруерт Көбеевых, дети, предки Жеті ата и дом-музей.",
    video: "assets/station6_video.mp4",
    videoTitleKaz: "Спандияр Көбеевтің отбасы туралы бейнематериал",
    videoTitleRu: "Видеоматериал о семье Спандияра Кубеева",
    videoDescKaz: "Спандияр Көбеевтің отбасылық құндылықтары мен естеліктері",
    videoDescRu: "Семейные ценности и воспоминания о семье Спандияра Кубеева",
    contentKaz: `
      <div class="archive-section">
        <div class="archive-badge-tag">Өнегелі шаңырақ • Тарихи шежіре • 1878–1956 жж.</div>
        <h3 class="archive-heading">Спандияр Көбеевтің отбасы және ата-баба шежіресі</h3>
        <p class="archive-text">
          Спандияр Көбеевтің жарының есімі — <strong>Меруерт</strong>. Спандияр мен Меруерт отбасында төрт бала тәрбиеленді. Олардың бір қызы — <strong>Рабиға</strong>, үш ұлы — <strong>Шәмел</strong>, <strong>Нәзір</strong> және <strong>Сәбит</strong> болды. Көбеевтер отбасы өзара сыйластық пен берекені қадір тұтқан өнегелі шаңырақ болды.
        </p>
        <p class="archive-text">
          Қазақ халқының ғасырлар бойғы салты бойынша әрбір азамат өзінің жеті атасын білуге міндетті болған. Төменде Спандияр Көбеевтің түп атасы <strong>Шақадан</strong> бастау алатын киелі шежіре тармағы ұсынылған.
        </p>

        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">💍</div>
            <div class="fact-card__title">Жары</div>
            <div class="fact-card__desc">Меруерт — шаңырақтың берекесі, аяулы ана</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">👨‍👩‍👧‍👦</div>
            <div class="fact-card__title">Балалары</div>
            <div class="fact-card__desc">Қызы: Рабиға. Ұлдары: Шәмел, Нәзір, Сәбит</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📜</div>
            <div class="fact-card__title">Түп атасы</div>
            <div class="fact-card__desc">Шақа — елге белгілі тарихи тұлға</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🏡</div>
            <div class="fact-card__title">Мұражай-үйі</div>
            <div class="fact-card__desc">Ақсуат ауылындағы С. Көбеев мемориалдық үйі</div>
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

        <blockquote class="archive-quote">
          «Отбасындағы береке мен өзара сыйластық — ұрпақ тәрбиесінің ең биік бастауы...»
        </blockquote>
      </div>
    `,
    contentRu: `
      <div class="archive-section">
        <div class="archive-badge-tag">Семейный очаг • Родословная • 1878–1956 гг.</div>
        <h3 class="archive-heading">Семья Спандияра Кубеева и родословное древо (Шежіре)</h3>
        <p class="archive-text">
          Супругу Спандияра Көбеева звали <strong>Меруерт</strong>. В их семье царили согласие и взаимное уважение. Они воспитали четверых детей: дочь <strong>Рабигу</strong> и троих сыновей — <strong>Шамеля</strong>, <strong>Назира</strong> и <strong>Сабита</strong>.
        </p>
        <p class="archive-text">
          По древней традиции степи знание семи предков (Жеті ата) являлось священным долгом каждого казаха. Ниже представлено подлинное родословное древо Спандияра Көбеева от родоначальника <strong>Шака</strong>.
        </p>

        <div class="archive-fact-cards">
          <div class="fact-card">
            <div class="fact-card__icon">💍</div>
            <div class="fact-card__title">Супруга</div>
            <div class="fact-card__desc">Меруерт — хранительница домашнего очага</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">👨‍👩‍👧‍👦</div>
            <div class="fact-card__title">Дети</div>
            <div class="fact-card__desc">Дочь Рабига, сыновья Шамель, Назир, Сабит</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">📜</div>
            <div class="fact-card__title">Родоначальник</div>
            <div class="fact-card__desc">Шака — почитаемый предок рода</div>
          </div>
          <div class="fact-card">
            <div class="fact-card__icon">🏡</div>
            <div class="fact-card__title">Дом-музей</div>
            <div class="fact-card__desc">Мемориальный дом-музей С. Көбеева в селе Аксуат</div>
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

        <blockquote class="archive-quote">
          «Согласие и благополучие в шаныраке — основа воспитания достойного поколения...»
        </blockquote>
      </div>
    `
  }
];
