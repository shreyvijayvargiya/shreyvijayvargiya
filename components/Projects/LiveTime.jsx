import React, { useState, useEffect } from "react";

const LiveTime = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = () =>
			setInterval(() => {
				setCurrentTime(new Date());
			}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const formatTime = (time) => {
		const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
		return time.toLocaleTimeString("en-GB", options);
	};

	return (
		<div
			className={`bg-black flex justify-center items-center w-full h-screen gap-1 text-8xl font-cool text-gray-400`}
		>
			<p className="text-1">{formatTime(currentTime).split(":")[0]}</p>
			<p className="text-2">:</p>
			<p className="text-3">{formatTime(currentTime).split(":")[1]}</p>
			<p className="text-4">:</p>
			<p className="text-5">{formatTime(currentTime).split(":")[2]}</p>
		</div>
	);
};

export default LiveTime;
