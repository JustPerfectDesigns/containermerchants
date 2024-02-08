import React from "react";
import Image from "next/image";
import Link from "next/link";

import s1 from "../public/images/sale1.png";
import s2 from "../public/images/sale2.png";
import s3 from "../public/images/sale3.jpeg";
import s4 from "../public/images/sale4.jpg";
import s5 from "../public/images/sale5.jpg";
import s6 from "../public/images/sale6.jpg";
import s7 from "../public/images/sale7.png";
import s8 from "../public/images/sale8.png";
import s9 from "../public/images/sale9.png";

import { client, urlFor } from "../app/lib/sanity";

import { Eye, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

async function getData(category) {
	const query = `*[_type == "product" && category->name == "${category}"] {
      _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
		description,
      "slug": slug.current,
      "category": category->{name, catText, catDesc, bigImage},
    }`;

	const data = await client.fetch(query);

	return data;
}

export const dynamic = "force-dynamic";

const BuyContainers = async ({ title, params }) => {
	const data = await getData(params.category);

	let imgage = [
		{
			id: 1,
			imgSrc: s1,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 2,
			imgSrc: s2,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 3,
			imgSrc: s3,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 4,
			imgSrc: s4,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 5,
			imgSrc: s5,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 6,
			imgSrc: s6,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 7,
			imgSrc: s7,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 8,
			imgSrc: s8,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
		{
			id: 9,
			imgSrc: s9,
			title: "20’ Open Door Dry Standard Container",
			price: "$10,000.00",
			link: "#",
		},
	];

	return (
		<div id="containers" className="bg-slate-50">
			<div className="mt-12 py-12 md:py-16 lg:py-32 md:container">
				<div className="ml-5 mr-5">
					<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center md:mx-auto">
						{title}
					</h2>

					<div className="mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
						{data.map((item) => {
							return (
								<div key={item._id}>
									<div className="w-full max-w-[519px] h-52 lg:h-60 overflow-hidden object-contain">
										<Link href={`/product/${item.slug}`}>
											<Image
												width={100}
												height={100}
												src={item.imageUrl}
												alt="container"
												className="h-full w-full object-cover"
												unoptimized
											/>
										</Link>
									</div>
									<div className="text-base py-5 px-4 bg-white">
										<Link href={`/product/${item.slug}`}>
											<h4 className="flex-1 text-[#14213F] text-lg lg:text-xl font-semibold">
												{item.name}
											</h4>
										</Link>
									</div>
									<div className="text-base border-t border-slate-100 py-5 px-4 bg-white flex justify-between items-center">
										<h5 className="flex-1 text-[#14213F] text-xl font-bold">
											${item.price}
										</h5>
										{/* <Button className="bg-orange-600 py-[21px] lg:py-6 px-4 rounded-full text-sm font-semibold text-white flex justify-center items-center gap-2">
											<ShoppingBag size={20} /> Shop Now
										</Button> */}
										<Link
											href={`/product/${item.slug}`}
											className="bg-orange-600 py-[12px] px-4 rounded-full text-sm font-semibold text-white flex justify-center items-center gap-1"
										>
											<Eye size={20} /> Quick View
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuyContainers;
