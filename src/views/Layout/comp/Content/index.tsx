import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./index.module.less";
const App: React.FC = () => {
	return (
		<Content className={styles["fuyu-layout-content"]}>
			<Outlet></Outlet>
		</Content>
	);
};

export default App;
