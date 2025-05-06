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
										src="https://avatars.githubusercontent.com/shreyvijayvargiya"
										alt="Shrey Vijayvargiya"
										className="w-full h-full object-cover"
									/>
								</div>
								<div>
									<h1 className="text-4xl font-bold text-gray-800 mb-2">
										SHREY VIJAYVARGIYA
									</h1>
									<p className="text-xl text-gray-600 mb-6">
										Full-Stack Developer
									</p>
									<div className="flex space-x-6">
										<a
											href="https://github.com/shreyvijayvargiya"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
										>
											<Github size={20} />
											<span>GitHub</span>
										</a>
										<a
											href="https://www.linkedin.com/in/shrey-vijayvargiya-b62a3a105/"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
										>
											<Linkedin size={20} />
											<span>LinkedIn</span>
										</a>
										<a
											href="https://ihatereading.in"
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
										>
											<Globe size={20} />
											<span>Website</span>
										</a>
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
								Hello, I am Shrey Vijayvargiya, a Full Stack Developer with 5
								years of experience working. I love to build mobile, desktop,
								and web applications and currently building{" "}
								<a
									href="https://www.ihatereading.in"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:text-blue-600"
								>
									iHateReading
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
								<div>
									<h3 className="text-xl font-bold mb-1 text-gray-800">
										Mobile App Developer, ChainGPT
									</h3>
									<p className="text-gray-500 mb-3">
										April 2023 - January 2025
									</p>
									<ul className="list-disc list-inside text-gray-600 space-y-2">
										<li>
											Successfully developed ChainGPT non-custodial blockchain
											wallet mobile app
										</li>
										<li>
											Single developer managing team of Designers, Developers
											and Product manager
										</li>
										<li>
											API development for web3 based application for our mobile
											app
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-1 text-gray-800">
										Frontend Developer, Koo
									</h3>
									<p className="text-gray-500 mb-3">
										August 2021 - November 2022
									</p>
									<ul className="list-disc list-inside text-gray-600 space-y-2">
										<li>Lead frontend team of 6 members</li>
										<li>
											Developed and managed Koo website along with dashboard &
											admin panel
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-bold mb-1 text-gray-800">
										Mobile App Developer, Coinswitch
									</h3>
									<p className="text-gray-500 mb-3">
										March 2020 - January 2021
									</p>
									<ul className="list-disc list-inside text-gray-600 space-y-2">
										<li>
											Developed cryptocurrency trading application for millions
											of users
										</li>
										<li>Successfully improved app(APK) bundle size by 40%</li>
										<li>Increased Application runtime speed by 25%</li>
										<li>
											Integration of GraphQL to enhance performance by 50%
										</li>
									</ul>
								</div>
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
										<li>JavaScript</li>
										<li>Python</li>
										<li>C++</li>
										<li>TypeScript</li>
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">Libraries</h3>
									<ul className="text-gray-600 space-y-2">
										<li>React</li>
										<li>React Native</li>
										<li>Node.js</li>
										<li>Express</li>
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">Databases</h3>
									<ul className="text-gray-600 space-y-2">
										<li>Firebase</li>
										<li>MongoDB</li>
									</ul>
								</div>
								<div>
									<h3 className="font-bold mb-3 text-gray-800">
										Version Control
									</h3>
									<ul className="text-gray-600 space-y-2">
										<li>GitHub</li>
										<li>BitBucket</li>
										<li>GitLab</li>
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
										href="mailto:Shreyvijayvargiya26@gmail.com"
										className="text-gray-600 hover:text-gray-900 transition-colors"
									>
										Shreyvijayvargiya26@gmail.com
									</a>
								</div>
								<div className="flex items-center space-x-4">
									<Phone size={20} className="text-gray-600" />
									<a
										href="tel:+917030226230"
										className="text-gray-600 hover:text-gray-900 transition-colors"
									>
										+91-7030226230
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
