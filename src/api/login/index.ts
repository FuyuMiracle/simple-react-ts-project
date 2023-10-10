import httpRequest from "@/api/request";

interface UserInfoParam {
	//定义传参接口
	username: string;
	password: string;
}

export const postLogin = (param: UserInfoParam) => {
	//获取用户信息
	return httpRequest({
		url: "/login",
		method: "post",
		data: param,
	});
};
