import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, name: "iPhone 15 Pro", amount: 1200, status: "Delivered" },
    { id: 2, name: "MacBook Air", amount: 999, status: "Pending" },
    { id: 3, name: "Apple Watch", amount: 450, status: "Shipped" },
  ],
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.data.push(action.payload);
    },
    deleteOrder: (state, action) => {
      state.data = state.data.filter((order) => order.id !== action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.data.findIndex((order) => order.id === action.payload.id);
      if (index !== -1) state.data[index] = action.payload;
    },
  },
});

export const { addOrder, deleteOrder, updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
