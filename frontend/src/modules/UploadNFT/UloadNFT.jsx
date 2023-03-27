import React, { useState } from "react";
import { AiTwotonePropertySafety } from "react-icons/ai";
import { MdOutlineHttp } from "react-icons/md";

//INTERNAL IMPORT
import { Button } from "~/components";
import formStyle from "../Form/Form.module.css";
import DropZone from "./DropZone/DropZone";
import Style from "./Upload.module.css";

const UloadNFT = ({ createNFT }) => {
	const [price, setPrice] = useState("");
	const [name, setName] = useState("");
	const [website, setWebsite] = useState("");
	const [ipfs, setIpfs] = useState("");

	return (
		<div className={Style.upload}>
			<DropZone
				title="JPG, PNG, WEBM , MAX 100MB"
				heading="Drag & drop file"
				subHeading="or Browse media on your device"
				name={name}
				price={price}
				website={website}
				setIPFSItem={setIpfs}
			/>

			<div className={Style.upload_box}>
				<div className={Style.upload_box_group}>
					<div className={formStyle.Form_box_input}>
						<label htmlFor="nft">NFT Name</label>
						<input
							type="text"
							placeholder="shoaib bhai"
							value={name}
							className={formStyle.Form_box_input_userName}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className={formStyle.Form_box_input}>
						<label htmlFor="Price">Price</label>
						<div className={formStyle.Form_box_input_box}>
							<div className={formStyle.Form_box_input_box_icon}>
								<AiTwotonePropertySafety />
							</div>
							<input
								type="number"
								placeholder="Price"
								value={price}
								step={0.005}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</div>
					</div>
				</div>

				<div className={formStyle.Form_box_input}>
					<label htmlFor="website">
						Website <small>{"(Optional)"}</small>
					</label>
					<div className={formStyle.Form_box_input_box}>
						<div className={formStyle.Form_box_input_box_icon}>
							<MdOutlineHttp />
						</div>

						<input
							type="text"
							placeholder="website"
							onChange={(e) => setWebsite(e.target.value)}
						/>
					</div>

					<p className={Style.upload_box_input_para}>
						Ciscrypt will include a link to this URL on this item's detail page,
						so that users can click to learn more about it. You are welcome to
						link to your own webpage with more details.
					</p>
				</div>

				<div className={Style.upload_box_btn}>
					<Button
						btnName="Upload"
						handleClick={() => createNFT(ipfs, name, price)}
						classStyle={Style.upload_box_btn_style}
					/>
					<Button
						btnName="Reset"
						handleClick={async () => {}}
						classStyle={`${Style.upload_box_btn_style} ${Style.reset}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default UloadNFT;
