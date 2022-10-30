import { MainPageCart, CartPageContainer, CartCardsSection } from "./style";
import CartProductCard from "../../components/CartProductCard";
import Header from "../../components/Header";

const CartPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainPageCart>
        <CartPageContainer>
          <CartCardsSection>
            <CartProductCard />
          </CartCardsSection>
        </CartPageContainer>
      </MainPageCart>
    </>
  );
};

export default CartPage;
