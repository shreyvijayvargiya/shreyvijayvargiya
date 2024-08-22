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
import colors from "tailwindcss/colors";

const icons = [
	{
		id: "twitter",
		icon: <FaTwitter color={colors.blue[400]} size={24} />,
		link: "https://twitter.com",
	},
	{
		id: "facebook",
		icon: <FaFacebook color={colors.indigo[500]} size={24} />,
		link: "https://facebook.com",
	},
	{
		id: "instagram",
		icon: <FaInstagram color={colors.pink[500]} size={24} />,
		link: "https://instagram.com",
	},
	{
		id: "youtube",
		icon: <FaYoutube color={colors.red[500]} size={24} />,
		link: "https://youtube.com",
	},
	{
		id: "snapchat",
		icon: <FaSnapchat color={colors.yellow[500]} size={24} />,
		link: "https://snapchat.com",
	},
	{
		id: "tiktok",
		icon: <FaTiktok color={colors.orange[500]} size={24} />,
		link: "https://tiktok.com",
	},
	{
		id: "spotify",
		icon: <FaSpotify color={colors.green[500]} size={24} />,
		link: "https://tiktok.com",
	},
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
		gsap.to(dockRef.current[index], { scale: 1.3, y: -10, duration: 0.8 });

		if (dockRef.current[index - 1]) {
			gsap.to(dockRef.current[index - 1], { scale: 1.1, y: -5, duration: 0.8 });
		}
		if (dockRef.current[index + 1]) {
			gsap.to(dockRef.current[index + 1], { scale: 1.1, y: -5, duration: 0.8 });
		}
	};

	const onHoverEnd = () => {
		gsap.to(dockRef.current, { scale: 1, y: 0, duration: 0.8 });
	};

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="bg-gray-50 p-2 border border-gray-200 rounded-xl hover:scale-125 duration-200 flex justify-center items-center space-x-4 w-auto">
				{icons.map((item, index) => {
					return (
						<div
							key={item.id}
							ref={(el) => (dockRef.current[index] = el)}
							className="relative"
						>
							<Card
								id={`icon-${index}`}
								className="p-3 flex items-center justify-center cursor-pointer transition-colors duration-200 border border-gray-100"
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
		</div>
	);
};

export default FloatingDock;
