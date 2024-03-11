import { useRouter } from "next/router";
import { useEffect, useState } from "react"

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
          <h1 className="font-poppins font-bold text-3xl">{id ? id : 'Giovanny Bernal'} | {title}</h1>
          <p className="font-poppins font-light text-gray-300">{description}</p>
        </div>
      </div>
    </>
  )
}
