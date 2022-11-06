import WebSiteLogoContainer from "./styled";
import { Link } from "react-router-dom";

export interface IWebSiteLogoStyle {
  marginBottom?: string;
}

const WebSiteLogo: React.FC<IWebSiteLogoStyle> = ({
  marginBottom,
}): JSX.Element => {
  return (
    <WebSiteLogoContainer marginBottom={marginBottom}>
      <Link to="/">
        <span className="watch-store">
          watchstore<span className="watch-store-inside">.com.br</span>
        </span>
      </Link>
    </WebSiteLogoContainer>
  );
};

export default WebSiteLogo;
