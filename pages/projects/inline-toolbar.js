import React, { useState, useRef, useEffect } from "react";
import {
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
} from "lucide-react";

const textColors = [
	"#93c5fd",
	"#a5b4fc",
	"#86efac",
	"#fef08a",
	"#fbcfe8",
	"#fca5a5",
	"#000000",
	"#d1d5db",
];

const InlineToolbar = ({ show, onStyleClick, activeStyles }) => {
	return (
		<div
			className={`bg-white border border-gray-300 p-2 rounded-md flex space-x-2 transition-all duration-300 ${
				show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
			}`}
		>
			<button
				onClick={() => onStyleClick("bold")}
				className={`p-1 ${
					activeStyles.bold ? "bg-indigo-600 text-white rounded-md" : ""
				}`}
			>
				<Bold size={16} />
			</button>
			<button
				onClick={() => onStyleClick("italic")}
				className={`p-1 ${
					activeStyles.italic ? "bg-indigo-600 text-white rounded-md" : ""
				}`}
			>
				<Italic size={16} />
			</button>
			<button
				onClick={() => onStyleClick("underline")}
				className={`p-1 ${
					activeStyles.underline ? "bg-indigo-600 text-white rounded-md" : ""
				}`}
			>
				<Underline size={16} />
			</button>
			<button
				onClick={() => onStyleClick("left")}
				className={`p-1 ${
					activeStyles.align === "left"
						? "bg-indigo-600 text-white rounded-md"
						: ""
				}`}
			>
				<AlignLeft size={16} />
			</button>
			<button
				onClick={() => onStyleClick("center")}
				className={`p-1 ${
					activeStyles.align === "center"
						? "bg-indigo-600 text-white rounded-md"
						: ""
				}`}
			>
				<AlignCenter size={16} />
			</button>
			<button
				onClick={() => onStyleClick("right")}
				className={`p-1 ${
					activeStyles.align === "right"
						? "bg-indigo-600 text-white rounded-md"
						: ""
				}`}
			>
				<AlignRight size={16} />
			</button>
			<div className="flex space-x-1">
				{textColors.map((color) => (
					<button
						key={color}
						onClick={() => onStyleClick(color)}
						className={`w-6 h-6 rounded-full ${
							activeStyles.color === color ? "border-2 border-indigo-600" : ""
						}`}
						style={{ background: color }}
					/>
				))}
			</div>
		</div>
	);
};

const TextEditor = () => {
	const [paragraphs, setParagraphs] = useState([{ id: 1, content: "<br>" }]);
	const [activeParagraphId, setActiveParagraphId] = useState(1);
	const [showToolbar, setShowToolbar] = useState(false);
	const [activeStyles, setActiveStyles] = useState({
		bold: false,
		italic: false,
		underline: false,
		align: "left",
		color: "black",
	});
	const editorRef = useRef(null);

	useEffect(() => {
		const handleClick = (e) => {
			const paragraph = e.target.closest("p");
			if (paragraph) {
				setActiveParagraphId(Number(paragraph.dataset.id));
				updateActiveStyles(paragraph);
			}
		};

		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, []);

	const updateActiveStyles = (element) => {
		const computedStyle = window.getComputedStyle(element);
		setActiveStyles({
			bold:
				computedStyle.fontWeight === "bold" ||
				Number(computedStyle.fontWeight) >= 700,
			italic: computedStyle.fontStyle === "italic",
			underline: computedStyle.textDecoration.includes("underline"),
			align: computedStyle.textAlign,
			color: computedStyle.color,
		});
	};

	const handleKeyDown = (e, id) => {
		if (e.key === "Enter") {
			e.preventDefault();
			const newId = Date.now();
			setParagraphs((prev) => [...prev, { id: newId, content: "<br>" }]);
			setActiveParagraphId(newId);
		}
	};

	const handleContentChange = (e, id) => {
		setActiveParagraphId(id);
		setParagraphs((prev) =>
			prev.map((p) => (p.id === id ? { ...p, content: e.target.innerHTML } : p))
		);
	};

	const applyStyle = (style, value) => {
		const activeParagraph = document.querySelector(
			`p[data-id="${activeParagraphId}"]`
		);
		if (!activeParagraph) return;

		switch (style) {
			case "bold":
				activeParagraph.style.fontWeight = activeStyles.bold
					? "normal"
					: "bold";
				break;
			case "italic":
				activeParagraph.style.fontStyle = activeStyles.italic
					? "normal"
					: "italic";
				break;
			case "underline":
				activeParagraph.style.textDecoration = activeStyles.underline
					? "none"
					: "underline";
				break;
			case "align":
				activeParagraph.style.textAlign = activeStyles.align;
				break;
			case "color":
				console.log(activeStyles, value, "active styles");
				activeParagraph.style.color = activeStyles.color;
				break;
		}

		updateActiveStyles(activeParagraph);
	};

	return (
		<div className="relative p-5 flex justify-center items-center h-screen flex-col">
			<div className="max-w-xl">
				<InlineToolbar
					show={true}
					onStyleClick={applyStyle}
					activeStyles={activeStyles}
				/>
				<div
					ref={editorRef}
					className="w-full mx-auto p-2 border border-gray-300 rounded-md overflow-auto"
					onClick={() => setShowToolbar(true)}
					onBlur={(e) => setShowToolbar(false)}
				>
					{paragraphs.map(({ id, content }) => (
						<p
							key={id}
							data-id={id}
							dangerouslySetInnerHTML={{ __html: content }}
							onKeyDown={(e) => handleKeyDown(e, id)}
							onInput={(e) => handleContentChange(e, id)}
							contentEditable={activeParagraphId === id}
							className="outline-none"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default TextEditor;
