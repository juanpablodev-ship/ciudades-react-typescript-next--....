import Link from "next/link"
import Image from "next/image"

interface Props {
  slug: string
  name: string
  image: string
}

export default function CityCard({ slug, name, image }: Props) {
  return (
    <Link
      href={`/proyecto/ciudades/${slug}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-md transition"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
    </Link>
  )
}
