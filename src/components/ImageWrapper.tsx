export default function ImageWrapper({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow">
      <img src={src} alt={alt} className="w-full h-56 object-cover" />
    </div>
  )
}
