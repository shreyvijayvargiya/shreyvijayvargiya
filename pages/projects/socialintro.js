import { ActionIcon, Avatar, Slider } from "@mantine/core";
import gsap from "gsap";
import { Laptop2Icon, RssIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import colors from "tailwindcss/colors";

const Themer = () => {
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
		<div className="flex justify-center items-center h-screen w-full flex-col">
			<div className="md:w-1/4 mx-auto text-left text-2xl">
				<div>
					<p>
						Hello, I am{" "}
						<span
							className="group relative underline"
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
							Shrey{" "}
							<img
								src="/avatar.png"
								size="lg"
								className="avatar group-hover:visible invisible absolute mb-8 bottom-0 left-0 transition-all duration-100 ease-in-out"
							/>
						</span>
					</p>{" "}
				</div>
				<p className="flex flex-wrap items-center justify-start break-words">
					I socially active on
					<span className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-indigo-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center">
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
						<a className="text-indigo-500 hover:underline px-1">Twitter</a>
					</span>
					, you can check my{" "}
					<span className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-orange-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center">
						<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer transition-all duration-100">
							<Laptop2Icon color={colors.orange[600]} size={20} />
						</span>
						<a className="text-orange-500 hover:underline px-2">Website</a>
					</span>
					for details, feel free to subscribe on{" "}
					<span className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-red-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center">
						<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer transition-all duration-100">
							<FaYoutube color={colors.red[600]} />
						</span>
						<a className="text-red-500 hover:underline">Youtube</a>
					</span>
					, follow on{" "}
					<span className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-pink-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center">
						<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer transition-all duration-100">
							<FaInstagram color={colors.pink[600]} />
						</span>
						<a className="text-pink-500 hover:underline">Instagram</a>
					</span>
					and read my blogs on{" "}
					<span className="group cursor-pointer hover:px-4 duration-100 transition-all ease-in-out hover:bg-green-50 rounded-full px-1 py-1 gap-2 flex justify-start items-center">
						<span className="hidden opacity-0 group-hover:opacity-100 group-hover:block cursor-pointer transition-all duration-100">
							<RssIcon color={colors.green[600]} size={20} />
						</span>
						<a className="text-green-500 hover:underline">Medium</a>
					</span>
				</p>
			</div>
		</div>
	);
};
export default Themer;
