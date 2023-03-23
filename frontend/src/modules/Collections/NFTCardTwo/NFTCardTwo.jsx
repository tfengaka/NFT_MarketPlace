import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import { LikeProfile } from "~/components";
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

	console.log(NFTData);

	return (
		<div className={Style.NFTCardTwo}>
			{NFTData?.map((el, i) => (
				<Link to="/NFT-details" key={i + 1}>
					<div className={Style.NFTCardTwo_box} key={i + 1}>
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

						<div className={Style.NFTCardTwo_box_img}>
							<img
								src={el.image}
								alt="NFT"
								className={Style.NFTCardTwo_box_img_img}
							/>
						</div>

						<div className={Style.NFTCardTwo_box_info}>
							<div className={Style.NFTCardTwo_box_info_left}>
								<LikeProfile />
								<p>{el.name || `NFT #${i + 1}`}</p>
							</div>
							<small>4{i + 2} in stock</small>
						</div>

						<div className={Style.NFTCardTwo_box_price}>
							<div className={Style.NFTCardTwo_box_price_box}>
								<small>Current Bid</small>
								<p>{el.price || i + 4} TBNB</p>
							</div>
							<div className={Style.NFTCardTwo_box_price_stock}>
								<MdTimer /> <span>{i + 1} hours left</span>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default NFTCardTwo;
