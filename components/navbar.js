"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para aplicar el efecto de blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const categories = [
    { name: "Inicio", href: "/" },
    { name: "Obras", href: "#" },
    { name: "Biografía", href: "#" },
    { name: "Archivo", href: "#" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#e8d9c0]/80 backdrop-blur-md shadow-md" : "bg-[#e8d9c0]"
      } border-b border-[#c9b18c]`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl text-[#8b5a2b] font-bold">
              José Martí
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="font-medium text-[#8b5a2b] hover:text-[#5c3c1d] px-3 py-2 rounded-md transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#8b5a2b] hover:text-[#5c3c1d] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#e8d9c0] border-b border-[#c9b18c]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="block font-medium text-[#8b5a2b] hover:text-[#5c3c1d] px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
