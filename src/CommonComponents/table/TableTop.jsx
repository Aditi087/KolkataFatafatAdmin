import React from 'react';
import { IoMdRefreshCircle } from 'react-icons/io';
import DropdownComponent from './DropdownComponent';
import { SearchField } from '../pageComponents/PageComponents';

const TableTop = ({
  utilities,
  search,
  searchValue,
  searchOnchange,
  searchPlaceholder,
  filters,
  dropdownData,
  refreshClick,
}) => {
  return (
    <div className="position-sticky table_top">
      {utilities && (
        <div className="py-2 px-3 search_bg">
          <div>
            {search && (
              <SearchField
                value={searchValue}
                onChange={searchOnchange}
                searchPlaceholder={searchPlaceholder}
              />
            )}
          </div>
          <div className="d-flex">
            {filters && (
              <div className="d-flex m-auto" style={{ height: 'fit-content' }}>
                <span className="sort_text">Sort By : </span>
                {dropdownData.map((e, index) => (
                  <DropdownComponent
                    key={index}
                    filterName={e?.label}
                    dropdownChange={e?.onchange}
                    dropdownData={e?.data}
                    dropdownvalue={e?.value}
                  />
                ))}
              </div>
            )}

            <div className="my-auto">
              <button className="ghost_btn onhover" onClick={refreshClick}>
                <IoMdRefreshCircle style={{ fontSize: '20px' }} />
              </button>
              <div className="hide">Refresh</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableTop;
