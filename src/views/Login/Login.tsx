import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { postLogin } from "@/api/login/index";
import { useGlobalStore } from "@/store";
import styles from "./index.module.less";
const Login: React.FC = () => {
	const navigate = useNavigate();
	const { setUserInfo, setToken } = useGlobalStore();

	type FieldType = {
		username: string;
		password: string;
		// remember: string;
	};

	const onFinish = async (form: FieldType) => {
		console.log("Success:", form);
		//请求登录接口
		const result: any = await postLogin({
			username: form.username,
			password: form.password,
		});
		//获取登录成功后的信息存储至mobx
		const { username, token } = result;
		setUserInfo({
			username: username,
		});
		setToken(token);
		//跳转路由
		navigate("/layout/home");
	};

	return (
		<div className={styles["login"]}>
			<div className={styles["login-box"]}>
				<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					style={{ maxWidth: 600 }}
					initialValues={{ username: "admin", password: "123456" }}
					onFinish={onFinish}
					autoComplete="off"
				>
					<Form.Item<FieldType>
						label="Username"
						name="username"
						rules={[
							{
								required: true,
								message: "请输入用户名称!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item<FieldType>
						label="Password"
						name="password"
						rules={[
							{
								required: true,
								message: "请输入密码!",
							},
						]}
					>
						<Input.Password />
					</Form.Item>

					{/* <Form.Item<FieldType>
						name="remember"
						valuePropName="checked"
						wrapperCol={{ offset: 8, span: 16 }}
					>
						<Checkbox>Remember me</Checkbox>
					</Form.Item> */}

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type="primary" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
