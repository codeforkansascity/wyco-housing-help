import React, { useEffect, useState } from "react";

import PropertyList from "../PropertyList";

import PropertyMap from "../PropertyMap";

// passes search results to be displayed in list or map components.

const Search = (props) => {
  // store response from ArcGIS API
  const [results, setResults] = useState();

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
    fetchParcels();
  }, [props]);

  return (
    <div>
      <div style={{ height: "60vh" }}>
        {listView === true && <PropertyList results={results} />}
        {listView === false && <PropertyMap />}
      </div>
      <div style={{ position: "absolute" }}>
        <button onClick={toggleList}>List</button>
        <button onClick={toggleMap}>Map</button>
      </div>
    </div>
  );
};

export default Search;
