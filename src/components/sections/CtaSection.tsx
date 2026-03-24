import { ArrowRight } from "lucide-react"
import { LiquidCtaButton } from "@/components/buttons/LiquidCtaButton"

export function CtaSection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mb-6">Готов стать сильнее?</h2>
        <p className="text-lg text-zinc-500 mb-10 text-balance">
          Присоединяйся к 500+ клиентам GreenGo Fitness. Первая тренировка — бесплатно, без обязательств.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://vk.com/im?sel=89033221123" target="_blank" rel="noopener noreferrer">
            <LiquidCtaButton>Записаться к тренеру</LiquidCtaButton>
          </a>
          <a
            href="tel:+79033221123"
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <span>+7 903 322-11-23</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}