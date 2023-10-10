import react from "@vitejs/plugin-react";
import path from "path";
import type { UserConfig } from "vite";

export default (): UserConfig => {
	return {
		envPrefix: "VUE_APP", //配置env环境变量的前缀名称
		plugins: [react()],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"), // 为./src配置别名，以后可用@引入文件
			},
		},
		//配置跨域的地方
		server: {
			port: 9090, //端口号
			host: true,
			open: false, //是否自动启动
			proxy: {
				"/api": {
					target: "127.0.0.1",
					changeOrigin: true, //是否跨域
					rewrite: (p) => p.replace(/^\/api/, "api"), //重写路径
				},
			},
		},
	};
};
