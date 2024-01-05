
export default function Navbar() {
  return (
    <div className="w-full h-[50%] px-[6vw] py-[2vh] bg-Blue33 shadow-sm font-semibold">
      <div className="flex justify-between align-center items-center flex-row text-[1.25rem]">
        <p>Logo</p>
      <ul className="flex  gap-[4vw] ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-[1vw]">
      <p className="px-4 py-2 ">Se connecter</p>
      <p className="px-4 py-2 bg-opacity-30 backdrop-blur-xl rounded-xl bg-Blue ">S inscrire</p>
      </div>
      </div>
    </div>
  )
}
