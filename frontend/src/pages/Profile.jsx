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
	const { address, fetchListedNFTs, fetchMyNFTs } = useNFTMarketPlace();

	const [myNFTs, setMyNFTs] = useState([]);
	const [collectNFTs, setCollectNFTs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [collectiables, setCollectiables] = useState(true);
	const [created, setCreated] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const listedNFTs = await fetchListedNFTs();
				const myNFTs = await fetchMyNFTs();
				setMyNFTs(myNFTs);
				setCollectNFTs(listedNFTs);
			} catch (error) {
				toast.error("Error fetching NFTs");
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [fetchListedNFTs, fetchMyNFTs]);

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
					myNFTS={myNFTs}
				/>
			)}

			<Brand />
		</div>
	);
}

export default Profile;
