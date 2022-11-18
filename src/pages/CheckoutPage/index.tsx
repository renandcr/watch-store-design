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

import {
  AddressInformationContainer,
  LeftCheckoutPageContainer,
  MainCheckoutPageContainer,
  PurchaseSummaryContainer,
  CheckoutPageContainer,
  ShoppingContainer,
} from "./style";

const CheckoutPage: React.FC = (): JSX.Element => {
  const cartProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

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
            <AddressInformationContainer>
              <ul>
                <li className="weight">
                  Endereço de entrega{" "}
                  <Link to="/checkout-page">
                    <span className="link-change">Alterar</span>
                  </Link>
                </li>
                <li className="upper">
                  {user.name} {user.last_name}
                </li>
                <li className="upper">
                  {user.addresses[0].street} {user.addresses[0].house_number}
                </li>
                <li className="upper">{user.addresses[0].district}</li>
                <li>
                  {user.addresses[0].city}, {user.addresses[0].state}{" "}
                  {user.addresses[0].zip_code}
                </li>
                <li>Brasil</li>
                <li>Telefone: {user.addresses[0].phone}</li>
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
                <li></li>
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
      </MainCheckoutPageContainer>
      <Footer />
    </>
  );
};

export default CheckoutPage;
