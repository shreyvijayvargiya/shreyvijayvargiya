import React, { useState } from "react";
import {
	CopyBlock,
	atomOneDark,
	dracula,
	github,
	nord,
	solarizedDark,
	vs2015,
} from "react-code-blocks";
import { Settings } from "lucide-react";
import {
	SiTypescript,
	SiMarkdown,
	SiTailwindcss,
	SiVuedotjs,
	SiSvelte,
	SiRuby,
	SiDocker,
	SiYaml,
	SiGit,
	SiJson,
	SiGo,
} from "react-icons/si";
import {
	IoLogoCss3,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoReact,
} from "react-icons/io5";
import {
	FaFileAlt,
	FaJava,
	FaNodeJs,
	FaPhp,
	FaPython,
	FaRust,
} from "react-icons/fa";
import colors from "tailwindcss/colors";

const availableThemes = [
	{ name: "Atom One Dark", theme: atomOneDark },
	{ name: "Dracula", theme: dracula },
	{ name: "GitHub", theme: github },
	{ name: "Nord", theme: nord },
	{ name: "Solarized Dark", theme: solarizedDark },
	{ name: "VS 2015", theme: vs2015 },
];

const getFileIcon = (fileName) => {
	const iconSize = 18;
	const extension = fileName.split(".").pop().toLowerCase();
	switch (extension) {
		case "html":
			return <IoLogoHtml5 color={colors.red[600]} size={iconSize} />;
		case "css":
			return <IoLogoCss3 color={colors.blue[600]} size={iconSize} />;
		case "jsx":
			return <IoLogoReact color={colors.indigo[600]} size={iconSize} />;
		case "js":
			return <IoLogoJavascript color={colors.indigo[600]} size={iconSize} />;
		case "ts":
		case "tsx":
			return <SiTypescript color={colors.blue[700]} size={iconSize} />;
		case "json":
			return <SiJson color={colors.orange[500]} size={iconSize} />;
		case "md":
			return <SiMarkdown color={colors.gray[600]} size={iconSize} />;
		case "txt":
			return <AiFillFileText color={colors.gray[400]} size={iconSize} />;
		case "tailwind":
			return <SiTailwindcss color={colors.teal[500]} size={iconSize} />;
		case "vue":
			return <SiVuedotjs color={colors.green[500]} size={iconSize} />;
		case "svelte":
			return <SiSvelte color={colors.orange[600]} size={iconSize} />;
		case "py":
			return <FaPython color={colors.yellow[600]} size={iconSize} />;
		case "java":
			return <FaJava color={colors.red[600]} size={iconSize} />;
		case "php":
			return <FaPhp color={colors.purple[600]} size={iconSize} />;
		case "rb":
			return <SiRuby color={colors.red[700]} size={iconSize} />;
		case "go":
			return <SiGo color={colors.blue[400]} size={iconSize} />;
		case "rs":
			return <FaRust color={colors.orange[700]} size={iconSize} />;
		case "dockerfile":
			return <SiDocker color={colors.blue[400]} size={iconSize} />;
		case "yaml":
		case "yml":
			return <SiYaml color={colors.gray[700]} size={iconSize} />;
		case "gitignore":
			return <SiGit color={colors.red[500]} size={iconSize} />;
		case "node":
			return <FaNodeJs color={colors.green[600]} size={iconSize} />;
		default:
			return <FaFileAlt color={colors.gray[500]} size={iconSize} />;
	}
};

const CodeFileComponent = () => {
	const [selectedFile, setSelectedFile] = useState("index.html");

	const handleFileClick = (fileName) => {
		setSelectedFile(fileName);
	};

	const [theme, setTheme] = useState(atomOneDark);

	const handleThemeChange = (theme) => {
		setTheme(theme ? theme : atomOneDark);
	};

	return (
		<div className="w-full h-full relative">
			<div
				className="border border-gray-300 rounded-xl flex justify-center items-start"
				style={{
					width: "75%",
					position: "fixed",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					height: "70vh",
				}}
			>
				<div className="relative w-1/4 bg-gray-50 bg-opacity-20 h-full border-r border-gray-200">
					<div className="h-4/5 overflow-scroll w-full">
						{Object.keys(fileContents).map((file) => (
							<div
								key={file}
								onClick={() => handleFileClick(file)}
								className={`cursor-pointer flex items-start p-2 transition-all duration-300 ease-in w-full ${
									selectedFile === file
										? "bg-gray-300 bg-opacity-40 opacity-100 text-black px-3 py-2"
										: "text-gray-700"
								}`}
							>
								<div className="flex justify-around items-center gap-2">
									<div>{getFileIcon(file)}</div>
									<div>{file}</div>
								</div>
							</div>
						))}
					</div>
					<div className="group absolute bottom-0 left-0 p-4 flex flex-col cursor-pointer w-full">
						<div className="theme-container mb-2 w-0 invisible opacity-0 z-50 group-hover:visible group-hover:opacity-100 h-0 group-hover:w-60 group-hover:h-60 flex justify-start flex-col items-start transition-all duration-200 ease-in overflow-y-scroll bg-white py-4 border border-gray-300 rounded-xl shadow-xl">
							{availableThemes.map((themeOption) => (
								<button
									className={`${
										theme === themeOption.theme ? "bg-gray-100" : ""
									} my-1 p-2 rounded-md w-full text-left`}
									onClick={() => handleThemeChange(themeOption.theme)}
									key={themeOption.name}
								>
									{themeOption.name}
								</button>
							))}
						</div>
						<Settings size={24} />
					</div>
				</div>
				<div className="w-3/4 h-full relative">
					<CopyBlock
						codeBlock
						language={fileContents[selectedFile].language}
						text={fileContents[selectedFile].content}
						breakLines={true}
						theme={theme}
						wrapLies={true}
						customStyle={{
							height: "100%",
							overflow: "auto",
							borderTopLeftRadius: "0px",
							borderBottomLeftRadius: "0px",
							borderTopRightRadius: "16px",
							borderBottomRightRadius: "16px",
						}}
						showLineNumbers={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default CodeFileComponent;

export const fileContents = {
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
	"app.tsx": {
		content: `import React from 'react';
import { Button } from '@mantine/core';

const App = () => (
  <div>
    <h1>Hello TypeScript</h1>
    <Button>Hello</Button>
  </div>
);

export default App;`,
		type: "TypeScript",
		language: "tsx",
	},
	"data.json": {
		content: `{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}`,
		type: "JSON",
		language: "json",
	},
	"README.md": {
		content: `# Project Title

## Description

This is a sample project to demonstrate various file types and contents.

## Installation

Run \`npm install\` to install dependencies.

## Usage

Run \`npm start\` to start the application.`,
		type: "Markdown",
		language: "md",
	},
	"config.yaml": {
		content: `# Sample YAML Configuration

app:
  name: MyApp
  version: 1.0.0
database:
  host: localhost
  port: 5432`,
		type: "YAML",
		language: "yaml",
	},
	"script.py": {
		content: `# Sample Python Script
def greet(name):
    print(f"Hello, {name}!")

if __name__ == "__main__":
    greet("World")`,
		type: "Python",
		language: "python",
	},
	"main.java": {
		content: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
		type: "Java",
		language: "java",
	},
	"example.go": {
		content: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
		type: "Go",
		language: "go",
	},
	"app.rb": {
		content: `# Sample Ruby Script
puts 'Hello, Ruby!'`,
		type: "Ruby",
		language: "ruby",
	},
	"index.ts": {
		content: `const greeting: string = 'Hello, TypeScript!';
console.log(greeting);`,
		type: "TypeScript",
		language: "typescript",
	},
	dockerfile: {
		content: `# Sample Dockerfile
FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]`,
		type: "Dockerfile",
		language: "dockerfile",
	},
	".env": {
		content: `# Sample .env File
REACT_APP_API_URL=https://api.example.com
REACT_APP_ENV=development
DEBUG=true`,
		type: "Environment",
		language: "env",
	},
	"test.spec.ts": {
		content: `import { describe, it, expect } from 'vitest';

describe('Test Suite', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});`,
		type: "TypeScript",
		language: "typescript",
	},
	"main.cpp": {
		content: `#include <iostream>

int main() {
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}`,
		type: "C++",
		language: "cpp",
	},
	"example.sass": {
		content: `// Sample Sass File
$color: #333;

body {
  color: $color;
  background-color: lighten($color, 40%);
}`,
		type: "Sass",
		language: "sass",
	},
	"script.sh": {
		content: `#!/bin/bash
echo "Hello, Bash Script!"`,
		type: "Shell",
		language: "bash",
	},
};
