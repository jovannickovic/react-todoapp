import React, { useState } from "react";

import "./AddTodo.css";

// Stateful Functional Component
function AddTodo(props) {
	// Hooks
	const [title, setTitle] = useState("");

	const handleChange = e => {
		setTitle(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		props.addTodo(title);
		setTitle("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Add New Todo..."
				name="title"
				autoComplete="off"
				value={title}
				onChange={handleChange}
			/>
			<input type="submit" value="+" />
		</form>
	);
}

export default AddTodo;
