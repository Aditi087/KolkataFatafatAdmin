import { ListItemText } from '@mui/material';
import React, { useState } from 'react';
import { BiMinus, BiPlay, BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './sidebar.css';

const SubMenuCard = ({
  subMenuData,
  open1,
  hoveropen,
  menuOpen,
  handleOpenMenu2,
  openMenu2,
  openMenu3,
  setOpenMenu3,
}) => {
  const handleOpenMenu3 = (event) => {
    if (openMenu3 === event) {
      setOpenMenu3(event);
    } else {
      setOpenMenu3(event);
    }
  };
  return (
    <>
      <div className="d-flex flex-column ps-5 pe-4">
        {subMenuData?.subMenu1 ? (
          <div>
            <Link
              className="d-flex menu_text my-1"
              onClick={() => handleOpenMenu2(subMenuData?.name)}
              style={{ opacity: open1 || hoveropen ? 1 : 0 }}
            >
              {subMenuData?.icon ? (
                <div
                  className={
                    'me-2 menu_icons ' +
                    (openMenu2 === subMenuData?.name && 'active_menu')
                  }
                >
                  {subMenuData?.icon}
                  {console.log(subMenuData, 'xxxx')}
                </div>
              ) : (
                <div className="me-2">
                  <BiPlay
                    className={
                      'menu_icons ' +
                      (openMenu2 === subMenuData?.name && 'active_menu')
                    }
                  />
                </div>
              )}
              <div
                className={
                  'menu_text ' +
                  (openMenu2 === subMenuData?.name && 'active_menu')
                }
              >
                {subMenuData?.name}
              </div>
              <ListItemText
                primary={
                  openMenu2 !== subMenuData?.name ? <BiPlus /> : <BiMinus />
                }
                sx={{ opacity: open1 || hoveropen ? 1 : 0 }}
                className="plus_icon"
              />
            </Link>
          </div>
        ) : (
          <Link
            to={subMenuData?.path}
            className="d-flex menu_text my-1"
            style={{ opacity: open1 || hoveropen ? 1 : 0 }}
            onClick={() => handleOpenMenu2(subMenuData?.name)}
          >
            {subMenuData?.icon ? (
              <div
                className={
                  'me-2 sub_menu_icons ' +
                  (openMenu2 === subMenuData?.name && 'active_menu')
                }
              >
                {subMenuData?.icon}
              </div>
            ) : (
              <div className="me-2">
                <BiPlay
                  className={
                    'menu_icons ' +
                    (openMenu2 === subMenuData?.name && 'active_menu')
                  }
                />
                {console.log(
                  openMenu2,
                  subMenuData?.name,
                  subMenuData?.name === localStorage.getItem('om2'),
                  'zzzz'
                )}
              </div>
            )}
            <div
              className={
                'menu_text ' +
                (openMenu2 === subMenuData?.name && 'active_menu')
              }
            >
              {subMenuData?.name}
            </div>
          </Link>
        )}
        {openMenu2 === subMenuData?.name && menuOpen === true && (
          <div className="d-flex flex-column ps-4">
            {subMenuData?.subMenu1?.map((s, index) => (
              <Link
                key={index}
                to={s?.path}
                className={
                  'py-1 menu_text d-flex ' +
                  (openMenu3 === s?.name && 'active_menu')
                }
                onClick={() => handleOpenMenu3(s?.name)}
              >
                {s?.icon ? (
                  <div
                    className={
                      'me-2 menu_icons ' +
                      (openMenu3 === s?.name && 'active_menu')
                    }
                  >
                    {s?.icon}
                  </div>
                ) : (
                  <div className="me-2">
                    <BiPlay
                      className={
                        'menu_icons ' + (openMenu3 === s?.name && 'active_menu')
                      }
                    />
                  </div>
                )}
                <div
                  className={
                    'menu_text ' + (openMenu3 === s?.name && 'active_menu')
                  }
                >
                  {s?.name}
                </div>
                {/* {s?.name} */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SubMenuCard;
