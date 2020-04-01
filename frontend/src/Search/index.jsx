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
  const [search, setSearch] = useState("");

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
            <TextField
              id="Location"
              value={search}
              onChange={e => setSearch(e.target.value)}
              label="Search by ID"
              variant="standard"
              style={{
                width: "50vw"
              }}
              required
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
      <Results search={search} />
    </Container>
  );
};

export default Search;
