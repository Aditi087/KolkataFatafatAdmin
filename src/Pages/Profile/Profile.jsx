import React, { useState } from 'react';
import {
  ButtonComponent,
  ProfileImagePicker,
} from '../../CommonComponents/pageComponents/PageComponents';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Label } from '../../CommonComponents/pageComponents/PageComponents';
import {
  MdPhone,
  MdEmail,
  MdVisibilityOff,
  MdVisibility,
} from 'react-icons/md';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './profile.css';
import { FiEdit } from 'react-icons/fi';

const Profile = () => {
  // useEffect(() => {
  //   localStorage.setItem('om1', 'Administration Management');
  //   localStorage.setItem('om2', 'View Admin');
  //   localStorage.removeItem('om3');
  // }, []);

  const validateEmail = RegExp(
    //eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState({});
  // const [role, setRole] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [confirm, setConfirm] = useState(true);
  const [inputState, setInputState] = useState({
    name: 'John Doe',
    phone: '9879543126',
    email: 'admin@gmail.com',
    address: 'Salt Lake, Kolkata - 700001',
    kyc: '',
    upi: 'admin@paytm',
    password: '12345678',
    role: 'Admin',
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
    // if (!roleIndex) {
    //   error.role_slug = 'Please Select any';
    // }
    if (!inputState.email) {
      error.email = 'Email is required';
    } else if (!validateEmail.test(inputState.email)) {
      error.email = 'Invalid Email';
    }

    if (!inputState.phone) {
      error.phone = 'Phone number is required';
    } else if (!validPhone.test(inputState.phone)) {
      error.phone = 'Please Enter Valid phone number';
    }
    if (!inputState.address) {
      error.address = 'Address is required';
    } else if (inputState.address.length < 10) {
      error.address = 'At least 10 characters';
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
    // if (!inputState.role) {
    //     error.role = 'Email is required';
    // }

    return error;
  };
  let name, value;
  const handleChange = (event) => {
    event.persist();
    name = event.target.name;
    if (name === 'phone' || name === 'kyc') {
      value = event.target.value.replace(/\D/g, '');
    } else {
      value = event.target.value;
    }
    setInputState({ ...inputState, [name]: value });
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
    // let data = {
    //   name: inputState.name,
    //   phone: inputState.phone,
    //   email: inputState.email,
    //   image: image,
    //   address: inputState.address,
    //   kyc: inputState.kyc,
    //   upi: inputState.upi,
    //   password: inputState.password,
    //   status: status,
    // };
    // console.log(data);
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      swal({
        // title: 'Successfully Profile Updated',
        text: 'Successfully Profile Updated',
        icon: 'success',
        button: 'OK',
      });
      setEdit(false);
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
  return (
    <div className="Main_body">
      <Box className="form_box">
        <div className="d-flex justify-content-between mt-3 mx-4 me-5">
          <div className="d-flex justify-content-center">
            <div className="me-3">
              <ProfileImagePicker
                image={image}
                setImage={setImage}
                disabled={!edit}
              />
            </div>

            <div className="my-auto d-flex flex-column">
              <span id="pr_name">John Doe</span>
              <span id="pr_role">Admin</span>
            </div>
          </div>
          <div className="my-auto">
            <button
              className="ghost_btn onhover d-flex"
              onClick={() => {
                setEdit(!edit);
              }}
            >
              <FiEdit
                className="my-auto"
                style={{ fontSize: '18px', color: '#252563' }}
              />
            </button>
            <div className="hide bg-dark text-white">
              {edit ? 'disable edit' : 'edit profile'}
            </div>
          </div>
        </div>
        <Box
          component="form"
          sx={{
            padding: '2rem 0',
            width: '90%',
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Email" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.email}
                id="filled-size-small"
                helperText={error.email}
                variant="filled"
                type="email"
                name="email"
                value={inputState.email}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdEmail />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Email ID"
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
              <Label label="Address" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={error.address}
                id="filled-size-small"
                helperText={error.address}
                variant="filled"
                type="text"
                name="address"
                value={inputState.address}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                multiline
                maxRows={3}
                placeholder="Enter Address Details (Max 3 lines)"
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="PAN / Aadhar" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                // error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="kyc"
                value={inputState.kyc}
                onChange={handleChange}
                size="small"
                style={{ width: '100%' }}
                placeholder="Enter PAN or Aadhar number"
                disabled={!edit}
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
                disabled={!edit}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label={edit ? 'New Password' : 'Password'} mandatory />
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

          {edit && (
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
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  placeholder="Re-enter password"
                  disabled={!edit}
                />
              </Grid>
            </Grid>
          )}

          {edit && (
            <Grid
              item
              xs={7}
              className="d-flex justify-content-end"
              // style={{ paddingLeft: '3rem' }}
            >
              <ButtonComponent text="Update" submit={handleSubmit} />
            </Grid>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
