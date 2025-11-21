import ImageWrapper from "@/components/ImageWrapper"
import Link from "next/link"

export default function Cartagena() {
  return (
    <main
      className="
        p-10 max-w-4xl mx-auto
        bg-gradient-to-b from-yellow-100 to-orange-100
        rounded-2xl shadow-xl
        border border-yellow-300/40
      "
    >
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-orange-800 drop-shadow-sm">
          🌅 Cartagena
        </h1>
        <p className="text-lg mt-2 text-orange-700 italic">
          La Heroica – Ciudad amurallada llena de color e historia
        </p>
        <div className="mt-4 h-1 w-32 bg-orange-700 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <section
        className="
          bg-white/80 p-6 rounded-2xl shadow-md border border-yellow-300/30
        "
      >
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWrapper src="/images/cartagena.jpg" alt="Cartagena" />
        </div>

        <p className="leading-relaxed text-orange-900 text-lg">
          Cartagena de Indias es una de las ciudades más turísticas de Colombia,
          con una población cercana a  
          <b className="text-orange-700"> 1 millón </b> de habitantes.
          Su ciudad amurallada, playas y arquitectura colonial la convierten
          en un destino único lleno de encanto caribeño.
        </p>
      </section>

      {/* TARJETA DE ATRACTIVOS */}
      <section
        className="
          mt-10 bg-orange-50 p-6 rounded-2xl shadow-md border border-orange-300/50
        "
      >
        <h2 className="text-3xl font-bold text-orange-800 flex items-center gap-2">
          ⭐ Atractivos turísticos
        </h2>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            className="
              bg-white p-4 rounded-xl shadow border border-orange-200
              hover:bg-orange-100 transition
              text-center font-semibold text-orange-800
            "
          >
            Ciudad Amurallada
          </li>

          <li
            className="
              bg-white p-4 rounded-xl shadow border border-orange-200
              hover:bg-orange-100 transition
              text-center font-semibold text-orange-800
            "
          >
            Castillo de San Felipe
          </li>
        </ul>
      </section>
<div className="mt-6 flex justify-center">
      <Link
        href="/proyecto/ciudades"
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
