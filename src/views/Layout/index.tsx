import React, { useState } from "react";
import { Layout } from "antd";
import Sider from "./comp/Sider";
import Header from "./comp/Header";
import Content from "./comp/Content";
import styles from "./index.module.less";
import router, { RouterType } from "@/router/index";
const App: React.FC = () => {
	//是否展开左侧菜单
	const [collapsed, setCollapsed] = useState(false);
	const changeCollapsed = () => {
		setCollapsed(!collapsed);
	};

	let menuData: Array<SiderMenu> = [];

	/**格式化菜单数据 */
	function formatMenuData(data: RouterType[], parentKey: number) {
		const result: Array<SiderMenu> = [];
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			const route: SiderMenu = {
				key: parentKey + i + 1,
				icon: item.meta.icon,
				label: item.meta.label,
				path: item.path,
			};

			if (item.children && item.children.length) {
				route.children = formatMenuData(item.children, route.key);
			}
			result.push(route);
		}

		return result;
	}

	for (let i = 0; i < router.length; i++) {
		const route = router[i];
		if (route.path == "/layout" && route.children?.length) {
			menuData = formatMenuData(route.children, 0);
			break;
		}
	}

	return (
		<Layout className={styles["fuyu-layout"]}>
			<Sider collapsed={collapsed} menuData={menuData}></Sider>
			<Layout>
				<Header
					collapsed={collapsed}
					changeCollapsed={changeCollapsed}
				></Header>
				<Content></Content>
			</Layout>
		</Layout>
	);
};

export default App;
