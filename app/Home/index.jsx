import React from "react";
import {
	Github,
	Linkedin,
	Globe,
	Mail,
	Phone,
	Briefcase,
	Code,
	BookOpen,
} from "lucide-react";

const data = {
	personalInfo: {
		name: "SHREY VIJAYVARGIYA",
		title: "Full-Stack Developer",
		avatar: "https://avatars.githubusercontent.com/shreyvijayvargiya",
		socialLinks: [
			{
				icon: Github,
				label: "GitHub",
				url: "https://github.com/shreyvijayvargiya",
			},
			{
				icon: Linkedin,
				label: "LinkedIn",
				url: "https://www.linkedin.com/in/shrey-vijayvargiya-b62a3a105/",
			},
			{
				icon: Globe,
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
			title: "Mobile App Developer, ChainGPT",
			period: "April 2023 - January 2025",
			responsibilities: [
				"Successfully developed ChainGPT non-custodial blockchain wallet mobile app",
				"Single developer managing team of Designers, Developers and Product manager",
				"API development for web3 based application for our mobile app",
			],
		},
		{
			title: "Frontend Developer, Koo",
			period: "August 2021 - November 2022",
			responsibilities: [
				"Lead frontend team of 6 members",
				"Developed and managed Koo website along with dashboard & admin panel",
			],
		},
		{
			title: "Mobile App Developer, Coinswitch",
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
		languages: ["JavaScript", "Python", "C++", "TypeScript"],
		libraries: ["React", "React Native", "Node.js", "Express"],
		databases: ["Firebase", "MongoDB"],
		versionControl: ["GitHub", "BitBucket", "GitLab"],
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
	return (
		<div className="min-h-screen relative">
			{/* Background dots pattern */}
			<div
				className="absolute h-full inset-0 opacity-30 z-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)",
					backgroundSize: "20px 20px",
				}}
			/>

			{/* Main content container */}
			<div className="max-w-3xl mx-auto px-4 py-8 relative">
				<div className="bg-white/95 backdrop-blur-sm shadow-2xl border border-zinc-100 rounded-xl relative z-10">
					{/* Content wrapper with left padding for the border */}
					<div className="pl-8 py-10">
						{/* Hero Section */}
						<section className="mb-16">
							<div className="flex flex-col items-start gap-8">
								<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
									<img
										src={data.personalInfo.avatar}
										alt={data.personalInfo.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h1 className="text-4xl font-bold text-gray-800 mb-2">
										{data.personalInfo.name}
									</h1>
									<p className="text-xl text-gray-600 mb-6">
										{data.personalInfo.title}
									</p>
									<div className="flex space-x-6">
										{data.personalInfo.socialLinks.map((link, index) => (
											<a
												key={index}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
											>
												<link.icon size={20} />
												<span>{link.label}</span>
											</a>
										))}
									</div>
								</div>
							</div>
						</section>

						{/* About Section */}
						<section className="mb-16">
							<h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
								<BookOpen size={20} className="mr-2" />
								About Me
							</h2>
							<p className="text-gray-600 leading-relaxed">
								{data.about.text}{" "}
								<a
									href={data.about.website.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:text-blue-600"
								>
									{data.about.website.text}
								</a>
							</p>
						</section>

						{/* Experience Section */}
						<section className="mb-16">
							<h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
								<Briefcase size={20} className="mr-2" />
								Work Experience
							</h2>
							<div className="space-y-10">
								{data.experience.map((job, index) => (
									<div key={index}>
										<h3 className="text-xl font-bold mb-1 text-gray-800">
											{job.title}
										</h3>
										<p className="text-gray-500 mb-3">{job.period}</p>
										<ul className="list-disc list-inside text-gray-600 space-y-2">
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
							<h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
								<Code size={20} className="mr-2" />
								Tech Stack
							</h2>
							<div className="grid grid-cols-2 gap-8">
								<div>
									<h3 className="font-bold mb-3 text-gray-800">Languages</h3>
									<ul className="text-gray-600 space-y-2">
										{data.skills.languages.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">Libraries</h3>
									<ul className="text-gray-600 space-y-2">
										{data.skills.libraries.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">Databases</h3>
									<ul className="text-gray-600 space-y-2">
										{data.skills.databases.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">
										Version Control
									</h3>
									<ul className="text-gray-600 space-y-2">
										{data.skills.versionControl.map((skill, index) => (
											<li key={index}>{skill}</li>
										))}
									</ul>
								</div>
							</div>
						</section>

						{/* Contact Section */}
						<section>
							<h2 className="text-2xl font-bold mb-6 text-gray-800">
								Get In Touch
							</h2>
							<div className="space-y-4">
								<div className="flex items-center space-x-4">
									<Mail size={20} className="text-gray-600" />
									<a
										href={data.contact.email.url}
										className="text-gray-600 hover:text-gray-900 transition-colors"
									>
										{data.contact.email.address}
									</a>
								</div>
								<div className="flex items-center space-x-4">
									<Phone size={20} className="text-gray-600" />
									<a
										href={data.contact.phone.url}
										className="text-gray-600 hover:text-gray-900 transition-colors"
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
