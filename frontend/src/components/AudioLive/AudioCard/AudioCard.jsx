import { MediaRenderer } from "@thirdweb-dev/react";
import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

//INTERNAL IMPORT
import images, { audio } from "~/images";
import Style from "./AudioCard.module.css";

const AudioCard = () => {
	const [like, setLike] = useState(false);

	const likeNft = () => {
		if (!like) {
			setLike(true);
		} else {
			setLike(false);
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
					{/* <div
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
					</div> */}
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
					<MediaRenderer
						controls
						src={audio}
						poster={images.creatorbackground10}
						alt="background"
						width="100%"
						height="100%"
						className={Style.audioCard_box_img_img}
					/>
				</div>
			</div>
		</div>
	);
};

export default AudioCard;
