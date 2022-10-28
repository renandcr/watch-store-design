import Header from "../../components/Header";
import { MainHomeContainer } from "./style";
import { HomeContainer } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainHomeContainer></MainHomeContainer>
      <HomeContainer></HomeContainer>
    </>
  );
};

export default Home;
