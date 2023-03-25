import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThirdwebProvider
			activeChain="binance-testnet"
			chainId={ChainId.BinanceSmartChainTestnet}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThirdwebProvider>
	</React.StrictMode>
);
