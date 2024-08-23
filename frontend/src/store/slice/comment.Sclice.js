import CommunityApi from '../../API/CommunityApi';
import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';

const initialState = {
  comments: [],
  comment: null,
  status: false,
  isError: false,
};

export const AddComment = createAsyncThunk(
  'addComment',
  async ({ postId, data }) => {


    try {
      const formData = new FormData()
      formData.append("body", data.body)
      formData.append("commentimg", data.commentimg)
      const response = await CommunityApi.post(
        `/comment/addcomment/${postId}`,
        formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }
      );

      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
);
export const GetCommentForPost = createAsyncThunk(
  'getComments',
  async (payload, thunkAPI) => {
    const { postId } = payload;

    try {
      const response = await CommunityApi.get(`/comment/getcomment/${postId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const DeleteComment = createAsyncThunk(
  'deleteComment',
  async ({ commentId }, thunkAPI) => {
    try {
      const response = await CommunityApi.delete(
        `/comment/deletecomment/${commentId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(AddComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(AddComment.fulfilled, (state, action) => {
      state.status = true;
      state.comment = action.payload;
    });
    builder.addCase(AddComment.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetCommentForPost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetCommentForPost.fulfilled, (state, action) => {
      state.status = true;
      state.comments = action.payload;
    });
    builder.addCase(GetCommentForPost.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(DeleteComment.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(DeleteComment.fulfilled, (state, action) => {
      state.status = true;
      state.comment = action.payload;
    });
    builder.addCase(DeleteComment.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
  },
});

export default commentSlice.reducer;
