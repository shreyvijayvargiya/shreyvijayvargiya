import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import {
	AlignLeft,
	AlignCenter,
	AlignRight,
	Italic,
	Underline,
	Strikethrough,
	Bold,
	Heading1,
} from "lucide-react";

const MultiTextStyler = () => {
	const textRefs = useRef({});

	const [texts, setTexts] = useState({
		text1: {
			content: "Lorem ipsum dolor sit amet.",
			styles: {
				textAlign: "left",
				fontSize: "18px",
				fontStyle: "normal",
				textDecoration: "none",
				fontWeight: "normal",
			},
		},
		text2: {
			content: "Consectetur adipiscing elit.",
			styles: {
				textAlign: "left",
				fontSize: "18px",
				fontStyle: "normal",
				textDecoration: "none",
				fontWeight: "normal",
			},
		},
	});

	const newText = {
		content: "write something...",
		styles: {
			textAlign: "left",
			fontSize: "18px",
			fontStyle: "normal",
			textDecoration: "none",
			fontWeight: "normal",
		},
	};

	const [activeId, setActiveId] = useState(null);

	const handleStyleChange = (styleType, value) => {
		if (activeId) {
			setTexts((prev) => ({
				...prev,
				[activeId]: {
					...prev[activeId],
					styles: { ...prev[activeId].styles, [styleType]: value },
				},
			}));

			if (textRefs.current[activeId]) {
				gsap.to(textRefs.current[activeId], {
					duration: 0.5,
					ease: "power2.out",
					[styleType]: value,
				});
			}
		}
	};

	const handleAddNewText = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();

			const textIds = Object.keys(texts);
			const activeIndex = textIds.indexOf(activeId);
			const newTextId = `text${textIds.length + 1}`;

			const newTexts = {
				...texts,
			};

			newTexts[newTextId] = newText;
			textIds.forEach((id, index) => {
				if (index === activeIndex + 1) {
					newTexts[newTextId] = newText;
				} else if (index > activeIndex) {
					newTexts[id] = texts[id];
				}
			});

			setTexts(newTexts);
			setActiveId(newTextId);

			setTimeout(() => {
				textRefs.current[newTextId]?.focus();
			}, 0);
		} else if (e.key === "Backspace") {
			e.preventDefault();

			if (Object.keys(texts).length === 1) return;

			const textIds = Object.keys(texts);
			const activeIndex = textIds.indexOf(activeId);

			setTexts((prev) => {
				const newTexts = { ...prev };
				delete newTexts[activeId];
				return newTexts;
			});

			let newActiveId;
			if (activeIndex > 0) {
				newActiveId = textIds[activeIndex - 1];
			} else {
				newActiveId = textIds[activeIndex + 1];
			}

			setActiveId(newActiveId);
			textRefs.current[newActiveId]?.focus();

			gsap.to(textRefs.current[activeId], {
				opacity: 0,
				scale: 0,
				duration: 0.3,
				ease: "power2.out",
				onComplete: () => {
					delete textRefs.current[activeId];
				},
			});
		}
	};

	const handleContentChange = (e, textKey) => {
		setTexts((prev) => ({
			...prev,
			[textKey]: {
				...prev[textKey],
				content: e.target.innerText,
			},
		}));
		const currentRef = textRefs.current[textKey];
		if (currentRef) {
			currentRef.focus();
			const range = document.createRange();
			range.selectNodeContents(currentRef);
			range.collapse(false);
			const selection = window.getSelection();
			selection.removeAllRanges();
			selection.addRange(range);
		}
	};

	return (
		<div className="flex flex-col items-center space-y-2 h-screen justify-center">
			{activeId != null && (
				<div className="my-2 w-1/2 mx-auto flex space-x-4 px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-900">
					<button
						onClick={() =>
							handleStyleChange(
								"fontSize",
								texts[activeId]?.styles.fontSize === "18px" ? "24px" : "18px"
							)
						}
					>
						<Heading1 className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button
						onClick={() =>
							handleStyleChange(
								"fontWeight",
								texts[activeId]?.styles.fontWeight === "normal"
									? "bold"
									: "normal"
							)
						}
					>
						<Bold className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button
						onClick={() =>
							handleStyleChange(
								"fontStyle",
								texts[activeId]?.styles.fontStyle === "normal"
									? "italic"
									: "normal"
							)
						}
					>
						<Italic className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>

					<button
						onClick={() =>
							handleStyleChange(
								"textDecoration",
								texts[activeId]?.styles.textDecoration === "none"
									? "underline"
									: "none"
							)
						}
					>
						<Underline className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button
						onClick={() =>
							handleStyleChange(
								"textDecoration",
								texts[activeId]?.styles.textDecoration === "none"
									? "line-through"
									: "none"
							)
						}
					>
						<Strikethrough className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button onClick={() => handleStyleChange("textAlign", "left")}>
						<AlignLeft className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button onClick={() => handleStyleChange("textAlign", "center")}>
						<AlignCenter className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
					<button onClick={() => handleStyleChange("textAlign", "right")}>
						<AlignRight className="text-gray-600 hover:text-black hover:mx-1 transition-all duration-100 ease-in" />
					</button>
				</div>
			)}
			<div className="p-2 border border-gray-200 w-1/2 mx-auto rounded-xl">
				{Object.keys(texts).map((textKey) => (
					<p
						key={textKey}
						ref={(el) => (textRefs.current[textKey] = el)}
						className={`relative px-4 text-lg p-2 rounded-xl transition-all duration-500 border-none w-full focus:outline-none focus:border-none my-2 ${
							activeId === textKey && "is-selected bg-gray-50"
						}`}
						style={texts[textKey].styles}
						contentEditable
						suppressContentEditableWarning={true}
						defaultValue={texts[textKey].content}
						onInput={(e) => handleContentChange(e, textKey)}
						onSelect={() => setActiveId(textKey)}
						onKeyDown={(e) => handleAddNewText(e, textKey)}
					>
						{texts[textKey].content}
					</p>
				))}
			</div>
		</div>
	);
};

export default MultiTextStyler;
