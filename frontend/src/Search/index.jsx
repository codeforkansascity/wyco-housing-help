import React, { useState } from "react";
import {
  Container,
  Box,
  Paper,
  TextField,
  Button,
  ButtonGroup
} from "@material-ui/core";
import Results from "../Results";

const Search = () => {
  // initialize state with no location
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");

  return (
    <Container>
      <Box
        style={{
          width: "60vw",
          margin: "10vh auto"
        }}
      >
        <Paper>
          <h2>Search Land Bank Properties</h2>
          <form>
            {/* ID Search */}
            <TextField
              id="ID"
              value={id}
              onChange={e => setId(e.target.value)}
              label="Search by ID"
              variant="standard"
              style={{
                width: "50vw"
              }}
              required
            />

            {/* Price Search */}
            <TextField
              id="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              label="Search by Price"
              variant="standard"
              style={{
                width: "50vw"
              }}
            />

            {/* Align button group right */}
            <div style={{ display: "flex" }}>
              <div
                style={{
                  flex: "1"
                }}
              />
              <ButtonGroup
                size="large"
                aria-label="large outlined primary button group"
                style={{
                  margin: "1vh"
                }}
              >
                <Button variant="contained" color="primary" type="submit">
                  Search
                </Button>
              </ButtonGroup>
            </div>
          </form>
        </Paper>
      </Box>
      <Results search={{ id, price }} />
    </Container>
  );
};

export default Search;
