import React from "react";
import { motion } from "framer-motion";

//INTERNAL IMPORT
import Style from "./SliderCard.module.css";

const SliderCard = ({ index, element }) => {
	return (
		<motion.div className={Style.sliderCard}>
			<div className={Style.sliderCard_box}>
				<motion.div className={Style.sliderCard_box_img}>
					<img
						src={element.background}
						className={Style.sliderCard_box_img_img}
						alt="slider profile"
					/>
				</motion.div>
				<div className={Style.sliderCard_box_title}>
					<p>NFT Video #{index + 1}</p>
					<div className={Style.sliderCard_box_title_like}>
						{/* <LikeProfile /> */}
						<small>{index + 4} 0f 100</small>
					</div>
				</div>

				<div className={Style.sliderCard_box_price}>
					<div className={Style.sliderCard_box_price_box}>
						<small>Current Bid</small>
						<p>{index + 2}.000 ETH</p>
					</div>

					<div className={Style.sliderCard_box_price_time}>
						<small>Reaming time</small>
						<p>
							{index + 1}h : 15m : {index + 4}0s
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default SliderCard;
