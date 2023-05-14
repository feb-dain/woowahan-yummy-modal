var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from "react";
import styled, { css } from "styled-components";
import useModal from "./useModal";
import Button from "./Button";
import { openDirection, closeDirection, visibilityAnimation, } from "./modal.style";
var Modal = function (_a) {
    var children = _a.children, closeButtonName = _a.closeButtonName, modalStyle = _a.modalStyle, buttonStyle = _a.buttonStyle, direction = _a.direction;
    var _b = useModal(), isModalOpen = _b.isModalOpen, handleModalClose = _b.handleModalClose;
    var modalRef = useRef(null);
    var handleKeyDownEsc = function (_a) {
        var key = _a.key;
        if (key === "Escape")
            handleModalClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(S.ModalBackdrop, { className: "modal-backdrop", onClick: handleModalClose, isModalOpen: isModalOpen }), _jsxs(S.Modal, __assign({ role: "dialog", tabIndex: 0, className: "modal-open-".concat(isModalOpen), modalStyle: modalStyle, isModalOpen: isModalOpen, direction: direction ? direction : "none", ref: modalRef, onKeyDown: handleKeyDownEsc }, { children: [children, _jsx(Button, { children: closeButtonName, buttonStyle: buttonStyle, name: closeButtonName, onClick: handleModalClose })] }))] }));
};
var S = {
    ModalBackdrop: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.35);\n    cursor: pointer;\n\n    animation: ", "\n      0.8s forwards;\n  "], ["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.35);\n    cursor: pointer;\n\n    animation: ", "\n      0.8s forwards;\n  "])), function (_a) {
        var isModalOpen = _a.isModalOpen;
        return isModalOpen ? visibilityAnimation["show"] : visibilityAnimation["hide"];
    }),
    Modal: styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    ", ";\n\n    animation: ", ";\n  "], ["\n    ", ";\n\n    animation: ", ";\n  "])), function (props) { return props.modalStyle; }, function (_a) {
        var isModalOpen = _a.isModalOpen, direction = _a.direction;
        return isModalOpen
            ? css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            ", " 0.6s, ", " 0.6s forwards\n          "], ["\n            ", " 0.6s, ", " 0.6s forwards\n          "])), openDirection[direction], visibilityAnimation["show"]) : css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            ", " 0.6s, ", " 0.6s forwards\n          "], ["\n            ", " 0.6s, ", " 0.6s forwards\n          "])), closeDirection[direction], visibilityAnimation["hide"]);
    }),
};
export default Modal;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
