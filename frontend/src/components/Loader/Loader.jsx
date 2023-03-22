import React from "react";

import Style from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={Style.loader}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loader;
