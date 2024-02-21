import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Clock = () => {
	gsap.registerPlugin(ScrollTrigger);
	const clockRef = useRef();

	useEffect(() => {
		const hourHandRef = clockRef.current.querySelector(".hour-hand");
		const minuteHandRef = clockRef.current.querySelector(".minute-hand");
		const secondHandRef = clockRef.current.querySelector(".second-hand");

		const updateClock = () => {
			const now = new Date();
			const hours = now.getHours() % 12;
			const minutes = now.getMinutes();
			const seconds = now.getSeconds();

			const hourRotation = (360 / 12) * hours + (360 / 12) * (minutes / 60);
			const minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
			const secondRotation = (360 / 60) * seconds;

			gsap.to(hourHandRef, { rotation: hourRotation, duration: 0.5 });
			gsap.to(minuteHandRef, { rotation: minuteRotation, duration: 0.5 });
			gsap.to(secondHandRef, { rotation: secondRotation, duration: 0.5 });
		};

		const clockTimeline = gsap.timeline({
			onUpdate: updateClock,
			repeat: -1,
			defaults: { ease: "linear" },
		});

		clockTimeline.to({}, { duration: 60, repeat: -1 });

		// ScrollTrigger to control the clock animation based on scroll
		ScrollTrigger.create({
			trigger: clockRef.current,
			start: "top top",
			end: "bottom bottom",
			scrub: true,
			onUpdate: (self) => {
				clockTimeline.progress(self.progress);
			},
		});
	}, []);

	return (
		<div className="w-full h-full bg-black text-white flex items-center justify-center">
			<div
				ref={clockRef}
				className="relative w-64 h-64 border-2 border-white rounded-full"
			>
				<div className="hour-hand w-1 h-20 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom" />
				<div className="minute-hand w-1 h-30 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom" />
				<div className="second-hand w-1 h-40 bg-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom" />
				<div className="center-circle w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
			</div>
		</div>
	);
};

export default Clock;
