import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload); // Add a new task to the task array
    },
    removeTask(state, action) {
      // Remove a task by filtering out the task that matches the ID or value
      state.task = state.task.filter((item) => item !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;

// Selector to get tasks
export const getTask = (state) => state.task.task;
