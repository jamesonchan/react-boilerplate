import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/Button";
import "./index.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        Hello {this.props.name}
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App name="Taylor" />, document.getElementById("root"));
