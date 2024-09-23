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

	const [show, setShow] = useState(false);

	return (
		<div className="flex justify-center items-center h-screen space-x-4">
			<div className="relative max-w-lg w-40 flex flex-col justify-center items-center">
				<div
					onClick={() => setShow(!show)}
					className={`cursor-pointer w-full text-md text-center px-4 py-3 text-white bg-black absolute rounded-xl shadow-xl hover:shadow-2xl z-10 transition-all duration-200 ease-in hover:py-4`}
				>
					Select size
				</div>
				<div
					className={`cursor-pointer w-full text-sm text-center px-4 py-3 text-white bg-black absolute rounded-xl shadow-2xl hover:py-4 ${
						show
							? "absolute transform translate-y-16"
							: "absolute -translate-y-16 opacity-0 scale-0"
					} transition-all duration-200 ease-in`}
				>
					sm
				</div>
				<div
					className={` cursor-pointer w-full text-md text-center px-4 py-3 text-white bg-black rounded-md shadow-2xl hover:py-4 ${
						show
							? "absolute transform translate-y-32"
							: "absolute -translate-y-32 opacity-0 scale-0"
					} transition-all duration-300 ease-in delay-100`}
				>
					md
				</div>
				<div
					className={`cursor-pointer w-full text-center px-4 py-3 text-white text-lg bg-black rounded-xl shadow-2xl hover:py-4 ${
						show
							? "absolute transform translate-y-48"
							: "absolute -translate-y-48 opacity-0 scale-0"
					} transition-all duration-300 ease-in delay-100`}
				>
					lg
				</div>
				<div
					className={`cursor-pointer w-full text-center px-4 py-3 text-white text-xl bg-black rounded-xl shadow-2xl hover:py-4 ${
						show
							? "absolute transform translate-y-60 mt-10"
							: "absolute -translate-y-60 opacity-0 scale-0"
					} transition-all duration-300 ease-in delay-100`}
				>
					XL
				</div>
			</div>
		</div>
	);
};

export default MorphineButton;
