import { configureStore } from '@reduxjs/toolkit';
import authSclice from './slice/authSclice';
import postSclice from './slice/post.Sclice';
import likeSclice from './slice/like.sclice';
import commentSclice from './slice/comment.Sclice';
const store = configureStore({
  reducer: {
    auth: authSclice,
    post: postSclice,
    like: likeSclice,
    comment: commentSclice,
  },
});
export default store;
