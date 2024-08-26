import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommunityApi from '../../API/CommunityApi';
const initialState = {
  status: false,
  userData: null,
  isError: false,
  userLogin: false,
};

export const RegisterUser = createAsyncThunk(
  'register',
  async (userData, thunkAPI) => {
    try {
      const formData = new FormData()
      formData.append('username', userData.username);
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('password', userData.password);
      formData.append('confirmPassword', userData.confirmPassword);
      formData.append('avatar', userData.avatar);
      const response = await CommunityApi.post('/user/register', formData, {
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
export const LoginUser = createAsyncThunk(
  'login',
  async (userData, thunkAPI) => {
    try {
      const response = await CommunityApi.post('/user/login', userData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const Logout = createAsyncThunk('logout', async (thunkAPI) => {
  try {
    const response = await CommunityApi.post('/user/logout');
    return response.data;
  } catch (err) {
    console.log(err);

    return thunkAPI.rejectWithValue(err.response.data);
  }
});
export const UserProfile = createAsyncThunk('userProfile', async (thunkAPI) => {
  try {

    const response = await CommunityApi.get('/user/me');
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});
export const AuthStatus = createAsyncThunk('auth', async (thunkAPI) => {
  try {
    const response = await CommunityApi.get("/user/authStatus")

    return response.data
  }
  catch (err) {
    console.log(err);

    return thunkAPI.rejectWithValue(err.response.data);

  }
})
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      (state.status = 'success'), (state.userData = action.payload);
    });
    builder.addCase(RegisterUser.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(LoginUser.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.status = 'success';
      state.userData = action.payload;
    });
    builder.addCase(LoginUser.rejected, (state) => {
      state.status = 'error';
      state.isError = true;
    });
    builder.addCase(Logout.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(Logout.fulfilled, (state) => {
      state.status = true;
      state.userData = null;
    });
    builder.addCase(Logout.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(UserProfile.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(UserProfile.fulfilled, (state, action) => {
      state.status = true;
      state.userData = action.payload.data;
    });
    builder.addCase(UserProfile.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    builder.addCase(AuthStatus.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(AuthStatus.fulfilled, (state) => {
      state.status = true;
      state.userLogin = true;
    });
    builder.addCase(AuthStatus.rejected, (state) => {
      state.isError = true;
      state.status = 'error';
    });
    
  },
});
export default authSlice.reducer;
