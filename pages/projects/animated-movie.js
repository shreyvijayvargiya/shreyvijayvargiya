import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HeartIcon, SmileIcon, StarIcon } from "lucide-react";

const AnimatedMovie = () => {
	const iconsRef = useRef([]);
	const subtitleRef = useRef(null);
	const descriptionRef = useRef(null);
	const tl = gsap.timeline();

	useEffect(() => {
		tl.fromTo(
			subtitleRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
		)
			.fromTo(
				iconsRef.current,
				{ opacity: 0, scale: 0.5 },
				{ opacity: 1, scale: 1, duration: 0.5, stagger: 1, ease: "power2.out" }
			)
			.fromTo(
				iconsRef.current[0],
				{
					x: "-200%",
				},
				{
					x: 0,
					duration: 0.5,
					ease: "power2.inOut",
				}
			)

			.fromTo(
				iconsRef.current[2],
				{
					rotation: -180,
					x: 0,
				},
				{
					rotation: 360,
					x: 40,
					duration: 0.5,
					ease: "power2.inOut",
				}
			)
			.fromTo(
				iconsRef.current[1],
				{
					y: -100,
				},
				{
					y: 0,
					scale: 2,
					duration: 0.5,
					ease: "power2.inOut",
				}
			)
			.to(iconsRef.current[2], {
				rotation: 360,
				x: -40,
				scale: 0,
				opacity: 0,
				duration: 0.5,
				ease: "power2.inOut",
			})
			.to(iconsRef.current[0], {
				rotation: 360,
				x: 0,
				scale: 0,
				opacity: 0,
				duration: 0.5,
				ease: "power2.inOut",
			})
			.fromTo(
				descriptionRef.current,
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 0.5,
					ease: "power2.out",
					visibility: "visible",
				}
			);
	}, []);

	return (
		<div className="animated-movie-container flex flex-col items-center justify-center h-screen bg-gray-900 wfill">
			<div className="icons-container flex space-x-4 mb-4 w-full justify-center">
				<div ref={(el) => (iconsRef.current[0] = el)} className="icon">
					<SmileIcon size={50} color="#FFD700" />
				</div>
				<div ref={(el) => (iconsRef.current[1] = el)} className="icon">
					<HeartIcon size={50} color="#FF1493" />
				</div>
				<div ref={(el) => (iconsRef.current[2] = el)} className="icon">
					<StarIcon size={50} color="#FF4500" />
				</div>
			</div>
			<div
				ref={subtitleRef}
				className="subtitle text-lg font-bold text-gray-100 my-2"
			>
				Believe in yourself
			</div>
			<div
				ref={descriptionRef}
				className="text-lg font-bold text-gray-100 my-2 invisible"
			>
				You will achieve greatness!
			</div>
		</div>
	);
};

export default AnimatedMovie;
