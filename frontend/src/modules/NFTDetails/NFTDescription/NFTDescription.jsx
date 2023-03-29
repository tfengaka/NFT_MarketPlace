import React, { useState } from "react";

import { BiDollar, BiTransferAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaWallet } from "react-icons/fa";
import {
	MdCloudUpload,
	MdReportProblem,
	MdTimer,
	MdVerified,
} from "react-icons/md";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import { Button } from "~/components";
import images from "~/images";
import Style from "./NFTDescription.module.css";

//IMPORT SMART CONTRACT
import { useNFTMarketPlace } from "../../../contexts/MarketplaceContext";

const NFTDescription = ({ nft }) => {
	const { address, buyNFT } = useNFTMarketPlace();

	const [social, setSocial] = useState(false);
	const [NFTMenu, setNFTMenu] = useState(false);

	const openSocial = () => {
		if (!social) {
			setSocial(true);
			setNFTMenu(false);
		} else {
			setSocial(false);
		}
	};

	const openNFTMenu = () => {
		if (!NFTMenu) {
			setNFTMenu(true);
			setSocial(false);
		} else {
			setNFTMenu(false);
		}
	};

	return (
		<div className={Style.NFTDescription}>
			<div className={Style.NFTDescription_box}>
				{/* //Part ONE */}
				<div className={Style.NFTDescription_box_share}>
					<p>Virtual Worlds</p>
					<div className={Style.NFTDescription_box_share_box}>
						<MdCloudUpload
							className={Style.NFTDescription_box_share_box_icon}
							onClick={() => openSocial()}
						/>

						{social && (
							<div className={Style.NFTDescription_box_share_box_social}>
								<a href="#fb">
									<TiSocialFacebook /> Facebook
								</a>
								<a href="#ins">
									<TiSocialInstagram /> Instragram
								</a>
								<a href="#linkedin">
									<TiSocialLinkedin /> LinkedIn
								</a>
								<a href="#twiter">
									<TiSocialTwitter /> Twitter
								</a>
								<a href="#ytb">
									<TiSocialYoutube /> YouTube
								</a>
							</div>
						)}

						<BsThreeDots
							className={Style.NFTDescription_box_share_box_icon}
							onClick={() => openNFTMenu()}
						/>

						{NFTMenu && (
							<div className={Style.NFTDescription_box_share_box_social}>
								<a href="#dollar">
									<BiDollar /> Change price
								</a>
								<a href="#transfer">
									<BiTransferAlt /> Transfer
								</a>
								<a href="#report">
									<MdReportProblem /> Report abouse
								</a>
							</div>
						)}
					</div>
				</div>
				{/* //Part TWO */}
				<div className={Style.NFTDescription_box_profile}>
					<h1>{`${nft?.name} #${nft?.tokenId}`}</h1>
					<div className={Style.NFTDescription_box_profile_box}>
						<div className={Style.NFTDescription_box_profile_box_left}>
							<div className={Style.NFTDescription_box_profile_box_left_img}>
								<img src={images.thirdweb} alt="profile" />
							</div>
							<div className={Style.NFTDescription_box_profile_box_left_info}>
								<small>Creator</small> <br />
								<Link to="/profile">
									<span>
										{nft?.owner} <MdVerified />
									</span>
								</Link>
							</div>
						</div>
					</div>

					<div className={Style.NFTDescription_box_profile_biding}>
						<div className={Style.NFTDescription_box_profile_biding_box_price}>
							<div
								className={
									Style.NFTDescription_box_profile_biding_box_price_bid
								}
							>
								<small>Current Bid</small>
								<p>
									{nft?.price} ETH <span>( ≈ $)</span>
								</p>
							</div>
						</div>

						<p>
							<MdTimer /> <span>Auction ending in:</span>
						</p>
						<div className={Style.NFTDescription_box_profile_biding_box_timer}>
							<div
								className={
									Style.NFTDescription_box_profile_biding_box_timer_item
								}
							>
								<p>2</p>
								<span>Days</span>
							</div>
							<div
								className={
									Style.NFTDescription_box_profile_biding_box_timer_item
								}
							>
								<p>22</p>
								<span>hours</span>
							</div>
							<div
								className={
									Style.NFTDescription_box_profile_biding_box_timer_item
								}
							>
								<p>45</p>
								<span>mins</span>
							</div>
							<div
								className={
									Style.NFTDescription_box_profile_biding_box_timer_item
								}
							>
								<p>12</p>
								<span>secs</span>
							</div>
						</div>

						<div className={Style.NFTDescription_box_profile_biding_box_button}>
							{address === nft?.seller ? (
								<p>You can't buy your own NFT</p>
							) : address === nft?.owner ? (
								<Button
									icon={<FaWallet />}
									btnName="List on Marketplace"
									handleClick={() => {
										console.log("ReSell Token");
										// router.push(
										// 	`/reSellToken?id=${nft.tokenId}&tokenURI=${nft.tokenURI}&price=${nft.price}`
										// )
									}}
									classStyle={Style.button}
								/>
							) : (
								<Button
									icon={<FaWallet />}
									btnName="Buy NFT"
									handleClick={() => buyNFT(nft)}
									classStyle={Style.button}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTDescription;
