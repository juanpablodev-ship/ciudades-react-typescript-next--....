import ImageWrapper from "@/components/ImageWrapper"
import Link from "next/link"
export default function Bogota() {
  return (
    <main
      className="
        p-10 max-w-4xl mx-auto
        bg-gradient-to-b from-gray-100 to-blue-100
        rounded-2xl shadow-xl
        border border-blue-300/40
      "
    >
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-800 drop-shadow-sm">
          🏙️ Bogotá
        </h1>
        <p className="text-lg mt-2 text-gray-700 italic">
          La Capital de Colombia – Entre cerros y neblina
        </p>
        <div className="mt-4 h-1 w-32 bg-blue-700 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <section
        className="
          bg-white/80 p-6 rounded-2xl shadow-md border border-blue-300/30
        "
      >
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWrapper src="/images/bogota.jpg" alt="Bogotá" />
        </div>

        <p className="leading-relaxed text-blue-900 text-lg">
          Bogotá es la capital de Colombia y la ciudad más grande del país,
          con una población aproximada de 
          <b className="text-blue-700"> 8 millones </b> de habitantes.
          Es reconocida por su clima frío, su arquitectura colonial y moderna,
          sus museos y los imponentes cerros orientales que la rodean.
        </p>
      </section>

      {/* TARJETA DE ATRACTIVOS */}
      <section
        className="
          mt-10 bg-blue-50 p-6 rounded-2xl shadow-md border border-blue-300/50
        "
      >
        <h2 className="text-3xl font-bold text-blue-800 flex items-center gap-2">
          ⭐ Atractivos turísticos
        </h2>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            className="
              bg-white p-4 rounded-xl shadow border border-blue-200
              hover:bg-blue-100 transition
              text-center font-semibold text-blue-800
            "
          >
            Cerro de Monserrate
          </li>

          <li
            className="
              bg-white p-4 rounded-xl shadow border border-blue-200
              hover:bg-blue-100 transition
              text-center font-semibold text-blue-800
            "
          >
            Museo del Oro
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
