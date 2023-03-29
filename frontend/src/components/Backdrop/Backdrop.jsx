import React from "react";
import { createPortal } from "react-dom";
import Style from "./Backdrop.module.css";
function Backdrop({ children }) {
	return createPortal(
		<div className={Style.Backdrop}>{children}</div>,
		document.querySelector("body")
	);
}

export default Backdrop;
