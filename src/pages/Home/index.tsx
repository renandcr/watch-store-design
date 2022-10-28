import Header from "../../components/Header";
import { MainHomeContainer } from "./style";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainHomeContainer></MainHomeContainer>
    </>
  );
};

export default Home;
