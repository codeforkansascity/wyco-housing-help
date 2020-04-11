import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Paper,
  FormControl,
  TextField,
  Typography,
} from "@material-ui/core";
import Search from "../Search";
import { useMediaQuery } from "@material-ui/core";

//styling for form inputs
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
  form: {
    width: "60vw",
    maxWidth: "1000px",
    margin: "0 auto 2vh",
  },
  mobileForm: {
    width: "90vw",
    margin: "0 auto 2vh",
  },
}));

const UserInput = () => {
  // for media breakpoints
  const isMobile = useMediaQuery("(max-width: 700px)");

  // style classes
  const classes = useStyles();

  // initialize state with no locations
  const [price, setPrice] = useState("");

  return (
    <Container style={{ marginTop: "5vh" }}>
      {isMobile ? (
        <Box className={classes.mobileForm}>
          <Paper>
            <Typography variant="h4">Search Top 100 Properties</Typography>
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
      ) : (
        <Box className={classes.form}>
          <Paper>
            <Typography variant="h4">Search Top 100 Properties</Typography>
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
      )}

      <Search price={{ price }} />
    </Container>
  );
};

export default UserInput;
