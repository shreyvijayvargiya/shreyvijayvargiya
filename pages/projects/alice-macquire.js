import React from "react";
import { Badge } from "@mantine/core";
import { ChevronRightIcon, Circle, Github, Linkedin, Mail, NetworkIcon, SendIcon } from "lucide-react";

const AliceMacguire = () => {
	return (
		<div className="bg-gray-900 text-gray-100 min-h-screen flex justify-center items-center p-10">
			<div className="max-w-2xl w-full space-y-6">
				<h1 className="text-3xl font-bold">Alice Maguire</h1>
				<p className="text-lg">
					I design and developed products With 5 years of experience in{" "}
					<span className="font-semibold text-gray-100">
						Frontend Development
					</span>{" "}
					and <span className="font-semibold text-gray-100">UI/UX Design</span>,
					I craft user-centric and visually appealing interfaces.
				</p>
				<p className="text-lg ">
					Lately, I have been building{" "}
					<Badge
						size="lg"
						color="pink"
						className="hover:bg-pink-200 text-black hover:translate-x-2 hover:p-4 duration-100 cursor-pointer"
						rightSection={<SendIcon size={12} />}
					>
						Coinwallet
					</Badge>
					. You can also checkout{" "}
					<Badge
						size="lg"
						color="pink"
						className="hover:bg-pink-200 text-black hover:translate-x-2 hover:p-4 duration-100 cursor-pointer"
						rightSection={<NetworkIcon size={12} />}
					>
						Mintree
					</Badge>
					,{" "}
					<Badge
						size="lg"
						color="pink"
						className="hover:bg-pink-200 text-black hover:translate-x-2 hover:p-4 duration-100 cursor-pointer"
						rightSection={<Circle size={12} />}
					>
						Basedapp
					</Badge>
					, or{" "}
					<Badge
						size="lg"
						color="pink"
						className="hover:bg-pink-200 text-black hover:translate-x-2 hover:p-4 duration-100 cursor-pointer"
						rightSection={<ChevronRightIcon size={12} />}
					>
						All Projects
					</Badge>
					.
				</p>
				<p className="text-lg">
					Find me on{" "}
					<Badge
						size="lg"
						color="lime"
						className="hover:bg-green-200 text-black hover:p-4 duration-100 cursor-pointer"
						rightSection={<ChevronRightIcon size={12} />}
						leftSection={<Linkedin size={14} />}
					>
						LinkedIn
					</Badge>{" "}
					and{" "}
					<Badge
						size="lg"
						color="lime"
						className="hover:bg-green-200 text-black hover:p-4 duration-100 cursor-pointer"
						rightSection={<ChevronRightIcon size={12} />}
						leftSection={<Github size={14} />}
					>
						GitHub
					</Badge>{" "}
					or contact me using{" "}
					<Badge
						size="lg"
						className="hover:bg-green-200 text-black hover:p-4 duration-100 cursor-pointer"
						color="lime"
						rightSection={<ChevronRightIcon size={12} />}
						leftSection={<Mail size={14} />}
					>
						E-Mail
					</Badge>{" "}
				</p>
				<p className="text-lg">
					My current timezone is{" "}
					<Badge size="lg" color="gray">
						{new Date().toLocaleTimeString()}
					</Badge>
				</p>
			</div>
		</div>
	);
};

export default AliceMacguire;
