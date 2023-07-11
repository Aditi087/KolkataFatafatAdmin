import React, { useEffect, useState } from 'react';
import TableList from '../../CommonComponents/table/TableList';
import {
  ContestList,
  Transaction,
  gameFilter,
  typeFilter,
} from '../../CommonComponents/pageComponents/PageConstants';
import TableTop from '../../CommonComponents/table/TableTop';
import { RiShareForwardLine } from 'react-icons/ri';
import { SwitchButtonComponent } from '../../CommonComponents/pageComponents/PageComponents';
import { Navigate, useNavigate } from 'react-router-dom';

function ContestTransactionDetails() {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');
  const [gameName, setGameName] = useState('');
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
        setGameName(e.target.value);
      },
      value: gameName,
    },
  ];
  const columns = [
    {
      name: 'Player Name',
      selector: (row) => (row?.name ? row?.name : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Player ID',
      selector: (row) => (row?.user_id ? row?.user_id : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Amount (INR)',
      selector: (row) => (row?.amount ? parseInt(row?.amount) : '--'),
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
              <span>{row?.amount ? row?.amount : '--'}</span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Transaction ID',
      selector: (row) => (row?.transaction_id ? row?.transaction_id : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Time',
      selector: (row) => (row?.time ? row?.time : '--'),
      sortable: true,
      center: true,
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
              onClick={(e) => navigate('/update-user')}
              className="actionTableRow-btn actionButton onhover"
            >
              <RiShareForwardLine
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">User Details</div>
          </div>,
          // <div>
          //   <button
          //     onClick={() => {}}
          //     className="actionTableRow-btn actionButton onhover"
          //   >
          //     <MdDelete />
          //   </button>
          //   <div className="hide">Delete Winning type</div>
          // </div>,
        ];
      },
      button: true,
    },
  ];

  const searchFn = () => {
    let newData = ContestList[0].bet_details[0].players.filter(
      (v) =>
        (v?.name && v?.name.toLowerCase().includes(searchItem.toLowerCase())) ||
        (v?.transaction_id &&
          v?.transaction_id.toLowerCase().includes(searchItem.toLowerCase())) ||
        (v?.user_id &&
          v?.user_id.toLowerCase().includes(searchItem.toLowerCase()))
    );
    return newData;
  };
  const refreshClick = () => {
    setGameName('');
    setSearchItem('');
  };
  return (
    <div className="Main_body">
      <TableList
        tableTitle="Bet Details"
        headtext="Bet For : 1  contest_id: 6346"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        // search={ContestList.length > 0}
        search
        searchValue={searchItem}
        searchOnchange={(e) => {
          setSearchItem(e.target.value);
        }}
        searchPlaceholder="Search by patti or digit"
        refreshClick={refreshClick}
      />
    </div>
  );
}

export default ContestTransactionDetails;
