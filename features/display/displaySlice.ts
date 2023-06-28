import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IScreenSize {
  screenWidth: number;
  screenHeight: number;
}

type InitialState = { screenSize: IScreenSize };

const initialState: InitialState = {
  screenSize: { screenWidth: 0, screenHeight: 0 },
};

// create slice takes an object with name, initialState and reducers
const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    storeScreenSize: (state, action: PayloadAction<IScreenSize>) => {
      state.screenSize = action.payload;
    },
  },
});

export default displaySlice.reducer;
export const { storeScreenSize } = displaySlice.actions;
