import React from "react";
import { Card, List, ListItem } from "@material-ui/core";

const PropertyList = (props) => {
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
              margin: "2vh auto",
              padding: "1%",
              textAlign: "left",
              width: "50vw",
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

            <h3>${appraised}</h3>
            <em>
              {address}, {city}, {state}, {zip}
            </em>
          </Card>
        </ListItem>
      );
    }
  }

  return (
    <div>
      <p style={{ marginBottom: "5px" }}>
        {results && results.length + " results"}
      </p>
      <List
        style={{
          overflow: "auto",
          margin: "0 auto",
          maxHeight: "50vh",
          maxWidth: "50vw",
        }}
      >
        {results && <div>{allParcels}</div>}
      </List>
    </div>
  );
};

export default PropertyList;
