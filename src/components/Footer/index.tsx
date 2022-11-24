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
          <Link to="">
            <li>
              <FacebookIcon />
            </li>
          </Link>
          <Link to="">
            <li>
              <TwitterIcon />
            </li>
          </Link>
          <Link to="">
            <li>
              <LinkedInIcon />
            </li>
          </Link>
          <Link to="">
            <li>
              <InstagramIcon />
            </li>
          </Link>
          <Link to="">
            <li>
              <YouTubeIcon />
            </li>
          </Link>
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
        <h2>© 2021-2022 watchstore.com.br</h2>
      </FooterBottomContainer>
    </FooterContainer>
  );
};

export default Footer;
