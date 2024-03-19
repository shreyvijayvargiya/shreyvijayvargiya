const StoryTelling = () => {
	const loaders = [
		{
			id: 1,
			image: "https://source.unsplash.com/random/800x600",
			caption:
				"Chase sunsets at the Eiffel Tower and feel the echoes of history at the Colosseum.",
		},
		{
			id: 2,
			image: "https://source.unsplash.com/random/600x600",
			caption:
				"Dance under starlit skies at vibrant festivals and taste the world in bustling local markets",
		},
		{
			id: 3,
			image: "https://source.unsplash.com/random/400x500",
			caption:
				"From the majestic Swiss Alps to the sun-kissed shores of the Amalfi Coast, nature's canvas unfolds.",
		},
		{
			id: 4,
			image: "https://source.unsplash.com/random/600x600",
			caption:
				"Explore medieval tales in the shadow of a Castle and uncover ancient mysteries amidst Ruins.",
		},
		{
			id: 5,
			image: "https://source.unsplash.com/random/500x600",
			caption:
				"Savor the richness of Italian Pasta and indulge in the decadence of French Pastries. A feast for your senses!",
		},
	];

	return (
		<div className="bg-black relative bg-opacity-90 h-full w-full flex flex-col justify-center items-center py-20">
			{loaders.map((item) => (
				<div
					key={item.id}
					className={`md:w-3/5 relative left-${item.id * 10} right-${
						item.id * 10
					}  grid grid-cols-3 gap-10 m-10 sm:grid-flow-col xxs:grid-flow-col xs:grid-flow-col justify-around items-center mx-auto sm:w-full xs:w-full xxs:w-full h-full list-item-${
						item.id
					}`}
				>
					<p className="text-2xl font-sans text-gray-200 font-bold col-span-1">
						{item.caption}
					</p>
					<img
						src={item.image}
						width={"100%"}
						height={"100%"}
						className={`w-full item-image-${item.id} h-full rounded-3xl shadow-2xl col-span-2`}
					/>
				</div>
			))}
		</div>
	);
};
export default StoryTelling;
