export default function Header({title, description}){
  return (
    <>
      <div className="w-full p-5 flex items-left border-b-[1px] border-gray-700">
        <div className="flex flex-col gap-3">
          <h1 className="font-poppins font-bold text-3xl">BrandBeru | {title}</h1>
          <p className="font-poppins font-light text-gray-300">{description}</p>
        </div>
      </div>
    </>
  )
}
