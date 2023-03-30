import React, { useEffect, useState } from "react";

//INTRNAL IMPORT
import { Brand, Loader, Slider } from "../components";
import images from "../images";
import { Banner, NFTCardTwo } from "../modules/Collections";
import { SearchBar } from "../modules/Searchs";
import Style from "../styles/searchPage.module.css";

//SMART CONTRACT IMPORT
import { useNFTMarketPlace } from "../contexts/MarketplaceContext";

const Search = () => {
	const { fetchMarketItems } = useNFTMarketPlace();
	const [nfts, setNfts] = useState([]);
	const [nftsCopy, setNftsCopy] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const items = await fetchMarketItems();
				setNfts(items ? items.reverse() : []);
				setNftsCopy(items);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [fetchMarketItems]);

	const onHandleSearch = (value) => {
		const filteredNFTS = nfts.filter(({ name }) =>
			name.toLowerCase().includes(value.toLowerCase())
		);

		if (filteredNFTS.length === 0) {
			setNfts(nftsCopy);
		} else {
			setNfts(filteredNFTS);
		}
	};

	const onClearSearch = () => {
		if (nfts.length && nftsCopy.length) {
			setNfts(nftsCopy);
		}
	};

	return (
		<div className={Style.searchPage}>
			<Banner bannerImage={images.creatorbackground2} />
			<SearchBar
				onHandleSearch={onHandleSearch}
				onClearSearch={onClearSearch}
			/>
			{/* <Filter /> */}
			{nfts.length === 0 ? <Loader /> : <NFTCardTwo NFTData={nfts} />}
			<Slider />
			<Brand />
		</div>
	);
};

export default Search;
