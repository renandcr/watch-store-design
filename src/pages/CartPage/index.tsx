import CartProductCard from "../../components/CartProductCard";
import EmptyCart from "../../assets/images/carrinho_vazio.png";
import OrderSummary from "../../components/OrderSummary";
import { useTypedSelector } from "../../store/modules";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { motion } from "framer-motion";

import {
  OrderSummarySection,
  EmptyCartContainer,
  CartPageContainer,
  GreetingContainer,
  CartCardsSection,
  MainPageCart,
} from "./style";

const CartPage: React.FC = (): JSX.Element => {
  const productCart = useTypedSelector((state) => state.cart);

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainPageCart>
          <CartPageContainer>
            {/* {productCart.length > 0 ? (
              <GreetingContainer>
                Seja bem-vindo :<span>)</span>, Harv
              </GreetingContainer>
            ) : (
              <GreetingContainer>Seu carrinho está vazio!</GreetingContainer>
            )} */}
            {productCart.length > 0 ? (
              <OrderSummarySection>
                <OrderSummary />
              </OrderSummarySection>
            ) : (
              <EmptyCartContainer>
                <img
                  src={EmptyCart}
                  alt="Imagem ilustrativa de um carinho vazio"
                />
              </EmptyCartContainer>
            )}
            <CartCardsSection>
              {productCart.map((product, index) => (
                <CartProductCard key={index} product={product} />
              ))}
            </CartCardsSection>
          </CartPageContainer>
        </MainPageCart>
        <Footer />
      </motion.div>
    </>
  );
};

export default CartPage;
