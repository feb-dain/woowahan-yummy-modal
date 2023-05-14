import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { CSSProp } from "styled-components";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonStyle: CSSProp;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
declare const Button: ({ children, ...props }: Props) => import("react/jsx-runtime").JSX.Element;
export default Button;
