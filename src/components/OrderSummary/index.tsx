import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules/index";
import { IDbProducts } from "../../store/modules/dbProducts";
import { VARIABLES } from "../../assets/globalStyle/style";
import { Dispatch, SetStateAction } from "react";
import { useHistory } from "react-router-dom";
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
  const user: Array<IDatabaseUser> = useTypedSelector((state) => state.user);
  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );
  const history = useHistory();

  const totalUnits = productCart.reduce(
    (acc, product) => product.units + acc,
    0
  );

  const totalPrice = productCart
    .reduce((acc, product) => product.price * product.units + acc, 0)
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" });

  const handleCloseOrderEvent = () => {
    if (user.length) {
      if (user[0].addresses.length) history.push("/checkout-page");
      else setShowAddressModal(true);
    } else {
      history.push("/login-page");
    }
  };

  return (
    <OrderSummaryContainer>
      <TitleContainer>
        <h2>Resumo do pedido</h2>
      </TitleContainer>
      <OrderBodyContainer>
        <p>
          Aviso: Opós fechar, você ainda poderá fazer alterações no seu pedido.{" "}
        </p>
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
        <Button
          backgroundColor={VARIABLES.backgroundGradient2}
          onClick={handleCloseOrderEvent}
        >
          Fechar pedido
        </Button>
      </OrderBodyContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
