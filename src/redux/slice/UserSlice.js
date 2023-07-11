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
  user_list: [],
  user_data: [],
};

export const createUser = createAsyncThunk('create-user', async ({ data }) => {
  console.log(data, 'kkk');
  const response = await ApiHelperFunction({
    // urlPath: `/createUser`,
    method: 'POST',
    data: data,
  });
  // console.log(response, 'uiui');
  if (response.status === 200) {
    swal({
      title: 'User Registration Successful',
      text: 'Check it in the User List',
      icon: 'success',
      button: 'OK',
    });
    return response.data;
  } else {
    toast.error(response.response.statusText);
    return data.rejectedWithValue();
  }
});

export const viewUserList = createAsyncThunk('view-user-list', async (data) => {
  const response = await ApiHelperFunction({
    urlPath: `/view/user`,
    method: 'POST',
    data: data,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    toast.error(response.response.statusText);
    return data.rejectedWithValue();
  }
});

export const getUserById = createAsyncThunk('get-user-by-id', async (id) => {
  // console.log(data, 'kkk');
  const response = await ApiHelperFunction({
    urlPath: `/edit/contest/discount/${id}`,
    method: 'GET',
    // data: data
  });
  // console.log(response, 'uiui');
  if (response.status === 200) {
    // toast.success('Login Successfull');
    return response.data;
  } else {
    swal(response.response.statusText);
    return id.rejectedWithValue();
  }
});

export const UpdateUser = createAsyncThunk('update-user', async ({ data }) => {
  // console.log(data, 'kkk');
  const response = await ApiHelperFunction({
    urlPath: `/create/contest`,
    method: 'POST',
    data: data,
  });
  // console.log(response, 'uiui');
  if (response.status === 200) {
    swal({
      title: 'Successfully User Profile Updated',
      text: 'Check it in the User List',
      icon: 'success',
      button: 'OK',
    });
    return response.data;
  } else {
    toast.error('something went wrong');
    return data.rejectedWithValue();
  }
});

export const UserSlice = createSlice({
  name: 'user-management',
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
      .addCase(createUser.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.data = payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(viewUserList.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(viewUserList.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.user_list = payload?.response?.message;
      })
      .addCase(viewUserList.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getUserById.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.user_data = payload?.response?.message;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(UpdateUser.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(UpdateUser.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.data = payload?.response?.message;
      })
      .addCase(UpdateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const { clearState } = UserSlice.actions;
export default UserSlice.reducer;
