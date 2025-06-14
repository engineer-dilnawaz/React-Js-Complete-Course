import { configureStore } from "@reduxjs/toolkit";

import uiSliceReducer from "./ui-slice";
import cartSliceReducer from "./cart-slice";
import notificationMiddleware from "./notification-middleware";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notificationMiddleware),
});

export default store;
