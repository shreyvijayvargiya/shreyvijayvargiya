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
			style={{
				backgroundOrigin: "border-box",
				backgroundPosition: "center center",
				backgroundRepeat: "repeat",
				backgroundAttachment: "fixed",
				backgroundBlendMode: "darken",
			}}
		>
			<div
				className="md:w-2/5 sm:w-full xl:w-2/5 xs:w-full xxs:w-full mx-auto break-words"
				onMouseMoveCapture={(e) => {
					setToggle(true);
					setMousePosition({ x: e.clientX, y: e.clientY });
				}}
				onMouseLeave={(e) => {
					setToggle(false);
				}}
			>
				<p>
					this is <span className="text-7xl font-mono">SHREY</span>
				</p>
				{toggle ? (
					<div
						style={{
							position: "fixed",
							top: mousePosition.y - 100 + "px",
							left: mousePosition.x - 100 + "px",
							width: toggle ? "50vw" : "0px",
							height: toggle ? "50vh" : "0px",
							borderRadius: 10,
							transition: "all 0.5s ease-in-out",
						}}
						className="box-1 text-gray-900 font-semibold w-full h-full border-2 border-dashed border-gray-300 p-2 flex justify-center items-center bg-transparent"
					>
						<iframe
							src="https://www.iamshrey.me/"
							width="100%"
							height="100%"
							style={{ borderRadius: 10 }}
							title="iamShrey portfolio website"
						/>
					</div>
				) : (
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
				)}
			</div>
		</div>
	);
};
export default Home;
