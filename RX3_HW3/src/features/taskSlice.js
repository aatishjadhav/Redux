import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await axios.get(
    "https://task-list-hw-server-Student-neoG-Ca.replit.app/tasks"
  );

  console.log(response);
  return response.data;
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {
    toggleStatusPressed: (state, action) => {
      state.tasks.forEach((group) => {
        let task = group.tasks.find((task) => task.taskId === action.payload);
        if (task) {
          task.taskStatus = task.taskStatus === "Pending" ? "Completed" : "Pending";
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.status = "success";
      state.tasks = action.payload.tasks;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      state.status = action.payload.message;
    });
  },
});

export const { toggleStatusPressed } = taskSlice.actions;

export default taskSlice.reducer;
