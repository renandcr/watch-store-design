import AddressInformation from "../../components/AddressInformation";
import { IDbProducts } from "../../store/modules/dbProducts";
import OrderDetails from "../../components/OrderDetails";
import { useTypedSelector } from "../../store/modules";
import WebSiteLogo from "../../components/WebSiteLogo";
import { formatPrices } from "../../assets/methods";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

import {
  CompletedPurchasePageTitleContainer,
  CompletedPurchasePageContainer,
  MainCompletedPurchasePage,
  OrderDescriptionContainer,
} from "./style";

import {
  IAddressesDatabase,
  IDatabaseUser,
} from "../../store/modules/user/actions";

const CompletedPurchasePage: React.FC = (): JSX.Element => {
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
      <MainCompletedPurchasePage>
        <CompletedPurchasePageTitleContainer>
          <h1>Compra finalizada com sucesso!</h1>
        </CompletedPurchasePageTitleContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <CompletedPurchasePageContainer>
            <WebSiteLogo />
            <h2>Detalhes do pedido</h2>
            <AddressInformation showDisplay border address={address} />
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
        </motion.div>
      </MainCompletedPurchasePage>
      <Footer showDisplay />
    </>
  );
};

export default CompletedPurchasePage;
