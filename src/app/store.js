import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import notificationsReducer from "../features/notifications/notificationsSlice";
import ordersReducer from "../features/orders/ordersSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    notifications: notificationsReducer,
    orders: ordersReducer,
  },
});

export default store;
