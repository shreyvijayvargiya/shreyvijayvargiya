import { ChevronDown, ChevronUp, StarIcon } from "lucide-react";
import React, { useState } from "react";
import colors from "tailwindcss/colors";

const images = [
	{
		src: "/clothes-images/img-1.jpg",
		name: "Stiched white ",
		id: 1,
		rating: 3.5,
		orderAt: "24 August 2024",
		hoverBackground: "bg-blue-50",
	},
	{
		src: "/clothes-images/img-2.jpg",
		name: "Purple lining",
		id: 2,
		rating: 4,
		orderAt: "26 August 2024",
		hoverBackground: "bg-green-50",
	},
	{
		src: "/clothes-images/img-3.jpg",
		name: "Creamy flower",
		id: 3,
		rating: 4.8,
		orderAt: "28 August 2024",
		hoverBackground: "bg-pink-50",
	},
	{
		src: "/clothes-images/img-4.jpg",
		name: "White spots",
		id: 4,
		rating: 3,
		orderAt: "31 August 2024",
		hoverBackground: "bg-yellow-50",
	},
];


const UserOrders = () => {
	const [showDetails, setShowDetails] = useState(false);

	const renderStars = (rating) => {
		const filledStars = Math.floor(rating);
		const halfStar = rating % 1 !== 0;
		const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

		return (
			<div className="flex items-center">
				{[...Array(filledStars)].map((_, index) => (
					<StarIcon
						key={`filled-${index}`}
						color={colors.yellow[600]}
						fill={colors.yellow[600]}
						size={18}
					/>
				))}
				{halfStar && (
					<StarIcon
						key="half-star"
						color={colors.yellow[600]}
						fill="none"
						size={18}
					/>
				)}
				{[...Array(emptyStars)].map((_, index) => (
					<StarIcon key={`empty-${index}`} color={colors.gray[300]} size={18} />
				))}
			</div>
		);
	};

	return (
		<div className="flex justify-center items-center h-screen w-full">
			<div className="w-1/2 mx-auto rounded-md py-2 shadow-xl border border-gray-400">
				<div className="flex justify-between items-center p-4">
					<p className="text-xl rounded-xl">Previous Orders</p>
					<button
						className="p-3 rounded-md hover:bg-gray-100 hover:border hover:border-gray-400 bg-gray-50 m-2 flex justify-around items-center gap-2"
						onClick={() => setShowDetails(!showDetails)}
					>
						{showDetails ? "Hide details" : "Show details"}
						{showDetails ? (
							<ChevronDown size={18} color={colors.gray[900]} />
						) : (
							<ChevronUp size={18} color={colors.gray[900]} />
						)}
					</button>
				</div>
				<div className="border-t border-gray-400" />
				<div
					style={{
						display: "flex",
						flexDirection: showDetails ? "column" : "row",
						width: showDetails ? "100%" : "50%",
						height: showDetails ? "auto" : "100%",
            paddingLeft: !showDetails ? "16px": "4px",
						justifyContent: "flex-start",
						alignItems: "flex-start",
            padding: "10px",
						transition: "width 0.5s ease, height 0.5s ease, opacity 0.5s ease",
					}}
				>
					{images.map((item) => {
						return (
							<div
								className={`w-full p-2 m-2 group cursor-pointer flex justify-start gap-4 items-start hover:${item.hoverBackground} rounded-xl`}
								key={item.id}
								onClick={() => setShowDetails(!showDetails)}
							>
								<img
									src={item.src}
									className={`w-24 h-24 object-cover rounded-xl group-hover:w-28 group-hover:h-28 group-hover:translate-x-4 translate-x-0 group-hover:shadow-2xl transition-all duration-100 ease-linear group-hover:ml-4`}
								/>
								<div
									className={`${
										showDetails
											? "opacity-100 w-full h-0 inline-block"
											: "opacity-0 w-0 h-0 hidden"
									} transition-all duration-200 ease-in`}
								>
									<p className="text-2xl font-mono font-semibold">
										{item.name}
									</p>
									<p className="text-gray-600">{item.orderAt}</p>
									<div className="flex justify-start items-center gap-1">
										{renderStars(item.rating)}
										<p>{item.rating}/5</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default UserOrders;
