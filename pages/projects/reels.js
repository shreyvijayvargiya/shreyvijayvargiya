import { useState } from "react";
import { Avatar, Modal } from "@mantine/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

const youtubeShorts = [
	"https://www.youtube.com/shorts/AV1TYMroX2A",
	"https://www.youtube.com/shorts/AxJSMBJq4kc",
	"https://www.youtube.com/shorts/GAfLshCIpjA",
	"https://www.youtube.com/shorts/JdyJBbRPBM0",
	"https://www.youtube.com/shorts/u6afoY09Ptc",
	"https://www.youtube.com/shorts/_CK5uQDoLSE",
];
export default function ShortsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [opened, setOpened] = useState(false);

	const nextShort = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % youtubeShorts.length);
	};

	const prevShort = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? youtubeShorts.length - 1 : prevIndex - 1
		);
	};

	const openVideo = (index) => {
		setActiveIndex(index);
		setOpened(true);
	};

	const closeModal = () => {
		setOpened(false);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex items-center space-x-4">
				<button
					onClick={prevShort}
					className="p-2 bg-gray-50 rounded-full hover:bg-gray-100"
				>
					<ChevronLeft className="text-xl" />
				</button>

				<div className="flex items-center space-x-4">
					<Avatar
						size={80}
						radius="xl"
						className="rounded-full ring-2 ring-indigo-500"
					>
						<FaYoutube className="text-indigo-500 text-2xl" />
					</Avatar>

					{youtubeShorts.slice(0, 5).map((short, index) => (
						<div
							key={index}
							onClick={() => openVideo(index)}
							className={`rounded-xl ring-2 ring-indigo-500 p-1 cursor-pointer ${
								activeIndex === index ? "ring-4 ring-indigo-700" : ""
							}`}
						>
							
								<img
									src={`https://img.youtube.com/vi/${youtubeShorts[index]
										.split("/")
										.pop()}/hqdefault.jpg`}
									alt="YouTube Short Thumbnail"
									className="cursor-pointer w-full object-fill rounded-xl h-96"
								/>

						</div>
					))}
				</div>

				<button
					onClick={nextShort}
					className="p-2 bg-gray-50 rounded-full hover:bg-gray-100"
				>
					<ChevronRight className="text-xl" />
				</button>
			</div>

			<Modal
				opened={opened}
				onClose={closeModal}
				size="auto"
				centered
				title="Watch YouTube Short"
			>
				<div className="w-full mt-5">
					<a
						href={youtubeShorts[activeIndex]}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={`https://img.youtube.com/vi/${youtubeShorts[activeIndex]
								.split("/")
								.pop()}/hqdefault.jpg`}
							alt="YouTube Short Thumbnail"
							className="cursor-pointer w-full rounded-lg"
						/>
					</a>
				</div>
			</Modal>
		</div>
	);
}
