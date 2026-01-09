import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import orderNotificationReducer from "./slices/orderNotificationSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orderNotification: orderNotificationReducer,
  },
});
