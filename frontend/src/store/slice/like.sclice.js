import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommunityApi from '../../API/CommunityApi';
const initialState = {
  like: null,
  commentLike: null,
  status: false,
  isError: false,
};
export const Like = createAsyncThunk('like', async (postid, thunkAPI) => {
  try {
    const response = await CommunityApi.post(`/like/like/${postid}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
export const CommentLike = createAsyncThunk(
  'commentLike',
  async ({ commentId }, thunkAPI) => {
    try {
      const response = await CommunityApi.post(
        `/like/commentlike/${commentId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const GetPostLike = createAsyncThunk(
  'getPostLike',
  async (postId, thunkAPI) => {
    try {
      const response = await CommunityApi.get(`/like/postsliked/${postId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const GetCommnetLike = createAsyncThunk(
  'getCommentLike',
  async (commentId, thunkAPI) => {
    try {
      const response = await CommunityApi.get(`/like/commentlike/${commentId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const likeSlice = createSlice({
  name: 'like',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(Like.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(Like.fulfilled, (state, action) => {
      state.status = true;
      state.like = action.payload;
    });
    builder.addCase(Like.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(CommentLike.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(CommentLike.fulfilled, (state, action) => {
      state.status = true;
      state.commentLike = action.payload;
    });
    builder.addCase(CommentLike.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetPostLike.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetPostLike.fulfilled, (state, action) => {
      state.status = true;
      state.like = action.payload;
    });
    builder.addCase(GetPostLike.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetCommnetLike.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetCommnetLike.fulfilled, (state, action) => {
      state.status = true;
      state.commentLike = action.payload;
    });
    builder.addCase(GetCommnetLike.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
  },
});

export default likeSlice.reducer;
