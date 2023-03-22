import React from "react";
import SlickSlider from "react-slick";
//INTERNAL IMPORT
import Style from "./Slider.module.css";
import SliderCard from "./SliderCard/SliderCard";

import { FollowingArray } from "~/data";

const Slider = () => {
	return (
		<div className={Style.slider}>
			<div className={Style.slider_box}>
				<h2>Explore NFTs Video</h2>
				<p>Click on play icon & enjoy Nfts Video</p>

				<SlickSlider
					dots={false}
					infinite={false}
					speed={500}
					slidesToShow={4}
					slidesToScroll={1}
					draggable={true}
					centerPadding
				>
					{FollowingArray.map((element, index) => (
						<div key={index} className={Style.slider_box_item}>
							<SliderCard index={index} element={element} />
						</div>
					))}
				</SlickSlider>
			</div>
		</div>
	);
};

export default Slider;
