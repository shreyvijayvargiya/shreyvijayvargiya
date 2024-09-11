import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@mantine/core";
import { LogOut, Wallet } from "lucide-react";
import colors from "tailwindcss/colors";
import { FaGoogle } from "react-icons/fa";

const UserOnboarding = () => {
	const [isExpanded, setIsExpanded] = useState(true);
	const cardRef = useRef(null);

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded);
	};

	useEffect(() => {
		if (isExpanded) {
			gsap.to(cardRef.current, {
				opacity: 0,
				display: "none",
				height: "0px",
				duration: 0.5,
				ease: "power2.out",
			});
		} else {
			gsap.to(cardRef.current, {
				opacity: 1,
				height: "auto",
				display: "inline-block",
				duration: 0.5,
				ease: "power2.in",
			});
		}
	}, [isExpanded]);

	const [loginStatus, setLoginStatus] = useState(false);
	const [buttonLoader, setButtonLoader] = useState(false);

	const LoginButtonComponent = () => {
		return (
			<div>
				<h2 className="text-xl font-semibold text-gray-800">
					Welcome to iHateReading
				</h2>
				<p className="text-gray-600 mt-2">
					Please google login to continue our services and accpeting the
					policies and terms.{" "}
				</p>
				<Button
					onClick={() => {
						setButtonLoader(true);
						setTimeout(() => {
							setLoginStatus(!loginStatus);
							setIsExpanded(false);
							setButtonLoader(false);
						}, 500);
					}}
					fullWidth
					my="md"
					size="md"
					radius="md"
					color="dark"
					loading={buttonLoader}
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
		);
	};

	const LoggedInUserDataComponent = () => {
		return (
			<div>
				<img
					src="/avatar.png"
					className="w-20 h-20 hover:w-24 hover:h-24 transition-all duration-100 ease-in"
				/>
				<h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
				<p className="text-gray-600 mt-2">Next presidential candiate for USA</p>
				<Button
					onClick={() => {
						setButtonLoader(true);
						setTimeout(() => {
							setLoginStatus(!loginStatus);
							setIsExpanded(true);
							setButtonLoader(false);
						}, 500);
					}}
					fullWidth
					my="md"
					size="md"
					loading={buttonLoader}
					radius="md"
					color="red"
					leftIcon={<LogOut size={18} />}
				>
					Logout
				</Button>
			</div>
		);
	};
	return (
		<div className="flex justify-center items-center flex-col gap-4 h-screen bg-gray-50">
			<div
				ref={cardRef}
				className={`p-4 w-96 bg-white opacity-0 hidden rounded-xl border border-gray-200`}
			>
				{loginStatus ? <LoggedInUserDataComponent /> : <LoginButtonComponent />}
			</div>
			<div className="flex justify-center items-center">
				{isExpanded && (
					<Button
						onClick={toggleExpansion}
						fullWidth
						size="md"
						radius="md"
						color="dark"
						leftIcon={<Wallet size={18} />}
						sx={{
							"&:hover": {
								transform: "scale(1.05)",
								transition: "transform 0.2s ease-in-out",
							},
							transition: "transform 0.2s ease-in-out",
						}}
					>
						{isExpanded ? "Get Started" : "Sign out"}
					</Button>
				)}
			</div>
		</div>
	);
};

export default UserOnboarding;
