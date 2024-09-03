import gsap from "gsap";
import { ProjectorIcon } from "lucide-react";
import React, { useState } from "react";

const CursorMagic = () => {
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
		show: false, 
	});

	const handleMouseMove = (e) => {
		setMousePosition({
			x: e.clientX,
			y: e.clientY,
			show: true,
		});
	};

	const handleMouseLeave = () => {
		setMousePosition((prev) => ({ ...prev, show: false }));
	};

	return (
		<div className="relative flex justify-center items-center h-screen">
			<div
				className="relative"
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
			>
				<div
					className={`${
						mousePosition.show
							? "visible flex justify-around items-center gap-2"
							: "hidden"
					} transition-all duration-100 px-6 py-3 rounded-2xl text-black bg-white z-50`}
					style={{
						position: "fixed",
						top: mousePosition.y + 20 + "px",
						left: mousePosition.x + 20 + "px",
					}}
				>
					click me
					<ProjectorIcon size={20} color="black" />
				</div>
				<div
					className="p-2 border-2 border-gray-200 rounded-2xl cursor-pointer hover:border-4 hover:border-gray-300 transition-all duration-75"
					style={{
						transform: mousePosition.show
							? `skew(${
									mousePosition.x > window.innerWidth / 2
										? mousePosition.x / 100
										: -mousePosition.x / 100
							  }deg, ${
									mousePosition.y > window.innerHeight / 2
										? mousePosition.y / 100
										: -mousePosition.y / 100
							  }deg)`
							: "none",
						transformOrigin: "center center",
						transition: "all 0.5s ease",
					}}
				>
					<img
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_9lUWQ5iiXACH9TC0.jpeg?alt=media&token=0de588ed-2282-40e5-8e3c-faee01b8c38c"
						className={`img rounded-2xl ${
							mousePosition.show &&
							`opacity-80 m-4 rounded-2xl duration-150 transition-all`
						}`}
						onClick={() => {
							gsap.to(".img", {
								rotationY: "+=180",
								duration: 1,
							});
						}}
					/>
					<div className="text-center">
						Mouse Position {mousePosition.x}px {mousePosition.y}px
					</div>
				</div>
			</div>
		</div>
	);
};

export default CursorMagic;
