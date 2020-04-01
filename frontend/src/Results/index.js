import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";

const Results = props => {
  const [results, setResults] = useState();
  // query arcGIS api to retrieve property info.
  // store in custom hook?
  useEffect(() => {
    const ID = props.search;
    const fetchParcels = async () => {
      const response = await fetch(
        `https://services1.arcgis.com/Qo2HHQp8vgPs2wg3/arcgis/rest/services/LandBankRankingUpdate/FeatureServer/0/query?where=OBJECTID=${ID}&outFields=*&f=json`
      );
      const json = await response.json();
      const attributes = await json.features;
      setResults(attributes);
    };
    fetchParcels();
  }, [props.search]);

  //working attempt to reference specific properties in JSON response.
  //hoisting isn't desired here, so will need to revise.
  if (results !== undefined) {
    var address = results[0]?.attributes.LAndBAnkTop100CSVUpdate_csv_Add;
    var city = results[0]?.attributes.LAndBAnkTop100CSVUpdate_csv_CIT;
    var state = results[0]?.attributes.LAndBAnkTop100CSVUpdate_csv_STA;
    var zip = results[0]?.attributes.LAndBAnkTop100CSVUpdate_csv_ZIP;
    var appraised = results[0]?.attributes.LAndBAnkTop100CSVUpdate_csv_App;
  }

  return (
    <div>
      <Card>
        {results && (
          <div>
            <p>
              {address}, {city}, {state} {zip}
            </p>
            <h4>${appraised}</h4>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Results;
