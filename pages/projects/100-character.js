import React, { useState } from "react";

const HundredCharacter = () => {
	const [val, setVal] = useState("");

	const handleChange = (e) => {
		const newVal = e.target.value;
		setVal(newVal);
	};

	const progressWidth = `${(val.trim().length / 100) * 100}`;

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="w-96 overflow-hidden">
				<div className="relative flex gap-4 items-center justify-end my-3 h-16 overflow-x-scroll w-full border border-gray-200 rounded-xl">
					<div
						className={`absolute top-0 left-0 bottom-0 flex justify-center items-center rounded-l-xl rounded-r-none h-16 bg-green-200 z-20 transition-all duration-300 ease-in-out`}
						style={{ width: progressWidth + "%" }}
					>
						{progressWidth > 20 ? "Goals" : null}
					</div>
					<div
						className="relative h-16 flex gap-2 bg-red-200 justify-around items-center z-0 rounded-r-xl rounded-l-none transition-all duration-300 ease-in-out w-full"
						style={{ width: 100 - progressWidth + "%" }}
					>
						{progressWidth > 20 ? "Danger" : "Procastination"}
					</div>
				</div>

				<textarea
					className="p-4 border-2 border-gray-200 outline-none focus:border-black rounded-xl w-full min-w-md max-w-xl"
					placeholder="100 character limit"
					onChange={handleChange}
					maxLength={100}
					value={val}
					rows={3}
				/>
			</div>
		</div>
	);
};

export default HundredCharacter;
