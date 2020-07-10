import WrapperTodo from "../components/wrapper/WrapperTodo";
import LayoutDefault from "../layouts/default";
import DialogFormTodo from "../components/dialog/DialogFormTodo";
const TodoPage = (props) => {
	return (
		<LayoutDefault>
			<WrapperTodo></WrapperTodo>
			<DialogFormTodo></DialogFormTodo>
		</LayoutDefault>
	);
};

// export async function getServerSideProps(ctx) {
// 	const res = await fetch("http://localhost:8080/api/todo").then((res) =>
// 		res.json()
// 	);
// 	return {
// 		props: res,
// 	};
// }

export default TodoPage;
