import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

//INTERNAL IMPORT
import { Brand, Category, Title } from "~/components";
import NFTDetailsPage from "~/modules/NFTDetails";

const NFTDetail = () => {
	const { state } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<NFTDetailsPage nft={state} />
			<Title
				heading="Browse by category"
				paragraph="Explore the NFTs in the most featured categories."
			/>
			<Category />
			<Brand />
		</div>
	);
};

export default NFTDetail;
