import React from "react";
import { GalleryHorizontal, LinkIcon, Table2Icon } from "lucide-react";
import { SiThreads } from "react-icons/si";

const Descriptive = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-auto mx-auto">
				<p className="font-serif w-full flex justify-start items-start">
					<p>Breaking down the topics into </p>
					<p className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-indigo-600 text-indigo-600 font-semibold">
						threads
						<span className="opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<SiThreads size={44} />
						</span>
					</p>{" "}
					,
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-orange-600 text-orange-600 font-semibold">
						tables{" "}
						<span className="opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<Table2Icon size={50} />
						</span>
					</span>{" "}
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-pink-600 text-pink-600 font-semibold">
						links{" "}
						<span className="opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<LinkIcon size={50} />
						</span>
					</span>
					and{" "}
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-green-600 text-green-600 font-semibold">
						templates{" "}
						<span className="opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<GalleryHorizontal size={50} />
						</span>
					</span>
					making reading a pleasant and good experience
				</p>
			</div>
		</div>
	);
};
export default Descriptive;
