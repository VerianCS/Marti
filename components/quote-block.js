export default function QuoteBlock({ quote, author }) {
    return (
      <div className="max-w-4xl mx-auto my-16 px-8 py-12 bg-[#e8d9c0] border-l-4 border-[#8b5a2b] rounded-r-lg shadow-md relative">
        <div className="absolute top-4 left-4 text-[#8b5a2b]/20 text-8xl font-serif">"</div>
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-[#5c3c1d] italic mb-6 leading-relaxed">"{quote}"</p>
          <p className="text-right text-[#8b5a2b] font-medium">— {author}</p>
        </div>
        <div className="absolute bottom-4 right-4 text-[#8b5a2b]/20 text-8xl font-serif">"</div>
      </div>
    )
  }
  