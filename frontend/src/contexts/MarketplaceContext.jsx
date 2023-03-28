import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const marketplaceContext = createContext();

function useMarketplaceProvider() {
	const navigate = useNavigate();
	const { contract: marketplaceContract } = useContract(
		import.meta.env.VITE_MARKETPLACE_ADDRESS
	);
	const { contract: transferFundContract } = useContract(
		import.meta.env.VITE_TRANSFERFUND_ADDRESS
	);
	const address = useAddress();

	const { mutateAsync: create } = useContractWrite(
		marketplaceContract,
		"createToken"
	);

	const convertNFTData = async (rawArr) => {
		const convertedData = await Promise.all(
			rawArr.map(async (nft) => {
				const tokenId = nft.tokenId.toNumber();
				const tokenURI = await marketplaceContract.call("tokenURI", tokenId);
				const ntfConverted = {
					tokenId,
					name: nft.name || `NFT #${tokenId}`,
					owner: nft.owner,
					seller: nft.seller,
					sold: nft.sold,
					price: ethers.utils.formatEther(nft.price.toString()),
					image: tokenURI,
				};
				return ntfConverted;
			})
		);
		return convertedData;
	};

	async function fetchMarketItems() {
		if (!marketplaceContract) return;
		const data = await marketplaceContract.call("fetchMarketItems");
		return await convertNFTData(data);
	}

	async function fetchMyNFTs() {
		if (!marketplaceContract) return;
		const data = await marketplaceContract.call("fetchMyNFTs");
		return await convertNFTData(data);
	}

	async function fetchListedNFTs() {
		if (!marketplaceContract) return;
		const data = await marketplaceContract.call("fetchItemsListed");
		return await convertNFTData(data);
	}

	async function createNewNFT(tokenURI, name, price) {
		if (!marketplaceContract) return;
		try {
			const listingPriceWei = await marketplaceContract.call("getListingPrice");
			const listingPrice = ethers.utils.formatEther(listingPriceWei.toString());
			const convertedPrice = ethers.utils.parseEther(price).toString();
			const tx = await create([
				tokenURI,
				name,
				convertedPrice,
				{
					value: ethers.utils.parseEther(listingPrice.toString()),
				},
			]);

			console.log("Transaction:", tx);
			toast.success("NFT created successfully");
			navigate("/"); // navigator function might have been defined elsewhere
		} catch (err) {
			toast.error("Error creating NFT: " + err.message || "Unknown error");
			console.error("contract call failed", err);
		}
	}

	return {
		marketplaceContract,
		transferFundContract,
		address,
		fetchMarketItems,
		fetchMyNFTs,
		fetchListedNFTs,
		createNewNFT,
	};
}

export function MarketplaceProvider({ children }) {
	const marketplace = useMarketplaceProvider();
	return (
		<marketplaceContext.Provider value={marketplace}>
			{children}
		</marketplaceContext.Provider>
	);
}

export function useNFTMarketPlace() {
	return useContext(marketplaceContext);
}
