import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Test1: React.FC = () => {
	console.log("Test1---渲染了");
	const navigate = useNavigate();
	const handlerNavigateToTest = () => {
		navigate("/layout/test2");
	};
	return (
		<div>
			<p>我是 测试1</p>
			<Button onClick={handlerNavigateToTest}>跳转至 测试2</Button>
		</div>
	);
};

export default Test1;
