import React, { useState, useRef } from "react";
import {
	Button,
	Box,
	Text,
	TextInput,
	Textarea,
	ColorInput,
	Select,
	Divider,
	Modal,
} from "@mantine/core";
import colors from "tailwindcss/colors";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	Laptop2Icon,
	LogOut,
	PanelLeftClose,
	PanelRightClose,
	RssIcon,
	User,
} from "lucide-react";
import {
	FaFontAwesome,
	FaGoogle,
	FaInstagram,
	FaLaptop,
	FaMedium,
	FaSnapchat,
	FaTextWidth,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { z } from "zod";
import { IoLogIn } from "react-icons/io5";

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
	"linear-gradient(to top, #d3d7f2, #caa0e2, #f9a7b2)",
	"linear-gradient(to top, #d1f8d0, #a0d3f5)",
	"linear-gradient(to top, #fef8c5, #f88c8c)",
	"linear-gradient(to top, #3f92f2, #a4d3a2)",
	"linear-gradient(to top, #fcb5d4, #f9716e, #f4e5a5)",
	"linear-gradient(to top, #f9716e, #f4e5a5)",
	"linear-gradient(to top, #a2c3f9, #4b68f7)",
	"linear-gradient(to top, #fcb5d4, #9b4cce, #8ac4f0)",
	"linear-gradient(to top, #9fdf9f, #c7a8e4)",
	"linear-gradient(to top, #f6b737, #f63e4d)",
	"linear-gradient(to top, #5b3f8a, #cda7e0)",
	"linear-gradient(to left, #1e1e1e, #3f3f3f)",
	"linear-gradient(to left, #e0e0e0, #f5f5f5)",
	"linear-gradient(to bottom, #fbd3e9, #f97877)",
	"linear-gradient(to right, #fbd3e9, #f8a3a3, #f7e33d)",
	"linear-gradient(to right, #d1f2e7, #a3f3d3, #9bb9f1)",
	"linear-gradient(to right, #fef9d9, #f86a6a)",
	"linear-gradient(to right, #b3cde8, #5b8fce)",
	"linear-gradient(to right, #fbd3e9, #c2a2f1, #8c7cf4)",
	"linear-gradient(to right, #f3a26f, #f87c6f, #fef5a2)",
	"linear-gradient(to right, #b9d6b1, #82c7c7, #4a7f98)",
	"linear-gradient(to right, #e0e0e0, #d0d0d0, #c0c0c0)",
];

const fontSizeOptions = [
	{ value: "10", label: "10px" },
	{ value: "11", label: "11px" },
	{ value: "12", label: "12px" },
	{ value: "14", label: "14px" },
	{ value: "15", label: "15px" },
	{ value: "16", label: "16px" },
	{ value: "18", label: "18px" },
	{ value: "20", label: "20px" },
	{ value: "24", label: "24px" },
	{ value: "28", label: "28px" },
	{ value: "32", label: "32px" },
	{ value: "36", label: "36px" },
	{ value: "40", label: "40px" },
	{ value: "44", label: "44px" },
	{ value: "48", label: "48px" },
	{ value: "60", label: "60px" },
	{ value: "64", label: "64px" },
	{ value: "72", label: "72px" },
	{ value: "84", label: "84px" },
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
	const profileRef = useRef(null);
	const [styles, setStyles] = useState({
		nameFontColor: "",
		descriptionFontColor: "",
		fontStyle: "",
		nameFontSize: "",
		descriptionFontSize: "",
		align: "",
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

	const gridlines = [];
	for (let i = 0; i < 20; i++) {
		gridlines.push(i);
	}

	const [showLeftBar, setShowLeftBar] = useState(true);
	const [showRightBar, setShowRightBar] = useState(true);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const [loginLoader, setLoginLoader] = useState(false);
	const [loginModal, setLoginModal] = useState(false);

	return (
		<div className="p-6 h-screen w-full relative">
			<div className="fixed w-full h-full" style={{ zIndex: -10 }}>
				<div className="fixed top-0 bottom-0 left-0 right-0 flex justify-between items-center h-screen w-full z-0">
					{gridlines.map((item) => (
						<div
							key={item}
							className="w-0.5 h-full bg-gray-200 bg-opacity-10"
						/>
					))}
					<div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-between items-center h-screen w-full z-0">
						{gridlines.map((item) => (
							<div
								key={item}
								className="w-full h-0.5 bg-gray-200 bg-opacity-10"
							/>
						))}
					</div>
				</div>
			</div>
			<Box
				className={`mx-auto my-14 overflow-scroll flex items-center justify-center shadow-md text-white text-xl font-bold border-4 border-black ring-offset-4 resize-x max-w-7xl min-w-1/4`}
				style={getCustomStyle()}
				sx={{
					borderRadius: "40px",
					zIndex: 100,
					height: "80vh",
					width: "25vw",
				}}
				ref={profileRef}
			>
				<div className="flex justify-center items-center h-full w-full flex-col">
					<div className="md:w-full mx-auto">
						{avatar && (
							<img
								src={avatar}
								alt="User Avatar"
								className="w-40 h-40 mx-auto rounded-full object-cover my-10 hover:w-44 hover:h-44 transition-all duration-300 ease-in"
							/>
						)}
						<div>
							<p
								className="text-center"
								style={{
									color: styles.nameFontColor,
									fontSize: styles.nameFontSize + "px",
								}}
							>
								{detail.name ? detail.name : "Shrey Vijayvargiya"}
							</p>
							<p
								className="text-center text-gray-500 my-6"
								style={{
									color: styles.descriptionFontColor,
									fontSize: styles.descriptionFontSize + "px",
								}}
							>
								{detail.description ? detail.description : null}
							</p>
						</div>
						<div
							className={`flex justify-start items-center flex-col gap-2 my-10 sm:flex-wrap xs:flex-wrap xxs:flex-wrap sm:justify-center xxs:justify-center xs:justify-center`}
						>
							{socialLinks.twitter && (
								<a
									href={`https://${socialLinks.twitter}`}
									target="_blank"
									rel="noopener noreferrer"
									className="group relative bg-indigo-50 my-1 cursor-pointer hover:px-10 px-4 duration-100 transition-all ease-in-out hover:bg-indigo-50 hover:rounded-full rounded-xl py-2 gap-2 flex justify-start items-center"
								>
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
									<p className="text-indigo-500 group-hover:underline">
										Twitter
									</p>
								</a>
							)}
							{socialLinks.website && (
								<a
									href={`https://${socialLinks.website}`}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-orange-50 my-1 cursor-pointer hover:px-10 px-4 duration-100 transition-all ease-in-out hover:bg-orange-50 hover:rounded-full rounded-xl py-2 gap-1 flex justify-start items-center"
								>
									<span className="cursor-pointer transition-all duration-100">
										<Laptop2Icon color={colors.orange[600]} size={20} />
									</span>
									<p className="text-orange-500 group-hover:underline">
										Website
									</p>
								</a>
							)}
							{socialLinks.youtube && (
								<a
									href={`https://${socialLinks.youtube}`}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-red-50 my-1 cursor-pointer hover:px-10 px-4  duration-100 transition-all ease-in-out hover:bg-red-50 hover:rounded-full rounded-xl py-2 gap-1 flex justify-start items-center"
								>
									<span className="cursor-pointer transition-all duration-100">
										<FaYoutube color={colors.red[600]} />
									</span>
									<p className="text-red-500 group-hover:underline">YouTube</p>
								</a>
							)}
							{socialLinks.instagram && (
								<a
									href={`https://${socialLinks.instagram}`}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-pink-50 my-1 cursor-pointer hover:px-10 px-4  duration-100 transition-all ease-in-out hover:bg-pink-50 hover:rounded-full rounded-xl py-2 gap-1 flex justify-start items-center"
								>
									<span className="cursor-pointer transition-all duration-100">
										<FaInstagram color={colors.pink[600]} />
									</span>
									<p className="text-pink-500 group-hover:underline">
										Instagram
									</p>
								</a>
							)}
							{socialLinks.medium && (
								<a
									href={socialLinks.medium}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-blue-50 hover:translate-x-4 my-1 cursor-pointer hover:px-10 px-4  duration-100 transition-all ease-in-out hover:bg-green-50 hover:rounded-full rounded-xl py-2 gap-1 flex justify-start items-center"
								>
									<span className="cursor-pointer transition-all duration-100">
										<RssIcon color={colors.blue[600]} size={20} />
									</span>
									<p className="text-blue-500 group-hover:underline">Medium</p>
								</a>
							)}
							{socialLinks.snapchat && (
								<a
									href={socialLinks.snapchat}
									target="_blank"
									rel="noopener noreferrer"
									className="group bg-green-50 hover:translate-x-4 my-1 cursor-pointer hover:px-10 px-4  duration-100 transition-all ease-in-out hover:bg-green-50 hover:rounded-full rounded-xl py-2 gap-1 flex justify-start items-center"
								>
									<span className="cursor-pointer transition-all duration-100">
										<RssIcon color={colors.green[600]} size={20} />
									</span>
									<p className="text-green-500 group-hover:underline">
										Snapchat
									</p>
								</a>
							)}
						</div>
					</div>
				</div>
			</Box>

			<div
				className={`fixed top-2 left-2 bottom-2 rounded-xl overflow-y-scroll border border-gray-300 bg-white shadow-xl w-1/6 ${
					showLeftBar ? "w-1/6 py-4" : "w-20 h-14 py-1"
				} transition-all duration-300 ease-in `}
				style={{ scrollbarWidth: 0 }}
			>
				<div className="flex justify-between items-center w-full py-1 px-4">
					<p className="text-2xl font-mono font-semibold">Profiler</p>
					<button
						onClick={() => setShowLeftBar(!showLeftBar)}
						className="text-gray-500 hover:bg-gray-100 hover:bg-opacity-50 rounded-md p-2"
					>
						{showLeftBar ? <PanelLeftClose /> : <PanelRightClose />}
					</button>
				</div>
				{showLeftBar && <Divider className="mt-4" color={colors.gray[200]} />}
				<div
					className={`rounded-md my-4 px-4 ${
						showLeftBar ? "opacity-100 h-full" : "opacity-0 h-0"
					} transition-all duration-300 ease-in`}
				>
					<Text className="mb-2 text-gray-600 text-lg">Personal Details</Text>
					<Button
						fullWidth
						variant="outline"
						leftIcon={<User size="18" />}
						color="gray"
						component="label"
						className="flex justify-start items-center px-2 text-gray-400 border border-gray-200"
					>
						Add image
						<input
							type="file"
							accept="image/*"
							className="border border-gray-200"
							onChange={handleAvatarChange}
							hidden
						/>
					</Button>
					<TextInput
						my="xs"
						placeholder="Add Name"
						icon={<FaFontAwesome />}
						color="dark"
						value={detail.name}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						onChange={(e) => handleDetailChange("name", e.target.value)}
					/>
					<Textarea
						my="xs"
						placeholder="Add description"
						icon={<FaTextWidth />}
						value={detail.description}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						onChange={(e) => handleDetailChange("description", e.target.value)}
					/>

					<TextInput
						mt="md"
						placeholder="Twitter Link"
						icon={<FaTwitter />}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						value={socialLinks.twitter}
						onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Website Link"
						icon={<FaLaptop />}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						value={socialLinks.website}
						onChange={(e) => handleSocialLinkChange("website", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="YouTube Link"
						icon={<FaYoutube />}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						value={socialLinks.youtube}
						onChange={(e) => handleSocialLinkChange("youtube", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Instagram Link"
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						icon={<FaInstagram />}
						value={socialLinks.instagram}
						onChange={(e) =>
							handleSocialLinkChange("instagram", e.target.value)
						}
					/>
					<TextInput
						mt="md"
						placeholder="Medium Link"
						icon={<FaMedium />}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						value={socialLinks.medium}
						onChange={(e) => handleSocialLinkChange("medium", e.target.value)}
					/>
					<TextInput
						mt="md"
						placeholder="Snapchat Link"
						icon={<FaSnapchat />}
						classNames={{
							input:
								"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
						}}
						leftIcon={<FaSnapchat />}
						value={socialLinks.snapchat}
						onChange={(e) => handleSocialLinkChange("snapchat", e.target.value)}
					/>
				</div>
			</div>
			<div
				className={`fixed top-2 right-2 bottom-2 max-w-sm max-h-screen border border-gray-200 shadow-xl bg-white rounded-xl overflow-y-scroll ${
					showRightBar ? "w-full py-4" : "w-84 h-14 py-2"
				} transition-all duration-300 ease-in `}
			>
				<div className="flex justify-between items-center w-full px-2">
					<p className="text-xl font-mono font-semibold">Customisation</p>
					<button
						onClick={() => setShowRightBar(!showRightBar)}
						className="text-gray-500 hover:bg-gray-100 hover:bg-opacity-50 rounded-md p-2"
					>
						{showRightBar ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</button>
				</div>
				{showRightBar && <Divider className="mt-4" color={colors.gray[200]} />}
				<div className="p-4">
					<div
						className={`w-full mx-auto p-4 border border-gray-200 rounded-xl bg-white ${
							showRightBar ? "opacity-100 max-h-84" : "opacity-0 h-0"
						} transition-all duration-300 ease-in}`}
					>
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
										className={`w-10 h-10 rounded-full hover:w-12 hover:h-12 transition-all duration-200 ${gradient}`}
										sx={{
											border:
												selectedGradient === gradient
													? "3px solid #000"
													: "none",
										}}
										onClick={() => {
											setSelectedGradient(gradient);
											setBackgroundColor("");
										}}
									/>
								</div>
							))}
						</div>
					</div>
					<div
						className={`w-full mx-auto p-4 border border-gray-200 rounded-xl my-4 bg-white ${
							showRightBar ? "opacity-100" : "opacity-0"
						} transition-all duration-300 ease-in}`}
					>
						<p className="text-gray-600">Background Color & Opacity</p>
						<div className="my-2 flex justify-start items-center gap-2">
							<ColorInput
								value={backgroundColor}
								placeholder="Select background color"
								onChange={(val) => setBackgroundColor(val)}
							/>
							<TextInput
								size="sm"
								placeholder="Background opacity"
								rightSection={<p className="text-gray-500">%</p>}
								classNames={{
									input:
										"border border-gray-200 outline-none focus:outline-none focus:border-2 focus:border-gray-400 hover:bg-gray-50 text-gray-500",
								}}
								value={backgroundOpacity.toString()}
								onChange={(e) => {
									setBackgroundOpacity(Number(e.target.value));
								}}
							/>
						</div>
						<div className="my-4">
							<p>Name styles</p>
							<div className="flex justify-start items-center gap-2">
								<ColorInput
									value={styles.nameFontColor}
									placeholder="Select color"
									onChange={(val) => {
										setStyles((prevState) => ({
											...prevState,
											nameFontColor: val,
										}));
									}}
								/>
								<Select
									placeholder="select size"
									value={styles.nameFontSize}
									onChange={(val) => {
										setStyles((prevState) => ({
											...prevState,
											nameFontSize: val,
										}));
									}}
									data={fontSizeOptions}
								/>
							</div>
						</div>
						<div className="my-4">
							<p>Description styles</p>
							<div className="flex justify-start items-center gap-2">
								<ColorInput
									value={styles.descriptionFontColor}
									placeholder="Select color"
									onChange={(val) => {
										setStyles((prevState) => ({
											...prevState,
											descriptionFontColor: val,
										}));
									}}
								/>
								<Select
									placeholder="Choose size"
									value={styles.descriptionFontSize}
									onChange={(val) => {
										setStyles((prevState) => ({
											...prevState,
											descriptionFontSize: val,
										}));
									}}
									data={fontSizeOptions}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed top-3 left-0 right-0 bg-white bg-opacity-80 w-96 mx-auto p-3 border border-gray-200 rounded-md shadow-xl ">
				<div className="flex justify-between items-center gap-2">
					{!isUserLoggedIn ? <p>Profiler</p> : "John Doe"}
					{isUserLoggedIn ? (
						<Button
							onClick={() => {
								setLoginLoader(true);
								setTimeout(() => {
									setLoginLoader(false);
									setIsUserLoggedIn(false);
								}, 500);
							}}
							size="xs"
							loading={loginLoader}
							radius="md"
							color="red"
							leftIcon={<LogOut size={18} />}
						>
							Logout
						</Button>
					) : (
						<Button
							color="gray"
							variant="outline"
							size="xs"
							leftIcon={<IoLogIn size={18} />}
							onClick={() => {
								setLoginModal(true);
							}}
						>
							Login
						</Button>
					)}
				</div>
			</div>

			<Modal
				opened={loginModal}
				centered
				classNames={{ header: "hidden" }}
				onClose={() => setLoginModal(false)}
			>
				<div>
					<h2 className="text-xl font-semibold text-gray-800">
						Welcome to Profiler
					</h2>
					<p className="text-gray-600 mt-2">
						Please google login to continue using our services and accepting the
						policies and terms.{" "}
					</p>
					<Button
						onClick={() => {
							setLoginLoader(true);
							setTimeout(() => {
								setIsUserLoggedIn(true);
								setLoginLoader(false);
								setLoginModal(false);
							}, 500);
						}}
						fullWidth
						my="md"
						size="md"
						radius="md"
						color="dark"
						loading={loginLoader}
						leftIcon={<FaGoogle size={18} />}
						sx={{
							"&:hover": {
								backgroundColor: colors.bgBlack,
								transform: "scale(1.02)",
								transition: "transform 0.2s ease-in-out",
							},
							transition: "transform 0.2s ease-in-out",
						}}
					>
						Google Login
					</Button>
				</div>
			</Modal>
		</div>
	);
};

export default GradientPreview;
