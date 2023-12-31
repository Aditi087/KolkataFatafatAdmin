import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { liveFunction, time } from '../pageComponents/PageComponents';

const ResultTable = ({ tableName, GameResult }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#2B2B4D',
      color: theme.palette.common.white,
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingLeft: '10px',
      paddingRight: '10px',
      fontSize: 12,
      // textAlign: 'center',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
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

  return (
    <div>
      <Table
        sx={{ maxHeight: '72vh', height: 'fit-content' }}
        stickyHeader
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" colSpan={3}>
              {tableName}
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell>Today's</StyledTableCell>
            <StyledTableCell align="center">Single Digit</StyledTableCell>
            <StyledTableCell align="right">Patti</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {GameResult.map((row, index) => (
            <StyledTableRow
              key={index}
              className={
                liveFunction(index, GameResult) === 'live' && 'live_row'
              }
            >
              <StyledTableCell
                component="th"
                scope="row"
                className={
                  liveFunction(index, GameResult) === 'live' && 'live_row'
                }
                align="left"
              >
                {time(row.resultTime)}
              </StyledTableCell>
              <StyledTableCell
                align="center"
                colSpan={liveFunction(index, GameResult) !== 'finished' && 2}
              >
                {/* {row.status === 'upcoming'
                  ? 'Upcoming..'
                  : row.status === 'live'
                  ? 'Live'
                  : row.single_dig} */}
                {/* {row.single_dig
                  ? row.single_dig
                  : liveFunction(index, row.single_dig)} */}
                {liveFunction(index, GameResult) !== 'finished'
                  ? liveFunction(index, GameResult)
                  : row.single_dig}
              </StyledTableCell>
              {liveFunction(index, GameResult) === 'finished' && (
                <StyledTableCell align="right">{row.Patti}</StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultTable;
