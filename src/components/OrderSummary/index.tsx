import { BsBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../Button";

import {
  PaymentInformationContainer,
  OrderSummaryContainer,
  KeepBuyingContainer,
  OrderBodyContainer,
  TitleContainer,
} from "./style";

const OrderSummary: React.FC = (): JSX.Element => {
  return (
    <OrderSummaryContainer>
      <TitleContainer>
        <h2>Resumo do pedido</h2>
      </TitleContainer>
      <OrderBodyContainer>
        <PaymentInformationContainer>
          <span>1 unidades</span>
          <span>R$ 2.890</span>
        </PaymentInformationContainer>
        <Link to="/">
          <KeepBuyingContainer>
            <BsBagFill className="bag_icon" />
            Continuar comprando
          </KeepBuyingContainer>
        </Link>
        <Button>Finalizar pedido</Button>
      </OrderBodyContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
