// store/notificationMiddleware.js
import { showNotification, hideNotification } from "./ui-slice";

let timerId; // To prevent stacking multiple timeouts

const notificationMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === showNotification.type) {
    // Pass the action to reducer first
    next(action);

    if (timerId) clearTimeout(timerId); // Clear previous timer if any

    const timeout = action.payload.timeout ?? 2000; // Use dynamic or default 2s

    // Wait 2 seconds, then dispatch hideNotification
    timerId = setTimeout(() => {
      storeAPI.dispatch(hideNotification());
    }, timeout);
  } else {
    return next(action);
  }
};

export default notificationMiddleware;
