import React, { useState } from "react";
import {
	HomeIcon,
	Laptop2Icon,
	PersonStandingIcon,
	Settings,
	MenuIcon,
	CrossIcon,
	PhoneCall,
} from "lucide-react";
import { gsap } from "gsap";

const FlowerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const circleItems = [
		{ Icon: HomeIcon, label: "Home" },
		{ Icon: Laptop2Icon, label: "Product" },
		{ Icon: PersonStandingIcon, label: "About" },
		{ Icon: Settings, label: "Settings" },
		{ Icon: PhoneCall, label: "Phone" },
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

	const numberOfItems = circleItems.length;
	const angle = 360 / numberOfItems;
	return (
		<div className="relative flex justify-center items-center h-screen">
			<div className="relative flex justify-center items-center w-64 h-64">
				<div
					className=" bg-gray-900 hover:bg-gray-800 p-2 group cursor-pointer rounded-md flex justify-center items-center"
					onClick={handleMenuClick}
					style={{ zIndex: 1 }}
				>
					{isOpen ? (
						<CrossIcon size={18} color="white" />
					) : (
						<MenuIcon size={18} color="white" />
					)}
					<span className="text-xs text-gray-100 group-hover:inline-block group-hover:ml-2 hidden">
						{isOpen ? "Click to Close" : "Click to Expand"}
					</span>
				</div>

				<div
					className={`container absolute flex justify-center items-center w-full h-full border-2 p-10 rounded-full`}
				>
					{circleItems.map((item, index) => (
						<div
							key={index}
							className="circle-item absolute cursor-pointer rounded-md"
							style={{
								transform: `rotate(${
									index * angle
								}deg) translateX(150px) rotate(${-index * angle}deg)`,
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

export default FlowerMenu;
