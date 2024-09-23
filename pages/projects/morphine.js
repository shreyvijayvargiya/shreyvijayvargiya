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
			<div className="relative h-40 max-w-md">
				<div className="relative flex flex-col justify-center items-center">
					<p className={`px-4 py-2 text-white bg-black absolute z-10`}>Small</p>
					<p
						className={`px-4 py-2 text-white bg-black absolute z-1 ${
							show ? "absolute translate-y-5" : "absolute -translate-y-5"
						} transition-all duration-100 easi-in`}
					>
						Medium
					</p>
					<p
						className={`px-4 py-2 text-white bg-black absolute z-1 ${
							show ? "absolute translate-y-10" : "absolute -translate-y-10"
						} transition-all duration-100 easi-in`}
					>
						Large
					</p>
				</div>
			</div>
		</div>
	);
};

export default MorphineButton;
