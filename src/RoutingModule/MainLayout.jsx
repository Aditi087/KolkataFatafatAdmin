import React, { useEffect, useState } from 'react';
import Sidebar from '../CommonComponents/sidebar/Sidebar';
import MainHeader from '../CommonComponents/header/MainHeader';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [openMenu1, setOpenMenu1] = useState();
  const [openMenu2, setOpenMenu2] = useState();
  const [openMenu3, setOpenMenu3] = useState();
  useEffect(() => {
    setOpenMenu1(localStorage.getItem('om1'));
    setOpenMenu2(localStorage.getItem('om2'));
    setOpenMenu3(localStorage.getItem('om3'));
  }, []);
  return (
    <div className="d-flex main_layout">
      <Sidebar
        openMenu1={openMenu1}
        openMenu2={openMenu2}
        openMenu3={openMenu3}
        setOpenMenu1={setOpenMenu1}
        setOpenMenu2={setOpenMenu2}
        setOpenMenu3={setOpenMenu3}
      />
      <div className="w-100 layout_body">
        <MainHeader
          openMenu1={openMenu1}
          openMenu2={openMenu2}
          openMenu3={openMenu3}
        />
        <div className="outlet_layout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
