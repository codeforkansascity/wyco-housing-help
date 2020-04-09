import React, { useEffect, useState } from "react";

import PropertyList from "../PropertyList";

import PropertyMap from "../PropertyMap";

// passes search results to be displayed in list or map components.

const Search = (props) => {
  // store response from ArcGIS API
  const [results, setResults] = useState();
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
    // query for property data to show in list
    const COST = "LAndBAnkTop100CSVUpdate_csv_App";
    const CITY = "LAndBAnkTop100CSVUpdate_csv_CIT";
    const RANK = "LAndBAnkTop100CSVUpdate_csv_Ran";
    const UserMax = props.price.price;
    const fetchParcels = async () => {
      const response = await fetch(
        `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query` +
          `?where=${CITY} = 'KANSAS CITY' AND ` +
          `${RANK} > 2283 AND ` +
          `${COST} < ${UserMax}` +
          `&orderByFields=${RANK} DESC&outFields=*&f=json`
      );
      const json = await response.json();
      const parcels = await json.features;
      setResults(parcels);
    };

    //query for location data to show in map
    const fetchLocations = async () => {
      const ProxyUrl = "https://cors-anywhere.herokuapp.com/";
      const Url =
        "https://opendata.arcgis.com/datasets/2a688a228d7640d5a6aee290af3a6b91_0.geojson";
      const response = await fetch(ProxyUrl + Url);
      const json = await response.json();
      setLocations(json);
    };

    //retrieve data
    fetchParcels();
    fetchLocations();
  }, [props]);

  return (
    <div>
      <div style={{ height: "60vh" }}>
        {listView === true && <PropertyList results={results} />}
        {listView === false && <PropertyMap locations={locations} />}
      </div>
      <div style={{ position: "absolute" }}>
        <button onClick={toggleList}>List</button>
        <button onClick={toggleMap}>Map</button>
      </div>
    </div>
  );
};

export default Search;
