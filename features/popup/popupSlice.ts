import { projectReference } from "@/lib/projectList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imageReference, slideshowInfo } from "@/lib/images";

export interface IPopup {
  id: string;
  type: IPopupType;
}

export interface IPopupType {
  type: string; //projectPopup, contact, about
  info: projectReference | slideshowInfo; // or whatever reference for other types of popups
}

type InitialState = { popups: Array<IPopup>; currentProjectPopup: IPopup | {} };

const initialState: InitialState = {
  popups: [], //array of popups
  currentProjectPopup: {},
};

// create slice takes an object with name, initialState and reducers
const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    addPopup: (state, action: PayloadAction<IPopup>) => {
      // console.log("add action. payload: ", action.payload);
      state.popups.push(action.payload);
      // check if popup was a project popup
      if (action.payload.type!.type === "projectPopup") {
        state.currentProjectPopup = action.payload;
      }
      // console.log("popups: ", state.popups);
      // console.log("projectpopup: ", state.currentProjectPopup);
    },
    removePopup: (state, action: PayloadAction<IPopup>) => {
      // console.log("remove action. payload: ", action.payload);
      state.popups = state.popups.filter(
        (popup) => action.payload.id !== popup.id
      );
      // check if popup was a project popup
      if (action.payload.type.type === "projectPopup") {
        //check if this was the only popup type project
        const remainingProjectPopup = state.popups.filter(
          (popup) => action.payload.type!.type === "projectPopup"
        )[0];
        if (remainingProjectPopup) {
          state.currentProjectPopup = remainingProjectPopup;
        } else {
          state.currentProjectPopup = {};
        }
      }
      // console.log("payload found and removed");
      // console.log("popups: ", state.popups);
      // console.log("projectpopup: ", state.currentProjectPopup);
    },
  },
});

export default popupSlice.reducer;
export const { addPopup, removePopup } = popupSlice.actions;
