import { actionSearchProduct } from "../../store/modules/home/actions";
import { IDatabaseUser } from "../../store/modules/user/actions";
import { useTypedSelector } from "../../store/modules/index";
import { IDbProducts } from "../../store/modules/dbProducts";
import { useState, SetStateAction, Dispatch } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

import {
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
  TopContainer,
} from "./style";

export interface IHeader {
  display?: string;
  setMenuVisibility?: Dispatch<SetStateAction<boolean>> | any;
}

const Header: React.FC<IHeader> = ({
  display,
  setMenuVisibility,
}): JSX.Element => {
  const [search, setSearch] = useState("");
  const productCart: Array<IDbProducts> = useTypedSelector(
    (state) => state.cart
  );
  const user: Array<IDatabaseUser> = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <TopContainer display={display}>
        <LogoContainer>
          <span className="watch-store larger">Watch</span>
          <span className="watch-store smaller">Store</span>
        </LogoContainer>
        <div className="input-container input-desktop">
          <input
            type="text"
            placeholder="O que você precisa?"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => dispatch(actionSearchProduct(search))}>
            <FiSearch className="search-icon" />
          </button>
        </div>
        <ul>
          <li>
            <span>
              Bem-vindo :<span className="smile">)</span>,
            </span>
            <span className="header-name">
              {user.length > 0 ? user[0].name : "usuário"}
            </span>
          </li>
          <li className="li-icon-cart">
            <Link to="/cart-page">
              <Badge badgeContent={productCart.length} color={"primary"}>
                <ShoppingCartOutlined className="icon-cart" />
              </Badge>
            </Link>
          </li>
        </ul>
        <div className="input-container input-mobile">
          <input
            type="text"
            placeholder="O que você precisa?"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => dispatch(actionSearchProduct(search))}>
            <FiSearch className="search-icon" />
          </button>
        </div>
      </TopContainer>
      <OptionsContainer display={display}>
        <div onClick={() => setMenuVisibility(true)}>
          <MenuIcon className="menu-icon" />
        </div>
        <ul>
          <Link to="/">
            <li>Voltar</li>
          </Link>
          <Link to="/registration-page">
            <li>Cadastrar</li>
          </Link>
          <Link to="/login-page">
            <li>Entrar</li>
          </Link>
          <Link to="">
            <li>Minha conta</li>
          </Link>
        </ul>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
