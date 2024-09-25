import gsap from "gsap";
import React, { useState } from "react";

const moods = [
	{ emoji: "😀", label: "Happy" },
	{ emoji: "🤣", label: "Laughing" },
	{ emoji: "🥰", label: "Loving" },
	{ emoji: "😢", label: "Sad" },
	{ emoji: "😊", label: "Satisfied" },
	{ emoji: "❤️", label: "Loved" },
	{ emoji: "😌", label: "Peaceful" },
	{ emoji: "🥸", label: "Silly" },
	{ emoji: "📖", label: "Reading" },
	{ emoji: "✍️", label: "Writing" },
	{ emoji: "💃", label: "Dancing" },
	{ emoji: "🍹", label: "Drinking" },
];

const MousePointer = () => {
	const [mood, setMood] = useState({ emoji: "😀", label: "Happy" });
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

	const [show, setShow] = useState(true);

	return (
		<div
			className="flex w-full h-screen justify-center relative"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			onClick={() => {
				gsap.to(".mouse-pointer", { y: show ? "90vh" : "0vh" });
				setShow(!show);
			}}
		>
			<div className="fixed top-1 p-2 bg-gray-50 rounded-xl">
				{show ? "click to drop" : "Click to show"}
			</div>
			<div className="fixed bottom-4 flex p-2 mx-auto w-auto shadow-lg border border-gray-200 rounded-xl">
				{moods.map((el, index) => {
					return (
						<div
							key={index}
							onClick={() => setMood(el)}
							className={`${
								el.label
							} cursor-pointer text-2xl px-3 py-2 hover:px-4 transition-all duration-150 ease-in hover:bg-gray-100 hover:text-white rounded-2xl ${
								mood.emoji === el.emoji && show ? "bg-gray-100" : "bg-none"
							}`}
						>
							{el.emoji}
						</div>
					);
				})}
			</div>
			<div
				className="text-4xl animate-pulse mouse-pointer"
				style={{
					position: "fixed",
					top: mousePosition.y + 20 + "px",
					left: mousePosition.x + 20 + "px",
					transition: "all 0.5s ease",
				}}
			>
				{mood.emoji}
				<span className="text-sm font-mono">{mood.label}</span>
			</div>
		</div>
	);
};
export default MousePointer;
