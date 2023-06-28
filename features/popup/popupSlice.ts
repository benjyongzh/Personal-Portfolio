import { projectReference } from "@/lib/projectList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPopup {
  id: string;
  type?: IPopupType;
}

export interface IPopupType {
  type: string; //project, contact, about
  info: projectReference; // or whatever reference for other types of popups
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
      if (action.payload.type!.type === "project") {
        state.currentProjectPopup = action.payload;
      }
      // console.log("state: ", state.popups);
    },
    removePopup: (state, action: PayloadAction<IPopup>) => {
      // console.log("remove action. payload: ", action.payload);
      state.popups = state.popups.filter(
        (popup) => action.payload.id !== popup.id
      );
      // check if popup was a project popup
      if (action.payload.type!.type === "project") {
        //check if this was the only popup type project
        const remainingProjectPopup = state.popups.filter(
          (popup) => action.payload.type!.type === "project"
        )[0];
        if (remainingProjectPopup) {
          state.currentProjectPopup = remainingProjectPopup;
        } else {
          state.currentProjectPopup = {};
        }
      }
      // console.log("payload found and removed");
      // console.log("state: ", state.popups);
    },
  },
});

export default popupSlice.reducer;
export const { addPopup, removePopup } = popupSlice.actions;
