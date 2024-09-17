import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { useDropzone } from "react-dropzone";
import { PlusIcon } from "lucide-react";

const styles = {
	Tokyo:
		"linear-gradient(to right, rgba(255, 154, 158, 0.2), rgba(250, 208, 196, 0.2))",
	Mumbai:
		"linear-gradient(to right, rgba(255, 110, 127, 0.2), rgba(191, 233, 255, 0.2))",
	London:
		"linear-gradient(to right, rgba(168, 192, 255, 0.2), rgba(63, 43, 150, 0.2))",
	NewYork:
		"linear-gradient(to right, rgba(252, 92, 125, 0.2), rgba(106, 130, 251, 0.2))",
	Sydney:
		"linear-gradient(to right, rgba(220, 176, 255, 0.2), rgba(166, 192, 254, 0.2))",
	Istanbul:
		"linear-gradient(to right, rgba(228, 205, 167, 0.2), rgba(245, 231, 162, 0.2))",
	Moscow:
		"linear-gradient(to right, rgba(245, 166, 35, 0.2), rgba(247, 143, 30, 0.2))",
	Paris:
		"linear-gradient(to right, rgba(253, 200, 48, 0.2), rgba(243, 115, 53, 0.2))",
};

const ReelCreator = () => {
	const [files, setFiles] = useState([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedStyle, setSelectedStyle] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { getRootProps, getInputProps } = useDropzone({
		accept: ["image/*", "video/*"],
		multiple: true,
		onDrop: (acceptedFiles) => {
			setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
		},
	});

	// const createVideo = async () => {
	// 	if (files.length < 2) {
	// 		alert("Need at least two files to create a video!");
	// 		return;
	// 	}

	// 	try {
	// 		const fileData = await Promise.all(
	// 			files.map(async (file) => {
	// 				const arrayBuffer = await file.arrayBuffer();
	// 				return {
	// 					data: Buffer.from(arrayBuffer).toString("base64"),
	// 					type: file.type,
	// 				};
	// 			})
	// 		);

	// 		const response = await fetch("/api/create-video", {
	// 			method: "POST",
	// 			headers: { "Content-Type": "application/json" },
	// 			body: JSON.stringify({ files: fileData }),
	// 		});

	// 		if (!response.ok) {
	// 			throw new Error("Error creating video");
	// 		}

	// 		const { file } = await response.json();
	// 		const videoBlob = new Blob(
	// 			[new Uint8Array(Buffer.from(file, "base64"))],
	// 			{ type: "video/mp4" }
	// 		);
	// 		const url = URL.createObjectURL(videoBlob);

	// 		const a = document.createElement("a");
	// 		a.href = url;
	// 		a.download = "output.mp4";
	// 		a.click();

	// 		alert("Video created successfully!");
	// 	} catch (error) {
	// 		console.error("Error creating video:", error);
	// 		alert("Error creating video");
	// 	}
	// };

	const handlePreviewClick = (index) => {
		setActiveIndex(index);
	};

	const handleStyleChange = (style) => {
		setSelectedStyle(style);
	};

	const getObjectUrl = (file) => {
		if (file) {
			return URL.createObjectURL(file);
		}
		return "";
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
			<div className="relative w-80 h-3/4 bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-800">
				{files[activeIndex] && (
					<>
						{files[activeIndex].type.startsWith("video") ? (
							<video
								className="absolute inset-0 w-full h-full object-cover"
								controls
								src={getObjectUrl(files[activeIndex])}
							/>
						) : (
							<img
								className="absolute inset-0 w-full h-full object-cover"
								src={getObjectUrl(files[activeIndex])}
								alt="Active"
							/>
						)}
						<div
							className="absolute inset-0"
							style={{
								background: selectedStyle
									? `${styles[selectedStyle]}, rgba(0,0,0,0.1)`
									: "rgba(0,0,0,0.1)",
							}}
						/>
					</>
				)}
			</div>

			<div className="flex mt-4 space-x-2 overflow-x-auto">
				{files.map((file, index) => (
					<div
						key={index}
						className="w-20 h-20 rounded-md cursor-pointer overflow-hidden border-2 border-gray-300"
						onClick={() => handlePreviewClick(index)}
					>
						{file.type.startsWith("video") ? (
							<video
								className="w-full h-full object-cover"
								src={getObjectUrl(file)}
							/>
						) : (
							<img
								className="w-full h-full object-cover"
								src={getObjectUrl(file)}
								alt="Preview"
							/>
						)}
					</div>
				))}
				<div
					{...getRootProps()}
					className="w-auto h-20 border-dashed border-2 border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer"
				>
					<input {...getInputProps()} />
					<PlusIcon />
				</div>
			</div>

			<div className="fixed top-4 right-4 flex flex-col justify-start text-left bg-white p-2 shadow-lg rounded-lg">
				{Object.keys(styles).map((style) => (
					<Button
						key={style}
						onClick={() => handleStyleChange(style)}
						className="text-left"
						size="xs"
						color="dark"
						variant={selectedStyle === style ? "outline" : "hover"}
					>
						{style}
					</Button>
				))}
			</div>
			{/* <Button
				className="mt-4"
				color="dark"
				size="xs"
				onClick={createVideo}
				loading={isLoading}
			>
				Create Video
			</Button> */}
		</div>
	);
};

export default ReelCreator;
