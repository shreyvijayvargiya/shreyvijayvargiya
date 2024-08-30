import React, { useRef, useState } from "react";
import { gsap } from "gsap";

const ImageGrid = () => {
	const gridRef = useRef(null);
	const [isRow, setIsRow] = useState(false);

	const handleMouseEnter = () => {
		setIsRow(true);
	};

	const handleMouseLeave = () => {
		setIsRow(false);
	};

	return (
		<div
			ref={gridRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`flex ${
				isRow ? "flex-row" : "flex-col"
			} transition-all duration-100 w-1/4 h-1/4 mx-auto mt-40 justify-center items-center`}
		>
			{[
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_9lUWQ5iiXACH9TC0.jpeg?alt=media&token=0de588ed-2282-40e5-8e3c-faee01b8c38c",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_CFsSlVxcz87wIhuP.jpeg?alt=media&token=59d9c2f3-6cba-4384-99ec-e07e3c3d9579",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_5nfyEaT_0yMgJ7rV.jpeg?alt=media&token=5b349c27-d229-4186-b9f6-4b85a93c7848",
				"https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_LAlGTaACtiPTOsnt.jpeg?alt=media&token=6662d093-b504-49c8-a40b-02186971d3f0",
			].map((src, index) => (
				<div key={index} className="image-item cursor-pointer">
					<img
						src={src}
						alt={`Image ${index + 1}`}
						className="w-60 h-60 object-cover rounded-md"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGrid;
