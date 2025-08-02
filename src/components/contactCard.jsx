import { useRouter } from "next/router"

export default function ContactCard({title, platform, icon, url}){
  const router = useRouter()
  function externalHandle(){
    router.push(url)
  }
  return (
    <>
      <div onClick={externalHandle} className="relative flex flex-col gap-8 cursor-pointer py-20 justify-center items-center lg:max-w-lg w-full border border-gray-800 rounded-tl-xl rounded-br-xl bg-gray-800 hover:bg-gray-700  opacity-0 animate-fade-in transition-opacity duration-400">
        <div className="p-3 border relative border-gray-400 rounded-full text-xl flex flex-col justify-center items-center">
          {icon}
          <span className="h-36 w-[1px] absolute top-0 mt-11 z-0 bg-gradient-to-b from-gray-500 to-transparent"></span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="font-poppins font-semibold text-2xl z-10">{title}</h1>
          <h2 className="font-poppins font-light text-gray-400 z-10">{platform}</h2>
        </div>
      </div>
    </>
  )
}
