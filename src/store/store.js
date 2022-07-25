import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./reducers/chatSlice";

const rootReducer = combineReducers({
  chatSlice: chatSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
