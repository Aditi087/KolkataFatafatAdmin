import React, { useEffect, useState } from 'react';
import TableList from '../../CommonComponents/table/TableList';
import {
  Transaction,
  Wallet,
  creditFilter,
  gameFilter,
  walletFilterData,
} from '../../CommonComponents/pageComponents/PageConstants';
import TableTop from '../../CommonComponents/table/TableTop';
import { RiShareForwardLine } from 'react-icons/ri';
import { SwitchButtonComponent } from '../../CommonComponents/pageComponents/PageComponents';
import { Navigate, useNavigate } from 'react-router-dom';

function WalletRequest() {
  useEffect(() => {
    localStorage.setItem('om1', 'Transaction Management');
    localStorage.setItem('om2', 'Wallet Request');
    localStorage.removeItem('om3');
  }, []);
  const navigate = useNavigate();
  const [calenderValue, setCalenderValue] = useState(new Date());
  const [searchItem, setSearchItem] = useState('');
  const [credit, setCredit] = useState('');
  const dropdownData = [
    {
      data: walletFilterData?.map((e) => {
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
      name: 'Player ID',
      selector: (row) => (row?.player_id ? row?.player_id : '--'),
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
      name: 'Transaction ID',
      selector: (row) => (row?.transaction_id ? row?.transaction_id : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Request For',
      selector: (row) => (row?.request_for ? row?.request_for : '--'),
      sortable: true,
      center: true,
      cell: (row, index) => {
        return [
          <b>
            <span
              className={
                row?.request_for === 'Add Money' ? 'type_cr' : 'type_dr'
              }
            >
              {row?.request_for ? row?.request_for : '--'}
            </span>
          </b>,
        ];
      },
    },

    {
      name: 'Time',
      selector: (row) => (row?.date ? row?.date : '--'),
      sortable: true,
      center: true,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      width: '12rem',
      center: true,
      cell: (data, index) => {
        return [
          <div>
            <SwitchButtonComponent
              value={data.status}
              label
              label1="Pending"
              label2="Approved"
            />
          </div>,
        ];
      },
      button: true,
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
              onClick={(e) => navigate('/wallet-request-details')}
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
    let newData = Wallet.filter(
      (v) =>
        (v?.player_name &&
          v?.player_name
            .toString()
            .toLowerCase()
            .includes(searchItem.toString().toLowerCase()) &&
          v?.request_for &&
          v?.request_for.toLowerCase().includes(credit.toLowerCase())) ||
        (v?.transaction_id &&
          v?.transaction_id
            .toString()
            .toLowerCase()
            .includes(searchItem.toLowerCase()) &&
          v?.request_for &&
          v?.request_for.toLowerCase().includes(credit.toLowerCase())) ||
        (v?.amount &&
          v?.amount.toLowerCase().includes(searchItem.toLowerCase()) &&
          v?.request_for &&
          v?.request_for.toLowerCase().includes(credit.toLowerCase()))
    );
    return newData;
  };
  const refreshClick = () => {
    setCredit('');
    setSearchItem('');
  };
  return (
    <div className="Main_body">
      <TableList
        tableTitle="Wallet request"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        search={Wallet.length > 0}
        searchValue={searchItem}
        searchOnchange={(e) => {
          setSearchItem(e.target.value);
        }}
        searchPlaceholder="Search by name or transaction id or amount"
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

export default WalletRequest;
