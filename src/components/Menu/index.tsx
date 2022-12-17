import { actionSearchProduct } from "../../store/modules/home/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules/index";
import { motion, AnimatePresence } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { MenuContainer } from "./style";
import { Link } from "react-router-dom";

declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
  }
}

interface IMenu {
  setMenuVisibility: Dispatch<SetStateAction<boolean>>;
  menuIsVisible: boolean;
}

const Menu: React.FC<IMenu> = ({
  setMenuVisibility,
  menuIsVisible,
}): JSX.Element => {
  const dbProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.products
  );
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const dispatch = useDispatch();

  if (menuIsVisible) {
    document.body.style.overflow = "hidden";
  } else document.body.style.overflow = "auto";

  return (
    <AnimatePresence>
      {menuIsVisible && (
        <MenuContainer>
          <motion.ul
            key="menu"
            className="menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0, transition: { duration: 0.5 } }}
            exit={{ x: "-100%", transition: { duration: 0.5 } }}
          >
            <li className="first-child">
              <span>
                Olá, <span className="name">{user.name}</span>
              </span>
              <span
                className="close-icon"
                onClick={() => setMenuVisibility(false)}
              >
                <CloseIcon />
              </span>
            </li>
            <Link to="/my-account-page">
              <li className="up">Minha conta</li>
            </Link>
            <Link to="/my-requests-page">
              <li className="up">Seus pedidos</li>
            </Link>
            <Link to="/registration-page">
              <li>Cadastrar</li>
            </Link>
            <Link to="/login-page">
              <li>Entrar</li>
            </Link>
            <Link to="/cart-page">
              <li className="under">Carrinho</li>
            </Link>
            <Link to="">
              {" "}
              <li
                className="up"
                onClick={() => {
                  dispatch(actionSearchProduct("male", dbProducts));
                  setMenuVisibility(false);
                }}
              >
                Relógios Masculinos
              </li>
            </Link>
            <Link to="">
              <li
                onClick={() => {
                  dispatch(actionSearchProduct("female", dbProducts));
                  setMenuVisibility(false);
                }}
              >
                Relógios Femininos
              </li>
            </Link>
            <Link to="/privacy-policy-page">
              <li className="up">Política de Privacidade</li>
            </Link>
            <Link
              to="/"
              onClick={() => {
                localStorage.clear();
                setMenuVisibility(false);
              }}
            >
              <li className="under" onClick={() => window.location.reload()}>
                Sair da conta
              </li>
            </Link>
          </motion.ul>
        </MenuContainer>
      )}
    </AnimatePresence>
  );
};

export default Menu;
