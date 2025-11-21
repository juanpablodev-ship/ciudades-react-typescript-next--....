import GridContainer from "@/components/GridContainer"
import CityCard from "@/components/CityCard"
import { cities } from "../../../data/cities"
import Link from "next/link"


export default function CiudadesPage() {
  return (
    <main
      className="
        p-12 max-w-7xl mx-auto
        bg-gradient-to-b from-emerald-300 via-white to-yellow-200
        rounded-3xl shadow-2xl border border-white/60
        backdrop-blur-md
        animate-fadeIn
      "
    >
      {/* TÍTULO PRINCIPAL */}
      <h1
        className="
          text-5xl font-extrabold mb-6 text-emerald-900
          tracking-tight drop-shadow-lg text-center
        "
      >
        Ciudades de Colombia
      </h1>

      {/* SUBTÍTULO */}
      <p
        className="
          text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12
          leading-relaxed
        "
      >
        Descubre la magia, cultura, historia y lugares icónicos que hacen de
        Colombia un país único. Explora cada ciudad a través de estas
        tarjetas interactivas.
      </p>

      {/* CONTENEDOR DE TARJETAS */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8
          p-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl
          border border-gray-200
        "
      >
        {cities.map((c) => (
          <div
            key={c.slug}
            className="
              group rounded-2xl overflow-hidden
              shadow-lg hover:shadow-2xl border border-gray-200
              bg-white
              transition-all duration-300
              hover:-translate-y-2 hover:scale-[1.02]
            "
          >
            {/* IMAGEN */}
            <div className="overflow-hidden h-48">
              <img
                src={c.image}
                alt={c.name}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition-transform duration-500
                "
              />
            </div>

            {/* CONTENIDO */}
            <div className="p-5">
              <h2 className="text-2xl font-bold text-emerald-800 mb-2">
                {c.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Conoce sus lugares más emblemáticos y su identidad cultural.
              </p>

              {/* BOTÓN */}
              <a
                href={`/proyecto/ciudades/${c.slug}`}
                className="
                  mt-2 inline-block px-4 py-2
                  text-sm font-semibold
                  bg-emerald-600 text-white
                  rounded-xl shadow-md
                  transition-all duration-300
                  hover:bg-emerald-700 hover:shadow-lg
                "
              >
                Ver más
              </a>
            </div>
          </div>
        ))}
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
