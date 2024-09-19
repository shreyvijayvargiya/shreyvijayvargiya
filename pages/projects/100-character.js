import React, { useState } from "react";

const HundredCharacter = () => {
	const [val, setVal] = useState("");

	const handleChange = (e) => {
		const newVal = e.target.value;
		setVal(newVal);
	};

	const progressWidth = `${(val.trim().length / 100) * 100}`;

	return (
		<div className="w-full flex justify-center items-center h-screen">
			<div className="w-96 overflow-hidden">
				<div className="relative flex gap-4 items-center justify-end my-3 h-12 overflow-x-scroll w-full border border-gray-200 rounded-2xl">
					<div
						className={`absolute top-0 left-0 bottom-0 flex justify-center items-center rounded-l-2xl rounded-r-none h-12 bg-green-200 z-20 transition-all duration-300 ease-in-out`}
						style={{ width: progressWidth + "%" }}
					>
						{Math.round(progressWidth) > 4 && Math.round(progressWidth)}
					</div>
					<div
						className="relative h-12 flex gap-2 bg-red-200 justify-around items-center z-0 rounded-r-2xl rounded-l-none transition-all duration-300 ease-in-out w-full"
						style={{ width: 100 - progressWidth + "%" }}
					>
						{Math.round(100 - progressWidth)}
					</div>
				</div>
				<textarea
					className="p-6 border border-gray-50 outline-none focus:border-gray-50 w-full min-w-md max-w-xl"
					placeholder="100 character limit"
					onChange={handleChange}
					maxLength={100}
					value={val}
					rows={4}
					style={{
						position: "relative",
						padding: "1rem",
						border: "2px solid transparent",
						borderRadius: "1rem",
						background: `linear-gradient(white, white) padding-box, 
                 linear-gradient(to top right, black ${progressWidth}%, #d4d4d8 ${progressWidth}%) border-box`,
						transition: "all 0.5s ease",
					}}
				/>
			</div>
		</div>
	);
};

export default HundredCharacter;
