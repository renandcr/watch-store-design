import { useTypedSelector } from "../../store/modules/index";
import { Dispatch, SetStateAction } from "react";
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

interface IOrderSummary {
  setShowAddressModal: Dispatch<SetStateAction<boolean>>;
}

const OrderSummary: React.FC<IOrderSummary> = ({
  setShowAddressModal,
}): JSX.Element => {
  const cartProducts = useTypedSelector((state) => state.cart);
  const totalUnits = cartProducts.reduce(
    (acc, product) => product.units + acc,
    0
  );

  const totalPrice = cartProducts
    .reduce((acc, product) => product.price * product.units + acc, 0)
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  return (
    <OrderSummaryContainer>
      <TitleContainer>
        <h2>Resumo do pedido</h2>
      </TitleContainer>
      <OrderBodyContainer>
        <PaymentInformationContainer>
          <span>{totalUnits} unidades</span>
          <span>{totalPrice}</span>
        </PaymentInformationContainer>
        <Link to="/">
          <KeepBuyingContainer>
            <BsBagFill className="bag_icon" />
            Continuar comprando
          </KeepBuyingContainer>
        </Link>
        <Button onClick={() => setShowAddressModal(true)}>Fechar pedido</Button>
      </OrderBodyContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
