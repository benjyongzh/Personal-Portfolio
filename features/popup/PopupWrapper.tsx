"use client";
import { Variants } from "framer-motion";

import { useAppSelector } from "@/hooks/reduxHooks";

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
  variants: Variants;
  initial: string;
  animate: string;
  popupStyle: string;
};

function PopupWrapper<propsT>(
  OriginalComponent: React.ComponentType<propsT & popupWrapperInfoType>
): React.ComponentType<propsT> {
  const currentPopups = useAppSelector((state) => state.popup.popups);

  const NewComponent = (props: propsT) => {
    return (
      <OriginalComponent
        {...props}
        variants={screenPopupVariant}
        initial="hidden"
        animate="visible"
        popupStyle={`bg-gradient-to-br from-secondarylightmode to-secondarylightmode-dark dark:from-secondarydarkmode-light dark:to-secondarydarkmode fixed p-7 sm:p-9 shadow-2xl z-[${
          10 + currentPopups.length * 10
        }]`} //z-index might get updated with even more popups. so all popups will have same z-index, because they are all based on the same hook (currentPopups)
      />
    );
  };
  return NewComponent;
}

export default PopupWrapper;
