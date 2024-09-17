import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import gsap from "gsap";

export const iconMap = [
	{ id: 2, name: "Account", icon: LucideIcons.PersonStanding },
	{ id: 1, name: "Blog", icon: LucideIcons.BookAIcon },
	{ id: 4, name: "Projects", icon: LucideIcons.PenToolIcon },
	{ id: 3, name: "Bookmark", icon: LucideIcons.Award },
	{ id: 5, name: "Gallery", icon: LucideIcons.GalleryThumbnailsIcon },
	{ id: 6, name: "Website", icon: LucideIcons.Monitor },
];

const CreateNewButton = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="flex flex-col justify-center items-center h-screen ">
			<div
				className={`max-w-xs bg-gray-100 bg-opacity-80 border border-gray-200 ${
					show ? "rounded-2xl" : "rounded-full p-2"
				} transition-all duration-200 ease-in`}
			>
				<div
					className={`flex justify-between group items-center gap-2 px-2 py-1`}
					onMouseEnter={() => {
						gsap.to(".plus-icon", { rotate: "+=360deg" });
					}}
				>
					<LucideIcons.PlusIcon
						size={20}
						className={`plus-icon ${
							!show ? "inline-block opacity-100" : "hidden opacity-0"
						} transition-all duration-100 ease-in`}
					/>
					<button
						className="flex justify-start gap-2 rounded-xl group-hover:text-gray-900 text-gray-500"
						onClick={() => {
							setShow(!show);
						}}
					>
						Create New
					</button>
					{show && (
						<button
							onClick={() => setShow(!show)}
							className="rounded-full hover:bg-gray-100 p-2 text-gray-500 font-light hover:text-black"
						>
							<LucideIcons.X size={20} />
						</button>
					)}
				</div>
				<div
					className={`button-list rounded-2xl overflow-hidden ${
						show
							? "h-60 opacity-100 visible w-full bg-white p-10 gap-5"
							: "h-0 opacity-0 invisible w-0"
					} grid grid-cols-3 justify-start items-start transition-all ease-in-out duration-300`}
				>
					{iconMap.map((item) => {
						const Icon = item.icon;
						return (
							<button
								key={item.id}
								className={`text-gray-500 p-3 hover:text-gray-800 hover:bg-gray-100 bg-opacity-80 hover:px-5 hover:py-4 rounded-md transition-all duration-200 ease-in group flex flex-col justify-center items-center ${
									show ? "opacity-100" : "opacity-0"
								} transition-all duration-75 ease-in`}
							>
								<Icon size={32} />
								<span className="text-gray-500 my-1 text-xxs">{item.name}</span>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default CreateNewButton;
