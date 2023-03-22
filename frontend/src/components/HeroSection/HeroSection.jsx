import React from "react";

import images from "~/images";
import { Button } from "~/components";
import Style from "./HeroSection.module.css";

import { useNavigate } from "react-router-dom";

const HeroSection = () => {
	// const { titleData } = useContext(NFTMarketplaceContext);
	const navigate = useNavigate();
	return (
		<div className={Style.heroSection}>
			<div className={Style.heroSection_box}>
				<div className={Style.heroSection_box_left}>
					<h3>{"Discover, collect, and sell NFTs"} 🖼️</h3>
					<p>
						Discover the most outstanding NTFs in all topics of life. Creative
						your NTFs and sell them
					</p>
					<Button
						btnName="Start your search"
						handleClick={() => navigate("/searchPage")}
					/>
				</div>
				<div className={Style.heroSection_box_right}>
					<img src={images.hero} alt="Hero section" />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
