import React, { useEffect, useRef, useState } from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import gsap from "gsap";
import colors from "tailwindcss/colors";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GridLines from "react-gridlines";

gsap.registerPlugin(ScrollTrigger);

const workExperience = [
	{
		name: "Lead Software Engineer",
		companyName: "Tech Innovators Inc.",
		date: "March 2022 - Present",
		content:
			"Leading a team of 10 engineers in the development of a cloud-based SaaS platform. Spearheaded the migration to microservices architecture, improving scalability by 60%. Implemented CI/CD pipelines reducing deployment time by 40%.",
	},
	{
		name: "Full Stack Developer",
		companyName: "Bright Future Technologies",
		date: "July 2020 - February 2022",
		content:
			"Designed and developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Enhanced site performance by optimizing API responses, leading to a 30% increase in page load speed. Integrated payment gateways and implemented secure authentication mechanisms.",
	},
	{
		name: "Senior Frontend Engineer",
		companyName: "NextGen Solutions",
		date: "January 2018 - June 2020",
		content:
			"Led the redesign of the company’s main product, resulting in a 50% increase in user engagement. Built a comprehensive UI component library in React, used across multiple projects. Mentored junior developers and conducted code reviews to ensure best practices.",
	},
	{
		name: "Backend Developer",
		companyName: "DataWave Systems",
		date: "May 2016 - December 2017",
		content:
			"Developed and maintained RESTful APIs for a data analytics platform. Implemented robust database schemas using PostgreSQL and optimized query performance by 40%. Integrated third-party services for real-time data processing and analytics.",
	},
	{
		name: "Junior Software Developer",
		companyName: "Innovative Apps Ltd.",
		date: "July 2014 - April 2016",
		content:
			"Contributed to the development of mobile and web applications. Built reusable components and modules for various projects. Collaborated with cross-functional teams to deliver high-quality products within tight deadlines.",
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
		return -1;
	}
};

const WorkExperience = () => {
	const waveRef = useRef();

	const isMobile = useMediaQuery("max-width: 600px");
	const [percent, setPercent] = useState(5);

	useEffect(() => {
		const sections = gsap.utils.toArray(".list-container .section");
		const tl = gsap.timeline({});
		if (!isMobile) {
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
		}

		sections.forEach((section, index) => {
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
	}, []);

	const styles = useStyles();

	const activeNum = getActiveIndex(percent * 100);

	return (
		<div className="work-experience-container mx-auto overflow-x-hidden relative w-full h-full bg-black bg-opacity-95">
			<GridLines
				lineColor={colors.gray[400]}
				className="h-full absolute w-full transform rotate-5 opacity-5 z-100"
			/>
			<div className="list-container">
				<div
					className={`${styles.listContainer} mx-auto flex justify-around items-center md:flex-row sm:flex-col lg:flex-row xs:flex-col xxs:flex-col`}
				>
					{workExperience.map((item, index) => {
						return (
							<section key={item.date} className={`${styles.section} section `}>
								<div className={`${styles.card} card-${index}`}>
									<p
										className={`text-2xl sm:text-md font-serif font-semibold `}
									>
										{item.name}
									</p>
									<p className="text font-thin">{item.date}</p>
									<ol className="list-disc ml-10 my-4 text-sm sm:text-xs">
										{item.content.split(".").map((content, index) => {
											return content ? <li key={index}>{content}</li> : null;
										})}
									</ol>
									<br />
									<div className="">
										<p className="text-xl sm:text-md uppercase font-mono font-bold">
											{item.companyName}
										</p>
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
		color: colors.gray[400],
		background: `rgb(0, 0, 0, 0.4)`,
		transform: "rotateZ(-4deg) translateY(3px)",
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
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(1),
			height: "50vh !important",
			overflowY: "scroll",
			width: "100%",
		},
	},
	wave: {
		border: `1px dotted ${colors.pink[300]}`,
		height: "1px",
	},
}));
