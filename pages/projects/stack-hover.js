import React, { useState, useRef } from "react";
import { Card, Text, Title, createStyles } from "@mantine/core";
import * as LucideIcons from "lucide-react";
import colors from "tailwindcss/colors";

export const iconMap = [
	LucideIcons.Activity,
	LucideIcons.Airplay,
	LucideIcons.AlertCircle,
	LucideIcons.AlertOctagon,
	LucideIcons.AlertTriangle,
	LucideIcons.AlignCenter,
	LucideIcons.AlignJustify,
	LucideIcons.AlignLeft,
	LucideIcons.AlignRight,
	LucideIcons.Anchor,
	LucideIcons.Aperture,
	LucideIcons.Archive,
	LucideIcons.ArrowDownCircle,
	LucideIcons.ArrowDownLeft,
	LucideIcons.ArrowDownRight,
	LucideIcons.ArrowDown,
	LucideIcons.ArrowLeftCircle,
	LucideIcons.ArrowLeft,
	LucideIcons.ArrowRightCircle,
	LucideIcons.ArrowRight,
	LucideIcons.ArrowUpCircle,
	LucideIcons.ArrowUpLeft,
	LucideIcons.ArrowUpRight,
	LucideIcons.ArrowUp,
	LucideIcons.AtSign,
	LucideIcons.Award,
	LucideIcons.BarChart2,
	LucideIcons.BarChart,
	LucideIcons.BatteryCharging,
	LucideIcons.Battery,
	LucideIcons.BellOff,
	LucideIcons.Bell,
	LucideIcons.Bluetooth,
	LucideIcons.Bold,
	LucideIcons.BookOpen,
	LucideIcons.Book,
	LucideIcons.Bookmark,
	LucideIcons.Box,
	LucideIcons.Briefcase,
	LucideIcons.Calendar,
	LucideIcons.CameraOff,
	LucideIcons.Camera,
	LucideIcons.Cast,
	LucideIcons.CheckCircle,
	LucideIcons.CheckSquare,
	LucideIcons.Check,
	LucideIcons.ChevronDown,
	LucideIcons.ChevronLeft,
	LucideIcons.ChevronRight,
	LucideIcons.ChevronUp,
	LucideIcons.Chrome,
	LucideIcons.Circle,
	LucideIcons.Clipboard,
	LucideIcons.Clock,
	LucideIcons.CloudDrizzle,
	LucideIcons.Edit2,
	LucideIcons.Edit3,
	LucideIcons.Edit,
	LucideIcons.ExternalLink,
	LucideIcons.EyeOff,
	LucideIcons.Eye,
	LucideIcons.FastForward,
	LucideIcons.Feather,
	LucideIcons.FileMinus,
	LucideIcons.FilePlus,
	LucideIcons.FileText,
	LucideIcons.File,
];

const iconGenerator = () => {
	let number = Math.floor(Math.random() * iconMap.length);
	return iconMap[number];
};

const useStyles = createStyles((theme, props) => ({
	card: {
		backgroundColor:
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		maxWidth: 400,
		minWidth: 300,
		border: `1px solid ${colors.gray[200]}`,
		padding: theme.spacing.md,
		borderRadius: theme.radius.md,
	},
	button: {
		zIndex: 1,
	},
	title: {
		color: theme.colors.dark[6],
	},
	description: {
		color: theme.colors.gray[7],
		display: props.show ? "none" : "block",
		opacity: props.show ? 0 : 1,
		transition: "opacity 0.5 ease-in-out",
	},
}));

const RandomTitlesComponent = () => {
	const carouselRef = useRef();

	const [show, setShow] = useState(true);
	const { classes } = useStyles({ show });

	return (
		<div className="mx-auto flex flex-col justify-center items-center min-h-screen w-full">
			<div>
				<p className="text-center mx-auto text-3xl font-serif">
					Welcome to infinite blogging stack
				</p>
				<p>Topics to write your next blog</p>
				<p>👇</p>
				<br />
				<button
					onClick={() => setShow(!show)}
					className="px-4 py-2 bg-blue-600 text-white rounded-md"
				>
					Toggle
				</button>
			</div>
			<div className="overflow-hidden w-full">
				<div
					className={`flex justify-center items-center flex-col
            ${
							show ? "space-y-4" : "-space-y-5"
						}  transition-all duration-150 ease-in-out `}
					ref={carouselRef}
				>
					{randomTitlesData.map((item) => {
						const RandomIcon = iconGenerator();
						return (
							<Card key={item.id} className={classes.card}>
								<div className="flex justify-start gap-2 items-center min-w-1/4 max-w-sm">
									<RandomIcon
										color="white"
										className="p-1 bg-gray-900 rounded-md"
									/>
									<Title order={3} className={classes.title}>
										{item.title}
									</Title>
								</div>
								<Text className={classes.description} mb="xs">
									{item.description}
								</Text>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default RandomTitlesComponent;

const randomTitlesData = [
	{
		id: 1,
		title: "Morning Bliss",
		description: "Experience the serenity of dawn with calming melodies.",
	},
	{
		id: 2,
		title: "Tech Trends",
		description: "Stay updated with the latest in technology and innovation.",
	},
	{
		id: 3,
		title: "Culinary Delights",
		description: "Explore recipes that tantalize your taste buds.",
	},
	{
		id: 4,
		title: "Artistic Vision",
		description: "Dive into the world of contemporary art and design.",
	},
	{
		id: 5,
		title: "Fitness Fusion",
		description: "Blend various workouts for optimal health benefits.",
	},
	{
		id: 6,
		title: "Travel Diaries",
		description: "Journey through mesmerizing destinations worldwide.",
	},
];
