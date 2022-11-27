import { InsideFormContainer } from "../RegistrationForm/style";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { VARIABLES } from "../../assets/globalStyle/style";
import { FormContainer } from "../RegistrationForm/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import UnderLoginContainer from "./style";
import WebSiteLogo from "../WebSiteLogo";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import Button from "../Button";
import jwt from "jwt-decode";
import * as yup from "yup";

import {
  actionUpdateUserState,
  IUserLogin,
} from "../../store/modules/user/actions";

const LoginForm: React.FC = (): JSX.Element => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(formSchema) });

  const dispatch = useDispatch();
  const history = useHistory();

  const submissionMethod = async (data: IUserLogin) => {
    await api
      .post("/login", data)
      .then((responseToken) => {
        const decode: any = jwt(responseToken.data.token);
        api
          .get(`/${decode.id_token}`, {
            headers: { Authorization: `bearer: ${responseToken.data.token}` },
          })
          .then((response) => {
            history.push("/cart-page");
            toast.success("Login realizado com sucesso");
            dispatch(
              actionUpdateUserState(response.data, responseToken.data.token)
            );
          });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <FormContainer>
      <WebSiteLogo />
      <InsideFormContainer onSubmit={handleSubmit(submissionMethod)}>
        <h1>Fazer login</h1>
        <TextField
          className="textField"
          type="text"
          label="E-mail"
          autoFocus
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
          {...register("password")}
        />
        {errors.password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.password?.message}
          </p>
        )}
        <Button backgroundColor={VARIABLES.colorBlue6}>Login</Button>
        <UnderLoginContainer>
          <div>
            <span className="border"></span>
            <span className="border-middle">É novo na Watch Store?</span>
            <span className="border"></span>
          </div>
          <Link to="/registration-page">
            <Button backgroundColor={VARIABLES.colorGreen1}>
              Crie sua conta
            </Button>
          </Link>
        </UnderLoginContainer>
      </InsideFormContainer>
    </FormContainer>
  );
};

export default LoginForm;
