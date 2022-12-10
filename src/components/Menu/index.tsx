import { actionSearchProduct } from "../../store/modules/home/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { useTypedSelector } from "../../store/modules/index";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { MenuContainer } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const dispatch = useDispatch();

  return (
    <>
      {menuIsVisible && (
        <MenuContainer>
          <motion.ul
            className="menu"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 1, opacity: 1, transition: { duration: 0.5 } }}
          >
            <li className="first-child">
              <span>
                Olá, <span className="name">Renan</span>
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
    </>
  );
};

export default Menu;
