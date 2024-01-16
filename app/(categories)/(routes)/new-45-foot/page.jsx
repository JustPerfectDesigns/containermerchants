import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import React from "react";

import CategoryHero from "@/components/CategoryHero";

import g1 from "../../../../public/images/g1.png";
import g2 from "../../../../public/images/g2.png";
import g3 from "../../../../public/images/g3.png";
import g4 from "../../../../public/images/g4.png";
import g5 from "../../../../public/images/g5.png";
import g6 from "../../../../public/images/g6.png";
import g7 from "../../../../public/images/g7.png";
import g8 from "../../../../public/images/g8.png";
import ContainerDetails from "@/components/ContainerDetails";

import bg from "../../../../public/images/bg3.png";
import BuyContainers from "@/components/BuyContainers";

const New45Foot = () => {
	const titleStyle = "text-center md:ml-auto md:mr-auto";

	const galleryData = [
		{
			id: 1,
			imgSrc: g1,
		},
		{
			id: 2,
			imgSrc: g2,
		},
		{
			id: 3,
			imgSrc: g7,
		},
		{
			id: 4,
			imgSrc: g3,
		},
		{
			id: 7,
			imgSrc: g8,
		},
		{
			id: 5,
			imgSrc: g4,
		},
		{
			id: 6,
			imgSrc: g5,
		},
		{
			id: 8,
			imgSrc: g6,
		},
	];

	return (
		<div>
			<CategoryHero
				image={bg}
				title="Brand New 45 Foot Standard Shipping Containers"
			/>
			<ContainerDetails />
			<div className="my-12">
				<BuyContainers title="Shop Brand New 45ft Containers" />
			</div>
			<Gallery
				title="What Has been and can be done with 45 foot containers"
				titleStyle={titleStyle}
				data={galleryData}
			/>
			<Testimonials />
		</div>
	);
};

export default New45Foot;
