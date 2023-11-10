export default function Container({children}){
  return (
    <>
      <div className='min-w-full w-full max-h-screen py-14 lg:p-10 p-5'>
        {children}
      </div>
    </>
  )
}
