import React, { useEffect, useState, useRef } from "react";

import { Form, Input, Row, Col, message } from "antd";
import { Typography, Box, Button } from "@mui/material";
import "antd/dist/antd.min.css";
import useStyles from "./style";
import { set } from "lodash";

const ForgotPassword = () => {
	const classes = useStyles();
	const [first, setFirst] = useState(true);
	const [second, setSecond] = useState(false);
	const [third, setThird] = useState("");
	const [fourth, setFourth] = useState(false);
	const [codex, setCode] = useState(null);
	const [buttonLabel, setButtonLabel] = useState("Send");
	const [isUser, setUser] = useState(null);

	const onFinish = (values) => {
		console.log(values);
		setCode(Math.floor(100000 + Math.random() * 900000));
		setFirst(false);
		setSecond(true);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const onFinish2 = (values) => {
		if (values.code == String(codex)) {
			setThird(true);
			setSecond(false);
		} else {
			console.log("Failed");
		}
	};
	console.log(codex);
	const sendCode = () => {
		setButtonLabel("Resend");
		message.success("Please check the code at your email patiently");
		emailjs
			.send
			//service
			//template
			();
	};

	const onFinishFailed2 = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};
	const onFinish3 = (values) => {
		console.log(values);
	};

	const onFinishFailed3 = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Box className={classes.loginContainer}>
			<Box className={classes.loginCard}>
				<Box paddingBottom="20px" paddingTop="20px">
					<Typography fontSize="32px">Forgot Password</Typography>
				</Box>

				{first ? (
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
									required: true,
									message: "Please input your email!",
								},
								{ whitespace: true },
								{ min: 3 },
								{ max: 26 },
							]}
							hasFeedback
						>
							<Input placeholder="Email" />
						</Form.Item>

						<Form.Item>
							<Button type="submit" variant="contained">
								Confirm
							</Button>
						</Form.Item>
					</Form>
				) : null}
				{second ? (
					<>
						<Typography fontSize="16px">Please check the 6 digits in your email</Typography>
						<Form
							name="basic"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							initialValues={{
								remember: true,
							}}
							onFinish={onFinish2}
							onFinishFailed={onFinishFailed2}
							autoComplete="off"
							className={classes.Form}
						>
							<Form.Item
								label="6-digits code"
								name="code"
								rules={[
									{
										required: true,
										message: "Please input your email!",
									},

									{ min: 6 },
									{ max: 6 },
								]}
								hasFeedback
							>
								<Input placeholder="6-digits code" />
							</Form.Item>

							<Form.Item>
								<Button type="submit" variant="contained">
									Submit
								</Button>
							</Form.Item>
						</Form>{" "}
						<Button onClick={sendCode}>{buttonLabel}</Button>
					</>
				) : null}
				{third ? (
					<>
						<Typography fontSize="16px">You can now reset your password</Typography>
						<Form
							name="basic"
							labelCol={{ span: 24 }}
							wrapperCol={{ span: 24 }}
							onFinish={onFinish3}
							onFinishFailed={onFinishFailed3}
							autoComplete="off"
							className={classes.Form}
							initialValues={{ email: isUser }}
						>
							<Form.Item hidden label="Email" name="email">
								<Input value={isUser} />
							</Form.Item>
							<Row gutter={12}>
								<Col xs={{ span: 24 }} md={{ span: 12 }}>
									<Form.Item
										label="Password"
										name="password"
										labelCol={{
											span: 24,
										}}
										wrapperCol={{
											span: 24,
										}}
										hasFeedback
										rules={[
											{
												required: true,
												message: "Please input your password!",
											},
											{ whitespace: true },
											{ min: 8 },
											{ max: 26 },
											{
												pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,26}$/,
												message: "Must contain 1 uppercase, 1 lowercase, 1 number, and 1 special character.",
											},
										]}
									>
										<Input.Password placeholder="********" />
									</Form.Item>
								</Col>
								<Col xs={{ span: 24 }} md={{ span: 12 }}>
									<Form.Item
										label="Confirm Password"
										name="confirmpassword"
										labelCol={{
											span: 24,
											//offset: 2
										}}
										wrapperCol={{
											span: 24,
											//offset: 2
										}}
										hasFeedback
										dependencies={["password"]}
										rules={[
											{
												required: true,
											},
											({ getFieldValue }) => ({
												validator(_, value) {
													if (!value || getFieldValue("password") === value) {
														return Promise.resolve();
													}

													return Promise.reject("Passwords does not matched.");
												},
											}),
										]}
									>
										<Input.Password placeholder="********" />
									</Form.Item>
								</Col>
							</Row>

							<Form.Item>
								<Button type="submit" variant="contained">
									Submit
								</Button>
							</Form.Item>
						</Form>{" "}
					</>
				) : null}
				{fourth ? <Typography fontSize="16px">You have successfully reset your password</Typography> : null}
			</Box>
		</Box>
	);
};

export default ForgotPassword;
