import { createSlice } from "@reduxjs/toolkit";

const allProductsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    addAllProducts(state, action) {
      localStorage.setItem("allProducts", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export default allProductsSlice.reducer;
export let { addAllProducts } = allProductsSlice.actions;
