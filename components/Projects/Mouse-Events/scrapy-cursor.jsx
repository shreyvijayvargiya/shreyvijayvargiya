import React, { useEffect, useRef } from "react";
import { useMouseMove } from "modules/hooks/mouse-events";
import gsap, { Power1 } from "gsap";
import BoxRevealing from "../ScrollTriggerAnimations/BoxRevealing";

const ScrappyCursor = () => {
	const { x, y } = useMouseMove();
	const cursorRef = useRef();

	useEffect(() => {
		const cursor = cursorRef.current;

		gsap.to(cursor, {
			x: x + 80,
			y: y + 50,
			duration: 0.5,
			ease: Power1.easeOut,
		});
		const tl = gsap.timeline();
		tl.to(cursor, {
			height: 100,
			width: 50,
			duration: 1,
			borderRadius: 10,
		})
			.to(cursor, {
				width: 200,
				height: 100,
				duration: 1,
				borderRadius: 10,
			})
			.to(cursor, {
				borderRadius: 100,
				duration: 1,
				width: 200,
				height: 100,
			})
			.to(cursor, {
				width: 50,
				height: 100,
				duration: 1,
				borderRadius: 10,
			});
		tl.repeat(-1);
		tl.yoyo(true);
	}, [x, y]);

	return (
		<div className="bg-black h-screen w-full relative">
			<BoxRevealing />
		</div>
	);
};
export default ScrappyCursor;
