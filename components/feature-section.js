import { BookOpen, ScrollText, MessageSquare, BookMarked } from "lucide-react"

export default function FeatureSection({ features }) {
  const iconMap = {
    BookOpen: BookOpen,
    ScrollText: ScrollText,
    MessageSquare: MessageSquare,
    BookMarked: BookMarked,
  }

  return (
    <section className="max-w-4xl mx-auto my-16 bg-[#f9f6f0] p-8 rounded-lg shadow-md border border-[#e0d5c1]">
      <h2 className="text-3xl font-serif text-[#8b5a2b] mb-8 text-center">En este portal, los usuarios encontrarán:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon]

          return (
            <div key={index} className="flex gap-4 items-start group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e8d9c0] flex items-center justify-center text-[#8b5a2b] group-hover:bg-[#c9b18c] group-hover:text-white transition-colors">
                {Icon && <Icon className="h-6 w-6" />}
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#8b5a2b] mb-2">{feature.title}</h3>
                <p className="text-[#5c3c1d] mb-4">{feature.description}</p>
                <div className="relative h-[120px] w-full overflow-hidden rounded-md border border-[#c9b18c]">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-[1.05]"
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
