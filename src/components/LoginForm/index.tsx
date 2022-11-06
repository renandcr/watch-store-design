import { InsideFormContainer } from "../RegistrationForm/style";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FormContainer } from "../RegistrationForm/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import WebSiteLogo from "../WebSiteLogo";
import Button from "../Button";
import * as yup from "yup";

export interface ILogin {
  email: string;
  password: string;
}

const LoginForm: React.FC = (): JSX.Element => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(formSchema) });

  const submissionMethod = (data: ILogin) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <WebSiteLogo marginBottom="90px" />
      <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
        <h1>Fazer login</h1>
        <TextField
          className="textField"
          type="text"
          label="E-mail"
          autoComplete="current-password"
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
          type="password"
          label="Senha"
          autoComplete="current-password"
          {...register("password")}
        />
        {errors.password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.password?.message}
          </p>
        )}
        <Button>Login</Button>
      </InsideFormContainer>
    </FormContainer>
  );
};

export default LoginForm;
