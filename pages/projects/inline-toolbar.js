import React, { useState, useRef, useEffect } from "react";
import {
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
} from "lucide-react";

const colors = [
	"blue-300",
	"indigo-300",
	"green-300",
	"yellow-300",
	"pink-300",
	"red-300",
	"black",
	"gray-300",
];

const InlineToolbar = ({ show, onStyleClick, activeStyles }) => {
	return (
		<div
			className={`bg-white border border-gray-300 p-2 rounded-md flex space-x-2 transition-all duration-300 ${
				show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
			}`}
			// style={{ top: "10px" }}
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
				{colors.map((color) => (
					<button
						key={color}
						onClick={() => onStyleClick(color)}
						className={`w-6 h-6 rounded-full bg-${color} ${
							activeStyles.color === color ? "border-2 border-indigo-600" : ""
						}`}
					/>
				))}
			</div>
		</div>
	);
};

const TextEditor = () => {
	const [showToolbar, setShowToolbar] = useState(false);
	const [activeStyles, setActiveStyles] = useState({
		bold: false,
		italic: false,
		underline: false,
		align: "left",
		color: "black",
	});
	const textAreaRef = useRef(null);
	const toolbarRef = useRef(null);

	useEffect(() => {
		const handleSelection = () => {
			const selection = window.getSelection();
			if (selection.toString()) {
				setShowToolbar(true);
			} else {
				setShowToolbar(false);
			}
		};

		document.addEventListener("selectionchange", handleSelection);
		return () => {
			document.removeEventListener("selectionchange", handleSelection);
		};
	}, []);

	const applyStyle = (command, value) => {
		document.execCommand(command, false, value);
		updateActiveStyles();
	};

	const updateActiveStyles = () => {
		const selection = window.getSelection();
		const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
		if (range) {
			setActiveStyles({
				bold: document.querySelector("bold"),
				italic: document.querySelector("italic"),
				underline: document.querySelector("underline"),
				align: document.querySelector("textAlign") || "left",
				color: document.querySelector("foreColor") || "black",
			});
		}
	};

	const handleStyleClick = (style) => {
		switch (style) {
			case "bold":
				applyStyle("bold");
				break;
			case "italic":
				applyStyle("italic");
				break;
			case "underline":
				applyStyle("underline");
				break;
			case "left":
				applyStyle("justifyLeft");
				break;
			case "center":
				applyStyle("justifyCenter");
				break;
			case "right":
				applyStyle("justifyRight");
				break;
			default:
				applyStyle("foreColor", style);
		}
	};

	return (
		<div className="relative p-5 flex justify-center items-center h-screen flex-col">
			<InlineToolbar
				show={true}
				onStyleClick={handleStyleClick}
				activeStyles={activeStyles}
			/>
			<br />
			<textarea
				ref={textAreaRef}
				className="w-96 h-64 mx-auto p-2 border border-gray-300 rounded-md resize-none"
				style={{ fontSize: "1rem" }}
				onFocus={() => setShowToolbar(true)}
				onBlur={() => setShowToolbar(false)}
			/>
		</div>
	);
};

export default TextEditor;
