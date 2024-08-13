import { useState } from "react";
import { Avatar, Button, Textarea, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import gsap from "gsap";
import {
	TwitterIcon,
	MediumIcon,
	LinkedinIcon,
	YoutubeIcon,
	SnapchatIcon,
	TiktokIcon,
	WebsiteIcon,
	Twitter,
	ChevronRight,
	MoveRightIcon,
	ArrowRightCircle,
	ChevronRightIcon,
} from "lucide-react"; // Replace with actual icons
import colors from "tailwindcss/colors";

const MultiStepForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({});
	const { register, handleSubmit, reset } = useForm();

	const handleNextStep = (data) => {
		setFormData((prev) => ({ ...prev, ...data }));
		setStep(step + 1);
	};

	const handlePrevStep = () => {
		setStep(step - 1);
	};

	const onSubmit = (data) => {
		setFormData((prev) => ({ ...prev, ...data }));
		console.log(formData);
		alert(JSON.stringify({ ...formData, ...data }, null, 2));
		reset();
		setStep(1);
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-50">
			<div className="p-8 bg-white rounded shadow-lg w-full max-w-lg">
				{step === 1 && (
					<form onSubmit={handleSubmit(handleNextStep)}>
						<h2 className="text-2xl font-bold mb-4">Add your info</h2>
						<TextInput
							{...register("userName", { required: true })}
							label="Name"
							color="dark"
							placeholder="Enter your name"
							className="mb-4 outline-none focus:border focus:border-black"
						/>
						<label className="block text-gray-700">Profile Image</label>
						<TextInput
							{...register("userImage", { required: true })}
							type="file"
							accept="image/*"
							className="mb-4 active:border border-black outline-none focus:outline-none"
						/>
						{formData.userImage && <img src={formData.userImage} />}
						<Button
							size="xs"
							type="submit"
							className="bg-gray-800 mt-4"
							color="dark"
							rightIcon={
								<ChevronRightIcon size={14} color={colors.gray[200]} />
							}
						>
							Next
						</Button>
					</form>
				)}

				{step === 2 && (
					<form onSubmit={handleSubmit(handleNextStep)}>
						<h2 className="text-2xl font-bold mb-4">Add your description</h2>
						<Textarea
							{...register("userDescription", { required: true })}
							placeholder="Describe yourself (300-500 words)"
							minRows={6}
							className="mb-4"
						/>
						<div className="flex justify-between">
							<Button
								onClick={handlePrevStep}
								size="xs"
								className="bg-gray-900 hover:bg-gray-800"
							>
								Back
							</Button>
							<Button
								type="submit"
								className="bg-dark-900 hover:bg-gray-800"
								size="xs"
								color="dark"
							>
								Next
							</Button>
						</div>
					</form>
				)}

				{step === 3 && (
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className="text-2xl font-bold mb-4">Add social media links</h2>
						<TextInput
							{...register("twitter")}
							label="Twitter"
							color="dark"
							placeholder="https://twitter.com/yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("medium")}
							label="Medium"
							color="dark"
							placeholder="https://medium.com/@yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("linkedin")}
							label="LinkedIn"
							color="dark"
							placeholder="https://linkedin.com/in/yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("youtube")}
							label="YouTube"
							color="dark"
							placeholder="https://youtube.com/c/yourchannel"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("snapchat")}
							label="Snapchat"
							color="dark"
							placeholder="https://snapchat.com/add/yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("tiktok")}
							label="Tiktok"
							color="dark"
							placeholder="https://tiktok.com/@yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("instagram")}
							label="Instagram"
							color="dark"
							placeholder="https://instagram.com/yourusername"
							className="mb-2 outline-none"
						/>
						<TextInput
							{...register("website")}
							label="Website"
							color="dark"
							placeholder="https://yourwebsite.com"
							className="mb-4 outline-none"
						/>
						<div className="flex justify-between">
							<Button
								onClick={handlePrevStep}
								className="bg-gray-500"
								color="dark"
								size="xs"
							>
								Back
							</Button>
							<Button
								type="submit"
								className="bg-gray-800"
								color="dark"
								size="xs"
							>
								Submit
							</Button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
};

export default MultiStepForm;
