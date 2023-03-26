import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MediaRenderer } from "@thirdweb-dev/react";
//INTRNAL IMPORT
import { Loader } from "~/components";
import Style from "./DropZone.module.css";
import images from "~/images";
import { useStorageUpload } from "@thirdweb-dev/react";

const DropZone = ({
	title,
	heading,
	subHeading,
	name,
	website,
	price,
	setIPFSItem,
}) => {
	const [fileUrl, setFileUrl] = useState(null);
	const [isLoading, setLoading] = useState(null);
	const { mutateAsync: upload } = useStorageUpload();
	const onDrop = useCallback(
		async (acceptedFiles) => {
			setLoading(true);
			try {
				const uris = await upload({ data: acceptedFiles });
				setFileUrl(uris[0]);
				setIPFSItem(uris[0]);
			} catch (err) {
				console.err(err);
			} finally {
				setLoading(false);
			}
		},
		[upload, setIPFSItem]
	);

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			image: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
			video: ["video/mp4", "video/ogg"],
			audio: ["audio/ogg", "audio/wav", "audio/mp3"],
		},
		maxSize: 5000000,
	});
	return (
		<div className={Style.DropZone}>
			<div className={Style.DropZone_box} {...getRootProps()}>
				<input {...getInputProps()} />
				<div className={Style.DropZone_box_input}>
					<p>{title}</p>
					<div className={Style.DropZone_box_input_img}>
						<img
							src={images.upload}
							alt="upload"
							className={Style.DropZone_box_input_img_img}
						/>
					</div>
					<p>{heading}</p>
					<p>{subHeading}</p>
				</div>
			</div>

			{(isLoading || fileUrl) && (
				<aside className={Style.DropZone_box_aside}>
					<div className={Style.DropZone_box_aside_box}>
						<div className={Style.DropZone_box_aside_box_nft}>
							{isLoading ? (
								<Loader />
							) : (
								<MediaRenderer
									src={fileUrl}
									poster={images.creatorbackground10}
									alt=""
									width="100%"
									height="100%"
									className={Style.DropZone_box_aside_box_img}
								/>
							)}
						</div>

						<div className={Style.DropZone_box_aside_box_preview}>
							<div className={Style.DropZone_box_aside_box_preview_one}>
								<samp>NFT Name :</samp>
								<span>{name || ""}</span>
							</div>
							<div className={Style.DropZone_box_aside_box_preview_one}>
								<samp>Price :</samp>
								<span>{`${price ? price : 0} ether`}</span>
							</div>
							<div className={Style.DropZone_box_aside_box_preview_one}>
								<samp>Website :</samp>
								<span>{website || ""}</span>
							</div>
						</div>
					</div>
				</aside>
			)}
		</div>
	);
};

export default DropZone;
