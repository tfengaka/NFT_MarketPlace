import React from "react";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../../images";

const Video = () => {
	return (
		<div className={Style.Video}>
			<div className={Style.Video_box}>
				<h1>
					<span>🎬</span> The Videos
				</h1>
				<p>
					Check out our hottest videos. View more and share more new
					perspectives on just about any topic. Everyone’s welcome.
				</p>

				<div className={Style.Video_box_frame}>
					<div className={Style.Video_box_frame_left}>
						<img
							src={images.NFTVideo}
							alt=""
							className={Style.Video_box_frame_left_img}
						/>
					</div>

					<div className={Style.Video_box_frame_right}>Hey</div>
				</div>
			</div>
		</div>
	);
};

export default Video;
