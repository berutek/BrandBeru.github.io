import { endPoints } from "@services/api";
import Profile from "./ProfileCard";
import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";
import { FaChevronRight } from "react-icons/fa";

export default function AccountPage(){
  return (
    <>
    <Nav />
      <Container>
        <Header
          title={"Organizations"}
          description={
            "Organizations where I am owner."
          }
        />
      <div className="py-12 w-full flex flex-wrap gap-5 justify-center items-center opacity-0 animate-fade-in transition-opacity duration-400">
            <Profile url={endPoints.github.user} />
            <FaChevronRight className="text-blue-500"/>
            
            <Profile url={endPoints.github.migion} />
      </div>
      </Container>
    </>
  )
}
