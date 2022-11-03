import { dbProducts } from "../../store/modules/dbProducts";
import ProductCard from "../../components/ProductCard";
import Header from "../../components/Header";
import { MainHomeContainer } from "./style";
import { HomeContainer } from "./style";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <MainHomeContainer>
          <HomeContainer>
            {dbProducts.map((product, index) => (
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
