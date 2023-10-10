import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
	console.log("Home---渲染了");
	const navigate = useNavigate();
	const handlerLogout = () => {
		navigate("/login");
	};
	const handlerNavigateToTest = () => {
		navigate("/layout/test2");
	};

	return (
		<div>
			<p>我是 Home</p>
			<Button onClick={handlerLogout}>退出登录</Button>
			<Button onClick={handlerNavigateToTest}>跳转至 测试2</Button>
		</div>
	);
};

export default Home;
