import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { ApiHelperFunction } from '../ApiHelper';
import swal from 'sweetalert';

const initialState = {
  status: 'idle',
  data: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  role_data: [],
};

export const adminLogin = createAsyncThunk('admin-login', async (data) => {
  const response = await ApiHelperFunction({
    urlPath: `/login`,
    method: 'POST',
    data: data,
  });
  if (response.status === 200) {
    // swal(response.response.statusText);
    console.log(response.data);
    return response.data;
  } else {
    toast.error(response.response.statusText);
    return data.rejectedWithValue();
  }
});

export const getRole = createAsyncThunk('get-role', async (id) => {
  // console.log(data, 'kkk');
  const response = await ApiHelperFunction({
    urlPath: `/read`,
    method: 'POST',
    // data: data
  });
  // console.log(response, 'uiui');
  if (response.status === 200) {
    // toast.success('Login Successfull');
    return response.data;
  } else {
    // swal(response.response.statusText);
    return id.rejectedWithValue();
  }
});

export const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    clearState: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.data = payload?.response?.message;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getRole.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getRole.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.role_data = payload?.response?.message;
      })
      .addCase(getRole.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const { clearState } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
