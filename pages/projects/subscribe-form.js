import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DollarSign, Star, Shield } from "lucide-react";

const SubscriptionForm = () => {
	const planRefs = useRef([]);

	useEffect(() => {
		gsap.fromTo(
			planRefs.current,
			{ scale: 0.8, opacity: 0 },
			{ scale: 1, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" }
		);
	}, []);

	const [active, setActive] = useState(0);
	return (
		<div className="h-screen flex justify-center items-center flex-col gap-4">
			<div className="w-full max-w-5xl p-5 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-100 hover:border-none rounded-xl">
				<div
					ref={(el) => (planRefs.current[0] = el)}
					onClick={() => {
						setActive("$9.99");
					}}
					className={`p-4 plan-a bg-white rounded-xl text-left group hover:border transition-all ease-in-out duration-500 hover:text-indigo-600 cursor-pointer hover:bg-indigo-50 border border-white hover:border-gray-100`}
				>
					<DollarSign className="w-12 h-12 group-hover:text-indigo-500 mb-4 group-hover:w-14 group-hover:h-14 transition-all duration-500 ease-in" />
					<h2 className="text-xl font-bold">Basic Plan</h2>
					<p className="mb-4">Enjoy basic features and support.</p>
					<br />
					<button className="px-4 py-2 text-white rounded-md bg-gray-800 hover:bg-black group-hover:bg-indigo-600 transition-all duration-500 ease-in w-full">
						<p className="font-bold">$9.99/month</p>
					</button>
				</div>

				<div
					ref={(el) => (planRefs.current[1] = el)}
					className="p-4 plan-b bg-white text-left rounded-xl transform transition-all ease-in duration-500 hover:text-yellow-600 cursor-pointer group hover:bg-yellow-50 hover:border-yellow-500"
					onClick={() => {
						setActive("$19.99");
					}}
				>
					<Star className="w-12 h-12 group-hover:text-yellow-500 mb-4 group-hover:w-14 group-hover:h-14 transition-all duration-500 ease-in" />
					<h2 className="text-xl font-bold">Pro Plan</h2>
					<p className="mb-4">Access all premium features.</p>
					<br />
					<button className="px-4 py-2 bg-gray-800 hover:bg-black0 text-white rounded-md group-hover:bg-yellow-600 w-full">
						<p className="font-bold">$19.99/month</p>
					</button>
				</div>

				<div
					ref={(el) => (planRefs.current[2] = el)}
					className="p-4 bg-white plan- text-left rounded-xl transform transition-all ease-in duration-500 hover:text-green-600 cursor-pointer hover:bg-green-50 hover:border-green-500 group"
					onClick={() => {
						setActive("$29.99");
					}}
				>
					<input
						type="radio"
						checked={active === "$29.99"}
						className="checked:bg-black bg-black"
					/>
					<Shield className="w-12 h-12 group-hover:text-green-500 mb-4 group-hover:w-14 group-hover:h-14 transition-all duration-500 ease-in" />
					<h2 className="text-xl font-bold">Enterprise Plan</h2>
					<p className="">Advanced features for enterprises.</p>
					<br />
					<br />
					<button className="px-4 py-2 text-white rounded-md bg-gray-800 group-hover:bg-green-600 w-full">
						<p className="font-bold">$29.99/month</p>
					</button>
				</div>
			</div>
			<div>
				<p>Welcome John Doe</p>
				<button className="px-4 py-2 text-white rounded-md bg-gray-800 hover:bg-black w-full">
					<p className="font-bold">{active}/month</p>
				</button>
			</div>
		</div>
	);
};

export default SubscriptionForm;
