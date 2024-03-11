import Container from "@common/container"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import jsonCertificates from '@app/certificates.json'
import Nav from "@common/nav"
import Header from "@common/header"
import Certification from "@components/certificationCard"

export default function DefailtCertificatePage(){
  const router = useRouter()
  const [certificates, setCertificates] = useState([])
  const certs = jsonCertificates
  useEffect(() => {
    const {id} = router.query
    if(!router.isReady){return}
    setCertificates(certs.find((cer) => cer.id === id))
  }, [router.isReady])
  return (
    <>
      <Nav back={"/study"} />
      <Container>
        <Header title={certificates?.name} description={"This route contain diferents courses"} />
        <div className="py-14 flex flex-wrap gap-5 justify-center items-center">
          {certificates?.certificates?.map((cer, index) => (
            <Certification key={index} name={cer?.name} expedition={cer?.expedition} academy={cer?.academy} url={cer?.url} learning={cer?.learning} id={cer?.id} />
          ))}
        </div>
      </Container>
    </>
  )
}
