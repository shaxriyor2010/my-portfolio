// =========================================================================
// PROJECT DATA CONFIGURATION
// Faol va real loyihalar ro'yxati (SRM Sistema)
// =========================================================================

export const projects = [
  {
    id: "srm-sistema",
    category: "react",
    title: {
      uz: "SRM / CRM O'quv Markaz Boshqaruv Tizimi",
      en: "SRM / CRM Education Management Platform",
      ru: "SRM / CRM Система Управления Учебным Центром"
    },
    shortDescription: {
      uz: "O'quv markazlari va ta'lim muassasalari uchun to'liq boshqaruv tizimi: Talabalar, Guruhlar, O'qituvchilar, To'lovlar, Lidlar va Reyting tahlili.",
      en: "Full-scale educational CRM system for academies & learning centers: Student directory, Groups, Teachers, Payment tracking, Leads funnel, and Analytics.",
      ru: "Полнофункциональная CRM-система для учебных центров: управление студентами, группами, преподавателями, платежами, воронкой лидов и аналитикой."
    },
    fullDescription: {
      uz: "O'quv markazlari faoliyatini to'liq raqamlashtiruvchi va avtomatlashtiruvchi zamonaviy SRM/CRM veb-platformasi. Tizimda turli xil rollar (Direktor, Administrator, O'qituvchi) uchun alohida ruxsatlar mavjud. O'quvchilar bazasini shakllantirish, yangi dars guruhlarini tuzish, oylik to'lovlar hisobi va qarzdorlik monitoringi, yangi tushgan lidlar bilan ishlash hamda real-vaqt statistikasi mukammal darajada yo'lga qo'yilgan.",
      en: "A robust modern SRM/CRM platform engineered to streamline educational center workflows. Features multi-role authentication (Director, Admin, Teacher), dynamic student enrollment, group schedule management, automated tuition payment tracking, lead conversion funnels, and real-time performance analytics.",
      ru: "Современная SRM/CRM платформа для полной автоматизации работы учебных центров и языковых школ. Включает ролевую модель доступа (Директор, Администратор, Преподаватель), управление базой студентов, формирование учебных групп, финансовый учет оплат, воронку лидов и интерактивную статистику."
    },
    tags: [
      "React.js",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "JavaScript",
      "Vercel"
    ],
    previewGradient: "from-blue-600 via-indigo-600 to-cyan-500",
    liveUrl: "https://srm-sistema.vercel.app/",
    githubUrl: "https://github.com/usmonov-shaxriyorbek/srm-sistema",
    featured: true,
    stats: {
      lighthouseScore: "99/100",
      type: "SRM / CRM Web App",
      status: "Live Production"
    },
    features: {
      uz: [
        "Direktor, Administrator va O'qituvchi kirish rollari",
        "Talabalar va o'qituvchilar to'liq ma'lumotlar bazasi",
        "Guruhlar, kurslar va dars jadvallarini boshqarish",
        "To'lovlar monitoringi, kvitansiyalar va moliyaviy hisob",
        "Lidlar (yangi arizalar) voronkasi va mijozlarni jalb qilish",
        "Redux Toolkit yordamida tezkor global holat (state) boshqaruvi",
        "To'liq moslashuvchan (Responsive) zamonaviy interfeys"
      ],
      en: [
        "Role-based access: Director, Administrator, and Teacher",
        "Comprehensive Student & Teacher directories",
        "Course groups, scheduling, and curriculum tracking",
        "Tuition payment ledger & financial monitoring",
        "Leads management and customer acquisition pipeline",
        "Fast reactive state management via Redux Toolkit",
        "Modern responsive glassmorphic UI design"
      ],
      ru: [
        "Многоуровневая авторизация: Директор, Администратор, Учитель",
        "Полная база данных студентов и преподавателей",
        "Управление группами, расписанием и курсами",
        "Финансовый учет оплат и мониторинг задолженностей",
        "Воронка лидов и учет новых заявок",
        "Быстрое управление состоянием через Redux Toolkit",
        "Современный адаптивный интерфейс"
      ]
    }
  }
];
