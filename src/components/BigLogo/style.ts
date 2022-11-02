import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const BigLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  width: 503px;
  height: 503px;
  border-radius: 50%;
  background-color: ${VARIABLES.colorAlternative};
  .watch-store {
    font-family: "Righteous", cursive;
    color: #ffffff;
  }
  .larger {
    font-size: 120px;
    width: 78%;
    text-align: left;
  }
  .smaller {
    font-size: 50px;
    width: 71%;
    text-align: right;
    margin-top: -10px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (min-width: 1440px) {
    margin-right: 200px;
  }
`;
