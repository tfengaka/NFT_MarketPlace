import React, { useCallback, useState } from "react";
import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { MdTimer, MdVerified } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import images from "~/images";
import Button from "../Button/Button";
import Style from "./BigNFTSilder.module.css";

const sliderData = [
	{
		title: "Hello NFT",
		id: 1,
		name: "Daulat Hussain",
		collection: "GYm",
		price: "00664 ETH",
		like: 243,
		image: images.thirdweb,
		nftImage: images.nft_image_1,
		time: {
			days: 21,
			hours: 40,
			minutes: 81,
			seconds: 15,
		},
	},
	{
		title: "Buddy NFT",
		id: 2,
		name: "Shoaib Hussain",
		collection: "Home",
		price: "0000004 ETH",
		like: 243,
		image: images.thirdweb,
		nftImage: images.nft_image_2,
		time: {
			days: 77,
			hours: 11,
			minutes: 21,
			seconds: 45,
		},
	},
	{
		title: "Gym NFT",
		id: 3,
		name: "Raayan Hussain",
		collection: "GYm",
		price: "0000064 ETH",
		like: 243,
		image: images.thirdweb,
		nftImage: images.nft_image_3,
		time: {
			days: 37,
			hours: 20,
			minutes: 11,
			seconds: 55,
		},
	},
	{
		title: "Home NFT",
		id: 4,
		name: "Raayan Hussain",
		collection: "GYm",
		price: "4664 ETH",
		like: 243,
		image: images.thirdweb,
		nftImage: images.nft_image_1,
		time: {
			days: 87,
			hours: 29,
			minutes: 10,
			seconds: 15,
		},
	},
];

const BigNFTSilder = () => {
	const [idNumber, setIdNumber] = useState(0);

	//-------INC
	const inc = useCallback(() => {
		if (idNumber + 1 < sliderData.length) {
			setIdNumber(idNumber + 1);
		}
	}, [idNumber]);

	//-------DEC
	const dec = useCallback(() => {
		if (idNumber > 0) {
			setIdNumber(idNumber - 1);
		}
	}, [idNumber]);

	return (
		<div className={Style.bigNFTSlider}>
			<div className={Style.bigNFTSlider_box}>
				<div className={Style.bigNFTSlider_box_left}>
					<h2>{sliderData[idNumber].title}</h2>
					<div className={Style.bigNFTSlider_box_left_creator}>
						<div className={Style.bigNFTSlider_box_left_creator_profile}>
							<div className={Style.bigNFTSlider_box_left_creator_profile_img}>
								<img src={sliderData[idNumber].image} alt="profile" />
							</div>

							<div className={Style.bigNFTSlider_box_left_creator_profile_info}>
								<p>Creator</p>
								<h4>
									{sliderData[idNumber].name}{" "}
									<span>
										<MdVerified />
									</span>
								</h4>
							</div>
						</div>

						<div className={Style.bigNFTSlider_box_left_creator_collection}>
							<AiFillFire
								className={Style.bigNFTSlider_box_left_creator_collection_icon}
							/>
						</div>
					</div>

					<div className={Style.bigNFTSlider_box_left_bidding}>
						<div className={Style.bigNFTSlider_box_left_bidding_box}>
							<small>Current Bid</small>
							<span>
								<strong>{sliderData[idNumber].price}</strong>
								<span>{"($221,21)"}</span>
							</span>
						</div>

						<p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
							<MdTimer
								className={Style.bigNFTSlider_box_left_bidding_box_icon}
							/>
							<span>Auction ending in</span>
						</p>

						<div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
							<div
								className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
							>
								<p>{sliderData[idNumber].time.days}</p>
								<span>Days</span>
							</div>

							<div
								className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
							>
								<p>{sliderData[idNumber].time.hours}</p>
								<span>Hours</span>
							</div>

							<div
								className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
							>
								<p>{sliderData[idNumber].time.minutes}</p>
								<span>mins</span>
							</div>

							<div
								className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
							>
								<p>{sliderData[idNumber].time.seconds}</p>
								<span>secs</span>
							</div>
						</div>

						<div className={Style.bigNFTSlider_box_left_button}>
							<Button btnName="Place" handleClick={() => {}} />
							<Button btnName="View" handleClick={() => {}} />
						</div>
					</div>

					<div className={Style.bigNFTSlider_box_left_sliderBtn}>
						<TbArrowBigLeftLines
							className={Style.bigNFTSlider_box_left_sliderBtn_icon}
							onClick={() => dec()}
						/>
						<TbArrowBigRightLine
							className={Style.bigNFTSlider_box_left_sliderBtn_icon}
							onClick={() => inc()}
						/>
					</div>
				</div>

				<div className={Style.bigNFTSlider_box_right}>
					<div className={Style.bigNFTSlider_box_right_box}>
						<img
							src={sliderData[idNumber].nftImage}
							alt="NFT"
							className={Style.bigNFTSlider_box_right_box_img}
						/>

						<div className={Style.bigNFTSlider_box_right_box_like}>
							<AiFillHeart />
							<span>{sliderData[idNumber].like}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BigNFTSilder;
