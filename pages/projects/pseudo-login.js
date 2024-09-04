import React from "react";
import { motion } from "framer-motion";
import { LinkIcon } from "lucide-react";

const PseudoLogin = () => {
	
	return (
		<div className="flex justify-center items-center w-full h-screen flex-col">
			<div className="p-2 group">
				<p className="group-hover:hidden visible text-gray-900 rounded-md border border-gray-200 group-hover:bg-gray-100">
					Get Started
				</p>
				<div className="group-hover:visible invisible group-hover:h-48 group-hover:w-48 transition-all duration-200 ease-in">
					<button className="p-2 border border-gray-200 rounded-md my-2 w-full bg-gradient-to-tr from-red-200 via-yellow-200 to-green-300">
						Login with google
					</button>
					<button className="p-2 border border-gray-200 rounded-md my-2 w-full bg-gradient-to-tr from-gray-50 to-blue-200 ">
						Login with Twitter
					</button>
				</div>
			</div>
		</div>
	);
};

export default PseudoLogin;
