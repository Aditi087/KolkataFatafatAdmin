import { useCallback, useState } from 'react';
import DataTable from 'react-data-table-component';
import './table.css';
import {
  DropdownComponent,
  Heading,
  SearchField,
} from '../pageComponents/PageComponents';
import { IoMdRefreshCircle } from 'react-icons/io';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BiCalendar } from 'react-icons/bi';
import { Backdrop, Box, Fade, Modal } from '@mui/material';

const TableList = ({
  tableTitle,
  columns,
  data,
  showPagination,
  selectableRows,
  CheckBox,
  setSelectedRows,

  utilities,
  search,
  searchValue,
  searchOnchange,
  searchPlaceholder,
  white,
  filters,
  dropdownData,
  refreshClick,
  edit,
  add,
  hideText,
  onClick,
  calender,
  calenderValue,
  setCalenderValue,
  calenderChange,
  headtext,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleRowSelected = useCallback((state) => {
    setSelectedRows &&
      setSelectedRows(state.selectedRows.map((item) => item.id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleRowSelected = (state) => {
  //     setSelectedRows && setSelectedRows(state.selectedRows.map((item) => item.id));
  // };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(calenderValue);

  return (
    <>
      <div className="table_div d-flex flex-column">
        {tableTitle && (
          <Heading
            title={tableTitle}
            edit={edit}
            add={add}
            hideText={hideText}
            onClick={onClick}
            date={
              calenderValue
                ? calenderValue.toLocaleDateString().replaceAll('/', '-')
                : headtext && headtext
            }
          />
        )}

        <div>
          {utilities && (
            <div className="position-sticky table_top d-flex">
              {utilities && (
                <div className="py-1 px-3 ps-1 my-auto w-100 utilities">
                  <div className="my-auto me-0">
                    {search && (
                      <SearchField
                        value={searchValue}
                        onChange={searchOnchange}
                        searchPlaceholder={searchPlaceholder}
                        white={white}
                      />
                    )}
                  </div>
                  <div className="table_filter my-auto ms-0">
                    {calender && (
                      <div className="d-flex my-auto mx-4">
                        <span
                          className={'sort_text ' + (white && 'text-white')}
                        >
                          Select Date :{' '}
                        </span>
                        <button
                          className="ghost_btn mx-2 my-auto d-flex"
                          onClick={handleOpen}
                        >
                          <BiCalendar
                            style={{ fontSize: '20px', color: '#193382' }}
                            className="my-auto"
                          />
                        </button>
                      </div>
                    )}
                    {filters && (
                      <div
                        className="filters2 my-auto"
                        style={{ height: 'fit-content' }}
                      >
                        <span
                          className={'sort_text ' + (white && 'text-white')}
                        >
                          Sort By :{' '}
                        </span>

                        {dropdownData.map((e, index) => (
                          <DropdownComponent
                            key={index}
                            filterName={e?.label}
                            dropdownChange={e?.onchange}
                            dropdownData={e?.data}
                            dropdownvalue={e?.value}
                            white={white}
                          />
                        ))}
                      </div>
                    )}

                    <div className="my-auto">
                      <button
                        className="ghost_btn onhover"
                        onClick={refreshClick}
                      >
                        <IoMdRefreshCircle
                          style={{
                            fontSize: '20px',
                            color: white && 'whiteSmoke',
                          }}
                        />
                      </button>
                      <div className="hide">Refresh</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <DataTable
            // title="Arnold Movies"
            columns={columns}
            data={data}
            selectableRows={selectableRows}
            pagination={showPagination}
            fixedHeader={true}
            fixedHeaderheight="20px"
            onSelectedRowsChange={handleRowSelected}
            selectableRowsComponent={CheckBox}
            className="table-wrapper"
            persistTableHead={true}
            key={columns.name}
            striped={false}
          />
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Calendar onChange={calenderChange} value={calenderValue} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default TableList;
