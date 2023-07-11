import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SubMenuCard from './SubMenuCard';
import './sidebar.css';

const MenuCard = ({
  openMenu1,
  handleOpenMenu1,
  menuData,
  open,
  hoveropen,
  menuOpen,
  openMenu2,
  setOpenMenu2,
  openMenu3,
  setOpenMenu3,
}) => {
  const handleOpenMenu2 = (event) => {
    if (openMenu2 === event) {
      setOpenMenu2(event);
      setOpenMenu3();
    } else {
      setOpenMenu2(event);
      setOpenMenu3();
    }
  };

  return (
    <>
      {menuData !== false && (
        <div className="menuCard_body">
          {menuData?.expand === false ? (
            <Link
              to={menuData?.link}
              onClick={() => handleOpenMenu1(menuData?.text)}
            >
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 60,
                    justifyContent: open || hoveropen ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open || hoveropen ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    className={
                      'menu_icons ' +
                      (openMenu1 === menuData?.text && 'active_menu')
                    }
                  >
                    {menuData?.icon}
                  </ListItemIcon>
                  <ListItemText
                    className={
                      'menu_text ' +
                      (openMenu1 === menuData?.text && 'active_menu')
                    }
                    primary={menuData?.text}
                    sx={{ opacity: open || hoveropen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ) : (
            <div>
              <Link onClick={() => handleOpenMenu1(menuData?.text)}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 60,
                      justifyContent: open || hoveropen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open || hoveropen ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                      className={
                        'menu_icons ' +
                        (openMenu1 === menuData?.text && 'active_menu')
                      }
                    >
                      {menuData?.icon}
                    </ListItemIcon>
                    <ListItemText
                      className={
                        'menu_text ' +
                        (openMenu1 === menuData?.text && 'active_menu')
                      }
                      primary={menuData?.text}
                      sx={{ opacity: open || hoveropen ? 1 : 0 }}
                    />
                    <ListItemText
                      primary={
                        openMenu1 !== menuData?.text ? <BiPlus /> : <BiMinus />
                      }
                      sx={{ opacity: open || hoveropen ? 1 : 0 }}
                      className="plus_icon"
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
              {openMenu1 === menuData?.text && menuOpen === true && (
                <>
                  {menuData?.subMenu?.map((m, index) => (
                    <SubMenuCard
                      key={index}
                      subMenuData={m}
                      open1={open}
                      hoveropen={hoveropen}
                      menuOpen={menuOpen}
                      handleOpenMenu2={handleOpenMenu2}
                      openMenu2={openMenu2}
                      openMenu3={openMenu3}
                      setOpenMenu3={setOpenMenu3}
                    />
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MenuCard;
