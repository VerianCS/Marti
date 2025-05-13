"use client"

import Image from "next/image"
import { Download } from "lucide-react"

export default function DownloadCard({ card }) {
  const handleDownload = () => {
    // In a real application, this would trigger an actual download
    // For this example, we'll just show an alert
    alert(`Downloading ${card.fileName}`)
  }

  return (
    <div className="bg-[#f9f6f0] rounded-lg overflow-hidden border border-[#e0d5c1] shadow-md transition-transform hover:scale-[1.02]">
      <div className="relative h-40 w-full bg-[#e8d9c0]">
        <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="font-serif text-xl text-[#8b5a2b] mb-2">{card.title}</h3>
        <p className="text-[#5c3c1d] text-sm mb-4">{card.description}</p>

        <button
          onClick={handleDownload}
          className="w-full flex items-center justify-center gap-2 bg-[#c9b18c] hover:bg-[#b39b76] text-white py-2 px-4 rounded transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </button>
      </div>
    </div>
  )
}
