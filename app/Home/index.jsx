import React, { useState, useEffect } from "react";

const Icons = {
	Github: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	),
	Linkedin: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	),
	Globe: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	),
	Mail: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<polyline points="22,6 12,13 2,6" />
		</svg>
	),
	Phone: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	),
	Briefcase: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		</svg>
	),
	Code: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	),
	BookOpen: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
		</svg>
	),
	JavaScript: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	Python: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	Cpp: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	TypeScript: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	React: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="4" />
			<path d="M12 2v4" />
			<path d="M12 18v4" />
			<path d="M4.93 4.93l2.83 2.83" />
			<path d="M16.24 16.24l2.83 2.83" />
			<path d="M2 12h4" />
			<path d="M18 12h4" />
			<path d="M4.93 19.07l2.83-2.83" />
			<path d="M16.24 7.76l2.83-2.83" />
		</svg>
	),
	ReactNative: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
			<path d="M12 8v8" />
			<path d="M8 12h8" />
		</svg>
	),
	Node: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	Express: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	Firebase: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	MongoDB: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	GitHub: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	),
	BitBucket: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	GitLab: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2L2 7l10 5 10-5-10-5z" />
			<path d="M2 17l10 5 10-5" />
			<path d="M2 12l10 5 10-5" />
		</svg>
	),
	Sun: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="5" />
			<line x1="12" y1="1" x2="12" y2="3" />
			<line x1="12" y1="21" x2="12" y2="23" />
			<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
			<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
			<line x1="1" y1="12" x2="3" y2="12" />
			<line x1="21" y1="12" x2="23" y2="12" />
			<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
			<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
		</svg>
	),
	Moon: () => (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
		</svg>
	),
};

const data = {
	personalInfo: {
		name: "SHREY VIJAYVARGIYA",
		title: "Full-Stack Developer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		socialLinks: [
			{
				icon: Icons.Github,
				label: "GitHub",
				url: "https://github.com/shreyvijayvargiya",
			},
			{
				icon: Icons.Linkedin,
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/shrey-vijayvargiya-b62a3a105/",
			},
			{
				icon: Icons.Globe,
				label: "Website",
				url: "https://ihatereading.in",
			},
		],
	},
	about: {
		text: "Hello, I am Shrey Vijayvargiya, a Full Stack Developer with 5 years of experience. I love to build mobile, desktop, and web applications and currently building",
		website: {
			text: "iHateReading",
			url: "https://www.ihatereading.in",
		},
	},
	experience: [
		{
			title: "Mobile App Developer",
			company: "ChainGPT",
			url: "https://chaingpt.org",
			period: "April 2023 - January 2025",
			responsibilities: [
				"Successfully developed ChainGPT non-custodial blockchain wallet mobile app",
				"Single developer managing team of Designers, Developers and Product manager",
				"API development for web3 based application for our mobile app",
			],
		},
		{
			title: "Frontend Developer",
			company: "Koo",
			url: "https://kooapp.com",
			period: "August 2021 - November 2022",
			responsibilities: [
				"Lead frontend team of 6 members",
				"Developed and managed Koo website along with dashboard & admin panel",
			],
		},
		{
			title: "Mobile App Developer",
			company: "Coinswitch",
			url: "https://coinswitch.co",
			period: "March 2020 - January 2021",
			responsibilities: [
				"Developed cryptocurrency trading application for millions of users",
				"Successfully improved app(APK) bundle size by 40%",
				"Increased Application runtime speed by 25%",
				"Integration of GraphQL to enhance performance by 50%",
			],
		},
	],
	skills: {
		languages: [
			{ name: "JavaScript", icon: Icons.JavaScript },
			{ name: "Python", icon: Icons.Python },
			{ name: "C++", icon: Icons.Cpp },
			{ name: "TypeScript", icon: Icons.TypeScript },
		],
		libraries: [
			{ name: "React", icon: Icons.React },
			{ name: "React Native", icon: Icons.ReactNative },
			{ name: "Node.js", icon: Icons.Node },
			{ name: "Express", icon: Icons.Express },
		],
		databases: [
			{ name: "Firebase", icon: Icons.Firebase },
			{ name: "MongoDB", icon: Icons.MongoDB },
		],
		versionControl: [
			{ name: "GitHub", icon: Icons.GitHub },
			{ name: "BitBucket", icon: Icons.BitBucket },
			{ name: "GitLab", icon: Icons.GitLab },
		],
	},
	contact: {
		email: {
			address: "Shreyvijayvargiya26@gmail.com",
			url: "mailto:Shreyvijayvargiya26@gmail.com",
		},
		phone: {
			number: "+91-7030226230",
			url: "tel:+917030226230",
		},
	},
};

const Home = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		// Check for saved theme preference or use system preference
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme) {
			setTheme(savedTheme);
		} else if (prefersDark) {
			setTheme("dark");
		}
	}, []);

	useEffect(() => {
		// Update document class and save preference
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className="min-h-screen relative dark:bg-black transition-colors duration-200">
			{/* Theme Toggle Button */}
			<button
				onClick={toggleTheme}
				className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:shadow-xl transition-all duration-200 z-50"
				aria-label="Toggle theme"
			>
				{theme === "light" ? <Icons.Moon /> : <Icons.Sun />}
			</button>

			{/* Background dots pattern */}
			<div
				className="absolute h-full inset-0 opacity-20 z-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
					backgroundSize: "20px 20px",
				}}
			/>

			{/* Main content container */}
			<div className="max-w-3xl mx-auto px-4 py-8 relative">
				<div className="bg-white/95 dark:bg-black/80 backdrop-blur-sm shadow-2xl border border-zinc-100 dark:border-zinc-900 rounded-xl relative z-10">
					{/* Content wrapper with left padding for the border */}
					<div className="pl-8 py-10">
						{/* Hero Section */}
						<section className="mb-16">
							<div className="flex flex-col items-start gap-8">
								<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-600 flex-shrink-0">
									<img
										src={data.personalInfo.avatar}
										alt={data.personalInfo.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h1 className="text-4xl font-bold text-zinc-800 dark:text-white mb-2">
										{data.personalInfo.name}
									</h1>
									<p className="text-xl text-zinc-600 dark:text-zinc-300 mb-6">
										{data.personalInfo.title}
									</p>
									<div className="flex space-x-6">
										{data.personalInfo.socialLinks.map((link, index) => (
											<a
												key={index}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center space-x-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
											>
												<link.icon />
												<span>{link.label}</span>
											</a>
										))}
									</div>
								</div>
							</div>
						</section>

						{/* About Section */}
						<section className="mb-16">
							<h2 className="font-bold mb-4 flex items-center text-zinc-800 dark:text-white">
								<Icons.BookOpen />
								<span className="ml-2">About Me</span>
							</h2>
							<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
								{data.about.text}{" "}
								<a
									href={data.about.website.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
								>
									{data.about.website.text}
								</a>
							</p>
						</section>

						{/* Experience Section */}
						<section className="mb-16">
							<h2 className="text font-bold mb-6 flex items-center text-zinc-800 dark:text-white">
								<Icons.Briefcase />
								<span className="ml-2">Work Experience</span>
							</h2>
							<div className="space-y-10">
								{data.experience.map((job, index) => (
									<div
										key={index}
										className=""
									>
										<h3 className="text-xl font-bold mb-1 text-zinc-800 dark:text-white">
											{job.title},{" "}
										</h3>
										<p className="text-zinc-500 dark:text-zinc-400">
											{job.period}
										</p>
										<a
											href={job.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
										>
											{job.company}
										</a>
										<ul className="list-disc list-inside text-zinc-600 dark:text-zinc-300 space-y-2 mt-2">
											{job.responsibilities.map((responsibility, idx) => (
												<li key={idx}>{responsibility}</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</section>

						{/* Skills Section */}
						<section className="mb-16">
							<h2 className="font-bold mb-6 flex items-center text-zinc-800 dark:text-white">
								<Icons.Code />
								<span className="ml-2">Tech Stack</span>
							</h2>
							<div className="grid grid-cols-2 gap-8">
								<div>
									<h3 className="font-bold mb-3 text-zinc-800 dark:text-white">
										Languages
									</h3>
									<ul className="text-zinc-600 dark:text-zinc-300 space-y-2">
										{data.skills.languages.map((skill, index) => (
											<li key={index} className="flex items-center space-x-2">
												<skill.icon />
												<span>{skill.name}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-zinc-800 dark:text-white">
										Libraries
									</h3>
									<ul className="text-zinc-600 dark:text-zinc-300 space-y-2">
										{data.skills.libraries.map((skill, index) => (
											<li key={index} className="flex items-center space-x-2">
												<skill.icon />
												<span>{skill.name}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-zinc-800 dark:text-white">
										Databases
									</h3>
									<ul className="text-zinc-600 dark:text-zinc-300 space-y-2">
										{data.skills.databases.map((skill, index) => (
											<li key={index} className="flex items-center space-x-2">
												<skill.icon />
												<span>{skill.name}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-zinc-800 dark:text-white">
										Version Control
									</h3>
									<ul className="text-zinc-600 dark:text-zinc-300 space-y-2">
										{data.skills.versionControl.map((skill, index) => (
											<li key={index} className="flex items-center space-x-2">
												<skill.icon />
												<span>{skill.name}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</section>

						{/* Contact Section */}
						<section>
							<h2 className="font-bold mb-6 text-zinc-800 dark:text-white">
								Get In Touch
							</h2>
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<Icons.Mail className="text-zinc-600 dark:text-zinc-300" />
									<a
										href={data.contact.email.url}
										className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
									>
										{data.contact.email.address}
									</a>
								</div>
								<div className="flex items-center space-x-4">
									<Icons.Phone className="text-zinc-600 dark:text-zinc-300" />
									<a
										href={data.contact.phone.url}
										className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
									>
										{data.contact.phone.number}
									</a>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
