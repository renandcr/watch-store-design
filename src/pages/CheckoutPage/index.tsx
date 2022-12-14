import { actionUpdateUserState } from "../../store/modules/user/actions";
import AddressInformation from "../../components/AddressInformation";
import CircularProgress from "@material-ui/core/CircularProgress";
import CartProductCard from "../../components/CartProductCard";
import { VARIABLES } from "../../assets/globalStyle/style";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import Backdrop from "@material-ui/core/Backdrop";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import api from "../../assets/axios";

import {
  handleErrorMessages,
  deliveryDate,
  formatPrices,
} from "../../assets/methods";

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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#ffffff",
  },
}));

const CheckoutPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [clickReleased, setClickReleased] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const address: IAddressesDatabase | undefined = user.addresses.find(
    (address) => {
      return address.main === true;
    }
  );
  const shipping = user.cart.productCart.length ? 28.9 : 0;
  const amount = shipping + user.cart.amount;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleRequest = () => {
    if (clickReleased) {
      setClickReleased(false);
      setTimeout(() => {
        setClickReleased(true);
      }, 5000);
      api
        .post(
          `/purchase-order/create/${user.id}`,
          { shipping },
          {
            headers: { Authorization: `bearer ${user.token}` },
          }
        )
        .then((_) => {
          setTimeout(() => {
            history.push("/completed-purchase-page");
            setOpen(false);
          }, 4000);
          setOpen(true);
          api
            .get(`/${user.id}`, {
              headers: { Authorization: `bearer ${user.token}` },
            })
            .then((response) => {
              dispatch(actionUpdateUserState(response.data, user.token));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) =>
          handleErrorMessages(err.response.data.message, history)
        );
    }
  };

  return (
    <>
      <MainCheckoutPageContainer>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <div className="logo-container">
            <div>
              <WebSiteLogo />
            </div>
            <h1>Confira seus dados e finalize a compra</h1>
          </div>
          <CheckoutPageContainer>
            <PurchaseSummaryContainer>
              <p>
                Ao finalizar a compra, você concorda com todas as{" "}
                <span className="link-change terms-of-use">
                  condições de uso
                </span>{" "}
                da
                <span className="store-name">Watch Store</span>.
              </p>
              <h2 className="weight">Resumo do pedido</h2>
              <div>
                <span>Quantidade:</span>
                {user.cart.total_units > 0 && (
                  <span>
                    {user.cart.total_units} unidade
                    {user.cart.total_units > 1 ? "s" : ""}
                  </span>
                )}
              </div>
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
              {user.cart.total_units > 0 && (
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
              )}
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
                <div className="you-are-buying">
                  <h2 className="weight">
                    {!user.cart.productCart.length
                      ? "Seu carrinho está vazio!"
                      : "Você está comprando:"}
                  </h2>
                  {!user.cart.productCart.length && (
                    <Link to="/">
                      <Button
                        backgroundColor={VARIABLES.colorOrange2}
                        color={VARIABLES.colorGray3}
                      >
                        Ver produtos
                      </Button>
                    </Link>
                  )}
                </div>
                {user.cart.productCart.map((current, index) => (
                  <CartProductCard key={index} current={current} showDisplay />
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
