import { Dispatch, ReactNode, SetStateAction } from "react";
type SetModalState = Dispatch<SetStateAction<boolean>>;
interface ModalState {
    isModalOpen: boolean;
    setIsModalOpen: SetModalState;
}
interface Props {
    initialState: boolean;
    children: ReactNode;
}
declare const ModalStateProvider: ({ initialState, children }: Props) => import("react/jsx-runtime").JSX.Element;
export default ModalStateProvider;
export declare const ModalStateContext: import("react").Context<ModalState>;
