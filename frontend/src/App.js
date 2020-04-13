import React from "react";
import "./styles/App.css";

import { HashRouter, Route } from "react-router-dom";

//import our components
import SearchForm from "./components/Routes/SearchForm";
import NavMenu from "./components/NavMenu";
import About from "./components/Routes/About";
import { Button } from "@material-ui/core";

const Welcome = () => {
  return (
    <div
      style={{
        padding: "25vh 0 25vh",
      }}
    >
      <h2>Welcome</h2>
    </div>
  );
};

const Assistant = () => {
  return (
    <div>
      <Button variant="contained" color="primary" size="large">
        <a
          class="openforms-embed"
          href="https://us.openforms.com/Form/e94d8c11-1dbc-4820-9b1d-931876444e8d"
          style={{ color: "white", textDecoration: "none" }}
        >
          View the Housing Assistant
        </a>
        <script src="https://us.openforms.com/Scripts/embed-iframe.js"></script>
      </Button>
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
          <Route exact path="/search" component={SearchForm} />
          <Route exact path="/about" component={About} />
          <Route exact path="/assist" component={Assistant} />
        </main>
        <nav>
          <NavMenu />
        </nav>
      </div>
    </HashRouter>
  );
}

export default App;
