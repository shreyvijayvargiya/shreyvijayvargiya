import React, { useEffect } from "react";
import gsap from "gsap";

const GridBackground = () => {
	useEffect(() => {
		gsap.fromTo(
			".grid-bg div",
			{ opacity: 0, scale: 0 },
			{ opacity: 1, scale: 1, duration: 1, stagger: 0.1 }
		);
	}, []);

	return (
		<div className="relative w-full h-screen overflow-hidden z-10 ">
			<div className="grid-bg absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2 p-4">
				{[...Array(100)].map((_, i) => (
					<div
						key={i}
						className="w-full h-full bg-gray-200 dark:bg-gray-700 transition duration-300 ease-in-out hover:bg-blue-500"
					/>
				))}
			</div>
			<div className="relative z-10 p-8">
				<h1 className="text-4xl font-bold text-center">
					Grid Background Effect
				</h1>
			</div>
		</div>
	);
};

export default GridBackground;
