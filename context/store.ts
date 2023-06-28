import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

//middleware
// import { createLogger } from "redux-logger";
// const logger = createLogger();

//redux-persist
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
// import { combineReducers } from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["page"],
// };

//reducers
import popupReducer from "@/features/popup/popupSlice";
import displayReducer from "@/features/display/displaySlice";
// const rootReducer = combineReducers({
//   auth: authReducer,
//   page: pageReducer,
//   display: displayReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

//this object
export const store = configureStore({
  //the reducer key is similar to the combineReducer of the original redux
  reducer: {
    popup: popupReducer,
    display: displayReducer,
  },
  //middleware takes a function that has getDefaultMiddleware. concat your middleware to it
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // middleware: [thunk],
});

// export const persistor = persistStore(store);
// export const store = makeStore();
// export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const storeWrapper = createWrapper<RootStore>(makeStore);
