import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 80px;
  border-top: solid 1px rgb(204, 204, 204);
  background-color: #f0f0f0;
  a {
    color: gray;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 130px;
  }
`;

export const FooterTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  background-color: #edf6f9;
  padding: 15px;

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95px;
  height: 52px;
  .watch-store {
    font-family: "Righteous", cursive;
    color: gray;
  }
  .larger {
    font-size: 30px;
  }
  .smaller {
    font-size: 15px;
    text-align: right;
    margin-top: -2px;
  }
`;

export const FooterMidleContainer = styled.div`
  padding: 15px;
  .fake-div {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    .fake-div {
      display: flex;
      width: 22.5%;
    }
  }
`;

export const SocialMediaContainer = styled.ul`
  display: flex;
  margin-bottom: 40px;
  a + a {
    margin-left: 10px;
  }

  @media only screen and (min-width: 768px) {
    width: 22.5%;
    margin-bottom: 0;
  }
`;

export const CreditCardsContainer = styled.div`
  div:first-child {
    margin-bottom: 2px;
    h2 {
      font-size: 13px;
      font-weight: 500;
      color: ${VARIABLES.colorGray1};
    }
  }
  .credit-cards-img {
    height: 55px;
  }
  img {
    max-width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 55%;
    div:first-child {
      h2 {
        font-size: 14px;
        margin: 5px 10px 0 0;
      }
    }
  }
`;

export const FooterBottomContainer = styled.div`
  margin: 60px 0 35px 0;
  width: 100vw;
  h2 {
    color: rgb(150, 150, 150);
    text-align: center;
    font-weight: 100;
    font-size: 12px;
  }
`;
