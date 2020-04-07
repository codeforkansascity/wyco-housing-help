import React, { useEffect, useState } from "react";
import { Card, List, ListItem, ListSubheader } from "@material-ui/core";

const Search = (props) => {
  const [results, setResults] = useState();

  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const COST = "LAndBAnkTop100CSVUpdate_csv_App";
    const CITY = "LAndBAnkTop100CSVUpdate_csv_CIT";
    const RANK = "LAndBAnkTop100CSVUpdate_csv_Ran";
    const UserMax = props.price.price;
    const fetchParcels = async () => {
      const response = await fetch(
        `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query` +
          `?where=${CITY} = 'KANSAS CITY' AND ` +
          `${RANK} < 100 AND ` +
          `${COST} < ${UserMax}` +
          `&orderByFields=${RANK} DESC&outFields=*&f=json`
      );
      const json = await response.json();
      const parcels = await json.features;
      setResults(parcels);
    };
    fetchParcels();
  }, [props]);

  // On each render, reset list of parcels.
  // Add one parcel element for each one listed in JSON response.
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
      <List style={{ overflow: "auto", maxHeight: "50vh", maxWidth: "50vw" }}>
        {results && <div>{allParcels}</div>}
      </List>
    </div>
  );
};

export default Search;
