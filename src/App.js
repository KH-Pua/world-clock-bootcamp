import React from "react";
import "./App.css";
import Clock from "./components/clock.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>World Clock Project</h1>
          <p>
            <Clock timeZone="America/New_York" />
          </p>
          <p>
            <Clock timeZone="Europe/London" />
          </p>
          <p>
            <Clock timeZone="Asia/Dubai" />
          </p>
          <p>
            <Clock timeZone="Asia/Singapore" />
          </p>
          <p>
            <Clock timeZone="Asia/Hong_Kong" />
          </p>
          <p>
            <Clock timeZone="Asia/Seoul" />
          </p>
        </header>
      </div>
      
    );
  }
}

export default App;