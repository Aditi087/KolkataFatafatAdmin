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

function ContestDetails() {
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
      name: 'Bet For',
      selector: (row) => (row?.bet_for ? row?.bet_for : '--'),
      sortable: true,
      left: true,
    },
    {
      name: 'Total Bet Amount (INR)',
      selector: (row) =>
        row?.total_amount ? parseInt(row?.total_amount) : '--',
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
              <span>{row?.total_amount ? row?.total_amount : '--'}</span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Total Bet',
      selector: (row) => (row?.total_bet ? row?.total_bet : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Total Player',
      selector: (row) =>
        row?.total_player
          ? row?.total_player
          : Math.floor(Math.random() * 200 + 1),
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
              onClick={(e) => navigate('/contest-bet-transaction')}
              className="actionTableRow-btn actionButton onhover"
            >
              <RiShareForwardLine
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">Bet Transaction Details</div>
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
    let newData = ContestList[0].bet_details.filter(
      (v) =>
        v?.type &&
        v?.type.toLowerCase().includes(gameName.toString().toLowerCase()) &&
        v?.bet_for &&
        v?.bet_for.toLowerCase().includes(searchItem.toLowerCase())
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
        filters
        dropdownData={dropdownData}
      />
    </div>
  );
}

export default ContestDetails;
