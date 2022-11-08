import CloseIcon from "@mui/icons-material/Close";
import { IHeaderHiden } from "../Header";
import { MenuContainer } from "./style";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu: React.FC<IHeaderHiden> = ({
  setVisibility,
  isVisible,
}): JSX.Element => {
  return (
    <>
      {isVisible && (
        <MenuContainer>
          <motion.ul
            className="menu"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <li className="first-child">
              <span>
                Olá, <span className="name">Renan</span>
              </span>
              <span className="close-icon" onClick={() => setVisibility(false)}>
                <CloseIcon />
              </span>
            </li>
            <Link to="/">
              <li className="up">Minha conta</li>
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
              <li className="up">Relógios Masculinos</li>
            </Link>
            <Link to="">
              <li>Relógios Femininos</li>
            </Link>
            <Link to="">
              {" "}
              <li>Perfumes Masculinos</li>
            </Link>
            <Link to="">
              <li className="under">Perfumes Femininos</li>
            </Link>
            <Link to="">
              <li className="up">Política de Privacidade</li>
            </Link>
            <Link to="">
              <li className="under">Sair</li>
            </Link>
          </motion.ul>
        </MenuContainer>
      )}
    </>
  );
};

export default Menu;
