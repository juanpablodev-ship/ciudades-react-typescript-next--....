import ImageWrapper from "@/components/ImageWrapper"
import Link from "next/link"
export default function Cali() {
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
        <h1 className="text-5xl font-extrabold text-yellow-800 drop-shadow-sm">
          🌞 Cali
        </h1>
        <p className="text-lg mt-2 text-gray-700 italic">
          La Sucursal del Cielo – Tierra de Salsa y Alegría
        </p>
        <div className="mt-4 h-1 w-32 bg-yellow-700 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <section
        className="
          bg-white/80 p-6 rounded-2xl shadow-md border border-yellow-300/30
        "
      >
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWrapper src="/images/cali.jpg" alt="Cali" />
        </div>

        <p className="leading-relaxed text-yellow-900 text-lg">
          Cali, conocida como la 
          <b className="text-yellow-700"> Sucursal del Cielo</b>, es una de las ciudades
          más alegres y cálidas de Colombia. Famosa por su tradición salsera, 
          su clima tropical, su deliciosa gastronomía y la energía vibrante de su gente.
        </p>
      </section>

      {/* TARJETA DE ATRACTIVOS */}
      <section
        className="
          mt-10 bg-yellow-50 p-6 rounded-2xl shadow-md border border-yellow-300/50
        "
      >
        <h2 className="text-3xl font-bold text-yellow-800 flex items-center gap-2">
          ⭐ Atractivos turísticos
        </h2>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            className="
              bg-white p-4 rounded-xl shadow border border-yellow-200
              hover:bg-yellow-100 transition
              text-center font-semibold text-yellow-800
            "
          >
            Cristo Rey
          </li>

          <li
            className="
              bg-white p-4 rounded-xl shadow border border-yellow-200
              hover:bg-yellow-100 transition
              text-center font-semibold text-yellow-800
            "
          >
            Zoológico de Cali
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
