import { IDbProducts } from "../../store/modules/dbProducts";
import { dbProducts } from "../../store/modules/dbProducts";
import { useTypedSelector } from "../../store/modules";
import ProductCard from "../../components/ProductCard";
import { IHeaderHiden } from "../../components/Header";
import { items } from "../../store/modules/dbImages";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MainHomeContainer } from "./style";
import Menu from "../../components/Menu";
import { HomeContainer } from "./style";
import { motion } from "framer-motion";
import { useState } from "react";

const Home: React.FC = (): JSX.Element => {
  const [isVisible, setVisibility] = useState<IHeaderHiden | any>(false);

  const researchProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.home
  );

  return (
    <>
      <Header setVisibility={setVisibility} />
      <Menu setVisibility={setVisibility} isVisible={isVisible} />
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
          <h1>Relógios</h1>
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
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
