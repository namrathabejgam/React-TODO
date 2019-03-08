import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
class MainComponent extends React.Component {
  render() {
    //return <h1>Hola!</h1>;
    return (
      <div>
        <App />
      </div>
    );
  }
}
ReactDOM.render(<MainComponent />, document.getElementById("root"));
