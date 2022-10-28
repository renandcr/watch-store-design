import { ShoppingCartOutlined } from "@mui/icons-material";
import { HeaderContainer, LogoContainer } from "./style";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <LogoContainer>
          <img src={Logo} alt="Logo da loja" />
        </LogoContainer>
        <ul>
          <Link to="">
            <li>Sair</li>
          </Link>
          <Link to="">
            <li>Voltar</li>
          </Link>
          <Link to="">
            <li>Cadastro</li>
          </Link>
          <Link to="">
            <li>Login</li>
          </Link>
          <Link to="">
            <Badge badgeContent={4} color={"primary"}>
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;