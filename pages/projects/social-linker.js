import {
	FaFacebook,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import colors from "tailwindcss/colors";

const links = [
	{
		name: "Facebook",
		icon: <FaFacebook size={24} color={colors.blue[400]} />,
		color: colors.blue[400],
	},
	{
		name: "LinkedIn",
		icon: <FaLinkedin size={24} color={colors.indigo[400]} />,
		color: colors.indigo[400],
	},
	{
		name: "Github",
		icon: <FaGithub size={24} color={colors.gray[600]} />,
		color: colors.gray[600],
	},
	{
		name: "Twitter",
		icon: <FaTwitter size={24} color={colors.blue[900]} />,
		color: colors.blue[900],
	},
	{
		icon: <FaInstagram size={24} color={colors.pink[400]} />,
		name: "Instagram",
		color: colors.pink[400],
	},
];
const SocialLinker = () => {
	return (
		<div className="flex justify-center items-center min-h-screen w-full">
			<div className="flex justify-between items-center gap-5 w-auto">
				{links.map((item) => {
					return (
						<div
							className={`relative group bg-white hover:shadow-xl hover:scale-105 transform transition-all duration-100 ease-in shadow-md cursor-pointer border border-gray-100 p-2 rounded-full`}
							key={item.name}
						>
							<span
								className="absolute left-0 right-0 text-center w-0 h-0 opacity-0 transform group-hover:-translate-y-10 group-hover:visible group-hover:opacity-100 duration-200 transition-all ease-in"
								style={{ color: item.color }}
							>
								{item.name}
							</span>
							{item.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default SocialLinker;
