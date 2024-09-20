import gsap from "gsap";
import { X } from "lucide-react";
import React, { useState } from "react";
import colors from "tailwindcss/colors";

const TagsInput = () => {
	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

	const checkIfTagExists = () => {
		const filteredTags = tags?.filter((item) => item === newTag)[0];
		return filteredTags?.length > 0;
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !checkIfTagExists()) {
			let prevtags = [...tags];
			prevtags?.push(newTag);
			const newIndex = prevtags?.length ? prevtags.length : 0;
			gsap.fromTo(
				`.tag-${newIndex}`,
				{
					opacity: 0,
					y: 40,
					width: 0,
				},
				{
					opacity: 1,
					y: 0,
					width: "100%",
					duration: 0.3,
					onComplete: () => {
						gsap.fromTo(
							".tag-input",
							{
								backgroundColor: colors.green[400],
								width: 0,
							},
							{
								backgroundColor: colors.white,
								duration: 0.4,
								width: "100%",
								onComplete: () => {
									setTags(prevtags);
									setNewTag("");
								},
							}
						);
					},
				}
			);
		} else if (e.key === "Enter" && checkIfTagExists()) {
			gsap.fromTo(
				".tag-input",
				{ x: 0, borderColor: colors.gray[300] },
				{
					x: -10,
					duration: 0.1,
					repeat: 5,
					yoyo: true,
					borderColor: colors.red[400],
					ease: "power1.inOut",
					onComplete: () =>
						gsap.set(".tag-input", { x: 0, borderColor: "none" }),
				}
			);
		}
	};

	return (
		<div className="w-full h-screen flex justify-center items-center flex-col">
			<div className="max-w-md min-w-1/4">
				{tags.length > 1 && (
					<div className="flex justify-end items-center">
						<button
							className="flex justify-around items-center gap-2 p-2 bg-gray-50 rounded-md hover:border hover:border-gray-200 hover:bg-gray-100 hover:px-4 hover:py-2 my-2 transition-all duration-150 ease-in"
							onClick={() => {
								gsap.to(
									tags.map((i, index) => `.tag-${index}`),
									{
										duration: 0.5,
										width: 0,
										opacity: 0,
										stagger: 0.2,
										display: "none",
										ease: "power1",
										onComplete: () => {
											setTags([]);
										},
									}
								);
							}}
						>
							Clear all <X size={18} />
						</button>
					</div>
				)}
				<input
					placeholder="write tag and press Enter"
					value={newTag}
					onChange={(e) => setNewTag(e.target.value)}
					onKeyDown={handleKeyDown}
					className={`border border-gray-200 rounded-md p-3 w-full outline-none focus:border focus:border-gray-300 tag-input`}
				/>
				<div className="my-4 flex justify-start items-center flex-wrap gap-2">
					{tags.map((tag, index) => (
						<div
							key={tag}
							className={`px-4 py-2 group flex justify-around items-center gap-4 rounded-full bg-gray-900 hover:px-6 transition-all duration-200 ease-in cursor-pointer text-white tag-${index}`}
						>
							{tag}
							<div
								className="group-hover:mr-4 group-hover:visible invisible w-0 transition-all duration-150 ease-in"
								onClick={() => {
									gsap.to(`.tag-${index}`, {
										opacity: 0,
										width: 0,
										display: "none",
										duration: 0.2,
										onComplete: () => {
											const newTags = tags.filter((item) => item !== tag);
											setTags(newTags);
										},
									});
								}}
							>
								<X size={18} color={colors.gray[400]} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default TagsInput;
