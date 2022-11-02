import { MainRegistrationForm, RegistrationPageContainer } from "./style";
import RegistrationForm from "../../components/RegistrationForm";
import BigLogo from "../../components/BigLogo";
import { motion } from "framer-motion";

const RegistrationPage: React.FC = (): JSX.Element => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <MainRegistrationForm>
          <RegistrationPageContainer>
            <BigLogo />
            <RegistrationForm />
          </RegistrationPageContainer>
        </MainRegistrationForm>
      </motion.div>
    </>
  );
};

export default RegistrationPage;
