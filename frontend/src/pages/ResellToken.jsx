import { MediaRenderer } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Backdrop, Button, Loader } from "../components";
import { useNFTMarketPlace } from "../contexts/MarketplaceContext";
import images from "../images";
import Style from "../styles/reSellToken.module.css";

const ResellToken = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { loading, reSellingToken } = useNFTMarketPlace();
	const [price, setPrice] = useState("");

	const handleResellToken = async () => {
		try {
			const tx = await reSellingToken({ ...state, price });
			if (tx) {
				navigate("/search");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className={Style.reSellToken}>
			<div className={Style.reSellToken_box}>
				<div>
					<div className={Style.reSellToken_nft_frame}>
						<div className={Style.reSellToken_nft_img}>
							{state?.image && (
								<MediaRenderer
									src={state?.image}
									poster={images.creatorbackground10}
									controls
									width="100%"
									height="100%"
								/>
							)}
						</div>
					</div>
				</div>

				<div className={Style.nftInfo}>
					<div className={Style.nftInfo_wrapper}>
						<h2
							className={Style.nftInfo_name}
						>{`${state?.name} #${state?.tokenId}`}</h2>
						<div className={Style.nftInfo_owner}>
							<div className={Style.nftInfo_owner_avatar}>
								<img src={images.thirdweb} alt="avatar" />
							</div>
							<div className={Style.nftInfo_owner_name}>
								<label>Owner Address</label>
								<span>{state?.owner}</span>
							</div>
						</div>
					</div>
					<div
						className={`${Style.nftInfo_price} ${Style.nftInfo_price_disable}`}
					>
						<span className={Style.nftInfo_price_label}>
							Previous Price (ETH)
						</span>
						<span
							className={Style.nftInfo_price_value}
						>{`${state.price} ETH`}</span>
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
						<Button btnName="Resell Now" handleClick={handleResellToken} />
					</div>
				</div>
			</div>
			{loading && (
				<Backdrop>
					<Loader />
				</Backdrop>
			)}
		</div>
	);
};

export default ResellToken;
