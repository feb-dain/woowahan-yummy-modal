import { useContext } from "react";
import { ModalStateContext } from "./ModalStateProvider";
var useModal = function () {
    var isModalOpen = useContext(ModalStateContext).isModalOpen;
    var setIsModalOpen = useContext(ModalStateContext).setIsModalOpen;
    var handleModalOpen = function () { return setIsModalOpen(true); };
    var handleModalClose = function () { return setIsModalOpen(false); };
    return { isModalOpen: isModalOpen, handleModalClose: handleModalClose, handleModalOpen: handleModalOpen };
};
export default useModal;
