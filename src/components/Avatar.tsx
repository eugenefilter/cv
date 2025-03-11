
export default function Avatar() {
  return (
    <picture>
      <source type="image/webp" srcSet="avatar.webp" />
      <img src="avatar.jpg" alt="Photo" className="w-40 h-40 rounded-full mx-auto my-1" />
    </picture>
  )
}
