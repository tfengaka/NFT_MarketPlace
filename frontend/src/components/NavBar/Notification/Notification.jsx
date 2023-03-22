import React from "react";

//INTERNAL IMPORT
import Style from "./Notification.module.css";
import images from "../../../images";

const Notification = () => {
	return (
		<div className={Style.notification}>
			<p>Notification</p>
			<div className={Style.notification_box}>
				<div className={Style.notification_box_img}>
					<img
						src={images.user1}
						alt="profile"
						className={Style.notification_box_img}
					/>
				</div>
				<div className={Style.notification_box_info}>
					<h4>Shoaib Akhter</h4>
					<p>Measure action your user...</p>
					<small>3 minutes ago</small>
				</div>
				<span className={Style.notification_box_new}></span>
			</div>
		</div>
	);
};

export default Notification;
