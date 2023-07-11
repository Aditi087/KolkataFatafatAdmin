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
  game_transaction_list: [],
  game_transaction_by_id: [],
  wallet_transaction_list: [],
};

export const viewGameTransaction = createAsyncThunk(
  'view-game-transaction',
  async (data) => {
    const response = await ApiHelperFunction({
      // urlPath: `/view/user`,
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

export const getGameTransactionById = createAsyncThunk(
  'get-game-tr-by-id',
  async (id) => {
    // console.log(data, 'kkk');
    const response = await ApiHelperFunction({
      // urlPath: `/edit/contest/discount/${id}`,
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
  }
);

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
      .addCase(viewGameTransaction.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(viewGameTransaction.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.game_transaction_list = payload?.response?.message;
      })
      .addCase(viewGameTransaction.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(getGameTransactionById.pending, (state) => {
        state.status = 'loading';
        state.isLoading = true;
      })
      .addCase(getGameTransactionById.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.isSuccess = true;
        // console.log('payload', payload);
        state.game_transaction_by_id = payload?.response?.message;
      })
      .addCase(getGameTransactionById.rejected, (state, action) => {
        state.status = 'failed';
        state.isError = true;
        state.isSuccess = false;
      });
  },
});
export const { clearState } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;
