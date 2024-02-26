import React, { useEffect } from "react";
import { gsap } from "gsap";
import colors from "tailwindcss/colors";

const FillingCoffeeCup = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			".body-head",
			{ x: 0 },
			{
				duration: 2,
				rotate: 200,
				scale: 2,
				borderColor: colors.gray[700],
				ease: "power2.inOut",
			}
		)
			.to(".body-head", {
				duration: 3,
				opacity: 1,
				scale: 5,
				borderWidth: "1px",
				borderRadius: 10,
				borderColor: colors.gray[100],
				ease: "power2.inOut",
				rotate: 180,
			})
			.to(".body-head", {
				borderRadius: 0,
				scale: 4,
				rotate: 100,
				borderWidth: 1,
				duration: 3,
				transformOrigin: "center center",
				ease: "power2.inOut",
				borderColor: colors.gray[500],
			})
			.to(".body-head", {
				rotate: 180,
				borderRadius: 50,
				duration: 1,
				scale: 3,
				height: 100,
				borderColor: colors.gray[300],
				width: 100,
				borderWidth: "1px",
			})
			.to(".body-head", {
				rotate: 20,
				borderRadius: 10,
				duration: 3,
				borderColor: colors.gray[600],
			});

		tl.repeat(-1);
		tl.yoyo(true);
	}, []);

	return (
		<div className="w-screen relative h-screen flex justify-center items-center bg-black">
			{[1, 2, 3].map((item) => (
				<div
					key={item}
					className="body-head relative circle w-10 h-10 mx-10 border border-dashed border-gray-500 rounded-full"
				>
					{/* <img
						className="w-full h-full object-contain z-0 opacity-5"
						src="/avatar.png"
						alt={`Avatar ${item}`}
					/> */}
				</div>
			))}
		</div>
	);
};

export default FillingCoffeeCup;
