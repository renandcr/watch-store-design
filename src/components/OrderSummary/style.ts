import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  width: 100%;
  border-radius: 4px;
  box-shadow: ${VARIABLES.colorShadow1};
  background-color: #ffffff;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 4px 4px 0 0;
  background-color: ${VARIABLES.colorBlue3};
  h2 {
    font-family: ${VARIABLES.fontSecondary};
    color: #ffffff;
    font-weight: 500;
  }
`;

export const OrderBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  p {
    font-size: 13px;
    text-align: center;
    margin-bottom: 20px;
    line-height: 20px;
    color: ${VARIABLES.colorGray2};
  }
`;

export const PaymentInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 45px;
  span:first-child {
    color: ${VARIABLES.colorGray1};
    font-weight: 500;
  }
  span {
    color: ${VARIABLES.colorRed2};
    font-weight: 600;
  }
`;

export const KeepBuyingContainer = styled.span`
  display: block;
  width: 174px;
  margin-bottom: 20px;
  color: gray;
  font-size: 11.8px;
  :hover {
    box-shadow: 0 1px 0 0 ${VARIABLES.colorRed2};
    color: ${VARIABLES.colorRed2};
    transition: 0.5s;
  }
  .bag_icon {
    margin-right: 5px;
  }
`;
