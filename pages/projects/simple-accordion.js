import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CoolAccordion = ({ items }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full max-w-lg mx-auto">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					isOpen={openIndex === index}
					onToggle={() => toggle(index)}
					title={item.title}
				>
					{item.content}
				</AccordionItem>
			))}
		</div>
	);
};

const AccordionItem = ({ isOpen, onToggle, title, children }) => {
	return (
		<div className="border border-gray-200 my-2 rounded-xl hover:bg-gray-100">
			<button
				onClick={onToggle}
				className={`flex justify-between items-center w-full p-4 transition-colors ${
					isOpen &&
					"border-b border-gray-200 bg-indigo-100 rounded-tr-xl rounded-tl-xl"
				}`}
			>
				<span className="text-lg font-semibold">{title}</span>
				{isOpen ? (
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
				animate={{ height: isOpen ? "auto" : 0 }}
				style={{ overflow: "hidden" }}
				transition={{ duration: 0.3 }}
			>
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
							className="p-4 text-gray-700"
						>
							{children}
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</div>
	);
};

const App = () => {
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

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center">
			<CoolAccordion items={items} />
		</div>
	);
};

export default App;
