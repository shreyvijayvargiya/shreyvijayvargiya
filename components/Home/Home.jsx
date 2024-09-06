import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@mantine/core";
import {
	GalleryThumbnailsIcon,
	Languages,
	Laptop,
	Mail,
	User,
} from "lucide-react";
import TimelineWorkExperience from "./WorkExperience";

const techstacks = [
	"javascript",
	"nodejs",
	"reactjs",
	"react-native",
	"html",
	"css",
	"firebase",
	"supabase",
	"blockchain",
];
const HomeComponent = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={`w-full h-screen`} style={{ scrollBehavior: "smooth" }}>
			<div className="md:w-1/2 sm:w-full xxs:w-full xs:w-full mx-auto my-4 p-4">
				<div className="">
					<img
						src="/avatar.png"
						className="w-20 h-20 hover:w-40 hover:h-40 transition-all duration-100 ease-in"
					/>
					<p className="text-4xl font-fancy text-black">Shrey Vijayvargiya</p>
					<p className="text-md text-gray-800">
						Software Developer (Frontend + Backend)
					</p>
				</div>
				<div
					className={`flex justify-start items-center gap-2 py-3 my-4 border-t border-b border-gray-200`}
				>
					<Button
						color="dark"
						variant="hover"
						size="xs"
						onClick={() => scrollToSection("about-section")}
						leftIcon={<User size={18} />}
					>
						About
					</Button>
					<Button
						onClick={() => scrollToSection("work-experience-section")}
						color="dark"
						variant="hover"
						size="xs"
						leftIcon={<Laptop size={18} />}
					>
						Work Experience
					</Button>
					<Button
						color="dark"
						variant="hover"
						size="xs"
						leftIcon={<GalleryThumbnailsIcon size={18} />}
					>
						<a href={"https://ihatereading.in/customrepo"} target="_blank">
							Projects
						</a>
					</Button>
					<Button
						color="dark"
						variant="hover"
						size="xs"
						onClick={() => scrollToSection("tech-stack-section")}
						leftIcon={<Languages size={18} />}
					>
						Tech Stack
					</Button>
					<Button
						color="dark"
						variant="hover"
						size="xs"
						leftIcon={<Mail size={18} />}
					>
						<a
							href="https//mailto@shreyvijayvagriya26@gmail.com"
							target="_blank"
						>
							say hi
						</a>{" "}
					</Button>
				</div>
				<div className="about-section my-10" id="about-section">
					<p className="text-2xl font-mono font-semibold">About Me</p>
					<p className="text-gray-700 text-md font-sans">
						Hi, I am Shrey, I am a Full Stack Developer with 5 years of industry
						experience in developing websites, mobile apps, blockchain wallets,
						smart contracts and backend services{" "}
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
						{techstacks.map((item, index) => {
							return (
								<div key={item} className={`p-2 cursor-pointer py-4`}>
									<img
										className={`w-12 h-12 object-contain hover:w-20 hover:h-20 transition-all duration-100 ease-in rounded-xl`}
										src={`./logos/${item}.svg`}
									/>
									<div className="mx-auto text-xs text-center text-gray-500">
										{item}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="email-me-section my-10" id="email-me-section">
					<p className="text-2xl font-mono font-semibold">Contact Me</p>
					<p>
						Open for full-time job, freelance projects and any kind of
						consulting work
					</p>
					<Button
						color="dark"
						variant="outline"
						size="sm"
						my="xs"
						leftIcon={<Mail size={18} />}
					>
						<a
							href="https//mailto@shreyvijayvagriya26@gmail.com"
							target="_blank"
						>
							say hi
						</a>{" "}
					</Button>
				</div>
				<div className="w-full text-center p-10 border-t border-gray-200">
					<p>
						Designed & Developed by{" "}
						<a
							target="_blank"
							href="/"
							className="text-indigo-600 hover:underline"
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

const useStyles = makeStyles((theme) => ({
	container: {},
}));
