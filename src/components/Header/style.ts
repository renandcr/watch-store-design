import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  background-color: ${VARIABLES.colorPrimary};
  box-shadow: ${VARIABLES.colorShadow3};
  z-index: 2;
  > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 12px 15px 6px 15px;
    width: 1440px;
    height: 100px;
    font-weight: 600;
    ul {
      display: flex;
      align-items: center;
      li {
        font-size: ${VARIABLES.fontSize3};
        font-family: ${VARIABLES.fontSecondary};
        font-weight: 600;
      }
      a + a {
        margin-left: 10px;

        @media only screen and (min-width: 375px) {
          margin-left: 19px;
        }
        @media only screen and (min-width: 425px) {
          margin-left: 34px;
        }
      }
    }

    @media only screen and (min-width: 650px) {
      flex-direction: row;
      padding: 0 38px 0 38px;
      height: 75px;
    }
    @media only screen and (min-width: 1200px) {
      padding: 0 60px 0 60px;
    }
  }

  @media only screen and (min-width: 650px) {
    padding: 0 15px 0 15px;
  }
`;

export const LogoContainer = styled.div`
  background-color: ${VARIABLES.colorAlternative};
  border-radius: 4px;
  width: 128px;
  height: 52px;
  padding: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;
