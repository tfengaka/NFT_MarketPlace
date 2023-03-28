import React from "react";
import { FiCopy } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialYoutube,
} from "react-icons/ti";

//INTERNAL IMPORT
import { Button } from "~/components";
import images from "~/images";
import Style from "./AuthorProfileCard.module.css";

const AuthorProfileCard = ({ currentAccount }) => {
	//copyAddress function
	const copyAddress = () => {
		const copyText = document.getElementById("myInput");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
	};

	return (
		<div className={Style.AuthorProfileCard}>
			<div className={Style.AuthorProfileCard_box}>
				<div className={Style.AuthorProfileCard_box_img}>
					<div className={Style.AuthorProfileCard_box_img_img}>
						<img src={images.thirdweb} alt="NFT IMAGES" />
					</div>
				</div>

				<div className={Style.AuthorProfileCard_box_info}>
					<h2>
						Tian Feng <MdVerified />
					</h2>

					<div className={Style.AuthorProfileCard_box_info_address}>
						<input
							type="text"
							value={currentAccount}
							id="myInput"
							onChange={() => {}}
						/>
						<FiCopy
							onClick={() => copyAddress()}
							className={Style.AuthorProfileCard_box_info_address_icon}
						/>
					</div>

					<p>
						Punk #4786 / An OG Cryptopunk Collector, hoarder of NFTs.
						Contributing to @ether_cards, an NFT Monetization Platform.
					</p>

					<div className={Style.AuthorProfileCard_box_info_social}>
						<a href="##">
							<TiSocialFacebook />
						</a>
						<a href="##">
							<TiSocialInstagram />
						</a>
						<a href="##">
							<TiSocialLinkedin />
						</a>
						<a href="##">
							<TiSocialYoutube />
						</a>
					</div>
				</div>

				<div className={Style.AuthorProfileCard_box_share}>
					<Button btnName="Follow" handleClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default AuthorProfileCard;
