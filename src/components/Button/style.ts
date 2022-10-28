import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  border: none;
  padding: 10px;
  border-radius: 4px;
  background-color: ${VARIABLES.colorButton};
  font-size: ${VARIABLES.fontSize4};
  color: #ffffff;
`;

export default ButtonContainer;
