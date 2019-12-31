import React from "react";

import "./TodoItem.css";

// Stateless Functional Component
function TodoItem(props) {
	return (
		<li
			style={{
				textDecoration: props.todo.completed ? "line-through" : "none"
			}}
		>
			<input
				type="checkbox"
				checked={props.todo.completed}
				onChange={props.markComplete.bind(this, props.todo.id)}
			/>
			{props.todo.title}
			<button onClick={props.deleteTodo.bind(this, props.todo.id)}>
				&nbsp;
			</button>
		</li>
	);
}

export default TodoItem;
