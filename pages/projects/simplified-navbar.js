import {
	ChevronLeft,
	ChevronRight,
	HomeIcon,
	Laptop2Icon,
	PersonStandingIcon,
	Settings,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<div className="flex justify-between items-center gap-2 border border-gray-200 rounded-md w-auto mx-auto bg-gray-900 px-2 py-2 h-auto">
				<div
					className="bg-gray-900 hover:bg-gray-800 rounded-md cursor-pointer p-2"
					onClick={() => setToggle(!toggle)}
				>
					{toggle ? (
						<ChevronLeft size={20} color="white" />
					) : (
						<ChevronRight size={20} color="white" />
					)}
				</div>
				<div
					className={`${
						toggle
							? "w-full flex justify-center items-center gap-4"
							: "w-0 invisible h-0"
					} transition-all duration-100`}
				>
					<div className="group flex justify-center items-center gap-2 hover:bg-gray-800 rounded-md p-2 cursor-pointer">
						<HomeIcon size={18} color="white" />
						<div className="hidden group-hover:block text-white">Home</div>
					</div>
					<div className="group flex justify-center items-center gap-2 hover:bg-gray-800 rounded-md p-2 cursor-pointer">
						<Laptop2Icon size={24} color="white" />
						<div className="hidden group-hover:block text-white">Product</div>
					</div>
					<div className="group  flex justify-center items-center gap-2 hover:bg-gray-800 rounded-md p-2 cursor-pointer">
						<PersonStandingIcon size={24} color="white" />
						<div className="hidden group-hover:block text-white">About</div>
					</div>
					<div className="group flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-800 rounded-md p-2">
						<Settings size={20} color="white" />
						<div className="hidden group-hover:block transition-all duration-100 text-white">
							Settings
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
