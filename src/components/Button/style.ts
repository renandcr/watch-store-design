import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { IButton } from "./index";

const ButtonContainer = styled.button<IButton>`
  width: 100%;
  height: 42px;
  color: #ffffff;
  background-color: ${VARIABLES.colorBlue2};
  border: none;
  padding: 5px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  font-family: ${VARIABLES.fontThirdy};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  :hover {
    filter: brightness(75%);
    transition: 0.5s;
  }
  :active {
    filter: brightness(1.6);
    transition: 0.3s;
  }
`;

export default ButtonContainer;
