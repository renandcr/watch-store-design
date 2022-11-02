import { BigLogoContainer } from "./style";

const BigLogo: React.FC = (): JSX.Element => {
  return (
    <BigLogoContainer>
      <span className="watch-store larger">Watch</span>
      <span className="watch-store smaller">Store</span>
    </BigLogoContainer>
  );
};

export default BigLogo;
