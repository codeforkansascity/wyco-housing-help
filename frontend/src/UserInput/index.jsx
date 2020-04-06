import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Paper,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Search from "../Search";

//styling for form inputs
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UserInput = () => {
  // style classes
  const classes = useStyles();

  // initialize state with no locations
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");

  // update city from dropdown
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <Container>
      <Box
        style={{
          width: "60vw",
          margin: "10vh auto",
        }}
      >
        <Paper>
          <h2>Search Land Bank Properties</h2>
          {/* Price Input */}
          <FormControl className={classes.formControl}>
            <TextField
              id="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Maximum Price"
              variant="standard"
            />
          </FormControl>
          {/* City Select */}
          <FormControl className={classes.formControl}>
            <InputLabel id="city-select-label">City</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={city}
              onChange={handleCity}
            >
              <MenuItem value={"KANSAS CITY"}>Kansas City</MenuItem>
              <MenuItem value={"BONNER SPRINGS"}>Bonner Springs</MenuItem>
              <MenuItem value={"EDWARDSVILLE"}>Edwardsville</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Box>
      <Search price={{ price }} city={city} />
    </Container>
  );
};

export default UserInput;
