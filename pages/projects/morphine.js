import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { HomeIcon, SearchIcon } from "lucide-react";

const MorphineButton = () => {
	const [showHomeButton, setShowHomeButton] = useState(false);
	const parentButtonRef = useRef(null);
	const childButtonRef = useRef(null);

	const handleMitosis = () => {
		setShowHomeButton(!showHomeButton);
		if (showHomeButton) {
			gsap.to(parentButtonRef.current, {
				width: "80px",
				height: "80px",
				borderRadius: "50%",
				duration: 0.6,
				ease: "power2.inOut",
				onComplete: () => setShowHomeButton(true),
			});
		}
	};

	useEffect(() => {
		if (showHomeButton) {
			gsap.fromTo(
				childButtonRef.current,
				{ scale: 0, opacity: 0, x: -50 },
				{ scale: 1, opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
			);
		} else {
			gsap.fromTo(
				childButtonRef.current,
				{ scale: 1, x: 0 },
				{
					scale: 0.5,
					x: -50,
					duration: 0.5,
					ease: "power2.out",
					onComplete: () => {
						gsap.to(parentButtonRef.current, {
							scale: 1,
							x: 100,
							duration: 0.5,
							ease: "power2.out",
						});
					},
				}
			);
		}
	}, [showHomeButton]);

	const [active, setActive] = useState(0);

	return (
		<div className="flex justify-center items-center h-screen space-x-4">
			<div className="relative flex justify-center items-center">
				<div
					onClick={() => {
						setActive(1);
					}}
					className={`cursor-pointer rounded-none w-44 p-3 text-center text-white bg-black hover:py-4 z-10 ${
						active === 1 ? "bg-indigo-600 mr-24 rounded-xl shadow-2xl" : "ml-0"
					} transition-all duration-200 ease-in`}
				>
					Home
				</div>
				<div
					onClick={() => {
						setActive(2);
					}}
					className={` cursor-pointer rounded-none w-44 p-3 text-center text-white bg-black hover:py-4 ${
						active === 2 ? "bg-indigo-600 mx-24 rounded-xl shadow-2xl" : "ml-0"
					} transition-all duration-300 ease-in delay-100`}
				>
					About
				</div>
				<div
					onClick={() => {
						setActive(3);
					}}
					className={`cursor-pointer rounded-none w-44 p-3 text-center text-white bg-black hover:py-4 ${
						active === 3 ? "bg-indigo-600 ml-24 rounded-xl shadow-2xl" : "ml-0"
					} transition-all duration-300 ease-in delay-100`}
				>
					Subscribe
				</div>
			</div>
		</div>
	);
};

export default MorphineButton;
