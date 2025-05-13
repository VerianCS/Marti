import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#e8d9c0] border-t border-[#c9b18c] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl text-[#8b5a2b] mb-4">José Martí</h3>
            <p className="text-[#5c3c1d] text-sm mb-4">
              Preservando el legado literario y revolucionario de José Martí, una de las figuras más importantes de la
              literatura hispanoamericana.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#c9b18c] flex items-center justify-center text-white hover:bg-[#8b5a2b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#c9b18c] flex items-center justify-center text-white hover:bg-[#8b5a2b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#c9b18c] flex items-center justify-center text-white hover:bg-[#8b5a2b] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#8b5a2b] mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#5c3c1d] hover:text-[#8b5a2b] text-sm flex items-center">
                  <span className="mr-2">›</span> Biografía de José Martí
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c3c1d] hover:text-[#8b5a2b] text-sm flex items-center">
                  <span className="mr-2">›</span> Colección de Poemas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c3c1d] hover:text-[#8b5a2b] text-sm flex items-center">
                  <span className="mr-2">›</span> Ensayos Políticos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c3c1d] hover:text-[#8b5a2b] text-sm flex items-center">
                  <span className="mr-2">›</span> Archivo Fotográfico
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#5c3c1d] hover:text-[#8b5a2b] text-sm flex items-center">
                  <span className="mr-2">›</span> Eventos y Conferencias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl text-[#8b5a2b] mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#8b5a2b] mr-2 mt-0.5" />
                <span className="text-[#5c3c1d] text-sm">Santiago de Cuba, Cuba</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#8b5a2b] mr-2" />
                <span className="text-[#5c3c1d] text-sm">+53 7 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#8b5a2b] mr-2" />
                <span className="text-[#5c3c1d] text-sm">brian.alfaro@estudiantes.uo.edu.cu</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-serif text-[#8b5a2b] mb-2">Suscríbete a nuestro boletín</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-3 py-2 bg-white border border-[#c9b18c] rounded-l focus:outline-none text-sm"
                />
                <button className="bg-[#8b5a2b] hover:bg-[#5c3c1d] text-white px-4 py-2 rounded-r transition-colors text-sm">
                  Suscribir
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#c9b18c] text-center text-[#5c3c1d] text-sm">
          © {new Date().getFullYear()} Universidad de Oriente.
        </div>
      </div>
    </footer>
  )
}
