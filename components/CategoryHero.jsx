import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CategoryHero = ({ image, title }) => {
	return (
		<div
			style={{
				// use the src property of the image object
				backgroundImage: `url(${image.src})`,
				// other styles
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100%",
				height: "70vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="ml-5 mr-5 md:container">
				<h1 className="text-white text-4xl md:text-5xl lg:text-7xl md:w-4/5 font-bold leading-10 -mt-12">
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
