import React from "react";
import { Button } from "@mantine/core";
import {
	GalleryThumbnailsIcon,
	Languages,
	Laptop,
	RssIcon,
	Mail,
	User,
} from "lucide-react";
import TimelineWorkExperience from "./WorkExperience";
import colors from "tailwindcss/colors";

const techstacks = [
	"javascript",
	"nodejs",
	"reactjs",
	"react-native",
	"html",
	"css",
	"firebase",
	"supabase",
];

const HomeComponent = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={`w-full `} style={{ scrollBehavior: "smooth" }}>
			<div className="md:w-1/2 sm:w-full xxs:w-full xs:w-full mx-auto p-4">
				<div className="flex justify-between">
					<div>
						<img
							src="/avatar.png"
							className="w-20 h-20 hover:w-40 hover:h-40 transition-all duration-100 ease-in"
							alt="Avatar"
						/>
						<p className="text-4xl font-mono font-semibold">
							Shrey Vijayvargiya
						</p>
						<p className="text-md">Software Developer (Frontend + Backend)</p>
					</div>
				</div>

				<div className="flex justify-start items-center gap-2 py-3 my-4 border-t border-b border-gray-200">
					<button
						className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:border hover:border-gray-400 rounded-md p-2 gap-2 flex justify-start items-center"
						onClick={() => scrollToSection("about-section")}
					>
						<span className="cursor-pointer transition-all duration-100">
							<User size={18} />
						</span>
						<span className="text-black" target="_blank">
							About
						</span>
					</button>
					<button
						className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:border hover:border-gray-400 rounded-md p-2 gap-2 flex justify-start items-center"
						onClick={() => scrollToSection("work-experience-section")}
					>
						<span className="cursor-pointer transition-all duration-100">
							<Laptop size={18} />
						</span>
						<span className="text-black" target="_blank">
							Work Experience
						</span>
					</button>
					<a
						className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:border hover:border-gray-400 rounded-md p-2 gap-2 flex justify-start items-center"
						href={"/projects"}
						rel="noopener noreferrer"
					>
						<span className="cursor-pointer transition-all duration-100">
							<GalleryThumbnailsIcon size={18} />
						</span>
						<span>Projects</span>
					</a>
					<button
						className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:border hover:border-gray-400 rounded-md p-2 gap-2 flex justify-start items-center"
						onClick={() => scrollToSection("tech-stack-section")}
					>
						<span className="cursor-pointer transition-all duration-100">
							<Languages size={18} />
						</span>
						<span className="text-black" target="_blank">
							Tech Stack
						</span>
					</button>
					<a
						className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-gray-100 hover:border hover:border-gray-400 rounded-md p-2 gap-2 flex justify-start items-center"
						href={"mailto:shreyvijayvargiya26@gmail.com"}
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className="cursor-pointer transition-all duration-100">
							<Mail size={18} />
						</span>
						<span>say hi</span>
					</a>
				</div>

				<div className="about-section my-10" id="about-section">
					<p className="text-2xl font-mono font-semibold">About Me</p>
					<p className="text-gray-700">
						Hi, I am Shrey, I am a Full Stack Developer with 5 years of industry
						experience in developing websites, mobile apps, blockchain wallets,
						smart contracts, and backend services.
					</p>
				</div>

				<div
					className="work-experience-section my-10"
					id="work-experience-section"
				>
					<p className="text-2xl font-mono font-semibold">Work Experience</p>
					<TimelineWorkExperience />
				</div>

				<div className="tech-stack-section my-10" id="tech-stack-section">
					<p className="text-2xl font-mono font-semibold">Tech Stack</p>
					<div className="flex justify-start gap-2 items-center">
						{techstacks.map((item) => (
							<div key={item} className="p-2 cursor-pointer py-4">
								<img
									className="w-12 h-12 object-contain hover:w-20 hover:h-20 transition-all duration-100 ease-in rounded-xl"
									src={`./logos/${item}.svg`}
									alt={item}
								/>
								<div className="mx-auto text-xs text-center">{item}</div>
							</div>
						))}
					</div>
				</div>

				<div className="email-me-section my-10" id="email-me-section">
					<p className="text-2xl font-mono font-semibold">Contact Me</p>
					<p>
						Open for full-time job, freelance projects, and any kind of
						consulting work
					</p>
					<Button
						color="dark"
						variant="outline"
						size="sm"
						leftIcon={<Mail size={18} />}
					>
						<a
							href="mailto:shreyvijayvargiya26@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							say hi
						</a>
					</Button>
				</div>

				<div className="my-5">
					<p className="flex flex-wrap items-center justify-start break-words">
						I am socially active on
						<a
							className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-indigo-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center"
							href="https://www.twitter.com/treyvijay"
							target="_blank"
						>
							<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer w-4 h-4 transition-all duration-100">
								<svg
									role="img"
									viewBox="0 0 24 24"
									fill={colors.indigo[600]}
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>X</title>
									<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
								</svg>
							</span>
							<span className="text-indigo-500 group-hover:underline px-1">
								Twitter
							</span>
						</a>
						and read my blogs on{" "}
						<a
							className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-green-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center"
							target="_blank"
							href="https://www.ihatereading.in"
						>
							<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer transition-all duration-100">
								<RssIcon color={colors.green[600]} size={20} />
							</span>
							<span className="text-green-500 group-hover:underline">
								iHateReading
							</span>
						</a>
					</p>
				</div>

				<div className="w-full text-center p-10 border-t border-gray-200">
					<p>
						Designed & Developed by{" "}
						<a
							target="_blank"
							href="/"
							className="text-indigo-600 hover:underline"
							rel="noopener noreferrer"
						>
							Shrey
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeComponent;
