import React, { useEffect, useState } from "react";

const demoImages = [
	{ src: "/logos/google_logo.png" },
	{ src: "/logos/meta_logo.png" },
	{ src: "/logos/dribble_logo.png" },
	{ src: "/logos/spotify_logo.png" },
	{ src: "/logos/slack_logo.png" },
	{ src: "/logos/behance_logo.png" },
	{ src: "/logos/stripe_logo.png" },
	{ src: "/logos/gumroad_logo.png" },
	{ src: "/logos/mailchimp_logo.png" },
	{ src: "/logos/nextjs_logo.png" },
	{ src: "/logos/mongodb.svg" },
];

const ClientShowcase = () => {
	const [images, setImages] = useState(demoImages);

	useEffect(() => {
		const duplicatedImages = [...images, ...demoImages];
		setImages(duplicatedImages);
	}, []);

	return (
		<div className="flex justify-center items-center flex-col h-screen w-full p-10 overflow-x-hidden">
			<p className="text-7xl text-left font-fancy my-5">Our clients</p>
			<br />
			<br />
			<div
				className="img-container flex justify-around items-center gap-10"
				style={{
					display: "flex",
					animation: "scroll 10s linear infinite",
					whiteSpace: "nowrap",
				}}
			>
				{images?.map((item, index) => (
					<img
						key={index}
						src={item.src}
						className={`w-20 max-w-md h-20 object-contain rounded-xl hover:rounded-md hover:w-40 hover:h-40 transition-all duration-100 ease-in hover:skew-x-2 cursor-pointer img-each`}
					/>
				))}
			</div>
			<style>
				{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
      `}
			</style>
		</div>
	);
};

export default ClientShowcase;
