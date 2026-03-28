import { useState } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { val: "Старт", label: "Только запустились,\nпринимаем заявки", icon: "Rocket" },
  { val: "Живой", label: "Специалист, не бот\nи не приложение", icon: "User" },
  { val: "0", label: "Случаев мошенничества\nпосле подключения", icon: "ShieldCheck" },
  { val: "24/7", label: "Поддержка\nкаждый день", icon: "Clock" },
];

const faqs = [
  {
    q: "Мой родитель не умеет пользоваться компьютером — это проблема?",
    a: "Нет. Именно для таких случаев мы и работаем. Специалист приедет домой или подключится удалённо и всё настроит сам. Ваш родитель ничего не должен знать заранее.",
  },
  {
    q: "Как вы защищаете от мошенников?",
    a: "Устанавливаем фильтры нежелательных звонков, настраиваем список доверенных контактов, обучаем распознавать схемы обмана. Также внедряем систему «кодового слова» для проверки звонков от родственников.",
  },
  {
    q: "Что такое защита от дипфейков?",
    a: "Мошенники всё чаще используют ИИ-голоса, имитируя детей или внуков, чтобы вымогать деньги. Мы настраиваем семейное кодовое слово и объясняем как проверить любой подозрительный звонок.",
  },
  {
    q: "Можно ли отменить подписку?",
    a: "Да, в любой момент без штрафов. Достаточно написать нам в чат или на почту за 3 дня до следующего списания.",
  },
  {
    q: "Специалист приедет в другой город?",
    a: "Большинство задач решаем удалённо — это быстро и удобно. Выездные сессии доступны в Москве, Санкт-Петербурге и городах-миллионниках. Уточните при заявке.",
  },
];

const HERO_IMG = "https://cdn.poehali.dev/projects/69f301b7-9c24-4422-87d0-b70d7ca3f972/files/f2bde625-ba50-4cbd-b84d-33ee9df5fa26.jpg";

const services = [
  {
    icon: "ShieldCheck",
    color: "cyan",
    title: "Защита от мошенников",
    desc: "Настраиваем многоуровневую защиту: блокировка спама, фильтрация звонков, список доверенных контактов. Ваш родитель не будет обманут.",
  },
  {
    icon: "Eye",
    color: "purple",
    title: "Защита от дипфейков",
    desc: "ИИ-система распознаёт поддельные голоса и видео. Настраиваем кодовое слово в семье и верификацию через мессенджеры.",
  },
  {
    icon: "Users",
    color: "green",
    title: "Доверенные лица",
    desc: "Настраиваем систему «кто может что»: список людей которым пожилой родственник доверяет. Доступ к звонкам и операциям только для них.",
  },
  {
    icon: "FileText",
    color: "cyan",
    title: "ЖКХ и субсидии",
    desc: "ИИ-юрист анализирует квитанции, выявляет ошибки, помогает оспорить начисления и оформить льготы онлайн.",
  },
  {
    icon: "Stethoscope",
    color: "purple",
    title: "Запись к врачам",
    desc: "Записываем к нужным специалистам через Госуслуги и региональные порталы. Напоминания о приёмах и анализах.",
  },
  {
    icon: "Image",
    color: "green",
    title: "Цифровой семейный архив",
    desc: "Оцифровываем фотографии, документы и видео. Голосовое управление — пожилые легко находят нужные воспоминания.",
  },
];

const steps = [
  {
    num: "01",
    title: "Звонок и знакомство",
    desc: "Специалист (с психологическим образованием) созванивается с вами и родителями. Обсуждаем задачи, тревоги, ожидания.",
  },
  {
    num: "02",
    title: "Первый визит или удалённое подключение",
    desc: "Приезжаем домой или подключаемся к экрану. Мягко знакомимся, настраиваем устройства и объясняем всё без спешки.",
  },
  {
    num: "03",
    title: "Настройка защиты",
    desc: "Устанавливаем защиту от мошенников и дипфейков, настраиваем доверенных лиц в мессенджерах.",
  },
  {
    num: "04",
    title: "Постоянная поддержка",
    desc: "На связи 7 дней в неделю. Решаем вопросы удалённо или выезжаем при необходимости. Ежемесячный отчёт для детей.",
  },
];

const plans = [
  {
    name: "Базовый",
    price: "2 900",
    period: "мес",
    color: "border-slate-600",
    badge: "",
    features: [
      "2 удалённые сессии в месяц",
      "Защита от спама и мошенников",
      "Запись к врачам",
      "Чат с поддержкой",
    ],
    cta: "Начать",
    ctaStyle: "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
  },
  {
    name: "Семейный",
    price: "5 900",
    period: "мес",
    color: "border-cyan-500",
    badge: "Популярный",
    features: [
      "4 удалённые сессии + 1 выезд",
      "Защита от дипфейков",
      "Настройка доверенных лиц",
      "ЖКХ и субсидии",
      "Семейный отчёт каждый месяц",
    ],
    cta: "Выбрать",
    ctaStyle: "btn-primary",
  },
  {
    name: "Премиум",
    price: "9 900",
    period: "мес",
    color: "border-purple-500",
    badge: "",
    features: [
      "Безлимитная удалённая помощь",
      "2 выезда в месяц",
      "Цифровой семейный архив",
      "Персональный менеджер",
      "Приоритетный ответ 15 минут",
    ],
    cta: "Начать",
    ctaStyle: "border border-purple-500 text-purple-400 hover:bg-purple-500/10",
  },
];

const reviews = [
  {
    name: "Марина К.",
    city: "Москва",
    avatar: "М",
    color: "bg-cyan-500",
    text: "Живу в Питере, мама в Казани. Раньше ночами не спала — боялась, что её обманут. Теперь знаю: у неё есть живой человек, который всегда рядом. Стало намного спокойнее.",
    stars: 5,
  },
  {
    name: "Андрей В.",
    city: "Екатеринбург",
    avatar: "А",
    color: "bg-purple-500",
    text: "Папа несколько раз попадался на мошенников. Теперь у него есть специалист, который объяснил как распознавать обман. Очень рад, что нашли этот сервис.",
    stars: 5,
  },
  {
    name: "Светлана Р.",
    city: "Новосибирск",
    avatar: "С",
    color: "bg-green-500",
    text: "Подключили бабушке на пробу. Она говорит, что специалист — как свой человек, всегда на связи. Помог разобраться с документами, которые мы сами давно забросили.",
    stars: 5,
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`card-glass rounded-2xl border transition-all duration-300 overflow-hidden ${open ? "border-cyan-500/30" : "border-white/5 hover:border-white/15"}`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-white text-sm leading-snug">{q}</span>
        <Icon
          name={open ? "ChevronUp" : "ChevronDown"}
          size={18}
          className={`flex-shrink-0 transition-colors ${open ? "text-cyan-400" : "text-slate-500"}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { id: "services", label: "Услуги" },
    { id: "how", label: "Как работает" },
    { id: "pricing", label: "Тарифы" },
    { id: "reviews", label: "Отзывы" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0e1a]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center glow-cyan">
              <Icon name="Shield" size={16} className="text-[#0a0e1a]" />
            </div>
            <span className="font-display text-lg tracking-wide text-white">
              ЦП<span className="text-cyan-400">Семьи</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contacts"
            className="hidden md:block btn-primary px-5 py-2 rounded-xl text-sm font-semibold"
          >
            Подключить
          </a>

          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#0d1220] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-center py-3 rounded-xl font-semibold"
            >
              Подключить
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center grid-bg pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/5 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Новый стандарт заботы о близких</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
              <span className="text-white">Цифровой</span>
              <br />
              <span className="gradient-text-cyan text-glow-cyan">помощник</span>
              <br />
              <span className="text-white">семьи</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              Обученные специалисты с психологическим образованием помогают пожилым родственникам безопасно жить в цифровом мире. Вы спокойны — они защищены.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contacts" className="btn-primary px-8 py-4 rounded-2xl text-base font-bold inline-flex items-center gap-2">
                <Icon name="Phone" size={18} />
                Бесплатная консультация
              </a>
              <a href="#how" className="px-8 py-4 rounded-2xl border border-white/15 text-white hover:border-cyan-500/50 hover:text-cyan-400 transition-all text-base font-medium inline-flex items-center gap-2">
                <Icon name="Play" size={16} />
                Как работает
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { val: "Старт", label: "только запустились" },
                { val: "24/7", label: "поддержка" },
                { val: "0", label: "случаев мошенничества" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="font-display text-2xl text-cyan-400 text-glow-cyan">{s.val}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float hidden md:block">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 glow-cyan">
              <img
                src={HERO_IMG}
                alt="Пожилая женщина на видеосвязи"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 card-glass rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldCheck" size={20} className="text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Защита активна</div>
                  <div className="text-xs text-slate-400">Заблокировано 3 подозрительных звонка сегодня</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 relative border-y border-white/5 bg-[#0d1220]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-all">
                  <Icon name={s.icon} fallback="Circle" size={20} className="text-cyan-400" />
                </div>
                <div className="font-display text-3xl text-white mb-1">{s.val}</div>
                <div className="text-xs text-slate-500 whitespace-pre-line leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEAR BANNER */}
      <div className="bg-gradient-to-r from-red-950/60 via-red-900/40 to-red-950/60 border-y border-red-500/20 py-4 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
            <p className="text-sm text-red-300">
              <span className="font-bold text-red-200">По данным МВД:</span> каждые 3 минуты в России пожилой человек становится жертвой телефонных мошенников. Средний ущерб — <span className="font-bold text-white">87 000 ₽</span>.
            </p>
          </div>
          <a href="#contacts" className="flex-shrink-0 bg-red-500 hover:bg-red-400 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors">
            Защитить сейчас
          </a>
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="Sparkles" size={14} className="text-purple-400" />
              <span className="text-purple-400 text-sm">Что мы делаем</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Полный спектр <span className="gradient-text-purple">цифровой защиты</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Не просто помощь с телефоном. Комплексная защита и поддержка для вашего пожилого родственника.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const colorMap: Record<string, { border: string; icon: string; badge: string }> = {
                cyan: { border: "hover:border-cyan-500/50", icon: "text-cyan-400", badge: "bg-cyan-500/10 border-cyan-500/30" },
                purple: { border: "hover:border-purple-500/50", icon: "text-purple-400", badge: "bg-purple-500/10 border-purple-500/30" },
                green: { border: "hover:border-green-500/50", icon: "text-green-400", badge: "bg-green-500/10 border-green-500/30" },
              };
              const c = colorMap[s.color];
              return (
                <div
                  key={i}
                  className={`card-glass rounded-2xl p-6 border border-white/5 ${c.border} transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 rounded-xl border ${c.badge} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={s.icon} fallback="ShieldCheck" size={22} className={c.icon} />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 relative grid-bg">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="Route" size={14} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm">Процесс</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Как это <span className="gradient-text-cyan">работает</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Всё просто и понятно. Никакого стресса — ни для вас, ни для ваших родителей.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="relative text-center group">
                  <div className="inline-flex w-20 h-20 rounded-full bg-[#0d1220] border-2 border-cyan-500/40 items-center justify-center mb-6 mx-auto group-hover:border-cyan-500 transition-all">
                    <span className="font-display text-2xl text-cyan-400">{s.num}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 card-glass rounded-3xl p-8 md:p-12 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-3xl text-white mb-4">
                  Не технари. <span className="gradient-text-cyan">Психологи.</span>
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Каждый наш специалист прошёл обучение по работе с пожилыми людьми. Они умеют объяснять сложное простым языком, не торопить и не осуждать. Доверие — это основа всего.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Психологическое образование", "Проверка СБ", "Выезд в удобное время", "NDA и договор"].map((tag) => (
                    <span key={tag} className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Heart", label: "Эмпатия", val: "100%" },
                  { icon: "Lock", label: "Конфиденциальность", val: "NDA" },
                  { icon: "Clock", label: "Ответ за", val: "15 мин" },
                  { icon: "Star", label: "Рейтинг", val: "4.97 ★" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/3 rounded-2xl p-4 border border-white/5">
                    <Icon name={item.icon} fallback="Circle" size={20} className="text-cyan-400 mb-2" />
                    <div className="font-display text-xl text-white">{item.val}</div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="CreditCard" size={14} className="text-green-400" />
              <span className="text-green-400 text-sm">Тарифы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Простые <span className="gradient-text-cyan">и честные</span> цены
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Подписка без скрытых условий. Отмена в любой момент.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((p, i) => (
              <div
                key={i}
                className={`relative card-glass rounded-3xl p-8 border-2 ${p.color} transition-all duration-300 ${i === 1 ? "md:-translate-y-4" : ""}`}
              >
                {p.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-[#0a0e1a] text-xs font-bold px-4 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-display text-2xl text-white mb-2">{p.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="font-display text-4xl text-white">{p.price}</span>
                    <span className="text-slate-400 mb-1">₽/{p.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                      <Icon name="Check" size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-semibold transition-all ${p.ctaStyle}`}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            Первые 7 дней — бесплатно. Никаких обязательств.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative grid-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="Star" size={14} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm">Отзывы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Что говорят <span className="gradient-text-cyan">семьи</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 border border-white/5 hover:border-white/15 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center font-bold text-white flex-shrink-0`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.city}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={12} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="HelpCircle" size={14} className="text-purple-400" />
              <span className="text-purple-400 text-sm">Частые вопросы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Вы наверняка <span className="gradient-text-purple">спросите</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Icon name="MessageCircle" size={14} className="text-cyan-400" />
              <span className="text-cyan-400 text-sm">Напишите нам</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Первый шаг — <span className="gradient-text-cyan">бесплатно</span>
            </h2>
            <p className="text-slate-400">
              Оставьте заявку — перезвоним в течение 30 минут и ответим на все вопросы.
            </p>
          </div>

          <div className="card-glass rounded-3xl p-8 border border-cyan-500/20">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Александр"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="text-sm text-slate-400 mb-2 block">Город</label>
              <input
                type="text"
                placeholder="Москва"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
            <div className="mb-6">
              <label className="text-sm text-slate-400 mb-2 block">Что беспокоит? (необязательно)</label>
              <textarea
                rows={3}
                placeholder="Например: мама часто получает звонки от мошенников..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
              />
            </div>
            <button className="btn-primary w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2">
              <Icon name="Send" size={18} />
              Получить бесплатную консультацию
            </button>
            <p className="text-center text-xs text-slate-600 mt-4">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: "Phone", label: "Телефон", val: "+7 (800) 000-00-00" },
              { icon: "Mail", label: "Email", val: "hello@цпсемьи.рф" },
              { icon: "MapPin", label: "Работаем", val: "По всей России" },
            ].map((c) => (
              <div key={c.label} className="text-center card-glass rounded-2xl p-4 border border-white/5">
                <Icon name={c.icon} fallback="Circle" size={20} className="text-cyan-400 mx-auto mb-2" />
                <div className="text-xs text-slate-500 mb-1">{c.label}</div>
                <div className="text-xs text-white font-medium">{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-cyan-500 flex items-center justify-center">
              <Icon name="Shield" size={14} className="text-[#0a0e1a]" />
            </div>
            <span className="font-display text-white">ЦП<span className="text-cyan-400">Семьи</span></span>
          </div>
          <p className="text-xs text-slate-600 text-center">
            © 2026 Цифровой помощник семьи. Все права защищены.
          </p>
          <div className="flex gap-4 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Договор оферты</a>
          </div>
        </div>
      </footer>
    </div>
  );
}