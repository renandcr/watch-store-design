import { actionRemoveProductFromCart } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { InsideFormContainer } from "../RegistrationForm/style";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { handleErrorMessages } from "../../assets/methods";
import { VARIABLES } from "../../assets/globalStyle/style";
import { FormContainer } from "../RegistrationForm/style";
import { useTypedSelector } from "../../store/modules";
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
  IDatabaseUser,
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

  const cart: Array<IDbProducts> = useTypedSelector((state) => state.cart);
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const dispatch = useDispatch();
  const history = useHistory();

  const submissionMethod = async (data: IUserLogin) => {
    await api
      .post("/login", data)
      .then((responseToken) => {
        const decode: any = jwt(responseToken.data.token);
        if (!user && cart.length) {
          let product_id: Array<string> = [];
          for (let current in cart) product_id.push(cart[current].product.id);
          dispatch(actionRemoveProductFromCart("all"));
          api
            .post(
              `/cart/add/${decode.id_token}`,
              { product_id: ["first-login", ...product_id] },
              {
                headers: {
                  Authorization: `bearer ${responseToken.data.token}`,
                },
              }
            )
            .then()
            .catch((err) => console.log(err));
        }
        setTimeout(() => {
          api
            .get(`/${decode.id_token}`, {
              headers: { Authorization: `bearer: ${responseToken.data.token}` },
            })
            .then((response) => {
              response.data.cart.productCart.length
                ? history.push("/cart-page")
                : history.push("/");

              dispatch(
                actionUpdateUserState(response.data, responseToken.data.token)
              );
              toast.success("Login realizado com sucesso");
            })
            .catch((err) => console.log(err));
        }, 1000);
      })
      .catch((err) => handleErrorMessages(err.response.data.message));
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
        <Button backgroundColor={VARIABLES.colorBlue5}>Entrar</Button>
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
