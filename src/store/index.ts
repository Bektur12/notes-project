import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./slices/postSlice";
import { authSlice } from "./slices/authSlice";
const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    auth: authSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
