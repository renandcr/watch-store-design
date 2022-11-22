import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";
import { ICartProductCard } from ".";

export const CartProductCardContainer = styled.div<ICartProductCard>`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  height: ${(props) => (props.showDisplay ? "185px" : "115px")};
  padding-bottom: ${(props) => (props.showDisplay ? "20px" : "0")};
  border-radius: ${(props) => (props.showDisplay ? "0" : "4px")};
  border-bottom: solid 1px ${VARIABLES.lightBorderColor};
  box-shadow: ${(props) =>
    props.showDisplay ? "none" : VARIABLES.colorShadow1};
  justify-content: ${(props) =>
    props.showDisplay ? "unset" : "space-between"};
`;

export const CartImageContainer = styled.div<ICartProductCard>`
  min-width: ${(props) => (props.showDisplay ? "115px" : "90px")};
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 0 0 4px;
  }
`;

export const CartDescriptionContainer = styled.div<ICartProductCard>`
  width: 65%;
  text-align: left;
  margin: ${(props) =>
    props.showDisplay ? "0 5px 0 10px" : "10px 5px 0 10px"};
  h2 {
    line-height: 22px;
    color: ${VARIABLES.colorGray1};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-weight: ${(props) => (props.showDisplay ? "600" : "400")};
  }
  span {
    margin-top: 15px;
    display: block;
    font-weight: 500;
    font-size: ${VARIABLES.fontSize2};
    color: ${(props) =>
      props.showDisplay ? VARIABLES.colorRed2 : VARIABLES.colorGold2};
  }
`;

export const BottomContainer = styled.div<ICartProductCard>`
  flex-direction: column;
  margin-top: 5px;
  display: ${(props) => (props.showDisplay ? "flex" : "none")};
  span {
    font-size: ${VARIABLES.fontSize3};
    font-weight: 500;
    margin-top: 7px;
  }
  .inventory {
    color: ${VARIABLES.colorGreen2};
    font-weight: 400;
  }
  .units {
    display: flex;
    align-items: center;
    span {
      color: ${VARIABLES.colorGray3};
    }
    .quantity {
      margin-right: 3px;
      font-size: 14px;
    }
    .change {
      color: ${VARIABLES.colorBlue2};
      margin-left: 5px;
    }
  }
  .units-change {
    color: ${VARIABLES.colorBlue2};
    width: min-content;
    cursor: pointer;
    :hover {
      color: ${VARIABLES.colorSecondary};
      transition: 0.3s;
    }
  }
`;

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
  width: min-content;
  .bar {
    color: ${VARIABLES.colorBlue2};
    margin: 0 4px 0 4px;
  }
  span {
    margin-top: 0;
    font-size: 12px;
  }
  div {
    width: 40px;
    border-radius: 4px;
    height: 23px;
    margin-right: 10px;
    border: 1px solid ${VARIABLES.colorOrange2};
    box-shadow: 0 0 4px ${VARIABLES.colorOrange1};
    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 4px;
      padding-left: 5px;
      font-size: 13px;
      color: ${VARIABLES.colorGray1};
      font-weight: 500;
      :focus {
        outline: none;
      }
      ::placeholder {
        font-size: 4px;
        font-weight: 100;
        color: ${VARIABLES.colorGray2};
      }
    }
  }
`;

export const UnitsContainerAndDeletion = styled.div<ICartProductCard>`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 8px 5px 5px 0;
  display: ${(props) => (props.showDisplay ? "none" : "flex")};
`;

export const AddAndSubtractComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 28px;
  height: 67px;
  border-radius: 5px;
  border: solid 1px lightgray;
`;

export const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 4px 0 0;
  height: 35%;
  width: 100%;
  color: gray;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: lightgray;
    transition: 0.3s;
  }
  :active {
    background-color: gray;
  }
`;

export const QuantityContainer = styled.div`
  font-size: 12px;
  color: gray;
  font-weight: 500;
`;

export const SubtractContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 4px 4px;
  height: 35%;
  width: 100%;
  color: gray;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: lightgray;
    transition: 0.3s;
  }
  :active {
    background-color: gray;
  }
`;

export const TrashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 27px;
  border-radius: 4px;
  color: gray;
  cursor: pointer;
  :hover {
    color: #ffffff;
    background-color: lightgray;
    transition: 0.3s;
  }
  :active {
    background-color: gray;
  }
`;
