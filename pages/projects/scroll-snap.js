import React, { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

const images = [
	{
		src: "/clothes-images/img-1.jpg",
		name: "Stiched white ",
		id: 1,
		rating: 3.5,
		review: 10,
		color: "bg-gray-50",
	},
	{
		src: "/clothes-images/img-2.jpg",
		name: "Purple lining",
		id: 2,
		rating: 4,
		review: 4,
		color: "bg-indigo-50",
	},
	{
		src: "/clothes-images/img-3.jpg",
		name: "Creamy flower",
		id: 3,
		rating: 4.8,
		review: 5,
		color: "bg-yellow-50",
	},
	{
		src: "/clothes-images/img-4.jpg",
		name: "White spots",
		id: 4,
		rating: 3,
		review: 6,
		color: "bg-pink-50",
	},
];

const ScrollSnap = () => {
	const scrollContainerRef = useRef(null);
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;

		const handleScroll = () => {
			const percent = Math.floor(
				(scrollContainer.scrollLeft /
					(scrollContainer.scrollWidth - scrollContainer.clientWidth)) *
					100
			);
			setPercent(percent);
		};

		if (scrollContainer) {
			scrollContainer.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (scrollContainer) {
				scrollContainer.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);
	return (
		<div
			className="h-screen w-full overflow-scroll"
			ref={scrollContainerRef}
			style={{
				scrollSnapType: "x mandatory",
				scrollMarginLeft: "0px",
				overflowY: "scroll",
				scrollSnapStop: "normal",
			}}
		>
			<div className="w-full h-full flex justify-start items-center">
				{images.map((item) => {
					return (
						<div
							key={item.id}
							className={`h-full min-w-screen flex flex-col justify-center items-center ${item.color}`}
							style={{
								scrollSnapAlign: "start",
							}}
						>
							<p className="text-center text-4xl font-fancy text-gray-500 text-gradient-to-tr from-gray-50 to-green-50">
								{item.name}
							</p>
							<img
								className="w-60 h-60 hover:h-96 hover:w-96 mx-auto object-cover rounded-xl shadow-xl my-4 transition-all duration-400 ease-in"
								src={item.src}
							/>
						</div>
					);
				})}
			</div>
			<div
				className={`fixed bottom-20 left-20`}
				style={{
					borderImage: `conic-gradient(${colors.pink[600]} ${percent}%,transparent ${percent}%) 1`,
					borderWidth: "5px solid transparent",
					borderRadius: "50%",
					width: "48px",
					height: "48px",
				}}
			></div>
		</div>
	);
};
export default ScrollSnap;
