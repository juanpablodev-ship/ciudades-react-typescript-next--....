import Link from "next/link"

export default function Home() {
  return (
    <main className="p-8 min-h-screen flex items-center justify-center bg-[#f5f0e6]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-[#d4c1a0] p-8">
        
        {/* Avatar e Información básica */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/yo4.jpeg" 
            alt="Juan Pablo" 
            className="w-47 h-50 rounded-full border-4 border-[#c89f74] shadow-md mb-4 object-cover "
          />
          <h1 className="text-2xl font-bold text-[#4b362a] mb-1">Juan Pablo</h1>
          <p className="text-sm text-[#6f4e37] mb-4">Análisis y Desarrollo de Software - SENA</p>
          <p className="text-[#5a3f2f] mb-6 text-center">
            Soy estudiante del SENA, apasionado por el desarrollo web, React y Node.js.
          </p>
        </div>

        {/* Habilidades / Tecnologías */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#4b362a] mb-2">Habilidades</h2>
          <ul className="flex flex-wrap justify-center gap-2 text-sm text-[#5a3f2f]">
            <li className="bg-[#f0e2d1] px-3 py-1 rounded-full shadow-sm">React</li>
            <li className="bg-[#f0e2d1] px-3 py-1 rounded-full shadow-sm">Node.js</li>
            <li className="bg-[#f0e2d1] px-3 py-1 rounded-full shadow-sm">JavaScript</li>
            <li className="bg-[#f0e2d1] px-3 py-1 rounded-full shadow-sm">HTML & CSS</li>
            <li className="bg-[#f0e2d1] px-3 py-1 rounded-full shadow-sm">SQL</li>
          </ul>
        </div>

        {/* Proyectos destacados */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#4b362a] mb-2">Proyectos destacados</h2>
          <ul className="list-disc list-inside text-[#5a3f2f] text-sm">
            <li>Directorio turístico interactivo (Next.js, Tailwind)</li>
            <li>Servidor de gestión de notas (Express, SQL)</li>
            <li>Mini juegos web en React</li>
          </ul>
        </div>

        {/* Botón de acceso */}
        <Link
          href="/proyecto"
          className="w-full bg-[#6f4e37] hover:bg-[#523815] text-white font-semibold py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-center"
        >
          Ir al proyecto
        </Link>
      </div>
    </main>
  )
}
