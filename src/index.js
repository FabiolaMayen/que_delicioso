import "./style.scss";
import React, { useState } from "react";
import { render } from "react-dom";
import MapContainer from "./map.js";
const App = () => {
  return <MapContainer />;
};

render(<App />, document.getElementById("app"));
