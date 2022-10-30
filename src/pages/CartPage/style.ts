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
  @media only sreen and (min-width: 768px) {
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: center;
  }
  @media only sreen and (min-width: 1024px) {
    column-gap: 70px;
  }
  @media only sreen and (min-width: 1440px) {
    column-gap: 140px;
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

export const OrderSummarySection = styled.section`
  width: 90%;
  max-width: 410px;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    max-width: 360px;
    margin-left: 20px;
  }
`;
