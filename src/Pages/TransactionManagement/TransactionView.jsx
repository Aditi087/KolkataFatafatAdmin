import React, { useEffect, useState } from 'react';
import TableList from '../../CommonComponents/table/TableList';
import {
  Transaction,
  creditFilter,
  gameFilter,
} from '../../CommonComponents/pageComponents/PageConstants';
import TableTop from '../../CommonComponents/table/TableTop';
import { RiShareForwardLine } from 'react-icons/ri';
import { SwitchButtonComponent } from '../../CommonComponents/pageComponents/PageComponents';
import { Navigate, useNavigate } from 'react-router-dom';

function TransactionView() {
  useEffect(() => {
    localStorage.setItem('om1', 'Transaction Management');
    localStorage.setItem('om2', 'View Transaction');
    localStorage.removeItem('om3');
  }, []);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');
  const [gameName, setGameName] = useState('');
  const [credit, setCredit] = useState('');
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
    {
      data: creditFilter?.map((e) => {
        return {
          title: e?.name,
          value: e?.value,
        };
      }),
      label: 'All Type',
      onchange: (e) => {
        setCredit(e.target.value);
      },
      value: credit,
    },
  ];
  const columns = [
    {
      name: 'Player Name',
      selector: (row) => (row?.player_name ? row?.player_name : '--'),
      sortable: true,
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
                color: '#cd0c86',
              }}
            >
              <span>{row?.amount ? row?.amount : '--'}</span>
            </b>
          </div>,
        ];
      },
    },
    {
      name: 'Bet For',
      selector: (row) => (row?.bet_for ? row?.bet_for : '--'),
      sortable: true,
      center: true,
    },

    {
      name: 'Game',
      selector: (row) => (row?.game ? row?.game : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Transaction Type',
      selector: (row) => (row?.tr_type ? row?.tr_type : '--'),
      sortable: true,
      center: true,
      cell: (row, index) => {
        return [
          <b>
            <span className={row?.tr_type === 'Credit' ? 'type_cr' : 'type_dr'}>
              {row?.tr_type ? row?.tr_type : '--'}
            </span>
          </b>,
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
              onClick={(e) => navigate('/transaction-details')}
              className="actionTableRow-btn actionButton onhover"
            >
              <RiShareForwardLine
                className="m-auto"
                style={{ fontSize: '16px', color: '#252563' }}
              />
            </button>
            <div className="hide">View Details</div>
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
    let newData = Transaction.filter(
      (v) =>
        (v?.player_name &&
          v?.player_name
            .toString()
            .toLowerCase()
            .includes(searchItem.toString().toLowerCase()) &&
          v?.game &&
          v?.game.toLowerCase().includes(gameName.toLowerCase()) &&
          v?.tr_type &&
          v?.tr_type.toLowerCase().includes(credit.toLowerCase())) ||
        (v?.type &&
          v?.type.toLowerCase().includes(searchItem.toLowerCase()) &&
          v?.game &&
          v?.game.toLowerCase().includes(gameName.toLowerCase()) &&
          v?.tr_type &&
          v?.tr_type.toLowerCase().includes(credit.toLowerCase()))
    );
    return newData;
  };
  const refreshClick = () => {
    setCredit('');
    setGameName('');
    setSearchItem('');
  };
  return (
    <div className="Main_body">
      <TableList
        tableTitle="Game Transaction"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        search={Transaction.length > 0}
        searchValue={searchItem}
        searchOnchange={(e) => {
          setSearchItem(e.target.value);
        }}
        searchPlaceholder="Search by name or type"
        refreshClick={refreshClick}
        filters
        dropdownData={dropdownData}
      />
    </div>
  );
}

export default TransactionView;
