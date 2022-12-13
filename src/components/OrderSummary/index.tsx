import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules/index";
import { VARIABLES } from "../../assets/globalStyle/style";
import { useHistory, Link } from "react-router-dom";
import { formatPrices } from "../../assets/methods";
import { Dispatch, SetStateAction } from "react";
import { BsBagFill } from "react-icons/bs";
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
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const cart: Array<IDbProducts> = useTypedSelector((state) => state.cart);
  const history = useHistory();

  const total_units = cart.reduce((acc, current) => current.units + acc, 0);

  const amount = cart.reduce(
    (acc, current) => current.product.price * current.units + acc,
    0
  );

  const handleCloseOrderEvent = () => {
    if (user) {
      if (user.addresses.length > 0) history.push("/checkout-page");
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
          <span>
            {(user && user.cart.total_units) || (!user && total_units)} unidade
            {(user && user.cart.total_units > 1 && "s") ||
              (cart.length > 1 && "s")}
          </span>
          <span>
            {(user && formatPrices(user.cart.amount)) || formatPrices(amount)}
          </span>
        </PaymentInformationContainer>
        <Link to="/">
          <KeepBuyingContainer>
            <BsBagFill className="bag_icon" />
            Continuar comprando
          </KeepBuyingContainer>
        </Link>
        <Button
          backgroundColor={VARIABLES.colorBlue6}
          onClick={handleCloseOrderEvent}
        >
          Fechar pedido
        </Button>
      </OrderBodyContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
