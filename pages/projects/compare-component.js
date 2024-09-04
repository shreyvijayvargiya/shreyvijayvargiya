import React, { useState, useRef } from "react";
import { GripVertical } from "lucide-react";

const CompareImage = () => {
	const [width, setWidth] = useState(50);
	const containerRef = useRef(null);
	const handleMouseMove = (e) => {
		const containerRect = containerRef.current.getBoundingClientRect();
		const newWidthPercentage = (e.clientX / containerRect.width) * 100;
		setWidth(Math.max(0, Math.min(newWidthPercentage, 100)));
	};

	return (
		<div
			className="w-full h-screen flex justify-center items-center flex-col"
			ref={containerRef}
		>
			<div
				className="flex justify-center items-center w-full h-full mx-auto"
				onMouseMove={handleMouseMove}
			>
				<div
					className="relative h-full"
					style={{ width: `${width}%`, transition: "all 0.1s ease" }}
				>
					<div
						className="h-full border-r border-gray-400 cursor-move"
						style={{
							backgroundImage: "url(/demo-images/img-1.avif)",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center center",
							backgroundAttachment: "fixed",
						}}
					>
						<div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-col-resize cursor-move">
							<GripVertical size={24} color="white" />
						</div>
					</div>
				</div>
				<div
					className="h-full bottom-0"
					style={{
						backgroundImage: "url(/demo-images/img-3.avif)",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center center",
						backgroundAttachment: "fixed",
						width: `${100 - width}%`,
						transition: "all 0.1s ease",
					}}
				/>
			</div>
		</div>
	);
};

export default CompareImage;
