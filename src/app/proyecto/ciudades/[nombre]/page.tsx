import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function CiudadPage({ params }: { params: { nombre: string } }) {
  const { nombre } = params;

  const ciudadesValidas = [
    'bogota',
    'medellin',
    'cali',
    'bucaramanga',
    'pereira',
    'cartagena'
  ];

  if (!ciudadesValidas.includes(nombre.toLowerCase())) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-gray-100">
      
      {/* === Banner urbano === */}
      <div className="relative w-full h-72">
        <Image
          src={`/images/${nombre}.jpg`}
          alt={nombre}
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold uppercase tracking-wide text-yellow-400 drop-shadow-lg">
            {nombre}
          </h1>
        </div>
      </div>

      {/* === Contenedor principal === */}
      <div className="container mx-auto px-6 py-10">

        {/* === Tarjeta principal === */}
        <Card className="bg-neutral-800 p-6 border border-yellow-500/30 shadow-xl rounded-2xl">
          <h2 className="text-3xl font-bold mb-2 text-yellow-400">
            Información general
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Bienvenido a la ciudad de <span className="font-semibold capitalize">{nombre}</span>.  
            Aquí encontrarás información turística, curiosidades y datos importantes.
          </p>
        </Card>

        {/* === Datos clave === */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-neutral-800 p-5 rounded-xl border border-neutral-700">
            <h3 className="text-xl font-bold text-yellow-400">Población</h3>
            <p className="text-gray-300 mt-2">Cifra variable según la ciudad.</p>
          </div>

          <div className="bg-neutral-800 p-5 rounded-xl border border-neutral-700">
            <h3 className="text-xl font-bold text-yellow-400">Región</h3>
            <p className="text-gray-300 mt-2">Depende de cada ciudad.</p>
          </div>

          <div className="bg-neutral-800 p-5 rounded-xl border border-neutral-700">
            <h3 className="text-xl font-bold text-yellow-400">Atractivos</h3>
            <p className="text-gray-300 mt-2">
              Lugares turísticos característicos.
            </p>
          </div>
        </section>

        {/* === Botón volver === */}
        <div className="mt-10">
          <Link
            href="/proyecto/ciudades/"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition shadow-md"
          >
            ← Volver a la lista de ciudades
          </Link>
        </div>

      </div>

    </main>
  );
}
