import { configureStore } from '@reduxjs/toolkit';
import {
  authSlice,
  commentSlice,
  likeSlice,
  postSlice,
} from './slice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    like: likeSlice,
    comment: commentSlice,
  },
});
export default store;
