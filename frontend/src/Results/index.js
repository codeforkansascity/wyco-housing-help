import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

const Results = props => {
  const [results, setResults] = useState();
  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const Appr = "LAndBAnkTop100CSVUpdate_csv_App";
    const Price = props.search.price;
    const fetchParcels = async () => {
      const response = await fetch(
        `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query?` +
          `where=${Appr} < ${Price}&orderByFields=${Appr} DESC&outFields=*&f=json`
      );
      const json = await response.json();
      const parcels = await json.features;
      setResults(parcels);
    };
    fetchParcels();
  }, [props.search]);

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
        <Card style={{ marginBottom: "2vh", textAlign: "left" }}>
          <h4 key={i}>
            {address}, {city}, {state}, {zip}, ${appraised}
          </h4>
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

export default Results;
