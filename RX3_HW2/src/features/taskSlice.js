import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasksByDate: [
      {
        date: "15/07/2024",
        tasks: [
          {
            name: "Get Groceries from the market.",
            status: "Pending",
          },
          {
            name: "Go to Gym.",
            status: "Completed",
          },
          {
            name: "Water the plants.",
            status: "Completed",
          },
        ],
      },
      {
        date: "16/07/2024",
        tasks: [
          {
            name: "Go to the park.",
            status: "Completed",
          },
          {
            name: "Get my room cleaned.",
            status: "Pending",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleStatusPressed: (state, action) => {
      state.tasksByDate.forEach((group) => {
        let task = group.tasks.find((task) => task.name === action.payload);
        if (task) {
          task.status = task.status === "Pending" ? "Completed" : "Pending";
        }
      });
    },
  },
});

export const { toggleStatusPressed } = taskSlice.actions;

export default taskSlice.reducer;
