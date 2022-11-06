import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  border: none;
  padding: 10px;
  border-radius: 4px;
  background-color: ${VARIABLES.colorBlue2};
  font-size: ${VARIABLES.fontSize4};
  color: #ffffff;
  :hover {
    filter: brightness(75%);
    transition: 0.3s;
  }
  :active {
    filter: brightness(1.6);
    transition: 0.3s;
  }
`;

export default ButtonContainer;
