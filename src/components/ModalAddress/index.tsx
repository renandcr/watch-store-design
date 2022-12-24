import { FormContainer, InsideFormContainer } from "../RegistrationForm/style";
import { useTypedSelector } from "../../store/modules/index";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { handleErrorMessages } from "../../assets/methods";
import { SetStateAction, Dispatch, useState } from "react";
import { VARIABLES } from "../../assets/globalStyle/style";
import { motion, AnimatePresence } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalAddressContainer } from "./style";
import { useHistory } from "react-router-dom";
import api from "../../assets/axios/index";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Button from "../Button";
import * as yup from "yup";

import {
  actionUpdateUserState,
  IAddressesDatabase,
  IUserAddress,
} from "../../store/modules/user/actions";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

export interface IAddressModal {
  setAnimationOption2?: Dispatch<SetStateAction<boolean>>;
  setShowAddressModal?: Dispatch<SetStateAction<boolean>>;
  setIsItUpdateEvent?: Dispatch<SetStateAction<boolean>>;
  addressToBeUpdated?: IAddressesDatabase;
  animationOption2?: boolean;
  showAddressModal?: boolean;
  isItUpdateEvent?: boolean;
  showDisplay?: boolean;
}

const ModalAddress: React.FC<IAddressModal> = ({
  setAnimationOption2,
  setShowAddressModal,
  setIsItUpdateEvent,
  addressToBeUpdated,
  showAddressModal,
  animationOption2,
  isItUpdateEvent,
  showDisplay,
}): JSX.Element => {
  const formSchema = yup.object().shape({
    street: yup
      .string()
      .required("Endereço é obrigatório")
      .max(50, "Não ultrapasse o limite de 50 caracteres"),
    district: yup
      .string()
      .required("Bairro é obrigatório")
      .max(50, "Não ultrapasse o limite de 50 caracteres"),
    house_number: yup
      .string()
      .required("Número da casa é obrigatório")
      .max(10, "Não ultrapasse o limite de 10 caracteres"),
    complement: yup
      .string()
      .max(50, "Não ultrapasse o limite de 50 caracteres"),
    city: yup
      .string()
      .required("Cidade é obrigatório")
      .max(50, "Não ultrapasse o limite de 50 caracteres"),
    state: yup
      .string()
      .required("Estado é obrigatório")
      .max(2, "Não ultrapasse o limite de 2 caracteres"),
    zip_code: yup
      .string()
      .required("Cep é obrigatório")
      .matches(
        /^[0-9]{8}$/,
        "Forneça um cep válido(8 dígitos, somente números, sem hífen)"
      ),
    phone: yup
      .string()
      .required("Telefone é obrigatório")
      .max(14, "Não ultrapasse o limite de 14 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserAddress>({ resolver: yupResolver(formSchema) });

  const [clickReleased, setClickReleased] = useState<boolean>(true);
  const user = useTypedSelector((state) => state.user)[0];
  const dispatch = useDispatch();
  const history = useHistory();

  const submissionMethod = async (data: IUserAddress) => {
    setAnimationOption2?.(false);
    if (clickReleased) {
      setClickReleased(false);
      setTimeout(() => {
        setClickReleased(true);
      }, 4000);
      isItUpdateEvent
        ? await api
            .patch(`/address/update/${addressToBeUpdated?.id}`, data, {
              headers: { Authorization: `bearer ${user.token}` },
            })
            .then((_) => {
              setIsItUpdateEvent?.(false);
              history.push("/checkout-page");
              toast.success("Endereço atualizado com sucesso");
              api
                .get(`/${user.id}`, {
                  headers: {
                    Authorization: `bearer ${user.token}`,
                  },
                })
                .then((response) => {
                  dispatch(actionUpdateUserState(response.data, user.token));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) =>
              handleErrorMessages(err.response.data.message, history)
            )
        : await api
            .post(`/address/create/${user.id}`, data, {
              headers: {
                Authorization: `bearer: ${user.token}`,
              },
            })
            .then((_) => {
              setTimeout(() => {
                history.push("/checkout-page");
                document.body.style.overflow = "auto";
                toast.success("Endereço cadastrado com sucesso");
                setShowAddressModal?.(false);
              }, 2000);
              api
                .get(`/${user.id}`, {
                  headers: { Authorization: `bearer ${user.token}` },
                })
                .then((response) => {
                  dispatch(actionUpdateUserState(response.data, user.token));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) =>
              handleErrorMessages(err.response.data.message, history)
            );
    }
  };

  const variants1 = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  const variants2 = {
    visible: { y: 1, transition: { duration: 0.5 } },
    hidden: { y: "-100%" },
    exit: { y: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {showAddressModal && (
        <ModalAddressContainer showDisplay={showDisplay}>
          <motion.div
            className="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationOption2 ? variants1 : variants2}
          >
            <FormContainer className="form-container">
              <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
                <h1>Cadastrar endereço</h1>
                <TextField
                  className="textField"
                  type="text"
                  label="Endereço"
                  autoFocus={true}
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.street : null
                  }
                  {...register("street")}
                />
                {errors.street && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.street?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Bairro"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.district : null
                  }
                  {...register("district")}
                />
                {errors.district && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.district?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Número da residência"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.house_number : null
                  }
                  placeholder="Ex: Número ou s/n"
                  {...register("house_number")}
                />
                {errors.house_number && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.house_number?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Complemento (opcional)"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.complement : null
                  }
                  placeholder="Ex: Apartamento, sala, conjunto, edifío, andar, etc."
                  {...register("complement")}
                />
                {errors.complement && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.complement?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Cidade"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.city : null
                  }
                  {...register("city")}
                />
                {errors.city && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.city?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Estado"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.state : null
                  }
                  placeholder="Ex: PR"
                  {...register("state")}
                />
                {errors.state && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.state?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Cep"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.zip_code : null
                  }
                  placeholder="Ex: 87655544"
                  {...register("zip_code")}
                />
                {errors.zip_code && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.zip_code?.message}
                  </p>
                )}
                <TextField
                  className="textField"
                  type="text"
                  label="Telefone"
                  defaultValue={
                    isItUpdateEvent ? addressToBeUpdated?.phone : null
                  }
                  {...register("phone")}
                />
                {errors.phone && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.phone?.message}
                  </p>
                )}
                <div className="button-container">
                  <Button backgroundColor={VARIABLES.colorBlue6}>
                    Salvar endereço
                  </Button>
                  <Button
                    backgroundColor={VARIABLES.colorRed2}
                    onClick={(e) => {
                      setShowAddressModal?.(false);
                      setIsItUpdateEvent?.(false);
                      setAnimationOption2?.(false);
                      e.preventDefault();
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </InsideFormContainer>
            </FormContainer>
          </motion.div>
        </ModalAddressContainer>
      )}
    </AnimatePresence>
  );
};

export default ModalAddress;
