import React, { useEffect, useState } from "react";

const Results = props => {
  const [results, setResults] = useState();

  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const fetchParcels = async () => {
      const response = await fetch(
        "https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query?where=OBJECTID=1&outFields=*&f=json"
      );
      const json = await response.json();
      const attributes = await json.features[0].attributes;
      setResults(attributes);
    };
    fetchParcels();
  }, []);

  console.log(results);
  return (
    <div>
      <p>{props.search}</p>
      {console.log(results)}
      <p>{results?.OBJECTID}</p>
    </div>
  );
};

export default Results;
