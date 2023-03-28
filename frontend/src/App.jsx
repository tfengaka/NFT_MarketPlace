import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Footer, NavBar } from "~/components";
import { Home, NFTDetail, Profile, UploadNFT, ResellToken } from "~/pages";
import { MarketplaceProvider } from "./contexts/MarketplaceContext";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import PrivateRoute from "./routes/PrivateRoute";
import "./styles/globals.css";

function App() {
	return (
		<MarketplaceProvider>
			<NavBar />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="contact-us" element={<div>Contact Us</div>} />
					<Route path="signUp" element={<div>Sign Up</div>} />
					<Route path="login" element={<div>Sign In</div>} />

					<Route path="uploadNFT" element={<UploadNFT />} />
					<Route element={<PrivateRoute />}>
						<Route path="profile" element={<Profile />} />
						<Route path="resell-token" element={<ResellToken />} />
					</Route>
					<Route path="searchPage" element={<div>Search</div>} />
					<Route path="nft-details">
						<Route path=":slug" element={<NFTDetail />} />
					</Route>
				</Route>
			</Routes>
			<Footer />
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</MarketplaceProvider>
	);
}

export default App;
