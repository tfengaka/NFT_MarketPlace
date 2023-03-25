import { Route, Routes } from "react-router-dom";

import { Footer, NavBar } from "~/components";
import { Collection, Home, UploadNFT, Author, NTFDetail } from "~/pages";
import { MarketplaceProvider } from "./contexts/MarketplaceContext";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./styles/globals.css";

function App() {
	return (
		<MarketplaceProvider>
			<div>
				<NavBar />
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="contact-us" element={<div>Contact Us</div>} />
						<Route path="signUp" element={<div>Sign Up</div>} />
						<Route path="login" element={<div>Sign In</div>} />
						<Route path="subscription" element={<div>Subscription</div>} />

						<Route path="account" element={<div>Account Setting</div>} />
						<Route path="uploadNFT" element={<UploadNFT />} />
						<Route path="blog" element={<div>Blog</div>} />
						<Route path="connectWallet" element={<div>Connect Wallet</div>} />
						<Route path="author" element={<Author />} />
						<Route path="searchPage" element={<div>Search</div>} />
						<Route path="collection" element={<Collection />} />
						<Route path="nft-details:tokenId" element={<NTFDetail />} />
					</Route>
				</Routes>
				<Footer />
			</div>
		</MarketplaceProvider>
	);
}

export default App;
