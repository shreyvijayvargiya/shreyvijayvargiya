import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { makeStyles } from "@material-ui/core";
import { Home, Search, User, MessageCircle } from "lucide-react";
import colors from "tailwindcss/colors";

const iconLoaders = [
	{ icon: <Home />, label: "Home" },
	{ icon: <Search />, label: "Search" },
	{ icon: <User />, label: "User" },
	{ icon: <MessageCircle />, label: "Message" },
];

const IconLoader = () => {
	const [active, setActive] = useState(0);
	const colorKeys = Object.keys(colors);
	const iconRef = useRef();
	const tl = gsap.timeline();

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (active === iconLoaders.length - 1) {
				tl.to(iconRef.current, {
					scale: 1.5,
					outline: `3px dashed ${colors.gray[500]}`,
					outlineOffset: 4,
				}).to(iconRef.current, { opacity: 1, stagger: 0.5 });
				setActive(0);
			} else {
				tl.to(iconRef.current, {
					scale: 1 + active / 10,
					outline: `4px dashed ${colors.gray[500]}`,
					outlineOffset: 20,
					opacity: 1,
					duration: 1,
				});
				setActive((prev) => prev + 1);
			}
		}, 800);

		return () => {
			clearInterval(intervalId);
		};
	}, [active]);

	useEffect(() => {
		tl.to(iconRef.current, {
			scale: 1 + active / 10,
			transformOrigin: "50% 50%",
			duration: 0.6,
		});
	}, [active]);

	const styles = useStyles();

	return (
		<div
			className="animated-container place-content-center flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0"
			style={{
				color: colors[colorKeys[active + 1]],
				backgroundColor: "rgb(0, 0, 0)",
				zIndex: 100,
			}}
		>
			<div className={styles.iconMockup} ref={iconRef}>
				<div
					className="icon-bg flex justify-center items-center"
					style={{
						position: "relative",
						borderRadius: 10,
						width: "100%",
						height: "100%",
						zIndex: 100,
						backgroundColor: colors[colorKeys[active]][500],
						transformOrigin: "left",
					}}
				>
					<div className="icon-text z-30 text-center">
						<div className="icon mb-2 text-6xl">{iconLoaders[active].icon}</div>
						<p className="text-xl font-sans">{iconLoaders[active].label}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IconLoader;

const useStyles = makeStyles((theme) => ({
	iconMockup: {
		outline: `3px dashed ${colors.gray[500]}`,
		outlineOffset: 4,
		width: "20%",
		height: "20%",
		borderRadius: 10,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		boxShadow: "0px 0px 40px rgb(250, 250, 250, 0.5)",
		[theme.breakpoints.down("sm")]: {
			width: "40%",
			height: "40%",
		},
	},
}));
