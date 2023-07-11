import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TableBottom = ({ download, bottomUtilities, bulk_action, BulkActionData, bulk, setBulk }) => {
    return (
        <div className="sticky-bottom">
            {bottomUtilities && (
                <div className="px-3 py-2 search_bg mb-0 d-flex justify-content-between">
                    {bulk_action && (
                        // <div className="d-flex">
                        //     {BulkActionData?.map((e, index) => {
                        //         return (
                        //             <div className="d-flex justify-content-end ms-2" key={index}>
                        //                 <button className="my-auto me-0 bulk_btn d-flex" key={index} onClick={e?.onClick}>
                        //                     {/* <div className="m-auto mb-1">{e?.icon}</div> */}
                        //                     <span style={{ fontSize: '10px' }} className="m-auto px-1">
                        //                         {e?.Button_Title}
                        //                     </span>
                        //                 </button>
                        //             </div>
                        //         );
                        //     })}
                        // </div>
                        <div className="d-flex">
                            <FormControl sx={{ minWidth: '120px', maxHeight: '40px' }} fullWidth>
                                <InputLabel id="demo-select-small-label" sx={{ width: '100%', fontSize: '12px', fontWeight: 500 }}>
                                    Bulk Action
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    sx={{ fontSize: '12px' }}
                                    value={bulk === null ? '' : bulk}
                                    onChange={(e) => {
                                        setBulk(e.target.value);
                                    }}
                                    label="Bulk Action"
                                >
                                    {BulkActionData?.map((b, index) => (
                                        <MenuItem value={index} key={index}>
                                            {b.Button_Title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {bulk !== null && (
                                <button onClick={BulkActionData[bulk]?.onClick} className="bulk_apply_btn">
                                    Apply
                                </button>
                            )}
                        </div>
                    )}
                    {download && (
                        <button className="my-auto me-0 ghost_btn">
                            <FaFileDownload />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default TableBottom;
