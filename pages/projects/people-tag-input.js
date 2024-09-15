import React, { useState, useEffect, useRef } from "react";
import { Paper, createStyles, Textarea } from "@mantine/core";
import { gsap } from "gsap";
import colors from "tailwindcss/colors";

const mediumWriters = [
	{
		id: 1,
		name: "Nat Eliason",
		description: "Writes about growth marketing and personal development.",
	},
	{
		id: 2,
		name: "Tomas Pueyo",
		description: "Explores behavioral psychology and self-improvement.",
	},
	{
		id: 3,
		name: "Benjamin Hardy",
		description: "Focuses on leadership, personal growth, and motivation.",
	},
	{
		id: 4,
		name: "Nick Wignall",
		description: "Covers practical psychology and mental health tips.",
	},
	{
		id: 5,
		name: "Tim Denning",
		description: "Writes on entrepreneurship, productivity, and side hustles.",
	},
	{
		id: 6,
		name: "Ayodeji Awosika",
		description: "Explores self-improvement, creativity, and motivation.",
	},
	{
		id: 7,
		name: "Shane Parrish",
		description:
			"Philosophical insights and mental models for better decision-making.",
	},
	{
		id: 8,
		name: "Ali Abdaal",
		description: "Covers productivity, personal finance, and entrepreneurship.",
	},
	{
		id: 9,
		name: "Jessica Wildfire",
		description: "Writes about culture, identity, and society.",
	},
	{
		id: 10,
		name: "Zat Rana",
		description: "Philosophical musings on science, art, and human nature.",
	},
	{
		id: 11,
		name: "Darius Foroux",
		description: "Focuses on habits, productivity, and personal development.",
	},
	{
		id: 12,
		name: "James Altucher",
		description: "Entrepreneurship, self-improvement, and financial advice.",
	},
	{
		id: 13,
		name: "Seth Godin",
		description: "Marketing, leadership, and how to make a difference.",
	},
	{
		id: 14,
		name: "Ryan Holiday",
		description: "Philosophy of stoicism, leadership, and personal growth.",
	},
	{
		id: 15,
		name: "Anthony Moore",
		description: "Self-improvement and motivation for everyday life.",
	},
	{
		id: 16,
		name: "Nir Eyal",
		description: "Behavioral design and how to build good habits.",
	},
	{
		id: 17,
		name: "David Perell",
		description: "Writing, media, and personal knowledge management.",
	},
	{
		id: 18,
		name: "Tiago Forte",
		description: "Productivity, knowledge management, and personal systems.",
	},
	{
		id: 19,
		name: "Michael Simmons",
		description: "Writes about learning and personal growth.",
	},
	{
		id: 20,
		name: "Todd Brison",
		description: "Motivation, creativity, and entrepreneurship tips.",
	},
];

const TaggedInput = () => {
	const [query, setQuery] = useState("");
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [filteredWriters, setFilteredWriters] = useState([]);
	const [fullText, setFullText] = useState("");
	const [activeIndex, setActiveIndex] = useState(-1);
	const [selectedWriters, setSelectedWriters] = useState([]);
	const dropdownRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		const lastAtIndex = query.lastIndexOf("@");

		if (lastAtIndex !== -1) {
			const search = query.slice(lastAtIndex + 1).toLowerCase();
			const filtered = mediumWriters.filter((writer) =>
				writer.name.toLowerCase().includes(search)
			);
			setFilteredWriters(filtered);
			setDropdownOpen(true);
		} else {
			setDropdownOpen(false);
		}
	}, [query]);

	useEffect(() => {
		if (dropdownOpen && dropdownRef.current) {
			gsap.fromTo(
				dropdownRef.current,
				{ opacity: 0, y: -10 },
				{ opacity: 1, y: 0, duration: 0.3 }
			);
		}
	}, [dropdownOpen]);

	const handleSelectWriter = (writerName) => {
		const cursorPos = inputRef.current.selectionStart;
		const inputText = query.slice(0, cursorPos);

		const atPosition = inputText.lastIndexOf("@");
		const beforeAt = query.slice(0, atPosition);
		const afterAt = query.slice(cursorPos);

		const writerWithClass = `<span class="text-indigo-500 underline">${writerName}</span>`;

		let updatedFullText = fullText;

		const lastAtPosition = updatedFullText.lastIndexOf("@");
		if (lastAtPosition !== -1) {
			const placeholderEnd = updatedFullText.indexOf(" ", lastAtPosition);
			updatedFullText =
				updatedFullText.slice(0, lastAtPosition) +
				writerWithClass +
				(placeholderEnd !== -1 ? updatedFullText.slice(placeholderEnd) : "");
		} else {
			updatedFullText = `${updatedFullText} ${writerWithClass}`;
		}
		setFullText(updatedFullText + " ");
		const newQuery = `${beforeAt}${writerName}${afterAt}`;

		setQuery(newQuery);
		setSelectedWriters([...selectedWriters, writerName]);
		setDropdownOpen(false);
		inputRef.current.focus();
	};

	const handleKeyDown = (e) => {
		if (dropdownOpen) {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				setActiveIndex((prevIndex) => (prevIndex + 1) % filteredWriters.length);
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				setActiveIndex(
					(prevIndex) =>
						(prevIndex - 1 + filteredWriters.length) % filteredWriters.length
				);
			} else if (e.key === "Enter" && activeIndex !== -1) {
				e.preventDefault();
				handleSelectWriter(filteredWriters[activeIndex].name);
			}
		}
	};

	const { classes } = useStyles();
	return (
		<div className="relative w-full max-w-lg mx-auto h-screen flex flex-col justify-center">
			<div className="max-w-lg">
				<div
					className={`formatted-query p-2 rounded-lg ${classes.text}`}
					dangerouslySetInnerHTML={{ __html: fullText }}
				/>
				<Textarea
					value={query}
					onChange={(e) => {
						const newQuery = event.target.value;
						setQuery(e.target.value);
						let updatedFullText = newQuery;

						selectedWriters.forEach((writerName) => {
							const writerWithClass = `<span class="text-indigo-500 underline">${writerName}</span>`;
							const writerRegex = new RegExp(writerName, "g");
							updatedFullText = updatedFullText.replace(
								writerRegex,
								writerWithClass
							);
						});

						setFullText(updatedFullText);
					}}
					placeholder="Tag top medium writers using @..."
					className="text-lg p-2 rounded-md"
					onKeyDown={handleKeyDown}
					ref={inputRef}
					classNames={{
						input:
							"border border-gray-200 outline-none focus:outline-none focus:border focus:border-gray-400",
					}}
				/>
				{dropdownOpen && (
					<Paper
						ref={dropdownRef}
						className="absolute z-10 p-2 left-1 right-1 bg-white border rounded-lg w-full max-h-60 overflow-y-auto"
					>
						<ol className="">
							{filteredWriters.length > 0 ? (
								filteredWriters.map((writer, index) => (
									<button
										onClick={() => handleSelectWriter(writer.name)}
										key={writer.id}
										className={`p-2 hover:bg-gray-100 cursor-pointer w-full text-left rounded-md ${
											activeIndex === index ? "bg-gray-100" : ""
										}`}
									>
										<p className="font-semibold font-mono text-lg">
											{writer.name}
										</p>
										<p className="text-sm font-serif text-gray-500">
											{writer.description}
										</p>
									</button>
								))
							) : (
								<p className="text-sm text-gray-500 p-2">No writers found</p>
							)}
						</ol>
					</Paper>
				)}
			</div>
		</div>
	);
};

export default TaggedInput;

const useStyles = createStyles(() => ({
	text: {
		"& .writer-name": {
			color: colors.indigo[600],
			textDecoration: "underline",
		},
	},
}));
