import React, { useState, useEffect, useRef } from "react";

const AnimatedBoxes = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<div
			className="flex w-full h-screen p-4 justify-center items-center"
			onClick={() => setActiveIndex(null)}
		>
			<div className="flex justify-between items-center mx-auto w-10/12 h-10/12">
				<div
					className={`${
						activeIndex === 0 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer`}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(0);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						style={{ aspectRatio: "auto" }}
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_9lUWQ5iiXACH9TC0.jpeg?alt=media&token=0de588ed-2282-40e5-8e3c-faee01b8c38c"
					/>
				</div>
				<div
					className={`${
						activeIndex === 1 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer `}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(1);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_CFsSlVxcz87wIhuP.jpeg?alt=media&token=59d9c2f3-6cba-4384-99ec-e07e3c3d9579"
					/>
				</div>
				<div
					className={`${
						activeIndex === 2 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer `}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(2);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_5nfyEaT_0yMgJ7rV.jpeg?alt=media&token=5b349c27-d229-4186-b9f6-4b85a93c7848"
					/>
				</div>
				<div
					className={`${
						activeIndex === 3 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer `}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(3);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_LAlGTaACtiPTOsnt.jpeg?alt=media&token=6662d093-b504-49c8-a40b-02186971d3f0"
					/>
				</div>
				<div
					className={`${
						activeIndex === 4 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer `}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(4);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Logs%2F0_8FvOcbiqDJfsneJF.jpeg?alt=media&token=85da75cd-2d39-4c21-baf1-3313094968b5"
					/>
				</div>
				<div
					className={`${
						activeIndex === 5 ? "w-full h-full" : "w-80 h-full"
					} duration-200 transition-all ease-in-out hover:px-2 cursor-pointer `}
					onClick={(e) => {
						e.stopPropagation();
						setActiveIndex(5);
					}}
				>
					<img
						className="w-full h-full rounded-md object-fill"
						src="https://firebasestorage.googleapis.com/v0/b/ihatereading-4ba52.appspot.com/o/Karyams%2FQXq1wZdVU3X7pGJJjdiB2JSavdk1%2Fimages%2F1bf258e3-07fd-4dde-9851-4599acae586f-ezgif.com-video-to-gif-converter.gif?alt=media&token=36ba661f-696f-4fdc-9928-7d28a217da1d"
					/>
				</div>
			</div>
		</div>
	);
};

export default AnimatedBoxes;
