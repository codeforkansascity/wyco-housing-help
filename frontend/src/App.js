import React from "react";
import "./styles/App.css";

import { HashRouter, Route, Link } from "react-router-dom";

//import our components
import UserInput from "./UserInput";

const NavMenu = () => {
  return (
    <div>
      <Link to="/search">
        <button>Search</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header className="App-header">
          <h1>Hello, header</h1>
          <NavMenu />
        </header>
        <div>
          <Route exact path="/search" component={UserInput} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
