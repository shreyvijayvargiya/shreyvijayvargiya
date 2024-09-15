import React, { useState } from "react";
import Portfolio1 from "./socialintro";
import Portfolio2 from "./socialintro2";
import Portfolio3 from "./socialintro3";
import SamanthaPortfolio from "./samantha-portfolio";
import JohnDoePortfolio from "./johndoe";
import AliceMacguire from "./alice-macquire";

const profilers = [
	{ id: 1, component: <Portfolio1 /> },
	{
		id: 2,
		component: <Portfolio2 />,
	},
	{
		id: 3,
		component: <Portfolio3 />,
	},
	{
		id: 4,
		component: <SamanthaPortfolio />,
	},
	{
		id: 5,
		component: <JohnDoePortfolio />,
	},
	{
		id: 6,
		component: <AliceMacguire />,
	},
];

const Profiler = () => {
	return (
		<div
			className="container relative flex justify-start items-start w-auto overflow-x-scroll"
			style={{
				scrollSnapType: "mandatory",
				scrollSnapStop: "normal",
				scrollBehavior: "smooth",
				width: "600%",
			}}
		>
			{profilers.map((item) => {
				return (
					<div
						key={item.id}
						className="h-screen min-w-full"
						style={{ scrollSnapAlign: "start", width: "100%" }}
					>
						{item.component}
					</div>
				);
			})}
		</div>
	);
};

export default Profiler;
