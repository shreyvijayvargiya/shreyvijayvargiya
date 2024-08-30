import React from "react";

const HoverExpandText = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<span className="relative text-2xl font-semibold cursor-pointer after:absolute after:left-0 after:bottom-0 after:top-0 after:bg-gray-200 after:w-10 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:before:w-full after:contnet-[''] hover:after:w-0">
				Hover Me
			</span>
			<br />
			<p>I am <mark>Marked</mark>text</p>
		</div>
	);
};

export default HoverExpandText;
