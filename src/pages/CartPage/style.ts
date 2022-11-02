import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const MainPageCart = styled.main`
  display: flex;
  padding-bottom: 30px;
`;

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 125px;

  @media only screen and (min-width: 650px) {
    margin-top: 100px;
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

export const GreetingContainer = styled.h2`
  width: 100%;
  font-size: 23.68px;
  text-align: center;
  margin-bottom: 50px;
  font-family: ${VARIABLES.fontSecondary};
  color: ${VARIABLES.colorGray2};
  font-weight: 500;
  span {
    font-size: 22px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 28px;
    span {
      font-size: 27px;
    }
  }
`;

export const EmptyCartContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 90%;
    max-width: 360px;
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
