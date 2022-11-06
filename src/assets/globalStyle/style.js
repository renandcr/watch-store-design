import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html *{
        font-family: "Inter", sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        font-size: 16px;
    }
    body {
        background-color: #edf6f9;
    }
    button {
        text-transform: uppercase;
        cursor: pointer;
    }
    a {
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const VARIABLES = {
  colorBlue1: "#609cba",
  colorBlue2: "#1768ac",
  colorBlue3: "#5d8aa8",
  colorSecondary: "#f45b69",
  colorAlternative: "#ff0054",
  colorGray1: "#495057",
  colorGray2: "#6c757d",
  colorGold1: "#926c15",
  colorGold2: "#a47e1b",
  colorOrange1: "#ed9121",
  colorShadow1: "0 4px 34px -10px #6c757d",
  colorShadow2:
    "0 8px 16px -4px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)",
  colorShadow3: "0 4px 34px -7px #6c757d",

  fontSecondary: "Poppins, sans-serif",
  fontThirdy: "Open Sans, sans-serif",

  fontSize1: "1em",
  fontSize2: "0.875em",
  fontSize3: "0.8125em",
  fontSize4: "0.625em",
};
