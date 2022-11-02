import WebSiteLogoContainer from "./styled";
import { Link } from "react-router-dom";

const WebSiteLogo: React.FC = (): JSX.Element => {
  return (
    <WebSiteLogoContainer>
      <Link to="/">
        <span className="watch-store">
          watchstore<span className="watch-store-inside">.com.br</span>
        </span>
      </Link>
    </WebSiteLogoContainer>
  );
};

export default WebSiteLogo;
