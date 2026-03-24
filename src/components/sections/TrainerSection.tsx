import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const achievements = [
  { icon: "Trophy", text: "Член федерации НАП (Национальная Ассоциация Пауэрлифтинга)" },
  { icon: "Medal", text: "Многократный победитель региональных соревнований по силовому троеборью" },
  { icon: "Star", text: "Тренерский стаж — более 15 лет" },
  { icon: "Users", text: "Подготовил десятки спортсменов разного уровня" },
  { icon: "Dumbbell", text: "Специализация — силовая подготовка, пауэрлифтинг, работа с любым уровнем" },
  { icon: "Monitor", text: "Онлайн-ведение: программы, контроль результатов, обратная связь" },
]

const galleryImages = [
  "https://cdn.poehali.dev/projects/3c8a66b5-d534-411a-92f4-aaf844704f1c/files/c20e1d76-49b3-4c2a-9ac8-3fb5342decae.jpg",
  "https://cdn.poehali.dev/projects/3c8a66b5-d534-411a-92f4-aaf844704f1c/files/5102c13f-187e-422d-8eec-8a3ff598b971.jpg",
]

export function TrainerSection() {
  return (
    <section id="trainer" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Ваш тренер</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Евгений Михайлович Автономов
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Тренер по силовой подготовке из Чебоксар. С 1979 года в спорте — с 2000-х в тренерской работе.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://cdn.poehali.dev/projects/3c8a66b5-d534-411a-92f4-aaf844704f1c/files/ff72f084-de9f-4657-a221-b1968ca5c029.jpg"
                alt="Евгений Михайлович Автономов — тренер по силовой подготовке"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">Принимает новых клиентов</span>
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-video">
                  <img src={img} alt={`GreenGo Fitness зал ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* About */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
              <h3 className="font-heading font-semibold text-zinc-100 mb-3">О тренере</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Евгений Михайлович — опытный тренер по силовой подготовке из Чебоксар. Член федерации НАП,
                участник и призёр соревнований по пауэрлифтингу. Специализируется на персональных онлайн-тренировках:
                составляет индивидуальные программы, ведёт клиентов дистанционно и контролирует каждый результат.
                Работает с мужчинами, женщинами и подростками любого уровня подготовки.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/40 hover:border-zinc-700/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={item.icon} size={16} className="text-green-400" />
                  </div>
                  <span className="text-zinc-400 text-sm leading-relaxed">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://vk.com/im?sel=89033221123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                Написать ВКонтакте
              </a>
              <a
                href="tel:+79033221123"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium text-sm transition-colors"
              >
                <Icon name="Phone" size={16} />
                +7 903 322-11-23
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
