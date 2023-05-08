import { ReactNode } from "react";
import styled, { CSSProp, css } from "styled-components";
import useModal from "./useModal";
import Button from "./Button";
import {
  openDirection,
  closeDirection,
  visibilityAnimation,
} from "./modal.style";

interface Props {
  modalStyle: CSSProp;
  children: ReactNode;
  closeButtonName: string;
  buttonStyle: CSSProp;
  direction: "top" | "right" | "left" | "bottom" | "none";
}

const Modal = ({
  children,
  closeButtonName,
  modalStyle,
  buttonStyle,
  direction,
}: Props) => {
  const { isModalOpen, handleModalClose } = useModal();

  return (
    <>
      <S.ModalBackdrop
        className="modal-backdrop"
        onClick={handleModalClose}
        isModalOpen={isModalOpen}
      />
      <S.Modal
        role="dialog"
        className="modal"
        modalStyle={modalStyle}
        isModalOpen={isModalOpen}
        direction={direction ? direction : "none"}
      >
        {children}
        <Button
          children={closeButtonName}
          buttonStyle={buttonStyle}
          name={closeButtonName}
          onClick={handleModalClose}
        />
      </S.Modal>
    </>
  );
};

const S = {
  ModalBackdrop: styled.div<{ isModalOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    cursor: pointer;

    animation: ${({ isModalOpen }) =>
        isModalOpen ? visibilityAnimation["show"] : visibilityAnimation["hide"]}
      0.8s;
  `,

  Modal: styled.div<{
    modalStyle: CSSProp;
    isModalOpen: boolean;
    direction: "top" | "right" | "left" | "bottom" | "none";
  }>`
    ${(props) => props.modalStyle};

    animation: ${({ isModalOpen, direction }) =>
      isModalOpen
        ? css`
            ${openDirection[direction]} 0.6s, ${visibilityAnimation[
              "show"
            ]} 0.6s
          `
        : css`
            ${closeDirection[direction]} 0.6s, ${visibilityAnimation[
              "hide"
            ]} 0.6s
          `};
  `,
};

export default Modal;
