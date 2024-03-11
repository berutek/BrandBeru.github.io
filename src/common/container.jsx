import { useRouter } from "next/router"
import Head from 'next/head'

export default function Container({children}){
  const router = useRouter()
  let {title} = router.query
  const fTitle = title?.replace(/-/g, ' ')
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="site_name" content="Giovanny Bernal (BrandBeru) | portfolio" />
        <meta name="keywords" content="BrandBeru, Giovanny Bernal, portfolio, projects, Giovanny, Bernal, certificates, study, experience, freelance, fullstack, backend, developer, software engineer, software" />
        <meta property="og:title" content={fTitle} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Giovanny Bernal" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="This is the Giovanny Bernal's web portfolio. Where you will find information about me" />
        <title>{fTitle}</title>
      </Head>
      <div className='min-w-full w-full max-h-screen py-14 lg:p-10 p-5'>
        {children}
      </div>
    </>
  )
}
