import { actionSearchProduct } from "../../store/modules/home/actions";
import { IDbProducts } from "../../store/modules/dbProducts/actions";
import { IDatabaseUser } from "../../store/modules/user/actions";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useTypedSelector } from "../../store/modules/index";
import { useState, SetStateAction, Dispatch } from "react";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
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
  const dbProducts: Array<IDbProducts> = useTypedSelector(
    (state) => state.products
  );
  const user: IDatabaseUser = useTypedSelector((state) => state.user)[0];
  const cart: Array<IDbProducts> = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const total_units = cart.reduce(
    (acc, product) => product.purchase_units + acc,
    0
  );

  return (
    <HeaderContainer>
      <TopContainer display={display}>
        <LogoContainer
          onClick={() => {
            dispatch(actionSearchProduct("!h@e#n$r%y&", dbProducts));
            setSearch("");
            history.push("/");
          }}
        >
          <span className="watch-store larger">Watch</span>
          <span className="watch-store smaller">Store</span>
        </LogoContainer>
        <div className="input-container input-desktop">
          <input
            type="text"
            placeholder="O que você precisa?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                dispatch(actionSearchProduct(search, dbProducts));
            }}
          />
          <button
            onClick={() => dispatch(actionSearchProduct(search, dbProducts))}
          >
            <FiSearch className="search-icon" />
          </button>
        </div>
        <ul>
          <li>
            <span>
              Bem-vindo :<span className="smile">)</span>,
            </span>
            <span className="header-name">{user ? user.name : "usuário"}</span>
          </li>
          <li className="li-icon-cart">
            <Link to="/cart-page">
              {user && (
                <Badge
                  badgeContent={user && user.cart.total_units}
                  color={"primary"}
                >
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
              )}
              {!user && (
                <Badge badgeContent={total_units} color={"primary"}>
                  <ShoppingCartOutlined className="icon-cart" />
                </Badge>
              )}
            </Link>
          </li>
        </ul>
        <div className="input-container input-mobile">
          <input
            type="text"
            placeholder="O que você precisa?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                dispatch(actionSearchProduct(search, dbProducts));
            }}
          />
          <button
            onClick={() => dispatch(actionSearchProduct(search, dbProducts))}
          >
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
            <li
              onClick={() => {
                dispatch(actionSearchProduct("!h@e#n$r%y&", dbProducts));
                setSearch("");
              }}
            >
              <HomeOutlinedIcon />
            </li>
          </Link>
          <Link to="/registration-page">
            <li>Cadastrar</li>
          </Link>
          <Link to="/login-page">
            <li>Entrar</li>
          </Link>
          <Link to="/my-account-page">
            <li>Minha conta</li>
          </Link>
        </ul>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
