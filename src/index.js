import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
        {/* <Button></Button> */}
      </div>
    );
  }
}

ReactDOM.render(<App name="Taylor" />, document.getElementById("root"));