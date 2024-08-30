import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MotionReveal = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const items = [
		{
			title: "Accordion Item 1",
			content: "This is the content for item 1.",
		},
		{
			title: "Accordion Item 2",
			content: "This is the content for item 2.",
		},
		{
			title: "Accordion Item 3",
			content: "This is the content for item 3.",
		},
	];

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<div className="w-full max-w-lg mx-auto">
				{items.map((item, index) => (
					<div
						key={index}
						className="border border-gray-200 my-2 rounded-xl hover:bg-gray-100"
					>
						<button
							onClick={() => toggle(index)}
							className={`flex justify-between items-center w-full p-4 transition-colors ${
								openIndex === index &&
								"border-b border-gray-200 bg-indigo-100 rounded-tr-xl rounded-tl-xl"
							}`}
						>
							<span className="text-lg font-semibold">{item.title}</span>
							{openIndex === index ? (
								<motion.div animate={{ rotate: "180deg" }}>
									<MinusIcon className="w-5 h-5" />
								</motion.div>
							) : (
								<motion.div animate={{ rotate: "-180deg" }}>
									<PlusIcon className="w-5 h-5" />
								</motion.div>
							)}
						</button>
						<motion.div
							initial={false}
							animate={{ height: openIndex === index ? "auto" : 0 }}
							style={{ overflow: "hidden" }}
							transition={{ duration: 0.3 }}
						>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.3,
											ease: [0.04, 0.62, 0.23, 0.98],
										}}
										className="p-4 text-gray-700"
									>
										{item.content}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MotionReveal;
