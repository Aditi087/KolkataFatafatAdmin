import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Authentication/Login';
import MainLayout from './MainLayout';
import Dashboard from '../Pages/dashboard/Dashboard';
import TransactionView from '../Pages/TransactionManagement/TransactionView';
import TransactionDetails from '../Pages/TransactionManagement/TransactionDetails';
import CreateAdmin from '../Pages/AdminManagement/CreateAdmin';
import CreateUser from '../Pages/UserManagement/CreateUser';
import AdminList from '../Pages/AdminManagement/AdminList';
import UserList from '../Pages/UserManagement/UserList';
import ContestHistory from '../Pages/ContestManagement/ContestHistory';
import UpdateAdmin from '../Pages/AdminManagement/UpdateAdmin';
import Winner from '../Pages/ContestManagement/Winner';
import { Protect } from './Protect';
import { HomePage } from '../Pages/HomePage/HomePage';
import WalletRequest from '../Pages/TransactionManagement/WalletRequest';
import WalletRequestDetails from '../Pages/TransactionManagement/WalletRequestDetails';
import UpdateUser from '../Pages/UserManagement/UpdateUser';
import ContestDetails from '../Pages/ContestManagement/ContestDetails';
import ContestTransactionDetails from '../Pages/ContestManagement/ContestTransactionDetails';

function MainRoute() {
  return (
    <Routes>
      {/* ---------------------------------- home page -------------------------------------  */}
      <Route path="/" element={<HomePage />} />

      {/* ----------------------------- authentication -----------------------------  */}
      <Route path="/login" element={<Login />} />
      {/* ------------------------------------------ menu ------------------------ */}

      <Route element={<MainLayout />}>
        {/* ------------------------------- dashboard ----------------------------  */}
        <Route
          path="/dashboard"
          element={
            <Protect>
              <Dashboard />
            </Protect>
          }
        />
        {/* --------------------------------- administration --------------------------------  */}
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/admin-list" element={<AdminList />} />
        <Route path="/update-admin" element={<UpdateAdmin />} />

        {/* --------------------------------- Contest --------------------------------  */}
        <Route path="/contest-history" element={<ContestHistory />} />
        <Route path="/bet-details" element={<ContestDetails />} />
        <Route path="/winner-declaration" element={<Winner />} />
        <Route
          path="/contest-bet-transaction"
          element={<ContestTransactionDetails />}
        />

        {/* -------------------------------------- User -------------------------------------------  */}
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/update-user" element={<UpdateUser />} />

        {/* --------------------------------- Transaction --------------------------------  */}
        <Route path="/transaction" element={<TransactionView />} />
        <Route path="/transaction-details" element={<TransactionDetails />} />
        <Route path="/wallet-request" element={<WalletRequest />} />
        <Route
          path="/wallet-request-details"
          element={<WalletRequestDetails />}
        />
      </Route>
    </Routes>
  );
}

export default MainRoute;
