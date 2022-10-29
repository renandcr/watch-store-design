import { dbProducts } from "../../store/modules/dbProducts";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import { MainHomeContainer } from "./style";
import { HomeContainer } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainHomeContainer>
        <HomeContainer>
          {dbProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </HomeContainer>
      </MainHomeContainer>
    </>
  );
};

export default Home;
