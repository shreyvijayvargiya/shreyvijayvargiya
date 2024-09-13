import { useUuid } from "@mantine/hooks";
import fs from "fs";
import path from "path";

module.exports = async (req, res) => {
	const dirPath = path.join(process.cwd(), "/pages", "/projects");
	const projectFiles = fs.readdirSync(dirPath, { recursive: true });
	const files = projectFiles?.map((item, index) => {
		return {
			name: item.replace(".js", ""),
			link: `/projects/${item.replace(".js", "")}`,
			id: index + 1,
		};
	});
	res.send(files);
};
