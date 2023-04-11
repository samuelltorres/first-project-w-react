import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./containers/styles/globalStyle.js";
import Routes from "./routes.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes />,
    <GlobalStyle />
  </>
);
