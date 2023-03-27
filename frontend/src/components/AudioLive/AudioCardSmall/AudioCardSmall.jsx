import React, { useState } from "react";
import { TbPlayerPause, TbPlayerPlay } from "react-icons/tb";

//INTERNAL IMPORT
import images from "~/images";
import Style from "./AudioCardSmall.module.css";

const AudioCardSmall = () => {
	const [play, setPlay] = useState(false);

	const playMusic = () => {
		if (!play) {
			setPlay(true);
		} else {
			setPlay(false);
		}
	};
	return (
		<div className={Style.audioPlayer}>
			<div className={Style.audioPlayer_box}>
				<img
					src={images.creatorbackground1}
					alt="music"
					className={Style.audioPlayer_box_img}
				/>

				<div className={Style.audioPlayer_box_info}>
					<h4>NFT music #1142</h4>
					<div className={Style.audioPlayer_box_info_box}>
						<div className={Style.audioPlayer_box_info_box_price}>
							<small>Price</small>
							<p>1.00 TBNB</p>
						</div>
					</div>
				</div>

				<div
					className={Style.audioPlayer_box_playBtn}
					onClick={() => playMusic()}
				>
					{play ? <TbPlayerPause /> : <TbPlayerPlay />}
				</div>
			</div>
		</div>
	);
};

export default AudioCardSmall;
