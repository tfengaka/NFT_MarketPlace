import React, { useEffect, useState } from "react";

import { Brand, Loader } from "~/components";
import images from "../images";
import {
	AuthorNFTCardBox,
	AuthorProfileCard,
	AuthorTaps,
} from "../modules/Authors";
import { Banner } from "../modules/Collections";
import Style from "../styles/author.module.css";

//IMPORT SMART CONTRACT DATA
import { toast } from "react-toastify";
import { useNFTMarketPlace } from "~/contexts/MarketplaceContext";

function Profile() {
	const { address, fetchMarketItems, fetchListedNFTandMyNFT } =
		useNFTMarketPlace();

	const [sellingNFTs, setSellingNFTs] = useState([]);
	const [collectNFTs, setCollectNFTs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [collectiables, setCollectiables] = useState(true);
	const [created, setCreated] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const listedNFTs = await fetchListedNFTandMyNFT("listedNFT");
				const marketItems = await fetchMarketItems();
				setCollectNFTs(listedNFTs.filter((nft) => nft.owner === address));
				setSellingNFTs(marketItems.filter((nft) => nft.seller === address));
			} catch (error) {
				toast.error("Error fetching NFTs");
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [address, fetchListedNFTandMyNFT, fetchMarketItems]);

	return (
		<div className={Style.author}>
			<Banner bannerImage={images.creatorbackground2} />
			<AuthorProfileCard currentAccount={address} />
			<AuthorTaps
				setCollectiables={setCollectiables}
				setCreated={setCreated}
				currentAccount={address}
			/>
			{loading ? (
				<Loader />
			) : (
				<AuthorNFTCardBox
					collectiables={collectiables}
					created={created}
					nfts={collectNFTs}
					myNFTS={sellingNFTs}
				/>
			)}

			<Brand />
		</div>
	);
}

export default Profile;
