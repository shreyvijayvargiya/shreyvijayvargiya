import React, { useState } from "react";
import {
	FaSyncAlt,
	FaArrowLeft,
	FaArrowRight,
	FaTools,
	FaBookmark,
	FaGlobe,
	FaUserCircle,
} from "react-icons/fa";

const ContextMenu = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

	const options = [
		{
			name: "Back",
			icon: <FaArrowLeft />,
			shortcut: "⌘ + [",
			disabled: false,
		},
		{
			name: "Forward",
			icon: <FaArrowRight />,
			shortcut: "⌘ + ]",
			disabled: true,
		},
		{ name: "Reload", icon: <FaSyncAlt />, shortcut: "⌘ + R" },
		{ name: "More Tools", icon: <FaTools />, submenu: true },
		{ separator: true },
		{
			name: "Show Bookmarks",
			icon: <FaBookmark />,
			shortcut: "⌘ + B",
			checked: true,
		},
		{ name: "Show Full URLs", icon: <FaGlobe /> },
		{ separator: true },
		{
			name: "People",
			options: [
				{ name: "Pedro Duarte", icon: <FaUserCircle /> },
				{ name: "Colm Tuite", icon: <FaUserCircle /> },
			],
		},
	];

	const handleContextMenu = (e) => {
		e.preventDefault();
		setMenuPosition({ x: e.pageX, y: e.pageY });
		setIsVisible(true);
	};

	const handleClick = () => {
		if (isVisible) setIsVisible(false);
	};

	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div
				className="p-4 text-lg font-semibold text-gray-700 max-w-5xl min-w-1/4 h-80 border border-dotted border-gray-400 rounded-xl"
				onClick={handleClick}
				onContextMenu={handleContextMenu}
			>
				Right-click to open the context menu
			</div>

			{isVisible && (
				<div
					className="absolute bg-white border border-gray-200 rounded-md shadow-lg z-50 w-1/5 pb-2"
					style={{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }}
				>
					{options.map((option, index) => {
						if (option.separator) {
							return <hr key={index} className="my-1 border-gray-200" />;
						}
						if (option.options) {
							return (
								<div key={index} className="flex flex-col py-1">
									<span className="text mb-2 font-semibold text-gray-500 px-4">
										{option.name}
									</span>
									{option.options.map((subOption, subIndex) => (
										<div
											key={subIndex}
											className="flex items-center gap-3 py-1 pl-4 cursor-pointer hover:bg-gray-100"
										>
											<span className="text-blue-600">{subOption.icon}</span>
											<span>{subOption.name}</span>
										</div>
									))}
								</div>
							);
						}
						return (
							<div
								key={index}
								className={`flex items-center justify-between gap-3 px-4 py-2 cursor-pointer ${
									option.disabled
										? "text-gray-400 cursor-not-allowed"
										: "hover:bg-gray-100"
								}`}
								onClick={() => {
									if (!option.disabled) {
										setIsVisible(false);
									}
								}}
							>
								<div className="flex items-center gap-3">
									<span
										className={`text-gray-600 ${
											option.checked ? "text-blue-500" : ""
										}`}
									>
										{option.icon}
									</span>
									<span>{option.name}</span>
								</div>
								{option.shortcut && (
									<span className="text-xs text-gray-500">
										{option.shortcut}
									</span>
								)}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default ContextMenu;
