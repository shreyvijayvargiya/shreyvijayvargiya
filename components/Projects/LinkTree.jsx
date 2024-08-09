import {
	Button,
	createStyles,
	Popover,
	Text,
	TextInput,
	Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import colors from "tailwindcss/colors";
import {
	Linkedin,
	PlusCircleIcon,
	Twitter,
	Youtube,
	Laptop2Icon,
} from "lucide-react";
import { FaMedium } from "react-icons/fa";

const socialLinks = [
	{
		id: 1,
		name: "Twitter",
		label: "Add Twitter link",
		icon: <Twitter size={20} color={colors.indigo[500]} />,
		link: "",
		buttonColor: "indigo",
	},
	{
		id: 2,
		name: "LinkedIn",
		label: "Add LinkedIn link",
		icon: <Linkedin size={20} color={colors.blue[500]} />,
		link: "",
		buttonColor: "blue",
	},
	{
		id: 3,
		name: "Youtube",
		label: "Add Youtube link",
		icon: <Youtube size={20} color={colors.red[500]} />,
		link: "",
		buttonColor: "red",
	},
	{
		id: 4,
		name: "Medium",
		label: "Add Medium link",
		icon: <FaMedium size={20} color={colors.black} />,
		link: "",
		buttonColor: "dark",
	},
	{
		id: 5,
		name: "Website",
		label: "Add Website or External link",
		icon: <Laptop2Icon size={20} color={colors.pink[500]} />,
		link: "",
		buttonColor: "pink",
	},
];
const initialNewLink = {
	id: 1,
	name: "",
	label: "",
	icon: <PlusCircleIcon size={20} color={colors.black} />,
	buttonColor: "dark",
	link: "",
};

const LinkTreeComponent = () => {
	const { classes } = useStyles();

	const [links, setLinks] = useState(socialLinks);
	const [linkValue, setLinkValue] = useState({ id: "", value: "" });

	const handleSocialMediaLinkUpdate = async (id, value) => {
		setShowPopover({ showLinkPopver: false, showAddButtonPopver: false });
		setLinks((prevLinks) =>
			prevLinks.map((link) =>
				link.id === id ? { ...link, link: value } : link
			)
		);
	};

	const [showPopover, setShowPopover] = useState({
		showLinkPopver: false,
		showAddButtonPopver: false,
	});

	const [popover, setPopover] = useState({
		id: null,
		button: false,
	});

	const [userProfile, setUserProfile] = useState({
		name: "",
		description: "",
		bannerImage: "",
	});
	return (
		<div className="">
			<div className="mx-auto">
				<div className={classes.container}>
					<div
						className={`${classes.body} flex justify-center gap-10 items-start min-h-screen w-full`}
					>
						<div className="h-full border-r border-gray-200 xxl:w-1/4 md:w-1/3 sm:w-1/3 bg-gray-50 p-20 min-h-screen">
							<div
								className="border-4 border-gray-100 min-h-screen max-w-xs bg-white relative"
								style={{ minHeight: "80dvh", borderRadius: 36 }}
							>
								<div
									className="flex flex-col items-start justify-start py-20 px-10 "
									style={{ backgroundColor: "" }}
								>
									<div className="my-2">
										{userProfile.bannerImage && (
											<img
												src={userProfile.bannerImage}
												alt="Uploaded"
												className="w-32 h-32 rounded-md"
											/>
										)}
									</div>
									<div className="my-2">
										{userProfile.name && (
											<Text size="xl" mt="xs">
												{userProfile.name}
											</Text>
										)}
										{userProfile.description && (
											<Text size="sm">{userProfile.description}</Text>
										)}
									</div>
									<div className="flex flex-col w-full">
										{links.map((item) => (
											<div
												key={item.id}
												className={`flex items-center p-2 hover:underline hover:border border-black hover:rounded-full rounded my-1 w-full`}
											>
												{item.icon}
												<a
													href={`https://${item.link}`}
													target="_blank"
													prefix="https://"
													rel="noopener noreferrer"
													className="ml-2"
												>
													{item.name}
												</a>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="mx-auto xxl:w-1/3 md:w-1/2 md:px-10 md:py-20">
							<Text size="lg" my="sm">
								Create Social Profile
							</Text>
							<div className="">
								{userProfile.bannerImage ? (
									<div>
										<img
											src={userProfile.bannerImage}
											className="w-40 h-40 rounded-md"
										/>
										<Button
											size="xs"
											variant="outline"
											my="xs"
											color="red"
											onClick={() => {
												setUserProfile((prevState) => ({
													...prevState,
													bannerImage: null,
												}));
											}}
										>
											Remove
										</Button>
									</div>
								) : (
									<TextInput
										type="file"
										onChange={(e) => {
											const file = e.target.files[0];
											if (file) {
												try {
													const createURLObj = URL.createObjectURL(file);
													setUserProfile((prevState) => ({
														...prevState,
														bannerImage: createURLObj,
													}));
												} catch (error) {
													console.error("Error creating object URL:", error);
												}
											} else {
												console.error(
													"No file selected or file object is invalid"
												);
											}
										}}
										accept="image/jpeg, image/png, img/jpeg, img/png, img/svg, image/svg, png, svg, jpeg"
										variant="outline"
										size="xs"
										color="dark"
										label="Add image"
									/>
								)}
								<TextInput
									size="sm"
									label="Enter name"
									placeholder="Enter your name"
									classNames={{
										input:
											"border-black border focus:bg-gray-50 p-2 focus:outline-none",
									}}
									className="focus:outline-none outline-none"
									onChange={(e) => {
										const val = e.target.value;
										setUserProfile((prevState) => ({
											...prevState,
											name: val,
										}));
									}}
									my="xs"
									value={userProfile.name}
								/>
								<Textarea
									minRows={4}
									size="sm"
									label="Enter your description"
									placeholder="Tell us about yourself"
									className="focus:outline-none outline-none"
									classNames={{
										input:
											"border-black border focus:bg-gray-50 p-2 focus:outline-none",
									}}
									onChange={(e) => {
										const val = e.target.value;
										setUserProfile((prevState) => ({
											...prevState,
											description: val,
										}));
									}}
									my="xs"
									value={userProfile.description}
								/>
								<Text size="sm">Add social media links</Text>
								{links.map((item) => {
									return (
										<div key={item.id} className="my-4">
											<Popover
												width={300}
												position="bottom"
												withArrow
												onClose={() => {
													setShowPopover({
														showLinkPopver: false,
														showAddButtonPopver: false,
													});
													setPopover({ id: null, button: false });
												}}
												opened={popover.id === item.id}
												target={
													<Button
														color={item.buttonColor ? item.buttonColor : "dark"}
														size="xs"
														onClick={() => {
															setPopover((prevState) => ({
																...prevState,
																id: item.id,
															}));
														}}
														variant="outline"
														leftIcon={item?.icon}
													>
														{item?.name}
													</Button>
												}
												shadow="md"
											>
												<div>
													<Text size="sm">{item?.label}</Text>
													<TextInput
														color="dark"
														variant="default"
														onChange={(e) => {
															const val = e.target.value;
															setLinkValue({ id: item.id, value: val });
														}}
														classNames={{
															input:
																"focus:border focus:border-black outline-none",
														}}
														size="xs"
														placeholder={item?.label}
														value={
															item.id === linkValue.id
																? linkValue.value
																: item.link
														}
													/>
													<Button
														onClick={() =>
															handleSocialMediaLinkUpdate(
																item?.id,
																item.id === linkValue.id
																	? linkValue.value
																	: null
															)
														}
														variant="filled"
														color={"dark"}
														size="xs"
														my="xs"
														fullWidth
													>
														Submit
													</Button>
												</div>
											</Popover>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LinkTreeComponent;

const useStyles = createStyles((theme) => ({
	container: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		minHeight: "100vh",
	},
	body: {
		height: "100%",
		width: "100%",
		overflowY: "scroll",
	},
	contentContainer: {
		"&> p > a": {
			color: colors.indigo[600],
			textDecoration: "underline",
			fontWeight: 700,
			"&:hover": {
				color: colors.indigo[600],
			},
		},
		"&> ul >li > a": {
			color: colors.indigo[600],
			textDecoration: "underline",
			"&:hover": {
				color: colors.indigo[800],
			},
		},
	},
}));
