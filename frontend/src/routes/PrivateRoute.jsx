import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useNFTMarketPlace } from "../contexts/MarketplaceContext";
function PrivateRoute() {
	const { address } = useNFTMarketPlace();
	if (!address) {
		toast.info("Please login to access this page");
		return <Navigate to="/" />;
	}
	return (
		<div>
			<Outlet />
		</div>
	);
}

export default PrivateRoute;
