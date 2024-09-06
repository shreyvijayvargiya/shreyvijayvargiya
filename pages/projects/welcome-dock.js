import { Button } from "@mantine/core";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useState } from "react";

const images = [
	{
		src: "/demo-images/img-1.avif",
	},
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
];

const WelcomeDock = () => {
	const [showGallery, setShowGallery] = useState(false);

	return (
		<div className="flex justify-center items-center flex-col h-screen w-full">
			<div
				className={`img-container flex justify-center rounded-xl items-end ${
					showGallery
						? "w-full h-24 -translate-y-10 visible border-gray-200 border"
						: "w-0 h-0 border-none hidden translate-x-0"
				} overflow-x-scroll gap-5 hover:h-full h-24 transform transition-all duration-300 hover:p-0 p-2 ease-in`}
			>
				{images.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						className={`w-28 h-full object-cover rounded-xl hover:w-full hover:h-full transition-all duration-100 ease-in cursor-pointer img-${index} img-each`}
					/>
				))}
			</div>
			<div
				className={` ${
					showGallery ? "w-full h-24 opacity-100 " : "w-0 h-0 opacity-0"
				} flex justify-center items-center transform transition-all duration-300 ease-in`}
			>
				<p className="text-center ">Welcome to iHateReading</p>
			</div>
			<Button
				color="dark"
				size="xs"
				variant="filled"
				onClick={() => {
					setShowGallery(!showGallery);
				}}
				leftIcon={
					!showGallery ? <ArrowRight size={16} /> : <ArrowLeft size={16} />
				}
				classNames={{
					leftIcon: "group-hover:block hidden",
					root: "group transition-transform duration-200",
				}}
				sx={{
					"&:hover": {
						transform: "scale(2)",
						transition: "transform 0.2s ease-in-out",
					},
					transition: "transform 0.2s ease-in-out",
				}}
			>
				{!showGallery ? "Get Started" : "Let's Leave"}
			</Button>
		</div>
	);
};
export default WelcomeDock;
