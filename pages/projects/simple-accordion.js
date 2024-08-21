import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { MinusIcon, PlusIcon } from "lucide-react";

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
	const animationProps = useSpring({
		opacity: isOpen ? 1 : 0,
		maxHeight: isOpen ? "300px" : "0px",
		config: { tension: 250, friction: 30, duration: 200 },
	});

	const roationIcon = useSpring({
		rotateX: "180deg",
	});

	return (
		<div className="border border-gray-200 my-2 rounded-xl hover:bg-gray-100">
			<button
				onClick={onToggle}
				className="flex justify-between items-center w-full p-4 transition-colors"
			>
				<span className="text-lg font-semibold">{title}</span>
				{isOpen ? (
					<MinusIcon className="w-5 h-5" style={roationIcon} />
				) : (
					<PlusIcon className="w-5 h-5" style={roationIcon} />
				)}
			</button>
			<animated.div style={animationProps} className="overflow-hidden">
				<div className="p-4  text-gray-700">{children}</div>
			</animated.div>
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
