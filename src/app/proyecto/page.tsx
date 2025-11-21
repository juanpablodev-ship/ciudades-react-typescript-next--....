import PageHeader from "@/components/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function ProyectoPage() {
  return (
    <main
      className="
        p-12 max-w-4xl mx-auto
        bg-gradient-to-b from-amber-100 via-amber-50 to-stone-100
        rounded-3xl shadow-2xl
        border border-amber-300/40
      "
    >
      {/* ENCABEZADO DEL PROYECTO */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-amber-900 drop-shadow-sm">
          ☕ Directorio Turístico Cafetero
        </h1>
        <p className="text-xl mt-4 text-stone-700 italic">
          Explora Colombia desde una estética cálida y natural inspirada en el café.
        </p>
        <div className="mt-5 h-1 w-40 bg-amber-800 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <Card
        className="
          bg-white/80 backdrop-blur-xl
          border border-amber-300/40
          shadow-xl rounded-3xl
        "
      >
        <CardContent className="p-8 text-amber-900 leading-relaxed text-lg">
          Este proyecto presenta una colección de ciudades de Colombia con información,
          imágenes y atractivos turísticos. Diseñado con un estilo cálido y natural
          basado en los colores del café colombiano.
        </CardContent>
      </Card>

      {/* TARJETAS DE NAVEGACIÓN */}
      <section className="mt-12 grid sm:grid-cols-2 gap-8">

        {/* TARJETA VER CIUDADES */}
        <Link href="/proyecto/ciudades">
          <div
            className="
              bg-white/80 p-8 rounded-3xl shadow-lg border border-amber-200
              hover:shadow-2xl hover:bg-amber-50 transition-all duration-300 
              hover:scale-[1.03] cursor-pointer
              text-center flex flex-col items-center gap-3
            "
          >
            <span className="text-5xl">🌄</span>
            <h2 className="text-xl font-bold text-amber-900">Ver ciudades</h2>
            <p className="text-amber-700 text-sm">
              Descubre las ciudades destacadas del directorio.
            </p>
          </div>
        </Link>

        {/* TARJETA CONTACTO */}
        <Link href="/proyecto/contacto">
          <div
            className="
              bg-white/80 p-8 rounded-3xl shadow-lg border border-amber-200
              hover:shadow-2xl hover:bg-amber-50 transition-all duration-300 
              hover:scale-[1.03] cursor-pointer
              text-center flex flex-col items-center gap-3
            "
          >
            <span className="text-5xl">📩</span>
            <h2 className="text-xl font-bold text-amber-900">Contacto</h2>
            <p className="text-amber-700 text-sm">
              Envíanos tus dudas o sugerencias.
            </p>
          </div>
        </Link>

    <div className="mt-6 flex justify-center">
      <Link
        href="/"
        className="
          bg-[#c89f74] hover:bg-[#b07b3e] text-white font-semibold
          py-2 px-6 rounded-lg shadow-md
          hover:shadow-lg transition-all duration-300
          inline-block
        "
      >
        ← Volver a la presentación
      </Link>
    </div>

      </section>
    </main>
  )
}
