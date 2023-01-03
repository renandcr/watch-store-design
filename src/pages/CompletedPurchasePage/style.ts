import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainCompletedPurchasePage = styled.main`
  background-color: #ffffff;
  padding-bottom: 80px;
  .motion-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    padding-bottom: 130px;
  }
`;

export const CompletedPurchasePageTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${VARIABLES.colorGreen2};
  margin-bottom: 30px;
  padding: 10px 0 10px 15px;
  h1 {
    line-height: 23px;
    font-family: ${VARIABLES.fontSecondary};
    text-align: center;
    color: #ffffff;
  }
`;

export const CompletedPurchasePageContainer = styled.section`
  width: 90%;
  max-width: 900px;
  > div:first-child {
    align-items: flex-start;
    width: 100%;
    margin-bottom: 50px;
  }
  > h2 {
    font-size: 21px;
    font-weight: 600;
    font-family: ${VARIABLES.fontSecondary};
    line-height: 26px;
    width: 100%;
    color: ${VARIABLES.colorGray3};
    margin-bottom: 25px;
  }
  .delivery-title {
    font-size: 18px;
    font-weight: 500;
    color: ${VARIABLES.colorOrange1};
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;
