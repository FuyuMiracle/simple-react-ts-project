import { HomeOutlined, BorderBottomOutlined } from "@ant-design/icons";
import { LazyExoticComponent, lazy } from "react";

export interface RouterType {
	path?: string; //路由路径
	redirect?: string; //路由重定向
	element?: LazyExoticComponent<React.FC>; //懒加载组件
	requiresAuth?: boolean; //路由鉴权标识
	meta?: {
		icon: JSX.Element; //菜单图标
		label: string; //菜单名称
	};
	children?: RouterType[]; //子路由
}

const router: RouterType[] = [
	{
		path: "/",
		redirect: "/login", //路由重定向
	},
	{
		path: "/login",
		element: lazy(() => import("@/views/Login/Login")),
	},
	{
		path: "*", //匹配其他任意路由
		redirect: "/login", //路由重定向
	},
	{
		path: "/layout",
		element: lazy(() => import("@/views/Layout/index")),
		children: [
			{
				path: "/layout/home",
				element: lazy(() => import("@/views/pages/home")),
				requiresAuth: true, //路由鉴权
				meta: {
					icon: <HomeOutlined />,
					label: "home",
				},
			},
			{
				meta: {
					icon: <BorderBottomOutlined />,
					label: "测试",
				},
				children: [
					{
						path: "/layout/test1",
						element: lazy(() => import("@/views/pages/test/test1")),
						requiresAuth: true, //路由鉴权
						meta: {
							icon: <BorderBottomOutlined />,
							label: "测试1",
						},
					},
					{
						path: "/layout/test2",
						element: lazy(() => import("@/views/pages/test/test2")),
						requiresAuth: true, //路由鉴权
						meta: {
							icon: <BorderBottomOutlined />,
							label: "测试2",
						},
					},
				],
			},
		],
	},
];

export default router;
