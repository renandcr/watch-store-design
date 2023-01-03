import { MainMyRequestsPageContainer, MyRequestsPageContainer } from "./style";
import { IDatabaseUser } from "../../store/modules/user/actions";
import OrderDetails from "../../components/OrderDetails";
import { useTypedSelector } from "../../store/modules";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
        <Header display="none" noPosition noShadow />
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          {!user ? (
            <h1>Entre em sua conta para ter acesso aos seus pedidos! </h1>
          ) : user.purchaseOrders.length > 0 ? (
            <h1>Seus pedidos</h1>
          ) : (
            <h1>Você ainda não possui pedidos!</h1>
          )}
          <MyRequestsPageContainer>
            {user && user.purchaseOrders.length > 0 && (
              <OrderDetails user={user} renderisionType={"all"} />
            )}
          </MyRequestsPageContainer>
        </motion.div>
      </MainMyRequestsPageContainer>
      <Footer showDisplay />
    </>
  );
};
