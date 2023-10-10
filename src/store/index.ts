import React from "react";
import globalStore from "./globalStore";

//导出globalStore
export const globalContext = React.createContext(globalStore);
export const useGlobalStore = () => React.useContext(globalContext);
