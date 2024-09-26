import React, { useState } from "react";
import { Laptop2Icon, LinkIcon, RssIcon, X } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import colors from "tailwindcss/colors";

const BottomSheet = () => {
	const [opened, setOpened] = useState(false);

	const toggleBottomSheet = () => {
		setOpened(!opened);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
			<button
				onClick={toggleBottomSheet}
				className="bg-gray-800 text-white flex justify-around items-center gap-2 py-2 px-4 group rounded font-mono hover:bg-black hover:pl-6 duration-100 transition-all"
			>
				<LinkIcon
					className="opacity-0 group-hover:opacity-100 hidden group-hover:inline transition-opacity duration-100 group-hover:scale-110 group-hover:text-yellow-500"
					size={14}
				/>
				Show Links
			</button>
			<div
				className={`fixed border border-gray-200 rounded-md bg-white ${
					opened ? "mx-auto bottom-0 w-96 h-80" : "-bottom-96 w-96 h-0"
				} transition-all duration-300 ease-in`}
			>
				<div className="flex justify-between items-center p-2 border-b">
					<h3 className="text-lg font-medium">Social Media</h3>
					<X className="cursor-pointer" size={24} onClick={toggleBottomSheet} />
				</div>
				<div className="p-2">
					<div className="flex flex-wrap justify-start items-center gap-2">
						<div className="group relative bg-indigo-50 hover:underline my-1 cursor-pointer hover:px-6 px-4 duration-100 transition-all ease-in-out hover:bg-indigo-50 rounded-full hover:rounded-xl py-2 gap-2 flex justify-start items-center">
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

						<span className="group bg-orange-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-orange-50 rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100">
								<Laptop2Icon color={colors.orange[600]} size={20} />
							</span>
							<a className="text-orange-500 hover:underline">Website</a>
						</span>

						<span className="group bg-red-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-red-50 rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100">
								<FaYoutube color={colors.red[600]} />
							</span>
							<a className="text-red-500 hover:underline">Youtube</a>
						</span>

						<span className="group bg-pink-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-pink-50 rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100">
								<FaInstagram color={colors.pink[600]} />
							</span>
							<a className="text-pink-500 hover:underline">Instagram</a>
						</span>

						<span className="group bg-green-50 hover:translate-x-4 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-green-50 rounded-full py-2 gap-1 flex justify-start items-center">
							<span className="cursor-pointer transition-all duration-100 ">
								<RssIcon color={colors.green[600]} size={20} />
							</span>
							<a className="text-green-500 hover:underline">Medium</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BottomSheet;
