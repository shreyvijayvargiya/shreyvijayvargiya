import React, { useState } from "react";
import gsap from "gsap";

const tags = [
	"Blockchain",
	"Web3",
	"Design",
	"Development",
	"Programming",
	"Frontend",
	"Backend",
	"Reactjs",
];
const Showcase = () => {
	const startAnimation = () => {
		gsap.fromTo(
			".container",
			{
				x: 100,
			},
			{
				x: 0,
				duration: 1,
			}
		);
	};
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	
	return (
		<div
			className="relative overflow-hidden container w-full min-h-screen flex justify-center items-center flex-col space-x-4 space-y-4"
			onMouseEnter={startAnimation}
			onMouseMove={(e) => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			}}
		>
			<div className="relative">
				{tags.map((item, index) => {
					return (
						<div
							key={item}
							style={{
								position: "absolute",
								width: "200px",
								height: "auto",
								left: 0,
								top: index + 1 * 10 + "%",
								zIndex: index * 10,
								// backfaceVisibility: "hidden",
								// perspective: "3d",
								// transformStyle: "preserve-3d",
							}}
							className={`item-${index} p-2 bg-gray-50 rounded-md border border-gray-200 hover:-translate-y-10 hover:bg-red-100 hover:scale-125 transform transition-all duration-300 ease-in`}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Showcase;
