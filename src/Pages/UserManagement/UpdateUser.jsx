import React, { useState } from 'react';
import {
  ButtonComponent,
  Heading,
  ImagePicker,
  SwitchButtonComponent,
} from '../../CommonComponents/pageComponents/PageComponents';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from '@mui/material';
import { Label } from '../../CommonComponents/pageComponents/PageComponents';
import { MdPhone, MdVisibilityOff, MdVisibility } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { UserListView } from '../../CommonComponents/pageComponents/PageConstants';
import { IoMdWallet } from 'react-icons/io';

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

const UpdateUser = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#8d0537a4',
      color: theme.palette.common.white,
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: 14,
      // textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
  }));

  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState({});
  const [cPassword, setCPassword] = useState('');
  const [confirm, setConfirm] = useState(true);
  const [status, setStatus] = useState(0);
  const [inputState, setInputState] = useState({
    name: '',
    phone: '',
    upi: '',
    password: '',
  });

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [addAmount, setAddAmount] = useState('');
  const [amountError, setAmountError] = useState(false);
  // const { status, role_data } = useSelector((state) => state.role);
  // useEffect(() => {
  //   dispatch(getRole());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const validation = () => {
    let error = {};
    if (!inputState.name) {
      error.name = 'Please Enter Name';
    } else if (inputState.name.length < 3) {
      error.name = 'At least 3 characters';
    } else if (/\d/.test(inputState.name)) {
      error.name = 'Please enter a valid Name';
    }

    if (!inputState.phone) {
      error.phone = 'Phone number is required';
    } else if (!validPhone.test(inputState.phone)) {
      error.phone = 'Please Enter Valid phone number';
    }
    if (!inputState.upi) {
      error.upi = 'Please Enter UPI ID';
    }
    if (!inputState.password) {
      error.password = 'Enter password';
      // } else if (!validPassword.test(inputState.password)) {
      //     error.password = 'atleast 1 uppercase 1 lowercase and 1 number minimum 8 characters';
    }
    if (!cPassword) {
      error.cPassword = 'Confirm password';
    } else if (inputState.password !== cPassword) {
      error.cPassword = 'Confirm password does not match';
    }

    return error;
  };
  let name, value;
  const handleChange = (event) => {
    event.persist();
    name = event.target.name;
    if (name === 'phone') {
      value = event.target.value.replace(/\D/g, '');
    } else {
      value = event.target.value;
    }
    setInputState({ ...inputState, [name]: value });
  };

  const statusChange = (e) => {
    if (e.target.checked) {
      setStatus(1);
    } else {
      setStatus(0);
    }
  };

  const handleConfirmPassword = (e) => {
    setCPassword(e.target.value);
    if (e.target.value === inputState.password) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      player_name: inputState.name,
      phone: inputState.phone,
      image: image,
      upi: inputState.upi,
      password: inputState.password,
      status: status,
    };
    console.log(data);
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      UserListView.push(data);
      swal({
        title: 'User Registration Successful',
        text: 'Check it in the User List',
        icon: 'success',
        button: 'OK',
      });
      navigate('/user-list');
      // dispatch(createAdmin({ data })).then(() => {
      //   navigate('/');
      // });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleAddMoney = (event) => {
    event.preventDefault();

    if (addAmount) {
      setAmountError(false);
      let data = {
        id: 1,
        amount: addAmount,
      };
      console.log(data);
      swal('Money Successfully added');
      setAddAmount('');
    } else {
      setAmountError(true);
    }
  };
  return (
    <div className="Main_body">
      <Heading
        title={edit ? 'Update User' : 'User Details'}
        edit
        onClick={() => {
          setEdit(!edit);
        }}
        hideText={edit ? 'Disable Edit' : 'Edit Details'}
      />
      <Box className="form_box">
        <Box
          component="form"
          sx={{
            padding: '2rem',
            width: '80%',
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Name" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.name}
                id="filled-size-small"
                helperText={error.name}
                variant="filled"
                type="text"
                name="name"
                value={inputState.name}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                placeholder="Enter Name"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Phone" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.phone}
                id="filled-size-small"
                helperText={error.phone}
                variant="filled"
                type="text"
                name="phone"
                value={inputState.phone}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdPhone />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Phone Number"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Photo" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <ImagePicker image={image} setImage={setImage} disabled={!edit} />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="UPI" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.upi}
                id="filled-size-small"
                helperText={error.upi}
                variant="filled"
                type="text"
                name="upi"
                value={inputState.upi}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                placeholder="Enter UPI ID"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Create Password" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.password}
                id="filled-size-small"
                helperText={error.password}
                variant="filled"
                name="password"
                value={inputState.password}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Confirm Password" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.cPassword || !confirm}
                id="filled-size-small"
                helperText={error.cPassword}
                variant="filled"
                // name="name"
                value={cPassword}
                onChange={handleConfirmPassword}
                size="small"
                style={{ width: '100%' }}
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Re-enter password"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Status" />
            </Grid>
            <Grid
              item
              xs={7}
              className="my-auto ps-5 d-flex align-content-start"
            >
              <SwitchButtonComponent
                value={status}
                onChange={statusChange}
                label
                label1="Inactive"
                label2="Active"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          {edit && (
            <Grid
              item
              xs={7}
              className="d-flex justify-content-end"
              // style={{ paddingLeft: '3rem' }}
            >
              <ButtonComponent text="update" submit={handleSubmit} />
            </Grid>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          padding: '2rem',
          width: '92%',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            textAlign: 'left',
            color: '#252563',
            letterSpacing: '1px',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          Player's Game Info
        </p>
        <Table
          sx={{ maxHeight: '72vh', height: 'fit-content' }}
          stickyHeader
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Match Played</StyledTableCell>
              <StyledTableCell align="center">Won Game</StyledTableCell>
              <StyledTableCell align="center">
                Total Winning Amount
              </StyledTableCell>
              <StyledTableCell align="center">Last Login</StyledTableCell>
              <StyledTableCell align="right">Wallet Balance</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {UserListView.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="left">
                  {row.match_played}
                </StyledTableCell>
                <StyledTableCell align="center">{row.win_game}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.total_winning_amount}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.last_login}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className="d-flex justify-content-end">
                    <button
                      className="ghost_btn wallet_btn"
                      onClick={() => setOpen(true)}
                    >
                      <IoMdWallet className="my-auto me-1" />
                      <span className="my-auto">{row.wallet_balance}</span>
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
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
            <div className="d-flex justify-content-between  p-2">
              <Button
                type="submit"
                className="modal_btn recharge_btn text-capitalize me-2"
                onClick={() => {
                  setOpen(false);
                  setOpen2(true);
                }}
              >
                Recharge Wallet
              </Button>
              <Button
                type="submit"
                className="modal_btn ok_btn text-capitalize"
                onClick={() => {
                  navigate('/contest-bid-transaction');
                }}
              >
                Wallet Details
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        onClose={() => {
          setOpen2(false);
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
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
                      setOpen2(false);
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
};

export default UpdateUser;
