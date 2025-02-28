import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [
      {
        postId: "P001",
        caption: "Learning Redux Toolkit",
        likes: 22,
        user: {
          userId: "u123",
          name: "John Doe",
        },
      },
      {
        postId: "P002",
        caption: "It is fun to learn redux toolkit",
        likes: 18,
        user: {
          userId: "u123",
          name: "John Doe",
        },
      },
    ],
    },
  reducers: {
    likeButtonPressed: (state, action) => {
      const postIndex = state.posts.findIndex((post) => post.postId === action.payload)
      state.posts[postIndex].likes = state.posts[postIndex].likes + 1;
    }
  }
});

export const { likeButtonPressed } = postSlice.actions;

export default postSlice.reducer;