import React, { useState } from "react";

//INTERNAL IMPORT
import { Brand, Category } from "~/components";
import NFTDetailsPage from "~/modules/NFTDetails";

const NFTDetail = () => {
	const [nft, setNft] = useState({
		image: "",
		tokenId: "",
		name: "",
		owner: "",
		price: "",
		seller: "",
	});

	return (
		<div>
			<NFTDetailsPage nft={nft} />
			<Category />
			<Brand />
		</div>
	);
};

export default NFTDetail;
