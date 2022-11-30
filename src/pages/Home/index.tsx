import { MainHomeContainer, HomeContainer } from "./style";
import { useTypedSelector } from "../../store/modules";
import ProductCard from "../../components/ProductCard";
import { items } from "../../store/modules/dbImages";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Menu from "../../components/Menu";
import { motion } from "framer-motion";
import api from "../../assets/axios";

import {
  actionDatabaseProducts,
  IDbProducts,
} from "../../store/modules/dbProducts/actions";

export interface IHome {
  areResearchProducts?: boolean;
}

const Home: React.FC<IHome> = (): JSX.Element => {
  const [menuIsVisible, setMenuVisibility] = useState<boolean>(false);

  const researchProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.home
  );

  const dbProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get("/product/list")
      .then((response) => {
        dispatch(actionDatabaseProducts(response.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <>
      <Header setMenuVisibility={setMenuVisibility} />
      <Menu
        setMenuVisibility={setMenuVisibility}
        menuIsVisible={menuIsVisible}
      />
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0, transition: { type: "spring", stiffness: 100 } }}
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
          <HomeContainer areResearchProducts>
            {researchProducts.length > 0 &&
              researchProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
          </HomeContainer>
          {!researchProducts.length && (
            <h1 className="first-title">Relógios Masculinos</h1>
          )}
          <HomeContainer>
            {!researchProducts.length &&
              dbProducts.map(
                (product, index) =>
                  product.genre === "male" && (
                    <ProductCard key={index} product={product} />
                  )
              )}
          </HomeContainer>
          {!researchProducts.length && <h1>Relógios Femininos</h1>}
          <HomeContainer>
            {!researchProducts.length &&
              dbProducts.map(
                (product, index) =>
                  product.genre === "female" && (
                    <ProductCard key={index} product={product} />
                  )
              )}
          </HomeContainer>
        </MainHomeContainer>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
