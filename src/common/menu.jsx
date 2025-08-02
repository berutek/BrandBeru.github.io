import Link from "next/link";
import { BsSlash } from "react-icons/bs";

export default function Menu(){
  const linkStyle = 'font-poppins font-normal text-base text-gray-400 duration-300 hover:text-white'
  return (
    <>
      <nav className="relative list top-0">
        <ul className="flex gap-5 items-center">
          <li className={linkStyle}><Link href={"/accounts"}>Projects</Link></li>
          <BsSlash />
          <li className={linkStyle}><Link href={"/study"}>Study</Link></li>
          <BsSlash />
          <li className={linkStyle}><Link href={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}
