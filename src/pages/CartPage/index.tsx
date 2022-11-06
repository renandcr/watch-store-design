import CartProductCard from "../../components/CartProductCard";
import EmptyCart from "../../assets/images/carrinho_vazio.png";
import OrderSummary from "../../components/OrderSummary";
import { useTypedSelector } from "../../store/modules";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
  const productCart = useTypedSelector((state) => state.cart);

  return (
    <>
      <Header display="none" />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainPageCart>
          <h1>Meu carrinho</h1>
          <CartPageContainer>
            {productCart.length > 0 ? (
              <OrderSummarySection>
                <OrderSummary />
              </OrderSummarySection>
            ) : (
              <EmptyCartContainer>
                <img
                  src={EmptyCart}
                  alt="Imagem ilustrativa de um carrinho vazio"
                />
                <h2>Carrinho vazio!</h2>
                <Link to="/">
                  <Button>Ver produtos</Button>
                </Link>
              </EmptyCartContainer>
            )}
            <CartCardsSection>
              {productCart.map((product, index) => (
                <CartProductCard key={index} product={product} />
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
