import { PackageContext } from "../../utils/package";
import axios from "axios";

export default (props) => {
	const ctx = React.useContext(PackageContext);

	const todo = props.data;
	const parsed = new Date(todo.deadline);

	const handlerClick = () => {
		axios
			.delete("http://54.169.149.237:8000/api/todo", { data: { id: todo.id } })
			.then(({ data }) => ctx.delTodo(data.id))
			.catch((err) => console.error(err));
	};
	return (
		<div className="sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg flex flex-wrap m-6 bg-white shadow-lg">
			<div className="w-full flex flex-wrap justify-between p-4">
				<div className="flex justify-between items-center w-full">
					<span className="font-bold text-gray-700 text-lg">
						{todo.title || "..."}
					</span>
					<span className="ml-1 cursor-pointer" onClick={() => handlerClick()}>
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
						</svg>
					</span>
				</div>
				<div>
					<button>
						<i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
					</button>
				</div>
			</div>

			<div className="w-full px-4 py-3 text-gray-600 ">
				{todo.note || "..."}
			</div>

			<div className="w-full px-5 py-2 flex justify-around bg-blue-500 rounded-lg rounded-t-none">
				<span className="text-sm text-white py-2 px-3 rounded">Deadline</span>
				<span className="text-sm text-white py-2 px-3 rounded">
					{todo.deadline
						? parsed.getFullYear() +
						  "/" +
						  parsed.getMonth() +
						  "/" +
						  parsed.getDate()
						: "xx-xx-xxxx"}
				</span>
			</div>
		</div>
	);
};
