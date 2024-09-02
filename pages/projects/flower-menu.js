import React, { useState } from "react";
import {
	HomeIcon,
	Laptop2Icon,
	PersonStandingIcon,
	Settings,
	MenuIcon,
	CrossIcon,
} from "lucide-react";
import { gsap } from "gsap";

const CircleMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const circleItems = [
		{ Icon: HomeIcon, label: "Home" },
		{ Icon: Laptop2Icon, label: "Product" },
		{ Icon: PersonStandingIcon, label: "About" },
		{ Icon: Settings, label: "Settings" },
	];

	const handleMenuClick = () => {
		setIsOpen(!isOpen);
    	gsap.to(".container", {
				rotation: isOpen ? "+=720" : "0",
				scale: isOpen ? 0 : 1,
				duration: 1,
				stagger: 0.2,
			});
		gsap.to(".circle-item", {
			rotation: isOpen ? "+=360" : "0",
			scale: isOpen ? 0 : 1,
			duration: 1,
			stagger: 0.2,
		});
	};

	return (
		<div className="relative flex justify-center items-center h-screen">
			<div className="relative flex justify-center items-center w-64 h-64">
				<div
					className=" bg-gray-900 hover:bg-gray-800 p-2 group cursor-pointer rounded-md flex justify-center items-center"
					onClick={handleMenuClick}
					style={{ zIndex: 1 }}
				>
					{isOpen ? (
						<CrossIcon size={20} color="white" />
					) : (
						<MenuIcon size={20} color="white" />
					)}
					<span className="text-xs text-gray-100 group-hover:inline-block group-hover:ml-2 hidden">
						{isOpen ? "Click to Close" : "Click to Expand"}
					</span>
				</div>

				<div
					className={`container absolute flex justify-center items-center w-full h-full`}
				>
					{circleItems.map((item, index) => (
						<div
							key={index}
							className="circle-item absolute flex items-center justify-center cursor-pointer rounded-md"
							style={{
								transform: `rotate(${index * 90}deg) translateX(100px) rotate(${
									index * 90
								}deg)`,
								transition: "transform 0.5s ease",
							}}
						>
							<div className="bg-gray-900 p-2 rounded-md hover:bg-gray-800 group hover:flex">
								<item.Icon size={24} color="white" />
								<span className="text-gray-100 group-hover:inline-block group-hover:ml-2 hidden">
									{item.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CircleMenu;
