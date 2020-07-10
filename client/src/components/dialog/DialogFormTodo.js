import FormTodo from "../form/FormTodo";
import { PackageContext } from "../../utils/package";

export default () => {
	const ctx = React.useContext(PackageContext);
	return (
		<div
			className={
				"fixed top-0 right-0 left-0 z-10 " + (ctx.popup ? "" : "hidden")
			}
		>
			<FormTodo></FormTodo>
		</div>
	);
};
