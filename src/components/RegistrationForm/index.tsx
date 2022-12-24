import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";
import { handleErrorMessages } from "../../assets/methods";
import { VARIABLES } from "../../assets/globalStyle/style";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTypedSelector } from "../../store/modules";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControl from "@mui/material/FormControl";
import { useHistory, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
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
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];

  const FormSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Não é permitido números nesse campo"
      ),
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
    password: yup
      .string()
      .required("Senha é obrigatória")
      .min(6, "Sua senha deve ter no mínimo 6 dígitos"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais")
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
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                {!updateForm && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ mb: "10px" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            }
            label="Senha"
            placeholder="Mínimo de 6 caracteres"
            defaultValue={updateForm && "password491"}
            {...register("password")}
          />
        </FormControl>
        {errors.password && (
          <p>
            <AiOutlineExclamationCircle />
            {errors.password?.message}
          </p>
        )}
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password">
            Confirmar senha
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                {!updateForm && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ mb: "10px" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            }
            label="Confirmar senha"
            defaultValue={updateForm && "password491"}
            {...register("confirm_password")}
          />
        </FormControl>
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
