import React, { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";
import { gsap } from "gsap";
import {
	FaSpotify,
	FaAmazon,
	FaApple,
	FaTrello,
	FaSlack,
	FaDropbox,
	FaPatreon,
	FaYoutube,
	FaGoogleDrive,
	FaMicrosoft,
	FaTwitch,
} from "react-icons/fa";
import { SiAdobecreativecloud, SiHulu, SiNetflix } from "react-icons/si";

const subscriptionPlatforms = [
	{ name: "Spotify", logo: FaSpotify },
	{ name: "Netflix", logo: SiNetflix },
	{ name: "Amazon Prime", logo: FaAmazon },
	{ name: "Apple Music", logo: FaApple },
	{ name: "Adobe Creative Cloud", logo: SiAdobecreativecloud },
	{ name: "Trello", logo: FaTrello },
	{ name: "Slack", logo: FaSlack },
	{ name: "Dropbox", logo: FaDropbox },
	{ name: "Patreon", logo: FaPatreon },
	{ name: "YouTube Music", logo: FaYoutube },
	{ name: "Google Drive", logo: FaGoogleDrive },
	{ name: "Microsoft 365", logo: FaMicrosoft },
	{ name: "Hulu", logo: SiHulu },
	{ name: "Twitch", logo: FaTwitch },
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DailyWriter = () => {
	const calendarRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			calendarRef.current,
			{ opacity: 0, y: -50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power2.out" }
		);
	}, []);

	const dates = Array.from({ length: 30 }, (_, i) => {
		return {
			id: i + 1,
		};
	});

	const [vals, setVals] = useState(dates);
	const [value, setValue] = useState("");
	const [loader, setLoader] = useState(false);
	const [active, setActive] = useState(null);
	const [show, setShow] = useState(false);
	const [subscriptions, setSubscriptions] = useState([]);

	const handleSubscriptions = (data) => {
		const updatedVals = vals.map((date) => {
			if (date.id === active) {
				return { ...date, subscriptions: data };
			}
			return date;
		});
		setSubscriptions(data);
		setVals(updatedVals);
	};

	const handleSaveMessage = () => {
		if (active === null) return;
		setLoader(true);
		setTimeout(() => {
			setActive(null);
			setShow(false);
			setValue("");
			setSubscriptions([]);
			setLoader(false);
		}, 200);
	};

	return (
		<div
			className={`min-h-screen flex flex-col items-center justify-center`}
			onClick={(e) => {
				e.stopPropagation();
				setShow(false);
				setActive(null);
				setValue("");
			}}
		>
			{show && active !== null && (
				<div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-gray-50 bg-opacity-90" />
			)}
			<div
				ref={calendarRef}
				className={`calender-ref border border-gray-300 p-8 rounded-xl min-w-1/2 bg-white shadow-sm`}
			>
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-3xl font-serif">September 2024, subscriptions</h2>
				</div>
				<div>
					<div>
						<div
							className={`writing-container grid grid-cols-7 text-center my-8 gap-2`}
						>
							{daysOfWeek.map((day, index) => (
								<div
									key={index}
									className="text-sm font-medium text-gray-600 rounded-full px-4 py-2 border border-gray-200"
								>
									{day}
								</div>
							))}
						</div>

						<div className="grid grid-cols-7 gap-4 mt-4">
							{vals.map((date) => {
								const hasSubscriber = date.subscriptions && date.subscriptions.length > 0;
								return (
									<div
										key={date.id}
										onClick={(e) => {
											e.stopPropagation();
											setActive(date.id);
											setShow(true);
											setSubscriptions(date?.subscriptions);
										}}
										className={`relative flex items-center justify-center flex-col h-20 w-20 rounded-md transition-all duration-100 ease-in text-gray-800 font-semibold cursor-pointer ${
											hasSubscriber
												? "bg-green-100 bg-opacity-80 hover:bg-green-100 hover:bg-opacity-60"
												: "bg-gray-100 bg-opacity-80 hover:bg-gray-100 hover:bg-opacity-60"
										}`}
									>
										{date.id}
										<div className="">
											{hasSubscriber && (
												<p className="text-xs flex justify-around items-center gap-1">
													{date?.subscriptions.map((item) => item.logo())}
												</p>
											)}
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			{show && active && (
				<div
					className={`modal-content p-4 rounded-xl bg-white border border-gray-200 shadow-2xl z-10 h-auto w-108 overflow-scroll`}
					style={{
						position: show ? "fixed" : "relative",
						top: show ? "50%" : "0%",
						left: show ? "50%" : "0%",
						transform: "translate(-50%, -50%)",
						transition: "all 0.5s ease",
					}}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<p className="font-semibold mt-2">September {active}</p>
					<div className="flex my-4 max-w-md flex-wrap justify-start text-sm gap-3">
						{subscriptionPlatforms.map((platform) => {
							const isSubscribed =
								subscriptions?.filter((item) => item.name === platform.name)
									.length > 0;
							return (
								<div
									key={platform.name}
									onClick={() => {
										if (isSubscribed) {
											handleSubscriptions(
												subscriptions?.filter((name) => name !== platform.name)
											);
										} else {
											const newData = subscriptions
												? [...subscriptions, platform]
												: [platform];
											handleSubscriptions(newData);
										}
									}}
									className={`flex items-center space-x-2 border border-gray-200 rounded-md p-2 cursor-pointer ${
										isSubscribed
											? "bg-green-100 hover:bg-green-200"
											: "bg-gray-50 hover:bg-gray-100"
									}`}
								>
									{platform.logo()}
									<span>{platform.name}</span>
								</div>
							);
						})}
					</div>
					<button
						className="w-full p-4 rounded-xl mb-2 bg-gray-900 text-white flex justify-center gap-2 items-center"
						onClick={handleSaveMessage}
					>
						{loader && (
							<Loader size={18} color={"#fafafa"} className="animate-spin" />
						)}
						Save
					</button>
				</div>
			)}
		</div>
	);
};

export default DailyWriter;
