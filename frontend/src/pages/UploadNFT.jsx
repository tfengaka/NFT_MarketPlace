import React from "react";
import { useNavigate } from "react-router-dom";

import Style from "~/styles/upload-nft.module.css";
import { Backdrop, Loader } from "../components";
import { useNFTMarketPlace } from "../contexts/MarketplaceContext";
import { Upload } from "../modules/UploadNFT";

function UploadNFT() {
	const { loading, createNewNFT } = useNFTMarketPlace();
	const navigate = useNavigate();
	const handleCreateNFT = async (tokenURI, name, price) => {
		try {
			const tx = await createNewNFT(tokenURI, name, price);
			if (tx) {
				navigate("/search");
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={Style.uploadNFT}>
			<div className={Style.uploadNFT_box}>
				<div className={Style.uploadNFT_box_heading}>
					<h1>Create New NFT</h1>
					<p>
						You can set preferred display name, create your profile URL and
						manage other personal settings.
					</p>
				</div>

				<div className={Style.uploadNFT_box_title}>
					<h2>Image, Video, Audio, or 3D Model</h2>
					<p>
						File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
						GLB, GLTF. Max size: 100 MB
					</p>
				</div>

				<div className={Style.uploadNFT_box_form}>
					<Upload createNFT={handleCreateNFT} />
				</div>
			</div>
			{loading && (
				<Backdrop>
					<Loader />
				</Backdrop>
			)}
		</div>
	);
}

export default UploadNFT;
