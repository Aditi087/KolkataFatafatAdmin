import React from 'react';
import Form from 'react-bootstrap/Form';
import './table.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropdownComponent = ({ dropdownChange, dropdownData, filterName, dropdownvalue }) => {
    // console.log(dropdownChange);
    return (
        <div className="m-auto">
            <Form.Group className="px-2 d-flex">
                {/* {filterName && <Form.Label className="pe-1 m-auto">{filterName}</Form.Label>} */}
                <FormControl sx={{ minWidth: '100px', width: 'max-width' }} size="small">
                    <InputLabel id="demo-select-small-label" style={{ fontSize: '12px' }}>
                        {filterName}
                    </InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        style={{ fontSize: '12px' }}
                        value={dropdownvalue}
                        onChange={dropdownChange}
                        label={filterName}
                    >
                        {dropdownData?.map((d, index) => (
                            <MenuItem value={d.value} key={index}>
                                {d.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* <Form.Select
                    size="sm"
                    aria-label="Default select example"
                    value={dropdownvalue}
                    onChange={dropdownChange}
                    className="select-component"
                >
                    {filterName && <option value="">{filterName}</option>}

                    {dropdownData?.map((row, index) => {
                        return (
                            <option value={row?.value} key={index}>
                                {row?.title}
                            </option>
                        );
                    })}
                </Form.Select> */}
            </Form.Group>
        </div>
    );
};

export default DropdownComponent;
