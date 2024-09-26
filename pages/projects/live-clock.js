import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const images = [
	{ src: "/demo-images/img-1.avif" },
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
];

const LiveClock = () => {
	const [time, setTime] = useState(new Date());
	const [val, setVal] = useState("");
	const hourRef = useRef(null);
	const minuteRef = useRef(null);
	const secondRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => setTime(new Date()), 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();

		const secondDeg = (seconds / 60) * 360;
		const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
		const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
		setVal(hours + ":" + minutes);
		console.log(secondDeg / 40, "secondDeg");

		gsap.to(secondRef.current, {
			rotation: secondDeg,
			transformOrigin: "50% 100%",
			duration: 0.5,
		});
		gsap.to(minuteRef.current, {
			rotation: minuteDeg,
			transformOrigin: "50% 100%",
			duration: 0.5,
		});
		gsap.to(hourRef.current, {
			rotation: hourDeg,
			transformOrigin: "50% 100%",
			duration: 0.5,
		});
	}, [time]);

	const clockNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	const calculatePosition = (index) => {
		const angle = (index - 3) * (360 / 12);
		const radius = 160;
		const x = radius * Math.cos((angle * Math.PI) / 180);
		const y = radius * Math.sin((angle * Math.PI) / 180);
		return { x, y };
	};
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
		show: false,
	});

	const handleMouseMove = (e) => {
		setMousePosition({
			x: e.clientX,
			y: e.clientY,
			show: true,
		});
	};

	const handleMouseLeave = () => {
		setMousePosition((prev) => ({ ...prev, show: false }));
	};

	return (
		<div
			className="flex justify-center items-center h-screen flex-col"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="group relative cursor-wait w-96 h-96 rounded-full flex justify-center items-center shadow-2xl saturate-100"
				style={{
					boxShadow: "5px 5px 10px 10px rgb(0, 0, 0, 0.4)",
				}}
			>
				<div>
					<div
						className="absolute top-0 left-0 right-0 bottom-0 -z-10 rounded-full animate-spin"
						style={{
							backgroundImage: `url(${images[3].src}), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundBlendMode: "overlay",
						}}
					/>
					<img
						src={images[0].src}
						className="cover-image absolute transition-all duration-300 ease-in-out w-full h-full top-0 right-0 left-0 bottom-0 rounded-full z-10 transform origin-center"
						onMouseEnter={() => {
							gsap.to(".cover-image", {
								duration: 0.5,
								width: "100%",
								height: "100%",
								perspective: "3d",
								rotateY: "100deg",
								transformOrigin: "left center",
								opacity: 0.2,
								ease: "power2.inOut",
							});
						}}
						onMouseLeave={() => {
							gsap.to(".cover-image", {
								duration: 0.5,
								opacity: 1,
								width: "100%",
								perspective: "3d",
								height: "100%",
								rotateY: "0deg",
								transformOrigin: "left center",
								ease: "power2.inOut",
							});
						}}
					/>
				</div>
				{clockNumbers.map((num, index) => {
					const { x, y } = calculatePosition(index + 1);
					return (
						<div
							key={num}
							className="absolute text-gray-300 font-serif font-semibold text-xl"
							style={{ transform: `translate(${x}px, ${y}px)` }}
						>
							{num}
						</div>
					);
				})}
				<div className="group-hover:opacity-100 opacity-20 transition-all duration-300 ease-in absolute w-full h-full flex justify-center items-center">
					<div className="w-4 h-4 bg-gray-200 bg-opacity-20 rounded-full absolute z-10"></div>
					<div
						ref={hourRef}
						className="absolute h-16 w-1 bg-gray-100 rounded-full origin-bottom top-32 left-1/2 right-1/2"
					/>
					<div
						ref={minuteRef}
						className="absolute h-24 w-1 rounded-full bg-gray-300 origin-bottom top-24 left-1/2"
					/>
					<div
						ref={secondRef}
						className="absolute h-24 w-0.5 bg-gray-100 rounded-full origin-bottom top-24 z-0 left-1/2"
					/>
					<div className="absolute bottom-1/4 text-gray-300">{val}</div>
				</div>
			</div>
			<p className="text-center">Hover me</p>
		</div>
	);
};

export default LiveClock;
