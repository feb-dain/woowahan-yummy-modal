import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styled, { CSSProp } from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: CSSProp;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, ...props }: Props) => {
  return <S.Button {...props}>{children}</S.Button>;
};

const S = {
  Button: styled.button<{ buttonStyle: CSSProp }>`
    cursor: pointer;

    ${(props) => props.buttonStyle}
  `,
};

export default Button;
