import CartProductCard from "../../components/CartProductCard";
import OrderSummary from "../../components/OrderSummary";
import { useTypedSelector } from "../../store/modules";
import Header from "../../components/Header";

import {
  OrderSummarySection,
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
      <MainPageCart>
        <CartPageContainer>
          <GreetingContainer>Seja bem vindo(a), Harv</GreetingContainer>
          <OrderSummarySection>
            <OrderSummary />
          </OrderSummarySection>
          <CartCardsSection>
            {productCart.map((product, index) => (
              <CartProductCard key={index} product={product} />
            ))}
          </CartCardsSection>
        </CartPageContainer>
      </MainPageCart>
    </>
  );
};

export default CartPage;
