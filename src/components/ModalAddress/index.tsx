import { FormContainer, InsideFormContainer } from "../RegistrationForm/style";
import { actionUserLogin } from "../../store/modules/users/actions";
import { useTypedSelector } from "../../store/modules/index";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { SetStateAction, Dispatch } from "react";
import { ModalAddressContainer } from "./style";
import api from "../../assets/axios/index";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "../Button";
import * as yup from "yup";

interface IUserAddress {
  street: string;
  district: string;
  house_number: number;
  complement: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
}

interface IAddressModal {
  showAddressModal: boolean;
  setShowAddressModal: Dispatch<SetStateAction<boolean>>;
}

const ModalAddress: React.FC<IAddressModal> = ({
  showAddressModal,
  setShowAddressModal,
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
      .max(2, "Não ultrapasse o limite de 5 caracteres"),
    zip_code: yup
      .string()
      .required("Cep é obrigatório")
      .max(8, "Forneça um cep válido(somente números, sem hífen)"),
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

  const user = useTypedSelector((state) => state.users);
  const dispatch = useDispatch();

  const submissionMethod = async (data: IUserAddress) => {
    await api
      .post(`/address/create/${user[0].id}`, data, {
        headers: {
          Authorization: `bearer: ${user[0].token}`,
        },
      })
      .then((_) => {
        toast.success("Endereço cadastrado com sucesso");
        api
          .get(`/${user[0].id}`, {
            headers: { Authorization: `bearer ${user[0].token}` },
          })
          .then((response) => {
            dispatch(actionUserLogin(response.data, user[0].token));
          });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      {showAddressModal && (
        <ModalAddressContainer>
          <motion.div
            className="menu"
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FormContainer className="form-container">
              <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
                <h1>Cadastrar endereço</h1>
                <TextField
                  className="textField"
                  type="text"
                  label="Endereço"
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
                  {...register("phone")}
                />
                {errors.phone && (
                  <p>
                    <AiOutlineExclamationCircle />
                    {errors.phone?.message}
                  </p>
                )}
                <div className="button-container">
                  <Button
                    onClick={() => {
                      setTimeout(() => setShowAddressModal(false), 2000);
                    }}
                  >
                    Finalizar Cadastro
                  </Button>
                  <Button
                    backgroundColor="red"
                    onClick={() => setShowAddressModal(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </InsideFormContainer>
            </FormContainer>
          </motion.div>
        </ModalAddressContainer>
      )}
    </>
  );
};

export default ModalAddress;
