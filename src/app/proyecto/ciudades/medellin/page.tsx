import ImageWrapper from "@/components/ImageWrapper"
import Link from "next/link"


export default function Medellin() {
  return (
    <main
      className="
        p-10 max-w-4xl mx-auto
        bg-gradient-to-b from-green-100 to-emerald-100
        rounded-2xl shadow-xl
        border border-green-300/40
      "
    >
      {/* TÍTULO PRINCIPAL */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-emerald-800 drop-shadow-sm">
          🌸 Medellín
        </h1>
        <p className="text-lg mt-2 text-green-800 italic">
          La Ciudad de la Eterna Primavera
        </p>
        <div className="mt-4 h-1 w-32 bg-emerald-700 mx-auto rounded-full"></div>
      </header>

      {/* TARJETA PRINCIPAL */}
      <section
        className="
          bg-white/80 p-6 rounded-2xl shadow-md border border-green-300/30
        "
      >
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWrapper src="/images/medellin.jpg" alt="Medellín" />
        </div>

        <p className="leading-relaxed text-emerald-900 text-lg">
          Medellín es conocida como la Ciudad de la Eterna Primavera por su clima
          agradable durante todo el año. Ubicada en el Valle de Aburrá, cuenta con
          una población aproximada de 
          <b className="text-green-700"> 2.5 millones </b> de habitantes. Es un referente
          en innovación, cultura paisa y movilidad sostenible.
        </p>
      </section>

      {/* TARJETA DE ATRACTIVOS */}
      <section
        className="
          mt-10 bg-emerald-50 p-6 rounded-2xl shadow-md border border-emerald-300/50
        "
      >
        <h2 className="text-3xl font-bold text-emerald-800 flex items-center gap-2">
          ⭐ Atractivos turísticos
        </h2>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li
            className="
              bg-white p-4 rounded-xl shadow border border-emerald-200
              hover:bg-emerald-100 transition
              text-center font-semibold text-emerald-800
            "
          >
            Parque Arví
          </li>

          <li
            className="
              bg-white p-4 rounded-xl shadow border border-emerald-200
              hover:bg-emerald-100 transition
              text-center font-semibold text-emerald-800
            "
          >
            Plaza Botero
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
