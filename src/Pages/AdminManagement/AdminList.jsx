import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TableList from '../../CommonComponents/table/TableList';
import {
  AdminListView,
  roleFilter,
  statusFilter,
} from '../../CommonComponents/pageComponents/PageConstants';
import { SwitchButtonComponent } from '../../CommonComponents/pageComponents/PageComponents';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdAddCard } from 'react-icons/md';

function AdminList() {
  useEffect(() => {
    localStorage.setItem('om1', 'Administration Management');
    localStorage.setItem('om2', 'View Admin');
    localStorage.removeItem('om3');
  }, []);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');
  const [role, setRole] = useState('');
  const [statusDropdown, setStatusDropdown] = useState('');

  const dropdownData = [
    {
      data: roleFilter?.map((e) => {
        return {
          title: e?.name,
          value: e?.value,
        };
      }),
      label: 'All',
      onchange: (e) => {
        setRole(e.target.value);
      },
      value: role,
    },
    {
      data: statusFilter?.map((e) => {
        return {
          title: e?.name,
          value: e?.value,
        };
      }),
      label: 'All',
      onchange: (e) => {
        setStatusDropdown(e.target.value);
      },
      value: statusDropdown,
    },
  ];
  const columns = [
    {
      name: 'Name',
      selector: (row) => (row?.name ? row?.name : '--'),
      sortable: true,
    },
    {
      name: 'Role',
      selector: (row) => (row?.role ? row?.role : '--'),
      sortable: true,
    },
    {
      name: 'Player ID',
      selector: (row) => (row?.user_id ? row?.user_id : '--'),
      sortable: true,
      compact: true,
    },
    {
      name: 'Email',
      selector: (row) => (row?.email ? row?.email : '--'),
      center: true,
    },
    {
      name: 'Phone',
      selector: (row) => (row?.phone ? row?.phone : '--'),
      center: true,
    },

    {
      name: 'UPI',
      selector: (row) => (row?.upi ? row?.upi : '--'),
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
              label1="Inactive"
              label2="Active"
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
              onClick={(e) => navigate('/update-admin')}
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
    let newData = AdminListView.filter(
      (v) =>
        (v?.name &&
          v?.name.toLowerCase().includes(searchItem.toString().toLowerCase()) &&
          v?.role &&
          v?.role.toLowerCase().includes(role.toLowerCase()) &&
          v?.status &&
          v?.status
            .toString()
            .toLowerCase()
            .includes(statusDropdown.toLowerCase())) ||
        (v?.phone &&
          v?.phone.toLowerCase().includes(searchItem.toLowerCase()) &&
          v?.role &&
          v?.role.toLowerCase().includes(role.toLowerCase()) &&
          v?.status &&
          v?.status
            .toString()
            .toLowerCase()
            .includes(statusDropdown.toLowerCase())) ||
        (v?.upi &&
          v?.upi.toLowerCase().includes(searchItem.toLowerCase()) &&
          v?.role &&
          v?.role.toLowerCase().includes(role.toLowerCase()) &&
          v?.status &&
          v?.status
            .toString()
            .toLowerCase()
            .includes(statusDropdown.toLowerCase()))
    );
    return newData;
  };
  const refreshClick = () => {
    setSearchItem('');
    setRole('');
    setStatusDropdown(null);
  };
  return (
    <div className="Main_body">
      <TableList
        tableTitle="Admin List"
        columns={columns}
        data={searchFn()}
        showPagination
        utilities
        search={AdminListView.length > 0}
        searchValue={searchItem}
        searchOnchange={(e) => {
          setSearchItem(e.target.value);
        }}
        searchPlaceholder="Search by name or phone or upi"
        filters
        dropdownData={dropdownData}
        efreshClick={refreshClick}
      />
    </div>
  );
}

export default AdminList;
