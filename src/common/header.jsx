import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { FaChevronRight } from "react-icons/fa";

export default function Header({title, description}){
  const router = useRouter()
  const [id, setId] = useState('')
  useEffect(() => {
    if(!router.isReady){
      return;
    }
    const {id} = router.query
    setId(id)
  }, [!router.isReady])
  return (
    <>
      <div className="w-full p-5 flex items-left border-b-[1px] border-gray-700">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 items-center font-poppins font-bold text-3xl flex-wrap">
            <h1 className="text-blue-500">
              <Link href="/">
                {id ? id : 'Giovanny Bernal'}
              </Link>
            </h1>
            <FaChevronRight /> 
            <span className="text-white">{title}</span>
          </div>
          <p className="font-poppins font-light text-gray-300">{description}</p>
        </div>
      </div>
    </>
  )
}
