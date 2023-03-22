import React from "react";

import { FaRegImage, FaUserAlt, FaUserEdit } from "react-icons/fa";
import { MdHelpCenter } from "react-icons/md";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import images from "~/images";
import Style from "./Profile.module.css";

const Profile = ({ currentAccount }) => {
	return (
		<div className={Style.profile}>
			<div className={Style.profile_account}>
				<img
					src={images.user1}
					alt="user profile"
					className={Style.profile_account_img}
				/>

				<div className={Style.profile_account_info}>
					<p>Shoaib Bhai</p>
					<small>{currentAccount.slice(0, 18)}..</small>
				</div>
			</div>

			<div className={Style.profile_menu}>
				<div className={Style.profile_menu_one}>
					<div className={Style.profile_menu_one_item}>
						<FaUserAlt />
						<p>
							<Link to="/author">My Profile</Link>
						</p>
					</div>
					<div className={Style.profile_menu_one_item}>
						<FaRegImage />
						<p>
							<Link to="/author">My Items</Link>
						</p>
					</div>
					<div className={Style.profile_menu_one_item}>
						<FaUserEdit />
						<p>
							<Link to="/account">Edit Profile</Link>
						</p>
					</div>
				</div>

				<div className={Style.profile_menu_two}>
					<div className={Style.profile_menu_one_item}>
						<MdHelpCenter />
						<p>
							<Link to="/contact-us">Help</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
