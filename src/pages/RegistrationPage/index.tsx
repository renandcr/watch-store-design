import { MainRegistrationForm, RegistrationPageContainer } from "./style";
import RegistrationForm from "../../components/RegistrationForm";
import Header from "../../components/Header";
import { motion } from "framer-motion";

const RegistrationPage: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainRegistrationForm>
          <RegistrationPageContainer>
            <RegistrationForm />
          </RegistrationPageContainer>
        </MainRegistrationForm>
      </motion.div>
    </>
  );
};

export default RegistrationPage;
