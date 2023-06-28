"use client";
import { Variants } from "framer-motion";
import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks";
import { addPopup, removePopup } from "@/features/popup/popupSlice";

const screenPopupVariant = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

// First we need to add a type to let us extend the incoming component.
/* type ExtraInfoType = {
  extraInfo: string;
};
// Mark the function as a generic using P (or whatever variable you want)
export function withExtraInfo<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  WrappedComponent: React.ComponentType<P & ExtraInfoType>
) {
  const [extraInfo, setExtraInfo] = useState("");
  setExtraInfo("important data.");

  const ComponentWithExtraInfo = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    return <WrappedComponent {...props} extraInfo={extraInfo} />;
  };
  return ComponentWithExtraInfo;
} */

export type popupWrapperInfoType = {
  popupId: string;
  popupAnimations: {
    variants: Variants;
    initial: string;
    animate: string;
  };
  popupStyle: string;
};

export default function PopupWrapper<T>(
  OriginalComponent: React.ComponentType<T & popupWrapperInfoType>
) {
  const newPopupId = "hello"; //make a unique ID here
  const dispatch = useAppDispatch();
  const currentPopups = useAppSelector((state) => state.popup.popups);

  useEffect(() => {
    dispatch(addPopup({ id: newPopupId }));

    return () => {
      dispatch(removePopup({ id: newPopupId }));
    };
  }, []);

  const NewComponent = (props: T) => {
    return (
      <OriginalComponent
        {...props}
        popupId={newPopupId}
        popupAnimations={{
          variants: screenPopupVariant,
          initial: "hidden",
          animate: "visible",
        }}
        popupStyle="bg-gradient-to-br from-secondarylightmode to-secondarylightmode-dark dark:from-secondarydarkmode-light dark:to-secondarydarkmode z-20 fixed mx-auto left-0 right-0 p-7 sm:p-9 shadow-2xl"
      />
    );
  };
  return NewComponent;
}