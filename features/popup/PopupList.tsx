import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

import { useAppSelector } from "@/hooks/reduxHooks";
import { IPopup } from "./popupSlice";
// import projectList, { projectReference } from "@/lib/projectList";
import ProjectPopup from "./ProjectPopup";

const PopupList = () => {
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const getPopupElement = (popup: IPopup) => {
    switch (popup.type!.type) {
      case "projectPopup":
        return (
          <ProjectPopup
            project={popup.type!.info}
            popupId={popup.id}
            key={popup.id}
          />
        );
        break;

      default:
        break;
    }
  };

  return (
    <AnimatePresence>
      {currentPopups.length > 0
        ? currentPopups.map((popup: IPopup) => getPopupElement(popup))
        : null}
    </AnimatePresence>
  );
};

export default PopupList;
