import { AnimatePresence } from "framer-motion";

import { useAppSelector } from "@/hooks/reduxHooks";
import { IPopup } from "./popupSlice";
import ProjectPopup from "./ProjectPopup";
import ImagePopup from "./ImagePopup";
import { isProjectReference } from "@/lib/projectList";
import { isimageReference } from "@/lib/images";

const PopupList = () => {
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const getPopupElement = (popup: IPopup) => {
    switch (popup.type!.type) {
      case "projectPopup":
        return (
          isProjectReference(popup.type!.info) && (
            <ProjectPopup
              project={popup.type!.info}
              popupId={popup.id}
              key={popup.id}
            />
          )
        );
        break;

      case "imagePopup":
        return (
          isimageReference(popup.type!.info) && (
            <ImagePopup
              imageInfo={popup.type!.info}
              popupId={popup.id}
              key={popup.id}
            />
          )
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
