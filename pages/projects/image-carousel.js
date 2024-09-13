import React from "react";

const images = [
	{ src: "/demo-images/img-1.avif", id: 1 },
	{ src: "/demo-images/img-2.avif", id: 2 },
	{ src: "/demo-images/img-3.avif", id: 3 },
	{ src: "/demo-images/img-4.avif", id: 4 },
];

const ImageCarousel = () => {
	return (
		<div className="p-10 container h-screen flex justify-center items-center mx-auto w-full">
			<div
				className={`list-container flex justify-center items-center w-full gap-2 h-full`}
			>
				{images.map((item) => {
					return (
						<div key={item.id}>
							<img
								src={item.src}
								className={`item w-96 h-96 rounded-2xl cursor-pointer object-cover transition-all duration-300 ease-in`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageCarousel;
