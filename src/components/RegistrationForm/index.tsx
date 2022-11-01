import { FormContainer, LoginShortcutContainer } from "./style";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../Button";
import * as yup from "yup";

export interface IRegistration {
  name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password?: string;
}

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
  } = useForm<IRegistration>({ resolver: yupResolver(FormSchema) });

  const submissionMethod = (data: IRegistration) => {
    delete data.confirm_password;
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(submissionMethod)}>
      <h1>Cadastre-se aqui</h1>
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
          <span>Faça o login</span>
        </Link>
      </LoginShortcutContainer>
      <Button>Cadastrar</Button>
    </FormContainer>
  );
};

export default RegistrationForm;
