import React from "react";
import "./styles/App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import our components
import UserInput from "./UserInput";

const NavMenu = () => {
  return (
    <div>
      <Link to="/wyco-housing-help/search">
        <button>Search</button>
      </Link>
      <Link to="/wyco-housing-help/about">
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Hello, header</h1>
          <NavMenu />
        </header>
        <div>
          <Route exact path="/wyco-housing-help/search" component={UserInput} />
          <Route exact path="/wyco-housing-help/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
