import AddressInformation from "../../components/AddressInformation";
import { IDbProducts } from "../../store/modules/dbProducts";
import OrderDetails from "../../components/OrderDetails";
import { useTypedSelector } from "../../store/modules";
import WebSiteLogo from "../../components/WebSiteLogo";
import { formatPrices } from "../../assets/methods";
import Footer from "../../components/Footer";

import {
  CompletedPurchasePageTitleContainer,
  CompletedPurchasePageContainer,
  MainCompletedPurchasePage,
  OrderDescriptionContainer,
} from "./style";

const CompletedPurchasePage: React.FC = (): JSX.Element => {
  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );

  const priceOfItems = productCart.reduce(
    (acc, product) => product.price * product.units + acc,
    0
  );

  const newDate = new Date().toDateString().split(" ");
  const deliveryDate = `${Number(newDate[2]) + 7} de ${newDate[1]} ${
    newDate[3]
  }`;

  return (
    <>
      <MainCompletedPurchasePage>
        <CompletedPurchasePageTitleContainer>
          <h1>Compra finalizada com sucesso!</h1>
        </CompletedPurchasePageTitleContainer>
        <CompletedPurchasePageContainer>
          <WebSiteLogo />
          <h2>Detalhes do pedido</h2>
          <AddressInformation showDisplay border />
          <h2 className="delivery-title">
            Entrega prevista para o dia {deliveryDate}
          </h2>
          <OrderDescriptionContainer>
            <li>
              <div>
                <span>Realizado no dia</span>
                <span>23 de Nov 2022</span>
              </div>
              <div>
                <span>TOTAL</span> <span>{formatPrices(priceOfItems)}</span>
              </div>
            </li>
            <li>
              <span>Número do pedido</span>{" "}
              <span>45f5ggd54s1sxs45s6a6asz5ss</span>
            </li>
          </OrderDescriptionContainer>
          {productCart.map((product) => (
            <OrderDetails key={product.id} product={product} />
          ))}
        </CompletedPurchasePageContainer>
      </MainCompletedPurchasePage>
      <Footer showDisplay />
    </>
  );
};

export default CompletedPurchasePage;
