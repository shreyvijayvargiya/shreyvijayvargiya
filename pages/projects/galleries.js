import React, { useState } from "react";
import { Rnd } from "react-rnd";

const images = [
	{
		label: "/demo-images/img-1.avif",
		gridColumn: "span 3",
		gridRow: "span 2",
	},
	{ label: "/demo-images/img-2.avif", gridColumn: "span 2", gridRow: "span 2" },
	{ label: "/demo-images/img-3.avif", gridColumn: "span 4", gridRow: "span 2" },
	{ label: "/demo-images/img-4.avif", gridColumn: "span 2", gridRow: "span 3" },
	{ label: "/demo-images/img-5.avif", gridColumn: "span 2", gridRow: "span 3" },
	{ label: "/demo-images/img-6.avif", gridColumn: "span 3", gridRow: "span 3" },
	{ label: "/demo-images/img-7.avif", gridColumn: "span 3", gridRow: "span 3" },
	{ label: "/demo-images/img-8.avif", gridColumn: "span 3", gridRow: "span 3" },
	{ label: "/demo-images/img-9.avif", gridColumn: "span 3", gridRow: "span 3" },
];

const ImageGallery = () => {
	const [gridItems, setGridItems] = useState(
		images.map((image, index) => ({
			...image,
			width: image.width || "auto",
			height: image.height || "auto",
		}))
	);

	const handleResize = (index, ref, position) => {
		const newGridItems = [...gridItems];
		const newWidth = parseFloat(ref.style.width);
		const newHeight = parseFloat(ref.style.height);

		if (newWidth === 0 || newHeight === 0) {
			newGridItems.splice(index, 1);
		} else {
			newGridItems[index] = {
				...newGridItems[index],
				width: `${newWidth}px`,
				height: `${newHeight}px`,
			};
		}

		setGridItems(newGridItems);
	};

	return (
		<div className="flex justify-center items-center h-screen w-full">
			<div className="w-2/5 h-4/5 grid grid-cols-9 gap-2 border border-gray-200 overflow-scroll">
				{gridItems.map((item, index) => (
					<Rnd
						key={index}
						size={{ width: item.width, height: item.height }}
						className="border border-gray-200 flex justify-center items-center"
						style={{
							gridColumn: item.gridColumn || "span 1",
							gridRow: item.gridRow || "span 1",
						}}
						onResizeStop={(e, direction, ref, delta, position) =>
							handleResize(index, ref, position)
						}
						minWidth="0px"
						minHeight="0px"
					>
						<img
							src={item.label}
							style={{
								gridColumn: item.gridColumn || "span 1",
								gridRow: item.gridRow || "span 1",
							}}
							className="object-fill"
						/>
					</Rnd>
				))}
			</div>
		</div>
	);
};

export default ImageGallery;
