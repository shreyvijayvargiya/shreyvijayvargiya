import React, { useState } from "react";
import * as LucideIcons from "lucide-react";

export const iconMap = [
	{ id: 2, name: "About", icon: LucideIcons.PersonStanding },
	{ id: 1, name: "Blogs", icon: LucideIcons.BookAIcon },
	{ id: 4, name: "Projects", icon: LucideIcons.PenToolIcon },
	{ id: 3, name: "Awards", icon: LucideIcons.Award },
	{ id: 5, name: "Photos", icon: LucideIcons.GalleryThumbnailsIcon },
	{ id: 6, name: "Website", icon: LucideIcons.Monitor },
];

const CreateNewComponent = () => {
	const [show, setShow] = useState(false);

	return (
		<div className="flex justify-center items-center h-screen">
			<div
				className={`max-w-xs bg-gray-50 border border-gray-200 ${
					show ? "rounded-xl p-0" : "rounded-full px-2 py-1"
				} transition-all duration-200 delay-600 ease-in`}
			>
				<div
					className={`flex justify-between group items-center px-2 py-1 ${
						show ? "mt-2" : ""
					}`}
				>
					<button
						className="flex justify-start gap-2 rounded-xl group-hover:text-gray-900 text-gray-500"
						onClick={() => setShow(!show)}
					>
						{!show && <LucideIcons.PlusIcon size={20} />}
						Create New
					</button>
					{show && (
						<button
							onClick={() => setShow(!show)}
							className="rounded-full hover:bg-gray-100 text-gray-500 font-light w-8 h-8 hover:text-black"
						>
							x
						</button>
					)}
				</div>
				<div
					className={`transition-all ease-in-out duration-300 overflow-hidden ${
						show
							? "max-h-60 opacity-100 visible bg-white rounded-xl p-10"
							: "max-h-0 opacity-0 invisible"
					} grid grid-cols-3 gap-5 justify-start items-start`}
					style={{
						opacity: show ? 100 : 0,
						visibility: show ? "visible" : "hidden",
						display: show ? "flex" : "none",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						flexWrap: "wrap",
						transition: "all 0.5s ease",
					}}
				>
					{iconMap.map((item) => {
						const Icon = item.icon;
						return (
							<button
								key={item.id}
								className="text-gray-500 p-3 hover:text-gray-800 hover:bg-gray-50 hover:px-5 hover:py-4 rounded-md transition-all duration-200 ease-in group flex flex-col justify-center items-center"
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
export default CreateNewComponent;
