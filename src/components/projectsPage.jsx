import Container from "@common/container";
import Header from "@common/header";
import Nav from "@common/nav";
import ProjectCard from "@components/projectCard";
import { endPoints } from "@services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "./ProfileCard";

export default function ProjectsPage() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function github() {
      const response = await (
        await axios.get(endPoints.github.getRepositories)
      ).data;

      const sortArray = response.sort(function (a, b) {
        return new Date(a?.updated_at) > new Date(b?.updated_at) ? -1 : 1;
      });
      setRepositories(sortArray);
    }
    github();
  }, []);
  return (
    <>
      <Nav />
      <Container>
        <Header
          title={"Projects"}
          description={
            "Some of the projects are from work and some are on my own time."
          }
        />
        <div className="py-12 w-full">
          <Profile />
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {repositories?.map((repo, index) =>
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
              />
            )
          )}
        </div>
      </Container>
    </>
  );
}
