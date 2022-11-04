import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  box-shadow: ${VARIABLES.colorShadow3};
  z-index: 2;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 20px 15px 15px;
  background-color: ${VARIABLES.colorBlue3};
  .input-container {
    display: flex;
    border-radius: 4px;
    height: 45px;
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px 0 0 4px;
      padding-left: 15px;
      font-size: 15px;
      color: rgb(100, 100, 100);
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 15px;
        font-weight: 100;
        color: rgb(140, 140, 140);
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin-left: -1px;
      padding-right: 15px;
      border-radius: 0 4px 4px 0;
      background-color: #ffffff;
      filter: none;
      .search-icon {
        font-size: 26px;
        color: rgb(180, 180, 180);
        :hover {
          filter: brightness(75%);
        }
      }
    }
  }
  .input-mobile {
    width: 100%;
    margin-top: 10px;
    @media only screen and (min-width: 500px) {
      display: none;
    }
  }
  .input-desktop {
    width: 40%;
    display: none;
    @media only screen and (min-width: 500px) {
      display: flex;
    }
  }
  ul {
    display: flex;
    align-items: center;
  }
  li:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    color: #ffffff;
    span {
      font-size: 13px;
      font-family: ${VARIABLES.fontSecondary};
    }
    .smile {
      font-size: 10px;
    }
    .header-name {
      font-weight: 600;
      margin-top: 3px;
    }
  }
  .icon-cart {
    font-size: 30px;
    color: ${VARIABLES.colorAlternative};
  }

  @media only screen and (min-width: 768px) {
    padding: 20px 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 116px;
  height: 52px;
  border-radius: 6px;
  background-color: ${VARIABLES.colorAlternative};
  padding: 3px 10px 3px 10px;
  .watch-store {
    font-family: "Righteous", cursive;
    color: #ffffff;
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

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 10px 25px 10px 15px;
  margin-top: -1px;
  background-color: ${VARIABLES.colorBlue1};
  .menu-icon {
    color: #ffffff;
    color: ${VARIABLES.colorAlternative};
  }
  ul {
    display: flex;
    align-items: center;
    li {
      font-size: 11px;
      font-weight: 500;
      font-family: ${VARIABLES.fontSecondary};
      color: #ffffff;
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

  @media only screen and (min-width: 768px) {
    padding: 10px 50px;
  }
`;
