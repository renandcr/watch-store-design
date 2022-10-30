import {
  OrderSummarySection,
  CartPageContainer,
  GreetingContainer,
  CartCardsSection,
  MainPageCart,
} from "./style";
import CartProductCard from "../../components/CartProductCard";
import OrderSummary from "../../components/OrderSummary";
import Header from "../../components/Header";

const CartPage: React.FC = (): JSX.Element => {
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
            <CartProductCard />
          </CartCardsSection>
        </CartPageContainer>
      </MainPageCart>
    </>
  );
};

export default CartPage;
