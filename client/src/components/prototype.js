import { PopupContext } from "../utils/package";

export default () => {
	const popup = React.useContext(PopupContext);
	return <pre>go away warning!</pre>;
};
