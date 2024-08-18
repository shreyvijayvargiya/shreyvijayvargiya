import React, { useEffect, useRef } from "react";
import { Card } from "@mantine/core";
import gsap from "gsap";
import {
	FaFacebook,
	FaInstagram,
	FaSnapchat,
	FaSpotify,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

const icons = [
	{ id: "twitter", icon: <FaTwitter />, link: "https://twitter.com" },
	{ id: "facebook", icon: <FaFacebook />, link: "https://facebook.com" },
	{ id: "instagram", icon: <FaInstagram />, link: "https://instagram.com" },
	{ id: "youtube", icon: <FaYoutube />, link: "https://youtube.com" },
	{ id: "snapchat", icon: <FaSnapchat />, link: "https://snapchat.com" },
	{ id: "tiktok", icon: <FaTiktok />, link: "https://tiktok.com" },
	{ id: "spotify", icon: <FaSpotify />, link: "https://tiktok.com" },
];

const FloatingDock = () => {
	const dockRef = useRef([]);

	useEffect(() => {
		dockRef.current.forEach((icon, index) => {
			gsap.set(icon, { scale: 1, y: 0 });
			icon.addEventListener("mouseenter", () => onHover(index));
			icon.addEventListener("mouseleave", onHoverEnd);
		});

		return () => {
			dockRef.current.forEach((icon) => {
				icon.removeEventListener("mouseenter", onHover);
				icon.removeEventListener("mouseleave", onHoverEnd);
			});
		};
	}, []);

	const onHover = (index) => {
		gsap.to(dockRef.current[index], { scale: 1.3, y: -10, duration: 0.5 });

		if (dockRef.current[index - 1]) {
			gsap.to(dockRef.current[index - 1], { scale: 1.1, y: -5, duration: 0.5 });
		}
		if (dockRef.current[index + 1]) {
			gsap.to(dockRef.current[index + 1], { scale: 1.1, y: -5, duration: 0.5 });
		}
	};

	const onHoverEnd = () => {
		gsap.to(dockRef.current, { scale: 1, y: 0, duration: 0.5 });
	};

	return (
		<div className="fixed top-1/2 h-20 left-0 right-0 transform max-w-xs min-w-1/4 mx-auto flex justify-center items-center space-x-4 z-50 bg-gray-50 p-2 border border-gray-200 rounded-xl hover:scale-125 duration-200">
			{icons.map((item, index) => {
				return (
					<div
						key={item.id}
						ref={(el) => (dockRef.current[index] = el)}
						className="relative"
					>
						<Card
							id={`icon-${index}`}
							className="p-3 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200 border border-gray-100"
							radius="md"
							component="a"
							target="_blank"
						>
							{item.icon}
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default FloatingDock;
