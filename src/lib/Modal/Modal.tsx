import { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";
import useModal from "./useModal";
import Button from "./Button";
import { openDirection, opacityAnimation, closeDirection } from "./modal.style";

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
        isModalOpen ? opacityAnimation["show"] : opacityAnimation["hide"]}
      0.8s;
  `,

  Modal: styled.div<{
    modalStyle: CSSProp;
    isModalOpen: boolean;
    direction: "top" | "right" | "left" | "bottom" | "none";
  }>`
    animation: ${({ isModalOpen, direction }) =>
        isModalOpen
          ? (openDirection[direction], opacityAnimation["show"])
          : (closeDirection[direction], opacityAnimation["hide"])}
      0.6s;

    ${(props) => props.modalStyle}
  `,
};

export default Modal;
