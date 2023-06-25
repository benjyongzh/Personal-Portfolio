"use client";
import ProjectCard from "@/components/ProjectCard";
import ProjectPopup from "@/components/ProjectPopup";
import projectList from "@/lib/projectList";
import { useState } from "react";
import { isEmptyObj } from "@/utils/objects";
import { projectReference } from "@/lib/projectList";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState<projectReference | {}>(
    {}
  );

  const toggleProjectPopup = (projectName: string) => {
    const project = projectList.filter(
      (projectItem: projectReference) => projectItem.projectName === projectName
    )[0];
    if (project) {
      // toggle pop up here
      if (isEmptyObj(currentProject)) {
        //no pop up at currently. so open one
        console.log("project found: ", project);
        console.log("Open pop up");
        setCurrentProject(project);
      } else {
        //pop up is currently already open. close it
        console.log("Close pop up");
        setCurrentProject({});
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 justify-stretch sm:px-12 sm:py-10 app">
      <header className="text-3xl font-light tracking-wide sm:text-5xl">
        PROJECTS
      </header>
      <p className="text-base text-start text-textlightmode">
        Here is some text. A brief description of me. blablabla. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quis laboriosam qui
        praesentium officia earum itaque nulla voluptatum obcaecati saepe
        suscipit!
      </p>
      <ul className="grid w-full grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {projectList.map((project) => (
          <ProjectCard
            key={project.projectName}
            projectName={project.projectName}
            click={(name: string) => toggleProjectPopup(name)}
          />
        ))}
      </ul>
      <ProjectPopup project={currentProject} />
    </div>
  );
}
