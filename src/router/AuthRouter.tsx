import { useGlobalStore } from "@/store";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
	children: JSX.Element;
}

const AuthRouter: React.FC<Props> = ({ children }) => {
	console.log("鉴权中....");
	const { getToken } = useGlobalStore();
	const path = useLocation().pathname;
	if (!getToken) {
		//检查token
		return <Navigate to="/login" replace></Navigate>;
	} else if (path === "/layout") {
		//框架路由重定向
		return <Navigate to="/layout/home" replace></Navigate>;
	}
	//通过检查则返回插槽内容
	return children;
};

export default AuthRouter;
