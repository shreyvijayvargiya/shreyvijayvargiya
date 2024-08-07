import React, { useEffect } from "react";
import gsap from "gsap";

const RetroBackground = () => {
	useEffect(() => {
		gsap.to(".retro-bg", {
			backgroundPosition: "200% 0",
			ease: "linear",
			duration: 20,
			repeat: -1,
		});
	}, []);

	return (
		<div className="relative w-full h-screen overflow-hidden">
			<div className="retro-bg absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] transition duration-300 ease-in-out"></div>
			<div className="relative z-10 p-8">
				<h1 className="text-4xl font-bold text-center text-white">
					Retro Background Effect
				</h1>
			</div>
		</div>
	);
};

export default RetroBackground;
