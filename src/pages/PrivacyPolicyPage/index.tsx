import PrivacyPolicy from "../../components/PrivacyPolicy";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { motion } from "framer-motion";
import { useEffect } from "react";

import {
  MainPrivacyPolicyPageContainer,
  PrivacyPolicyPageContainer,
} from "./style";

const PrivacyPolicyPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header display="none" noPosition noShadow />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <MainPrivacyPolicyPageContainer>
          <PrivacyPolicyPageContainer>
            <PrivacyPolicy />
          </PrivacyPolicyPageContainer>
        </MainPrivacyPolicyPageContainer>
      </motion.div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
