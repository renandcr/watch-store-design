import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const OrderDetailsContainer = styled.div`
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
