import ImageWrapper from "@/components/ImageWrapper"
import Link from "next/link"
export default function Bucaramanga() {
  return (
    <main
      className="
        p-10 max-w-4xl mx-auto
        bg-gradient-to-b from-green-100 to-lime-100
        rounded-2xl shadow-xl
        border border-green-300/40
      "
    >
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-sm">
          🌿 Bucaramanga
        </h1>
        <p className="text-lg mt-2 text-green-700 italic">
          La Ciudad Bonita – Hogar de parques y paisajes únicos
        </p>
        <div className="mt-4 h-1 w-32 bg-green-700 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <section
        className="
          bg-white/80 p-6 rounded-2xl shadow-md border border-green-300/30
        "
      >
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWrapper src="/images/bucaramanga.jpg" alt="Bucaramanga" />
        </div>

        <p className="leading-relaxed text-green-900 text-lg">
          Bucaramanga, conocida como la 
          <b className="text-green-700"> Ciudad Bonita de Colombia</b>, es reconocida 
          por su calidad de vida, sus más de 200 parques, su clima cálido y su cercanía 
          con el majestuoso Cañón del Chicamocha.
        </p>
      </section>

      {/* TARJETA DE ATRACTIVOS */}
      <section
        className="
          mt-10 bg-green-50 p-6 rounded-2xl shadow-md border border-green-300/50
        "
      >
        <h2 className="text-3xl font-bold text-green-800 flex items-center gap-2">
          ⭐ Atractivos turísticos
        </h2>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            className="
              bg-white p-4 rounded-xl shadow border border-green-200
              hover:bg-green-100 transition
              text-center font-semibold text-green-800
            "
          >
            Cañón del Chicamocha
          </li>

          <li
            className="
              bg-white p-4 rounded-xl shadow border border-green-200
              hover:bg-green-100 transition
              text-center font-semibold text-green-800
            "
          >
            Parque García Rovira
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
