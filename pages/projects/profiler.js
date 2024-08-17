import React, { useState } from "react";
import Portfolio1 from "./socialintro";
import Portfolio2 from "./socialintro2";
import Portfolio3 from "./socialintro3";
import SamanthaPortfolio from "./samantha-portfolio";
import JohnDoePortfolio from "./johndoe";
import { Button } from "@mantine/core";
import AliceMacguire from "./alice-macquire";
import NavigationBarPage from "./navigation";
import { FaDesktop, FaMobile } from "react-icons/fa";

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
			case "AliceMacquire":
				return <AliceMacguire />;
			case "NavigationBarPage":
				return <NavigationBarPage />;
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
		<div className="h-screen w-full flex justify-between items-start p-0">
			<div className="flex flex-col justify-start items-start gap-2 md:w-60 border border-gray-100 rounded-xl p-4 h-10/12 bg-gray-50 m-2 overflow-y-scroll">
				<p>Templates</p>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("Portfolio1")}
				>
					Social Intro 1
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("Portfolio2")}
				>
					Social Intro 2
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("Portfolio3")}
				>
					Social Intro 3
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("SamanthaPortfolio")}
				>
					Samantha Portfolio
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("JohnDoePortfolio")}
				>
					John Doe Portfolio
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("AliceMacquire")}
				>
					Alice Maxquire
				</button>
				<button
					className="p-2 hover:border hover:border-gray-700 rounded-lg bg-white hover:bg-gray-900 hover:text-white hover:px-4 duration-150"
					onClick={() => setSelectedPortfolio("NavigationBarPage")}
				>
					Navigation Portfolio
				</button>
			</div>
			<div className="w-3/4 m-2">
				<div className="flex justify-center items-center w-full mx-auto gap-2 my-2">
					<Button
						color="dark"
						size="xs"
						onClick={() => setToggleScreen("desktop")}
						variant={toggleScreen === "desktop" ? "filled" : "outline"}
						leftIcon={<FaMobile />}
					>
						Desktop
					</Button>
					<Button
						color="dark"
						size="xs"
						onClick={() => setToggleScreen("mobile")}
						variant={toggleScreen === "mobile" ? "filled" : "outline"}
						leftIcon={<FaDesktop />}
					>
						Mobile
					</Button>
				</div>
				<div
					className="overflow-scroll w-80 mx-auto border-4 border-gray-900 rounded-2xl resize-x"
					style={{
						width: toggleScreen === "desktop" ? "100%" : "24em",
						height: "70vh",
						maxWidth: "90%",
						minWidth: "20%",
						transition: "width 0.1s ease-in-out",
					}}
				>
					{renderSelectedPortfolio()}
				</div>
			</div>
		</div>
	);
};

export default Profiler;
