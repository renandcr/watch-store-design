import { MainMyAccountPageContainer, MyAccountPageContainer } from "./style";
import { IDatabaseUser } from "../../store/modules/user/actions";
import RegistrationForm from "../../components/RegistrationForm";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MyAccountPage: React.FC = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const [updateForm, setUpdateForm] = useState<boolean>(false);

  return (
    <>
      <MainMyAccountPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        >
          <WebSiteLogo />
          <div className="title-container">
            {updateForm ? (
              <h1>Editar informações de acesso</h1>
            ) : (
              <>
                <h1>Informações de acesso</h1>
                <span onClick={() => setUpdateForm(true)}>
                  <EditIcon className="pen-icon" />
                  Editar
                </span>
              </>
            )}
          </div>
          {updateForm ? (
            <motion.div
              className="motion-container-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
            >
              <RegistrationForm
                updateForm={updateForm}
                setUpdateForm={setUpdateForm}
              />
            </motion.div>
          ) : (
            <MyAccountPageContainer>
              <ul>
                <li>
                  <span>Nome:</span>
                  <span className="background">{user.name}</span>
                </li>
                <li>
                  <span>Sobrenome:</span>
                  <span className="background">{user.last_name}</span>
                </li>
                <li>
                  <span>E-mail:</span>
                  <span className="background">{user.email}</span>
                </li>
                <li>
                  <span>Senha:</span>
                  <span className="background">{"********"}</span>
                </li>
              </ul>
            </MyAccountPageContainer>
          )}
        </motion.div>
      </MainMyAccountPageContainer>
      <Footer showDisplay />
    </>
  );
};

export default MyAccountPage;
