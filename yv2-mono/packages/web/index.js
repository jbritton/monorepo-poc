import React from "react";
import ReactDOM from "react-dom";
import Header from 'ui-common'

const App = () => (
  <div style={{ fontSize: 72, width: 1200, margin: "auto" }}>
      <Header />
      <div>Rollup and react!</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
