import React from "react";

export const PackageContext = React.createContext();

const PackageProvider = (props) => {
	const [popup, setPopup] = React.useState(false);
	const [todos, setTodos] = React.useState([]);

	const updatePopup = () => setPopup((old) => !old);
	const initTodo = (todos) => setTodos(() => [...todos]);
	const addTodo = (todo) => setTodos((old) => [...old, todo]);
	const delTodo = (id) =>
		setTodos((old) => old.filter((item) => item.id !== id));
	const val = { popup, updatePopup, todos, initTodo, addTodo, delTodo };
	return (
		<PackageContext.Provider value={val}>
			{props.children}
		</PackageContext.Provider>
	);
};

export default PackageProvider;
