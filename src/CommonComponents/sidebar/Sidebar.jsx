import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import './sidebar.css';
import MenuCard from './MenuCard';
import { mainMenu } from './sidebarList';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { ListItemText } from '@mui/material';
import logo2 from '../../assets/logo2.png';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, hoveropen }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...((open || hoveropen) && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!(open || hoveropen) && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Sidebar = ({
  openMenu1,
  openMenu2,
  openMenu3,
  setOpenMenu1,
  setOpenMenu2,
  setOpenMenu3,
}) => {
  const [open, setOpen] = useState(false);
  const [hoveropen, sethoveropen] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  const handleHoverDrawerOpen = () => {
    sethoveropen(1);
    setMenuOpen(true);
  };

  const handleHoverDrawerClose = () => {
    sethoveropen(0);
    setMenuOpen(false);
  };
  const handleOpenMenu1 = (event) => {
    if (openMenu1 === event) {
      setOpenMenu1(event);
      setOpenMenu2();
      setOpenMenu3();
    } else {
      setOpenMenu1(event);
      setOpenMenu2();
      setOpenMenu3();
    }
  };

  // console.log(openMenu1, 'opopop');

  return (
    <>
      <Drawer
        variant="permanent"
        open={open}
        hoveropen={hoveropen}
        className="sidebar"
      >
        <div className="sticky-top logo_bg d-flex">
          <div className="p-3 my-auto">
            <img
              className={'logo ' + ((open || hoveropen) && 'logo1')}
              src={logo2}
              alt=""
            />
          </div>
          <div className="d-flex flex-column my-auto">
            <span className="short_info1">Sanju Adhikari</span>
            <span className="short_info2">Admin </span>
          </div>
        </div>

        {open === true ? (
          <List className="sidebar_list">
            {mainMenu.map((e, index) => (
              <div key={index}>
                <MenuCard
                  menuData={e}
                  handleOpenMenu1={handleOpenMenu1}
                  openMenu1={openMenu1}
                  openMenu2={openMenu2}
                  openMenu3={openMenu3}
                  setOpenMenu2={setOpenMenu2}
                  setOpenMenu3={setOpenMenu3}
                  open={open}
                  hoveropen={hoveropen}
                  menuOpen={menuOpen}
                />
              </div>
            ))}
          </List>
        ) : (
          <List
            className="sidebar_list"
            onMouseEnter={handleHoverDrawerOpen}
            onMouseLeave={handleHoverDrawerClose}
          >
            {mainMenu.map((e, index) => (
              <div key={index}>
                <MenuCard
                  menuData={e}
                  handleOpenMenu1={handleOpenMenu1}
                  openMenu1={openMenu1}
                  openMenu2={openMenu2}
                  openMenu3={openMenu3}
                  setOpenMenu2={setOpenMenu2}
                  setOpenMenu3={setOpenMenu3}
                  open={open}
                  hoveropen={hoveropen}
                  menuOpen={menuOpen}
                />
              </div>
            ))}
          </List>
        )}
        {/* <div className="p-3 logo_bg"> */}
        <ListItemText
          primary={
            open || hoveropen ? (
              <IoIosArrowDropleft
                className="expant_icon"
                onClick={handleDrawerClose}
              />
            ) : (
              <IoIosArrowDropright
                className="expant_icon"
                onClick={handleDrawerOpen}
              />
            )
          }
          sx={{ opacity: open || hoveropen ? 1 : 1 }}
          className="plus_icon  p-3 nav_footer m-auto"
        />
        {/* </div> */}
      </Drawer>
    </>
  );
};

export default Sidebar;
