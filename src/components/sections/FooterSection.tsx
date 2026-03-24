import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Тренировки", href: "#features" },
    { label: "Абонементы", href: "#pricing" },
    { label: "Отзывы", href: "#testimonials" },
    { label: "Расписание", href: "#" },
  ],
  company: [
    { label: "О клубе", href: "#" },
    { label: "Тренеры", href: "#" },
    { label: "Галерея", href: "#" },
    { label: "Контакты", href: "#" },
  ],
  legal: [
    { label: "Политика", href: "#" },
    { label: "Условия", href: "#" },
    { label: "Оферта", href: "#" },
  ],
}

export function FooterSection() {
  return (
    <footer className="px-6 py-16 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-display text-xl font-semibold text-zinc-100">
              GreenGo <span className="text-green-400">Fitness</span>
            </a>
            <p className="mt-4 text-sm text-zinc-500 max-w-xs">
              Силовая подготовка для мужчин, женщин и подростков. Твой результат — наша цель.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Продукт</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-zinc-100 mb-4">Правовая информация</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} GreenGo Fitness. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-zinc-500 hover:text-zinc-300 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}