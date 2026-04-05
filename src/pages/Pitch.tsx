import Icon from "@/components/ui/icon";

const stats = [
  { value: "Старт", label: "только запустились" },
  { value: "Живой", label: "специалист, не бот" },
  { value: "0", label: "случаев мошенничества" },
  { value: "24/7", label: "поддержка" },
];

const partners = [
  {
    icon: "Stethoscope",
    title: "Клиники и врачи",
    text: "Мы записываем пациентов к врачам ежедневно. Партнёрская клиника получает поток лояльных клиентов без рекламных затрат.",
  },
  {
    icon: "Landmark",
    title: "Банки и финансы",
    text: "При настройке доверенных лиц мы рекомендуем надёжные банковские продукты. Аудитория доверяет нашему слову.",
  },
  {
    icon: "Building2",
    title: "Управляющие компании",
    text: "Помогаем жильцам разобраться с ЖКХ и субсидиями. Партнёрство снижает конфликты и повышает лояльность.",
  },
  {
    icon: "HeartPulse",
    title: "Аптеки и здоровье",
    text: "Наши подопечные — постоянные покупатели аптек. Рекомендация от доверенного специалиста работает лучше рекламы.",
  },
];

const offer = [
  {
    num: "01",
    title: "Кросс-рекомендации",
    text: "Наш специалист рекомендует вас клиенту в нужный момент — при записи к врачу, выборе банка, аптеки.",
  },
  {
    num: "02",
    title: "Совместные продукты",
    text: "Разрабатываем совместные льготные программы для пожилых: скидки, приоритетный приём, специальные условия.",
  },
  {
    num: "03",
    title: "Интеграция в сервис",
    text: "Встраиваем ваш сервис в наш интерфейс — запись, оплата, напоминания. Клиент не уходит, всё в одном месте.",
  },
  {
    num: "04",
    title: "Ко-маркетинг",
    text: "Совместные материалы, email-рассылки, упоминания в ежемесячных отчётах семьям.",
  },
];

export default function Pitch() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Print button — скрывается при печати */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <Icon name="ArrowLeft" size={16} />
          На сайт
        </a>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-white text-sm font-medium hover:bg-cyan-600 transition-colors shadow-lg"
        >
          <Icon name="Download" size={16} />
          Скачать PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16 print:py-8 print:px-6">

        {/* Шапка */}
        <div className="flex items-start justify-between mb-16 print:mb-10 border-b border-slate-100 pb-10">
          <div>
            <div className="text-xs font-semibold tracking-widest text-cyan-500 uppercase mb-3">
              Конфиденциально · Партнёрское предложение
            </div>
            <h1 className="text-5xl print:text-4xl font-display font-bold text-slate-900 leading-tight mb-4">
              ЦПСемьи
            </h1>
            <p className="text-xl text-slate-500 font-light">
              Цифровой помощник семьи
            </p>
          </div>
          <div className="text-right text-sm text-slate-400 mt-2">
            <div>2026 год</div>
            <div className="mt-1">hello@цпсемьи.рф</div>
            <div>+7 (800) 000-00-00</div>
          </div>
        </div>

        {/* Главный тезис */}
        <div className="bg-slate-900 text-white rounded-2xl p-10 print:p-8 mb-12 print:mb-8">
          <p className="text-2xl print:text-xl font-light leading-relaxed mb-6">
            Мы работаем с одной из самых недооценённых аудиторий в стране —
            <span className="font-semibold text-cyan-400"> пожилыми людьми и их взрослыми детьми.</span>
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            Мы только запустились, но уже видим: люди не хотят приложений и ботов. Они хотят живого человека, которому можно доверять. Наш специалист — внутри жизни семьи. Каждая такая семья — ваш потенциальный клиент.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-4 gap-4 mb-12 print:mb-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 print:p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-3xl print:text-2xl font-bold text-slate-900 mb-1">{s.value}</div>
              <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Кому подходит */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Кому это выгодно</h2>
        <div className="grid grid-cols-2 gap-4 mb-12 print:mb-8">
          {partners.map((p) => (
            <div key={p.title} className="p-6 print:p-5 border border-slate-200 rounded-xl hover:border-cyan-300 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-cyan-50 rounded-lg flex items-center justify-center">
                  <Icon name={p.icon} size={18} className="text-cyan-600" />
                </div>
                <span className="font-semibold text-slate-900">{p.title}</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Наша аудитория */}
        <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8 print:p-6 mb-12 print:mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Наша аудитория</h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-2">Целевая аудитория</div>
              <div className="text-3xl font-bold text-cyan-600">60+</div>
              <div className="text-xs text-slate-500 mt-1">возраст подопечных</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-2">Формат работы</div>
              <div className="text-3xl font-bold text-cyan-600">Живой</div>
              <div className="text-xs text-slate-500 mt-1">специалист, не бот</div>
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-700 mb-2">Сейчас</div>
              <div className="text-3xl font-bold text-cyan-600">Старт</div>
              <div className="text-xs text-slate-500 mt-1">принимаем первых партнёров</div>
            </div>
          </div>
        </div>

        {/* Что предлагаем */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Что мы предлагаем партнёрам</h2>
        <div className="space-y-4 mb-12 print:mb-8">
          {offer.map((o) => (
            <div key={o.num} className="flex gap-5 p-5 border border-slate-100 rounded-xl">
              <div className="text-3xl font-bold text-slate-200 w-10 flex-shrink-0">{o.num}</div>
              <div>
                <div className="font-semibold text-slate-900 mb-1">{o.title}</div>
                <div className="text-sm text-slate-500 leading-relaxed">{o.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Почему мы */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 print:p-6 mb-12 print:mb-8">
          <h2 className="text-xl font-bold mb-4">Почему это работает</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Мы не конкурируем с вами — мы приводим вам клиентов с уже выстроенным доверием.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Рекомендация от живого специалиста, которому пожилой человек доверяет как родному, —
            это не реклама. Это личный совет. Конверсия в разы выше любого баннера.
          </p>
        </div>

        {/* SWOT */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Анализ позиции</h2>
        <div className="grid grid-cols-2 gap-4 mb-12 print:mb-8">
          <div className="p-6 print:p-5 rounded-xl border-2 border-green-200 bg-green-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={14} className="text-white" />
              </div>
              <span className="font-bold text-green-800 text-sm uppercase tracking-wide">Сила</span>
            </div>
            <ul className="space-y-2">
              {[
                "Живой специалист — не бот и не приложение",
                "Один специалист закрывает все задачи семьи",
                "Высокое доверие: специалист воспринимается как родной",
                "Платит взрослый ребёнок — лояльная, платёжеспособная аудитория",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-green-900">
                  <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 print:p-5 rounded-xl border-2 border-blue-200 bg-blue-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Compass" size={14} className="text-white" />
              </div>
              <span className="font-bold text-blue-800 text-sm uppercase tracking-wide">Возможности</span>
            </div>
            <ul className="space-y-2">
              {[
                "Огромный рынок — нормальных сервисов для пожилых нет",
                "Партнёрства с клиниками, банками, аптеками",
                "Выход на государственные и социальные программы",
                "Тема дипфейков и мошенничества становится острее",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-blue-900">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 print:p-5 rounded-xl border-2 border-amber-200 bg-amber-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-amber-500 rounded-lg flex items-center justify-center">
                <Icon name="AlertTriangle" size={14} className="text-white" />
              </div>
              <span className="font-bold text-amber-800 text-sm uppercase tracking-wide">Слабости</span>
            </div>
            <ul className="space-y-2">
              {[
                "Только запустились — нет кейсов и репутации",
                "Сложно масштабировать: каждый специалист — живой человек",
                "Качество зависит от конкретного сотрудника",
                "Сложно донести ценность: решение принимают дети, не родители",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-amber-900">
                  <span className="text-amber-500 mt-0.5 flex-shrink-0">!</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 print:p-5 rounded-xl border-2 border-red-200 bg-red-50">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-red-500 rounded-lg flex items-center justify-center">
                <Icon name="ShieldAlert" size={14} className="text-white" />
              </div>
              <span className="font-bold text-red-800 text-sm uppercase tracking-wide">Угрозы</span>
            </div>
            <ul className="space-y-2">
              {[
                "Крупные игроки (Сбер, Яндекс) могут войти в нишу",
                "Мошенники совершенствуются — сложно гарантировать защиту",
                "Высокая стоимость привлечения при небольшом чеке",
                "Зависимость от доверия: один скандал — удар по репутации",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-red-900">
                  <span className="text-red-500 mt-0.5 flex-shrink-0">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Следующий шаг */}
        <div className="border-t border-slate-100 pt-10 print:pt-8 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-slate-900 mb-1">Давайте обсудим формат</div>
            <div className="text-slate-500 text-sm">Готовы начать с пилотного проекта на 30 дней</div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-slate-900">hello@цпсемьи.рф</div>
            <div className="text-slate-500 text-sm mt-1">+7 (800) 000-00-00</div>
          </div>
        </div>

      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 1.5cm; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}