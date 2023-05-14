import { ReactNode } from "react";
import { CSSProp } from "styled-components";
type Direction = "top" | "right" | "left" | "bottom" | "none";
interface Props {
    modalStyle: CSSProp;
    children: ReactNode;
    closeButtonName: string;
    buttonStyle: CSSProp;
    direction: Direction;
}
declare const Modal: ({ children, closeButtonName, modalStyle, buttonStyle, direction, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Modal;
