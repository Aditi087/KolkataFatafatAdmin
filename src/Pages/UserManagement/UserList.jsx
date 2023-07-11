import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableList from '../../CommonComponents/table/TableList';
import { UserListView } from '../../CommonComponents/pageComponents/PageConstants';
import { SwitchButtonComponent } from '../../CommonComponents/pageComponents/PageComponents';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdAddCard } from 'react-icons/md';
import { Backdrop, Box, Button, Fade, Modal, TextField } from '@mui/material';
import './style.css';
import swal from 'sweetalert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadious: '10px',
  boxShadow: 24,
  p: 4,
};

function UserList() {
  useEffect(() => {
    localStorage.setItem('om1', 'User Management');
    localStorage.setItem('om2', 'View User');
    localStorage.removeItem('om3');
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [addAmount, setAddAmount] = useState('');
  const [amountError, setAmountError] = useState(false);
  const [searchItem, setSearchItem] = useState('');

  const columns = [
    {
      name: 'Name',
      selector: (row) => (row?.player_name ? row?.player_name : '--'),
      sortable: true,
    },
    {
      name: 'Player ID',
      selector: (row) => (row?.user_id ? row?.user_id : '--'),
      sortable: true,
      compact: true,
    },
    {
      name: 'Phone',
      selector: (row) => (row?.phone ? row?.phone : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Played Game',
      selector: (row) => (row?.match_played ? row?.match_played : '--'),
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: 'Winning Amount (INR)',
      selector: (row) =>
        row?.total_winning_amount ? row?.total_winning_amount : '--',
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: 'Won Game',
      selector: (row) => (row?.win_game ? row?.win_game : '--'),
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: 'UPI',
      selector: (row) => (row?.upi ? row?.upi : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      compact: true,
      width: '12rem',
      center: true,
      cell: (data, index) => {
        return [
          <div>
            <SwitchButtonComponent
              value={data.status}
              label
              label1="Inactive"
              label2="Active"
            />
          </div>,
        ];
      },
      button: true,
    },
    {
      name: 'Action',
      selector: (row) => row.action,
      sortable: true,
      compact: true,
      center: true,
      style: {
        borderRight: '1px solid #e5e5e5',
      },
      cell: (data, index) => {
        return [
          <div>
            <button
              // onClick={(e) => navigate(`/edit-category/${data?.id}`)}
              onClick={handleOpen}
              className="actionTableRow-btn actionButton onhover"
            >
              <MdAddCard
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide bg-dark text-warning ">Recharge Wallet</div>
          </div>,
          <div>
            <button
              // onClick={(e) => navigate(`/edit-category/${data?.id}`)}
              onClick={(e) => navigate('/update-user')}
              className="actionTableRow-btn actionButton onhover"
            >
              <RiShareForwardLine
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">View Details</div>
          </div>,
        ];
      },
      button: true,
    },
  ];

  const searchFn = () => {
    let newData = UserListView.filter(
      (v) =>
        (v?.player_name &&
          v?.player_name
            .toLowerCase()
            .includes(searchItem.toString().toLowerCase())) ||
        (v?.phone &&
          v?.phone.toLowerCase().includes(searchItem.toLowerCase())) ||
        (v?.upi && v?.upi.toLowerCase().includes(searchItem.toLowerCase()))
    );
    return newData;
  };
  const refreshClick = () => {
    // setDateFilter('');
    setSearchItem('');
  };

  const handleAddMoney = () => {
    if (addAmount) {
      setAmountError(false);
      swal('Money Successfully added');
      setAddAmount('');
    } else {
      setAmountError(true);
    }
  };

  return (
    <div className="Main_body">
      <TableList
        tableTitle="User List"
        // add
        // onClick={() => {
        //   navigate('/create-user');
        // }}
        hideText="Create User"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        search={UserListView.length > 0}
        searchValue={searchItem}
        searchOnchange={(e) => {
          setSearchItem(e.target.value);
        }}
        searchPlaceholder="Search by name or phone or upi"
        efreshClick={refreshClick}
      />
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
            <div className="d-flex flex-column">
              <div
                className="d-flex flex-column mb-4"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#252563',
                }}
              >
                <span className="mb-2">
                  Wallet Holder : <span>Sanju Adhikari</span>
                </span>
                <span>
                  Balance : Rs.{' '}
                  <span
                    style={{
                      letterSpacing: '1px',
                      color: '#f6173c',
                    }}
                  >
                    2000
                  </span>
                </span>
              </div>

              <TextField
                error={amountError}
                id="outlined-error-helper-text"
                label="Add Money"
                helperText={amountError && 'Please Enter an Amount'}
                type="text"
                variant="filled"
                name="amount"
                value={addAmount}
                onChange={(e) => {
                  setAddAmount(e.target.value.replace(/\D/g, ''));
                }}
                size="small"
                placeholder="Enter Amount"
              />
              <div className="d-flex justify-content-between mt-4 pt-2">
                <div className="me-1">
                  <Button
                    type="submit"
                    className="modal_btn cancel_btn text-capitalize"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    cancel
                  </Button>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="modal_btn ok_btn text-capitalize"
                    onClick={handleAddMoney}
                  >
                    add
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default UserList;
