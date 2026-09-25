// =========================================================================
// PROJECT DATA CONFIGURATION
// You can easily add, edit, or remove your projects here!
// Each project supports multi-language titles, descriptions, and custom tags.
// =========================================================================

export const projects = [
  {
    id: "project-1",
    category: "nextjs",
    title: {
      uz: "E-Commerce Veb-Do'kon Platformasi",
      en: "E-Commerce Web Store Platform",
      ru: "Платформа Интернет-Магазина"
    },
    shortDescription: {
      uz: "Next.js va Tailwind CSS yordamida yaratilgan zamonaviy savdo platformasi. Qidiruv, savatcha va to'lov tizimiga ega.",
      en: "A modern commerce platform crafted with Next.js and Tailwind CSS featuring dynamic search, cart state, and checkout flow.",
      ru: "Современная платформа электронной коммерции на Next.js и Tailwind CSS с поиском, корзиной и оформлением заказа."
    },
    fullDescription: {
      uz: "Ushbu loyiha yuqori tezlikda yuklanuvchi katalog, tovarlarni filtrlash, savatchaga qo'shish va qulay checkout sahifasini o'z ichiga oladi. Server Components yordamida SEO optimallashgan.",
      en: "A high-performance store featuring instant catalogue filters, shopping cart synchronization, and clean UI components optimized for SEO.",
      ru: "Высокопроизводительный интернет-магазин с быстрой фильтрацией, синхронизацией корзины и компонентами, оптимизированными под SEO."
    },
    tags: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    previewGradient: "from-blue-600 via-indigo-600 to-purple-600",
    liveUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/ecommerce-store",
    featured: true,
    stats: {
      lighthouseScore: "98/100",
      type: "Full E-Commerce"
    },
    features: {
      uz: [
        "Server-side rendering (SSR) orqali tezkor katalog",
        "Savatcha va to'lov holati boshqaruvi",
        "To'liq moslashuvchan (Responsive) interfeys",
        "Dark & Light mode qo'llab-quvvatlashi"
      ],
      en: [
        "Fast catalogue with Server-Side Rendering",
        "Cart and checkout state management",
        "Fully responsive UI for mobile & desktop",
        "Integrated Dark & Light mode theme"
      ],
      ru: [
        "Быстрый каталог с серверным рендерингом (SSR)",
        "Управление состоянием корзины и оформление",
        "Полностью адаптивный интерфейс",
        "Поддержка темной и светлой темы"
      ]
    }
  },
  {
    id: "project-2",
    category: "react",
    title: {
      uz: "Boshqaruv Paneli (Admin Dashboard)",
      en: "SaaS Analytics & Admin Dashboard",
      ru: "Аналитическая Панель Управления"
    },
    shortDescription: {
      uz: "React.js, zamonaviy grafiklar va ma'lumotlar tahlili uchun moslashuvchan analitika paneli.",
      en: "Feature-rich admin analytics dashboard with interactive charts, user management, and dark glassmorphic styling.",
      ru: "Интерактивная панель управления с наглядными графиками, аналитикой и стеклянным интерфейсом."
    },
    fullDescription: {
      uz: "Real-vaqt rejimida statistik ma'lumotlarni ko'rsatish, foydalanuvchilar ro'yxati, filtrlash va xisobotlarni eksport qilish imkoniyati.",
      en: "Real-time metrics display, active user tables, sorting/filtering capabilities, and exportable reports with fluid animations.",
      ru: "Отображение метрик в реальном времени, списки пользователей, фильтрация данных и экспорт отчетов с плавной анимацией."
    },
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    previewGradient: "from-emerald-500 via-teal-600 to-cyan-600",
    liveUrl: "https://demo-dashboard.example.com",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/admin-dashboard",
    featured: true,
    stats: {
      lighthouseScore: "99/100",
      type: "Dashboard UI"
    },
    features: {
      uz: [
        "Interaktiv grafiklar va statistika",
        "Jadval ma'lumotlarini qidirish va saralash",
        "Glassmorphism uslubidagi kartalar",
        "Tezkor yuklanuvchi komponentlar"
      ],
      en: [
        "Interactive analytics and data charts",
        "Dynamic table filtering and sorting",
        "Frosted glass UI card components",
        "Lightweight and snappy performance"
      ],
      ru: [
        "Интерактивные графики и статистика",
        "Динамический поиск и сортировка таблиц",
        "Стильные карточки в стиле Glassmorphism",
        "Высокая скорость работы и отклика"
      ]
    }
  },
  {
    id: "project-3",
    category: "fullstack",
    title: {
      uz: "Vazifalar & Loyihalar Boshqaruvi (Task Flow)",
      en: "Task & Project Management (Task Flow)",
      ru: "Менеджер Задач и Проектов (Task Flow)"
    },
    shortDescription: {
      uz: "Jamoaviy ishlash uchun Kanban doskasi, vazifalarni surish (drag-and-drop) va eslatmalar tizimi.",
      en: "A productive project management web application featuring drag-and-drop Kanban boards and status tracking.",
      ru: "Веб-приложение для управления задачами с Kanban-доской, drag-and-drop и отслеживанием статусов."
    },
    fullDescription: {
      uz: "Vazifalarni yaratish, ustunlar bo'ylab ko'chirish, deadline belgilash va qidirish imkonini beruvchi to'liq funksional dastur.",
      en: "Create tasks, organize workflows by dragging cards across workflow columns, set due dates, and monitor team productivity.",
      ru: "Создание задач, перемещение между этапами, установка сроков и мониторинг продуктивности с красивым UI."
    },
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "React.js"],
    previewGradient: "from-violet-600 via-purple-600 to-pink-600",
    liveUrl: "https://demo-taskflow.example.com",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/taskflow-app",
    featured: true,
    stats: {
      lighthouseScore: "96/100",
      type: "Productivity App"
    },
    features: {
      uz: [
        "Drag & Drop orqali vazifalarni ko'chirish",
        "Lokal saqlash (Persistent local storage)",
        "Teglar va ustuvorlik (Priority) darajalari",
        "Mobil qurilmalarga to'liq moslangan"
      ],
      en: [
        "Smooth drag & drop task sorting",
        "Persistent client-side storage",
        "Priority tags and category badges",
        "Fully optimized mobile touch gestures"
      ],
      ru: [
        "Плавное перетаскивание задач (Drag & Drop)",
        "Сохранение данных в браузере (LocalStorage)",
        "Метки приоритета и цветовая кодировка",
        "Полная адаптивность для мобильных экранов"
      ]
    }
  },
  {
    id: "project-4",
    category: "nextjs",
    title: {
      uz: "Kompaniya & Mahsulot Landing Page",
      en: "Modern Agency & Product Landing Page",
      ru: "Лендинг для Компании и Продукта"
    },
    shortDescription: {
      uz: "Yuqori konversiyali, estetik va interaktiv animatsiyalarga ega bo'lgan zamonaviy veb-sayt.",
      en: "High-converting, hyper-modern promotional website with 3D-inspired micro-interactions and smooth scroll triggers.",
      ru: "Конверсионный посадочный сайт с эффектными анимациями прокрутки и современным визуалом."
    },
    fullDescription: {
      uz: "Framer Motion yordamida yaratilgan scroll animatsiyalari, interaktiv pricing kalkulyatori va mijozlar sharhlari bloki.",
      en: "Built to capture customer interest with fluid scroll reveal animations, interactive pricing calculator, and modern typography.",
      ru: "Создан для привлечения клиентов: плавная анимация появления блоков, интерактивный калькулятор и стильный дизайн."
    },
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "HTML5"],
    previewGradient: "from-amber-500 via-orange-600 to-rose-600",
    liveUrl: "https://demo-landing.example.com",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/modern-landing",
    featured: false,
    stats: {
      lighthouseScore: "100/100",
      type: "Landing UI"
    },
    features: {
      uz: [
        "100 balli Google Lighthouse natijasi",
        "Framer Motion orqali scroll animatsiyalari",
        "Interaktiv pricing va FAQ qismlari",
        "Tezkor yuklanish va responsive layout"
      ],
      en: [
        "100/100 Google Lighthouse score",
        "Scroll-triggered interactive motions",
        "Interactive pricing & FAQ accordion",
        "Ultra-fast loading speed and clean UI"
      ],
      ru: [
        "100/100 в тесте Google Lighthouse",
        "Анимация появления при прокрутке",
        "Интерактивные тарифы и аккордеон FAQ",
        "Мгновенная загрузка и адаптивность"
      ]
    }
  },
  {
    id: "project-5",
    category: "react",
    title: {
      uz: "Ob-Havo & Iqlim Ma'lumotlari Ilovasi",
      en: "Weather Radar & Forecast App",
      ru: "Приложение Погоды и Прогноза"
    },
    shortDescription: {
      uz: "Ochiq API asosida dunyo shaharlari ob-havosini real vaqtda ko'rsatuvchi interaktiv veb-ilova.",
      en: "Interactive weather dashboard fetching real-time meteorological forecasts with dynamic weather condition visuals.",
      ru: "Интерактивный прогноз погоды с получением данных в реальном времени и динамическими фонами."
    },
    fullDescription: {
      uz: "Geolokatsiya orqali avtomatik joylashuvni aniqlash, 7 kunlik prognoz va havo namligi, shamol tezligi ko'rsatkichlari.",
      en: "Geolocation support, 7-day extended forecasts, dynamic atmospheric weather icons, and hourly breakdowns.",
      ru: "Автоматическое определение геолокации, прогноз на 7 дней, влажность, скорость ветра и динамические иконки."
    },
    tags: ["React.js", "Tailwind CSS", "REST API", "JavaScript"],
    previewGradient: "from-sky-500 via-blue-600 to-indigo-700",
    liveUrl: "https://demo-weather.example.com",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/weather-app",
    featured: false,
    stats: {
      lighthouseScore: "98/100",
      type: "Weather App"
    },
    features: {
      uz: [
        "OpenWeather API integratsiyasi",
        "Jonli qidiruv va shaharlar filtri",
        "Ob-havo holatiga mos animatsiyalar",
        "Lokal saqlash bilan oxirgi qidiruvlar"
      ],
      en: [
        "Real-time OpenWeather API integration",
        "Live search with city auto-suggestions",
        "Atmospheric animated indicators",
        "Recent search history persistence"
      ],
      ru: [
        "Интеграция с OpenWeather API",
        "Живой поиск и подсказки городов",
        "Анимированные иконки погодных условий",
        "Сохранение истории последних запросов"
      ]
    }
  },
  {
    id: "project-6",
    category: "fullstack",
    title: {
      uz: "Shaxsiy Portfolio & Blog Veb-sayti",
      en: "Creative Portfolio & Developer Blog",
      ru: "Креативное Портфолио и Блог"
    },
    shortDescription: {
      uz: "Glassmorphism dizayni, 3 tildagi lokalizatsiya va dark/light rejimga ega to'liq responsive portfolio.",
      en: "High-end glassmorphic personal portfolio with 3-language dynamic i18n, dark/light modes, and micro-interactions.",
      ru: "Премиальное портфолио в стиле Glassmorphism с поддержкой 3 языков, темной/светлой темой и микро-анимациями."
    },
    fullDescription: {
      uz: "Framer Motion animatsiyalari, nusxa olish vositalari va toza kod arxitekturasi bilan boyitilgan dasturchi veb-sayti.",
      en: "Showcases development achievements with Framer Motion, copyable contact chips, and modern component architecture.",
      ru: "Сайт-визитка разработчика с плавными переходами Framer Motion, интерактивными контактами и продуманной архитектурой."
    },
    tags: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
    previewGradient: "from-fuchsia-600 via-purple-700 to-cyan-600",
    liveUrl: "#",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/portfolio",
    featured: true,
    stats: {
      lighthouseScore: "100/100",
      type: "Portfolio"
    },
    features: {
      uz: [
        "O'zbek, Ingliz va Rus tillari (bir zumda almashinadi)",
        "Dark va Light rejimlar (xotirada saqlanadi)",
        "Nusxa olish tugmalari va bildirishnomalar",
        "Glassmorphism va sezgir dizayn"
      ],
      en: [
        "Uzbek, English & Russian i18n (instant switch)",
        "Smooth Dark/Light theme toggle with persistence",
        "One-click copy tools with interactive toasts",
        "Glassmorphic design and reactive layout"
      ],
      ru: [
        "Узбекский, английский и русский языки без перезагрузки",
        "Плавное переключение темной/светлой темы",
        "Копирование контактов в один клик с уведомлением",
        "Стиль Glassmorphism и безупречная адаптивность"
      ]
    }
  }
];
