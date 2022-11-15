import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
const UnderLoginContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  div {
    display: flex;
    span {
      width: 100%;
      font-size: 12px;
      text-align: center;
      margin-bottom: 5px;
      color: ${VARIABLES.colorGray2};
    }
    .border-middle {
      min-width: 144px;
    }
    .border {
      margin-top: 5px;
      border-top: solid 1px ${VARIABLES.lightBorderColor};
    }
  }
  a {
    width: 100%;
  }
`;

export default UnderLoginContainer;
