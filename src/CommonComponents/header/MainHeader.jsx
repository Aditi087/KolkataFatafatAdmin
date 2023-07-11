import React, { useEffect, useState } from 'react';
import './style.css';
import { Backdrop, Badge, Box, Fade, Modal } from '@mui/material';
import { IoMdNotifications } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import Profile from '../../Pages/Profile/Profile';
import profileImage from '../../assets/profile.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadious: '10px',
  boxShadow: 24,
  p: 4,
};

function MainHeader({ openMenu1, openMenu2, openMenu3 }) {
  const [breadcrumb, setBreadcrumb] = useState('');

  useEffect(() => {
    let temp = [openMenu1];
    if (openMenu2) {
      temp.push(' / ', openMenu2);
    }
    if (openMenu3) {
      temp.push(' / ', openMenu3);
    }
    let add = temp.join(' ');
    setBreadcrumb(add);
  }, [openMenu1, openMenu2, openMenu3]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <div className="main_header sticky-top">
        <div className="header_left d-flex">
          <span className="breadcrumbs my-auto">{breadcrumb}</span>
        </div>

        <div className="header_right d-flex">
          <div className="header_icon_div my-auto">
            <Link to={'/wallet-request'}>
              <Badge
                badgeContent={0}
                max={999}
                showZero
                color="secondary"
                className="mt-2"
              >
                <IoMdNotifications className="header_icon my-auto" />
              </Badge>
            </Link>
          </div>
          <div className="header_icon_div my-auto d-flex">
            <Dropdown className="header_dropdown my-auto">
              <Dropdown.Toggle>
                <button className="ghost_btn">
                  <RiUserLine className="header_profile_icon" />
                  {/* <img
                    src={profileImage}
                    alt=""
                    className="header_profile_img"
                  /> */}
                </button>
              </Dropdown.Toggle>

              <Dropdown.Menu className="dr_menu">
                <Dropdown.Item onClick={handleOpen}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={logout}>
                  <button className="ghost_btn d-flex justify-content-between w-100">
                    <span>Logout</span>
                    <span>
                      <AiOutlineLogout />
                    </span>
                  </button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Profile />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default MainHeader;
