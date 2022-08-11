import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper";

import blog from "./blogSlice"

const combinedReducers = combineReducers({
  blog,
});

export const makeStore = () => configureStore({ reducer: combinedReducers, });
export const wrapper = createWrapper(makeStore);
