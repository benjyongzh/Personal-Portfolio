import { isEmptyObj } from "@/utils/objects";
import { projectReference, isProjectReference } from "@/lib/projectList";

const ProjectPopup = (props: { project: projectReference | {} }) => {
  return (
    <div
      className={`absolute top-0 right-0 flex flex-col gap-3 w-96 h-56 border-red-700 rounded-lg border-8 ${
        !isEmptyObj(props.project) ? "visible" : "hidden"
      }`}
    >
      {isProjectReference(props.project)
        ? props.project.projectName
        : "no project assigned"}
    </div>
  );
};

export default ProjectPopup;
