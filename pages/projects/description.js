import { GalleryHorizontal, LinkIcon, Table2Icon } from "lucide-react";
import React from "react";
import { SiThreads } from "react-icons/si";

const images = [
	{ src: "/demo-images/img-1.avif", alt: "Image 1" },
	{ src: "/demo-images/img-2.avif", alt: "Image 2" },
	{ src: "/demo-images/img-3.avif", alt: "Image 3" },
	{ src: "/demo-images/img-4.avif", alt: "Image 4" },
];

const Descriptive = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="w-auto mx-auto">
				<p className="text-2xl font-mono mb-10">All I need, is</p>
				<p className="font-serif w-full flex justify-start items-start">
					<p className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-indigo-600 text-indigo-600 font-semibold">
						Love
						<span className="w-60 h-40 opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<img
								src={images[0].src}
								className="w-full h-full rounded-xl object-fill"
							/>
						</span>
					</p>{" "}
					,
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-orange-600 text-orange-600 font-semibold">
						peace{","}
						<span className="w-60 h-40 opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<img
								src={images[1].src}
								className="w-full h-full rounded-xl object-fill"
							/>
						</span>
					</span>{" "}
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-pink-600 text-pink-600 font-semibold">
						fun{" "}
						<span className="w-60 h-40 opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<img
								src={images[2].src}
								className="w-full h-full rounded-xl object-fill"
							/>
						</span>
					</span>
					&{" "}
					<span className="flex justify-start items-center gap-1 group relative mx-1 hover:underline hover:text-green-600 text-green-600 font-semibold">
						passion{" "}
						<span className="w-60 h-40 opacity-0 group-hover:opacity-100 absolute transform group-hover:-translate-y-5 bottom-5 left-0 right-0 transition-all duration-300 ease-in-out">
							<img
								src={images[3].src}
								className="w-full h-full rounded-xl object-fill"
							/>
						</span>
					</span>
				</p>
			</div>
		</div>
	);
};
export default Descriptive;
