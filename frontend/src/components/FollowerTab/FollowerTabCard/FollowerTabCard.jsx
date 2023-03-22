import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";

//INTERNAL IMPORT
import Style from "./FollowerTabCard.module.css";
import images from "~/images";
const FollowerTabCard = ({ index, element }) => {
	const [following, setFollowing] = useState(false);

	const followMe = () => {
		if (!following) {
			setFollowing(true);
		} else {
			setFollowing(false);
		}
	};
	return (
		<div className={Style.FollowerTabCard}>
			<div className={Style.FollowerTabCard_rank}>
				<p>
					#{index + 1} <span>🥇</span>
				</p>
			</div>

			<div className={Style.FollowerTabCard_box}>
				<div className={Style.FollowerTabCard_box_img}>
					<img
						className={Style.FollowerTabCard_box_img_img}
						src={element.background || images[`creatorbackground${index + 1}`]}
						alt="background"
					/>
				</div>

				<div className={Style.FollowerTabCard_box_profile}>
					<img
						className={Style.FollowerTabCard_box_profile_img}
						alt="user_picture"
						src={element.user || images[`user${index + 1}`]}
					/>
				</div>

				<div className={Style.FollowerTabCard_box_info}>
					<div className={Style.FollowerTabCard_box_info_name}>
						<h4>
							{element.seller
								? `${element.seller.slice(0, 9)}...`
								: "Seller Address"}
							{""}{" "}
							<span>
								<MdVerified />
							</span>
						</h4>
						<p>{element.total || 0} TBNB</p>
					</div>

					<div className={Style.FollowerTabCard_box_info_following}>
						{following ? (
							<div onClick={() => followMe()}>
								Follow{""}{" "}
								<span>
									<TiTick />
								</span>
							</div>
						) : (
							<div onClick={() => followMe()}>Following</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FollowerTabCard;
