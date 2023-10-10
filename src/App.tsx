import { Navigate, Route, Routes } from "react-router-dom";
import router, { RouterType } from "./router";
import { Suspense, lazy } from "react";
import React from "react";
import RouteLoading from "@/router/RouteLoading";
const AuthRouter = lazy(() => import("./router/AuthRouter.tsx"));

//定义一个递归渲染Route的函数
function renderRoute(data: RouterType[]) {
	return (
		<>
			{data.map((item, i) => {
				return (
					<React.Fragment key={item.path + i}>
						{item.path ? (
							<Route
								path={item.path}
								element={
									<Suspense fallback={<RouteLoading />}>
										{item.element ? (
											item.requiresAuth ? (
												<AuthRouter>
													<item.element />
												</AuthRouter>
											) : (
												<item.element />
											)
										) : item.redirect ? (
											<Navigate to={item.redirect} />
										) : (
											<></>
										)}
									</Suspense>
								}
							>
								{item.children ? (
									renderRoute(item.children)
								) : (
									<></>
								)}
							</Route>
						) : (
							<>
								{item.children ? (
									renderRoute(item.children)
								) : (
									<></>
								)}
							</>
						)}
					</React.Fragment>
				);
			})}
		</>
	);
}

function App() {
	return <Routes>{renderRoute(router)}</Routes>;
}

export default App;
