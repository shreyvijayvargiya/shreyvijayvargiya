import React, { useState } from "react";
import Portfolio1 from "./socialintro";
import Portfolio2 from "./socialintro2";
import Portfolio3 from "./socialintro3";
import SamanthaPortfolio from "./samantha-portfolio";
import JohnDoePortfolio from "./johndoe";
import { Button } from "@mantine/core";

const Profiler = () => {
	const [selectedPortfolio, setSelectedPortfolio] = useState(null);

	const renderSelectedPortfolio = () => {
		switch (selectedPortfolio) {
			case "Portfolio1":
				return <Portfolio1 />;
			case "Portfolio2":
				return <Portfolio2 />;
			case "Portfolio3":
				return <Portfolio3 />;
			case "SamanthaPortfolio":
				return <SamanthaPortfolio />;
			case "JohnDoePortfolio":
				return <JohnDoePortfolio />;
			default:
				return (
					<div className="text-center text-gray-600">
						Select a portfolio to preview
					</div>
				);
		}
	};
	const [toggleScreen, setToggleScreen] = useState("desktop"); // desktop or mobile

	return (
		<div className="h-screen w-full flex justify-center items-start p-20 flex-col gap-4">
			<div className="flex justify-end items-center w-80 mx-auto gap-2">
				<Button
					color="dark"
					size="xs"
					onClick={() => setToggleScreen("desktop")}
					variant={toggleScreen === "desktop" ? "filled" : "outline"}
				>
					Desktop
				</Button>
				<Button
					color="dark"
					size="xs"
					onClick={() => setToggleScreen("mobile")}
					variant={toggleScreen === "mobile" ? "filled" : "outline"}
				>
					Mobile
				</Button>
			</div>
			<div
				className="overflow-scroll w-80 mx-auto border-4 border-gray-900 rounded-2xl resize-x"
				style={{
					width: toggleScreen === "desktop" ? "50%" : "18em",
					height: "70vh",
					maxWidth: "90%",
					minWidth: "20%",
					transition: "width 0.1s ease-in-out",
				}}
			>
				{renderSelectedPortfolio()}
			</div>
			<div className="flex mx-auto my-4 justify-center items-center gap-4">
				<button
					className="p-2 border border-gray-700 rounded-lg bg-white hover:bg-gray-200"
					onClick={() => setSelectedPortfolio("Portfolio1")}
				>
					Social Intro 1
				</button>
				<button
					className="p-2 border border-gray-700 rounded-lg bg-white hover:bg-gray-200"
					onClick={() => setSelectedPortfolio("Portfolio2")}
				>
					Social Intro 2
				</button>
				<button
					className="p-2 border border-gray-700 rounded-lg bg-white hover:bg-gray-200"
					onClick={() => setSelectedPortfolio("Portfolio3")}
				>
					Social Intro 3
				</button>
				<button
					className="p-2 border border-gray-700 rounded-lg bg-white hover:bg-gray-200"
					onClick={() => setSelectedPortfolio("SamanthaPortfolio")}
				>
					Samantha Portfolio
				</button>
				<button
					className="p-2 border border-gray-700 rounded-lg bg-white hover:bg-gray-200"
					onClick={() => setSelectedPortfolio("JohnDoePortfolio")}
				>
					John Doe Portfolio
				</button>
			</div>
		</div>
	);
};

export default Profiler;
