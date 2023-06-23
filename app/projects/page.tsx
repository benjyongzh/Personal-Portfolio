import ProjectCard from "@/components/ProjectCard";

export default function Home() {
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ul>
    </div>
  );
}
