import { VARIABLES } from "../../assets/globalStyle/style";
import styled from "styled-components";

export const OrderSummaryContainer = styled.div`
  width: 100%;
  height: 257px;
  border-radius: 4px;
  box-shadow: ${VARIABLES.colorShadow2};
  background-color: rgb(255, 255, 255);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 4px 4px 0 0;
  background-color: ${VARIABLES.colorAlternative};
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
  padding: 40px 20px 25px 20px;
`;

export const PaymentInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 45px;
  span:first-child {
    color: ${VARIABLES.colorGray1};
  }
  span {
    color: ${VARIABLES.colorGold2};
    font-weight: 500;
  }
`;

export const KeepBuyingContainer = styled.span`
  display: block;
  width: 174px;
  margin-bottom: 20px;
  border-bottom: solid 1px gray;
  color: gray;
  font-size: 11.8px;
  .bag_icon {
    margin-right: 5px;
  }
`;
