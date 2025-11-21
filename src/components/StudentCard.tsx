interface Props {
  name: string
  program: string
  avatar: string
  bio: string
}

export default function StudentCard({ name, program, avatar, bio }: Props) {
  return (
    <article className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
      {/* Imagen del estudiante */}
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border"
      />

      {/* Texto */}
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">{program}</p>
        <p className="mt-2 text-gray-800">{bio}</p>
      </div>
    </article>
  )
}
