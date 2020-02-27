import React from "react";
import ReactDOM from "react-dom";

//import Material UI components
import Container from "@material-ui/core/Container";

//import our components
import Navbar from "./navbar/index";
import Hero from "./hero/index";

function App() {
  return (
    <Container maxWidth="sm">
      <Hero />
      <Navbar />
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
