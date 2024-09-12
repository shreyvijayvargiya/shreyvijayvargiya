import React, { useState } from "react";
import { Group, Text, Stack, Paper, ScrollArea } from "@mantine/core";
import { gsap } from "gsap";
import { CopyBlock, dracula } from "react-code-blocks";
import { FileIcon } from "lucide-react";
import {
	IoLogoCss3,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoReact,
} from "react-icons/io5";
import colors from "tailwindcss/colors";

const fileContents = {
	"index.html": {
		content: `<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample HTML Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to the Sample Page</h1>
  </header>
  <main>
    <button class="button">Click Me</button>
  </main>
  <footer>
    <p>&copy; 2024 Your Company</p>
  </footer>
</body>
</html>
`,
		type: "HTML",
		language: "html",
	},
	"styles.css": {
		content: `/* styles.css */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}
`,
		type: "CSS",
		language: "css",
	},
	"demo.jsx": {
		content: `import React from 'react';
import { Button, Modal, Text } from '@mantine/core';

const BottomSheet = ({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose} title="Bottom Sheet">
    <Text>This is the content of the Bottom Sheet component.</Text>
    <Button onClick={onClose}>Close</Button>
  </Modal>
);

export default BottomSheet;`,
		type: "JavaScript",
		language: "jsx",
	},
};

const CodeFileComponent = () => {
	const [selectedFile, setSelectedFile] = useState("index.html");

	const handleFileClick = (fileName) => {
		setSelectedFile(fileName);
	};

	React.useEffect(() => {
		gsap.fromTo(
			".code-file-component",
			{ opacity: 0 },
			{ opacity: 1, duration: 1 }
		);
	}, []);

	const getFileIcon = (fileName) => {
		const extension = fileName.split(".").pop();
		switch (extension) {
			case "html":
				return <IoLogoHtml5 color={colors.green[600]} size={24} />;
			case "css":
				return <IoLogoCss3 color={colors.blue[600]} size={24} />;
			case "jsx":
				return <IoLogoReact color={colors.indigo[600]} size={24} />;
			case "js":
				return <IoLogoJavascript color={colors.yellow[600]} size={24} />;
			default:
				return <FileIcon />;
		}
	};

	return (
		<div className="flex justify-center items-start w-1/2 mx-auto h-1/2">
			<div className="w-1/4 h-full p-4 border-r border-gray-200">
				<Stack spacing="xs">
					{Object.keys(fileContents).map((file) => (
						<Paper
							key={file}
							my="0"
							radius="md"
							onClick={() => handleFileClick(file)}
							className={`cursor-pointer flex items-center px-2 py-1 ${
								selectedFile === file ? "bg-gray-50" : ""
							}`}
						>
							<Group spacing="xs">
								<div>{getFileIcon(file)}</div>
								<Text weight={500}>{file}</Text>
							</Group>
						</Paper>
					))}
				</Stack>
			</div>
			<div className="w-3/4 p-4">
				<div className="code-file-component rounded-md h-full">
					<div className="flex items-center justify-between p-3 bg-gray-50 rounded-t-md border border-gray-200">
						<div>
							<Text weight={500}>{selectedFile}</Text>
						</div>
						<Group>
							<Text size="sm" color="gray">
								{fileContents[selectedFile].type}
							</Text>
						</Group>
					</div>
					<CopyBlock
						codeBlock
						language={fileContents[selectedFile].language}
						text={fileContents[selectedFile].content}
						breakLines={true}
						theme={dracula}
						wrapLines={true}
						showLineNumbers={true}
						className="border border-black rounded-b-xl rounded-t-none"
					/>
				</div>
			</div>
		</div>
	);
};

export default CodeFileComponent;
