import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { IHeader } from ".";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  box-shadow: ${VARIABLES.colorShadow2};
  z-index: 2;
`;

export const TopContainer = styled.div<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 15px 20px 15px 15px;
  background-color: ${VARIABLES.colorBlue3};
  .input-mobile {
    display: flex;
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
  .input-container {
    border-radius: 4px;
    height: 45px;
    :focus-within {
      box-shadow: ${VARIABLES.colorShadow3};
      transition: 0.3s;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px 0 0 4px;
      padding-left: 15px;
      font-size: 15px;
      color: ${VARIABLES.colorGray1};
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 15px;
        font-weight: 100;
        color: ${VARIABLES.colorGray2};
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
      .search-icon {
        font-size: 26px;
        color: rgb(180, 180, 180);
        :hover {
          filter: brightness(75%);
        }
      }
    }
    display: ${(props) => props.display};
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
  .li-icon-cart:hover {
    filter: brightness(75%);
    transition: 0.3s;
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

export const OptionsContainer = styled.div<IHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 46px;
  padding: 10px 25px 10px 15px;
  margin-top: -1px;
  background-color: ${VARIABLES.colorBlue1};
  .menu-icon {
    display: ${(props) => props.display};
    color: ${VARIABLES.colorAlternative};
    cursor: pointer;
    :hover {
      filter: brightness(75%);
      transition: 0.3s;
    }
    :active {
      filter: brightness(1.6);
      transition: 0.3s;
    }
  }
  ul {
    display: flex;
    align-items: center;
    li {
      font-size: 10px;
      font-weight: 500;
      font-family: ${VARIABLES.fontSecondary};
      color: #ffffff;
      :hover {
        color: ${VARIABLES.colorOrange1};
        transition: 0.3s;
      }

      @media only screen and (min-width: 375px) {
        li {
          font-size: 11px;
        }
      }
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
