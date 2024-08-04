import React, { useState } from "react";
import { Select, Group, Box, Text } from "@mantine/core";
import * as lucideIcons from "lucide-react";
import colors from "tailwindcss/colors";

const iconNames = Object.keys(lucideIcons).slice(0, 50);

const IconSelect = ({ getSelectedIconValue }) => {
	const [selectedIcon, setSelectedIcon] = useState(null);

	const iconOptions = iconNames.map((iconName) => {
		const IconComponent = lucideIcons[iconName];
		return {
			value: iconName,
			label: iconName,
			icon: <IconComponent size={20} />,
		};
	});

	const handleSelectChange = (value) => {
		setSelectedIcon(value);
		getSelectedIconValue(lucideIcons[selectedIcon]);
	};

	return (
		<Box>
			<Select
				placeholder="Select an icon"
				data={iconOptions}
				size="xs"
				classNames={{
					input: "focus:border focus:border-black",
					item: "selected:bg-gray-800",
				}}
				itemComponent={({ value, label, icon, ...others }) => (
					<Group noWrap {...others}>
						{icon}
						{label}
					</Group>
				)}
				styles={(theme, params) => ({
					item: {
						"&[data-selected]": {
							backgroundColor: theme.colors.gray[800],
							color: theme.white,
						},
					},
				})}
				onChange={handleSelectChange}
			/>
			{selectedIcon && (
				<Group position="left" my="xs">
					{React.createElement(lucideIcons[selectedIcon], {
						size: 24,
						color: colors.gray[800],
					})}
				</Group>
			)}
		</Box>
	);
};

export default IconSelect;
