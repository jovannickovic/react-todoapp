import React from "react";
import TodoItem from "./TodoItem";

// Stateless Functional Component
export default function TodoList({ todos, markComplete, deleteTodo }) {
	const listStyles = {
		backgroundColor: "#fff",
		borderRadius: "5px",
		boxShadow: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
		listStyle: "none",
		margin: "50px auto 0",
		paddingLeft: "0"
	};

	return (
		<ul style={listStyles}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					markComplete={markComplete}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
}
