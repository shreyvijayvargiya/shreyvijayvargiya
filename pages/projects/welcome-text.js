import React, { useState, useEffect, useRef } from "react";

const TypingEffect = () => {
	const [textIndex, setTextIndex] = useState(0);
	const [direction, setDirection] = useState("forward");
	const [displayText, setDisplayText] = useState("");
	const [underline, setUnderline] = useState(false);
	const textRef = useRef(null);
	const fullText = "उकाई";
	const typingSpeed = 800;
	const erasingSpeed = 200;

	const percentage = 1 - (textIndex / fullText.length);

	useEffect(() => {
		if (direction === "forward") {
			if (textIndex <= fullText.length) {
				setDisplayText(fullText.substring(0, textIndex));
				const timer = setTimeout(() => {
					setTextIndex(textIndex + 1);
				}, typingSpeed);
				return () => clearTimeout(timer);
			} else {
				setDirection("backward");
				setUnderline(true);
				setTextIndex(fullText.length);
			}
		} else {
			if (textIndex >= 0) {
				setDisplayText(fullText.substring(0, textIndex));
				const timer = setTimeout(() => {
					setTextIndex(textIndex - 1);
				}, erasingSpeed);
				return () => clearTimeout(timer);
			} else {
				setDirection("forward");
				setUnderline(false);
				setTextIndex(0);
			}
		}
	}, [textIndex, direction]);

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-black text-white">
			<div
				className={`whitespace-nowrap overflow-hidden text-gray-${percentage * 500}`}
				style={{ fontSize: "20rem" }}
			>
				
				<span
					ref={textRef}
					className={`inline-block ${
						underline ? "underline" : ""
					} transition-all duration-500`}
				>
					{displayText}
				</span>
			</div>
		</div>
	);
};

export default TypingEffect;
