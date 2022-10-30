import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const CartProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 115px;
  border-radius: 4px;
  box-shadow: ${VARIABLES.colorShadow};
  background-color: rgb(255, 255, 255);
`;

export const CartImageContainer = styled.div`
  width: 115px;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px 0 0 4px;
  }
`;

export const CartDescriptionContainer = styled.div`
  width: 65%;
  text-align: left;
  margin: 10px 5px 0 10px;
  h2 {
    line-height: 18px;
    color: ${VARIABLES.colorGray1};
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  span {
    margin-top: 15px;
    display: block;
    color: ${VARIABLES.colorGold2};
    font-weight: 500;
    font-size: ${VARIABLES.fontSize2};
  }
`;

export const UnitsContainerAndDeletion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 8px 5px 5px 0;
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
  border-radius: 4px;
  height: 33%;
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
  border-radius: 4px;
  height: 33%;
  width: 100%;
  color: gray;
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
  width: 32px;
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
