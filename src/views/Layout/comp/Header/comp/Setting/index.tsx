import { Drawer } from "antd";
import React from "react";

interface Props {
	isOpen: boolean;
	onClose: (open: boolean) => void;
}
const Setting: React.FC<Props> = (props) => {
	const { isOpen, onClose } = props;
	const handlerCloseDrawer = () => {
		onClose(isOpen);
	};
	return (
		<Drawer
			title="Basic Drawer"
			placement="right"
			onClose={handlerCloseDrawer}
			open={isOpen}
		>
			<p>Some contents...</p>
			<p>Some contents...</p>
			<p>Some contents...</p>
		</Drawer>
	);
};

export default Setting;
