import {
	AirplayIcon,
	Cpu,
	Dumbbell,
	Palette,
	Plane,
} from "lucide-react";
import React, { useState } from "react";

const StackOver = () => {
	const [show, setShow] = useState(true);

	return (
		<div className="mx-auto flex flex-col justify-center items-center min-h-screen w-full">
			<div
				className={`overflow-hidden w-full h-full my-4 relative flex flex-col justify-center items-center ${
					show ? "space-y-4" : "-space-y-16"
				} transition-all duration-300 ease-in-out`}
			>
				{randomTitlesData.map((item, index) => {
					const Icon = item.icon;
					return (
						<div
							key={item.id}
							className="text-wrap border border-gray-200 max-w-sm break-words rounded-md p-4 space-y-2 bg-white hover:bg-gray-50"
							style={{
								zIndex: index + 1 * 10,
								position: "relative",
								transition: "all 0.5s ease",
							}}
						>
							<div className="flex justify-start items-center gap-2">
								<Icon size={20} />
								<h3 className="text-lg font-semibold">{item.title}</h3>
							</div>
							<p mb="xs" className={`transition-all duration-200 ease-in`}>
								{item.description}
							</p>
						</div>
					);
				})}
			</div>
			<div className="fixed bottom-5">
				<button
					onClick={() => setShow(!show)}
					className="px-4 py-2 my-1 bg-gray-800 hover:bg-black text-white rounded-md w-full"
				>
					{show ? "Hide" : "Show"}
				</button>
			</div>
		</div>
	);
};
export default StackOver;

const randomTitlesData = [
	{
		id: 1,
		title: "Morning Bliss",
		description: "Experience the serenity of dawn with calming melodies.",
		icon: AirplayIcon,
	},
	{
		id: 2,
		title: "Tech Trending",
		description: "Stay updated with the latest in technology and innovation.",
		icon: Cpu,
	},
	{
		id: 3,
		title: "Artistic Vision",
		description: "Dive into the world of contemporary art and design.",
		icon: Plane,
	},
	{
		id: 4,
		title: "Fitness Fusion",
		description: "Blend various workouts for optimal health benefits.",
		icon: Palette,
	},
	{
		id: 5,
		title: "Travel Diaries",
		description: "Journey through mesmerizing destinations worldwide.",
		icon: Dumbbell,
	},
];
