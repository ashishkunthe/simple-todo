import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export default store;
