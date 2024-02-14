import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const CategoryHero = ({ image, title }) => {
	return (
		<div className="relative">
			<div className="relative h-[350px] md:h-[500px] w-full">
				<Image
					src={image}
					alt="Category Image"
					layout="fill"
					objectFit="cover"
					className="object-center z-[-1]"
				/>
			</div>
			<div className="ml-5 mr-5 md:container z-30 md:flex md:flex-col md:items-center md:justify-center">
				<h1 className="text-white text-4xl -mt-[18rem] md:-mt-[30rem] md:text-5xl lg:text-7xl md:w-4/5 md:flex md:flex-col md:items-center md:justify-center font-bold leading-10 md:text-center">
					{title}
				</h1>
				<div className="mt-12 flex items-center">
					<Button className="px-5 py-6 bg-white text-black hover:bg-slate-200 text-bold hover:text-black">
						<Link href="#gallery" className="text-bold">
							See Our Portfolio
						</Link>
					</Button>
					<Button
						variant="ghost"
						className="px-5 py-6 text-white hover:bg-transparent hover:text-orange-600"
					>
						<Link href="#containers" className="text-bold">
							Shop Containers
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CategoryHero;
