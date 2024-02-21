import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

const BoxRevealing = () => {
	gsap.registerPlugin(ScrollTrigger);
	const secondsClockRef = useRef();
	const colorKeys = Object.keys(colors);
	const [active, setActive] = useState(0);
	const [prevRotation, setPrevRotation] = useState(0);

	useEffect(() => {
		const rotationTimeline = gsap.timeline();

		rotationTimeline.to(secondsClockRef.current, {
			rotation: 480,
			ease: "none",
			height: "50vh",
			transformOrigin: "center center",
			onUpdate: () => {
				let rotationValue = Math.floor(
					gsap.getProperty(secondsClockRef.current, "rotation")
				);
				const val = Math.floor(rotationValue / 40)
					? Math.floor(rotationValue / 40)
					: 0;
				gsap.to(".seconds-clock-line", {
					background: colors[colorKeys[val]][100]
						? colors[colorKeys[val + 1]][300]
						: "black",
				});
				setActive(val);
				setPrevRotation(Math.abs(Math.floor(rotationValue)));
			},
			scrollTrigger: {
				trigger: ".scroll-clock-container",
				scrub: 1,
				start: "top top",
				end: "bottom bottom",
				markers: true,
			},
		});
	}, []);

	return (
		<div
			className="scroll-clock-container w-full bg-black"
			style={{
				height: "500vh",
			}}
		>
			<div
				className="seconds-clock-line w-96 h-1px border bg-blackBg rounded-full border-dashed border-gray-700 text-gray-400"
				style={{
					position: "sticky",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				ref={secondsClockRef}
			/>
			<div className="fixed bottom-10 left-0 right-0 text-indigo-300 text-center">
				<p>Scroll to reveal</p>
				<p>{prevRotation}deg</p>
			</div>
		</div>
	);
};
export default BoxRevealing;
