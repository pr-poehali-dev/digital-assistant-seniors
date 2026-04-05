import { useState } from "react";
import Icon from "@/components/ui/icon";

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

export default function PricingSection() {
  return (
    <>
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
    </>
  );
}
