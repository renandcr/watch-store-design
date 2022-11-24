import { actionUpdateUserState } from "../../store/modules/user/actions";
import AddressInformation from "../../components/AddressInformation";
import { VARIABLES } from "../../assets/globalStyle/style";
import ModalAddress from "../../components/ModalAddress";
import WebSiteLogo from "../../components/WebSiteLogo";
import { useTypedSelector } from "../../store/modules";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import { useState } from "react";

import {
  MainMyAddressesPageContainer,
  MyAddressesPageContainer,
  SavedAddressesContainer,
  SavedAddressContainer,
  NewAddressContainer,
} from "./style";

import {
  IAddressesDatabase,
  IDatabaseUser,
} from "../../store/modules/user/actions";

const MyAddressesPage: React.FC = (): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const [showAddressModal, setShowAddressModal] = useState<boolean>(false);
  const [isItUpdateEvent, setIsItUpdateEvent] = useState<boolean>(false);
  const [animationOption2, setAnimationOption2] = useState<boolean>(false);
  const [addressToBeUpdated, setAddressToBeUpdated] =
    useState<IAddressesDatabase>();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleRequests = (address_id: string, requestOptions: string) => {
    if (requestOptions === "update-main") {
      api
        .patch(
          `/address/update/${address_id}`,
          { main: true },
          {
            headers: { Authorization: `bearer ${user.token}` },
          }
        )
        .then((_) => {
          api
            .get(`/${user.id}`, {
              headers: {
                Authorization: `bearer ${user.token}`,
              },
            })
            .then((response) => {
              dispatch(actionUpdateUserState(response.data, user.token));
              history.push("/checkout-page");
              toast.success("Endereço principal atualizado com sucesso");
            });
        })
        .catch((err) => toast.error(err.response.data.message));
    }

    if (requestOptions === "delete") {
      api
        .delete(`/address/delete/${address_id}`, {
          headers: {
            Authorization: `bearer ${user.token}`,
          },
        })
        .then((_) => {
          api
            .get(`/${user.id}`, {
              headers: {
                Authorization: `bearer ${user.token}`,
              },
            })
            .then((response) => {
              dispatch(actionUpdateUserState(response.data, user.token));
            });
        })
        .catch((err) => toast.error(err.response.data.message));
    }
  };

  return (
    <>
      <MainMyAddressesPageContainer>
        <motion.div
          className="motion-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MyAddressesPageContainer>
            <WebSiteLogo />
            <h1>Para onde devemos enviar?</h1>
            <SavedAddressesContainer>
              {!user.addresses.length && (
                <h1 className="alert-title">
                  Adicione um endereço para entrega!
                </h1>
              )}
              {user.addresses.map((address) => (
                <SavedAddressContainer key={address.id}>
                  <AddressInformation showDisplay />
                  <div className="button-container">
                    <Button
                      backgroundColor={VARIABLES.colorBlue5}
                      height="36px"
                      onClick={() => {
                        handleRequests(address.id, "update-main");
                      }}
                    >
                      Selecionar este endereço
                    </Button>
                    <div>
                      <Button
                        backgroundColor="#ffffff"
                        height="30px"
                        onClick={() => {
                          setAddressToBeUpdated(address);
                          setShowAddressModal(true);
                          setIsItUpdateEvent(true);
                          setAnimationOption2(true);
                        }}
                      >
                        Atualizar
                      </Button>
                      <Button
                        backgroundColor="#ffffff"
                        height="30px"
                        onClick={() => handleRequests(address.id, "delete")}
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </SavedAddressContainer>
              ))}
            </SavedAddressesContainer>
            <NewAddressContainer>
              {!showAddressModal ? (
                <div className="add-address-top-container">
                  <h1>Deseja adicionar um novo endereço?</h1>
                  <Button
                    backgroundColor={VARIABLES.colorOrange2}
                    onClick={() => {
                      setShowAddressModal(true);
                      setAnimationOption2(true);
                    }}
                    width="145px"
                    height="30px"
                  >
                    Adicionar endereço
                  </Button>
                </div>
              ) : isItUpdateEvent ? (
                <h1 className="optional-title">Atualizar endereço</h1>
              ) : (
                <h1 className="optional-title">Cadastrar novo endereço</h1>
              )}

              {showAddressModal && (
                <ModalAddress
                  isItUpdateEvent={isItUpdateEvent}
                  addressToBeUpdated={addressToBeUpdated}
                  showAddressModal={showAddressModal}
                  setShowAddressModal={setShowAddressModal}
                  setIsItUpdateEvent={setIsItUpdateEvent}
                  animationOption2={animationOption2}
                  setAnimationOption2={setAnimationOption2}
                  showDisplay
                />
              )}
            </NewAddressContainer>
          </MyAddressesPageContainer>
        </motion.div>
      </MainMyAddressesPageContainer>
      <Footer showDisplay />
    </>
  );
};

export default MyAddressesPage;
