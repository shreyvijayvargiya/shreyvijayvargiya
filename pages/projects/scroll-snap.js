import React, { useEffect } from "react";

const images = [
	{
		src: "/clothes-images/img-1.jpg",
		name: "Stiched white ",
		id: 1,
		rating: 3.5,
		review: 10,
		color: "bg-gray-50",
	},
	{
		src: "/clothes-images/img-2.jpg",
		name: "Purple lining",
		id: 2,
		rating: 4,
		review: 4,
		color: "bg-indigo-50",
	},
	{
		src: "/clothes-images/img-3.jpg",
		name: "Creamy flower",
		id: 3,
		rating: 4.8,
		review: 5,
		color: "bg-yellow-50",
	},
	{
		src: "/clothes-images/img-4.jpg",
		name: "White spots",
		id: 4,
		rating: 3,
		review: 6,
		color: "bg-pink-50",
	},
];

const ScrollSnap = () => {
	useEffect(() => {
		const handleScroll = (e) => {
      console.log(e, "e")
    };
		window.addEventListener("scroll", (e) => {
      handleScroll(e)
    });
		return () => {
			window.removeEventListener("scrollend", handleScroll);
		};
	}, []);
	return (
		<div
			className="container relative flex justify-start items-start"
			style={{
				scrollSnapType: "x mandatory",
				scrollMarginLeft: "0px",
				width: "auto",
				overflowY: "scroll",
				scrollSnapStop: "normal",
			}}
		>
			<div className="fixed bottom-10 left-10 p-4 border border-gray-200 rounded-full w-20 h-20"></div>
			{images.map((item) => {
				return (
					<div
						key={item.id}
						className={`h-screen min-w-full flex flex-col justify-center items-center ${item.color}`}
						style={{
							scrollSnapAlign: "start",
						}}
					>
						<p className="text-center text-4xl font-fancy text-gray-500 text-gradient-to-tr from-gray-50 to-green-50">
							{item.name}
						</p>
						<img
							className="w-60 h-60 hover:h-96 hover:w-96 mx-auto object-cover rounded-xl shadow-xl my-4 transition-all duration-400 ease-in"
							src={item.src}
						/>
					</div>
				);
			})}
		</div>
	);
};
export default ScrollSnap;
