import React from "react";
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";

const PropertyMap = (props) => {
  return (
    <div>
      <LeafletMap
        style={{ width: "60vw", height: "50vh", margin: "0 auto" }}
        center={[39.0997, -94.5786]}
        zoom={13}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          key={props.locations}
          data={props.locations}
          style={{ color: "blue" }}
        />
      </LeafletMap>
    </div>
  );
};

export default PropertyMap;
