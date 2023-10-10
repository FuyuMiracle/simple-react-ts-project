import { Avatar, Button, Modal } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import {
	SettingOutlined,
	LogoutOutlined,
	ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useGlobalStore } from "@/store";
import { useNavigate } from "react-router-dom";

interface Props {
	collapsed: boolean;
	changeCollapsed: (collapsed: boolean) => void;
}
const App: React.FC<Props> = (props) => {
	const { getUserInfo, setToken, setUserInfo } = useGlobalStore();

	//收缩|展开左侧菜单
	const { collapsed, changeCollapsed } = props;

	const navigate = useNavigate();
	//点击操作按钮
	const onAction = (type: string) => {
		switch (type) {
			case "collapsed":
				changeCollapsed(collapsed);
				break;
			case "logout":
				Modal.confirm({
					title: "退出登录",
					icon: <ExclamationCircleOutlined />,
					content: "您确定要退出登录吗？",
					okText: "确认",
					cancelText: "取消",
					onOk: () => {
						setToken(null);
						setUserInfo({ username: "" });
						navigate("/login");
					},
				});
				break;
			case "setting":
				break;
		}
	};

	return (
		<Header className={styles["fuyu-layout-header"]}>
			<Button
				type="text"
				icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={() => onAction("collapsed")}
				className={styles["collapsed-icon"]}
			/>
			<div className={styles["fuyu-layout-header-right"]}>
				<div
					className={styles["action-item"]}
					onClick={() => onAction("logout")}
				>
					<LogoutOutlined />
					<span className={styles["action-item-text"]}>退出登录</span>
				</div>
				<div
					className={styles["action-item"]}
					onClick={() => onAction("setting")}
				>
					<SettingOutlined />
					<span className={styles["action-item-text"]}>设置</span>
				</div>
				<div className={styles["action-item"]}>
					{getUserInfo.username}
				</div>
				<Avatar size={42}>{getUserInfo.username}</Avatar>
			</div>
		</Header>
	);
};

export default App;
