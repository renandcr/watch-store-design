import { ButtonHTMLAttributes } from "react";
import ButtonContainer from "./style";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  color?: string;
}

const Button: React.FC<IButton> = ({
  children,
  backgroundColor,
  width,
  height,
  color,
  ...rest
}): JSX.Element => {
  return (
    <ButtonContainer
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      color={color}
      {...rest}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
