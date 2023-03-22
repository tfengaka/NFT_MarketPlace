import React, { useState } from "react";
import { RiAwardLine, RiUserFollowFill } from "react-icons/ri";
import { Link } from "react-router-dom";

//INTERNAL IMPORT
import Style from "./FollowerTab.module.css";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";

import { FollowingArray, NewsArray } from "~/data";

const FollowerTab = ({ TopCreator }) => {
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
		<div className={Style.followerTab}>
			<div className={Style.followerTab_title}>
				<h2> Top Creators List..</h2>
				<div className={Style.followerTab_tabs}>
					<div className={Style.followerTab_tabs_btn}>
						<button onClick={() => openPopular()}>
							<RiUserFollowFill /> Popular
						</button>
						<button onClick={() => openFollower()}>
							<RiUserFollowFill /> Following
						</button>
						<button onClick={() => openNews()}>
							<RiAwardLine /> NoteWorthy
						</button>
					</div>
				</div>
			</div>

			{popular && (
				<div className={Style.followerTab_box}>
					{TopCreator.map((el, i) => (
						<FollowerTabCard key={i + 1} index={i} element={el} />
					))}
				</div>
			)}

			{following && (
				<div className={Style.followerTab_box}>
					{FollowingArray.map((el, i) => (
						<FollowerTabCard key={i + 1} index={i} element={el} />
					))}
				</div>
			)}

			{news && (
				<div className={Style.followerTab_box}>
					{NewsArray.map((el, i) => (
						<FollowerTabCard key={i + 1} index={i} element={el} />
					))}
				</div>
			)}

			<div className={Style.followerTab_member}>
				<div className={Style.followerTab_member_box}>
					<Link to="#">Show me more</Link>
					<Link to="#">Become, author</Link>
				</div>
			</div>
		</div>
	);
};

export default FollowerTab;
