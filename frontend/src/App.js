import React, { useState } from "react";
import "./styles/App.css";

import { HashRouter, Route, Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";

//import our components
import UserInput from "./components/UserInput";
import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";

const NavMenu = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Search"
        component={Link}
        to="/search"
        value="search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="About"
        component={Link}
        to="/about"
        value="about"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  );
};

const About = () => {
  return (
    <div style={{ height: "60vh" }}>
      <h2>About</h2>
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header className="App-header">
          <h1>Wyco Housing Help</h1>
        </header>
        <main margin="0 auto">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search" component={UserInput} />
          <Route exact path="/about" component={About} />
        </main>
        <NavMenu />
        <footer
          style={{
            height: "5vh",
            marginTop: "5vh",
          }}
        >
          <Typography variant="caption">2020 Code for KC</Typography>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
