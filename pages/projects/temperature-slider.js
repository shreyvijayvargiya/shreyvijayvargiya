import React, { useState } from "react";
import { useElementSize } from "@mantine/hooks";
import { gsap } from "gsap";

const TemperatureSlider = () => {
	const [value, setValue] = useState(50);
	const { ref: sliderRef, width: sliderWidth } = useElementSize();

	const handleChange = (event) => {
		const newValue = parseInt(event.target.value, 10);
		setValue(newValue);
		gsap.to(".temp-label", {
			x: (newValue / 100) * sliderWidth - 24,
			duration: 0.2,
			ease: "power2.out",
		});
	};

	const generateTicks = () => {
		const ticks = [];
		for (let i = 5; i < 100; i += 5) {
			ticks.push(
				<div
					key={i}
					style={{
						position: "absolute",
						left: `${i}%`,
						top: 0,
						bottom: 0,
						width: "1px",
						backgroundColor: "#e4e4e7",
					}}
				/>
			);
		}
		return ticks;
	};

	return (
		<div className="flex-col flex justify-center items-center h-screen w-full">
			<div className="w-1/3 mx-auto">
				<div className="rounded-xl mx-auto relative border border-gray-200 w-full ">
					<div
						style={{
							position: "absolute",
							left: "0",
							top: "100%",
							width: "100%",
							height: "100%",
							pointerEvents: "none",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							className="temp-label"
							style={{
								position: "absolute",
								top: "1px",
								left: 0,
								backgroundColor: "#333",
								color: "#fff",
								padding: "5px 10px",
								borderRadius: "12px",
								fontSize: "14px",
								whiteSpace: "nowrap",
								transform: `translateX(${(value / 100) * sliderWidth - 24}px)`,
								pointerEvents: "none",
							}}
						>
							{value}°C
						</div>
					</div>
					<input
						type="range"
						min="0"
						max="100"
						value={value}
						className="w-full appearance-none border-none rounded-xl bg-none outline-none cursor-pointer"
						onChange={handleChange}
						ref={sliderRef}
					/>
					{generateTicks()}
				</div>
			</div>

			<style jsx>{`
				input[type="range"]::-webkit-slider-thumb {
					appearance: none;
					width: 8px;
					height: 40px;
					position: relative;
					top: 4px;
					background: #333;
					cursor: pointer;
					border-radius: 4px;
				}

				input[type="range"]::-moz-range-thumb {
					width: 8px;
					appearance: none;
					height: 40px;
					background: #333;
					cursor: pointer;
					border-radius: 4px;
				}

				input[type="range"]::-ms-thumb {
					width: 8px;
					appearance: none;
					height: 40px;
					background: #333;
					border-radius: 4px;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default TemperatureSlider;
