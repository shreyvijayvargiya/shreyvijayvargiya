import { useState } from "react";
import { ChevronRight, LaptopIcon, LinkedinIcon, X } from "lucide-react";
import { FaMedium } from "react-icons/fa";

const images = [
	{ src: "/demo-images/mumbai-1.avif" },
	{ src: "/demo-images/mumbai-2.avif" },
	{ src: "/demo-images/mumbai-3.avif" },
	{ src: "/demo-images/mumbai-4.avif" },
	{ src: "/demo-images/mumbai-5.avif" },
	{ src: "/demo-images/mumbai-6.avif" },
];

const texts = ["Twitter", "LinkedIn", "Website", "Medium"];

const icons = {
	Twitter: X,
	LinkedIn: LinkedinIcon,
	Website: LaptopIcon,
	Medium: FaMedium,
};
const MumbaiTour = () => {
	const [step, setStep] = useState(0);
	const totalSteps = 6;

	const nextStep = () => {
		if (step < totalSteps) {
			setStep(step + 1);
		} else if (step === 6) {
			setStep(0);
		}
	};

	const prevStep = () => {
		if (step > 0) {
			setStep(step - 1);
		}
	};

	return (
		<div className="flex flex-col justify-center items-center h-screen space-y-4">
			<div
				className="flex space-x-2 w-full justify-center items-center overflow-x-scroll"
				style={{ scrollBehavior: "smooth", scrollSnapType: "x" }}
			>
				{[...Array(totalSteps)].map((_, index) => {
					const Icon = icons[texts[index]];
					return (
						<div
							key={index}
							className={`rounded-xl group relative ${
								step > index
									? "border border-gray-100 w-96 h-screen text-4xl font-mono font-semibold opacity-100 flex items-center justify-center"
									: "bg-gray-50 w-20 h-20 text-xs flex items-center justify-center text-gray-50 hover:border hover:bg-gray-900"
							} transition-all duration-300 ease-in-out`}
						>
							<img
								src={images[index].src}
								className="w-full h-full object-cover"
							/>
						</div>
					);
				})}
			</div>
			<br />
			<div className="flex space-x-4">
				<button
					onClick={nextStep}
					className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			</div>

			<div className="text-sm text-gray-500">Social Media</div>
		</div>
	);
};

export default MumbaiTour;
