import { actionSearchProduct } from "../../store/modules/home/actions";
import { useTypedSelector } from "../../store/modules/index";
import { ShoppingCartOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";
import { useState } from "react";

import {
  OptionsContainer,
  HeaderContainer,
  LogoContainer,
  TopContainer,
} from "./style";

const Header: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const cartProducts = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <HeaderContainer>
      <TopContainer>
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
            <span className="header-name">Renan</span>
          </li>
          <li>
            <Link to="/cart-page">
              <Badge badgeContent={cartProducts.length} color={"primary"}>
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
      <OptionsContainer>
        <div>
          <MenuIcon className="menu-icon" />
        </div>
        <ul>
          <Link to="">
            <li>Sair</li>
          </Link>
          <Link to="/">
            <li>Voltar</li>
          </Link>
          <Link to="/registration-page">
            <li>Cadastro</li>
          </Link>
          <Link to="/login-page">
            <li>Login</li>
          </Link>
        </ul>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
