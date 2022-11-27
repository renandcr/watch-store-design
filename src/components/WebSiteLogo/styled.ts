import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { IWebSiteLogoStyle } from ".";

const WebSiteLogoContainer = styled.div<IWebSiteLogoStyle>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  margin-bottom: ${(props) => props.marginBottom};
  a {
    color: ${VARIABLES.colorAlternative};
    text-transform: none;
  }
  .watch-store {
    font-family: "Righteous", cursive;
    font-size: 32px;
  }
  font-weight: 200;
  .watch-store-inside {
    font-size: 14px;
  }
`;

export default WebSiteLogoContainer;
