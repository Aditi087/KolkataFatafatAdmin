import React, { useEffect, useState } from 'react';
import {
  ButtonComponent,
  Heading,
  ImagePicker,
  SwitchButtonComponent,
} from '../../CommonComponents/pageComponents/PageComponents';
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Label } from '../../CommonComponents/pageComponents/PageComponents';
import {
  MdPhone,
  MdEmail,
  MdVisibilityOff,
  MdVisibility,
} from 'react-icons/md';
// import { createAdmin } from '../../redux/slice/AdminSlice';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AdminListView } from '../../CommonComponents/pageComponents/PageConstants';

const CreateAdmin = () => {
  useEffect(() => {
    localStorage.setItem('om1', 'Administration Management');
    localStorage.setItem('om2', 'Create Admin');
    localStorage.removeItem('om3');
  }, []);

  const validateEmail = RegExp(
    //eslint-disable-next-line
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  // const validPassword = RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,20}$/);
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [error, setError] = useState({});
  const [role, setRole] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [confirm, setConfirm] = useState(true);
  const [status, setStatus] = useState(0);
  const [inputState, setInputState] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    kyc: '',
    upi: '',
    password: '',
    // role: 'Admin',
  });
  // const { status, role_data } = useSelector((state) => state.role);
  // useEffect(() => {
  //   dispatch(getRole());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleRoleChange = (e) => {
    setRole(e?.target?.value);
  };

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
    // value = event.target.value;
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
      name: inputState.name,
      role: role,
      phone: inputState.phone,
      email: inputState.email,
      image: image,
      address: inputState.address,
      kyc: inputState.kyc,
      upi: inputState.upi,
      password: inputState.password,
      status: status,
    };
    // console.log(data);
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      AdminListView.push(data);
      swal({
        title: 'Admin Registration Successful',
        text: 'Check it in the Admin List',
        icon: 'success',
        button: 'OK',
      });
      navigate('/admin-list');

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
      <Heading title="Create Admin" />
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
              <Label label="Role" mandatory />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <FormControl
                variant="filled"
                fullWidth
                sx={{ m: 1, minWidth: 120 }}
                size="small"
              >
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  // value={age}
                  onChange={handleRoleChange}
                  defaultValue="admin"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Name" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Email" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Phone" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Photo" />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
              <ImagePicker image={image} setImage={setImage} />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Address" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="PAN / Aadhar" />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="UPI" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Create Password" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Confirm Password" mandatory />
            </Grid>
            <Grid item xs={12} md={7} lg={7} className="my-auto">
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

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={12} md={5} lg={5} className="my-auto input_title">
              <Label label="Status" />
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              lg={7}
              className="my-auto ps-5 d-flex align-content-start"
            >
              <SwitchButtonComponent
                value={status}
                onChange={statusChange}
                label
                label1="Inactive"
                label2="Active"
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={7}
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

export default CreateAdmin;
