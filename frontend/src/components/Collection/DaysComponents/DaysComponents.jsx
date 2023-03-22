import React from "react";

import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "~/images";

const DaysComponents = ({ element, index }) => {
	return (
		<div className={Style.daysComponent}>
			<div className={Style.daysComponent_box}>
				<div className={Style.daysComponent_box_img}>
					<img
						src={element.background}
						className={Style.daysComponent_box_img_img}
						alt=""
					/>
				</div>

				<div className={Style.daysComponent_box_profile}>
					<img
						src={images[`creatorbackground${index + 2}`]}
						alt=""
						className={Style.daysComponent_box_img}
					/>
					<img
						src={images[`creatorbackground${index + 4}`]}
						alt=""
						className={Style.daysComponent_box_img}
					/>
					<img
						src={images[`creatorbackground${index + 3}`]}
						alt=""
						className={Style.daysComponent_box_img}
					/>
				</div>

				<div className={Style.daysComponent_box_title}>
					<h2>Amazing Collection</h2>
					<div className={Style.daysComponent_box_title_info}>
						<div className={Style.daysComponent_box_title_info_profile}>
							<img
								src={element.user}
								alt="profile"
								className={Style.daysComponent_box_title_info_profile_img}
							/>

							<p>
								Creator
								<span>
									Shoaib Bhai
									<small>
										<MdVerified />
									</small>
								</span>
							</p>
						</div>

						<div className={Style.daysComponent_box_title_info_price}>
							<small>{index + 4}.255 ETH</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DaysComponents;
