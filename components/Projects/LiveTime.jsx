import React, { useState, useEffect } from "react";
import BackgroundDots from "./BackgroundDots";
import { makeStyles } from "@material-ui/core";
import gsap from "gsap";

const LiveTime = ({ size }) => {
	const [currentTime, setCurrentTime] = useState(new Date());

	const calculateTime = () => {
		return setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);
	};
	useEffect(() => {
		const intervalId = calculateTime();
		return () => {
			clearInterval(intervalId);
		};
	}, [currentTime]);

	useEffect(() => {
		gsap.to(".bg-dots-loader", {
			rotation: 360,
			repeat: -1,
			duration: 10,
			yoyo: true,
		});
	}, []);

	const formatTime = (time) => {
		const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
		return time.toLocaleTimeString("en-GB", options);
	};

	const styles = useStyles({ size });
	return (
		<div
			className={`bg-black flex justify-center items-center w-full h-screen gap-1 font-sans font-semibold text-pink-400 ${styles.time}`}
		>
			<div className="bg-dots-loader fixed top-0 left-0 right-0 bottom-0 opacity-10 z-0">
				<BackgroundDots />
			</div>
			<div className="flex justify-center gap-4 items-center">
				<p className="text-1 z-10">{formatTime(currentTime).split(":")[0]}</p>
				<p className="text-2 z-10">:</p>
				<p className="text-3 z-10">{formatTime(currentTime).split(":")[1]}</p>
				<p className="text-4 z-10">:</p>
				<p className="text-5 z-10">{formatTime(currentTime).split(":")[2]}</p>
			</div>
		</div>
	);
};

export default LiveTime;

const useStyles = makeStyles((theme) => ({
	time: {
		fontSize: (props) => (props.size ? props.size : "20rem"),
		textShadow: "20px 20px 10px rgb(120, 120, 120, 0.1)",
		[theme.breakpoints.down("sm")]: {
			fontSize: "10rem",
		},
	},
}));
