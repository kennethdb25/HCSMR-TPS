import React, { useState } from "react";
import { Avatar, Box, Button, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useStyles } from "./style";

function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}
function stringAvatar(name) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(" ")[0][0]}`,
	};
}

const Profile = () => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = useState(null);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const dropDownMenu = [
		{ label: "Account", icon: <SettingsIcon /> },
		{ label: "Logout", icon: <LogoutIcon /> },
	];
	return (
		<Box>
			<Button
				className={classes.menuColor}
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				starticon={<Avatar {...stringAvatar("Ashley Otchengco")} />}
			>
				<Avatar {...stringAvatar("Ashley Otchengco")} />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{dropDownMenu.map((item, i) => (
					<MenuItem key={i} component={ListItem} onClick={item.label === "Logout" ? () => console.log("Logout") : handleClose}>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.label}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};

export default Profile;
