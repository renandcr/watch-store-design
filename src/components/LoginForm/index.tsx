import { actionRemoveProductFromCart } from "../../store/modules/cart/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { InsideFormContainer } from "../RegistrationForm/style";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { handleErrorMessages } from "../../assets/methods";
import { VARIABLES } from "../../assets/globalStyle/style";
import { FormContainer } from "../RegistrationForm/style";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import { useTypedSelector } from "../../store/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import UnderLoginContainer from "./style";
import WebSiteLogo from "../WebSiteLogo";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import { useState } from "react";
import Button from "../Button";
import jwt from "jwt-decode";
import * as yup from "yup";

import {
  actionUpdateUserState,
  IDatabaseUser,
  IUserLogin,
} from "../../store/modules/user/actions";

const LoginForm: React.FC = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
  const [clickReleased, setClickReleased] = useState<boolean>(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const submissionMethod = async (data: IUserLogin) => {
    if (clickReleased) {
      setClickReleased(false);
      setTimeout(() => {
        setClickReleased(true);
      }, 2000);
      await api
        .post("/login", data)
        .then((responseToken) => {
          const decode: any = jwt(responseToken.data.token);
          if (!user && cart.length) {
            dispatch(actionRemoveProductFromCart("all"));
            api
              .post(
                `/cart/add/${decode.id_token}`,
                {
                  add_products: { request_type: "first_login", products: cart },
                },
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
                headers: {
                  Authorization: `bearer: ${responseToken.data.token}`,
                },
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
    }
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
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ mb: "10px" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Senha"
            {...register("password")}
          />
        </FormControl>
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
