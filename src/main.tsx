import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/style/global.less"; //引用全局样式

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
