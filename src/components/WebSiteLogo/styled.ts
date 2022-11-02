import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

const WebSiteLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  a {
    color: ${VARIABLES.colorAlternative};
    text-transform: none;
    :hover {
      filter: none;
    }
    :active {
      filter: none;
    }
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
