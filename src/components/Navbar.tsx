import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { id: "services", label: "Услуги" },
  { id: "how", label: "Как работает" },
  { id: "pricing", label: "Тарифы" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
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
  );
}
