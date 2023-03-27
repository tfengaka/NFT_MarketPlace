import { MediaRenderer } from "@thirdweb-dev/react";
import React, { useState } from "react";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import images from "../../../images";

//INTERNAL IMPORT
import Style from "./NFTDetailsImg.module.css";

const NFTDetailsImg = ({ nft }) => {
	const [like, setLike] = useState(false);

	const likeNFT = () => {
		if (!like) {
			setLike(true);
		} else {
			setLike(false);
		}
	};

	return (
		<div className={Style.NFTDetailsImg}>
			<div className={Style.NFTDetailsImg_box}>
				<div className={Style.NFTDetailsImg_box_NFT}>
					<div className={Style.NFTDetailsImg_box_NFT_like}>
						<BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
						<p onClick={() => likeNFT()}>
							{like ? (
								<AiOutlineHeart
									className={Style.NFTDetailsImg_box_NFT_like_icon}
								/>
							) : (
								<AiFillHeart
									className={Style.NFTDetailsImg_box_NFT_like_icon}
								/>
							)}
							<span>23</span>
						</p>
					</div>

					<div className={Style.NFTDetailsImg_box_NFT_img}>
						<MediaRenderer
							src={nft?.image}
							className={Style.NFTDetailsImg_box_NFT_img_img}
							poster={images.creatorbackground10}
							width="100%"
							height="100%"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTDetailsImg;
