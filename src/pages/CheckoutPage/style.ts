import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainCheckoutPageContainer = styled.main`
  .motion-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    row-gap: 20px;
    margin-bottom: 17px;
    width: 100%;
    > div:first-child {
      width: 90%;
      max-width: 950px;
      div {
        align-items: flex-start;
      }
    }
    h1 {
      width: 90%;
      max-width: 950px;
      font-size: 21px;
      font-weight: 600;
      font-family: ${VARIABLES.fontSecondary};
      color: ${VARIABLES.colorGray3};
      line-height: 23px;
    }
  }
  .link-change {
    color: ${VARIABLES.colorBlue2};
    margin-left: 5px;
    font-size: ${VARIABLES.fontSize3};
    font-weight: 500;
    text-transform: none;
    :hover {
      color: ${VARIABLES.colorRed2};
      text-decoration: underline;
      transition: 0.5s;
    }
  }
  .weight {
    color: ${VARIABLES.colorGray3};
    font-weight: 600;
  }
`;

export const CheckoutPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  row-gap: 20px;
  color: ${VARIABLES.colorGray1};

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-start;
    column-gap: 20px;
  }
`;

export const PurchaseSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: ${VARIABLES.colorShadow1};
  p {
    font-size: 13px;
    text-align: center;
    margin-bottom: 5px;
    line-height: 20px;
    color: ${VARIABLES.colorGray2};
  }
  .store-name {
    color: ${VARIABLES.colorGray1};
    margin-left: 4px;
    font-weight: 600;
    font-size: 13px;
  }
  h2 {
    font-size: 15px;
  }
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 14px;
    }
  }
  .total-description {
    color: ${VARIABLES.colorRed3};
    border-top: solid 1px ${VARIABLES.lightBorderColor};
    padding-top: 20px;
    margin-bottom: -5px;
    span {
      font-weight: 600;
      font-size: 17px;
    }
  }
  > span {
    font-size: 12px;
    font-weight: 500;
  }
  button {
    margin-top: 10px;
    font-weight: 600;
  }

  @media only screen and (min-width: 768px) {
    max-width: 380px;
  }
`;

export const LeftCheckoutPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    max-width: 550px;
  }
`;

export const ShoppingContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  border-radius: 4px;
  padding: 15px;
  box-shadow: ${VARIABLES.colorShadow1};
  background-color: #ffffff;
  h1 {
    font-size: 17px;
    font-weight: 500;
    line-height: 25px;
    color: ${VARIABLES.colorOrange1};
    margin-bottom: 5px;
  }
  h2 {
    margin-bottom: 10px;
  }
`;
