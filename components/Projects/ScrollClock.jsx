import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import colors from "tailwindcss/colors";

const ScrollClock = () => {
	gsap.registerPlugin(ScrollTrigger);
	const secondsClockRef = useRef();
	const colorKeys = Object.keys(colors).reverse();
	const [active, setActive] = useState(0);
	const [prevRotation, setPrevRotation] = useState(0);

	useEffect(() => {
		const rotationTimeline = gsap.timeline();

		rotationTimeline.to(secondsClockRef.current, {
			rotation: 360,
			ease: "none",
			transformOrigin: "center center",
			onUpdate: () => {
				let rotationValue = Math.floor(
					gsap.getProperty(secondsClockRef.current, "rotation")
				);
				const val = Math.floor(rotationValue / 40)
					? Math.floor(rotationValue / 40)
					: 0;
				if (val / 90 === 0) {
					// window.alert("90 deg rotation completed");
				}
				gsap.to(".scroll-clock-container", {
					background: colors[colorKeys[val]][100]
						? colors[colorKeys[val + 1]][300]
						: "white",
				});
				setActive(val);
				setPrevRotation(Math.abs(rotationValue));
			},
			onComplete: () => {
				gsap.to("footer", { opacity: 1 });
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
			className="scroll-clock-container w-full bg-white relative"
			style={{
				height: "500vh",
			}}
		>
			<div
				className="seconds-clock-line w-20 h-2px border bg-gray-900 rounded-full border-dashed border-gray-700 text-gray-400"
				style={{
					position: "fixed",
					top: "50%",
					left: 0,
				}}
				ref={secondsClockRef}
			></div>
			<div className="fixed bottom-10 left-0 right-0 text-indigo-300 text-center">
				<p>Scroll to rotate</p>
			</div>
		</div>
	);
};
export default ScrollClock;
