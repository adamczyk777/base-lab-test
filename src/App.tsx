import * as React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
