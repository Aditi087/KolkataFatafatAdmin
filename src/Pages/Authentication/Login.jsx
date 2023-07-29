import React, { useState } from 'react';
import './auth.css';
import {
  Box,
  // FormControl,
  Grid,
  IconButton,
  // Input,
  InputAdornment,
  // InputLabel,
  TextField,
} from '@mui/material';
import { MdPhone, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {
  ButtonComponent,
  // Label,
} from '../../CommonComponents/pageComponents/PageComponents';
import { logo } from '../../CommonComponents/pageComponents/PageConstants';
import { toast } from 'react-toastify';
import { adminLogin } from '../../redux/slice/AuthenticationSlice';

const Login = () => {
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [inputState, setInputState] = useState({
    phone: '',
    password: '',
  });

  const validation = () => {
    let error = {};

    if (!inputState.phone) {
      error.phone = 'Phone number is required';
    } else if (!validPhone.test(inputState.phone)) {
      error.phone = 'Please Enter Valid phone number';
    }

    if (!inputState.password) {
      error.password = 'Enter password';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      phone: inputState.phone,
      password: inputState.password,
    };
    // console.log(data);
    let ErrorList = validation();
    setError(validation());
    if (Object.keys(ErrorList).length === 0) {
      if (data.phone === '9876543210' && data.password === '123456') {
        localStorage.setItem('token', 'token');
        swal({
          title: 'Login Successfull',
          // text: 'Check it in the User List',
          icon: 'success',
          button: 'OK',
        });
        navigate('/dashboard');
      } else {
        toast.error('wrong phone or password');
      }

      // dispatch(adminLogin({ data })).then(() => {
      //   swal({
      //     title: 'Login Successfull',
      //     // text: 'Check it in the User List',
      //     icon: 'success',
      //     button: 'OK',
      //   });
      // navigate('/dashboard');
      // });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="d-flex flex-column log_body p-5">
      <Box className="form_box log_box m-auto">
        <Box
          component="form"
          sx={{
            padding: '2rem',
            width: '100%',
            '& .MuiTextField-root': { m: 1 },
            margin: 'auto',
          }}
          noValidate
          autoComplete="off"
        >
          <div className="d-flex flex-column">
            <img src={logo} alt="" className="log_logo mx-auto" />
            <div className="log_head mx-auto">Log in</div>
          </div>
          <Grid className="fields2" container spacing={4}>
            <Grid item xs={12} className="my-auto">
              <TextField
                label="Phone"
                error={error.phone}
                id="input-with-icon-textfield"
                helperText={error.phone}
                variant="standard"
                type="text"
                name="phone"
                value={inputState.phone}
                onChange={handleChange}
                // size="small"
                style={{ width: '80%' }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdPhone className="log_icon" />
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Phone Number"
              />
            </Grid>
          </Grid>

          <Grid className="fields2" container spacing={4}>
            <Grid item xs={12} className="my-auto">
              <TextField
                label="Password"
                error={error.password}
                id="input-with-icon-textfield"
                helperText={error.password}
                variant="standard"
                name="password"
                value={inputState.password}
                onChange={handleChange}
                // size="small"
                style={{ width: '80%' }}
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
                          <MdVisibilityOff className="log_icon" />
                        ) : (
                          <MdVisibility className="log_icon" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter Your Password"
              />
            </Grid>
          </Grid>

          <Grid item xs={12} className="d-flex justify-content-center mt-4">
            <ButtonComponent text="submit" submit={handleSubmit} />
          </Grid>
        </Box>
        <span className="log_bottom_line">
          Go to <Link to={'/'}>Homepage</Link>
        </span>
      </Box>
    </div>
  );
};

export default Login;
