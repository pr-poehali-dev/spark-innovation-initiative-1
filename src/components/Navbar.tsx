const navLinks = [
  { href: "#trainer", label: "Тренер" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#pricing", label: "Абонементы" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <a href="/" className="font-display text-lg font-semibold text-zinc-100">
          GreenGo <span className="text-green-400">Fitness</span>
        </a>
        <div className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://vk.com/im?sel=89033221123"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-zinc-100 text-zinc-900 font-medium hover:bg-zinc-200 transition-colors"
          >
            Записаться
          </a>
        </div>
      </nav>
    </header>
  )
}