import React from "react";

const PopDetails = () => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-screen">
			<div className="max-w-xl group relative">
				<div className="overflow-hidden absolute left-0 right-0 bottom-10 group-hover:h-44 w-full h-0 invisible opacity-0 group-hover:opacity-100 my-4 group-hover:visible transform transition-all duration-500 ease-in bg-gray-50 p-4 rounded-2xl hover:scale-105">
					<div className="flex justify-between items-center">
						<img src="/avatar.png" className="w-12 h-12" />
						<button className="p-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200">
							Subscribe
						</button>
					</div>
					<div className="mt-4">
						<p className="text-xl">Shrey Vijayvargiya</p>
						<p className="text-gray-800 text-sm">@shreysletter</p>
					</div>
					<div className="mt-2">
						<div className="flex justify-start gap-2 items-center truncate">
							<p>
								199 <span className="text-gray-800 text-sm">followers</span>
							</p>
							<p>
								299 <span className="text-gray-800 text-sm">following</span>
							</p>
						</div>
					</div>
				</div>
				<div className="flex justify-start items-center gap-1 relative rounded-full px-2 py-1 w-60 border border-white hover:border hover:border-gray-200 cursor-pointer group transition-all duration-500">
					<img
						src="/avatar.png"
						className="w-0 h-0 group-hover:w-10 group-hover:h-10 opacity-0 invisible group-hover:visible group-hover:opacity-100 rounded-full transition-all duration-500 ease-in-out group-hover:ml-1"
					/>
					<p className="group-hover:underline group-hover:px-1 group-hover:text-center text-gray-700 transition-all duration-500 ease-in-out group-hover:text-black group-hover:font-semibold font-cool">
						Shrey Vijayvargiya
					</p>
				</div>
			</div>
		</div>
	);
};
export default PopDetails;
