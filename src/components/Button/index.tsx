import { ButtonHTMLAttributes } from "react";
import ButtonContainer from "./style";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: React.FC<IButton> = ({ children, ...rest }): JSX.Element => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default Button;
