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
  admin_list: [],
  admin_data: [],
};

export const createAdmin = createAsyncThunk(
  'create-admin',
  async ({ data }) => {
    console.log(data, 'kkk');
    const response = await ApiHelperFunction({
      // urlPath: `/createadmin`,
      method: 'POST',
      data: data,
    });
    // console.log(response, 'uiui');
    if (response.status === 200) {
      swal({
        title: 'Admin Registration Successful',
        text: 'Check it in the Admin List',
        icon: 'success',
        button: 'OK',
      });
      return response.data;
    } else {
      toast.error(response.response.statusText);
      return data.rejectedWithValue();
    }
  }
);

export const viewAdminList = createAsyncThunk(
  'view-admin-list',
  async (data) => {
    const response = await ApiHelperFunction({
      urlPath: `/view/admin`,
      method: 'POST',
      data: data,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      toast.error(response.response.statusText);
      return data.rejectedWithValue();
    }
  }
);

export const getAdminById = createAsyncThunk('get-admin-by-id', async (id) => {
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

export const UpdateAdmin = createAsyncThunk(
  'update-admin',
  async ({ data }) => {
    // console.log(data, 'kkk');
    const response = await ApiHelperFunction({
      urlPath: `/create/contest`,
      method: 'POST',
      data: data,
    });
    // console.log(response, 'uiui');
    if (response.status === 200) {
      swal({
        title: 'Successfully Admin Profile Updated',
        text: 'Check it in the Admin List',
        icon: 'success',
        button: 'OK',
      });
      return response.data;
    } else {
      toast.error('something went wrong');
      return data.rejectedWithValue();
    }
  }
);

export const AdminSlice = createSlice({
  name: 'admin-management',
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
      .addCase(createAdmin.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(createAdmin.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.data = payload;
      })
      .addCase(createAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(viewAdminList.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(viewAdminList.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.admin_list = payload?.response?.message;
      })
      .addCase(viewAdminList.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getAdminById.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getAdminById.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.admin_data = payload?.response?.message;
      })
      .addCase(getAdminById.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(UpdateAdmin.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(UpdateAdmin.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.data = payload?.response?.message;
      })
      .addCase(UpdateAdmin.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const { clearState } = AdminSlice.actions;
export default AdminSlice.reducer;
