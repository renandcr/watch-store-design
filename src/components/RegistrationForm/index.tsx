import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";
import { handleErrorMessages } from "../../assets/methods";
import { VARIABLES } from "../../assets/globalStyle/style";
import { useTypedSelector } from "../../store/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import WebSiteLogo from "../WebSiteLogo";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import Button from "../Button";
import * as yup from "yup";

import {
  actionUpdateUserState,
  IUserRegistration,
  IDatabaseUser,
} from "../../store/modules/user/actions";

import {
  LoginShortcutContainer,
  InsideFormContainer,
  FormContainer,
} from "./style";

export interface IRegistrationForm {
  setUpdateForm?: Dispatch<SetStateAction<boolean>>;
  updateForm?: boolean;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({
  setUpdateForm,
  updateForm,
}): JSX.Element => {
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  const FormSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    last_name: yup
      .string()
      .required("Sobrenome é obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Não é permitido números nesse campo"
      ),
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "Senha incorreta")
      .required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegistration>({ resolver: yupResolver(FormSchema) });

  const [clickReleased, setClickReleased] = useState<boolean>(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const submissionMethod = (data: IUserRegistration) => {
    delete data.confirm_password;
    if (data.password === "password491") data.password = "";

    if (clickReleased) {
      setClickReleased(false);
      setTimeout(() => {
        setClickReleased(true);
      }, 2000);
      !updateForm
        ? api
            .post("/create", data)
            .then((_) => {
              history.push("/login-page");
              toast.success("Cadastro realizado com sucesso");
            })
            .catch((err) => handleErrorMessages(err.response.data.message))
        : api
            .patch(`/update/${user.id}`, data, {
              headers: { Authorization: `bearer ${user.token}` },
            })
            .then((_) => {
              setUpdateForm?.(false);
              toast.success("Dados atualizados com sucesso");
              api
                .get(`/${user.id}`, {
                  headers: { Authorization: `bearer ${user.token}` },
                })
                .then((response) => {
                  dispatch(actionUpdateUserState(response.data, user.token));
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => handleErrorMessages(err.response.data.message));
    }
  };

  return (
    <FormContainer>
      {!updateForm && <WebSiteLogo />}
      <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
        {!updateForm && <h1>Criar conta</h1>}
        <TextField
          className="textField"
          label="Nome"
          type="text"
          defaultValue={updateForm && user.name}
          autoFocus
          {...register("name")}
        />
        {errors?.name && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.name?.message}
          </p>
        )}
        <TextField
          className="textField"
          label="Sobrenome"
          type="text"
          defaultValue={updateForm && user.last_name}
          {...register("last_name")}
        />
        {errors.last_name && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.last_name?.message}
          </p>
        )}
        <TextField
          className="textField"
          label="E-mail"
          type="email"
          defaultValue={updateForm && user.email}
          {...register("email")}
        />
        {errors.email && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.email?.message}
          </p>
        )}
        <TextField
          className="textField"
          label="Senha"
          type="password"
          defaultValue={updateForm && "password491"}
          {...register("password")}
        />
        {errors.password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.password?.message}
          </p>
        )}
        <TextField
          className="textField"
          label="Confirmar senha"
          type="password"
          defaultValue={updateForm && "password491"}
          {...register("confirm_password")}
        />
        {errors.confirm_password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.confirm_password?.message}
          </p>
        )}
        {!updateForm && (
          <LoginShortcutContainer>
            <span>Já possui conta?</span>
            <Link to="/login-page">
              <span>Fazer login</span>
            </Link>
          </LoginShortcutContainer>
        )}
        {!updateForm ? (
          <Button backgroundColor={VARIABLES.colorBlue5}>Continuar</Button>
        ) : (
          <div className="button-container">
            <Button backgroundColor={VARIABLES.colorBlue6}>
              Salvar alterações
            </Button>
            <Button
              backgroundColor={VARIABLES.colorRed2}
              onClick={() => setUpdateForm?.(false)}
            >
              Cancelar
            </Button>
          </div>
        )}
      </InsideFormContainer>
    </FormContainer>
  );
};

export default RegistrationForm;
