import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

const PropertyMap = () => {
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
      </LeafletMap>
    </div>
  );
};

export default PropertyMap;
