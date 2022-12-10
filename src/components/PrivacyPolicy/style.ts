import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const PrivacyPolicyContainer = styled.div`
  width: 100%;
  h1,
  h2 {
    font-weight: 600;
    font-family: ${VARIABLES.fontThirdy};
    color: ${VARIABLES.colorGray3};
    margin-bottom: 20px;
  }
  h1 {
    font-size: 28px;
    line-height: 32px;
  }
  h2 {
    font-size: 20px;
    line-height: 26px;
  }
  p {
    color: ${VARIABLES.colorGray1};
    line-height: 22px;
    margin-bottom: 20px;
  }
  ul {
    padding-left: 40px;
    li {
      font-size: 17px;
      line-height: 22px;
      list-style: outside;
      margin-bottom: 15px;
      color: ${VARIABLES.colorGray1};
    }
  }
  .second-list {
    li {
      font-size: 16px;
    }
    p {
      margin-left: -40px;
    }
    h2 {
      margin-left: -40px;
    }
    span {
      font-weight: 600;
    }
  }
`;
