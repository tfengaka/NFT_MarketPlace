import React, { useState } from "react";

import { DiComposer } from "react-icons/di";
import { GrClose } from "react-icons/gr";
import {
	TiArrowSortedDown,
	TiSocialFacebook,
	TiSocialInstagram,
	TiSocialLinkedin,
	TiSocialTwitter,
	TiSocialYoutube,
} from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./SideBar.module.css";

import Button from "../../Button/Button";

const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
	//------USESTATE
	const [openDiscover, setOpenDiscover] = useState(false);
	const [openHelp, setOpenHelp] = useState(false);

	const navigate = useNavigate();

	//--------DISCOVER NAVIGATION MENU
	const discover = [
		{
			name: "Collection",
			link: "collection",
		},
		{
			name: "Search",
			link: "searchPage",
		},
		{
			name: "Author Profile",
			link: "author",
		},
		{
			name: "NFT Details",
			link: "NFT-details",
		},
		{
			name: "Account Setting",
			link: "account",
		},
		{
			name: "Upload NFT",
			link: "uploadNFT",
		},
		{
			name: "Connect Wallet",
			link: "connectWallet",
		},
		{
			name: "Blog",
			link: "blog",
		},
	];
	//------HELP CNTEER
	const helpCenter = [
		{
			name: "About",
			link: "aboutus",
		},
		{
			name: "Contact Us",
			link: "contactus",
		},
		{
			name: "Sign Up",
			link: "signUp",
		},
		{
			name: "LogIn",
			link: "login",
		},
		{
			name: "Subscription",
			link: "subscription",
		},
	];

	const openDiscoverMenu = () => {
		if (!openDiscover) {
			setOpenDiscover(true);
		} else {
			setOpenDiscover(false);
		}
	};

	const openHelpMenu = () => {
		if (!openHelp) {
			setOpenHelp(true);
		} else {
			setOpenHelp(false);
		}
	};

	const closeSideBar = () => {
		setOpenSideMenu(false);
	};

	return (
		<div className={Style.sideBar}>
			<GrClose
				className={Style.sideBar_closeBtn}
				onClick={() => closeSideBar()}
			/>

			<div className={Style.sideBar_box}>
				<p>
					<a href="/">
						<DiComposer className={Style.sideBar_box_logo} />
					</a>
				</p>
				<p>
					Discover the most outstanding articles on all topices of NFT & write
					your own stories and share them
				</p>
				<div className={Style.sideBar_social}>
					<a href="#">
						<TiSocialFacebook />
					</a>
					<a href="#">
						<TiSocialLinkedin />
					</a>
					<a href="#">
						<TiSocialTwitter />
					</a>
					<a href="#">
						<TiSocialYoutube />
					</a>
					<a href="#">
						<TiSocialInstagram />
					</a>
				</div>
			</div>

			<div className={Style.sideBar_menu}>
				<div>
					<div
						className={Style.sideBar_menu_box}
						onClick={() => openDiscoverMenu()}
					>
						<p>Discover</p>
						<TiArrowSortedDown />
					</div>

					{openDiscover && (
						<div className={Style.sideBar_discover}>
							{discover.map((el, i) => (
								<p key={i + 1}>
									<Link to={el.link}>{el.name}</Link>
								</p>
							))}
						</div>
					)}
				</div>

				<div>
					<div
						className={Style.sideBar_menu_box}
						onClick={() => openHelpMenu()}
					>
						<p>Help Center</p>
						<TiArrowSortedDown />
					</div>

					{openHelp && (
						<div className={Style.sideBar_discover}>
							{helpCenter.map((el, i) => (
								<p key={i + 1}>
									<Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
								</p>
							))}
						</div>
					)}
				</div>
			</div>

			<div className={Style.sideBar_button}>
				{currentAccount === "" ? (
					<Button btnName="connect" handleClick={() => connectWallet()} />
				) : (
					<Button btnName="Create" handleClick={() => navigate("/uploadNFT")} />
				)}

				<Button btnName="Connect Wallet" handleClick={() => {}} />
			</div>
		</div>
	);
};

export default SideBar;
