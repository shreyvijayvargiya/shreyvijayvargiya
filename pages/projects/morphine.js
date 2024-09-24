import { useState } from "react";

const MorphineButton = () => {
	const [active, setActive] = useState(0);

	return (
		<div className="flex justify-center items-center h-screen space-x-4">
			<div className="relative flex justify-center items-center">
				<div
					onClick={() => {
						setActive(1);
					}}
					className={`cursor-pointer p-3 text-center text-white bg-black ${
						active === 1 && active !== 0
							? "bg-indigo-600 mr-5 rounded-2xl shadow-2xl"
							: active === 2
							? "ml-0 rounded-xl"
							: "rounded-l-xl mr-0"
					} transition-all duration-500 ease-in`}
				>
					Home
				</div>
				<div
					onClick={() => {
						setActive(2);
					}}
					className={` cursor-pointer p-3 text-center text-white bg-black ${
						active === 2 && active !== 0
							? "bg-indigo-600 mx-5 rounded-2xl shadow-2xl"
							: active === 1
							? "ml-0 rounded-l-xl pl-5"
							: "rounded-r-xl mr-4 ml-0"
					} transition-all duration-500 ease-in`}
				>
					About
				</div>
				<div
					onClick={() => {
						setActive(3);
					}}
					className={`cursor-pointer p-3 text-center text-white bg-black ${
						active === 3 && active !== 0
							? "bg-indigo-600 ml-5 rounded-2xl shadow-2xl"
							: active === 1
							? "ml-0 rounded-r-xl"
							: "rounded-xl"
					} transition-all duration-500 ease-in`}
				>
					Subscribe
				</div>
			</div>
		</div>
	);
};

export default MorphineButton;
