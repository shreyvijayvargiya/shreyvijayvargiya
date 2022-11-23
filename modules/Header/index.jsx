import React from "react";
import {
	AiFillTwitterCircle,
	AiFillGithub,
	AiFillMediumCircle,
	AiFillYoutube,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import colors from "tailwindcss/colors";
import { Tooltip } from "@mantine/core";

const Header = () => {
	return (
		<div
			className="fixed top-0 left-0 right-0 bg-gray-100 z-10"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				padding: "10px",
				background: "#f8fafc",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<div
					className="flex justify-between items-center m-2"
					style={{
						display: "flex",
						justifyContent: "flex-start",
						alignItems: "flex-start",
						gap: "10px",
					}}
				>
					<a href="/">
						<img
							src="./shrey-min.jpeg"
							style={{ width: "2em", height: "2em", borderRadius: "4px" }}
						/>
					</a>
					<p className="text-3xl font-bold text-black">Shrey</p>
				</div>
				<div className="flex justify-start items-center m-1 gap-2">
					<Tooltip label="Twitter">
						<a
							href="https://twitter.com/treyvijay"
							target="_blank"
							data-tip="Twitter"
							alt="Twitter"
							aria-label="Twitter"
							rel="noreferrer"
							className="m-1"
						>
							<AiFillTwitterCircle
								size={24}
								color={colors.blue[600]}
								data-tip="Twitter"
							/>
						</a>
					</Tooltip>
					<Tooltip label="Github">
						<a
							href="https://github.com/shreyvijayvargiya"
							target="_blank"
							rel="noreferrer"
							className="m-1"
						>
							<AiFillGithub size={24} color={colors.indigo[600]} />
						</a>
					</Tooltip>
					<Tooltip label="Medium">
						<a
							href="https://medium.com/@shreyvijayvargiya26"
							target="_blank"
							rel="noreferrer"
							className="m-1"
						>
							<AiFillMediumCircle size={24} color={colors.orange[600]} />
						</a>
					</Tooltip>
					<Tooltip label="Devto">
						<a
							href="https://dev.to/shreyvijayvargiya"
							target="_blank"
							rel="noreferrer"
							className="m-1"
						>
							<FaDev size={24} color={colors.pink[600]} />
						</a>
					</Tooltip>
					<Tooltip label="Youtube">
						<a
							href="https://www.youtube.com/channel/UC6I-Tz6QwYbJpoIK7l0NtXA"
							target="_blank"
							rel="noreferrer"
							className="m-1"
						>
							<AiFillYoutube size={24} color={colors.red[600]} />
						</a>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};
export default Header;
