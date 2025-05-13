import Navbar from "@/components/navbar"
import ArticleHeader from "@/components/article-header"
import ArticleContent from "@/components/article-content"
import DownloadCard from "@/components/download-card"
import Footer from "@/components/footer"
import QuoteBlock from "@/components/quote-block"
import ImageGallery from "@/components/image-gallery"
import FeatureSection from "@/components/feature-section"

import {martíFotoA, martíFotoB, martíFotoC} from ""

export default function Home() {
  // Sample article data
  const article = {
    title: "José Martí: Poeta, Ensayista y Revolucionario",
    author: "Fundación Literaria Martiana",
    date: "Mayo 7, 2025",
    introduction:
      "Bienvenidos a este espacio dedicado a honrar y explorar la vasta obra de José Martí, una de las figuras más luminosas de las letras hispanoamericanas. Poeta, ensayista, orador y revolucionario, Martí no solo legó a la posteridad un caudal de escritos que trascienden el tiempo, sino que también forjó con su pluma los ideales de libertad, justicia y humanismo que definieron su vida y su lucha. Este sitio web nace con el propósito de reunir, estudiar y difundir su producción literaria y política, ofreciendo a lectores, investigadores y admiradores un acceso organizado y profundo a sus poemas, escritos, discursos y ensayos.",
    biography:
      "José Martí (1853-1895) fue un hombre de pensamiento y acción, cuya obra abarca desde la lírica más delicada hasta la prosa más incisiva, siempre marcada por un estilo vibrante y una ética inquebrantable. Sus Versos sencillos (1891) revelan la pureza de su alma poética, mientras que textos como Nuestra América (1891) condensan su visión integradora y anticolonialista del continente. Como orador, sus discursos —como el conmovedor Con todos y para el bien de todos— eran llamados a la unidad y a la dignidad humana. Y en sus ensayos, Martí dialogó con el mundo, abordando desde el arte hasta la educación, siempre con una mirada adelantada a su época.",
    conclusion:
      "Más que un repositorio, este sitio aspira a ser un lugar de encuentro con la vigencia de Martí. Porque sus palabras, cargadas de belleza y verdad, siguen interpelándonos hoy. Invitamos a recorrer sus textos no como reliquias del pasado, sino como faros que iluminan los desafíos del presente.",
    quote:
      "Los hombres son todavía máquinas de comer, y recipientes de vino, y pajeros de lujuria. Y hasta que no se les enseñe a ser otra cosa, no habrá más que injusticia y servidumbre en la tierra.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Retrato de José Martí",
        caption: "José Martí, intelectual y revolucionario cubano (1853-1895)",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Manuscrito original de Versos Sencillos",
        caption: "Manuscrito original de 'Versos Sencillos', una de sus obras más reconocidas",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "José Martí dando un discurso",
        caption: "Representación de José Martí durante uno de sus discursos públicos",
      },
    ],
  }

  // Sample gallery images
  const galleryImages = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Carta manuscrita de José Martí",
      caption: "Carta manuscrita dirigida a sus compatriotas",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Portada de la revista La Edad de Oro",
      caption: "Portada de 'La Edad de Oro', revista infantil fundada por Martí",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Monumento a José Martí",
      caption: "Monumento a José Martí en La Habana, Cuba",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Edición original de Versos Sencillos",
      caption: "Primera edición de 'Versos Sencillos', publicada en 1891",
    },
  ]

  // Sample features
  const features = [
    {
      title: "Poemas",
      description:
        "Desde sus primeros versos hasta sus composiciones más maduras, donde el amor, el dolor y la patria se entrelazan.",
      icon: "BookOpen",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Escritos y cartas",
      description:
        "Documentos personales y textos periodísticos que reflejan su agudeza intelectual y su compromiso social.",
      icon: "ScrollText",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Oratorias",
      description:
        "Transcripciones y análisis de sus discursos, piezas clave para entender su labor como unificador de voluntades.",
      icon: "MessageSquare",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Ensayos",
      description: "Reflexiones sobre cultura, política y sociedad, donde Martí se revela como un pensador universal.",
      icon: "BookMarked",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  // Sample download cards
  const downloadCards = [
    {
      title: "Versos Sencillos",
      description: "Colección completa de poemas en formato PDF",
      image: "/placeholder.svg?height=200&width=300",
      fileName: "versos-sencillos.pdf",
    },
    {
      title: "Nuestra América",
      description: "Ensayo completo con notas y comentarios",
      image: "/placeholder.svg?height=200&width=300",
      fileName: "nuestra-america.pdf",
    },
    {
      title: "Cartas Selectas",
      description: "Compilación de correspondencia personal y política",
      image: "/placeholder.svg?height=200&width=300",
      fileName: "cartas-selectas.pdf",
    },
    {
      title: "Discursos Políticos",
      description: "Transcripciones de sus discursos más importantes",
      image: "/placeholder.svg?height=200&width=300",
      fileName: "discursos-politicos.pdf",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f1e6]">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <ArticleHeader article={article} />

        <ArticleContent introduction={article.introduction} mainImage={article.images[0]} />

        <FeatureSection features={features} />

        <div className="my-16 max-w-4xl mx-auto bg-[#f9f6f0] p-8 rounded-lg shadow-md border border-[#e0d5c1]">
          <h2 className="text-3xl font-serif text-[#8b5a2b] mb-6">Biografía</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative h-[300px] w-full bg-[#e8d9c0] p-2 border border-[#c9b18c] rotate-1 shadow-md">
                <img
                  src={article.images[1].src || "/placeholder.svg"}
                  alt={article.images[1].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-[#5c3c1d] leading-relaxed mb-4">{article.biography}</p>
            </div>
          </div>
        </div>

        <ImageGallery images={galleryImages} />

        <div className="my-16 max-w-4xl mx-auto bg-[#f9f6f0] p-8 rounded-lg shadow-md border border-[#e0d5c1]">
          <h2 className="text-3xl font-serif text-[#8b5a2b] mb-6">Legado</h2>
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/3">
              <div className="relative h-[300px] w-full bg-[#e8d9c0] p-2 border border-[#c9b18c] -rotate-1 shadow-md">
                <img
                  src={article.images[2].src || "/placeholder.svg"}
                  alt={article.images[2].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-[#5c3c1d] leading-relaxed mb-4">{article.conclusion}</p>
            </div>
          </div>
        </div>

        <QuoteBlock quote={article.quote} author="José Martí" />

        <section className="my-16">
          <h2 className="text-3xl font-serif text-[#8b5a2b] mb-8 text-center">Martí, poeta, ensayista, orador, escritor.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {downloadCards.map((card, index) => (
              <DownloadCard key={index} card={card} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
