import Link from "next/link";

export default function Menu(){
  const linkStyle = 'font-poppins font-extralight text-base text-gray-400 hover:text-gray-200 duration-300'
  return (
    <>
      <nav className="relative list top-0">
        <ul className="flex gap-5">
          <li className={linkStyle}><Link href={"/projects"}>Projects</Link></li>
          <li className={linkStyle}><Link href={"/study"}>Study</Link></li>
          <li className={linkStyle}><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
