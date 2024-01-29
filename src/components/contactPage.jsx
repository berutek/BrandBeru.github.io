import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";
import ContactCard from "./contactCard";
import { FaTelegram } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdOutlineWhatsapp } from "react-icons/md";
import { AiFillLinkedin, AiFillSkype } from "react-icons/ai";

export default function ContactPage(){
  return (
    <>
      <Nav />
      <Container>
        <Header title={"Contact"} description={"My social networks and contact ways"} />
        <div className="py-8 flex flex-wrap gap-14 justify-center items-center">
          <ContactCard url={"https://t.me/brandberu"} icon={<FaTelegram />} title={"@brandberu"} platform={"Telegram"} />
          <ContactCard url={"mailto:brand.beru@gmail.com"} icon={<MdOutlineAlternateEmail />} title={"brand.beru@gmail.com"} platform={"Email"} />
          <ContactCard url={"https://www.linkedin.com/in/brandberu"} icon={<AiFillLinkedin />} title={"Giovanny Bernal"} platform={"Linkedin"} />
          <ContactCard url={"https://msng.link/o?brand.beru@gmail.com=sk"} icon={<AiFillSkype />} title={"Giovanny Bernal"} platform={"Skype"} />
          <ContactCard url={"https://wa.link/j3qak8"} icon={<MdOutlineWhatsapp />} title={"BrandBeru"} platform={"Whatsapp"} />
        </div>
      </Container>
    </>
  )
}
