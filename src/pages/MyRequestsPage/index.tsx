import { MainMyRequestsPageContainer, MyRequestsPageContainer } from "./style";
import { IDatabaseUser } from "../../store/modules/user/actions";
import OrderDetails from "../../components/OrderDetails";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export const MyRequestsPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  return (
    <>
      <MainMyRequestsPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <WebSiteLogo />
          {user.purchaseOrders.length > 0 ? (
            <h1>Seus pedidos</h1>
          ) : (
            <h1>Você ainda não possui pedidos!</h1>
          )}
          <MyRequestsPageContainer>
            {user.purchaseOrders.length > 0 && (
              <OrderDetails user={user} renderisionType={"all"} />
            )}
          </MyRequestsPageContainer>
        </motion.div>
      </MainMyRequestsPageContainer>
      <Footer showDisplay />
    </>
  );
};
