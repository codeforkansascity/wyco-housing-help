import React from "react";
import "./styles/App.css";

//import our components
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, header</h1>
      </header>
      <Search />
    </div>
  );
}

export default App;
