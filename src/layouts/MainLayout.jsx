import '@styles/globals.css'

export default function MainLayout({ children }) {
  return (
    <>
      <div className='min-h-full min-w-full flex justify-center items-center'>
        <main className='w-full'>
          <div className='max-w-7xl'>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
