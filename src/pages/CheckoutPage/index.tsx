import { actionUpdateUserState } from "../../store/modules/user/actions";
import AddressInformation from "../../components/AddressInformation";
import { formatPrices, deliveryDate } from "../../assets/methods";
import CartProductCard from "../../components/CartProductCard";
import { VARIABLES } from "../../assets/globalStyle/style";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import api from "../../assets/axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

import {
  IAddressesDatabase,
  IDatabaseUser,
} from "../../store/modules/user/actions";

import {
  LeftCheckoutPageContainer,
  MainCheckoutPageContainer,
  PurchaseSummaryContainer,
  CheckoutPageContainer,
  ShoppingContainer,
} from "./style";

const CheckoutPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const address: IAddressesDatabase | undefined = user.addresses.find(
    (address) => {
      return address.main === true;
    }
  );
  const shipping = user.cart.products.length ? 18.9 : 0;
  const amount = shipping + user.cart.amount;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRequest = () => {
    api
      .post(
        `/purchase-order/${user.id}`,
        {},
        {
          headers: { Authorization: `bearer ${user.token}` },
        }
      )
      .then((_) => {
        history.push("/completed-purchase-page");
        api
          .get(`/${user.id}`, {
            headers: { Authorization: `bearer ${user.token}` },
          })
          .then((response) => {
            dispatch(actionUpdateUserState(response.data, user.token));
          })
          .catch((err) => console.log(err));
      })
      .catch((_) =>
        toast.error(
          "Certifique-se de ter um endereço para entrega e produto(s) no seu carrinho"
        )
      );
  };

  return (
    <>
      <MainCheckoutPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <div className="logo-container">
            <WebSiteLogo />
            <h1>Confira seus dados e finalize a compra</h1>
          </div>
          <CheckoutPageContainer>
            <PurchaseSummaryContainer>
              <p>
                Ao finalizar a compra, você concorda com todas as{" "}
                <Link to="/checkout-page">
                  <span className="link-change">condições de uso</span>
                </Link>{" "}
                da
                <span className="store-name">Watch Store</span>.
              </p>
              <h2 className="weight">Resumo do pedido</h2>
              <div>
                <span>Itens:</span>
                <span>{formatPrices(user.cart.amount)}</span>
              </div>
              <div>
                <span>Frete:</span>
                <span>{formatPrices(shipping)}</span>
              </div>
              <div className="total-description">
                <span>Total do pedido:</span>
                <span>{formatPrices(amount)}</span>
              </div>
              <span>
                Em 1x de {formatPrices(amount)} sem juros{" "}
                <Link to="/checkout-page">
                  <span
                    className="link-change"
                    onClick={() =>
                      alert(
                        "Desculpe, por enquanto esta ação ainda não está habilitada"
                      )
                    }
                  >
                    Alterar
                  </span>
                </Link>
              </span>
              <Button
                backgroundColor={VARIABLES.colorOrange2}
                color={VARIABLES.colorGray3}
                onClick={() => handleRequest()}
              >
                Finalizar compra
              </Button>
            </PurchaseSummaryContainer>
            <LeftCheckoutPageContainer>
              <AddressInformation address={address} />
              <ShoppingContainer>
                <h1>Entrega prevista para {deliveryDate()}</h1>
                <h2 className="weight">
                  {user.cart.products.length > 0
                    ? "Você está comprando:"
                    : "Seu carrinho está vazio!"}
                </h2>
                {user.cart.products.map((product, index) => (
                  <CartProductCard key={index} product={product} showDisplay />
                ))}
              </ShoppingContainer>
            </LeftCheckoutPageContainer>
          </CheckoutPageContainer>
        </motion.div>
      </MainCheckoutPageContainer>
      <Footer />
    </>
  );
};

export default CheckoutPage;
