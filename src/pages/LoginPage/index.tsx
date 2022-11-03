import { MainLoginPage, LoginPageContainer } from "./style";
import LoginForm from "../../components/LoginForm";
import BigLogo from "../../components/BigLogo";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainLoginPage>
          <LoginPageContainer>
            <BigLogo />
            <LoginForm />
          </LoginPageContainer>
        </MainLoginPage>
      </motion.div>
      <Footer />
    </>
  );
};

export default LoginPage;
