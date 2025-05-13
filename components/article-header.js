export default function ArticleHeader({ article }) {
    return (
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-sm bg-[#c9b18c] text-white rounded-full">Archivo Literario</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#8b5a2b] mb-4 leading-tight">{article.title}</h1>
        <div className="text-[#8b5a2b]/70 italic mb-6">
          Por {article.author} • {article.date}
        </div>
        <div className="w-32 h-1 bg-[#c9b18c] mx-auto rounded-full"></div>
      </header>
    )
  }
  