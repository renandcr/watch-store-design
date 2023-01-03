import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainMyRequestsPageContainer = styled.main`
  background-color: #ffffff;
  padding-bottom: 80px;
  .motion-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    > h1 {
      font-size: 24px;
      font-weight: 500;
      font-family: ${VARIABLES.fontSecondary};
      line-height: 32px;
      width: 90%;
      max-width: 900px;
      color: ${VARIABLES.colorGray1};
      margin-bottom: 25px;
    }
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 130px;
  }
`;

export const MyRequestsPageContainer = styled.section`
  width: 90%;
  max-width: 900px;
  min-height: 100px;
`;
