import React, { useState } from "react";
import Portfolio2 from "./socialintro2";
import Portfolio3 from "./socialintro3";
import SamanthaPortfolio from "./samantha-portfolio";
import JohnDoePortfolio from "./johndoe";
import AliceMacguire from "./alice-macquire";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import DailyWriter from "./daily-writer";
import TagsInput from "./tags-input";
import TemperatureSlider from "./temperature-slider";
import Stepper from "./stepper";
import MusicCard from "./music-card";
import LiveClock from "./live-clock";
import ImageGallery from "./image-gallery";
import HoverButton from "./hover-button";
import HoverFramerButton from "./fluid-button";
import UpiPaymentForm from "./upi-payment-form";
import CardPaymentForm from "./card-payment-form";
import NavigationBarPage from "./navigation";
import PopDetails from "./popdetails";
import PinImage from "components/Projects/PinImage";
import RandomTitlePage from "./random-title";
import StackOver from "./stack-over";
import TweetFooter from "./tweet-footer";
import UserOnboarding from "./user-journey";
import WelcomeDock from "./welcome-dock";
import Gallery from "./latest-blogs";

const profilers = [
	{ id: 1, component: <DailyWriter /> },
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
	{
		id: 7,
		component: <TagsInput />,
	},
	{
		id: 8,
		component: <TemperatureSlider />,
	},
	{
		id: 9,
		component: <Stepper />,
	},
	{
		id: 10,
		component: <MusicCard />,
	},
	{
		id: 11,
		component: <LiveClock />,
	},
	{
		id: 12,
		component: <ImageGallery />,
	},
	{
		id: 13,
		component: <HoverButton />,
	},
	{
		id: 14,
		component: <HoverFramerButton />,
	},
	{
		id: 15,
		component: <UpiPaymentForm />,
	},
	{
		id: 16,
		component: <CardPaymentForm />,
	},
	{
		id: 17,
		component: <NavigationBarPage />,
	},
	{
		id: 18,
		component: <PopDetails />,
	},
	{
		id: 19,
		component: <PinImage />,
	},
	{
		id: 20,
		component: <RandomTitlePage />,
	},
	{
		id: 21,
		component: <StackOver />,
	},
	{
		id: 22,
		component: <Gallery />,
	},
	{
		id: 23,
		component: <TweetFooter />,
	},
	{
		id: 24,
		component: <UserOnboarding />,
	},
	{
		id: 25,
		component: <WelcomeDock />,
	},
];

const Profiler = () => {
	const [active, setActive] = useState(profilers[0]);
	return (
		<div className="container relative flex h-screen flex-col justify-start items-start">
			<p className="text-5xl my-2 font-mono font-semibold mx-auto">
				Last 30 days
			</p>
			<div className="w-3/4 mx-auto p-2 active-component rounded-2xl shadow-xl border border-gray-400">
				<div
					key={active.id}
					className="w-full "
					style={{
						height: "85vh",
						overflow: "scroll",
					}}
				>
					{active.component}
				</div>
			</div>
			<div className="fixed top-1/2 bottom-1/2 right-10">
				<button
					onClick={() => {
						let currentId = active.id;
						gsap.fromTo(
							".active-component",
							{ scale: 0.95, opacity: 0.98 },
							{ scale: 1, opacity: 1 }
						);
						if (currentId === profilers.length) {
							setActive(profilers[0]);
						} else {
							setActive(
								profilers.filter((item) => item.id === currentId + 1)[0]
							);
						}
					}}
					className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 z-40 transform scale-95 hover:scale-150 transition-all duration-200 ease-in"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};

export default Profiler;
