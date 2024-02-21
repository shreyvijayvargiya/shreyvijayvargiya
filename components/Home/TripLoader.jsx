import { makeStyles } from "@material-ui/core";
import gsap from "gsap";
import React, { useEffect, useState, useRef } from "react";
import colors from "tailwindcss/colors";
import { Typewriter } from "react-simple-typewriter";
import BackgroundDots from "../Projects/BackgroundDots";
import AnimatedText from "../Projects/AnimatedText";

const loaders = [
	"namaste",
	"hello",
	"bonjour",
	"I am shrey",
	"a software developer",
	"with 4 ",
	"years of experience.",
	"I develop",
	"website and",
	"mobile apps",
];
const TripLoader = ({ setLoading }) => {
	const [active, setActive] = useState(0);
	const colorKeys = Object.keys(colors);
	const phoneRef = useRef();
	const welcomeScreenRef = useRef();
	const animatedTextCompRef = useRef();

	const tl = gsap.timeline();

	const endCall = () => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	};

	const interval = () => {
		return setInterval(() => {
			if (active === loaders?.length - 1) {
				tl.to(phoneRef.current, {
					scale: 0.5,
				})
					.to(phoneRef.current, { opacity: 0, stagger: 0.5 })
					.to(welcomeScreenRef.current, { opacity: 1 })
					.to(welcomeScreenRef.current, { opacity: 0, delay: 0.5 })
					.fromTo(
						animatedTextCompRef.current,
						{ opacity: 0, width: "0%" },
						{
							opacity: 1,
							width: "100%",
							duration: 1,
						}
					)
					.to(".animated-container", { opacity: 0, delay: 0.5 });
				endCall();
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
	};

	useEffect(() => {
		gsap.to(".bg-dots-container", {
			rotate: 360,
			scale: 0.4,
			duration: 6,
			ease: "power2.in",
		});
	}, []);

	useEffect(() => {
		const tl = gsap.timeline();
		const id = interval();

		tl.to(phoneRef.current, {
			skewX: active + "px",
			scale: 1 + active / 40,
			rotateX: active * 2 + "deg",
			transformOrigin: "50% 50%",
		});

		return () => {
			clearInterval(id);
		};
	}, [active]);

	const styles = useStyles();
	return (
		<div
			className="animated-container place-content-center flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0"
			style={{
				color: colors[colorKeys[active + 1]],
				backgroundColor: "rgb(0, 0, 0)",
				zIndex: 2000,
			}}
		>
			<div className="opacity-20 bg-dots-container w-full h-full z-0 fixed top-0 left-0 botto-0 right-0 border-t border-b border-dashed border-gray-700">
				<BackgroundDots />
			</div>
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
						background: `linear-gradient(90deg, ${
							colors[colorKeys[active]][600]
						}, ${colors[colorKeys[active + 1]][600]})`,
					}}
				>
					<p className="absolute top-1/2 left-0 right-0 w-full h-full text-center text-4xl font-sans animated-text z-30">
						{loaders[active]}
					</p>
				</div>
			</div>
			<button
				className="button-skip mx-auto text-gray-400 absolute bottom-10 right-10 font-bold font-sans p-4 text-center bg-indigo-800 rounded-xl shadow-2xl hover:text-white"
				onClick={endCall}
			>
				Skip
			</button>
			<div className="w-full opacity-0" ref={welcomeScreenRef}>
				<div className="text-gray-400 font-cool text-8xl text-center">
					<Typewriter loop={2} typeSpeed={10} cursor="|" words={["Welcome"]} />
				</div>
			</div>
			<div
				className="w-full h-full absolute top-1/3 bottom-0 left-0 right-0 opacity-0"
				ref={animatedTextCompRef}
			>
				<AnimatedText stopAnimation={true} initalText={"this is shrey"} />
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
		width: "15%",
		height: "60vh",
		borderRadius: 40,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		margin: "auto",
		boxShadow: "0px 0px 40px rgb(250, 250, 250, 0.5)",
		[theme.breakpoints.down("sm")]: {
			width: "70%",
			height: "70%",
		},
	},
}));
