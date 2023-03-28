import React from "react";

//INTERNAL IMPORT
import { NFTCardTwo } from "../../Collections";
import Style from "./AuthorNFTCardBox.module.css";

const AuthorNFTCardBox = ({ collectiables, created, nfts, myNFTS }) => {
	return (
		<div className={Style.AuthorNFTCardBox}>
			{collectiables && <NFTCardTwo NFTData={nfts} />}
			{created && <NFTCardTwo NFTData={myNFTS} />}
		</div>
	);
};

export default AuthorNFTCardBox;
