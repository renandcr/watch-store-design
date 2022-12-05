import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const OrderDescriptionContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;
  border-radius: 8px 8px 0 0;
  row-gap: 20px;
  border: solid 1px ${VARIABLES.lightBorderColor};
  background-color: ${VARIABLES.colorBackgroundGray};
  li:first-child {
    flex-direction: row;
    column-gap: 50px;
    row-gap: 20px;
    flex-wrap: wrap;
    div:first-child {
      span:last-child {
        text-transform: none;
      }
    }
    div {
      display: flex;
      flex-direction: column;
      row-gap: 7px;
    }
  }
  li {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin-right: 10px;
    span {
      font-size: ${VARIABLES.fontSize3};
      color: ${VARIABLES.colorGray2};
      font-family: ${VARIABLES.fontSecondary};
      text-transform: uppercase;
    }
  }
`;

export const ProductInformation = styled.div`
  display: flex;
  width: 100%;
  border: solid 1px ${VARIABLES.lightBorderColor};
  border-top: 0;
  padding: 15px 15px 15px 5px;
  .image-container {
    width: 100px;
    min-width: 90px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .description-container {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin-left: 10px;
    h2 {
      line-height: 22px;
      color: ${VARIABLES.colorGreen1};
      font-size: 15px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      font-weight: 500;
    }
    span {
      font-size: ${VARIABLES.fontSize3};
      color: ${VARIABLES.colorGray1};
      font-weight: 500;
    }
  }
`;
