import React from "react";
import { Button, DatePicker, Form, Input, Radio, Select, Row, Col, message } from "antd";
import "antd/dist/antd.min.css";
import _ from "lodash";

const RegistrationForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(values);
	};

	const onFinishFailed = (errorInfo) => {
		message.error("There's something went wrong! Check your inputs.");
	};

	const account_type = [
		{
			id: 1,
			label: "Administrator",
		},
		{
			id: 2,
			label: "Supplier",
		},
		{
			id: 3,
			label: "Staff",
		},
	];

	return (
		<Form
			labelCol={{
				span: 8,
			}}
			layout="horizontal"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
			style={{
				width: "100%",
			}}
		>
			<Row>
				<Col xs={{ span: 0 }} md={{ span: 4 }}></Col>
				<Col xs={{ span: 24 }} md={{ span: 16 }}>
					<Row gutter={12}>
						<Col xs={{ span: 24 }} md={{ span: 12 }} layout="vertical">
							<Form.Item
								label="First Name"
								name="firstname"
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
										message: "Please input your first name!",
									},
									{
										pattern: /^[a-zA-Z]*$/,
										message: "First name should have no number.",
									},
								]}
							>
								<Input placeholder="Enter your first name" />
							</Form.Item>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Form.Item
								label="Middle Name"
								name="middlename"
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
										message: "Please input your middle name!",
									},
									{
										pattern: /^[a-zA-Z]*$/,
										message: "Middle name should have no number.",
									},
								]}
							>
								<Input placeholder="Enter your middle name" />
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={12}>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Form.Item
								label="Last Name"
								name="lastname"
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
										message: "Please input your last name!",
									},
									{
										pattern: /^[a-zA-Z]*$/,
										message: "Last name should have no number.",
									},
								]}
							>
								<Input placeholder="Enter your last name" />
							</Form.Item>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Form.Item
								label="Email"
								name="email"
								labelCol={{
									span: 24,
									//offset: 2
								}}
								wrapperCol={{
									span: 24,
								}}
								hasFeedback
								rules={[
									{
										type: "email",
										required: true,
										message: "Please enter your email!",
									},
									{ min: 7 },
									{ max: 30 },
								]}
							>
								<Input placeholder="Enter your email" />
							</Form.Item>
						</Col>
						<Col xs={{ span: 24 }} md={{ span: 12 }}>
							<Form.Item
								label="Birth Date"
								name="birthdate"
								labelCol={{
									span: 24,
									//offset: 2
								}}
								wrapperCol={{
									span: 24,
								}}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please enter your birth date!",
									},
								]}
							>
								<DatePicker style={{ width: "100%" }} />
							</Form.Item>
						</Col>
					</Row>
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
					<Row gutter={0}>
						<Col xs={{ span: 24 }} md={{ span: 24 }}>
							<Form.Item
								label="Gender"
								name="gender"
								labelCol={{
									span: 24,
									//offset: 2
								}}
								wrapperCol={{
									span: 24,
								}}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please select your gender!",
									},
								]}
							>
								<Radio.Group style={{ width: "100%" }}>
									<Radio value="male">Male</Radio>
									<Radio value="memale">Female</Radio>
								</Radio.Group>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={12}>
						<Col xs={{ span: 24 }} md={{ span: 24 }}>
							<Form.Item
								label="Account Type"
								name="accounttype"
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
										message: "Please select your account type!",
									},
								]}
							>
								<Select placeholder="Select your account type">
									{account_type.map((value, index) => (
										<Select.Option key={index} value={value.id}>
											{value.label}
										</Select.Option>
									))}
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Col>
				<Col xs={{ span: 0 }} md={{ span: 4 }}></Col>
			</Row>
		</Form>
	);
};

export default RegistrationForm;
