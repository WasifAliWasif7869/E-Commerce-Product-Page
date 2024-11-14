import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slices/cartSlice";

export const store = configureStore({
  reducer: { cart },
});
