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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, } from "react";
var ModalStateProvider = function (_a) {
    var initialState = _a.initialState, children = _a.children;
    var _b = useState(initialState), isModalOpen = _b[0], setIsModalOpen = _b[1];
    return (_jsx(ModalStateContext.Provider, __assign({ value: { isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen } }, { children: children })));
};
export default ModalStateProvider;
export var ModalStateContext = createContext({
    isModalOpen: true,
    setIsModalOpen: function () { },
});
