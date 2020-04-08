import React, { useEffect, useState } from "react";

import PropertyList from "../PropertyList";

// passes search results to be displayed in list or map components.

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
      <PropertyList results={results} />
    </div>
  );
};

export default Search;
