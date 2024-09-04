import gsap from "gsap";
import React, { useState } from "react";

const images = [
	{
		src: "/demo-images/img-1.avif",
	},
	{ src: "/demo-images/img-2.avif" },
	{ src: "/demo-images/img-3.avif" },
	{ src: "/demo-images/img-4.avif" },
];

const ImageShowOver = () => {
  const [active, setActive] = useState();
	return (
		<div className="flex justify-center items-center h-screen w-full">
			<div className="flex justify-around items-center gap-2">
				{images.map((item, index) => (
					<img
						key={item.src}
						src={item.src}
						className={`w-40 h-40 object-cover rounded-xl hover:w-60 hover:h-60 transition-all duration-100 ease-in hover:skew-x-2 cursor-pointer img-${index}`}
            onClick={() => {
              gsap.to(".")
            }}
						onMouseEnter={() => {
							gsap.to(`.img-${index}`, { skewY:0,scale: 2, duration: 1, zIndex: 100 });
						}}
						onMouseLeave={() => {
							gsap.to(`.img-${index}`, {
								skewY: -10,
								scale: 1,
								duration: 1,
								zIndex: 1,
							});
						}}
					/>
				))}
			</div>
		</div>
	);
};
export default ImageShowOver;
