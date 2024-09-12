import React, { useState } from "react";
import {
	Button,
	Box,
	Text,
	TextInput,
	Textarea,
	ColorInput,
} from "@mantine/core";
import colors from "tailwindcss/colors";
import { Laptop2Icon, RssIcon } from "lucide-react";
import { FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().optional(),
	socialLinks: z.object({
		twitter: z.string().url("Invalid URL").optional(),
		website: z.string().url("Invalid URL").optional(),
		youtube: z.string().url("Invalid URL").optional(),
		instagram: z.string().url("Invalid URL").optional(),
		medium: z.string().url("Invalid URL").optional(),
		snapchat: z.string().url("Invalid URL").optional(),
	}),
});

const gradientColors = [
	"bg-gradient-to-t from-indigo-300 via-purple-300 to-pink-300",
	"bg-gradient-to-t from-green-200 to-blue-300",
	"bg-gradient-to-t from-yellow-200 to-red-300",
	"bg-gradient-to-t from-blue-400 to-green-300",
	"bg-gradient-to-t from-pink-300 via-red-300 to-yellow-300",
	"bg-gradient-to-t from-red-300 to-yellow-300",
	"bg-gradient-to-t from-blue-300 to-indigo-400",
	"bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-200",
	"bg-gradient-to-t from-green-300 to-purple-200",
	"bg-gradient-to-t from-orange-200 to-red-200",
	"bg-gradient-to-t from-indigo-400 to-purple-300",
	"bg-gradient-to-t from-gray-900 to-gray-700",
	"bg-gradient-to-l from-gray-900 to-gray-700",
	"bg-gradient-to-l from-gray-200 to-gray-100",
	"bg-gradient-to-b from-pink-200 to-pink-400",
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
	const [backgroundColor, setBackgroundColor] = useState("#FFFFF");
	const [selectedGradient, setSelectedGradient] = useState("");
	const [backgroundOpacity, setBackgroundOpacity] = useState(100);
	const [order, setOrder] = useState("flex-col");
	const [avatar, setAvatar] = useState(null);
	const [detail, setDetail] = useState({
		name: "",
		description: "",
	});
	const [socialLinks, setSocialLinks] = useState({
		twitter: "",
		website: "",
		youtube: "",
		instagram: "",
		medium: "",
		snapchat: "",
	});

	const validate = () => {
		try {
			schema.parse({
				name: detail.name,
				description: detail.description,
				socialLinks: socialLinks,
			});
			setErrors({});
			return true;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const newErrors = error.format();
				setErrors(newErrors);
			}
			return false;
		}
	};

	const handleAvatarChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setAvatar(URL.createObjectURL(file));
		}
	};

	const handleSocialLinkChange = (platform, value) => {
		setSocialLinks((prevLinks) => ({
			...prevLinks,
			[platform]: value,
		}));
	};

	const handleDetailChange = (platform, value) => {
		setDetail((prevLinks) => ({
			...prevLinks,
			[platform]: value,
		}));
	};

	const hexToRgba = (hex, opacity) => {
		hex = hex.replace("#", "");
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	};

	function getCustomStyle() {
		if (backgroundColor) {
			return {
				backgroundColor: hexToRgba(
					backgroundColor,
					Number(backgroundOpacity) / 100
				),
			};
		} else if (selectedGradient) {
			return {
				background: selectedGradient,
			};
		}
	}

	console.log(backgroundColor);
	return (
		<div className="p-6 h-screen w-full relative">
			<Box
				className={`w-1/3 mx-auto h-full mb-6 overflow-scroll flex items-center shadow-2xl justify-center text-white text-xl font-bold border-4 border-black ring-offset-4`}
				style={getCustomStyle()}
				sx={{ borderRadius: "20px" }}
			>
				<div className="flex justify-center items-center h-full w-full flex-col">
					<div className="md:w-full mx-auto">
						{avatar && (
							<img
								src={avatar}
								alt="User Avatar"
								className="w-20 h-20 mx-auto rounded-full"
							/>
						)}
						<div>
							<p className="text-center text-3xl text-gray-600">
								{detail.name ? detail.name : "Shrey Vijayvargiya"}
							</p>
							<p className="text-center text-md text-gray-500 my-2">
								{detail.description ? detail.description : null}
							</p>
						</div>
						<div
							className={`flex justify-start items-center ${order} gap-2 my-10 sm:flex-wrap xs:flex-wrap xxs:flex-wrap sm:justify-center xxs:justify-center xs:justify-center`}
						>
							{socialLinks.twitter && (
								<span className="group relative bg-indigo-50 hover:underline my-1 cursor-pointer hover:px-6 px-4 duration-100 transition-all ease-in-out hover:bg-indigo-50 rounded-full hover:rounded-xl py-2 gap-2 flex justify-start items-center">
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
									<a
										href={socialLinks.twitter}
										target="_blank"
										rel="noopener noreferrer"
										className="text-indigo-500 hover:underline"
									>
										Twitter
									</a>
								</span>
							)}
							{socialLinks.website && (
								<span className="group bg-orange-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-orange-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<Laptop2Icon color={colors.orange[600]} size={20} />
									</span>
									<a
										href={socialLinks.website}
										target="_blank"
										rel="noopener noreferrer"
										className="text-orange-500 hover:underline"
									>
										Website
									</a>
								</span>
							)}
							{socialLinks.youtube && (
								<span className="group bg-red-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-red-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<FaYoutube color={colors.red[600]} />
									</span>
									<a
										href={socialLinks.youtube}
										target="_blank"
										rel="noopener noreferrer"
										className="text-red-500 hover:underline"
									>
										YouTube
									</a>
								</span>
							)}
							{socialLinks.instagram && (
								<span className="group bg-pink-50 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-pink-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<FaInstagram color={colors.pink[600]} />
									</span>
									<a
										href={socialLinks.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-pink-500 hover:underline"
									>
										Instagram
									</a>
								</span>
							)}
							{socialLinks.medium && (
								<span className="group bg-green-50 hover:translate-x-4 my-1 cursor-pointer hover:px-6 px-4 hover:underline duration-100 transition-all ease-in-out hover:bg-green-50 rounded-full py-2 gap-1 flex justify-start items-center">
									<span className="cursor-pointer transition-all duration-100">
										<RssIcon color={colors.green[600]} size={20} />
									</span>
									<a
										href={socialLinks.medium}
										target="_blank"
										rel="noopener noreferrer"
										className="text-green-500 hover:underline"
									>
										Medium
									</a>
								</span>
							)}
						</div>
					</div>
				</div>
			</Box>

			<div
				className="fixed top-10 left-10 w-96 overflow-x-scroll"
				style={{ scrollbarWidth: 0 }}
			>
				<div className="rounded-md border border-gray-400 max-h-96 overflow-y-scroll my-4 p-4">
					<Text className="mb-2 text-gray-600 text-lg">Personal Details</Text>
					<Button fullWidth variant="outline" color="dark" component="label">
						Upload Avatar
						<input
							type="file"
							accept="image/*"
							onChange={handleAvatarChange}
							hidden
						/>
					</Button>
					<TextInput
						my="xs"
						placeholder="Add Name"
						color="dark"
						value={detail.name}
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						onChange={(e) => handleDetailChange("name", e.target.value)}
					/>
					<Textarea
						my="xs"
						placeholder="Add description"
						value={detail.description}
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						onChange={(e) => handleDetailChange("description", e.target.value)}
					/>

					<TextInput
						mt="md"
						placeholder="Twitter Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						value={socialLinks.twitter}
						onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Website Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						value={socialLinks.website}
						onChange={(e) => handleSocialLinkChange("website", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="YouTube Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						value={socialLinks.youtube}
						onChange={(e) => handleSocialLinkChange("youtube", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Instagram Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						value={socialLinks.instagram}
						onChange={(e) =>
							handleSocialLinkChange("instagram", e.target.value)
						}
					/>
					<TextInput
						mt="md"
						placeholder="Medium Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						value={socialLinks.medium}
						onChange={(e) => handleSocialLinkChange("medium", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Snapchat Link"
						classNames={{
							input:
								"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
						}}
						leftIcon={<FaSnapchat />}
						value={socialLinks.snapchat}
						onChange={(e) => handleSocialLinkChange("snapchat", e.target.value)}
					/>
				</div>
			</div>
			<div className="fixed top-10 right-10 max-w-lg">
				<div className="w-full mx-auto p-4 max-h-96 overflow-y-scroll border border-gray-200 rounded-xl">
					<p className="text-gray-600">Background Gradients</p>
					<div className="flex flex-wrap justify-start items-center gap-2 my-2">
						{gradientColors.map((gradient) => (
							<div
								key={gradient}
								style={{ background: gradient, borderRadius: 1000 }}
							>
								<Button
									fullWidth
									variant="unstyled"
									className={`h-12 w-12 rounded-full hover:w-14 hover:h-14 transition-all duration-200 ${gradient}`}
									sx={{
										border:
											selectedGradient === gradient ? "3px solid #000" : "none",
									}}
									onClick={() => setSelectedGradient(gradient)}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="w-full mx-auto p-4 max-h-96 overflow-y-scroll border border-gray-200 rounded-xl my-4">
					<p className="text-gray-600">Background Colors</p>
					<div className="my-2">
						<ColorInput
							value={backgroundColor}
							onChange={(val) => setBackgroundColor(val)}
						/>
					</div>
					<p>Background Opacity</p>
					<input
						type="range"
						id="backgroundOpacity"
						name="backgroundOpacity"
						min="0"
						max="100"
						onChange={(e) => setBackgroundOpacity(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default GradientPreview;
