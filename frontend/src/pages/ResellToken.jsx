import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MediaRenderer } from "@thirdweb-dev/react";

import { Button } from "../components";
import images from "../images";
import Style from "../styles/reSellToken.module.css";

const ResellToken = () => {
	const { state } = useLocation();
	const [price, setPrice] = useState("");
	useEffect(() => {}, []);

	return (
		<div className={Style.reSellToken}>
			<div className={Style.reSellToken_box}>
				<div>
					<div className={Style.reSellToken_nft_frame}>
						<div className={Style.reSellToken_nft_img}>
							{!state?.image && (
								<MediaRenderer
									src={images.creatorbackground10}
									width="100%"
									height="100%"
								/>
							)}
						</div>
					</div>
				</div>

				<div className={Style.nftInfo}>
					<div className={Style.nftInfo_wrapper}>
						<h2 className={Style.nftInfo_name}>{`NFT Name #TokenId`}</h2>
						<div className={Style.nftInfo_owner}>
							<div className={Style.nftInfo_owner_avatar}>
								<img src={images.thirdweb} alt="avatar" />
							</div>
							<div className={Style.nftInfo_owner_name}>
								<label>Owner Address</label>
								<span>{"0x4873894375983475493857349574389"}</span>
							</div>
						</div>
					</div>
					<div
						className={`${Style.nftInfo_price} ${Style.nftInfo_price_disable}`}
					>
						<span className={Style.nftInfo_price_label}>
							Previous Price (ETH)
						</span>
						<span className={Style.nftInfo_price_value}>0.55 ETH</span>
					</div>
					<div className={`${Style.nftInfo_price}`}>
						<span className={Style.nftInfo_price_label}>
							Resell Price (ETH)
						</span>
						<input
							type="number"
							value={price}
							min={0}
							step={0.005}
							placeholder="0.00"
							className={Style.nftInfo_price_value}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					<div className={Style.reSellToken_box_btn}>
						<Button btnName="Resell Now" handleClick={() => {}} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResellToken;
