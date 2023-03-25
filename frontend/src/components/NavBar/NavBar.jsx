import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import images from "~/images";
import { Discover, HelpCenter } from ".";
import Style from "./NavBar.module.css";

const NavBar = () => {
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
						<div className={Style.navbar_container_right_discover_text}>
							Discover
							<div className={Style.navbar_container_right_discover_box}>
								<Discover />
							</div>
						</div>
					</div>

					{/* HELP CENTER MENU */}
					<div className={Style.navbar_container_right_help}>
						<span className={Style.navbar_container_right_help_text}>
							Help Center
							<div className={Style.navbar_container_right_help_box}>
								<HelpCenter />
							</div>
						</span>
					</div>

					{/* CREATE BUTTON SECTION */}
					<ConnectWallet
						accentColor="#2d3446"
						colorMode="dark"
						btnTitle="Connect to Wallet"
						className="connectWallet"
					/>
				</div>
			</div>

			{/* {openError && <Error />} */}
		</div>
	);
};

export default NavBar;
