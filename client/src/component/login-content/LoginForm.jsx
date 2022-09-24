import React, { useState } from "react";
import { Form, Input, Row, Col, message } from "antd";
import { Typography, Box, Button, Link } from "@mui/material";
import "antd/dist/antd.min.css";
import useStyles from "./styles";

const LoginForm = (props) => {
	const classes = useStyles();

	const { showRegistration } = props;

	const onFinish = (values) => {
		console.log(values);
	};

	const onFinishFailed = (error) => {
		console.log("Failed:", error);
	};

	return (
		<Box className={classes.loginCard}>
			<Box paddingBottom="20px" paddingTop="20px">
				<Typography fontSize="32px">Welcome to CHARS</Typography>
			</Box>
			<Form
				name="basic"
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				className={classes.Form}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							message: "Please input your email!",
							required: true,
						},
						{ whitespace: true },
						{ min: 3 },
						{ max: 26 },
					]}
					hasFeedback
				>
					<Input placeholder="Email" />
				</Form.Item>
				<Form.Item
					label="Password"
					name="password"
					rules={[
						{
							required: true,
							message: "Please input your password!",
						},
					]}
				>
					<Input.Password placeholder="********" />
				</Form.Item>
				<Row gutter={8}>
					<Col span={24}>
						<Form.Item>
							<Typography onClick={showRegistration} sx={{ "&:hover": { cursor: "pointer" } }}>
								Don't have an account? Sign up
							</Typography>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={8}>
					<Col span={24}>
						<Form.Item>
							<Typography component={Link} href="/forgot-password" sx={{ "&:hover": { cursor: "pointer" } }}>
								Forgot Password?
							</Typography>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item>
					<Button type="submit" color="success" variant="contained">
						Sign In
					</Button>
				</Form.Item>
			</Form>
		</Box>
	);
};

export default LoginForm;
