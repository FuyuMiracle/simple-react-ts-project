import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Test2: React.FC = () => {
	const navigate = useNavigate();
	const handlerNavigateToTest = () => {
		navigate("/layout/home");
	};
	return (
		<div>
			<p>我是 测试2</p>
			<Button onClick={handlerNavigateToTest}>跳转至 Home</Button>
		</div>
	);
};

export default Test2;
