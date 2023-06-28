import { AnimatePresence } from "framer-motion";

import { useAppSelector } from "@/hooks/reduxHooks";
import { IPopup, IPopupType } from "./popupSlice";
import projectList, { projectReference } from "@/lib/projectList";
import ProjectPopup from "./ProjectPopup";

const PopupList = () => {
  const currentPopups = useAppSelector((state) => state.popup.popups);

  return (
    <AnimatePresence>
      {currentPopups.length > 0
        ? currentPopups!.map((popup: IPopup) => popup.type!.type === "project" ? <ProjectPopup project={popup.type!.info}
        closePopup: {() => {}}
      
        popupId={popup.id} /> : null)
        : null}
    </AnimatePresence>
  );
};

export default PopupList;
