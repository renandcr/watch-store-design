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
  colorBackground: "#edf6f9",
  colorBlue1: "#609cba",
  colorBlue2: "#0072bb",
  colorBlue3: "#5d8aa8",
  colorBlue4: "#1768ac",
  colorBlue5: "#1e90ff",
  colorBlue6: "#0082c8",
  colorGreen1: "#008080",
  colorGreen2: "#007600",
  colorRed1: "#b12704",
  colorRed2: "#e32636",
  colorSecondary: "#f45b69",
  colorAlternative: "#ff0054",
  colorGray1: "#495057",
  colorGray2: "#6c757d",
  colorGray3: "#333",
  colorGray4: "#f0f0f0",
  colorGold1: "#926c15",
  colorGold2: "#a47e1b",
  colorOrange1: "#ed9121",
  colorOrange2: "#ffbc40",
  colorShadow1: "0 0 16px 0 rgb(9 30 66 / 20%), 0 0 0 1px rgb(9 30 66 / 8%)",
  colorShadow2: "0 0 15px #999",
  colorShadow3: "0 0 6px #ffbc40, 0 0 0 1px #ffbc40",
  colorBackgroundGray: "rgb(244, 244, 244)",
  colorDarkBackground: "rgba(0, 0, 0, 0.75)",
  lightBorderColor: "#ddd",
  backgroundGradient1: "linear-gradient(to right,#0072bb,#1e90ff)",
  backgroundGradient2: "linear-gradient(to right,#0082c8,#1e90ff)",
  backgroundGradient3: "linear-gradient(to right,#ed9121,#ffbc40)",
  backgroundGradient4: "linear-gradient(to right,#008080,#0082c8)",

  fontSecondary: "Poppins, sans-serif",
  fontThirdy: "Open Sans, sans-serif",

  fontSize1: "1em",
  fontSize2: "0.875em",
  fontSize3: "0.8125em",
  fontSize4: "0.625em",
};
