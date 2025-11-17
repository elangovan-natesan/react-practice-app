import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import allProductsSliceReducer from "./allProductsSlice";

export const store = configureStore({
  reducer: {
    carts: cartSliceReducer,
    allProducts: allProductsSliceReducer,
  },
});
