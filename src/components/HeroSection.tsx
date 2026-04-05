import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/69f301b7-9c24-4422-87d0-b70d7ca3f972/files/f2bde625-ba50-4cbd-b84d-33ee9df5fa26.jpg";

const stats = [
  { val: "Старт", label: "Только запустились,\nпринимаем заявки", icon: "Rocket" },
  { val: "Живой", label: "Специалист, не бот\nи не приложение", icon: "User" },
  { val: "0", label: "Случаев мошенничества\nпосле подключения", icon: "ShieldCheck" },
  { val: "24/7", label: "Поддержка\nкаждый день", icon: "Clock" },
];

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

export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
