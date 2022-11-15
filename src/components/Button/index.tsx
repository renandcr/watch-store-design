import { ButtonHTMLAttributes } from "react";
import ButtonContainer from "./style";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor?: string;
}

const Button: React.FC<IButton> = ({
  children,
  backgroundColor,
  ...rest
}): JSX.Element => {
  return (
    <ButtonContainer backgroundColor={backgroundColor} {...rest}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
