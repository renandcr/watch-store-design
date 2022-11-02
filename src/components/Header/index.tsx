import { useTypedSelector } from "../../store/modules/index";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { HeaderContainer, LogoContainer } from "./style";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const Header: React.FC = (): JSX.Element => {
  const cartProducts = useTypedSelector((state) => state.cart);

  return (
    <HeaderContainer>
      <div>
        <LogoContainer>
          <span className="watch-store larger">Watch</span>
          <span className="watch-store smaller">Store</span>
        </LogoContainer>
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
          <Link to="/cart-page">
            <Badge badgeContent={cartProducts.length} color={"primary"}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
