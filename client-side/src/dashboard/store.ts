import { configureStore } from "@reduxjs/toolkit";
// import darkModeReducer from "./features/darkMode/darkModeSlice";
// import dashboardReducer from "./features/dashboard/dashboardSlice";
import darkModeReducer from "../dashboard/features/darkMode/darkModeSlice";
import dashboardReducer from "../dashboard/features/dashboard/dashboardSlice";
export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
