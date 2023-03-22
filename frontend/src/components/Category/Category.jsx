import React from "react";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import { CategoryArray } from "~/data";

const Category = () => {
	return (
		<div className={Style.box_category}>
			<div className={Style.category}>
				{CategoryArray.map((el, i) => (
					<div className={Style.category_box} key={i + 1}>
						<img src={el.images} className={Style.category_box_img} alt="" />

						<div className={Style.category_box_title}>
							<span>
								<BsCircleFill />
							</span>
							<div className={Style.category_box_title_info}>
								<h4>{el.name}</h4>
								<small>{i + 1}995 NFTS</small>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Category;
