import React, { useEffect, useState } from "react";

import {
	AudioLive,
	BigNFTSilder,
	Brand,
	HeroSection,
	Loader,
	NFTCard,
	Service,
	Slider,
	Title,
	Video,
} from "~/components";
import Style from "~/styles/home.module.css";

import { useNFTMarketPlace } from "../contexts/MarketplaceContext";

const Home = () => {
	const [marketItems, setMarketItems] = useState([]);
	const { fetchMarketItems } = useNFTMarketPlace();

	useEffect(() => {
		(async () => {
			try {
				const items = await fetchMarketItems();
				console.log("items", items);
				setMarketItems(items);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [fetchMarketItems]);

	return (
		<div className={Style.homePage}>
			<HeroSection />
			<Service />
			<BigNFTSilder />
			<Title
				heading="Featured NFTs"
				paragraph="Discover the most outstanding NFTs in all topics of life."
			/>
			{marketItems && marketItems.length > 0 ? (
				<NFTCard NFTData={marketItems} />
			) : (
				<Loader />
			)}
			<Title
				heading="Audio Collection"
				paragraph="Discover the most outstanding NFTs in all topics of life."
			/>
			<AudioLive />
			<Slider />
			<Brand />
			<Video />
		</div>
	);
};

export default Home;
