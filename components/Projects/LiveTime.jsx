import React, { useState, useEffect } from "react";

const LiveTime = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const formatTime = (time) => {
		const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
		return time.toLocaleTimeString("en-GB", options);
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-gray-50">
			<p className="text-indigo-500 hover:text-indigo-600 text-7xl font-mono hover:underline transition-all duration-150">
				{formatTime(currentTime)}
			</p>
		</div>
	);
};

export default LiveTime;
