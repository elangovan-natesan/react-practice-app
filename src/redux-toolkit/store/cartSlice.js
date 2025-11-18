import { createSlice } from "@reduxjs/toolkit";

let dataFromLocalStorage;
if (!localStorage.getItem("carts")) {
  localStorage.setItem("carts", JSON.stringify([]));
  dataFromLocalStorage = JSON.parse(localStorage.getItem("carts"));
  console.log("from local storage : " + dataFromLocalStorage);
} else {
  dataFromLocalStorage = JSON.parse(localStorage.getItem("carts"));
}

const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLocalStorage,
  reducers: {
    addItem(state, action) {
      const existingItem = state.find((item) => item.id == action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("carts", JSON.stringify(state));
    },
    removeItem(state, action) {
      let updatedState = state.filter((item, index) => index != action.payload);
      localStorage.setItem("carts", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export default cartSlice.reducer;
export let { addItem, removeItem } = cartSlice.actions;
