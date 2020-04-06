import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

const Search = (props) => {
  const [results, setResults] = useState();

  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const Appr = "LAndBAnkTop100CSVUpdate_csv_App";
    const CIT = "LAndBAnkTop100CSVUpdate_csv_CIT";
    const Price = props.price.price;
    const City = props.city;
    const fetchParcels = async () => {
      const response = await fetch(
        `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query` +
          `?where=${CIT} = '${City}' AND ` +
          `${Appr} < ${Price}` +
          `&orderByFields=${Appr} DESC&outFields=*&f=json`
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
        <Card
          key={i}
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
              width: "inherit",
              backgroundColor: "#F0F0F0",
            }}
          />

          <h3>${appraised}</h3>
          <em>
            {address}, {city}, {state}, {zip}
          </em>
        </Card>
      );
    }
  }

  return (
    <div>
      <p>{results && results.length + " results"}</p>
      {results && <div>{allParcels}</div>}
    </div>
  );
};

export default Search;
