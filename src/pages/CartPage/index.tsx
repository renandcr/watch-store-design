import CartProductCard from "../../components/CartProductCard";
import EmptyCart from "../../assets/images/carrinho_vazio.png";
import { IDbProducts } from "../../store/modules/dbProducts";
import { VARIABLES } from "../../assets/globalStyle/style";
import OrderSummary from "../../components/OrderSummary";
import ModalAddress from "../../components/ModalAddress";
import { useTypedSelector } from "../../store/modules";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

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

  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);

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
          {!productCart.length ? (
            <h1>Seu carrinho está vazio!</h1>
          ) : (
            <h1>Meu carrinho</h1>
          )}
          <CartPageContainer>
            {productCart.length > 0 ? (
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
                    <Button backgroundColor={VARIABLES.colorBlue6}>
                      Ver produtos
                    </Button>
                  </Link>
                </EmptyCartContainer>
              </motion.div>
            )}
            <CartCardsSection>
              {productCart.map((product, index) => (
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
