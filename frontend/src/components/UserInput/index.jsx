import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Paper,
  FormControl,
  TextField,
} from "@material-ui/core";
import Search from "../Search";

//styling for form inputs
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "50vw",
  },
  form: {
    width: "60vw",
    margin: "5vh auto",
  },
}));

const UserInput = () => {
  // style classes
  const classes = useStyles();

  // initialize state with no locations
  const [price, setPrice] = useState("");

  return (
    <Container>
      <Box className={classes.form}>
        <Paper>
          <h2>Search Top 100 Land Bank Properties</h2>
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
        </Paper>
      </Box>
      <Search price={{ price }} />
    </Container>
  );
};

export default UserInput;
