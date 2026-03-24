import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "За 3 месяца в GreenGo Fitness я прибавил 15 кг в жиме лёжа. Тренер знает, как выжать максимум из каждой тренировки!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Артём Королёв",
    role: "Клиент клуба, 2 года",
  },
  {
    text: "Наконец-то нашла зал, где не смотрят косо. Атмосфера поддерживающая, тренер всегда на связи и помогает с техникой.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Мария Соколова",
    role: "Клиентка клуба, 1.5 года",
  },
  {
    text: "Привёл сюда сына-подростка — доволен на все 100%. Грамотный подход к молодым спортсменам, безопасные нагрузки.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Лебедев",
    role: "Клиент клуба, 6 месяцев",
  },
  {
    text: "Похудела на 12 кг и стала заметно сильнее. Силовые тренировки — это именно то, что мне было нужно. Спасибо команде!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Васильева",
    role: "Клиентка клуба, 1 год",
  },
  {
    text: "Оборудование топового уровня, чисто и просторно. Никаких очередей к тренажёрам — всё продумано до мелочей.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Никита Морозов",
    role: "Клиент клуба, 8 месяцев",
  },
  {
    text: "Пробовал много залов — здесь лучшее соотношение цены и качества. Тренер реально вкладывается в каждого клиента.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Сергей Попов",
    role: "Клиент клуба, 3 года",
  },
  {
    text: "Сдала нормативы ГТО благодаря программе тренировок из GreenGo. Рекомендую всем, кто хочет реального результата!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Екатерина Новикова",
    role: "Клиентка клуба, 10 месяцев",
  },
  {
    text: "Групповые тренировки — огонь! Энергетика зашкаливает, а результаты видны уже через месяц. Это место заряжает!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Иван Козлов",
    role: "Клиент клуба, 5 месяцев",
  },
  {
    text: "После травмы боялась снова тренироваться. Тренер разработал безопасный план, и сейчас я сильнее, чем до травмы!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Алина Фёдорова",
    role: "Клиентка клуба, 7 месяцев",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["💪 Силовые тренировки", "🏋️ Тяжёлая атлетика", "🔥 Жиросжигание", "🥊 Функциональный тренинг", "🧘 Растяжка", "🏆 Соревновательный спорт"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Результаты говорят сами
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Реальные истории клиентов GreenGo Fitness.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Направления тренировок в клубе</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}