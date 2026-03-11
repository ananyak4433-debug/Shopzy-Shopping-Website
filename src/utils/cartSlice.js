import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
    message: ""
  },

  reducers: {

    addCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i._id === item._id
      );

      if (!existingItem) {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    clearMessage: (state) => {
      state.message = "";
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i._id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i._id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }

  }
});

export const {
  addCart,
  removeItem,
  increaseQty,
  decreaseQty,
  clearMessage
} = cartSlice.actions;

export default cartSlice.reducer;