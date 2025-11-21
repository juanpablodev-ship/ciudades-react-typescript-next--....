import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function DynamicPage({ params }: { params: Promise<{ nombre: string }> }) {
  const { nombre } = await params; 

  // Datos adicionales ficticios para mostrar en las cards
  const atractivos = [
    "Parque central",
    "Museo histórico",
    "Plaza principal",
    "Zona gastronómica"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e6] to-[#e6ded3] p-6 flex flex-col items-center">
      
      {/* Card principal */}
      <Card className="w-full max-w-md shadow-2xl border border-[#d4c1a0] rounded-3xl mb-8">
        <CardHeader>
          <CardTitle className="capitalize text-2xl text-[#4b362a] font-extrabold">Ciudad: {nombre}</CardTitle>
        </CardHeader>

        <CardContent className="text-[#5a3f2f]">
          <p className="mb-4 text-lg">
            Esta es una página generada dinámicamente. No contiene datos reales, pero sirve para mostrar la estructura de la información.
          </p>

          {/* Botón regresar */}
          <div className="flex justify-center mt-4">
            <Link
              href="/proyecto/ciudades"
              className="
                bg-[#c89f74] hover:bg-[#b07b3e] text-white font-semibold
                py-2 px-6 rounded-xl shadow-lg
                hover:shadow-2xl transition-all duration-300
                text-center
              "
            >
              ← Regresar
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Cards de atractivos */}
      <div className="w-full max-w-md grid grid-cols-1 sm:grid-cols-2 gap-4">
        {atractivos.map((item, index) => (
          <Card key={index} className="bg-[#fdf7ef] border border-[#d4c1a0] rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="text-[#5a3f2f] text-center font-semibold">
              {item}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
