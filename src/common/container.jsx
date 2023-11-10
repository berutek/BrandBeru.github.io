export default function Container({children}){
  return (
    <>
      <div className='min-w-full w-full max-h-screen py-14 lg:px-10 px-5'>
        {children}
      </div>
    </>
  )
}
