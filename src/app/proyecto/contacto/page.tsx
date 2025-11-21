import SectionTitle from "@/components/SectionTitle"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactoPage() {
  return (
    <main
      className="
        p-10 max-w-3xl mx-auto
        bg-gradient-to-b from-amber-100 via-white to-emerald-100
        rounded-3xl shadow-2xl border border-white/50
        backdrop-blur-md animate-fadeIn
      "
    >
      {/* TÍTULO */}
      <SectionTitle title="Contacto" />

      {/* TARJETA DEL FORMULARIO */}
      <div
        className="
          mt-8 p-8 bg-white/80 rounded-2xl shadow-xl
          border border-gray-200 backdrop-blur-lg
        "
      >
        <form className="space-y-6">
          {/* NOMBRE */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Tu nombre
            </label>
            <Input
              placeholder="Escribe tu nombre"
              className="bg-white/90 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
            />
          </div>

          {/* CORREO */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Correo electrónico
            </label>
            <Input
              placeholder="ejemplo@correo.com"
              type="email"
              className="bg-white/90 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600"
            />
          </div>

          {/* MENSAJE */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Mensaje
            </label>
            <Textarea
              placeholder="Escribe tu mensaje aquí..."
              className="bg-white/90 border-gray-300 focus:border-emerald-600 focus:ring-emerald-600 min-h-[120px]"
            />
          </div>

          {/* BOTÓN */}
          <Button
            type="submit"
            className="
              w-full py-3 text-lg font-bold
              rounded-xl shadow-md
              bg-emerald-600 hover:bg-emerald-700
              transition-all duration-300
              hover:shadow-xl
            "
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
      
    <div className="mt-6 flex justify-center">
      <Link
        href="/proyecto"
        className="
          bg-[#c89f74] hover:bg-[#b07b3e] text-white font-semibold
          py-2 px-6 rounded-lg shadow-md
          hover:shadow-lg transition-all duration-300
          inline-block
        "
      >
        ← Volver al proyecto
      </Link>
    </div>
    </main>
    
  )
}
