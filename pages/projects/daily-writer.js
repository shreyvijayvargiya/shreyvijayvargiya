import React, { useEffect, useRef, useState } from "react";
import { Glasses, Loader, Pencil } from "lucide-react";
import { gsap } from "gsap";

const moods = [
	{ emoji: "😀", label: "Happy" },
	{ emoji: "🤣", label: "Laughing" },
	{ emoji: "🥰", label: "Loving" },
	{ emoji: "😢", label: "Sad" },
	{ emoji: "😊", label: "Satisfied" },
	{ emoji: "❤️", label: "Loved" },
	{ emoji: "😌", label: "Peaceful" },
	{ emoji: "🥸", label: "Silly" },
	{ emoji: "📖", label: "Reading" },
	{ emoji: "✍️", label: "Writing" },
	{ emoji: "💃", label: "Dancing" },
	{ emoji: "🍹", label: "Drinking" },
];

const moodMap = {
	Sad: "😢",
	Happy: "😀",
	Laughing: "🤣",
	Loving: "🥰",
	Loved: "❤️",
	Reading: "📖",
	Satisfied: "😊",
	Writing: "✍️",
	Peaceful: "😌",
	Dancing: "💃",
	Drinking: "🍹",
	Neutral: "🫥",
	Silly: "🥸",
};
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
			message: "",
			mood: "",
		};
	});

	const [progress, setProgress] = useState(0);
	const [vals, setVals] = useState(dates);
	const [value, setValue] = useState("");
	const [loader, setLoader] = useState(false);
	const [active, setActive] = useState(null);
	const [show, setShow] = useState(false);
	const [selectedMood, setSelectedMood] = useState("");

	useEffect(() => {
		const countDaysWithMessages = () => {
			return setProgress(vals.filter((item) => item.message.length > 0).length);
		};
		countDaysWithMessages();
	}, [vals]);

	const handleMoodSelect = (mood) => {
		const updatedVals = vals.map((date) => {
			if (date.id === active) {
				return { ...date, mood };
			}
			return date;
		});
		setVals(updatedVals);
		setSelectedMood(mood);
	};

	const handleSaveMessage = () => {
		if (active === null) return;
		setLoader(true);
		setTimeout(() => {
			setActive(null);
			setShow(false);
			setValue("");
			setSelectedMood("");
			setLoader(false);
		}, 200);
	};

	const getTodayId = () => {
		const today = new Date();
		return today.getDate();
	};

	const [reading, setReading] = useState(false);

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
					<h2 className="text-3xl font-serif">
						September 2024, {reading ? "List" : "Calender"}
					</h2>
					{progress > 0 && (
						<button
							className="hover:underline rounded-full p-4 hover:bg-gray-50"
							onClick={() => {
								setReading(!reading);
								gsap.fromTo(".calender-ref", { scale: 0.9 }, { scale: 1 });
							}}
						>
							{reading ? <Pencil size={20} /> : <Glasses size={20} />}
						</button>
					)}
				</div>
				<div>
					{!reading ? (
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
									return (
										<div
											key={date.id}
											onClick={(e) => {
												e.stopPropagation();
												setActive(date.id);
												setShow(true);
												setValue(
													vals.find((item) => item.id === active)?.message || ""
												);
											}}
											className={`relative flex items-center justify-center flex-col h-20 w-20 rounded-md hover:border-gray-200 transition-all duration-100 ease-in text-gray-800 font-semibold cursor-pointer ${
												Number(date.message.length) > 0
													? "bg-green-200 hover:bg-green-300"
													: getTodayId() > date.id
													? "bg-red-50 bg-opacity-80 hover:bg-red-50 hover:bg-opacity-60"
													: "bg-gray-100 bg-opacity-80 hover:bg-gray-100 hover:bg-opacity-60"
											}`}
										>
											{date.id}
											<div className="absolute top-1 right-1">
												{date.message.length > 0 && (
													<p className="text-xl">{date?.mood}</p>
												)}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					) : (
						<div className="reading-container h-1/2">
							{progress > 0 ? (
								vals.map((item) => {
									if (item.message.length > 0) {
										return (
											<div
												key={item.id}
												className="py-10 text-black w-full border-l-2 border-dashed border-gray-200 hover:bg-gray-50 hover:bg-opacity-50"
											>
												<p className="font-mono">
													<span className="text-gray-500">--</span> {item.id}{" "}
													September, 2024
												</p>
												<div className="my-2 px-10">
													<p className="font-serif">{item.mood}</p>
													<p className="text-xl">{item.message}</p>
												</div>
											</div>
										);
									} else {
										return null;
									}
								})
							) : (
								<p>Nothing added</p>
							)}
						</div>
					)}
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
					{selectedMood && (
						<p className="font-mono my-1">
							Your mood{" "}
							<span className="font-semibold">
								{selectedMood},{" "}
								{Object.keys(moodMap).filter(
									(item) => moodMap[item] === selectedMood
								)}
							</span>
						</p>
					)}
					<div className="flex space-x-2 my-4 max-w-md flex-wrap justify-start">
						{moods.map((mood, index) => {
							const activeMood = vals.filter((item) => active === item.id)[0]
								.mood;
							return (
								<div
									key={index}
									onClick={() => handleMoodSelect(mood.emoji)}
									className={`cursor-pointer text-2xl px-3 py-2 hover:px-4 transition-all duration-150 ease-in hover:bg-gray-100 hover:text-white rounded-2xl ${
										activeMood === mood.label
											? "border border-gray-200 bg-gray-100"
											: "bg-none"
									}`}
								>
									{mood.emoji}
								</div>
							);
						})}
					</div>
					<textarea
						placeholder="How you are feeling today"
						className={`bg-gray-100 border border-gray-700 my-2 text-gray-900 focus:border p-4 rounded-xl focus:border-gray-800 w-full outline-none `}
						name="message-input"
						rows={4}
						value={vals.filter((item) => item.id === active)[0]?.message}
						onChange={(e) => {
							const newVal = e.target.value;
							setValue(newVal);
							const updatedVals = vals.map((date) => {
								if (date.id === active) {
									return { ...date, message: newVal };
								}
								return date;
							});
							setVals(updatedVals);
						}}
					/>

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
