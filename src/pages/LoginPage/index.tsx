import { MainLoginPage, LoginPageContainer } from "./style";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import { motion } from "framer-motion";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainLoginPage>
          <LoginPageContainer>
            <LoginForm />
          </LoginPageContainer>
        </MainLoginPage>
      </motion.div>
    </>
  );
};

export default LoginPage;
