import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";
import Certification from "./certificationCard";
import jsonCertificates from '@app/certificates.json'

export default function StudyPage(){
  const certificates = jsonCertificates
  return (
    <>
    <Nav />
     <Container>
      <Header title={"Study"} description={"My study route and certifications"} />
      <div className="py-14 flex flex-wrap gap-10 justify-center items-center">
        {certificates.map((cer, index) => (
          <Certification key={index} name={cer.name} certificates={cer.certificates} expedition={cer.expedition} academy={cer.academy} url={cer.url} learning={cer.learning} id={cer.id} />
        ))}
      </div>
     </Container>
    </>
  )
}
