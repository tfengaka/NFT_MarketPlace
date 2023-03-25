import { useAddress, useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { createContext, useContext } from "react";

const marketplaceContext = createContext();

function useMarketplaceProvider() {
	const { contract } = useContract(import.meta.env.VITE_MARKETPLACE_ADDRESS);
	const address = useAddress();

	const fetchMarketItems = async () => {
		if (!contract) return;
		const data = await contract.call("fetchMarketItem");

		const convertedMarketItems = await Promise.all(
			data.map(async (nft) => {
				const tokenId = nft.tokenId.toNumber();
				const tokenURI = await contract.call("tokenURI", tokenId);
				const ntfConverted = {
					tokenId,
					owner: nft.owner,
					seller: nft.seller,
					sold: nft.sold,
					price: ethers.utils.formatEther(nft.price.toString()),
					image: tokenURI,
				};
				return ntfConverted;
			})
		);

		return convertedMarketItems;
	};

	return { contract, address, fetchMarketItems };
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
