import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";

//INTERNAL IMPORT
import images from "~/images";
import Style from "./AudioCard.module.css";

const AudioCard = () => {
	const [like, setLike] = useState(false);
	const [play, setPlay] = useState(false);

	const likeNft = () => {
		if (!like) {
			setLike(true);
		} else {
			setLike(false);
		}
	};

	const playMusic = () => {
		if (!play) {
			setPlay(true);
		} else {
			setPlay(false);
		}
	};
	return (
		<div className={Style.audioCard}>
			<div className={Style.audioCard_box}>
				<div className={Style.audioCard_box_like_time}>
					<div className={Style.audioCard_box_like} onClick={() => likeNft()}>
						{like ? (
							<AiFillHeart className={Style.audioCard_box_like_icon} />
						) : (
							<AiOutlineHeart
								className={Style.audioCard_box_like_icon_unlike}
							/>
						)}

						<span>24</span>
					</div>

					<div className={Style.audioCard_box_time}>
						<div className={Style.audioCard_box_like_time_remaing}>
							<small>Reaming time</small>
							<h5>3h : 15m :20s</h5>
						</div>
					</div>
				</div>

				<div className={Style.audioCard_box_player}>
					<img src={images.musiceWave} alt="musice" />
					<div
						className={Style.audioCard_box_musicPlayer}
						onClick={() => playMusic()}
					>
						{play ? (
							<div className={Style.audioCard_box_musicPlayer_icon}>
								<TbPlayerPause />
							</div>
						) : (
							<div className={Style.audioCard_box_musicPlayer_icon}>
								<TbPlayerPlay />
							</div>
						)}
					</div>
				</div>

				<div className={Style.audioCard_box_details}>
					<div className={Style.audioCard_box_details_info}>
						<h4>NFT music #1123</h4>
						<div className={Style.audioCard_box_details_info_price}>
							<small>Price</small>
							<p>$3,221.33</p>
						</div>
					</div>
				</div>

				<div className={Style.audioCard_box_img}>
					<img src={images.creatorbackground10} alt="background" />
				</div>
			</div>
		</div>
	);
};

export default AudioCard;
