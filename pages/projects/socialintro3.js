import { ActionIcon, Avatar, Slider } from "@mantine/core";
import gsap from "gsap";
import { GithubIcon, Laptop2Icon, RssIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import colors from "tailwindcss/colors";

const Portfolio3 = () => {
	const [val, setVal] = useState(Number(0));

	const getColor = () => {
		if (val === 0) return colors.white;
		if (val <= 5) return colors.gray[50];
		if (val <= 10) return colors.gray[100];
		if (val <= 20) return colors.gray[200];
		if (val <= 30) return colors.gray[300];
		if (val <= 40) return colors.gray[400];
		if (val <= 50) return colors.gray[500];
		if (val <= 60) return colors.gray[600];
		if (val <= 60) return colors.gray[700];
		if (val <= 80) return colors.gray[800];
		if (val <= 90) return colors.gray[900];
		if (val <= 100) return colors.black;
		return colors.gray[800];
	};

	useEffect(() => {
		getColor();
	}, [val]);

	return (
		<div className="flex justify-center items-center h-full w-full flex-col bg-blackShade text-gray-200 ">
			<div className="md:w-full mx-auto">
				<div>
					<img src="/avatar.png" size="lg" className="w-20 h-20 my-4" />
					<p className="text-left">
						<span
							className="group relative"
							onMouseEnter={() => {
								gsap.fromTo(
									".avatar",
									{ rotate: 180, opacity: 0 },
									{ opacity: 1, rotate: 0 }
								);
							}}
							onMouseLeave={() => {
								gsap.fromTo(
									".avatar",
									{ rotate: 0, opacity: 1 },
									{ opacity: 0, rotate: 45 }
								);
							}}
						>
							<p className="text-4xl font-serif my-4">Alex Borgen </p>
							<div className="text-left">
								<p className="text-md font-mono">
									Alex is a passionate frontend developer with 5 years of
									experience in React and JavaScript. He loves creating visually
									appealing and interactive UIs. Alex is always on the lookout
									for tools and frameworks that can speed up his workflow while
									maintaining high-quality code.
								</p>
								<p className="text-md font-mono my-2">
									He values design and user experience as much as performance
									and enjoys experimenting with new technologies. In his spare
									time, he contributes to open-source projects and writes
									technical blogs.
								</p>
							</div>
						</span>
					</p>{" "}
				</div>
				<div className="flex md:justify-start items-center gap-2 my-10 sm:flex-wrap xxs:flex-wrap xs:flex-wrap xs:justify-center xxs:justify-center sm:justify-center ">
					<p className="break-words">
						<div className="group relative bg-indigo-100  hover:underline my-1 cursor-pointer hover:px-6 px-4 duration-100 transition-all ease-in-out hover:bg-white rounded-full hover:rounded-xl py-2 gap-2 flex justify-start items-center">
							<span className="cursor-pointer w-4 h-4 transition-all duration-100">
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
							<a className="text-indigo-500 hover:underline">Twitter</a>
						</div>
					</p>
					<span className="group bg-pink-100 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-white rounded-full py-2 gap-1 flex justify-start items-center">
						<span className="cursor-pointer transition-all duration-100">
							<GithubIcon color={colors.pink[600]} size={20} />
						</span>
						<a className="text-pink-500 hover:underline">Github</a>
					</span>
					<span className="group bg-orange-100 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-white rounded-full py-2 gap-1 flex justify-start items-center">
						<span className="cursor-pointer transition-all duration-100">
							<Laptop2Icon color={colors.orange[600]} size={20} />
						</span>
						<a className="text-orange-500 hover:underline">Website</a>
					</span>

					<span>
						<span className="group bg-red-100 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-white rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100">
								<FaYoutube color={colors.red[600]} />
							</span>
							<a className="text-red-500 hover:underline">Youtube</a>
						</span>
					</span>
					<span>
						<span className="group bg-green-100 hover:translate-x-4 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-white rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100 ">
								<RssIcon color={colors.green[600]} size={20} />
							</span>
							<a className="text-green-500 hover:underline">Medium</a>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Portfolio3;
