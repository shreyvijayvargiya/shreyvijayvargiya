import React, { useState } from "react";
import {
	Button,
	Box,
	Text,
	TextInput,
	Textarea,
	Accordion,
	AccordionItem,
} from "@mantine/core";
import colors from "tailwindcss/colors";
import { Laptop2Icon, Palette, RssIcon, TypeOutline } from "lucide-react";
import { FaInstagram, FaSnapchat, FaYoutube } from "react-icons/fa";

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

	return (
		<div className="p-6 h-screen w-full relative">
			<Box
				className={`w-1/3 mx-auto h-full mb-6 overflow-scroll flex items-center shadow-2xl justify-center text-white text-xl font-bold ${selectedGradient}`}
				sx={{ borderRadius: "10px" }}
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
				<Accordion
					className="rounded-md border border-gray-400 max-h-96 overflow-y-scroll"
					classNames={{ itemTitle: "border-b border-gray-400" }}
				>
					<Accordion.Item label="Add your profile" icon={<TypeOutline />}>
						<Text className="mb-2 font-medium text-lg">Profile Setup</Text>
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
							onChange={(e) =>
								handleDetailChange("description", e.target.value)
							}
						/>

						<TextInput
							mt="md"
							placeholder="Twitter Link"
							classNames={{
								input:
									"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
							}}
							value={socialLinks.twitter}
							onChange={(e) =>
								handleSocialLinkChange("twitter", e.target.value)
							}
						/>
						<TextInput
							mt="md"
							placeholder="Website Link"
							classNames={{
								input:
									"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
							}}
							value={socialLinks.website}
							onChange={(e) =>
								handleSocialLinkChange("website", e.target.value)
							}
						/>
						<TextInput
							mt="md"
							placeholder="YouTube Link"
							classNames={{
								input:
									"border border-black outline-none focus:outline-none focus:border-2 focus:border-black hover:bg-gray-100",
							}}
							value={socialLinks.youtube}
							onChange={(e) =>
								handleSocialLinkChange("youtube", e.target.value)
							}
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
							onChange={(e) =>
								handleSocialLinkChange("snapchat", e.target.value)
							}
						/>
					</Accordion.Item>
					<Accordion.Item label="Choose a gradient" icon={<Palette />}>
						<div className="flex w-full mx-auto justify-start items-center gap-2 flex-wrap py-2">
							{gradientColors.map((gradient) => (
								<div key={gradient}>
									<Button
										fullWidth
										variant="unstyled"
										className={`h-12 w-12 rounded-xl hover:w-14 hover:h-14 transition-all duration-200 ${gradient}`}
										sx={{
											borderRadius: "10px",
											border:
												selectedGradient === gradient
													? "3px solid #000"
													: "none",
										}}
										onClick={() => setSelectedGradient(gradient)}
									/>
								</div>
							))}
						</div>
					</Accordion.Item>
				</Accordion>
			</div>
		</div>
	);
};

export default GradientPreview;
