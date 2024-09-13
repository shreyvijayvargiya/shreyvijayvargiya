import React, { useState } from "react";

const Home = () => {
	const [toggle, setToggle] = useState(false);

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	return (
		<div
			className="h-screen w-full overflow-hidden flex flex-col justify-center items-center relative"
			onMouseMoveCapture={(e) => {
				setToggle(false);
				setMousePosition({ x: e.clientX, y: e.clientY });
			}}
		>
			<div
				className="md:2/5 sm:w-full xl:w-2/5 xs:w-full xxs:w-full mx-auto break-words"
				onMouseMoveCapture={(e) => {
					setToggle(true);
					setMousePosition({ x: e.clientX, y: e.clientY });
				}}
				onMouseLeave={(e) => {
					setToggle(false);
				}}
			>
				<img src="/avatar.png" />
				<p className="text-gray-300 text-xl font-sans">
					Hi, I am Shrey, I am a Full Stack Developer with 5 years of industry
					experience in developing websites, mobile apps, blockchain wallets,
					smart contracts and backend services{" "}
				</p>
				<p className="text-xs w-28 py-2 px-2 rounded-md text-gray-300 my-2 bg-opacity-5 bg-gray-900 border border-gray-700 font-serif mx-auto">
					Hover the card
				</p>
				<div
					className="box-2 w-4 h-4 rounded-full bg-green-600 p-2"
					id="box-2"
					style={{
						position: "fixed",
						top: mousePosition.y,
						left: mousePosition.x,
						transition: "all 0.5s ease-in-out",
					}}
				/>
			</div>
		</div>
	);
};
export default Home;
