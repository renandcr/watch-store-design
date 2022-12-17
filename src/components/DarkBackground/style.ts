import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const DarkBackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: ${VARIABLES.colorDarkBackground};
`;
