import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPopup {
  page: string;
  type: string;
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
        (popup) =>
          action.payload.page !== popup.page ||
          action.payload.type !== popup.type
      );
      // console.log("payload found and removed");
      // console.log("state: ", state.popups);
    },
  },
});

export default popupSlice.reducer;
export const { addPopup, removePopup } = popupSlice.actions;
