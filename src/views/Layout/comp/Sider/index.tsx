import React from "react";
import Sider from "antd/es/layout/Sider";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
interface Props {
	collapsed: boolean; //是否收缩左侧菜单
	menuData: Array<SiderMenu>; //框架的嵌套子路由数据
}

const App: React.FC<Props> = (props) => {
	const { collapsed, menuData } = props;
	const navigate = useNavigate();

	/**
	 * 根据当前路由设置选中的Menu的菜单项
	 */
	const currRoutePath = useLocation().pathname;
	let selectedKeys: [string] = [""];
	function getCurrRouteKey(data: Array<SiderMenu>): void {
		for (let i = 0; i < data.length; i++) {
			const item = data[i];
			if (item.path === currRoutePath) {
				selectedKeys = [item.key.toString()];
				break;
			} else if (item.children && item.children.length) {
				getCurrRouteKey(item.children);
				break;
			}
		}
	}
	getCurrRouteKey(menuData);

	//菜单被选中时触发
	const onSelectMenu = ({ item }) => {
		navigate(item.props.path);
	};

	const onOpenChange = (openKeys: string[]) => {
		console.log(openKeys);
	};
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<Menu
				theme="dark"
				mode="inline"
				selectedKeys={selectedKeys}
				items={menuData}
				onSelect={onSelectMenu}
				onOpenChange={onOpenChange}
			/>
		</Sider>
	);
};

export default App;
