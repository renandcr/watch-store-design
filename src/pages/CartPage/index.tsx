import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { IDatabaseUser } from "../../store/modules/user/actions";
import CartProductCard from "../../components/CartProductCard";
import EmptyCart from "../../assets/images/carrinho_vazio.png";
import { VARIABLES } from "../../assets/globalStyle/style";
import OrderSummary from "../../components/OrderSummary";
import ModalAddress from "../../components/ModalAddress";
import { useTypedSelector } from "../../store/modules";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  OrderSummarySection,
  EmptyCartContainer,
  CartPageContainer,
  CartCardsSection,
  MainPageCart,
} from "./style";

const CartPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
  const cart: Array<IDbProducts> = useTypedSelector((state) => state.cart);
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  return (
    <>
      <Header display="none" />
      <ModalAddress
        showAddressModal={showAddressModal}
        setShowAddressModal={setShowAddressModal}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        <MainPageCart>
          {user && !user.cart.products.length && !cart.length ? (
            <h1>Seu carrinho está vazio!</h1>
          ) : (
            <h1>Meu carrinho</h1>
          )}
          <CartPageContainer>
            {(user && user.cart.products.length > 0) || cart.length > 0 ? (
              <OrderSummarySection>
                <OrderSummary setShowAddressModal={setShowAddressModal} />
              </OrderSummarySection>
            ) : (
              <motion.div
                className="empty"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                }}
              >
                <EmptyCartContainer>
                  <img
                    src={EmptyCart}
                    alt="Imagem ilustrativa de um carrinho vazio"
                  />
                  <Link to="/">
                    <Button
                      backgroundColor={VARIABLES.colorOrange2}
                      color={VARIABLES.colorGray3}
                    >
                      Ver produtos
                    </Button>
                  </Link>
                </EmptyCartContainer>
              </motion.div>
            )}
            <CartCardsSection>
              {user
                ? user.cart.products.map((product, index) => (
                    <CartProductCard
                      key={index}
                      product={product}
                      showDisplay={false}
                    />
                  ))
                : cart.map((product, index) => (
                    <CartProductCard
                      key={index}
                      product={product}
                      showDisplay={false}
                    />
                  ))}
            </CartCardsSection>
          </CartPageContainer>
        </MainPageCart>
      </motion.div>
      <Footer />
    </>
  );
};

export default CartPage;
