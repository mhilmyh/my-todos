import { PopupContext } from "../utils/package";

export default () => {
	const popup = React.useContext(PopupContext);
	console.log(popup);
	return <pre>go away warning!</pre>;
};
