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

	return (
		<div
			className="flex w-full h-screen justify-center relative"
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<div className="fixed top-4 flex p-2 mx-auto w-auto shadow-lg border border-gray-200 rounded-xl">
				{moods.map((el, index) => {
					return (
						<div
							key={index}
							onClick={() => setMood(el)}
							className={`cursor-pointer text-2xl px-3 py-2 hover:px-4 transition-all duration-150 ease-in hover:bg-gray-100 hover:text-white rounded-2xl ${
								mood.emoji === el.emoji ? "bg-gray-100" : "bg-none"
							}`}
						>
							{el.emoji}
						</div>
					);
				})}
			</div>
			<div
				className="text-4xl animate-pulse"
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
