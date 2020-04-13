import React from "react";
import { Card, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

import PropertyModal from "../PropertyModal";

// styling for mobile/full
const useStyles = makeStyles(() => ({
  list: {
    overflow: "auto",
    width: "60vw",
    height: "40vh",
    margin: "1vh auto 4vh",
  },
  mobileList: {
    overflow: "auto",
    width: "90vw",
    height: "40vh",
    margin: "1vh auto 4vh",
  },
}));

const PropertyList = (props) => {
  // for media breakpoints
  const isMobile = useMediaQuery("(max-width: 700px)");

  // style classes
  const classes = useStyles();

  const results = props.results;

  // On each render, reset list of parcels.
  // Add one parcel element for each one listed in response.
  // Each parcel element should contain descriptive info on that parcel.
  // Since results is undefined on rerender, 'if' is required to prevent reference error. Correction?
  const allParcels = [];
  if (results !== undefined) {
    for (let i = 0; i < results.length; i++) {
      let address = results[i]?.attributes.LAndBAnkTop100CSVUpdate_csv_Add;
      let city = results[i]?.attributes.LAndBAnkTop100CSVUpdate_csv_CIT;
      let state = results[i]?.attributes.LAndBAnkTop100CSVUpdate_csv_STA;
      let zip = results[i]?.attributes.LAndBAnkTop100CSVUpdate_csv_ZIP;
      let appraised = results[i]?.attributes.LAndBAnkTop100CSVUpdate_csv_App;
      allParcels.push(
        <ListItem key={i}>
          <Card
            style={{
              padding: "1%",
              textAlign: "left",
              width: "90vw",
            }}
          >
            {/* Map/image placeholder */}
            <div
              style={{
                height: "10vh",
                width: "30vw",
                backgroundColor: "#F0F0F0",
              }}
            />
            <div style={{ marginBottom: "2vh" }}>
              <h3>${appraised}</h3>
              <em>
                {address}
                <br /> {city}, {state} {zip}
              </em>
            </div>

            <PropertyModal
              address={address}
              city={city}
              state={state}
              zip={zip}
            />
          </Card>
        </ListItem>
      );
    }
  }

  return (
    <div>
      {isMobile ? (
        <List className={classes.mobileList}>
          {results && <div>{allParcels}</div>}
        </List>
      ) : (
        <List className={classes.list}>
          {results && <div>{allParcels}</div>}
        </List>
      )}
    </div>
  );
};

export default PropertyList;
