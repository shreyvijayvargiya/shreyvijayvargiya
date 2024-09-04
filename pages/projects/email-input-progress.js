import React, { useState } from "react";

const EmailInputProgress = () => {
	const [email, setEmail] = useState("");
	const [progress, setProgress] = useState(0);

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

	return (
		<div className="w-full flex justify-center items-center h-screen">
			<div>
				<p className="my-2 text-sm text-gray-600">Email validator</p>
				<input
					type="text"
					className="p-4 border-2 border-gray-200 w-96 outline-none rounded-md active:rounded-full focus:border-black focus:border"
					style={{
						background: `linear-gradient(to right, #dcfce7 ${progress}%, white ${progress}%)`,
						transition: "background 0.3s ease",
					}}
					placeholder="Enter your email"
					onChange={handleChange}
					value={email}
				/>
				<p className="mt-2 text-sm text-gray-600">Progress: {progress}%</p>
			</div>
		</div>
	);
};

export default EmailInputProgress;
