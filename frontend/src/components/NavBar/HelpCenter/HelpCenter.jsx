import React from "react";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
	const helpCenter = [
		{
			name: "Contact Us",
			link: "contact-us",
		},
		{
			name: "Sign Up",
			link: "signUp",
		},
		{
			name: "Sign In",
			link: "login",
		},
		{
			name: "Subscription",
			link: "subscription",
		},
	];
	return (
		<div className={Style.box}>
			{helpCenter.map((el, i) => (
				<div className={Style.helpCenter} key={i + 1}>
					<Link to={el.link}>{el.name}</Link>
				</div>
			))}
		</div>
	);
};

export default HelpCenter;
