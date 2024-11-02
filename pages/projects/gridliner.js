import React, { useState, useEffect } from "react";
import { CrossIcon, RefreshCwIcon } from "lucide-react";
import { gsap } from "gsap";

const images = [
	{ id: 1, src: "img-1.jpg" },
	{ id: 2, src: "img-2.jpg" },
	{ id: 3, src: "img-3.jpg" },
	{ id: 4, src: "img-4.jpg" },
	{ id: 5, src: "img-5.jpg" },
	{ id: 6, src: "img-6.jpg" },
	{ id: 7, src: "img-7.jpg" },
	{ id: 8, src: "img-8.jpg" },
	{ id: 9, src: "img-9.jpg" },
	{ id: 10, src: "img-10.jpg" },
	{ id: 11, src: "img-11.jpg" },
	{ id: 12, src: "img-12.jpg" },
	{ id: 13, src: "img-13.jpg" },
	{ id: 14, src: "img-14.jpg" },
	{ id: 15, src: "img-15.jpg" },
	{ id: 16, src: "img-16.jpg" },
	{ id: 17, src: "img-17.jpg" },
	{ id: 18, src: "img-18.jpg" },
];
const gridSize = 44;
const imagePositions = [1, 3, 7, 10, 14, 17, 20, 24, 27, 30, 33, 37, 39, 43];

const Gridliner = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [config, setConfig] = useState({
		grids: 4,
		animationDirection: "vertical",
		duration: 10,
	});

	const animation = () => {
		if (config.animationDirection === "vertical") {
			return { y: "-=300" };
		} else {
			return { x: "-=300" };
		}
	};

	const tl = gsap.timeline({});
	useEffect(() => {
		if (tl.isActive()) {
			tl.kill();
		}
		tl.to(".grid-container", {
			...animation(),
			delay: 1,
			stagger: 5,
			duration: config.duration,
			ease: "linear",
		});

		return () => {
			tl.kill();
		};
	}, [config]);

	const openModal = (imageSrc) => {
		setSelectedImage(imageSrc);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">
			<div className="fixed bottom-10 left-10 z-50 border boder-gray-400 p-4 bg-gray-50 rounded-xl">
				<div className="flex justify-between items-center my-2 gap-4">
					<p>Duration</p>
					<input
						value={config.duration}
						onChange={(e) => {
							setConfig((prevState) => ({
								...prevState,
								duration: e.target.value,
							}));
						}}
						type="number"
						className="outline-none border boder-gray-200 rounded-md focus:outline-none focus:border focus:border-gray-200 p-1"
					/>
				</div>
				<div className="flex justify-between items-center my-2 gap-4">
					<p>Grids</p>
					<input
						value={config.grids}
						onChange={(e) => {
							setConfig((prevState) => ({
								...prevState,
								grids: e.target.value,
							}));
						}}
						type="number"
						className="outline-none border boder-gray-200 rounded-md focus:outline-none focus:border focus:border-gray-200 p-1"
					/>
				</div>
				<div className="flex justify-between items-center my-2 gap-4">
					<p>Direction</p>
					<select
						className="outline-none border border-gray-200 rounded-md focus:outline-none focus:border focus:border-gray-200 p-1"
						onChange={(e) => {
							console.log(e.target.value);
							setConfig((prevState) => ({
								...prevState,
								animationDirection: e.target.value,
							}));
						}}
					>
						<option key="vertical" value="vertical">
							vertical
						</option>
						<option key="horizontal" value="horizontal">
							horizontal
						</option>
					</select>
				</div>
				<button
					className="p-2 hover:bg-white w-full flex justify-start gap-1 items-center text-sm"
					onClick={() => {
						tl.restart();
					}}
				>
					<RefreshCwIcon size={14} />
					Restart
				</button>
			</div>
			<div
				className={`grid-container grid grid-cols-${config.grids} justify-center items-center mx-auto`}
				style={{
					opacity: selectedImage ? 0.2 : 1,
				}}
			>
				{Array.from({ length: gridSize }).map((_, idx) => (
					<div
						key={idx}
						className="w-32 h-32 p-1 flex items-center justify-center border boder-gray-200 "
					>
						{imagePositions.includes(idx + 1) ? (
							<div
								className="cursor-pointer"
								onClick={() =>
									openModal(
										`/clothes/${images[imagePositions.indexOf(idx + 1)].src}`
									)
								}
							>
								<img
									src={`/clothes/${
										images[imagePositions.indexOf(idx + 1)].src
									}`}
									alt={`Clothes ${idx + 1}`}
									className="w-28 h-28 hover:bg-gray-50 transform hover:scale-90 transition-all duration-100 ease-in"
								/>
							</div>
						) : null}
					</div>
				))}
			</div>

			<div
				className="fixed inset-0 z-50 h-screen py-4 overflow-scroll"
				style={{
					position: "fixed",
					top: selectedImage ? "50%" : "0%",
					left: "50%",
					minHeight: "80vh",
					width: selectedImage ? "100%" : "0%",
					opacity: selectedImage ? 1 : 0,
					transform: "translate(-50%, -50%)",
					transition: "all 0.5s ease",
				}}
			>
				<div className="relative mx-auto md:w-1/2 sm:w-full xs:w-full xxs:w-full flex flex-col justify-center overflow-scroll items-center gap-4 space-y-2">
					<button
						onClick={closeModal}
						className="bg-gray-50 hover:p-4 transition-all duration-100 ease-in rotate-45 transform w-auto text-black p-2 rounded-full"
					>
						<CrossIcon />
					</button>
					<img
						src={selectedImage}
						alt="Selected"
						className="object-contain max-h-[70vh] w-full h-1/2 rounded-xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default Gridliner;
