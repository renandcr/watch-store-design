import { IAddressesDatabase } from "../../store/modules/user/actions";
import AddressInformation from "../../components/AddressInformation";
import { IDatabaseUser } from "../../store/modules/user/actions";
import CartProductCard from "../../components/CartProductCard";
import { IDbProducts } from "../../store/modules/dbProducts";
import { VARIABLES } from "../../assets/globalStyle/style";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { formatPrices } from "../../assets/methods";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import { useEffect } from "react";

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

  const history = useHistory();

  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );

  const priceOfItems = productCart.reduce(
    (acc, product) => product.price * product.units + acc,
    0
  );
  const shipping = productCart.length ? 18.9 : 0;
  const amount = shipping + priceOfItems;

  const newDate = new Date().toDateString().split(" ");
  const deliveryDate = `${Number(newDate[2]) + 7} de ${newDate[1]} ${
    newDate[3]
  }`;

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const address: IAddressesDatabase | undefined = user.addresses.find(
    (address) => {
      return address.main === true;
    }
  );

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
                <span>{formatPrices(priceOfItems)}</span>
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
                  <span className="link-change">Alterar</span>
                </Link>
              </span>
              <Button
                backgroundColor={VARIABLES.backgroundGradient3}
                color={VARIABLES.colorGray3}
                onClick={() => history.push("/completed-purchase-page")}
              >
                Finalizar compra
              </Button>
            </PurchaseSummaryContainer>
            <LeftCheckoutPageContainer>
              <AddressInformation address={address} />
              <ShoppingContainer>
                <h1>Entrega prevista para {deliveryDate}</h1>
                <h2 className="weight">
                  {productCart.length
                    ? "Você está comprando:"
                    : "Seu carrinho está vazio!"}
                </h2>
                {productCart.map((product, index) => (
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
