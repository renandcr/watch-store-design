import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainMyRequestsPageContainer = styled.main`
  background-color: #ffffff;
  padding-bottom: 80px;
  .motion-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      width: 90%;
      max-width: 900px;
      align-items: flex-start;
      margin: 30px 0 50px 0;
    }
    > h1 {
      font-size: 22px;
      font-weight: 600;
      font-family: ${VARIABLES.fontSecondary};
      line-height: 26px;
      width: 90%;
      max-width: 900px;
      color: ${VARIABLES.colorGray3};
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
`;
