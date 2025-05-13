export default function ArticleContent({ introduction, mainImage }) {
  return (
    <article className="max-w-4xl mx-auto bg-[#f9f6f0] p-8 rounded-lg shadow-md border border-[#e0d5c1] mb-16">
      <div className="relative h-[400px] w-full mb-8 bg-[#e8d9c0] p-3 border border-[#c9b18c] shadow-md">
        <img src={mainImage.src || "/placeholder.svg"} alt={mainImage.alt} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-[#8b5a2b]/80 text-white p-3 text-sm italic">
          {mainImage.caption}
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="mb-6 text-[#5c3c1d] leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-[#8b5a2b] first-letter:mr-2 first-letter:float-left">
          {introduction}
        </p>
      </div>
    </article>
  )
}
