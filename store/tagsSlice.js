import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: ["Разработка", "Дизайн", "Экология", "Маркетинг"]
}

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    add: (state) => {
      state.articles = state.articles
    }
  }
})

export const { add } = tagsSlice.actions

export default tagsSlice.reducer
