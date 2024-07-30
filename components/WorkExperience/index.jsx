import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import gsap from "gsap";
import colors from "tailwindcss/colors";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GridLines from "react-gridlines";

gsap.registerPlugin(ScrollTrigger);

const workExperience = [
	{
		name: "Mobile app developer",
		companyName: "ChainGPT",
		date: "May, 23 - Present",
		content:
			"Developed web3 non-custodial wallet app for CGPT(chainGPT) crypto users",
		link: "https://www.chaingpt.org/",
	},
	{
		name: "Freelancer",
		companyName: "Witness Affairs",
		date: "September 2022, April, 23",
		content:
			"Developing and Running Full Stack website iHateReading along with Writing Blogs and Making online content",
		link: "https://www.ihatereading.in/",
	},
	{
		name: "Senior Frontend Developer",
		companyName: "Koo",
		date: "August 2021 - September 2022",
		content:
			"Lead frontend team of 6 members. My job is to develop and manage Koo website along with dashboard or admin panel for non-technical team to manage koos users.",
		link: "https://www.kooapp.com/",
	},
	{
		name: "Mobile App Developer",
		companyName: "CoinSwitch",
		date: "March 20 - jan 21",
		content:
			"Developed cryptocurrency trading application for millions of users. Successfully improved app(APK) bundle size by 40%. Increased Application runtime speed by 25%. Integration of GraphQL to enhance performance by 50%. Implementation of Graphs, Flatlists, Animations Firebase and Amplitude software tools.",
		link: "https://www.coinswitch.in/",
	},
	{
		name: "Frontend Developer",
		companyName: "Cogoport",
		date: "April 19- Feb 20",
		content: `Developed React UI library of 72 components (https:// nautical.cogoport.com). Developed the packages like React reusable hooks,React realtime editable Spreadsheet, CMS(Content management system) & UI Library. Worked on Babel, Webpack, Next JS, Redux, Gatsby`,
		link: "https://www.cogoport.com/",
	},
];

const intervals = [
	{ start: 0, end: 2, index: 0 },
	{ start: 2, end: 4, index: 1 },
	{ start: 4, end: 6, index: 2 },
	{ start: 6, end: 8, index: 3 },
	{ start: 8, end: 10, index: 4 },
];

const getActiveIndex = (progress) => {
	for (const interval of intervals) {
		if (progress >= interval.start && progress <= interval.end) {
			return interval.index;
		}
	}
	return -1;
};

const WorkExperience = () => {
	const waveRef = useRef();

	const [percent, setPercent] = useState(5);

	const tl = gsap.timeline();
	useEffect(() => {
		const sections = gsap.utils.toArray(".list-container .section");

		tl.to(sections, {
			xPercent: -100 * (sections.length - 2),
			ease: "none",
			yoyo: true,
			scrollTrigger: {
				trigger: ".work-experience-container",
				start: "top top",
				end: () => `${(sections.length - 1) * 100}vh`,
				scrub: 1,
				pin: true,
				onUpdate: (self) => {
					const progress = self.progress;
					setPercent(progress);
				},
			},
		});

		sections?.forEach((section, index) => {
			gsap.fromTo(
				section,
				{
					xPercent: index * 10 + 100,
					yPercent: 50,
					scale: 0,
				},
				{
					yPercent: index,
					xPercent: 0,
					scale: 1,
				}
			);
		});

		return () => {
			tl.kill();
		};
	}, []);

	const styles = useStyles();

	const activeNum = getActiveIndex(percent * 100);

	return (
		<div className="work-experience-container mx-auto overflow-x-hidden relative w-full h-auto bg-black">
			<GridLines
				lineColor={colors.gray[400]}
				className="h-full absolute w-full transform rotate-5 opacity-5 z-100"
			/>
			<div className="list-container">
				<div
					className={`${styles.listContainer} mx-auto flex justify-around items-center md:flex-row sm:flex-row lg:flex-row xs:flex-row xxs:flex-row`}
				>
					{workExperience.map((item, index) => {
						return (
							<section key={item.date} className={`${styles.section} section `}>
								<div className={`${styles.card} card-${index}`}>
									<p
										className={`text-2xl sm:text-md font-serif font-semibold text-indigo-500 uppercase`}
									>
										{item.name}
									</p>
									<p className="text text-gray-300">{item.date}</p>
									<ol className="list-disc ml-10 my-4 text-sm sm:text-xs">
										{item.content.split(".").map((content, index) => {
											return content ? <li key={index}>{content}</li> : null;
										})}
									</ol>
									<br />
									<div>
										<a
											className="text-xl text-blue-200 hover:text-blue-300 sm:text-md uppercase font-mono font-bold underline"
											href={item.link}
											target="_blank"
										>
											{item.companyName}
										</a>
									</div>
								</div>
							</section>
						);
					})}
				</div>
			</div>
			<div className={`fixed bottom-10 left-0 right-0 w-full`}>
				<p className="text-orange-300 font-serif m-2">
					{activeNum} {percent * 100}
				</p>
				<div
					className={styles.wave}
					style={{
						width: percent * 100 + "%",
					}}
					ref={waveRef}
				/>
			</div>
		</div>
	);
};
export default WorkExperience;

const useStyles = makeStyles((theme) => ({
	listContainer: {
		width: "200%",
		height: "100vh",
		overflowY: "hidden",
		[theme.breakpoints.down("md")]: {
			width: "500%",
		},
	},
	section: {
		width: "80%",
		display: "flex",
		justifyContent: "center",
		alignContent: "center",
		flexDirection: "column",
		padding: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			padding: theme.spacing(1),
			width: "100%",
		},
	},
	card: {
		width: "75%",
		height: "100%",
		padding: theme.spacing(5),
		margin: "auto",
		position: "relative",
		cursor: "pointer",
		transformStyle: "preserve-3d",
		color: colors.gray[200],
		background: `rgb(0, 0, 0, 0.4)`,
		boxShadow: "0px 0px 40px rgb(255, 255, 255, 0.3)",
		borderRadius: 20,
		"&:hover": {
			background: `rgb(0, 0, 0, 0.4)`,
			boxShadow: "0px 0px 80px rgb(255, 255, 255, 0.5)",
			color: colors.pink[300],
			scale: 0.9,
			transform: "rotateZ(0deg) translateY(0px)",
		},
		transition: "all 0.5s ease",
		[theme.breakpoints.up("md")]: {
			transform: "rotateZ(-4deg) translateY(3px)",
		},
		[theme.breakpoints.down("md")]: {
			width: "120%",
			padding: theme.spacing(2),
			background: `rgb(0, 0, 0, 0.9)`,
			boxShadow: "none",
			height: "80vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "flex-start",
			flexDirection: "column",
			border: `1px dashed ${colors.gray[800]}`,
			borderRadius: 20,
			overflowY: "scroll",
			width: "100%",
		},
	},
	wave: {
		border: `1px dotted ${colors.pink[300]}`,
		height: "1px",
	},
}));
