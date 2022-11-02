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
        :hover {
            filter: brightness(75%);
            transition: 0.3s;
        }
        :active {
            filter: brightness(1.6);
            transition: 0.3s;
        }
    }
    a {
        text-transform: uppercase;
        color: #f45b69;
        text-decoration: none;
        cursor: pointer;
        :hover {
            filter: brightness(75%);
            transition: 0.3s;
        }
        :active {
            filter: brightness(1.6);
            transition: 0.3s;
        }
    }
`;

export const VARIABLES = {
  colorPrimary: "#609cba",
  colorSecondary: "#f45b69",
  colorButton: "#1768ac",
  colorAlternative: "#ff0054",
  colorGray1: "#495057",
  colorGray2: "#6c757d",
  colorGold1: "#926c15",
  colorGold2: "#a47e1b",
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
