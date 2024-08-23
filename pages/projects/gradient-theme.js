import React, { useState } from "react";
import { Button, Box, Text } from "@mantine/core";
import colors from "tailwindcss/colors";
import { Laptop2Icon, RssIcon } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const gradientColors = [
	"bg-gray-50",
	"bg-gray-100",
	"bg-gray-200",
	"bg-gray-300",
	"bg-gray-400",
	"bg-gray-500",
	"bg-gray-600",
	"bg-gray-700",
	"bg-gray-800",
	"bg-gray-900",
	"bg-indigo-50",
	"bg-indigo-100",
	"bg-indigo-200",
	"bg-indigo-300",
	"bg-indigo-400",
	"bg-indigo-500",
	"bg-indigo-600",
	"bg-indigo-700",
	"bg-indigo-800",
	"bg-indigo-900",
	"bg-blue-50",
	"bg-blue-100",
	"bg-blue-200",
	"bg-blue-300",
	"bg-blue-400",
	"bg-blue-500",
	"bg-blue-600",
	"bg-blue-700",
	"bg-blue-800",
	"bg-blue-900",
	"bg-pink-200",
	"bg-pink-300",
	"bg-pink-400",
	"bg-pink-500",
	"bg-pink-600",
	"bg-pink-700",
	"bg-pink-800",
	"bg-pink-900",
	"bg-red-50",
	"bg-red-100",
	"bg-red-200",
	"bg-red-300",
	"bg-red-400",
	"bg-red-500",
	"bg-red-600",
	"bg-red-700",
	"bg-red-800",
	"bg-red-900",
	"bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300",
	"bg-gradient-to-r from-green-200 to-blue-300",
	"bg-gradient-to-r from-yellow-200 to-red-300",
	"bg-gradient-to-r from-blue-400 to-green-300",
	"bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300",
	"bg-gradient-to-r from-red-300 to-yellow-300",
	"bg-gradient-to-r from-blue-300 to-indigo-400",
	"bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-200",
	"bg-gradient-to-r from-green-300 to-purple-200",
	"bg-gradient-to-r from-orange-200 to-red-200",
	"bg-gradient-to-r from-indigo-400 to-purple-300",
	"bg-gradient-to-r from-gray-900 to-gray-700",
	"bg-gradient-to-l from-gray-900 to-gray-700",
	"bg-gradient-to-l from-gray-200 to-gray-100",
	"bg-gradient-to-r from-pink-200 to-pink-400",
	"bg-gradient-to-r from-red-200 via-red-300 to-yellow-200",
	"bg-gradient-to-r from-green-200 via-green-300 to-blue-200",
	"bg-gradient-to-r from-yellow-300 to-red-400",
	"bg-gradient-to-r from-blue-200 to-blue-400",
	"bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200",
	"bg-gradient-to-r from-orange-300 via-red-300 to-yellow-300",
	"bg-gradient-to-r from-green-200 via-teal-300 to-blue-400",
	"bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400",
];

const GradientPreview = () => {
	const [selectedGradient, setSelectedGradient] = useState(gradientColors[0]);
	const [order, setOrder] = useState("flex-col");

	return (
		<div className="p-6 h-screen w-full relative">
			<Box
				className={`w-1/3 mx-auto h-full mb-6 overflow-scroll flex items-center shadow-2xl justify-center text-white text-xl font-bold ${selectedGradient}`}
				sx={{ borderRadius: "10px" }}
			>
				<div className="flex justify-center items-center h-full w-full flex-col ">
					<div className="md:w-full mx-auto">
						<img src="/avatar.png" size="lg" className="w-20 h-20 mx-auto" />
						<div>
							<p className="text-center text-4xl">Shrey Vijayvargiya</p>
						</div>
						<div
							className={`flex justify-start items-center ${order} gap-2 my-10 sm:flex-wrap xs:flex-wrap xxs:flex-wrap sm:justify-center xxs:justify-center xs:justify-center`}
						>
							<p className="break-words">
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
							</p>
							<span className="group bg-orange-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-orange-50 rounded-full py-2 gap-1 flex justify-start items-center">
								<span className="cursor-pointer transition-all duration-100">
									<Laptop2Icon color={colors.orange[600]} size={20} />
								</span>
								<a className="text-orange-500 hover:underline">Website</a>
							</span>

							<span>
								<span className="group bg-red-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-red-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<FaYoutube color={colors.red[600]} />
									</span>
									<a className="text-red-500 hover:underline">Youtube</a>
								</span>
							</span>
							<span>
								<span className="group bg-pink-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-pink-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<FaInstagram color={colors.pink[600]} />
									</span>
									<a className="text-pink-500 hover:underline">Instagram</a>
								</span>
							</span>
							<span>
								<span className="group bg-green-50 hover:translate-x-4 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-green-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100 ">
										<RssIcon color={colors.green[600]} size={20} />
									</span>
									<a className="text-green-500 hover:underline">Medium</a>
								</span>
							</span>
						</div>
					</div>
				</div>
			</Box>

			<div
				className="fixed bottom-10 left-2 w-96 overflow-x-scroll"
				style={{ scrollbarWidth: 0 }}
			>
				<Text className="text-center mb-4 font-medium text-md">
					Choose a Gradient:
				</Text>
				<div className="flex w-full mx-auto justify-start items-center gap-2 flex-wrap p-2">
					{gradientColors.map((gradient, index) => (
						<div>
							<Button
								fullWidth
								variant="unstyled"
								className={`h-12 w-12 rounded-xl hover:w-14 hover:h-14 transition-all duration-200 ${gradient}`}
								sx={{
									borderRadius: "10px",
									border:
										selectedGradient === gradient ? "3px solid #000" : "none",
								}}
								onClick={() => setSelectedGradient(gradient)}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default GradientPreview;
