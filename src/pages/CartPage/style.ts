import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainPageCart = styled.main`
  display: flex;
  flex-direction: column;
  h1 {
    height: 40px;
    font-size: 18px;
    font-weight: 500;
    font-family: ${VARIABLES.fontSecondary};
    margin: 160px 25px 40px 15px;
    border-bottom: solid 1px ${VARIABLES.lightBorderColor};
    color: ${VARIABLES.colorBlue2};

    @media only screen and (min-width: 500px) {
      margin: 160px 25px 40px 15px;
    }
    @media only screen and (min-width: 768px) {
      margin: 170px 50px 40px 50px;
      font-size: 22px;
    }
  }
`;

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  .empty {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
  }
  @media only screen and (min-width: 1024px) {
    column-gap: 70px;
  }
  @media only screen and (min-width: 1440px) {
    column-gap: 140px;
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    width: 90%;
    max-width: 270px;
    margin-right: 25px;
  }
  button {
    width: 200px;
    margin-top: 40px;
  }
`;

export const OrderSummarySection = styled.section`
  width: 90%;
  max-width: 410px;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    max-width: 360px;
    margin-left: 20px;
  }
`;

export const CartCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 90%;
  max-width: 410px;

  @media only screen and (min-width: 768px) {
    width: 50%;
    max-width: 550px;
  }
`;
