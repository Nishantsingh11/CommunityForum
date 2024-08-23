import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import CommunityApi from '../../API/CommunityApi';

const initialState = {
  posts: [],
  userPosts: [],
  post: null,
  status: false,
  isError: false,
  searchPosts: [],
  popularTag: [],
  searchByTagPost: [],
  popularQustions: []
};
export const GetPosts = createAsyncThunk('getPosts', async (thunkAPI) => {
  try {
    const response = await CommunityApi.get('/post/getposts');

    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
export const CreatePost = createAsyncThunk(
  'createPost',
  async (postData, thunkAPI) => {
    try {
      const formData = new FormData()
      formData.append('title', postData.title)
      formData.append('body', postData.body)
      formData.append('tags', postData.tags)
      formData.append('img', postData.img)

      const response = await CommunityApi.post('/post/createpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const GetUserPosts = createAsyncThunk(
  'getUserPosts',
  async (thunkAPI) => {
    try {
      const response = await CommunityApi.get('/post/getuserposts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const GetPost = createAsyncThunk('getPost', async (postId, thunkAPI) => {
  try {
    const response = await CommunityApi.get(`/post/getpost/${postId}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
export const UpdatePost = createAsyncThunk(
  'updatePost',
  async ({ updatedPost, postId }, thunkAPI) => {
    try {



      const response = await CommunityApi.put(
        `/post/updatepost/${postId}`,
        updatedPost);
      return response.data;
    } catch (err) {

      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const DetelePost = createAsyncThunk(
  'deletePost',
  async ({ postId }, thunkAPI) => {
    try {
      const response = await CommunityApi.delete(`/post/deletepost/${postId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const SearchByTitle = createAsyncThunk(
  'searchByTitle',
  async (keyword, thunkAPI) => {

    try {
      const response = await CommunityApi.get('/post/search', {
        params: { keyword },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const FindByTag = createAsyncThunk("findByTag", async (tag, thunkAPI) => {
  try {
    const response = await CommunityApi.get("/post/searchtag", {
      params: { keyword: tag },
    });
    return response.data;
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})
export const GetPopularTags = createAsyncThunk("getPopulartag", async (thunkAPI) => {
  try {
    const response = await CommunityApi.get("/post/popular");
    return response.data;
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})
export const PopularQustions = createAsyncThunk("getPopularPosts", async (thunkAPI) => {
  try {
    const response = await CommunityApi.get("/post/popularpost");
    return response.data;
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})
const postSlice = createSlice({
  name: 'post',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetPosts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.status = true;
      state.posts = action.payload.data;
    });
    builder.addCase(GetPosts.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(CreatePost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(CreatePost.fulfilled, (state, action) => {
      state.status = true;
      state.posts = action.payload;
    });
    builder.addCase(CreatePost.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetUserPosts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetUserPosts.fulfilled, (state, action) => {
      state.status = true;
      state.userPosts = action.payload.data;
    });
    builder.addCase(GetUserPosts.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetPost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetPost.fulfilled, (state, action) => {
      state.status = true;
      state.post = action.payload;
    });
    builder.addCase(GetPost.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(UpdatePost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(UpdatePost.fulfilled, (state, action) => {
      state.status = true;
      state.post = action.payload;
    });
    builder.addCase(UpdatePost.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(DetelePost.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(DetelePost.fulfilled, (state, action) => {
      state.status = true;
      state.posts = state.posts.filter(
        (post) => post._id !== action.payload._id
      );
    });
    builder.addCase(DetelePost.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(SearchByTitle.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(SearchByTitle.fulfilled, (state, action) => {
      state.status = true;
      state.searchPosts = action.payload.data;
    });
    builder.addCase(SearchByTitle.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(FindByTag.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(FindByTag.fulfilled, (state, action) => {
      state.status = true;
      state.searchByTagPost = action.payload.data;
    });
    builder.addCase(FindByTag.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(GetPopularTags.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(GetPopularTags.fulfilled, (state, action) => {
      state.status = true;
      state.popularTag = action.payload.data;
    });
    builder.addCase(GetPopularTags.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(PopularQustions.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(PopularQustions.fulfilled, (state, action) => {
      state.status = true;
      state.popularQustions = action.payload.data;
    });
    builder.addCase(PopularQustions.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
  },
});
export default postSlice.reducer;
