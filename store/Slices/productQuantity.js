import { createSlice } from "@reduxjs/toolkit";
import productData from "@/productData";

export const counterSlice = createSlice({
  name: "counter",
  productData,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
