import React from "react";
import c1 from "../public/images/container1.webp";
import Image from "next/image";
import { Button } from "./ui/button";
import { BadgeCheck, Briefcase, Construction, Home } from "lucide-react";

const ContainerDetails = () => {
	return (
		<div className="mt-32 md:my-16 lg:my-32 ml-5 mr-5 md:container lg:px-40">
			<h2 className="font-bold text-2xl md:text-[26px] lg:text-4xl md:max-w-96 lg:max-w-[500px] text-[#14213F] capitalize text-center md:mx-auto">
				Innovation that can be contained
			</h2>
			<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
				<div className="p-5 grid gap-2 border">
					<Home className="text-orange-600" size={50} />
					<h3 className="text-xl font-semibold text-orange-600">At Home</h3>
					<ul>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> School
							Buildings
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Apartments
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Hotels
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Emergency
							Hurricane Shelters
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Museums
						</li>
					</ul>
				</div>
				<div className="p-5 grid gap-2 border">
					<Briefcase className="text-orange-600" size={50} />
					<h3 className="text-xl font-semibold text-orange-600">Work</h3>
					<ul>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Office
							Buildings
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Retail Outlet
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Data Centres
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Medical
							Centres
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Training
							Facilities
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Transportable
							Factories
						</li>
					</ul>
				</div>
				<div className="p-5 grid gap-2 border">
					<Construction className="text-orange-600" size={50} />
					<h3 className="text-xl font-semibold text-orange-600">Rebuilding</h3>
					<ul>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Home
							Extensions
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Sheds
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Garages
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Swimming
							Pools
						</li>
						<li className="flex items-center gap-2">
							<BadgeCheck size={16} className="text-orange-600" /> Workshops
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ContainerDetails;
