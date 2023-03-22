import React, { useState } from "react";
//----IMPORT ICON
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { MdNotifications } from "react-icons/md";

//INTERNAL IMPORT
import { Button } from "~/components";
import images from "../../images";
import { Discover, HelpCenter, Notification, Profile, SideBar } from ".";
import Style from "./NavBar.module.css";

//IMPORT FROM SMART CONTRACT
// import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
	//----USESTATE COMPONNTS
	const [discover, setDiscover] = useState(false);
	const [help, setHelp] = useState(false);
	const [notification, setNotification] = useState(false);
	const [profile, setProfile] = useState(false);
	const [openSideMenu, setOpenSideMenu] = useState(false);

	const navigate = useNavigate;

	const openMenu = (btnText) => {
		if (btnText === "Discover") {
			setDiscover((prev) => !prev);
			setHelp(false);
			setNotification(false);
			setProfile(false);
		} else if (btnText === "Help Center") {
			setDiscover(false);
			setHelp((prev) => !prev);
			setNotification(false);
			setProfile(false);
		} else {
			setDiscover(false);
			setHelp(false);
			setNotification(false);
			setProfile(false);
		}
	};

	const openNotification = () => {
		if (!notification) {
			setNotification(true);
			setDiscover(false);
			setHelp(false);
			setProfile(false);
		} else {
			setNotification(false);
		}
	};

	const openProfile = () => {
		if (!profile) {
			setProfile(true);
			setHelp(false);
			setDiscover(false);
			setNotification(false);
		} else {
			setProfile(false);
		}
	};

	const openSideBar = () => {
		if (!openSideMenu) {
			setOpenSideMenu(true);
		} else {
			setOpenSideMenu(false);
		}
	};

	//SMART CONTRACT SECTION
	// const { currentAccount, connectWallet, openError } = useContext(
	//   NFTMarketplaceContext
	// );

	return (
		<div className={Style.navbar}>
			<div className={Style.navbar_container}>
				<div className={Style.navbar_container_left}>
					<Link to="/" className={Style.logo}>
						<img src={images.logo} alt="logo" />
					</Link>
					<div className={Style.navbar_container_left_box_input}>
						<div className={Style.navbar_container_left_box_input_box}>
							<input type="text" placeholder="Search NFT" />
							<BsSearch onClick={() => {}} className={Style.search_icon} />
						</div>
					</div>
				</div>

				{/* //END OF LEFT SECTION */}
				<div className={Style.navbar_container_right}>
					<div className={Style.navbar_container_right_discover}>
						{/* DISCOVER MENU */}
						<p onClick={() => openMenu("Discover")}>Discover</p>
						{discover && (
							<div className={Style.navbar_container_right_discover_box}>
								<Discover />
							</div>
						)}
					</div>

					{/* HELP CENTER MENU */}
					<div className={Style.navbar_container_right_help}>
						<p onClick={() => openMenu("Help Center")}>Help Center</p>
						{help && (
							<div className={Style.navbar_container_right_help_box}>
								<HelpCenter />
							</div>
						)}
					</div>

					{/* NOTIFICATION */}
					<div className={Style.navbar_container_right_notify}>
						<MdNotifications
							className={Style.notify}
							onClick={() => openNotification()}
						/>
						{notification && <Notification />}
					</div>

					{/* CREATE BUTTON SECTION */}
					<div className={Style.navbar_container_right_button}>
						{true ? (
							<Button btnName="Connect Walltet" />
						) : (
							// <Button btnName="Connect" handleClick={() => connectWallet()} />
							<Button
								btnName="Create NFT"
								handleClick={() => navigate("/uploadNFT")}
							/>
						)}
					</div>

					{/* USER PROFILE */}

					<div className={Style.navbar_container_right_profile_box}>
						<div className={Style.navbar_container_right_profile}>
							<img
								src={images.user1}
								alt="Profile"
								onClick={() => openProfile()}
								className={Style.navbar_container_right_profile}
							/>

							{profile && <Profile currentAccount={"sbdjfhsbd"} />}
						</div>
					</div>

					{/* MENU BUTTON */}

					<div className={Style.navbar_container_right_menuBtn}>
						<CgMenuRight
							className={Style.menuIcon}
							onClick={() => openSideBar()}
						/>
					</div>
				</div>
			</div>

			{/* SIDBAR CPMPONE/NT */}
			{openSideMenu && (
				<div className={Style.sideBar}>
					<SideBar
						setOpenSideMenu={setOpenSideMenu}
						// currentAccount={currentAccount}
						// connectWallet={connectWallet}
					/>
				</div>
			)}

			{/* {openError && <Error />} */}
		</div>
	);
};

export default NavBar;
