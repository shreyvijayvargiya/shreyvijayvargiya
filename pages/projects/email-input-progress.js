import { Button } from "@mantine/core";
import gsap from "gsap";
import React, { useState } from "react";

const EmailInputProgress = () => {
	const [email, setEmail] = useState("");
	const [progress, setProgress] = useState(0);
	const [loading, setLoading] = useState(false);

	const calculateProgress = (email) => {
		let percentage = 0;

		const username = email.split("@")[0] || "";
		const domainAndExtension = email.split("@")[1] || "";
		const domain = domainAndExtension.split(".")[0] || "";
		const extension = domainAndExtension.split(".")[1] || "";

		if (username.trim().length > 0) percentage += 20;

		if (email.includes("@")) percentage += 20;

		if (domain.length > 0) percentage += 20;

		if (email.includes(".") && email.indexOf(".") > email.indexOf("@"))
			percentage += 20;

		if (extension.length > 0) percentage += 20;

		return percentage;
	};

	const handleChange = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);

		const newProgress = calculateProgress(newEmail);
		setProgress(newProgress);
	};

	const handleSubscribe = () => {
		const tl = gsap.timeline();
		setLoading(true);
		setTimeout(() => {
			tl.to(".email-form", {
				opacity: 0,
				duration: 0.5,
				y: 50,
				display: "none",
			}).fromTo(
				".subscription-message",
				{
					y: -80,
				},
				{
					opacity: 1,
					duration: 0.2,
					y: 0,
					display: "inline-block",
					onComplete: () => {
						setLoading(false);
					},
				}
			);
		}, 200);
	};
	return (
		<div className="w-full flex justify-center items-center h-screen">
			<div className="min-w-lg">
				<div className="email-form">
					<p className="my-2 text-gray-600">Subscribe to our newsletter</p>
					<input
						type="text"
						className="p-4 border-2 border-gray-200 w-96 text-gray-700 outline-none rounded-md active:rounded-full focus:border-gray-500 focus:border"
						style={{
							background: `linear-gradient(to right, #dcfce7 ${progress}%, white ${progress}%)`,
							transition: "all 0.5s ease",
						}}
						placeholder="Enter your email"
						onChange={handleChange}
						value={email}
					/>
					<Button
						color="dark"
						fullWidth
						my="sm"
						loading={loading}
						size="md"
						disabled={progress === 100 ? false : true}
						onClick={handleSubscribe}
					>
						Subscribe
					</Button>
				</div>
				<p className="hidden opacity-0 subscription-message">
					Thank you for subscription
				</p>
			</div>
		</div>
	);
};

export default EmailInputProgress;
