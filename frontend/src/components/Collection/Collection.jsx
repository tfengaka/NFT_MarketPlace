import React, { useState } from "react";
import {
	BsCalendar3,
	BsFillAlarmFill,
	BsFillCalendarDateFill,
} from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";

import { CardArray, FollowingArray, NewsArray } from "~/data";

const Collection = () => {
	const [popular, setPopular] = useState(true);
	const [following, setFollowing] = useState(false);
	const [news, setNews] = useState(false);

	const openPopular = () => {
		if (!popular) {
			setPopular(true);
			setFollowing(false);
			setNews(false);
		}
	};

	const openFollower = () => {
		if (!following) {
			setPopular(false);
			setFollowing(true);
			setNews(false);
		}
	};

	const openNews = () => {
		if (!news) {
			setPopular(false);
			setFollowing(false);
			setNews(true);
		}
	};
	return (
		<div className={Style.collection}>
			<div className={Style.collection_title}>
				<h2>Top List Creators</h2>
				<div className={Style.collection_collections}>
					<div className={Style.collection_collections_btn}>
						<button onClick={() => openPopular()}>
							<BsFillAlarmFill /> 24 hours
						</button>
						<button onClick={() => openFollower()}>
							<BsCalendar3 /> 7 days
						</button>
						<button onClick={() => openNews()}>
							<BsFillCalendarDateFill /> 30 days
						</button>
					</div>
				</div>
			</div>
			{popular && (
				<div className={Style.collection_box}>
					{CardArray.map((element, index) => (
						<DaysComponent key={index + 1} index={index} element={element} />
					))}
				</div>
			)}

			{following && (
				<div className={Style.collection_box}>
					{FollowingArray.map((element, index) => (
						<DaysComponent key={index + 1} index={index} element={element} />
					))}
				</div>
			)}

			{news && (
				<div className={Style.collection_box}>
					{NewsArray.map((element, index) => (
						<DaysComponent key={index + 1} index={index} element={element} />
					))}
				</div>
			)}
		</div>
	);
};

export default Collection;
