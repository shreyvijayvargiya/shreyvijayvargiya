import gsap, { Power1 } from "gsap";
import { useEffect, useState } from "react";

const loaders = [
	"namaste",
	"my name is shrey",
	"I am a software developer",
	"I made website &",
	"mobile apps",
];

const RevealBoxSize = () => {
	const [active, setActive] = useState(0);

	const runAnimation = () => {
		const tl = gsap.timeline({
			onComplete: () =>
				setActive((prev) => (prev === loaders.length - 1 ? 0 : prev + 1)),
		});

		tl.to(".animated-box", {
			duration: 0.5,
			scale: 1,
			ease: Power1.easeInOut,
		})
			.fromTo(
				".animated-text",
				{ yPercent: -20, opacity: 0 },
				{ opacity: 1, yPercent: 0, duration: 2 }
			)
			.to(".animated-box", {
				duration: 2,
				rotation: 90,
				borderWidth: 1,
				borderRadius: 10,
				scale: 2,
				ease: Power1.easeInOut,
			})
			.fromTo(
				".animated-text",
				{ yPercent: -20, opacity: 0 },
				{ opacity: 1, yPercent: 0 }
			)
			.to(".animated-box", {
				duration: 2,
				borderRadius: 20,
				scale: 3,
				ease: Power1.easeInOut,
			})
			.fromTo(
				".animated-text",
				{ yPercent: -20, opacity: 0 },
				{ opacity: 1, yPercent: 0, duration: 2 }
			)
			.to(".animated-box", {
				duration: 2,
				borderRadius: "50%",
				ease: Power1.easeInOut,
			})
			.fromTo(
				".animated-text",
				{ yPercent: -20, opacity: 0 },
				{ opacity: 1, yPercent: 0, duration: 2 }
			)

			.to(".animated-box", {
				borderRadius: "100%",
				duration: 2,
				ease: "power1.out",
			})
			.fromTo(
				".animated-text",
				{ yPercent: -20, opacity: 0 },
				{ opacity: 1, yPercent: 0, duration: 2 }
			);
		tl.repeat(-1);
		tl.yoyo(true);
	};
	useEffect(() => {
		runAnimation();
	}, []);

	return (
		<div className="w-screen h-screen bg-black flex justify-center items-center relative">
			<div className="animated-box border-dashed border-gray-700 rounded-xl w-40 h-40 flex justify-center items-center"></div>
			<p className="animated-text fixed text-center top-1/2 left-0 right-0 -translate-x-1/2 -translate-y-1/2 text-gray-400">
				{loaders[active]}
			</p>
		</div>
	);
};
export default RevealBoxSize;
