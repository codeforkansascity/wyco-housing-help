import React from "react";
import "./styles/App.css";

//import our components
import UserInput from "./UserInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, header</h1>
      </header>
      <UserInput />
    </div>
  );
}

export default App;
