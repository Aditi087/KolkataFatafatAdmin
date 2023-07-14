import React, { useEffect, useState } from 'react';
import TableList from '../../CommonComponents/table/TableList';
import {
  ContestList,
  gameFilter,
} from '../../CommonComponents/pageComponents/PageConstants';
import { RiShareForwardLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { BiDetail } from 'react-icons/bi';
import { time } from '../../CommonComponents/pageComponents/PageComponents';

function ContestHistory() {
  useEffect(() => {
    localStorage.setItem('om1', 'Contest Management');
    localStorage.setItem('om2', 'Contest History');
    localStorage.removeItem('om3');
  }, []);
  const navigate = useNavigate();
  const [calenderValue, setCalenderValue] = useState(new Date());
  // const [searchItem, setSearchItem] = useState('');
  const [gameName, setGameName] = useState('');
  const dropdownData = [
    {
      data: gameFilter?.map((e) => {
        return {
          title: e?.name,
          value: e?.value,
        };
      }),
      label: 'All Game',
      onchange: (e) => {
        setGameName(e.target.value);
      },
      value: gameName,
    },
  ];

  const columns = [
    {
      name: 'Game Name',
      selector: (row) => (row?.game ? row?.game : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Date & Time',
      selector: (row) => (row?.time ? time(row?.time) : '--'),
      sortable: true,
      center: true,
      cell: (row, index) => {
        return [
          <div className="d-flex flex-column">
            {/* <span className="my-auto" style={{ color: '#252563' }}>
              {row?.date ? row?.date : '--'}
            </span> */}
            <b
              className="my-auto"
              style={{
                backgroundColor: '#ddd207',
                color: 'gray',
                borderRadius: '2px',
                padding: '3px 20px',
              }}
            >
              <span>{row?.time ? time(row?.time) : '--'}</span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Winning Digit',
      selector: (row) => (row?.winning_dig ? row?.winning_dig : '--'),
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: 'Winning Patti',
      selector: (row) => (row?.Patti ? row?.Patti : '--'),
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: 'Total Winning Amount (INR)',
      selector: (row) =>
        row?.total_winning_amount ? parseInt(row?.total_winning_amount) : '--',
      sortable: true,
      left: true,
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
              <span>
                {row?.total_winning_amount ? row?.total_winning_amount : '--'}
              </span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Highest Bid',
      selector: (row) => (row?.heighest_bet ? row?.heighest_bet : '--'),
      sortable: true,
      center: true,
      cell: (row, index) => {
        return [
          <div className="d-flex">
            <span className="my-auto" style={{ color: '#252563' }}>
              Rs.
            </span>
            <b
              className="my-auto px-3"
              style={{
                color: '#cd0cc0',
              }}
            >
              <span>{row?.heighest_bet ? row?.heighest_bet : '--'}</span>
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
              onClick={(e) => navigate('/contest-details')}
              className="actionTableRow-btn actionButton onhover"
            >
              <RiShareForwardLine
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">Contest Details</div>
          </div>,
          <div>
            <button
              // onClick={(e) => navigate(`/edit-category/${data?.id}`)}
              onClick={(e) => navigate('/bid-details')}
              className="actionTableRow-btn actionButton onhover"
            >
              <BiDetail
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">Bidding Details</div>
          </div>,
        ];
      },
      button: true,
    },
  ];

  const searchFn = () => {
    let newData = ContestList.filter(
      (v) =>
        // v?.date &&
        // v?.date
        //   .toString()
        //   .toLowerCase()
        //   .includes(searchItem.toString().toLowerCase()) &&
        v?.game && v?.game.toLowerCase().includes(gameName.toLowerCase())
    );
    return newData;
  };
  const refreshClick = () => {
    setGameName('');
    // setSearchItem('');
  };
  return (
    <div className="Main_body">
      <TableList
        tableTitle="Contest History"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        // search={ContestList.length > 0}
        // searchValue={searchItem}
        // searchOnchange={(e) => {
        //   setSearchItem(e.target.value);
        // }}
        // searchPlaceholder="Search by name or type"
        refreshClick={refreshClick}
        filters
        dropdownData={dropdownData}
        calender
        calenderValue={calenderValue}
        setCalenderValue={setCalenderValue}
        calenderChange={(e) => {
          setCalenderValue(e);
        }}
      />
    </div>
  );
}

export default ContestHistory;
