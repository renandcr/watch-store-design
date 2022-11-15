import { IUserRegistration } from "../../store/modules/users/actions";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import WebSiteLogo from "../WebSiteLogo";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import Button from "../Button";
import * as yup from "yup";

import {
  LoginShortcutContainer,
  InsideFormContainer,
  FormContainer,
} from "./style";

const RegistrationForm: React.FC = (): JSX.Element => {
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

  const history = useHistory();

  const submissionMethod = (data: IUserRegistration) => {
    delete data.confirm_password;

    api
      .post("/create", data)
      .then((_) => {
        history.push("/login-page");
        toast.success("Cadastro realizado com sucesso");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <FormContainer>
      <WebSiteLogo />
      <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
        <h1>Criar conta</h1>
        <TextField
          className="textField"
          label="Nome"
          type="text"
          autoComplete="currente-password"
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
          autoComplete="currente-password"
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
          autoComplete="currente-password"
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
          autoComplete="currente-password"
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
          autoComplete="currente-password"
          {...register("confirm_password")}
        />
        {errors.confirm_password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.confirm_password?.message}
          </p>
        )}
        <LoginShortcutContainer>
          <span>Já possui conta?</span>
          <Link to="/login-page">
            <span>Fazer login</span>
          </Link>
        </LoginShortcutContainer>
        <Button>Continuar</Button>
      </InsideFormContainer>
    </FormContainer>
  );
};

export default RegistrationForm;
