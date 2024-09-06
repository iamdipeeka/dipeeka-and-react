import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
      reducer:todoSlice.reducer
})

import {  todoSlice } from "../features/Slice";