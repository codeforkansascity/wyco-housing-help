import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-ui/core";

import PropertyList from "../PropertyList";

import PropertyMap from "../PropertyMap";

// passes search results to be displayed in list or map components.

const Search = (props) => {
  // store response from ArcGIS API
  const [results, setResults] = useState([]);
  const [locations, setLocations] = useState();
  // toggle list view
  const [listView, setListView] = useState(true);
  const toggleList = () => {
    setListView(true);
  };
  const toggleMap = () => {
    setListView(false);
  };

  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const abortController = new AbortController();

    // parameters for fetch request
    const COST = "LAndBAnkTop100CSVUpdate_csv_App";
    const CITY = "LAndBAnkTop100CSVUpdate_csv_CIT";
    const RANK = "LAndBAnkTop100CSVUpdate_csv_Ran";
    const UserMax = props.price.price;

    // apply params to api call
    const URL =
      `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query` +
      `?where=${CITY} = 'KANSAS CITY' AND ` +
      `${RANK} > 2283 AND ` +
      `${COST} < ${UserMax}` +
      `&orderByFields=${RANK} DESC&outFields=*&f=`;

    // query for property data to show in list
    const fetchParcels = async () => {
      const response = await fetch(URL + "json");
      const json = await response.json();
      const parcels = await json.features;
      setResults(parcels);
    };

    // query for location data to show in map
    const fetchLocations = async () => {
      const response = await fetch(URL + "geojson");
      const json = await response.json();
      setLocations(json);
    };

    // retrieve data
    fetchParcels();
    fetchLocations();

    // cleanup function to cancel requests after no longer needed
    return () => {
      abortController.abort();
    };
  }, [props]);

  return (
    <div>
      <Typography style={{ marginBottom: "1vh" }}>
        {results && results.length + " results"}
      </Typography>
      <div style={{ marginBottom: "1vh" }}>
        {listView === true && <PropertyList results={results} />}
        {listView === false && <PropertyMap locations={locations} />}
      </div>
      {results && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "3vh",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={toggleList}
          >
            List
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            onClick={toggleMap}
          >
            Map
          </Button>
        </div>
      )}
    </div>
  );
};

export default Search;
