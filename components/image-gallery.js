export default function ImageGallery({ images }) {
    return (
      <section className="max-w-4xl mx-auto my-16">
        <h2 className="text-3xl font-serif text-[#8b5a2b] mb-8 text-center">Galería de Imágenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="group">
              <div
                className={`relative h-[250px] bg-[#e8d9c0] p-2 border border-[#c9b18c] shadow-md 
                ${index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0"}`}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-[1.02]"
                />
                <div className="absolute     bottom-0 left-0 right-0 bg-[#8b5a2b]/80 text-white p-2 text-sm italic opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.caption}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  