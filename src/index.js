import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
// Additional dependencies
import uuid from "uuid";

import "./styles.css";

// Stateful Class Component
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		// Getting initial 4 resources from the API
		fetch("https://jsonplaceholder.typicode.com/todos?_limit=4")
			.then(res => res.json())
			.then(json => {
				this.setState({
					todos: json
				});
			});
	}

	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	addTodo = title => {
		// Faking new resource creation
		fetch("https://jsonplaceholder.typicode.com/todos", {
			method: "POST",
			body: JSON.stringify({
				title,
				completed: false
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
			.then(res => res.json())
			.then(json => {
				// Generating random id
				json.id = uuid.v4();
				this.setState({
					todos: [...this.state.todos, json]
				});
			});
	};

	deleteTodo = id => {
		// Faking the resource deletion
		fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: "DELETE"
		}).then(res => {
			this.setState({
				todos: this.state.todos.filter(todo => todo.id !== id)
			});
		});
	};

	render() {
		return (
			<div className="App">
				<h1>TodoApp w/ React</h1>
				<TodoList
					todos={this.state.todos}
					markComplete={this.markComplete}
					deleteTodo={this.deleteTodo}
				/>
				<AddTodo addTodo={this.addTodo} />
			</div>
		);
	}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
