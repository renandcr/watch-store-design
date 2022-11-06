import { IDbProducts } from "../../store/modules/dbProducts";
import { dbProducts } from "../../store/modules/dbProducts";
import { useTypedSelector } from "../../store/modules";
import ProductCard from "../../components/ProductCard";
import { items } from "../../store/modules/dbImages";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainHomeContainer } from "./style";
import { HomeContainer } from "./style";
import { motion } from "framer-motion";

const Home: React.FC = (): JSX.Element => {
  const researchProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.home
  );

  return (
    <>
      <Header />
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <MainHomeContainer>
          <AliceCarousel
            items={items}
            autoPlayInterval={6000}
            autoPlayDirection="ltr"
            autoPlay={true}
            infinite={true}
            mouseTracking
          />
          <h1>Acessórios</h1>
          <HomeContainer>
            {researchProducts.length > 0
              ? researchProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              : dbProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
          </HomeContainer>
        </MainHomeContainer>
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
