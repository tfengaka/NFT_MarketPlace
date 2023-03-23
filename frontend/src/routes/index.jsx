import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Collection } from "~/pages";
function Router() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Home />} />
				<Route path="contact-us" element={<div>Contact Us</div>} />
				<Route path="signUp" element={<div>Sign Up</div>} />
				<Route path="login" element={<div>Sign In</div>} />
				<Route path="subscription" element={<div>Subscription</div>} />

				<Route path="account" element={<div>Account Setting</div>} />
				<Route path="uploadNFT" element={<div>Upload NFT</div>} />
				<Route path="blog" element={<div>Blog</div>} />
				<Route path="connectWallet" element={<div>Connect Wallet</div>} />
				<Route path="author" element={<div>Author Profile</div>} />
				<Route path="searchPage" element={<div>Search</div>} />
				<Route path="collection" element={<Collection />} />
				<Route path="nft-details" element={<div>NFT Details</div>} />
			</Route>
		</Routes>
	);
}

export default Router;
