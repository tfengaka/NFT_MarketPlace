import React from "react";

import {
	HeroSection,
	Service,
	BigNFTSilder,
	Title,
	AudioLive,
	Loader,
	FollowerTab,
	Slider,
	Collection,
	Filter,
	NFTCard,
	Category,
	Brand,
	Video,
} from "~/components";
import Style from "~/styles/home.module.css";

import { topCreators } from "~/data";

const Home = () => {
	return (
		<div className={Style.homePage}>
			<HeroSection />
			<Service />
			<BigNFTSilder />
			<Title
				heading="Audio Collection"
				paragraph="Discover the most outstanding NFTs in all topics of life."
			/>
			<AudioLive />
			{topCreators.length === 0 ? (
				<Loader />
			) : (
				<FollowerTab TopCreator={topCreators} />
			)}

			<Slider />
			<Collection />
			<Title
				heading="Featured NFTs"
				paragraph="Discover the most outstanding NFTs in all topics of life."
			/>
			<Filter />
			{/* {nfts.length == 0 ? <Loader /> : <NFTCard NFTData={nfts} />} */}
			<NFTCard NFTData={[]} />
			<Title
				heading="Browse by category"
				paragraph="Explore the NFTs in the most featured categories."
			/>
			<Category />
			<Brand />
			<Video />
		</div>
	);
};

export default Home;
