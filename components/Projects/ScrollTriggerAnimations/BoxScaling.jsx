import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const BoxScalling = () => {
	gsap.registerPlugin(ScrollTrigger);
	const secondsClockRef = useRef();

	useEffect(() => {
		gsap.to(secondsClockRef.current, {
			rotation: -360,
			height: "50vh",
			ease: "none",
			transformOrigin: "center center",
			scrollTrigger: {
				trigger: ".scroll-clock-container",
				scrub: 1,
				start: "top top",
				end: "bottom bottom",
				markers: true,
			},
		});
		const sections = gsap.utils.toArray(".texts-container p");
		sections.map((section, index) => {
			gsap.fromTo(
				section,
				{
					rotation: "-" + index * 30,
				},
				{ rotation: 0 }
			);
		});
		gsap.to(sections, {
			opacity: 1,
			xPercent: sections.length * 100 + "%",
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
			style={{ height: "300vh" }}
		>
			<div
				className="seconds-clock-line w-96 h-2 border bg-blackBg rounded-xl border-dashed border-gray-700 text-gray-400"
				style={{
					position: "sticky",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				ref={secondsClockRef}
			>
				<div className="p-4 texts-container">
					<p className="text-1 opacity-0">Hello, I am Shrey</p>
					<p className="text-2 opacity-0">I am a software developer </p>
					<p className="text-3 opacity-0">I develop website and apps</p>
					<p className="text-4 opacity-0">and I am doing it for 4 years</p>
				</div>
			</div>
		</div>
	);
};
export default BoxScalling;
