import React, { useEffect, useState } from 'react';
import {
  ButtonComponent,
  Heading,
  ImagePicker,
} from '../../CommonComponents/pageComponents/PageComponents';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Label } from '../../CommonComponents/pageComponents/PageComponents';
import { MdPhone, MdVisibilityOff, MdVisibility } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserListView } from '../../CommonComponents/pageComponents/PageConstants';
import swal from 'sweetalert';
import { createUser } from '../../redux/slice/UserSlice';

const CreateUser = () => {
  useEffect(() => {
    localStorage.setItem('om1', 'User Management');
    localStorage.setItem('om2', 'Create User');
    localStorage.removeItem('om3');
  }, []);

  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [cPassword, setCPassword] = useState('');
  const [confirm, setConfirm] = useState(true);
  // const [status, setStatus] = useState(0);
  const [inputState, setInputState] = useState({
    name: '',
    phone: '',
    upi: '',
    password: '',
  });
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
    // if (!inputState.upi) {
    //   error.upi = 'Please Enter UPI ID';
    // }
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

  // const statusChange = (e) => {
  //   if (e.target.checked) {
  //     setStatus(1);
  //   } else {
  //     setStatus(0);
  //   }
  // };

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
      name: inputState.name,
      phone: inputState.phone,
      upi: inputState.upi,
      password: inputState.password,
      // status: status,
    };
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      console.log(data);
      // UserListView.push(data);
      // swal({
      //   title: 'User Registration Successful',
      //   text: 'Check it in the User List',
      //   icon: 'success',
      //   button: 'OK',
      // });

      dispatch(createUser({ data })).then(() => {
        navigate('/user-list');
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="Main_body">
      <Heading title="Create User" />
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
              />
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
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={7}
            className="d-flex justify-content-end"
            // style={{ paddingLeft: '3rem' }}
          >
            <ButtonComponent text="submit" submit={handleSubmit} />
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default CreateUser;
