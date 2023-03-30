import React from "react";

//INTERNAL IMPORT
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/";
import images from "../../images";
import Style from "./Brand.module.css";

const Brand = () => {
	const navigate = useNavigate();
	return (
		<div className={Style.Brand}>
			<div className={Style.Brand_box}>
				<div className={Style.Brand_box_left}>
					<a href="/">
						<img
							src={images.logo}
							className={Style.Brand_box_left_logo}
							alt=""
						/>
					</a>
					<h1>Earn free crypto with Ciscrypt</h1>
					<p>A creative agency that lead and inspire.</p>

					<div className={Style.Brand_box_left_btn}>
						<Button
							btnName="Create"
							handleClick={() => navigate("/uploadNFT")}
						/>
						<Button
							btnName="Discover"
							handleClick={() => navigate("/search")}
						/>
					</div>
				</div>
				<div className={Style.Brand_box_right}>
					<img src={images.earn} alt="brand logo" width={800} height={600} />
				</div>
			</div>
		</div>
	);
};

export default Brand;
