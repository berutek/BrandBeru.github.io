import { endPoints } from "@services/api";
import Profile from "./ProfileCard";
import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";

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
      <div className="py-12 w-full flex flex-wrap gap-5 justify-center items-center">
            <Profile url={endPoints.github.user} />
            <hr className="text-beru-300 h-full w-full lg:w-1 lg:h-fit" />
            <Profile url={endPoints.github.pnova} />
            <hr className="text-beru-300 h-full w-full lg:w-1 lg:h-fit" />
            <Profile url={endPoints.github.jg} />
      </div>
      </Container>
    </>
  )
}
