import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import colors from "tailwindcss/colors";
import gsap from "gsap";
import { makeStyles } from "@material-ui/core/styles";
import router from "next/router";

const StickyNavbar = () => {
	const [show, setShow] = useState(true);
	const ref = useRef(null);
	const bar = useRef(null);
	const styles = useStyles({ show });
	const tl = gsap.timeline();

	const toggleNavbar = () => {
		if (show) {
			tl.to(ref.current, { opacity: 0, yPercent: "100%" })
				.to(bar.current, {
					opacity: 1,
					rotation: 360,
					y: "0%",
					visibility: "visible",
				})
				.to(".button-link", { visibility: "hidden" });
		} else {
			tl.to(bar.current, {
				rotation: 0,
				opacity: 0,
				y: "-100%",
				visibility: "hidden",
			})
				.to(ref.current, {
					opacity: 1,
					y: "0%",
				})
				.to(".button-link", { visibility: "visible" });
		}
		setShow(!show);
	};

	useEffect(() => {
		tl.to(ref.current, {
			opacity: show ? 1 : 0,
			visibility: show ? "visible" : "hidden",
		}).to(bar.current, {
			opacity: show ? 0 : 1,
			visibility: show ? "hidden" : "visible",
		});
	}, []);

	const bounceTheBar = () => {
		const tl = gsap.timeline();
		tl.fromTo(
			bar.current,
			{ rotation: "180deg", y: "-20%" },
			{ rotation: "0deg", duration: 1, y: "0%", visibility: "visible" }
		);
	};

	return (
		<div
			className={`fixed top-4 left-0 right-0 rounded-md px-4 ${styles.root}`}
		>
			<div className={styles.navbar} ref={ref}>
				<button
					className={`button-link hover:text-white hover:translate-y-10 text-yellow-600 hover:bg-blackShade text-9px px-2 p-1 rounded-md ${styles.button}`}
					onClick={() => router.push("/")}
				>
					home
				</button>
				<button
					className={`button-link hover:text-gray-200 text-indigo-600 hover:bg-blackShade text-10px px-2 p-1 rounded-full ${styles.button}`}
					onClick={() => router.push("/work-experience")}
				>
					work experience
				</button>
				<button
					className={`button-link hover:text-gray-200 text-orange-600 hover:bg-blackShade text-10px px-2  p-1 rounded-full ${styles.button}`}
					onClick={() => router.push("/projects")}
				>
					playground
				</button>
				<button
					className={`button-link hover:text-gray-200 text-pink-600 hover:bg-blackShade text-10px px-2  z-100 p-1 rounded-full ${styles.button}`}
					onClick={() => router.push("/tech-stack")}
				>
					stacks
				</button>
				<a
					className={`button-link hover:text-gray-200 text-green-600 hover:bg-blackShade text-10px px-2  z-100 p-1 rounded-full ${styles.button}`}
					href="
					https://mailto@shreyvijayvagriya26@gmail.com"
					target="_blank"
				>
					say hi
				</a>{" "}
				<div
					className={`border border-gray-500 hover:text-gray-400 text-gray-600 rounded-full hover:border-gray-400 cursor-pointer lg:block md:block sm:hidden xs:hidden xxs:hidden xsm:hidden`}
				>
					<IoClose size={20} onClick={toggleNavbar} />
				</div>
			</div>
			<div
				className={`rounded-full flex justify-center items-center bg-none fixed left-0 right-0 top-2 ${styles.barContainer} cursor-pointer`}
				ref={bar}
			>
				<div
					className="border border-gray-700 rounded-full p-2 hover:border-gray-600"
					onMouseEnter={bounceTheBar}
				>
					<FaBars
						onClick={toggleNavbar}
						size={20}
						color={colors.gray[600]}
						className={styles.barIcon}
					/>
				</div>
			</div>
		</div>
	);
};
export default StickyNavbar;

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 1000,
	},
	navbar: {
		zIndex: 1000,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: theme.spacing(1),
		borderRadius: 8,
		boxShadow: "0px 0px 30px rgb(255, 255, 255, 0.2)",
		[theme.breakpoints.up("lg")]: {
			width: "25% !important",
			margin: "auto",
		},
		[theme.breakpoints.down("md")]: {
			width: (props) => (props.show ? "100%" : "auto"),
			position: "fixed",
			top: 0,
			left: 0,
			right: 0,
			borderRadius: 0,
			backgroundColor: "rgb(0, 0, 0, 0.2)",
			overflowX: "scroll",
			"&.button": {
				fontSize: "0.5rem",
			},
		},
	},
	button: {
		fontSize: "0.8rem",
	},
	barIcon: {
		"&:hover": {
			borderColor: colors.gray[400],
		},
	},
	barContainer: {
		zIndex: 1000,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));
