import React, { useState } from 'react';
import {
  Heading,
  ImagePicker,
  Label,
} from '../../CommonComponents/pageComponents/PageComponents';
import { Box, Grid, InputAdornment, TextField } from '@mui/material';
import { MdCurrencyRupee, MdDateRange } from 'react-icons/md';

function TransactionDetails() {
  const [image, setImage] = useState(null);
  return (
    <div className="Main_body">
      <Heading title="Transaction Details" />
      <Box className="form_box">
        <Box
          component="form"
          sx={{
            padding: '2rem',
            width: '80%',
            '& .MuiTextField-root': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Date" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="number"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdDateRange />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Transaction ID" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Transaction Amount (INR)" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="number"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdCurrencyRupee />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Transaction Type" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Screenshot" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <ImagePicker image={image} setImage={setImage} />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Player Name" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>
          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Player ID" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                disabled
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Bet For" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Type" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Game Name" />
            </Grid>
            <Grid item xs={7} className="my-auto">
              <TextField
                error={false}
                id="filled-size-small"
                // helperText="Incorrect entry."
                variant="filled"
                type="text"
                name="name"
                // value={inputState.name}
                // onChange={handleChange}
                // disabled={!edit}
                size="small"
                style={{ width: '100%' }}
              />
            </Grid>
          </Grid>

          {/* <Grid className="fields1" container spacing={4}>
            <Grid item xs={5} className="my-auto input_title">
              <Label label="Status" />
            </Grid>
            <Grid
              item
              xs={7}
              className="my-auto ps-5 d-flex align-content-start"
            >
              <SwitchButtonComponent />
            </Grid>
          </Grid> */}

          {/* <Grid
            item
            xs={7}
            className="d-flex justify-content-end"
            // style={{ paddingLeft: '3rem' }}
          >
            <ButtonComponent
              text="submit"
              // submit={handleSubmit}
            />
          </Grid> */}
        </Box>
      </Box>
    </div>
  );
}

export default TransactionDetails;
