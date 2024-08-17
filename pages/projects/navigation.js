import { ActionIcon, Avatar, createStyles } from "@mantine/core";
import gsap from "gsap";
import {
	ChevronLeftIcon,
	EllipsisIcon,
	Laptop2Icon,
	PencilIcon,
	PersonStandingIcon,
	PlusCircleIcon,
} from "lucide-react";
import { useState } from "react";
import colors from "tailwindcss/colors";

const NavigationBarPage = () => {
	const [showProperties, setShowProperties] = useState({
		name: false,
		addIcon: true,
		avatar: true,
		description: false,
		descriptionIcon: false,
		ellipsisIcon: false,
		socialLinks: false,
	});
	const { classes } = useStyles();
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div
				className={`${classes.container} flex justify-between items-center px-8 py-4 rounded-full
				transition-opacity shadow-md gap-4 bg-gray-900 text-gray-50`}
			>
				<div
					className={`${
						showProperties.avatar ? "visible" : "hidden"
					} transition-all duration-150 make-transition`}
					onMouseEnter={() => {
						gsap.to(".avatar", { scale: 1.1, yoyo: true });
					}}
					onMouseLeave={() => {
						gsap.to(".avatar", { scale: 0.9, yoyo: true });
					}}
				>
					<ActionIcon variant="unstyled" size={"lg"}>
						<Avatar
							onClick={() => {
								setShowProperties((prevState) => ({
									...prevState,
									name: !showProperties.name,
									addIcon: !showProperties.addIcon,
									descriptionIcon: !showProperties.descriptionIcon,
									description: false,
									ellipsisIcon: !showProperties.ellipsisIcon,
									socialLinks: false,
								}));
							}}
							src="/avatar.png"
							className="rounded-full avatar"
						/>
					</ActionIcon>
				</div>
				<div
					className={`${
						showProperties.name
							? "opacity-100 transform translate-y-0 visible"
							: "opacity-0 transform translate-y-2 hidden"
					} 
					transition-all duration-300 `}
				>
					<div>
						<p>Hello, I am</p>
						<p>Shrey vijayvargiya</p>
					</div>
				</div>
				<div
					className={`${
						showProperties.description ? "visible" : "hidden"
					} make-transition transition-all duration-150`}
				>
					<div
						className="cursor-pointer px-10 py-4 max-w-md"
						onClick={() => {
							setShowProperties((prevState) => ({
								...prevState,
								name: true,
								addIcon: false,
								descriptionIcon: true,
								description: false,
								ellipsisIcon: true,
								socialLinks: false,
								avatar: true,
							}));
						}}
					>
						Hello, I am Shrey, I am software developer with 5 years of
						experience. I've extensive interests in developing products and
						problem solving. My core strength is Frontend development for both
						website and mobile apps.
					</div>
				</div>
				<div
					className={`${
						showProperties.descriptionIcon
							? "visible animate-pulse mx-4"
							: "hidden"
					} make-transition transition-all duration-150`}
				>
					<ActionIcon
						size="md"
						onClick={() => {
							setShowProperties((prevState) => ({
								...prevState,
								name: false,
								avatar: false,
								descriptionIcon: false,
								description: true,
								ellipsisIcon: false,
							}));
						}}
						src="/avatar.png"
						className="rounded-full"
					>
						<div className="bg-green-600 rounded-full p-2 ">
							<PencilIcon color="white" />
						</div>
					</ActionIcon>
				</div>
				<div
					className={`${
						showProperties.ellipsisIcon ? "visible" : "hidden"
					} make-transition transition-all duration-150`}
				>
					<ActionIcon
						onClick={() => {
							setShowProperties((prevState) => ({
								...prevState,
								name: false,
								avatar: false,
								descriptionIcon: false,
								description: false,
								ellipsisIcon: false,
								socialLinks: true,
							}));
						}}
						variant="unstyled"
						src="/avatar.png"
					>
						<div className="bg-indigo-600 rounded-full p-2 animate-spin">
							<EllipsisIcon
								size={24}
								color={colors.gray[50]}
								className="ellipsis-icon"
							/>
						</div>
					</ActionIcon>
				</div>
				<div
					className={`${
						showProperties.addIcon
							? "visible group bg-pink-600 rounded-full"
							: "hidden"
					} make-transition transition-all duration-150`}
					onMouseEnter={() => {
						gsap.to(".add-icon", { rotate: 180, yoyo: true });
					}}
					onMouseLeave={() => {
						gsap.to(".add-icon", { rotate: 0, yoyo: true });
					}}
				>
					<ActionIcon
						variant="unstyled"
						size="lg"
						className="rounded-full"
						onClick={() => {
							setShowProperties((prevState) => ({
								...prevState,
								name: !showProperties.name,
								addIcon: !showProperties.addIcon,
								descriptionIcon: !showProperties.description,
								description: false,
								ellipsisIcon: true,
							}));
						}}
					>
						<PlusCircleIcon color={colors.gray[40]} className="add-icon" />
					</ActionIcon>
				</div>
				<div
					className={`${
						showProperties.socialLinks ? "visible" : "hidden"
					} make-transition transition-all duration-150`}
				>
					<div className="flex justify-between items-center gap-4">
						<div
							className="group flex justify-center items-center gap-2 hover:bg-gray-800 rounded-full px-2 py-1 cursor-pointer"
							onClick={() => {
								setShowProperties((prevState) => ({
									...prevState,
									name: true,
									addIcon: false,
									descriptionIcon: true,
									description: false,
									ellipsisIcon: true,
									socialLinks: false,
									avatar: true,
								}));
							}}
						>
							<ActionIcon variant="unstyled">
								<ChevronLeftIcon size={18} color="white" />
							</ActionIcon>
							<div className="hidden group-hover:block text-white">Back</div>
						</div>
						<a href="https://twitter.com/treyvijay" target="_blank">
							<div className="group flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-800 rounded-full px-2 py-1">
								<ActionIcon variant="unstyled" size="xs">
									<svg
										role="img"
										viewBox="0 0 24 24"
										fill={colors.gray[50]}
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>X</title>
										<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
									</svg>
								</ActionIcon>
								<div className="hidden group-hover:block text-white">
									Twitter
								</div>
							</div>
						</a>
						<a href="https://ihatereading.in" target="_blank">
							<div className="group flex justify-center items-center gap-2 hover:bg-gray-800 rounded-full px-2 py-1 cursor-pointer">
								<ActionIcon variant="unstyled">
									<Laptop2Icon size={24} color="white" />
								</ActionIcon>
								<div className="hidden group-hover:block text-white">
									Product
								</div>
							</div>
						</a>
						<a href="https://iamshrey.me/" target="_blank">
							<div className="group  flex justify-center items-center gap-2 hover:bg-gray-800 rounded-full px-2 py-1 cursor-pointer">
								<ActionIcon variant="unstyled">
									<PersonStandingIcon size={24} color="white" />
								</ActionIcon>
								<div className="hidden group-hover:block text-white">
									Portfolio
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NavigationBarPage;

const useStyles = createStyles((theme) => ({
	container: {
		"& > .make-transition": {
			transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
		},
		"& > .hidden": {
			opacity: 0,
			transform: "translateY(-10px)",
			transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
		},
		"& > .visible": {
			opacity: 1,
			transform: "translateY(0)",
			transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
		},
	},
}));
