import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
    <>
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
    </>
  );
}
