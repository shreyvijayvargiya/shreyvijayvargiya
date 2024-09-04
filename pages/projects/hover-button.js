import React from "react";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";

const HoverButton = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen flex-col">
			<motion.button
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg border border-indigo-100 group"
			>
				<motion.div
					className="absolute top-0 left-0 h-full bg-indigo-500 z-0"
					variants={{
						rest: { width: 0 },
						hover: { width: "100%" },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>
				<span className="relative z-10 text-black gap-2 flex items-center">
					<motion.span
						className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-150"
						initial={{ opacity: 0, x: -40, rotate: 360 }}
						variants={{
							hover: { opacity: 1, x: 0, rotate: 0 },
						}}
					>
						<LinkIcon size={14} color="white" />
					</motion.span>
					<span className="group-hover:text-white">Hover me</span>
				</span>
			</motion.button>
			<br />
			<motion.button
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg border border-indigo-100 group"
			>
				<motion.div
					className="absolute top-0 left-0 h-full bg-pink-500 z-0"
					variants={{
						rest: { width: 0 },
						hover: { width: "100%" },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>
				<span className="relative z-10 text-black gap-2 flex items-center">
					<motion.span
						className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-150"
						initial={{ opacity: 0, y: -40, rotate: 360 }}
						variants={{
							hover: { opacity: 1, y: 0, rotate: 0 },
						}}
					>
						<LinkIcon size={14} color="white" />
					</motion.span>
					<span className="group-hover:text-white">Test me</span>
				</span>
			</motion.button>
			<br />
			<motion.button
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg border border-indigo-100 group"
			>
				<motion.div
					className="absolute top-0 left-0 h-full bg-green-500 z-0"
					variants={{
						rest: { width: 0 },
						hover: { width: "100%" },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>
				<span className="relative z-10 text-black gap-2 flex items-center">
					<span className="group-hover:text-white">Check me</span>
					<motion.span
						className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-150"
						initial={{ opacity: 0, y: 40, rotate: 360 }}
						variants={{
							hover: { opacity: 1, y: 0, rotate: 0 },
						}}
					>
						<LinkIcon size={14} color="white" />
					</motion.span>
				</span>
			</motion.button>
			<br />
			<motion.button
				initial="rest"
				whileHover="hover"
				animate="rest"
				className="relative overflow-hidden px-6 py-3 text-white font-semibold rounded-lg border border-indigo-100 group"
			>
				<motion.div
					className="absolute top-0 left-0 h-full bg-gray-500 z-0"
					variants={{
						rest: { width: 0 },
						hover: { width: "100%" },
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				/>
				<span className="relative z-10 text-black gap-2 flex items-center">
					<span className="group-hover:text-white">Try me</span>
					<motion.span
						className="hidden group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-150"
						initial={{ opacity: 0, x: 40, rotate: 360 }}
						variants={{
							hover: { opacity: 1, x: 0, rotate: 0 },
						}}
					>
						<LinkIcon size={14} color="white" />
					</motion.span>
				</span>
			</motion.button>
		</div>
	);
};

export default HoverButton;
