import React from "react";
import { Timeline, Text } from "@mantine/core";
import { Calendar } from "lucide-react";

const workExperience = [
	{
		name: "Mobile App Developer",
		companyName: "ChainGPT",
		date: "May, 23 - August, 24",
		website: "https://www.chaingpt.org",
		content:
			"Developed web3 non-custodial wallet app for CGPT(chainGPT) crypto users",
	},
	{
		name: "Freelancer",
		companyName: "iHateReading",
		website: "https://www.ihatereading.in",
		date: "September 2022, April, 23",
		content:
			"Developing and Running Full Stack website iHateReading along with Writing Blogs and Making online content",
	},
	{
		name: "Senior Frontend Developer",
		companyName: "Koo",
		website: "https://www.kooapp.com",
		date: "August 2021 - September 2022",
		content:
			"Lead frontend team of 6 members. My job is to develop and manage Koo website along with dashboard or admin panel for non-technical team to manage koos users.",
	},
	{
		name: "Mobile App Developer",
		companyName: "CoinSwitch",
		website: "https://www.coinswitch.co",
		date: "March 20 - Jan 21",
		content:
			"Developed cryptocurrency trading application for millions of users. Successfully improved app(APK) bundle size by 40%. Increased Application runtime speed by 25%. Integration of GraphQL to enhance performance by 50%. Implementation of Graphs, Flatlists, Animations Firebase and Amplitude software tools.",
	},
	{
		name: "Frontend Developer",
		companyName: "Cogoport",
		website: "https://www.cogoport.com",
		date: "April 19- Feb 20",
		content:
			"Developed React UI library of 72 components (https://nautical.cogoport.com). Developed the packages like React reusable hooks, React realtime editable Spreadsheet, CMS & UI Library. Worked on Babel, Webpack, Next JS, Redux, Gatsby.",
	},
];

const TimelineWorkExperience = () => {
	return (
		<div className="flex justify-center items-center my-2">
			<Timeline active={workExperience.length - 1} lineWidth={4} color="dark">
				{workExperience.map((work, index) => (
					<Timeline.Item key={index} title={work.name} className="mb-1">
						<div className="mb-2 flex items-center text-gray-600">
							<Calendar size={16} className="mr-2" />
							<Text size="sm">{work.date}</Text>
						</div>
						<Text
							size="md"
							className="font-semibold hover:text-indigo-800 hover:underline"
						>
							<a href={work.website} target="_blank">
								{work.companyName}
							</a>
						</Text>
						<Text size="sm" className="mt-2 text-gray-700">
							{work.content}
						</Text>
					</Timeline.Item>
				))}
			</Timeline>
		</div>
	);
};

export default TimelineWorkExperience;
