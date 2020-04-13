import React from "react";
import "./styles/App.css";

import { HashRouter, Route } from "react-router-dom";

//import our components
import SearchForm from "./components/Routes/SearchForm";
import NavMenu from "./components/NavMenu";
import About from "./components/Routes/About";

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
        </main>
        <nav>
          <NavMenu />
        </nav>
      </div>
    </HashRouter>
  );
}

export default App;
