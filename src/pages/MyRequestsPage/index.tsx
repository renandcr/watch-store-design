import { MainMyRequestsPageContainer, MyRequestsPageContainer } from "./style";
import { OrderDescriptionContainer } from "../CompletedPurchasePage/style";
import { IDbProducts } from "../../store/modules/dbProducts";
import OrderDetails from "../../components/OrderDetails";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { formatPrices } from "../../assets/methods";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const MyRequestsPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );

  const priceOfItems = productCart.reduce(
    (acc, product) => product.price * product.units + acc,
    0
  );

  return (
    <>
      <MainMyRequestsPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <WebSiteLogo />
          <h1>Seus pedidos</h1>
          <MyRequestsPageContainer>
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
          </MyRequestsPageContainer>
        </motion.div>
      </MainMyRequestsPageContainer>
      <Footer showDisplay />
    </>
  );
};
