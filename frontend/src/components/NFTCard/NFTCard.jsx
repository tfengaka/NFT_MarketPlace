import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import { MediaRenderer } from "@thirdweb-dev/react";

//INTERNAL IMPORT
import Style from "./NFTCard.module.css";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

const NFTCard = ({ NFTData }) => {
	const [like, setLike] = useState(true);

	const likeNft = () => {
		if (!like) {
			setLike(true);
		} else {
			setLike(false);
		}
	};

	return (
		<div className={Style.NFTCard}>
			{NFTData.map((item, index) => (
				<Link
					to={`/nft-details/${slugify(item.name)}`}
					key={index}
					state={{ ...item }}
				>
					<div className={Style.NFTCard_box}>
						<div className={Style.NFTCard_box_img}>
							<MediaRenderer
								src={item.image}
								alt="NFT images"
								width="100%"
								height="500px"
								className={Style.NFTCard_box_img_img}
							/>
						</div>

						<div className={Style.NFTCard_box_update}>
							<div className={Style.NFTCard_box_update_left}>
								<div
									className={Style.NFTCard_box_update_left_like}
									onClick={() => likeNft()}
								>
									{like ? (
										<AiOutlineHeart />
									) : (
										<AiFillHeart
											className={Style.NFTCard_box_update_left_like_icon}
										/>
									)}
									{""} 22
								</div>
							</div>

							<div className={Style.NFTCard_box_update_right}>
								<div className={Style.NFTCard_box_update_right_info}>
									<small>Remaining time</small>
									<p>3h : 15m : 20s</p>
								</div>
							</div>
						</div>

						<div className={Style.NFTCard_box_update_details}>
							<div className={Style.NFTCard_box_update_details_price}>
								<div className={Style.NFTCard_box_update_details_price_box}>
									<h4>{item.name || `NFT#${item.tokenId}`}</h4>

									<div
										className={Style.NFTCard_box_update_details_price_box_box}
									>
										<div
											className={Style.NFTCard_box_update_details_price_box_bid}
										>
											<small>Current Bid</small>
											<p>{item.price} ETH</p>
										</div>
									</div>
								</div>
							</div>
							<div className={Style.NFTCard_box_update_details_category}>
								<BsImages />
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default NFTCard;
