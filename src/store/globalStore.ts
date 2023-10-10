import { makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
class globalStore {
	token: Token = null;
	userInfo: UserInfo = {
		username: "访客",
	};

	constructor() {
		makeAutoObservable(this);
		makePersistable(this, {
			name: "globalStore",
			properties: ["token", "userInfo"],
			storage: window.sessionStorage,
		});
	}

	get getToken() {
		return this.token;
	}

	get getUserInfo() {
		return this.userInfo;
	}

	setToken = (token: Token) => {
		this.token = token;
	};

	setUserInfo = (userInfo: UserInfo) => {
		Object.assign(this.userInfo, userInfo);
	};
}

export default new globalStore();
