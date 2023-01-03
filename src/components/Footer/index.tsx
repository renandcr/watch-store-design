import Credit from "../../assets/images/cartao-credito.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

import {
  FooterBottomContainer,
  SocialMediaContainer,
  CreditCardsContainer,
  FooterMidleContainer,
  FooterLogoContainer,
  FooterTopContainer,
  FooterContainer,
} from "./style";

export interface IFooter {
  showDisplay?: boolean;
}

const Footer: React.FC<IFooter> = ({ showDisplay }): JSX.Element => {
  return (
    <FooterContainer showDisplay={showDisplay}>
      <FooterTopContainer showDisplay={showDisplay}>
        <FooterLogoContainer>
          <span className="watch-store larger">Watch</span>
          <span className="watch-store smaller">Store</span>
        </FooterLogoContainer>
      </FooterTopContainer>
      <FooterMidleContainer>
        <SocialMediaContainer>
          <li
            onClick={() =>
              window.open("https://www.linkedin.com/in/renandcr/", "_blank")
            }
          >
            <LinkedInIcon />
          </li>
          <li
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          >
            <FacebookIcon />
          </li>
          <li onClick={() => window.open("https://twitter.com/", "_blank")}>
            <TwitterIcon />
          </li>
          <li
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          >
            <InstagramIcon />
          </li>
          <li onClick={() => window.open("https://www.youtube.com/", "_blank")}>
            <YouTubeIcon />
          </li>
        </SocialMediaContainer>
        <CreditCardsContainer>
          <div>
            <h2>Formas de pagamento:</h2>
          </div>
          <div className="credit-cards-img">
            <img
              src={Credit}
              alt="Imagem ilustrativa de bandeiras de cartões de crédito"
            />
          </div>
        </CreditCardsContainer>
        <div className="fake-div"></div>
      </FooterMidleContainer>
      <FooterBottomContainer>
        <span>© 2022-2023 watchstore.com.br</span>
        <Link to="/privacy-policy-page">
          <span>Política de privacidade</span>
        </Link>
      </FooterBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
