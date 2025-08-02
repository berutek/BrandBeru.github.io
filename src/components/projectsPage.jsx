import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";
import ProjectCard from "@components/projectCard";
import { endPoints } from "@services/api";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [repositories, setRepositories] = useState([]);

  const router = useRouter()

  useEffect(() => {
    if(!router.isReady){
      return;
    }
    const {id} = router.query
    async function github() {
      const {data} = await axios.get(endPoints.github[id])

      console.log(data)

      const sortArray = data?.sort(function (a, b) {
        return new Date(a?.updated_at) > new Date(b?.updated_at) ? -1 : 1;
      });
      setRepositories(sortArray);
    }
    github();
  }, [router.isReady]);
  return (
    <>
      <Nav back={"/accounts"} />
      <Container>
        <Header
          title={"Projects"}
          description={
            "Some of the projects are from work and some are on my own time."
          }
        />

        <div className="flex flex-wrap gap-5 justify-center items-center mt-10 opacity-0 animate-fade-in transition-opacity duration-400">
          {repositories?.filter((repo) => repo.name !== 'BrandBeru.github.io' && repo.name !== 'berutek')?.map((repo, index) =>
            (
              <ProjectCard
                key={index}
                languagesUrl={repo.languages_url}
                homePage={repo.homepage}
                createdDate={new Date(repo.created_at).toDateString()}
                updatedDate={(index<3) ? ((index===0) ? 'CURRENT' : 'RECENT') : new Date(repo.updated_at).toDateString()}
                avatar={repo.owner.avatar_url}
                userUrl={repo.owner.html_url}
                name={repo.name}
                description={repo.description}
                link={repo.html_url}
                topics={repo.topics}
              />
            )
          )}
        </div>
      </Container>
    </>
  );
}
