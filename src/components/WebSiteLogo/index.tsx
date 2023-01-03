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
      <div>
        <Link to="/">
          <span className="watch-store">
            watchstore<span className="watch-store-inside">.com.br</span>
          </span>
        </Link>
      </div>
    </WebSiteLogoContainer>
  );
};

export default WebSiteLogo;
