import React from 'react';
import { Heading } from '../../CommonComponents/pageComponents/PageComponents';
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import { Label } from '../../CommonComponents/pageComponents/PageComponents';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ContestList } from '../../CommonComponents/pageComponents/PageConstants';
import { RiShareForwardLine } from 'react-icons/ri';

function ContestDetails() {
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

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { status, role_data } = useSelector((state) => state.role);
  // useEffect(() => {
  //   dispatch(getRole());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const time = (time) => {
    var h = time.split(':')[0],
      m = time.split(':')[1];
    var _time =
      h > 12
        ? h - 12 + ':' + m + ' PM'
        : h === 12
        ? h + ':' + m + ' PM'
        : h + ':' + m + ' AM';
    return _time;
  };

  return (
    <div className="Main_body">
      <Heading title="Contest Details" />
      <div className="det_head">
        <h5>{ContestList[0].game}</h5>
        <span>
          ({ContestList[0].date} - {time(ContestList[0].time)})
        </span>
      </div>
      <Box className="">
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
          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Winning Digit" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">
                {ContestList[0].winning_dig}
              </span>
            </Grid>
          </Grid>

          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Winning Patti" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">{ContestList[0].Patti}</span>
            </Grid>
          </Grid>

          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Total Winning Amount" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">
                {ContestList[0].total_winning_amount}
              </span>
            </Grid>
          </Grid>

          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Highest Bid" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">
                {ContestList[0].heighest_bet}
              </span>
            </Grid>
          </Grid>

          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Total Bid" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">
                {ContestList[0].total_bet}
              </span>
            </Grid>
          </Grid>

          <Grid className="field1 my-1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title det_text_title">
              <Label label="Total Player" />
            </Grid>
            <Grid item xs={7} className="my-auto det_text_grid">
              <span className="contest_det_text">
                {ContestList[0].total_player}
              </span>
            </Grid>
          </Grid>
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
          Winners
        </p>
        <Table
          sx={{ maxHeight: '72vh', height: 'fit-content' }}
          stickyHeader
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Player ID</StyledTableCell>
              <StyledTableCell align="center">Won For</StyledTableCell>
              <StyledTableCell align="center">Winning Amount</StyledTableCell>
              <StyledTableCell align="right">User Details</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ContestList[0].winners.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row" align="left">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.player_id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.won_for}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.winning_amount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <div className="d-flex justify-content-end">
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
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </div>
  );
}

export default ContestDetails;
