"use client";

const ProjectCard = (props: { projectName?: string; click: Function }) => {
  return (
    <button
      className="max-w-lg border-2 border-solid rounded-lg border-textlightmode max-h-52 min-h-[250px] min-w-[200px] hover:bg-black"
      type="button"
      onClick={() => props.click(props.projectName || "")}
    >
      this is a test project card
    </button>
  );
};

export default ProjectCard;
