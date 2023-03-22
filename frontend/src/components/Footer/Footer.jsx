import React from "react";

import { RiSendPlaneFill } from "react-icons/ri";
import {
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import images from "~/images";
import { Discover, HelpCenter } from "../NavBar";
import Style from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={Style.footer}>
			<div className={Style.footer_box}>
				<div className={Style.footer_box_social}>
					<Link to="/">
						<img
							src={images.logo}
							alt="footer logo"
							className={Style.footer_box_social_logo}
						/>
					</Link>
					<p>
						The world’s first and largest digital marketplace for crypto
						collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
						exclusive digital items.
					</p>

					<div className={Style.footer_social}>
						<div className={Style.footer_social_link}>
							<TiSocialFacebook />
						</div>
						<div className={Style.footer_social_link}>
							<TiSocialLinkedin />
						</div>
						<div className={Style.footer_social_link}>
							<TiSocialTwitter />
						</div>
						<div className={Style.footer_social_link}>
							<TiSocialYoutube />
						</div>
						<div className={Style.footer_social_link}>
							<TiSocialInstagram />
						</div>
					</div>
				</div>

				<div className={Style.footer_box_discover}>
					<h3>Discover</h3>
					<Discover />
				</div>

				<div className={Style.footer_box_help}>
					<h3>Help Center</h3>
					<HelpCenter />
				</div>

				<div className={Style.subscribe}>
					<h3>Subscribe</h3>
					<div className={Style.subscribe_box}>
						<input type="email" placeholder="Enter your email *" />
						<RiSendPlaneFill className={Style.subscribe_box_send} />
					</div>
					<div className={Style.subscribe_box_info}>
						<p>
							Discover, collect, and sell extraordinary NFTs OpenSea is the
							world first and largest NFT marketplace
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
