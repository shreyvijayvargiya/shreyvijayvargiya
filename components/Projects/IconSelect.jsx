import React, { useState } from "react";
import { Box, Modal, Button, SimpleGrid, Center } from "@mantine/core";
import * as lucideIcons from "lucide-react";
import colors from "tailwindcss/colors";

const iconNames = Object.keys(lucideIcons).slice(1, 200);

const IconSelect = () => {
	const [activeIcon, setActiveIcon] = useState("Smile");
	const [iconPickerOpened, setIconPickerOpened] = useState(false);

	const toggleIconPicker = () => {
		setIconPickerOpened((prev) => !prev);
	};

	const handleIconClick = (iconName) => {
		setActiveIcon(iconName);
		setIconPickerOpened(false);
	};

	const ActiveIconComponent = lucideIcons[activeIcon];

	return (
		<Box className="flex justify-center items-center h-screen w-full overflow-hidden flex-col">
			<Center mb="md">
				<Button
					variant="outline"
					size="md"
					onClick={toggleIconPicker}
					color="gray"
				>
					{activeIcon && (
						<ActiveIconComponent size={24} color={colors.gray[900]} />
					)}
				</Button>
			</Center>
			<Center>
				<div>Click to select icon</div>
			</Center>

			<Modal
				opened={iconPickerOpened}
				onClose={toggleIconPicker}
				title="Pick an icon"
				color="dark"
				centered
				width={400}
				size="lg"
				position="center"
				classNames={{
					modal: "h-1/2 overflow-y-auto mx-auto px-0",
					body: "border-t border-gray-200 p-4",
					header: "px-4",
				}}
			>
				<SimpleGrid cols={6}>
					{iconNames.map((iconName) => {
						const IconComponent = lucideIcons[iconName];
						if (IconComponent)
							return (
								<Button
									variant="hover"
									key={iconName}
									color="dark"
									onClick={() => handleIconClick(iconName)}
								>
									<IconComponent size={28} color={colors.gray[800]} />
								</Button>
							);
					})}
				</SimpleGrid>
			</Modal>
		</Box>
	);
};

export default IconSelect;
