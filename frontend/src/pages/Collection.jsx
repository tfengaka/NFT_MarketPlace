import React from "react";

//INTERNAL IMPORT
import { Brand, Slider } from "../components";
import images from "../images";
import { Banner, CollectionProfile, NFTCardTwo } from "../modules/Collections";
import Style from "../styles/collection.module.css";

const Collection = () => {
	const collectionArray = [
		{
			image: images.nft_image_1,
		},
		{
			image: images.nft_image_2,
		},
		{
			image: images.nft_image_3,
		},
		{
			image: images.nft_image_1,
		},
		{
			image: images.nft_image_2,
		},
		{
			image: images.nft_image_3,
		},
		{
			image: images.nft_image_1,
		},
		{
			image: images.nft_image_2,
		},
	];
	return (
		<div className={Style.collection}>
			<Banner bannerImage={images.creatorbackground1} />
			<CollectionProfile />
			<NFTCardTwo NFTData={collectionArray} />
			<Slider />
			<Brand />
		</div>
	);
};

export default Collection;
