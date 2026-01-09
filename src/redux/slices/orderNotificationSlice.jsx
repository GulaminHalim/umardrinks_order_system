import { createSlice } from "@reduxjs/toolkit";

const orderNotificationSlice = createSlice({
  name: "orderNotification",
  initialState: {
    hasNewOrder: false,
  },
  reducers: {
    setNewOrder: (state) => {
      state.hasNewOrder = true;
    },
    clearNewOrder: (state) => {
      state.hasNewOrder = false;
    },
  },
});

export const { setNewOrder, clearNewOrder } = orderNotificationSlice.actions;

export default orderNotificationSlice.reducer;
