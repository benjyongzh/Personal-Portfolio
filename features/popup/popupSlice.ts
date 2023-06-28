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

type InitialState = { popups: Array<IPopup> };

const initialState: InitialState = {
  popups: [], //array of popups
};

// create slice takes an object with name, initialState and reducers
const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    addPopup: (state, action: PayloadAction<IPopup>) => {
      // console.log("add action. payload: ", action.payload);
      state.popups.push(action.payload);
      // console.log("state: ", state.popups);
    },
    removePopup: (state, action: PayloadAction<IPopup>) => {
      // console.log("remove action. payload: ", action.payload);
      state.popups = state.popups.filter(
        (popup) => action.payload.id !== popup.id
      );
      // console.log("payload found and removed");
      // console.log("state: ", state.popups);
    },
  },
});

export default popupSlice.reducer;
export const { addPopup, removePopup } = popupSlice.actions;
