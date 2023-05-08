import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SetModalState = Dispatch<SetStateAction<boolean>>;

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: SetModalState;
}

interface Props {
  initialState: boolean;
  children: ReactNode;
}

const ModalStateProvider = ({ initialState, children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  return (
    <ModalStateContext.Provider
      value={{ isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen }}
    >
      {children}
    </ModalStateContext.Provider>
  );
};

export default ModalStateProvider;

export const ModalStateContext = createContext<ModalState>({
  isModalOpen: true,
  setIsModalOpen: () => {},
});
