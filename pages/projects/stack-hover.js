import React, { useState, useRef } from "react";
import { Card, Text, Title, createStyles } from "@mantine/core";
import * as LucideIcons from "lucide-react";
import colors from "tailwindcss/colors";
import { Airplay, AlertCircle, AlignCenter, AtSign, Award } from "lucide-react";

const RandomTitlesComponent = () => {
	const carouselRef = useRef();

	const [show, setShow] = useState(true);


	return (
		<div className="mx-auto flex flex-col justify-center items-center min-h-screen w-full">
			<div>
				<p>Click to toggle</p>
				<p>👇</p>
				<button
					onClick={() => setShow(!show)}
					className="px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					Toggle
				</button>
			</div>
			<div className="overflow-hidden w-full my-4 group">
				<div
					className={`flex justify-center items-center flex-col transition-all duration-150 ease-in-out`}
					ref={carouselRef}
				>
					{randomTitlesData.map((item) => {
						return (
							<div
								key={item.id}
								className="min-w-sm max-w-md text-wrap border border-gray-200 rounded-md p-4 space-y-4 group-hover:-space-y-5 "
							>
								<h3 className="text-lg font-semibold">{item.title}</h3>
								<p mb="xs" className="">
									{item.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RandomTitlesComponent;

const randomTitlesData = [
	{
		id: 1,
		title: "Morning Bliss",
		description: "Experience the serenity of dawn with calming melodies.",
	},
	{
		id: 2,
		title: "Tech Trends",
		description: "Stay updated with the latest in technology and innovation.",
	},
	{
		id: 3,
		title: "Culinary Delights",
		description: "Explore recipes that tantalize your taste buds.",
	},
	{
		id: 4,
		title: "Artistic Vision",
		description: "Dive into the world of contemporary art and design.",
	},
	{
		id: 5,
		title: "Fitness Fusion",
		description: "Blend various workouts for optimal health benefits.",
	},
	{
		id: 6,
		title: "Travel Diaries",
		description: "Journey through mesmerizing destinations worldwide.",
	},
];
