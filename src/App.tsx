import { GlobalStyle } from "./assets/globalStyle/style";
import React from "react";
import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
