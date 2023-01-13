import { handleErrorMessages, formatPrices } from "../../assets/methods";
import { actionUpdateUserState } from "../../store/modules/user/actions";
import AddressInformation from "../../components/AddressInformation";
import CircularProgress from "@material-ui/core/CircularProgress";
import CartProductCard from "../../components/CartProductCard";
import { VARIABLES } from "../../assets/globalStyle/style";
import FormControl from "@material-ui/core/FormControl";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Backdrop from "@material-ui/core/Backdrop";
import Select from "@material-ui/core/Select";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import api from "../../assets/axios";

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
  formControl: {
    minWidth: 120,
    "& div": {
      "& div": {
        fontSize: 12,
        fontWeight: 500,
        padding: 7,
        fontFamily: `${VARIABLES.fontSecondary}`,
        color: `${VARIABLES.colorGray3}`,
      },
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `solid 1px black`,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CheckoutPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showInstallment, setShowInstallment] = useState<boolean>(false);
  const [clickReleased, setClickReleased] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  const address: IAddressesDatabase | undefined = user.addresses.find(
    (address) => {
      return address.main === true;
    }
  );

  const amount = user.cart.shipping + user.cart.amount;
  const dispatch = useDispatch();
  const history = useHistory();

  const installmentConditions = [];
  for (let i = 2; i <= 10; i++) {
    installmentConditions.push(
      `Em ${i}x de ${formatPrices(amount / i)} sem juros`
    );
  }

  const installmentHandling = (installment: number) => {
    setShowInstallment(false);
    api
      .patch(
        `/cart/change_installments/${user.id}`,
        { installment },
        {
          headers: { Authorization: `bearer ${user.token}` },
        }
      )
      .then((_) => {
        api
          .get(`/${user.id}`, {
            headers: { Authorization: `bearer ${user.token}` },
          })
          .then((response) => {
            dispatch(actionUpdateUserState(response.data, user.token));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => handleErrorMessages(err.response.data.message, history));
  };

  const handleRequest = () => {
    if (clickReleased) {
      setClickReleased(false);
      setTimeout(() => {
        setClickReleased(true);
      }, 5000);
      api
        .post(
          `/purchase-order/create/${user.id}`,
          {},
          {
            headers: { Authorization: `bearer ${user.token}` },
          }
        )
        .then((_) => {
          document.body.style.overflow = "hidden";
          setTimeout(() => {
            history.push("/completed-purchase-page");
            setOpen(false);
            document.body.style.overflow = "auto";
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
          handleErrorMessages(err.response.data.message, history, user)
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
                Ao finalizar a compra, você concorda com todas as condições de
                uso da
                <span className="store-name">Watch Store</span>. Por favor
                verifique nossa
                <Link to="/privacy-policy-page">
                  <span className="link-change">Política de Privacidade</span>
                </Link>{" "}
                para obter mais informações.
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
                <span>{formatPrices(user.cart.shipping)}</span>
              </div>
              <div className="total-description">
                <span>Total do pedido:</span>
                <span>{formatPrices(amount)}</span>
              </div>
              <div className="installment">
                {user.cart.total_units > 0 && !showInstallment ? (
                  <div>
                    <span>{user.cart.installment}</span>
                    <Link to="/checkout-page">
                      <span
                        className="link-change"
                        onClick={() => setShowInstallment(true)}
                      >
                        Alterar
                      </span>
                    </Link>
                  </div>
                ) : (
                  user.cart.total_units > 0 &&
                  showInstallment && (
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <Select value={""} displayEmpty>
                        <MenuItem
                          value=""
                          onClick={() => installmentHandling(1)}
                        >
                          Preço à vista
                        </MenuItem>
                        {installmentConditions.map((current, index) => (
                          <MenuItem
                            key={index}
                            value={current}
                            onClick={() =>
                              installmentHandling(Number(current.split("")[3]))
                            }
                          >
                            {current}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )
                )}
              </div>
              <Button
                backgroundColor={VARIABLES.colorOrange2}
                color={VARIABLES.colorGray3}
                onClick={() => {
                  handleRequest();
                }}
              >
                Finalizar compra
              </Button>
            </PurchaseSummaryContainer>
            <LeftCheckoutPageContainer>
              <AddressInformation address={address} />
              <ShoppingContainer>
                <h1>Previsão para entrega de 7 dias úteis</h1>
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
                {user.cart.productCart
                  .sort((a, b) => a.final_price - b.final_price)
                  .map((current, index) => (
                    <CartProductCard
                      key={index}
                      current={current}
                      showDisplay
                    />
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
