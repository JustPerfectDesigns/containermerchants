import React from "react";
import bg from "../public/images/storage2040-bg.png";
import { Button } from "./ui/button";

const HeroSection = () => {
	return (
		// <section className="ml-5 mr-5 md:container md:ml-6 md:mr-6 lg:flex lg:flex-col lg:justify-center lg:items-center">
		// 	<h1 className="text-4xl md:text-5xl lg:text-7xl text-center text-[#14213F] font-bold lg:max-w-4xl">
		// 		Your <span className="text-orange-600">Premier</span> Source for
		// 		High-Quality <span className="text-orange-600">Shipping</span>{" "}
		// 		Containers
		// 	</h1>
		// 	<p className="text-[#393939] font-semibold text-center mt-3 md:text-lg md:mt-5 lg:max-w-4xl">
		// 		Unlock the Power of Reliable Container Solutions for Your Shipping and
		// 		Construcion Needs
		// 	</p>

		<div
			style={{
				// use the src property of the image object
				backgroundImage: `url(${bg.src})`,
				// other styles
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				width: "100%",
				height: "calc(100vh - 4rem)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
			className="homeBg relative"
		>
			<div className="ml-5 mr-5 md:container z-10 lg:mt-12">
				<h1 className="text-white text-4xl md:text-5xl lg:text-7xl lg:w-4/5 font-bold -mt-32">
					Your Premier Destination for Superior Shipping and Construction
					Containers
				</h1>
				<p className="text-white mt-4 font-semibold">
					Elevating Reliability, Redefining Excellence in Container Solutions
				</p>
				<div className="flex items-center gap-2 mt-8">
					<Button
						className="py-6 px-6 font-semibold text-white border border-white"
						variant="ghost"
					>
						About Us
					</Button>
					<Button className="py-6 px-6 font-semibold bg-orange-600">
						Shop Containers
					</Button>
				</div>
			</div>
		</div>
		// </section>
	);
};

export default HeroSection;
