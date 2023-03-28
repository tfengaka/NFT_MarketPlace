import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThirdwebProvider
		activeChain="binance-testnet"
		chainId={ChainId.BinanceSmartChainTestnet}
	>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThirdwebProvider>
);
