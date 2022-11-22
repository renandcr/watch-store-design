import MasterCard from "../../assets/images/icon-master-card.png";
import { IDatabaseUser } from "../../store/modules/user/actions";
import CartProductCard from "../../components/CartProductCard";
import { IDbProducts } from "../../store/modules/dbProducts";
import { VARIABLES } from "../../assets/globalStyle/style";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { formatPrices } from "../../assets/methods";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  AddressInformationContainer,
  LeftCheckoutPageContainer,
  MainCheckoutPageContainer,
  PurchaseSummaryContainer,
  CheckoutPageContainer,
  ShoppingContainer,
} from "./style";

export interface ICheckoutPage {
  showDisplay?: boolean;
}

const CheckoutPage: React.FC<ICheckoutPage> = ({
  showDisplay,
}): JSX.Element => {
  const cartProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const mainAddress = user.addresses.find((address) => {
    return address.main === true;
  });

  const priceOfItems = cartProducts.reduce(
    (acc, product) => product.price * product.units + acc,
    0
  );
  const shipping = cartProducts.length ? 18.9 : 0;
  const amount = shipping + priceOfItems;

  const newDate = new Date().toDateString().split(" ");
  const deliveryDate = `${Number(newDate[2]) + 7} de ${newDate[1]} ${
    newDate[3]
  }`;

  return (
    <>
      <MainCheckoutPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
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
              <Button backgroundColor={VARIABLES.colorOrange1}>
                Finalizar compra
              </Button>
            </PurchaseSummaryContainer>
            <LeftCheckoutPageContainer>
              <AddressInformationContainer showDisplay={showDisplay}>
                <ul>
                  <li className="weight">
                    Endereço de entrega{" "}
                    <Link to="/my-addresses-page">
                      <span className="link-change">Alterar</span>
                    </Link>
                  </li>
                  <li className="upper name">
                    {user.name} {user.last_name}
                  </li>
                  <li className="upper">
                    {mainAddress?.street} {mainAddress?.house_number}
                  </li>
                  <li className="upper">
                    {mainAddress?.complement} {mainAddress?.district}
                  </li>
                  <li>
                    {mainAddress?.city}, {mainAddress?.state}{" "}
                    {mainAddress?.zip_code}
                  </li>
                  <li>Brasil</li>
                  <li>Telefone: {mainAddress?.phone}</li>
                  <li className="weight">
                    Forma de pagamento
                    <Link to="/checkout-page">
                      <span className="link-change">Alterar</span>
                    </Link>
                  </li>
                  <li className="flag-card">
                    <img src={MasterCard} alt="Bandeira MasterCard" />
                    <span className="weight">(Crédito)</span> com final 4321
                  </li>
                </ul>
              </AddressInformationContainer>
              <ShoppingContainer>
                <h1>Entrega prevista para {deliveryDate}</h1>
                <h2 className="weight">
                  {cartProducts.length
                    ? "Você está comprando:"
                    : "Seu carrinho está vazio!"}
                </h2>
                {cartProducts.map((product, index) => (
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
