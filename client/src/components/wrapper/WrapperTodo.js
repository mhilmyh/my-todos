import CardTodo from "../card/CardTodo";
import { PackageContext } from "../../utils/package";
import axios from "axios";

export default () => {
	const ctx = React.useContext(PackageContext);

	React.useEffect(() => {
		console.log("Effect WrapperTodo");
		axios.get("http://54.169.149.237:8000/api/todo").then(({ data }) => {
			ctx.initTodo(data.todos);
		});
	}, []);

	return (
		<div className="flex flex-wrap justify-center">
			{ctx.todos.length > 0 ? (
				ctx.todos.map((todo) => <CardTodo key={todo.id} data={todo}></CardTodo>)
			) : (
				<div className="flex flex-wrap justify-center">
					<p className="p-10 text-gray-500 font-bold">Belum ada todo</p>
				</div>
			)}
		</div>
	);
};
