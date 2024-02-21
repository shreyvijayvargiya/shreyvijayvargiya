import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TripLoader from "components/Home/TripLoader";
import Description from "./Description";
import colors from "tailwindcss/colors";
import PlayIcon from "modules/Icons/PlayIcon";
import GridLines from "react-gridlines";
import gsap from "gsap";
import TextName from "./TextName";

const HomeComponent = () => {
	const styles = useStyles();
	const containerRef = useRef();

	const [loading, setLoading] = useState(true);
	const animatedCompRef = useRef();
	const descCompRef = useRef();

	useEffect(() => {
		startAnimation();
	}, []);

	const startAnimation = () => {
		const tl = gsap.timeline();

		tl.fromTo(
			animatedCompRef.current,
			{ opacity: 0, scale: 0 },
			{ opacity: 1, scale: 1 }
		)
			.fromTo(
				animatedCompRef.current,
				{ y: "50%" },
				{ y: "0%", duration: 1, ease: "power4.out" }
			)
			.fromTo(
				descCompRef.current,
				{ y: "20%", opacity: 0 },
				{ y: "0%", opacity: 1, ease: "power4.out" }
			)
			.to(".bg-gridline-home", {
				rotate: 360,
				duration: 10,
				ease: "back.inOut",
				yoyo: true,
			});
		return () => {
			tl.kill();
		};
	};

	return (
		<div
			className={`w-full relative overflow-x-hidden bg-black h-screen ${styles.container}`}
			style={{ scrollBehavior: "smooth" }}
			ref={containerRef}
		>
			{loading ? (
				<TripLoader setLoading={setLoading} />
			) : (
				<div className="relative w-full h-screen">
					<GridLines
						lineColor={colors.gray[700]}
						className="h-screen fixed w-full transform rotate-5 opacity-5 z-100 bg-grid-line-home"
					/>
					<div
						className="md:fixed md:bottom-10 md:opacity-100 sm:opacity-0 xs:opacity-0 xxs:opacity-0 md:right-10 z-100"
						onClick={() => setLoading(true)}
						style={{ zIndex: 1000 }}
					>
						<PlayIcon />
					</div>
					<br />
					<br />
					<br />
					<div className="w-full " ref={animatedCompRef}>
						<TextName />
					</div>
					<div ref={descCompRef} className="w-full">
						<Description />
					</div>
				</div>
			)}
		</div>
	);
};
export default HomeComponent;

const useStyles = makeStyles((theme) => ({
	container: {},
}));
