import {
	useAddress,
	useContract,
	useContractRead,
	useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
const marketplaceContext = createContext();

function useMarketplaceProvider() {
	const [loading, setLoading] = useState(false);

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

	const { mutateAsync: createMarketSale } = useContractWrite(
		marketplaceContract,
		"createMarketSale"
	);
	const { mutateAsync: resellToken } = useContractWrite(
		marketplaceContract,
		"resellToken"
	);
	const { data: rawMarketItems } = useContractRead(
		marketplaceContract,
		"fetchMarketItems"
	);
	const { data: rawItemsListed } = useContractRead(
		marketplaceContract,
		"fetchItemsListed"
	);
	const { data: rawMyNFTs } = useContractRead(
		marketplaceContract,
		"fetchMyNFTs"
	);

	const convertNFTData = async (rawArr) => {
		if (!rawArr || rawArr.length === 0) return [];
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
		if (!marketplaceContract) {
			return;
		}
		try {
			return await convertNFTData(rawMarketItems);
		} catch (error) {
			console.error(error);
		}
	}

	async function fetchListedNFTandMyNFT(type = "listed") {
		if (!marketplaceContract) {
			toast.error("Error creating NFT:  No marketplace contract");
			return;
		}
		if (!address) {
			toast.error("Error creating NFT:  No wallet connected");
			return;
		}
		if (type === "listedNFT") return await convertNFTData(rawItemsListed);
		if (type === "myNFT") return await convertNFTData(rawMyNFTs);
	}

	async function createNewNFT(tokenURI, name, price) {
		if (!marketplaceContract) {
			toast.error("Error creating NFT:  No marketplace contract");
			return;
		}
		if (!address) {
			toast.error("Error creating NFT:  No wallet connected");
			return;
		}
		setLoading(true);
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

			toast.success("Successfully!\nTrascation hash: " + tx.hash);
			console.log("Transaction:", tx);
			return tx;
		} catch (err) {
			toast.error(`${String(err.message).substring(0, 200)}...`);
			console.error("contract call failed", err);
		} finally {
			setLoading(false);
		}
	}

	async function buyNFT(nft) {
		if (!marketplaceContract) {
			toast.error("Error creating NFT:  No marketplace contract");
			return;
		}
		if (!address) {
			toast.error("Error creating NFT:  No wallet connected");
			return;
		}
		setLoading(true);
		try {
			const price = ethers.utils.parseEther(nft.price.toString());
			const tx = await createMarketSale([
				nft.tokenId,
				{
					value: price,
				},
			]);
			toast.success("Successfully\nTrascation hash: " + tx.hash);
			return tx;
		} catch (err) {
			toast.error(`${String(err.message).substring(0, 200)}...`);
			console.error("contract call failed", err);
		} finally {
			setLoading(false);
		}
	}

	async function reSellingToken(nft) {
		if (!marketplaceContract) {
			toast.error("Error creating NFT:  No marketplace contract");
			return;
		}
		if (!address) {
			toast.error("Error creating NFT:  No wallet connected");
			return;
		}
		setLoading(true);
		try {
			const listingPriceWei = await marketplaceContract.call("getListingPrice");
			const listingPrice = ethers.utils.formatEther(listingPriceWei.toString());
			const price = ethers.utils.parseEther(nft.price.toString());
			const tx = await resellToken([
				nft.tokenId,
				price,
				{
					value: ethers.utils.parseEther(listingPrice.toString()),
				},
			]);
			toast.success("Successfully\nTrascation hash: " + tx.hash);
			return tx;
		} catch (err) {
			toast.error(`${String(err.message).substring(0, 200)}...`);
			console.error("contract call failed", err);
		} finally {
			setLoading(false);
		}
	}

	return {
		loading,
		marketplaceContract,
		transferFundContract,
		address,
		fetchMarketItems,
		fetchListedNFTandMyNFT,
		createNewNFT,
		buyNFT,
		reSellingToken,
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
