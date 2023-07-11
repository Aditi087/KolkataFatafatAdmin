import { configureStore } from '@reduxjs/toolkit';
import AuthenticationSlice from './slice/AuthenticationSlice';
import AdminSlice from './slice/AdminSlice';
import UserSlice from './slice/UserSlice';
import TransactionSlice from './slice/TransactionSlice';
import ResultSlice from './slice/ResultSlice';
import ContestSlice from './slice/ContestSlice';

const Store = configureStore({
  reducer: {
    auth: AuthenticationSlice,
    admin: AdminSlice,
    user: UserSlice,
    transaction: TransactionSlice,
    result: ResultSlice,
    contest: ContestSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default Store;
