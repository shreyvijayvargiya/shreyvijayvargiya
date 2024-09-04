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
		gsap.to(".container", {
			rotation: isOpen ? "+=720" : "0",
			duration: 5,
			ease: "circ",
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
					<span
						className={`text-xs text-gray-100 group-hover:block group-hover:ml-2 hidden transition-transform duration-300 transform`}
					>
						{isOpen ? "Click to Close" : "Click to Expand"}
					</span>
				</div>

				<div
					className={`container absolute flex justify-center items-center w-full h-full p-10 rounded-full bg-gradient-to-r from-gray-50 via-purple-300 to-pink-50`}
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
								<item.Icon size={20} color="white" />
								<span className="text-sm text-gray-100 group-hover:inline-block group-hover:ml-2 hidden duration-200 ease-in transition-all">
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
