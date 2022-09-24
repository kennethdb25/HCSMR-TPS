import React, { useState } from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";
import { Drawer, Space, Button as AntButton } from "antd";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const LoginContent = () => {
	const [visible, setVisible] = useState(false);

	const classes = useStyles();

	const showRegistration = () => {
		setVisible(true);
	};

	const onClose = () => {
		setVisible(false);
	};

	return (
		<div className={classes.loginBackground}>
			<Box className={classes.loginContainer}>
				<LoginForm showRegistration={showRegistration} />
				<Drawer
					title="Register your account"
					placement="right"
					width={700}
					onClose={onClose}
					visible={visible}
					height={600}
					style={{
						display: "flex",
						justifyContent: "center",
					}}
					extra={<Space></Space>}
				>
					<RegistrationForm />
				</Drawer>
			</Box>
		</div>
	);
};

export default LoginContent;
