import { makeStyles } from "@material-ui/core";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import colors from "tailwindcss/colors";

const loaders = [
	"namaste",
	"hello",
	"bonjour",
	"I am John",
	"a software developer",
	"with 5 ",
	"years of experience.",
	"I develop",
	"website and",
	"mobile apps",
];

const TripLoader = () => {
	const [active, setActive] = useState(0);
	const colorKeys = Object.keys(colors);
	const phoneRef = useRef();
	const tl = gsap.timeline();

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (active === loaders.length - 1) {
				tl.to(phoneRef.current, {
					scale: 1.5,
				}).to(phoneRef.current, { opacity: 1, stagger: 0.5 });
				setActive(0);
			} else {
				tl.to(".loader-bg", {
					height: (active + 2) * 10 + "%",
					borderBottomLeftRadius: (active + 1) * 4,
					borderBottomRightRadius: (active + 1) * 4,
					textAlign: "center",
				});
				setActive((prev) => prev + 1);
			}
		}, 600);

		return () => {
			clearInterval(intervalId);
		};
	}, [active]);

	useEffect(() => {
		const tl = gsap.timeline();

		tl.to(phoneRef.current, {
			skewX: active + "px",
			scale: 1 + active / 20,
			rotateX: active * 4 + "deg",
			transformOrigin: "50% 50%",
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
			<div className={styles.phoneMockup} ref={phoneRef}>
				<div
					className="loader-bg"
					style={{
						position: "relative",
						borderTopLeftRadius: 40,
						borderTopRightRadius: 40,
						height: "100%",
						zIndex: 100,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: colors[colorKeys[active]][600],
					}}
				>
					<p className="text-4xl font-sans animated-text z-30">
						{loaders[active]}
					</p>
				</div>
			</div>
		</div>
	);
};
export default TripLoader;

const useStyles = makeStyles((theme) => ({
	root: {
		"&::before": {},
	},
	phoneMockup: {
		outline: `2px dashed ${colors.gray[500]}`,
		outlineOffset: 4,
		width: "20%",
		height: "70vh",
		borderRadius: 40,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		boxShadow: "0px 0px 40px rgb(250, 250, 250, 0.5)",
		[theme.breakpoints.down("sm")]: {
			width: "80%",
			height: "80%",
		},
	},
}));
