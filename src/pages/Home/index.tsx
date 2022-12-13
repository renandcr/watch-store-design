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

const Home: React.FC = (): JSX.Element => {
  const [menuIsVisible, setMenuVisibility] = useState<boolean>(false);
  const researchProducts: Array<IDbProducts & { no_result: string }> =
    useTypedSelector((state) => state.home);
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
  }, [dispatch, researchProducts]);

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
          {!researchProducts.length && (
            <AliceCarousel
              items={items}
              autoPlayInterval={6000}
              autoPlayDirection="ltr"
              autoPlay={true}
              infinite={true}
              mouseTracking
            />
          )}
          {researchProducts.length > 0 && researchProducts[0]["no_result"] && (
            <h1 className="results no-result">
              {researchProducts[0]["no_result"]}
            </h1>
          )}
          {researchProducts.length > 0 && !researchProducts[0]["no_result"] && (
            <h1 className="results">Resultados da busca</h1>
          )}
          <HomeContainer>
            {researchProducts.length > 0 &&
              !researchProducts[0]["no_result"] &&
              researchProducts.map((current, index) => (
                <ProductCard key={index} current={current} />
              ))}
          </HomeContainer>
          {!researchProducts.length && (
            <h1 className="first-title">Relógios Masculinos</h1>
          )}
          <HomeContainer>
            {!researchProducts.length &&
              dbProducts.map(
                (current, index) =>
                  current.product.genre === "male" && (
                    <ProductCard key={index} current={current} />
                  )
              )}
          </HomeContainer>
          {!researchProducts.length && <h1>Relógios Femininos</h1>}
          <HomeContainer>
            {!researchProducts.length &&
              dbProducts.map(
                (current, index) =>
                  current.product.genre === "female" && (
                    <ProductCard key={index} current={current} />
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
