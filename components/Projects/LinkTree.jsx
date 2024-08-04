import {
	Button,
	createStyles,
	Popover,
	Text,
	TextInput,
	Select,
} from "@mantine/core";
import React, { useState } from "react";
import colors from "tailwindcss/colors";
import {
	Laptop2,
	Linkedin,
	PlusCircleIcon,
	Twitter,
	Youtube,
	Laptop2Icon,
} from "lucide-react";
import { FaMedium } from "react-icons/fa";
import IconSelect from "./IconSelect";

const LinkTreeComponent = () => {
	const { classes } = useStyles();

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

	const [links, setLinks] = useState(socialLinks);
	const [linkValue, setLinkValue] = useState({ id: "", value: "" });
	const initialNewLink = {
		id: links?.length + 1,
		name: "",
		label: "",
		icon: <PlusCircleIcon size={20} color={colors.black} />,
		buttonColor: "dark",
		link: "",
	};
	const [newLink, setNewLink] = useState(initialNewLink);

	const handleSocialMediaLinkUpdate = async (id, value) => {
		setLinks((prevLinks) =>
			prevLinks.map((link) =>
				link.id === id ? { ...link, link: value } : link
			)
		);
	};

	const [showLinkPopver, setLinkPopover] = useState(null);
	const [showButtonPopover, setShowButtonPopover] = useState(null);

	const [popover, setPopover] = useState({
		id: null,
		button: false,
	});
	return (
		<div className="px-4 bg-white">
			<div className="rounded-md md:w-full lg:w-1/3 mx-auto sm:w-full xxs:w-full xs:w-full">
				<div className={classes.container}>
					<div
						className={`${classes.body} py-20 px-10 flex justify-center items-center min-h-screen `}
					>
						<div>
							<div className="flex flex-wrap justify-start items-center gap-4">
								{links.map((item) => {
									return (
										<div key={item.id}>
											<Popover
												width={300}
												position="bottom"
												withArrow
												onClose={() => setPopover({ id: null, button: false })}
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
															handleSocialMediaLinkUpdate({
																id: item?.id,
																value: val,
															});
														}}
														classNames={{
															input:
																"focus:border focus:border-black outline-none",
														}}
														size="xs"
														placeholder={item?.label}
														value={item?.link}
													/>
													<Button
														onClick={() =>
															handleSocialMediaLinkUpdate(item?.id)
														}
														variant="filled"
														color={
															item?.buttonColor ? item?.buttonColor : "dark"
														}
														size="xs"
														my="xs"
														fullWidth
													>
														Submit
													</Button>
													<Button
														onClick={() =>
															setLinks(links.filter((el) => el.id !== item.id))
														}
														variant="outline"
														color="dark"
														size="xs"
														my="xs"
														fullWidth
													>
														Delete
													</Button>
												</div>
											</Popover>
										</div>
									);
								})}
								<div>
									<Popover
										width={300}
										opened={showButtonPopover}
										onClose={() => setPopover({ id: null, button: false })}
										target={
											<Button
												color="dark"
												onClick={() => {
													setPopover((prevState) => ({
														...prevState,
														button: true,
													}));
												}}
												leftIcon={<PlusCircleIcon size={18} />}
												variant="outline"
												size="xs"
											>
												Add more
											</Button>
										}
										position="bottom"
										withArrow
										shadow="md"
									>
										<div>
											<Text size="sm">What's this new link is about?</Text>
											<TextInput
												color="dark"
												my="xs"
												variant="default"
												name="name"
												onChange={(e) => {
													const val = e.target.value;
													setNewLink((prevState) => ({
														...prevState,
														name: val,
													}));
												}}
												classNames={{
													input:
														"focus:border focus:border-black outline-none text-black",
												}}
												size="xs"
												placeholder={"Add name"}
												value={newLink?.name}
											/>
											<TextInput
												color="dark"
												variant="default"
												name="label"
												onChange={(e) => {
													const val = e.target.value;
													setNewLink((prevState) => ({
														...prevState,
														label: val,
													}));
												}}
												classNames={{
													input: "focus:border focus:border-black outline-none",
												}}
												size="xs"
												placeholder={"Add label"}
												value={newLink?.label}
												my="xs"
											/>
											<TextInput
												color="dark"
												variant="default"
												name="link"
												onChange={(e) => {
													const val = e.target.value;
													setNewLink((prevState) => ({
														...prevState,
														link: val,
													}));
												}}
												classNames={{
													input: "focus:border focus:border-black outline-none",
												}}
												size="xs"
												my="xs"
												placeholder={"Add link"}
												value={newLink?.link}
											/>
											<Select
												placeholder="Select color"
												size="xs"
												classNames={{
													input: "focus:border focus:border-black outline-none",
												}}
												onChange={(val) => {
													setNewLink((prevState) => ({
														...prevState,
														buttonColor: val,
														icon: (
															<PlusCircleIcon
																size={20}
																color={
																	val === "dark"
																		? colors.black
																		: colors[val][500]
																}
															/>
														),
													}));
												}}
												my="xs"
												data={[
													"dark",
													"red",
													"pink",
													"indigo",
													"teal",
													"green",
													"yellow",
													"orange",
												]}
											/>
											<IconSelect
												getSelectedIconValue={(val) => {
													const NewIcon = (
														<Group position="left" my="xs">
															{React.createElement(val, {
																size: 20,
																color: newLink.buttonColor,
															})}
														</Group>
													);
													setNewLink((prevState) => ({
														...prevState,
														icon: <NewIcon />,
													}));
												}}
											/>
											<Button
												onClick={() => {
													let newState = [...links];
													newState.push(newLink);
													setLinks(newState);
													setNewLink(initialNewLink);
												}}
												variant="filled"
												color={
													newLink?.buttonColor ? newLink?.buttonColor : "dark"
												}
												size="xs"
												my="xs"
												fullWidth
											>
												Submit
											</Button>
										</div>
									</Popover>
								</div>
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
