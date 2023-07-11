import { BiUserPlus } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import { RiAdminFill } from 'react-icons/ri';
import { SiRepublicofgamers } from 'react-icons/si';
import { CiTrophy, CiViewList, CiWallet } from 'react-icons/ci';
import { IoGameControllerOutline } from 'react-icons/io5';
import { user } from '../pageComponents/PageConstants';
// import { user } from '../pageComponents/PageConstants/user';

export const mainMenu = [
  {
    icon: <MdOutlineDashboard className="menu_icon" />,
    text: 'Dashboard',
    link: '/dashboard',
    expand: false,
  },

  // ------------------------------------- admin -------------------------------------
  user.role === 'admin' && {
    icon: <RiAdminFill className="menu_icon" />,
    text: 'Administration Management',
    link: '#',
    expand: true,
    subMenu: [
      {
        name: 'Create Admin',
        path: '/create-admin',
      },
      {
        name: 'View Admin',
        path: '/admin-list',
      },
    ],
  },

  // -------------------------------------- contest -----------------------------------
  {
    icon: <SiRepublicofgamers className="menu_icon" />,
    text: 'Contest Management',
    link: '#',
    expand: true,
    subMenu: [
      {
        name: 'Winner Declaration',
        path: '/winner-declaration',
        icon: <CiTrophy />,
      },
      {
        name: 'Contest History',
        path: '/contest-history',
        icon: <CiViewList />,
      },
    ],
  },

  // --------------------------------------------- transaction ----------------------------------
  {
    icon: <AiOutlineTransaction className="menu_icon" />,
    text: 'Transaction Management',
    link: '#',
    expand: true,
    subMenu: [
      {
        name: 'Game Transaction',
        path: '/transaction',
        icon: <IoGameControllerOutline />,
      },
      {
        name: 'Wallet Request',
        path: '/wallet-request',
        icon: <CiWallet />,
      },
    ],
  },

  // -------------------------------- user ---------------------------------
  user.role === 'admin' && {
    icon: <BiUserPlus className="menu_icon" />,
    text: 'User Management',
    link: '#',
    expand: true,
    subMenu: [
      {
        name: 'Create User',
        path: '/create-user',
      },
      {
        name: 'View User',
        path: '/user-list',
      },
    ],
  },
  // {
  //   icon: <RiCustomerService2Fill className="menu_icon" />,
  //   text: 'Enquiries',
  //   link: '#',
  //   expand: true,
  //   subMenu: [
  //     {
  //       name: 'Enquiries',
  //       path: '/enquiries',
  //     },
  //   ],
  // },
];
