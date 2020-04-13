import React from "react";
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

// styling for mobile/full
const useStyles = makeStyles(() => ({
  map: {
    width: "60vw",
    height: "50vh",
    margin: "0 auto",
  },
  mobileMap: {
    width: "90vw",
    height: "40vh",
    margin: "0 auto",
  },
}));

const PropertyMap = (props) => {
  // for media breakpoints
  const isMobile = useMediaQuery("(max-width: 700px)");

  // style classes
  const classes = useStyles();

  let locations;

  // GeoJSON component always requires a geoJSON as data.
  // set a blank geoJSON when search fails to prevent crashing
  if (!props.locations.type) {
    locations = {
      type: "FeatureCollection",
      features: [],
    };
  } else {
    locations = props.locations;
  }

  // generate unique keys to rerender results
  const hash = require("object-hash");

  return (
    <div>
      {isMobile ? (
        <LeafletMap
          className={classes.mobileMap}
          center={[39.125, -94.65]}
          zoom={13}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <GeoJSON
            key={hash(locations)}
            data={locations}
            style={{ color: "blue" }}
          />
        </LeafletMap>
      ) : (
        <LeafletMap className={classes.map} center={[39.125, -94.65]} zoom={13}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

          <GeoJSON
            key={hash(locations)}
            data={locations}
            style={{ color: "blue" }}
          />
        </LeafletMap>
      )}
    </div>
  );
};

export default PropertyMap;
