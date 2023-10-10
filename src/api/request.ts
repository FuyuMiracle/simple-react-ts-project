import axios from "axios";

// 创建一个axios实例
const service = axios.create({
	baseURL: import.meta.env.VUE_APP_API_BASE_URL, // 所有请求地址的前缀部分
	timeout: 6000, // 请求超时时间毫秒
	withCredentials: true, // 异步请求携带cookie
	// headers: { // 设置后端需要传参的类型
	//     Content-Type: 'application/x-www-form-urlencoded;charset=UTF-8',
	// }
});

//添加请求拦截器
service.interceptors.request.use(
	(config) => {
		console.log("请求之前设置loading....", config);
		// 在发送请求之前做些什么

		//获取token，每次请求都带上token
		// const access_token = y9_storage.getObjectItem(settings.siteTokenKey, 'access_token');
		// if (access_token) {
		//     config.headers['Authorization'] = 'Bearer ' + access_token;
		// }

		return config;
	},
	(error) => {
		// 对请求错误做些什么
		console.log(error);
		return Promise.reject(error);
	}
);

//添加响应拦截器
service.interceptors.response.use(
	(response) => {
		console.log("请求响应成功取消loading....", response);
		// 2xx范围内的状态码都会触发该函数
		// 对响应数据做些什么
		if (response.data) {
			const { code, data } = response.data;

			switch (code) {
				case 200:
					return data;
			}
		}

		return Promise.reject(response);
	},
	(error) => {
		// 超出2xx范围内的状态码都会触发该函数
		// 对响应错误做些什么
		console.log(error);
		return Promise.reject(error);
	}
);

export default service;
