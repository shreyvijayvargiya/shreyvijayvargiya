import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Thermometer, CloudDrizzle, Wind } from "lucide-react";

const DashboardWidget = () => {
	const dashboardRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			dashboardRef.current,
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1 }
		);
	}, []);

	return (
		<div
			ref={dashboardRef}
			className="flex items-center justify-center w-full h-screen "
		>
			<div
				className="grid grid-cols-2 gap-2 p-4 bg-gray-900 rounded-xl shadow-xl h-60"
				style={{ width: 300 }}
			>
				<div className="col-span-1 flex flex-col items-center h-full justify-center bg-gray-200 rounded-2xl">
					<Thermometer className="text-gray-500" size={24} />
					<p className="text-lg font-semibold">68°F</p>
					<p className="text-sm text-gray-500">Room temperature</p>
				</div>

				<div className="col-span-1 space-y-1">
					<div className="col-span-1 flex flex-col items-center justify-center bg-green-500 rounded-2xl p-4">
						<Wind className="text-white" size={24} />
						<p className="text-lg font-semibold text-white">684</p>
						<p className="text-sm text-white">CO₂</p>
					</div>

					<div className="col-span-2 flex flex-col items-center justify-center bg-blue-500 rounded-2xl p-4">
						<CloudDrizzle className="text-white" size={24} />
						<p className="text-lg font-semibold text-white">64%</p>
						<p className="text-sm text-white">Humidity</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardWidget;
