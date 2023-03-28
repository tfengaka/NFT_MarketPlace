import { MediaRenderer } from "@thirdweb-dev/react";
import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import images from "../../../images";

//INTERNAL IMPORT
import Style from "./NFTCardTwo.module.css";

const NFTCardTwo = ({ NFTData }) => {
	const [like, setLike] = useState(false);
	const [likeInc, setLikeInc] = useState(21);

	const likeNFT = () => {
		if (!like) {
			setLike(true);
			setLikeInc(23);
		} else {
			setLike(false);
			setLikeInc(23 + 1);
		}
	};

	return (
		<div className={Style.NFTCardTwo}>
			{NFTData?.map((item, index) => (
				<Link
					to={`/nft-details/${slugify(item.name)}`}
					key={index + 1}
					state={item}
				>
					<div className={Style.NFTCardTwo_box}>
						<div className={Style.NFTCardTwo_box_like}>
							<div className={Style.NFTCardTwo_box_like_box}>
								<div className={Style.NFTCardTwo_box_like_box_box}>
									<BsImage className={Style.NFTCardTwo_box_like_box_box_icon} />
									<p onClick={() => likeNFT()}>
										{like ? <AiOutlineHeart /> : <AiFillHeart />}
										{""}
										<span>{likeInc + 1}</span>
									</p>
								</div>
							</div>
						</div>

						<MediaRenderer
							src={item.image}
							poster={images.creatorbackground10}
							controls={true}
							width="100%"
							height={360}
							className={Style.NFTCardTwo_box_img}
						/>

						<div className={Style.NFTCardTwo_box_info}>
							<div className={Style.NFTCardTwo_box_info_left}>
								<p>{`${item.name} #${item.tokenId}`}</p>
							</div>
							<div className={Style.NFTCardTwo_box_info_right}>
								<div className={Style.NFTCardTwo_box_price_box}>
									<small>Current bid: </small>
									<span>{item.price} ETH</span>
								</div>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default NFTCardTwo;
