import gsap from "gsap";
import React, { useEffect, useState } from "react";
import colors from "tailwindcss/colors";

const Gallery = () => {
	const [activeItem, setActiveItem] = useState(null);
	useEffect(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			randomTitlesData.map((item) => `.blog-${item.id}`),
			{
				opacity: 0,
				y: "+=400px",
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.2,
				duration: 2,
				onComplete: () => {
					gsap.fromTo(
						".container",
						{
							backgroundColor: colors.gray[100],
							scale: 1,
						},
						{
							backgroundColor: colors.white,
							scale: 0.98,
							duration: 2,
						}
					);
				},
			}
		).fromTo(
			".latest-blog-heading",
			{
				opacity: 0,
				x: -100,
			},
			{
				opacity: 1,
				x: 0,
				duration: 2,
			},
			"-=0.1"
		);
	}, [randomTitlesData]);

	return (
		<div className="flex h-screen w-full flex-col justify-center items-center">
			<div className="w-full relative h-5/6 container">
				<p className="text-2xl px-20 mb-2 latest-blog-heading">Latest blogs</p>
				<div className="blog-container">
					{randomTitlesData.map((item) => {
						return (
							<button
								key={item.id}
								className={`w-full hover:px-24 hover:py-4 text-left py-3 px-20 hover:bg-gray-100 blog-${item.id} transition-all duration-200 ease-linear`}
								onMouseOver={() => {
									setActiveItem(item);
								}}
								onClick={() => {
									window.open(item.link, "_blank");
								}}
								onMouseLeave={() => {
									setActiveItem(null);
								}}
							>
								{item.id}. {item.title}
							</button>
						);
					})}
					<div
						className={`px-5 overflow-y-scroll bg-white border border-gray-400 rounded-2xl shadow-2xl ${
							activeItem !== null ? "h-5/6 w-1/6 visible " : " h-0 w-0 hidden"
						}`}
						style={{
							position: "fixed",
							width: activeItem !== null ? "50%" : "0%",
							height: activeItem !== null ? "80%" : "0%",
							top: "50%",
							transform: "translate(100%, -50%)",
							transition: "all 0.5s ease",
						}}
					>
						<div className="p-10 text-left ">
							<p className="text-gray-800">{activeItem?.id}</p>
							<p className="text-gray-800 text-4xl font-cool">
								{activeItem?.title}
							</p>
							<p className="text-gray-800 text-lg">{activeItem?.description}</p>
							<iframe src={activeItem?.link} width="100%" height={"500px"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
const randomTitlesData = [
	{
		id: 1,
		title: "New cool tailwind css properties",
		description:
			"I love how they are evolving by taking care of accessibility as well",
		link: "https://www.ihatereading.in/t/s8cN01QKnsSxjLbYZkLh/New-cool-tailwind-css-properties",
	},
	{
		id: 2,
		title: "3 steps to add react-query",
		description: "where to learn, what to learn and How to learn",
		link: "https://www.ihatereading.in/t/agXy7uyw0DRXOTqQonY8/3-steps-to-add-react-query-",
	},
	{
		id: 3,
		title: "Understanding Prompt Engineering from Basics to Advance",
		description: "Where to learn, what to learn and How to learn",
		link: "https://www.ihatereading.in/t/wJGdhPFfqjlKJzZseoH5/Understanding-Prompt-Engineering-from-Basics-to-Advance",
	},
	{
		id: 4,
		title: "SAAS boilerplates ERA of $$$",
		description:
			"In the world of AI, creating boilerplates is the next immediate task in the queue of business for developers",
		link: "https://www.ihatereading.in/t/aqPyT4xtC7ndWJyCMK2D/SAAS-boilerplates-ERA-of-$$$",
	},
	{
		id: 5,
		title: "Ultimate CSS Cheat Sheets and Blogs resources",
		description:
			"Collection of CSS cheatsheet, prepare for CSS interviews, tips and tricks!!",
		link: "https://ihatereading.in/t/pbxWKs91AhIk2R9zEOpm/ultimate-css-cheat-sheets-and-blogs-resources",
	},
	{
		id: 6,
		title: "3 cool open-source UI Frontend Components Libraries",
		description:
			"Find trending open-source ready components for your website as well as what to learn about the new opportunities open for developers",
		link: "https://www.ihatereading.in/t/vA6exonuLgRrTNnmUjo4/3-cool-open-source-UI-Frontend-Components-Libraries",
	},
	{
		id: 7,
		title: "Top Github repositories for 10+ programming languages",
		description: "Github repositories to learn programming languages",
		link: "https://www.ihatereading.in/t/QXzimu0xelFDYz3144Mu/Top-Github-repositories-for-10+-programming-languages",
	},
	{
		id: 8,
		title: "Databases of Databases with 45 databases collection",
		description: "List of 45 databases in the world",
		link: "https://www.ihatereading.in/t/YtMIfHiltY35fBIuEl0U/Databases-of-Databases-with-45-databases-collection",
	},
	{
		id: 9,
		title: "Craft and Send 50, 000 Emails at $20/month",
		description:
			"This tool helps you to create emails, manage audience, and handle domains and bounces at $25/month and send to 50,000 users",
		link: "https://ihatereading.in/t/vPxlDfZ5RLQAHYw60l5j/craft-and-send-50-000-emails-at-20-month",
	},
	{
		id: 10,
		title: "500+ ways to reload javascript in frontend",
		description:
			"Window object provides 500+ ways to load the javascript in frontend",
		link: "https://www.ihatereading.in/t/v0SwBWrsyxiOVck3hF75/500+-ways-to-reload-javascript-in-frontend",
	},
];
