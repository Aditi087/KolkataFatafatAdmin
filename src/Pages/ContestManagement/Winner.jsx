import React, { useEffect, useState } from 'react';
import {
  ButtonComponent,
  Heading,
  // HeadingTextComponent,
  // ImagePicker,
  // SwitchButtonComponent,
  TitleComponent,
} from '../../CommonComponents/pageComponents/PageComponents';
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  // IconButton,
  // InputAdornment,
  InputLabel,
  MenuItem,
  // NativeSelect,
  Select,
  TextField,
} from '@mui/material';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {
  ContestList,
  pattiFakeData,
  pattiListFake,
  typeFilter,
} from '../../CommonComponents/pageComponents/PageConstants';
import { toast } from 'react-toastify';
import './style.css';
import TableList from '../../CommonComponents/table/TableList';
import { RiShareForwardLine } from 'react-icons/ri';

const Winner = () => {
  useEffect(() => {
    localStorage.setItem('om1', 'Contest Management');
    localStorage.setItem('om2', 'Winner Declaration');
    localStorage.removeItem('om3');
  }, []);

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');

  const [gameName, setGameName] = useState('');
  const [type, setType] = useState(1);
  const [patti, setPatti] = useState('');
  const [singleDigit, setSingleDigit] = useState('');
  const [pattiList, setPattiList] = useState([]);

  const handleDigitChange = (event) => {
    // event.persist();
    let v = event.target.value;
    // console.log(v);
    setPattiList(pattiFakeData[v - 1]);
    console.log([pattiFakeData[v]]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // let data = {
    //   // name: inputState.name,
    // };
    // console.log(data);

    if (gameName && type && singleDigit && patti) {
      swal({
        title: 'Winner Has Been Declared',
        // text: 'Check it in the Admin List',
        icon: 'success',
        button: 'OK',
      });
      // dispatch(createAdmin({ data })).then(() => {
      //   navigate('/');
      // });
    } else {
      toast.error('Fill all fields');
    }
  };

  const [typeDropdown, setTypeDropdown] = useState('');
  const dropdownData = [
    {
      data: typeFilter?.map((e) => {
        return {
          title: e?.name,
          value: e?.value,
        };
      }),
      label: 'All Type',
      onchange: (e) => {
        setTypeDropdown(e.target.value);
      },
      value: typeDropdown,
    },
  ];

  const columns = [
    {
      name: 'Bet For',
      selector: (row) => (row?.bet_for ? parseInt(row?.bet_for) : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Total Amount (INR)',
      selector: (row) =>
        row?.total_amount ? parseInt(row?.total_amount) : '--',
      sortable: true,
      left: true,
      compact: true,
      cell: (row, index) => {
        return [
          <div className="d-flex">
            <span className="my-auto" style={{ color: '#252563' }}>
              Rs.
            </span>
            <b
              className="my-auto px-3"
              style={{
                color: '#f6173c',
              }}
            >
              <span>{row?.total_amount ? row?.total_amount : '--'}</span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Total Bet',
      selector: (row) => (row?.total_bet ? parseInt(row?.total_bet) : '--'),
      sortable: true,
      center: true,
      compact: true,
      cell: (row, index) => {
        return [
          <div className="d-flex">
            <b
              className="my-auto px-3"
              style={{
                color: '#cd0cc0',
              }}
            >
              <span>{row?.total_bet ? row?.total_bet : '--'}</span>
            </b>
          </div>,
        ];
      },
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
              onClick={(e) => navigate('/contest-bet-transaction')}
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
    let newData = ContestList[0]?.bet_details.filter(
      (v) =>
        v?.bet_for &&
        v?.bet_for
          .toString()
          .toLowerCase()
          .includes(searchItem.toString().toLowerCase()) &&
        v?.type &&
        v?.type.toLowerCase().includes(typeDropdown.toLowerCase())
    );
    return newData;
  };
  const refreshClick = () => {
    setTypeDropdown('');
    setSearchItem('');
  };
  return (
    <div className="Main_body">
      <Heading title="Winner Declaration" />
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6} md={6} className="mx-auto mt-3">
          <Box
            component="form"
            sx={{
              padding: '1rem',
              width: '90%',
              '& .MuiTextField-root': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid className="fields1" container spacing={4}>
              <Grid item xs={12} className="mx-auto mt-0">
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  fullWidth
                  size="small"
                  className="winner_fields"
                >
                  <InputLabel id="demo-select-small-label">
                    Select Game
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    // value={age}
                    label="Select Game"
                    onChange={(e) => {
                      setGameName(e.target.value);
                    }}
                    className="winner_fields"
                  >
                    <MenuItem value={1}>
                      <div className="d-flex flex-column">
                        <span className="game_name">(N) Bengal Fatafat</span>
                        <span className="date_time">22-06-2023 - 11:30PM</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={2}>
                      <div className="d-flex flex-column">
                        <span className="game_name">Kolkata Fatafat</span>
                        <span className="date_time">22-06-2023 - 11:30PM</span>
                      </div>
                    </MenuItem>
                    <MenuItem value={3}>
                      <div className="d-flex flex-column">
                        <span className="game_name">Lucky Mumbai</span>
                        <span className="date_time">22-06-2023 - 12:30PM</span>
                      </div>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid className="fields1" container spacing={4}>
              <Grid item xs={12} className="my-auto">
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  fullWidth
                  size="small"
                >
                  <InputLabel id="demo-select-small-label">
                    Select Type
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    // value={age}
                    label="Select Type"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                    defaultValue={1}
                    className="winner_fields"
                  >
                    <MenuItem value={1}>Patti</MenuItem>
                    <MenuItem value={2}>Single Digit</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {type === 1 ? (
              <Grid className="fields1" container spacing={2}>
                <Grid item xs={6} className="my-auto">
                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                    size="small"
                  >
                    <Autocomplete
                      id="size-small-outlined"
                      size="small"
                      variant="filled"
                      options={pattiListFake}
                      autoHighlight
                      getOptionLabel={(option) => option.patti}
                      renderOption={(props, option) => (
                        <Box component="li" {...props}>
                          <span>{option.patti}</span>
                        </Box>
                      )}
                      onChange={(e, newValue) => {
                        if (newValue) {
                          setPatti(newValue.patti_value);
                          setSingleDigit(newValue.digit_value);
                        } else {
                          setPatti('');
                          setSingleDigit('');
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Patti"
                          className="winner_fields"
                        />
                      )}
                      // disabled={!inputState.sports_type || !contest_match_data}
                    />
                    {/* <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                      className="ps-1"
                    >
                      {error.match_name}
                    </FormHelperText> */}
                  </FormControl>

                  {/* <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">
                      Select Patti
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      // value={age}
                      label="Select Type"
                      onChange={handlePattiChange}
                      className="winner_fields"
                    >
                      <MenuItem value={1}>100</MenuItem>
                      <MenuItem value={1}>777</MenuItem>
                      <MenuItem value={1}>560</MenuItem>
                      <MenuItem value={1}>119</MenuItem>
                      <MenuItem value={1}>399</MenuItem>
                      <MenuItem value={2}>200</MenuItem>
                      <MenuItem value={2}>345</MenuItem>
                      <MenuItem value={2}>660</MenuItem>
                      <MenuItem value={2}>147</MenuItem>
                      <MenuItem value={2}>228</MenuItem>
                    </Select>
                  </FormControl> */}
                </Grid>
                <Grid item xs={6} className="my-auto">
                  <TextField
                    label="Single Digit"
                    id="outlined-size-small"
                    value={singleDigit}
                    size="small"
                    style={{ width: '100%' }}
                    className="winner_fields"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid className="fields1" container spacing={2}>
                <Grid item xs={6} className="my-auto">
                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">
                      Select Single Digit
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      // value={age}
                      label="Select Type"
                      onChange={handleDigitChange}
                      className="winner_fields"
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6} className="my-auto">
                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    fullWidth
                    size="small"
                  >
                    <InputLabel id="demo-select-small-label">
                      Select Patti
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      // value={age}
                      label="Select Patti"
                      onChange={(e) => {
                        setPatti(e.target.value);
                      }}
                      className="winner_fields"
                      disabled={!pattiList}
                    >
                      {pattiList.map((e) => (
                        <MenuItem value={e}>{e}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              className="d-flex justify-content-start"
              // style={{ paddingLeft: '3rem' }}
            >
              <ButtonComponent text="submit" submit={handleSubmit} />
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          md={6}
          className="mx-auto mt-0"
          style={{ borderTop: '5px solid transparent' }}
        >
          <TitleComponent text={'News'} size="17px" />
          <Box
            sx={{
              padding: '2px 6px',
              width: '100%',
              '& .MuiTextField-root': { m: 1 },
            }}
            className="m-auto news_box"
          >
            <TableList
              // tableTitle="Contest News"
              columns={columns}
              data={searchFn()}
              // showPagination
              utilities
              search={ContestList[0]?.bet_details.length > 0}
              searchValue={searchItem}
              searchOnchange={(e) => {
                setSearchItem(e.target.value);
              }}
              searchPlaceholder="Search by card number"
              white
              refreshClick={refreshClick}
              filters
              dropdownData={dropdownData}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Winner;
