import React from "react";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

//--------DISCOVER NAVIGATION MENU
const discover = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "My Profile",
		link: "/profile",
	},
	{
		name: "Upload NFT",
		link: "/uploadNFT",
	},
	{
		name: "Search",
		link: "/search",
	},
];

const Discover = () => {
	return (
		<div>
			{discover.map((el, i) => (
				<div key={i + 1} className={Style.discover}>
					<Link to={`${el.link}`}>{el.name}</Link>
				</div>
			))}
		</div>
	);
};

export default Discover;
