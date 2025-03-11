
export default function Avatar() {
  return (
    <picture>
      <source type="image/webp" srcSet="./public/avatar.webp" />
      <img src="./public/avatar.jpg" alt="Photo" className="w-40 h-40 rounded-full mx-auto my-1" />
    </picture>
  )
}
