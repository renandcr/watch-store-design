import AddressInformation from "../../components/AddressInformation";
import OrderDetails from "../../components/OrderDetails";
import { useTypedSelector } from "../../store/modules";
import WebSiteLogo from "../../components/WebSiteLogo";
import { deliveryDate } from "../../assets/methods";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

import {
  CompletedPurchasePageTitleContainer,
  CompletedPurchasePageContainer,
  MainCompletedPurchasePage,
} from "./style";

import {
  IAddressesDatabase,
  IDatabaseUser,
} from "../../store/modules/user/actions";

const CompletedPurchasePage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Entrega prevista para o dia {deliveryDate()}
            </h2>
            {user && user.purchaseOrders.length > 0 && (
              <OrderDetails user={user} renderisionType={"one"} />
            )}
          </CompletedPurchasePageContainer>
        </motion.div>
      </MainCompletedPurchasePage>
      <Footer showDisplay />
    </>
  );
};

export default CompletedPurchasePage;
