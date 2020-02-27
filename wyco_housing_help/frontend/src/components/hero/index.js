import React from "react";

//import Material UI components
import Typography from "@material-ui/core/Typography";

//bottom navbar for router
export default function Hero() {
  return (
    <Typography component="div" style={{ textAlign: "center" }}>
      <h1>Welcome to the Wyandotte County Housing Helper!</h1>
      <h2>(excuse the mess)</h2>
    </Typography>
  );
}
