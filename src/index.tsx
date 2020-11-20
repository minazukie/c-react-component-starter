import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = (App: any) => {
    ReactDOM.render(<App />, document.getElementById("root"));
};

render(App);
