import React, { useState, useRef } from "react";
import {
	PaletteIcon,
	ImageIcon,
	LinkIcon,
	AlignCenter,
	LucideItalic,
	Strikethrough,
	UnderlineIcon,
	BoldIcon,
} from "lucide-react";
import { ImTextColor } from "react-icons/im";

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

const TextEditor = () => {
	const [text, setText] = useState("");
	const [bgColor, setBgColor] = useState("transparent");
	const [textColor, setTextColor] = useState("black");
	const [alignment, setAlignment] = useState("left");
	const [isImageAdding, setIsImageAdding] = useState(false);
	const [showColorPalette, setShowColorPalette] = useState("");
	const [showBackgroundColorPalette, setShowBackgroundColorPalette] =
		useState(false);
	const [showLinkInput, setShowLinkInput] = useState(false);
	const inputRef = useRef(null);

	const ColorPalette = ({ onColorSelect, type }) => {
		return (
			<div className="absolute top-14 bg-white shadow-lg p-2 rounded border border-gray-200">
				<p className="mb-2">Select {type} color</p>
				<div className="flex space-x-1">
					{colors.map((color) => (
						<button
							key={color}
							onClick={() => {
								onColorSelect(color);
								setShowColorPalette("");
							}}
							className={`w-6 h-6 rounded-full bg-${color} ${
								textColor === color ? "border-2 border-indigo-600" : ""
							}`}
						/>
					))}
				</div>
			</div>
		);
	};

	const AddLinkInput = () => {
		return (
			<div className="absolute top-14 bg-white shadow-lg p-4 rounded border border-gray-200">
				<p className="mb-2">Add a link</p>
				<input className="border border-gray-200 rounded-md p-2 mb-2 w-full" />
				<button
					className="bg-gray-100 rounded-md p-2 hover:bg-gray-200"
					onClick={() => setShowLinkInput(false)}
				>
					Add link
				</button>
			</div>
		);
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setText(
					`${text} <img src="${reader.result}" class="w-10 h-10 inline-block" />`
				);
				setIsImageAdding(false);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleToolbarAction = (action) => {
		switch (action) {
			case "link":
				setShowLinkInput(true);
				break;
			case "bold":
				setText(`**${text}**`);
				break;
			case "italic":
				setText(`*${text}*`);
				break;
			case "strike":
				setText(`~~${text}~~`);
				break;
			case "underline":
				setText(`<u>${text}</u>`);
				break;
			case "textColor":
				setShowColorPalette("text");
				break;
			case "bgColor":
				setShowColorPalette("background");
				break;
			case "alignment":
				setAlignment(
					prompt("Enter alignment (left, center, right):") || alignment
				);
				break;
			default:
				break;
		}
	};

	const NestedToolbar = () => {
		if (showLinkInput) {
			return <showLinkInput />;
		} else if (showColorPalette) {
			return (
				<ColorPalette
					onColorSelect={(color) => {
						setTextColor(color);
					}}
					type={showColorPalette === "text" ? "text" : "background"}
				/>
			);
		} else if (showBackgroundColorPalette) {
			return (
				<ColorPalette
					onColorSelect={(color) => {
						setBgColor(color);
					}}
					type={showColorPalette === "text" ? "text" : "background"}
				/>
			);
		}
		return "";
	};

	return (
		<div className="relative flex justify-center items-center flex-col h-screen w-full">
			<div className="p-4 w-1/4">
				<div
					className="flex justify-between items-center my-2 gap-4 border border-gray-200 px-4 py-2 rounded-xl relative"
					style={{
						backgroundColor: bgColor,
						color: textColor,
						textAlign: alignment,
					}}
				>
					<NestedToolbar />
					<button
						onClick={() => handleToolbarAction("link")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<LinkIcon />
					</button>
					<button
						onClick={() => setIsImageAdding(true)}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<ImageIcon />
					</button>
					<button
						onClick={() => handleToolbarAction("bold")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<BoldIcon />
					</button>
					<button
						onClick={() => handleToolbarAction("italic")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<LucideItalic />
					</button>
					<button
						onClick={() => handleToolbarAction("strike")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<Strikethrough />
					</button>
					<button
						onClick={() => handleToolbarAction("underline")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<UnderlineIcon />
					</button>
					<button
						onClick={() => handleToolbarAction("textColor")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<ImTextColor size={24} />
					</button>
					<button
						onClick={() => handleToolbarAction("bgColor")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<PaletteIcon />
					</button>
					<button
						onClick={() => handleToolbarAction("alignment")}
						className="p-1 hover:bg-gray-100 rounded-md hover:p-2 transition-all duration-200 ease-in text-gray-500 hover:text-gray-800"
					>
						<AlignCenter />
					</button>
					{isImageAdding && (
						<input
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							className="absolute top-0 left-0 opacity-0"
							style={{ display: "none" }}
						/>
					)}
				</div>
				<textarea
					ref={inputRef}
					value={text}
					placeholder="Start typing"
					className="w-full border border-gray-200 active:outline-none focus:outline-none outline-none rounded-xl p-2 text-lg text-gray-800 bg-white shadow-sm"
					onChange={(e) => setText(e.target.value)}
					autosize
					minRows={4}
				/>
			</div>
		</div>
	);
};

export default TextEditor;
