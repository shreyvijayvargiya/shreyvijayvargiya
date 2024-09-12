import { LinkIcon } from "lucide-react";
import React from "react";

const UserOnboarding = () => {
	return (
		<div className="flex justify-center items-center w-full h-screen flex-col">
			<div className="min-w-1/4 max-w-4xl">
				<div className="max-w-xl group relative">
					<div className="overflow-hidden absolute left-0 right-0 bottom-14 group-hover:h-60 w-full h-0 invisible opacity-0 group-hover:opacity-100 my-4 group-hover:visible transform transition-all duration-500 ease-in border border-gray-200 p-4 rounded-2xl hover:scale-105">
						<button className="p-2 border border-gray-200 rounded-md my-2 w-full bg-black text-white flex justify-center items-center gap-2">
							Get started with
							<img src="/logos/google_logo.png" className="w-10 h-10" />
						</button>
						<button className="p-2 border border-gray-200 rounded-md my-2 w-full bg-blue-300 flex justify-center items-center gap-2">
							Login with <img src="/logos/x_icon.png" className="w-10 h-10" />
						</button>
						<button className="p-2 border border-gray-200 rounded-md my-2 w-full bg-pink-300 flex justify-center items-center gap-2">
							Login with Magic Link
							<LinkIcon />
						</button>
					</div>
					<div className="">
						<p className="p-4 text-center border border-gray-200 rounded-md hover:rounded-full hover:bg-yellow-50 bg-opacity-25 transition-all duration-500 ease-in-out ">
							Get Started
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserOnboarding;
