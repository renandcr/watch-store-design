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
  }
  @media only sreen and (min-width: 1024px) {
  }
  @media only sreen and (min-width: 1440px) {
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
