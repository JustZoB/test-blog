import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper";

import blog from "./blogSlice"
import tags from "./tagsSlice"

const combinedReducers = combineReducers({
  blog,
  tags,
});

export const makeStore = () => configureStore({ reducer: combinedReducers, });
export const wrapper = createWrapper(makeStore);
