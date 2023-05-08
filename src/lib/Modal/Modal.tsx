import { KeyboardEvent, ReactNode, useEffect, useRef } from "react";
import styled, { CSSProp, css } from "styled-components";
import useModal from "./useModal";
import Button from "./Button";
import {
  openDirection,
  closeDirection,
  visibilityAnimation,
} from "./modal.style";

type Direction = "top" | "right" | "left" | "bottom" | "none";

interface Props {
  modalStyle: CSSProp;
  children: ReactNode;
  closeButtonName: string;
  buttonStyle: CSSProp;
  direction: Direction;
}

const Modal = ({
  children,
  closeButtonName,
  modalStyle,
  buttonStyle,
  direction,
}: Props) => {
  const { isModalOpen, handleModalClose } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleKeyDownEsc = ({ key }: KeyboardEvent<HTMLDivElement>) => {
    if (key === "Escape") handleModalClose();
  };

  return (
    <>
      <S.ModalBackdrop
        className="modal-backdrop"
        onClick={handleModalClose}
        isModalOpen={isModalOpen}
      />
      <S.Modal
        role="dialog"
        tabIndex={0}
        className={`modal-open-${isModalOpen}`}
        modalStyle={modalStyle}
        isModalOpen={isModalOpen}
        direction={direction ? direction : "none"}
        ref={modalRef}
        onKeyDown={handleKeyDownEsc}
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
      0.8s forwards;
  `,

  Modal: styled.div<{
    modalStyle: CSSProp;
    isModalOpen: boolean;
    direction: Direction;
  }>`
    ${(props) => props.modalStyle};

    animation: ${({ isModalOpen, direction }) =>
      isModalOpen
        ? css`
            ${openDirection[direction]} 0.6s, ${visibilityAnimation[
              "show"
            ]} 0.6s forwards
          `
        : css`
            ${closeDirection[direction]} 0.6s, ${visibilityAnimation[
              "hide"
            ]} 0.6s forwards
          `};
  `,
};

export default Modal;
